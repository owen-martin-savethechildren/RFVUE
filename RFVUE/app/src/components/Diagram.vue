<template>
    <v-container>
        <v-row class="text-center">
        </v-row>
        <v-row>
            <v-col class="col-12">
                <div mdg-header>
                    <div mdg-label>Diagram Title: </div>
                    <div contenteditable="true" mdg-title=""></div>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="col-12">
                <div class="" ref="canvas" mdg-body @click.right="ShowMenu" @click="ctx.hide()"></div>
            </v-col>
        </v-row>

        <div mdg-ctx>
            <div mdg-ctx-menu="n" @click="AddPropertyMenu($event, null)">New Model</div>
            <div mdg-ctx-menu="r" @click="refresh()">Refresh</div>
            <div mdg-ctx-menu="c" @click="ListData = null; refresh();">Clear</div>
        </div>

        <!-- Add Property pop up menu -->
        <div mdg-etx>
            <div mdg-etx-header contenteditable="true"></div>
            <div mdg-etx-body="">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>PK</th>
                            <th>Unique</th>
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div mdg-etx-footer>
                <div mdg-etx-button="p" @click="AddProperty">Add Property</div>
                <div mdg-etx-button="d" @click="remove">Delete</div>
                <div mdg-etx-button="c" @click="etx.hide()">Cancel</div>
                <div mdg-etx-button="s" @click="SaveModel">Save</div>
            </div>
        </div>
        <!-- Add Property pop up menu end -->
    </v-container>
</template>

<script>
    export default {
        name: "Diagram",
        props: ['DiagramData'],
        data() {
            return {
                showAddProp: false,
                showMenu: false,
                h: null,
                ht: null,
                ctx: null,
                etx: null,
                Data: null,
                ListData: null,
                dataType: ["string", "int", "datetime", "bool"],
                graph: null,
                paper: null
            }
        },
        created() {
        },
        mounted() {
            const self = this;
            $(this.$el).css('font-family', 'monospace');
            $(this.$refs.canvas).css('font-family', 'monospace');
            $(this.$el).css('position', 'relative');
            this.h = $(this.$el).find('[mdg-header]');
            this.ht = $(this.$el).find('[mdg-header]>[mdg-title]');
            this.ctx = $(this.$el).find("[mdg-ctx]");
            this.etx = $(this.$el).find('[mdg-etx]');
            //console.log(`${typeof (this.DiagramData)} - ${this.DiagramData} ---`, this.DiagramData === null);

            this.Data = this.DiagramData != (null || undefined) ? this.DiagramData :
                { DiagramId: this.guid(), DiagramName: 'Diagram 1', Models: null };
            this.ListData = this.Data.Models;

            this.graph = new joint.dia.Graph();
            let graph = this.graph;
            this.paper = new joint.dia.Paper({
                el: this.$refs.canvas,
                width: 2000,
                height: 2000,
                gridSize: 1,
                model: graph
            });
            joint.V(this.paper.viewport).translate(20, 20);

            function prepareData(graph, dagre_graph) {
                let dagreGraph = dagre_graph;
                // For each element.
                _.each(graph.getElements(), function (cell) {
                    if (dagreGraph.hasNode(cell.id)) return;
                    dagreGraph.setNode(cell.id.toString(), {
                        width: cell.get('size').width,
                        height: cell.get('size').height,
                        rank: cell.get('rank')
                    });
                });
                // For each link.
                _.each(graph.getLinks(), function (cell) {
                    if (dagreGraph.hasEdge(cell.id)) return;
                    let sourceId = cell.get('source').id.toString();
                    let targetId = cell.get('target').id.toString();
                    dagreGraph.setEdge(sourceId, targetId, {
                        label: cell.id,
                        minLen: cell.get('minLen') || 1
                    });
                });
                return dagreGraph;
            };
            joint.layout.DirectedGraph.layout = function (graph, opt) {
                opt = opt || {};
                let dGraph = new dagre.graphlib.Graph();
                let inputGraph = prepareData(graph, dGraph);
                let runner = dGraph.setGraph({});
                if (opt.debugLevel) {
                    runner.debugLevel(opt.debugLevel);
                }
                if (opt.rankDir) {
                    inputGraph.graph().rankdir = opt.rankDir;
                }
                if (opt.rankSep) {
                    inputGraph.graph().rankSep = opt.rankSep;
                }
                if (opt.edgeSep) {
                    inputGraph.graph().edgeSep = opt.edgeSep;
                }
                if (opt.nodeSep) {
                    inputGraph.graph().nodeSep = opt.nodeSep;
                }
                if (opt.rankSep) {
                    inputGraph.graph().rankSep = opt.rankSep;
                }

                dagre.layout(inputGraph);
                inputGraph.nodes().forEach(function (u) {
                    let value = inputGraph.node(u);
                    if (!value.dummy) {
                        let cell = graph.getCell(u);
                        opt.setPosition
                            ? opt.setPosition(cell, value)
                            : graph.get('cells').get(u).set('position', {
                                x: value.x - value.width / 2,
                                y: value.y - value.height / 2
                            });
                    }
                });
                if (opt.setLinkVertices) {
                    inputGraph.edges().forEach(function (e) {
                        let value = e.v;
                        let e_label = inputGraph.edge(e.v, e.w);
                        let link = graph.getCell(e_label);
                        if (link) {
                            opt.setVertices
                                ? opt.setVertices(link, value.points)
                                : link.set('vertices', value.points);
                        }
                    });
                }
                return {
                    width: runner.graph().width,
                    height: runner.graph().height
                };
            }

            this.paper.on('element:pointerclick',
                (cellView, evt, x, y) => {
                    //console.log(evt);
                    self.openEtx(cellView.model.id, x, y);
                }
            );

            this.refresh();
        },
        methods: {
            ShowMenu(e) {
                //this.ctx.hide();
                this.ctx.css('top', `${e.pageY - 60}px`);
                this.ctx.css('left', `${e.pageX - 60}px`);
                this.ctx.show();
            },
            AddPropertyMenu(e) {
                this.openEtx(null, e.pageX, e.pageY);
            },
            AddProperty() {
                let nid = this.etx.attr('mdg-etx');
                this.etx.find('[mdg-etx-body]>table>tbody')
                    .append(this.addExtProp({
                        PropertyId: this.guid(),
                        ModelId: nid, Name: "",
                        Type: "",
                        PK: false,
                        Unique: false,
                        Required: false
                    }));
            },
            SaveModel() {
                let nid = this.etx.attr('mdg-etx');
                let mn = $('[mdg-etx-header]').text().trim();
                let vmn = this.ListData == null ? null :
                    this.ListData.find(x => x.ModelName == mn && x.ModelId != nid);
                if (vmn != null) { alert(mn + " is already exist in diagram!"); return; }
                let model = { ModelId: nid, ModelName: mn, Properties: [] };
                this.etx.find('[mdg-etx-body]>table>tbody>tr').each(function (i, d) {
                    if ($('[prname]', d).val() != "")
                        model.Properties.push({
                            PropertyId: $('[prid]', d).attr('prid'), ModelId: nid, Name: $('[prname]', d).val(),
                            Type: $('[prtype]', d).val(),
                            PK: $('[prpk]', d).prop('checked'),
                            Unique: $('[pruk]', d).prop('checked'),
                            Required: $('[prrq]', d).prop('checked')
                        });
                });
                this.save(model);
                this.etx.hide();
            },
            OnModelDelete(/*id*/) {
                //console.log(id);
            },
            OnModelSave(/*model, data*/) {
                //console.log(model);
                //console.log(data);
            },
            openEtx(id, x, y) {
                this.etx.css('top', `${y}px`);
                this.etx.css('left', `${x}px`);
                let h = this.etx.find('[mdg-etx-header]').html('');
                let b = this.etx.find('[mdg-etx-body]>table>tbody').html('');
                this.ctx.hide();
                this.etx.show();
                let nid = this.guid();
                console.log(id);
                let model = this.ListData == null ? null : this.ListData.find(x => x.ModelId == id);
                console.log(model);
                model = model != null ? model : {
                    ModelId: nid,
                    ModelName: "NewModel",
                    Properties: [{
                        PropertyId: this.guid(),
                        ModelId: nid,
                        Name: "",
                        Type: "string",
                        PK: true,
                        Unique: false,
                        Required: true
                    }]
                };
                this.etx.attr('mdg-etx', model.ModelId);
                h.html(model.ModelName);
                model.Properties.forEach((d) => {
                    b.append(this.addExtProp(d));
                });
            },
            addExtProp(p) {
                return `<tr>
                            <td prid="${p.PropertyId}"><input type="text" prname value="${p.Name}"/></td>
                            <td>${this.getDT(p.Type)}</td>
                            <td><input prpk type="checkbox" value="true" ${(p.PK ? 'checked' : '')}/></td>
                            <td><input pruk type="checkbox" value="true" ${(p.Unique ? 'checked' : '')}/></td>
                            <td><input prrq type="checkbox" value="true" ${(p.Required ? 'checked' : '')}/></td>
                        </tr>`;
            },
            getDT(v = null) {
                let r = "<select prtype>";
                this.dataType.forEach(function (d) {
                    r += `<option ${(v == d ? 'selected' : '')} value="${d}">${d}</option>`;
                });
                r += "</select>";
                return r;
            },
            guid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
            save(model) {
                this.ListData = this.ListData === null ? [] :
                    this.ListData.filter(x => x.ModelId !== model.ModelId);
                this.ListData.push(model);
                this.refresh();
                if (this.OnModelSave !== null) this.OnModelSave(model, this.Data);
            },
            remove() {
                let id = this.etx.attr('mdg-etx');
                if (id === null) return;
                this.ListData = this.ListData === null ? [] : this.ListData.filter(x => x.ModelId !== id);
                this.refresh();
                if (this.OnModelDelete !== null) this.OnModelDelete(id);
                this.etx.hide();
            },
            refresh() {
                let hid = this.Data == null ? this.guid() : this.Data.DiagramId;
                this.ht.attr('mdg-title', hid);
                this.ht.html(this.Data == null ? '' : this.Data.DiagramName);

                let data = {}, nodes = [], links = [];
                let fProperties = [];
                if (this.ListData != null) {
                    this.ListData.forEach(function (d) {
                        let properties = [];
                        d.Properties.forEach(function (p) {
                            properties.push(`${ p.Name } : ${ p.Type } ${ (p.PK ? '-P' : '') } ${ (p.Unique ? '-U' : '') } ${ (p.Required ? '-R' : '') }`);
                            fProperties.push(p);
                        });
                        nodes.push({ id: d.ModelId, name: d.ModelName, properties });
                    });
                    data.nodes = nodes;
                    this.ListData.forEach(function (d) {
                        let pk = d.Properties.find(x => x.PK);
                        fProperties.filter(x => x.Name == pk.Name && !x.PK).forEach(function (p) {
                            links.push({ source: d.ModelId, target: p.ModelId });
                        });
                    });
                    data.links = links;
                }
                let cells = this.buildGraph(data);
                this.graph.resetCells(cells);
                joint.layout.DirectedGraph.layout(this.graph, {
                    setLinkVertices: true,
                    rankDir: "lr",
                    nodeSep: 50,
                    rankSep: 50
                });
                this.ctx.hide();
            },
            buildGraph(data) {
                let self = this;
                let elements = [];
                let links = [];

                _.each(data.nodes, function (node) {
                    elements.push(self.makeElement(node));
                })

                _.each(data.links, function (edge) {
                    links.push(self.makeLink(edge));
                })
                return elements.concat(links);
            },
            makeLink(edge) {
                let lnk = new joint.dia.Link({
                    source: { id: edge.source.toString() },
                    target: { id: edge.target.toString() },
                    attrs: {
                        '.marker-target': { d: 'M 4 0 L 0 2 L 4 4 z' }
                    },
                    labels: [{
                        position: 0.5,
                        // attrs: {
                        // text: {
                        // text: "on"
                        // }
                        // }
                    }],
                    connector: { name: 'smooth' }
                });
                //console.log(lnk);
                //}
                //lnk.connector('rounded', {
                //    radius: 20
                //});
                return lnk;
            },
            makeElement(node) {

                let textsLengths = [];
                textsLengths.push(node.name.length);
                node.properties.forEach(function (d) { textsLengths.push(d.length) });
                let maxLineLength = _.max(textsLengths);

                let letterSize = 12;
                let width = letterSize * maxLineLength * 0.6;
                let height = textsLengths.length * letterSize + (letterSize * 3);

                //console.log(new joint.shapes.uml.Class);

                return new joint.shapes.uml.Class({
                    id: node.id.toString(),
                    size: { width: width, height: height },
                    attrs: {
                        '.uml-class-methods-rect': {
                            display: "none"
                        },
                        '.uml-class-attrs-text': {
                            'font-size': letterSize,
                            'font-family': 'monospace'
                        },
                        '.uml-class-name-text': {
                            'font-size': letterSize,
                            'font-family': 'monospace'
                        },
                        text: {
                            'font-size': 30,
                            'font-family': 'monospace'
                        }
                    },
                    name: node.name,
                    attributes: node.properties,
                });
            }
        }
    };
</script>
<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.0.1/joint.css";
    [mdg-ctx], [mdg-etx] {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: white;
        border: 1px solid #ededed;
        box-shadow: 3px 3px 5px #00000024;
    }

    [mdg-ctx-menu] {
        padding: 5px 10px;
        border-bottom: 1px solid #f3f3f3;
        cursor: pointer;
    }

        [mdg-ctx-menu]:hover {
            background-color: #f3f3f3;
        }

    [mdg-etx-header] {
        padding: 5px 10px;
        background-color: #e9e9e9;
        min-width: 300px;
        outline: none;
    }

    [mdg-etx-body] {
        padding: 5px 10px;
        min-height: 50px;
    }

    [mdg-etx-footer] {
        display: flex;
    }

    [mdg-etx-button] {
        flex: auto;
        padding: 5px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
    }

    [mdg-etx-button="p"] {
        background-color: #3f51b529;
        color: #3f51b5;
    }

    [mdg-etx-button="d"] {
        background-color: #e91e631a;
        color: #e91e63;
    }

    [mdg-etx-button="c"] {
        background-color: #ff98001c;
        color: #ff9800;
    }

    [mdg-etx-button="s"] {
        background-color: #0096881c;
        color: #009688;
    }

    [mdg-etx-body] > table {
        width: 100%;
        font-family: monospace;
        color: #464646;
        border-collapse: collapse;
    }

        [mdg-etx-body] > table th {
            padding: 5px;
            background-color: #f3f3f3;
            border: 1px solid #e9e9e9;
        }

        [mdg-etx-body] > table td {
            padding: 0;
            text-align: center;
            border: 1px solid #e9e9e9;
        }

            [mdg-etx-body] > table td input[type="text"], [mdg-etx-body] > table td select {
                border: none;
                padding: 5px;
                font-family: inherit;
                font-size: 13px;
                outline: none;
            }

    g.scalable {
        filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.2));
    }

    .uml-class-name-rect {
        fill: #e9e9e9;
        stroke: #b9b9b9;
        stroke-width: 0.5px;
    }

    .uml-class-attrs-rect {
        fill: #ffffff;
        stroke: #b9b9b9;
        stroke-width: 0.5px !important;
    }

    .uml-class-methods-rect {
        display: none !important;
    }

    [mdg-body] {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 90vh;
        overflow: auto;
    }

    [mdg-header] {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px;
        z-index: 99999999999999;
        background-color: #f3f3f3;
        border-bottom: 1px solid #e3e3e3
    }

    [mdg-label] {
        font-size: 16px;
    }

    [mdg-title] {
        flex: auto;
        padding: 0 10px;
        font-size: 16px;
        outline: none;
    }
</style>
