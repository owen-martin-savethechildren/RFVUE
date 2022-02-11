<template>
    <v-container>
        <div id="toolbar">
            <textarea id="adjacency-list" width="200">
      {
  "nodes": [
    {"name": "host_a", "id": 21},
    {"name": "comp_with_long_name", "id": 1},
    {"name": "comp_b", "id": 2},
    {"name": "host_b", "id": 22},
    {"name": "comp_c", "id": 3},
    {"name": "comp_d", "id": 4}
  ],
  "links": [
    {"source": 1, "target": 21},
    {"source": 2, "target": 21},
    {"source": 3, "target": 22},
    {"source": 4, "target": 22},
    {"source": 4, "target": 21}
  ]}
</textarea>
            <br />
            <button id="btn-layout">Layout</button>
        </div>
        <div id="paper"></div>
    </v-container>
</template>

<script>
    export default {
        mounted() {
            console.log(joint);
            console.log(dagre);
            function prepareData(graph, dagre_graph) {
                var dagreGraph = dagre_graph;
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
                    var sourceId = cell.get('source').id.toString();
                    var targetId = cell.get('target').id.toString();
                    dagreGraph.setEdge(sourceId, targetId, {
                        label: cell.id,
                        minLen: cell.get('minLen') || 1
                    });
                });
                return dagreGraph;
            }

            joint.layout.DirectedGraph.layout = function (graph, opt) {
                opt = opt || {
                };
                var dGraph = new dagre.graphlib.Graph();
                /*    var dGraph = new dagre.graphlib.Graph({ multigraph: true })*/
                var inputGraph = prepareData(graph, dGraph);
                var runner = dGraph.setGraph({});
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
                    /*var layoutGraph =*/ dagre.layout(inputGraph);
                inputGraph.nodes().forEach(function (u) {
                    var value = inputGraph.node(u);
                    if (!value.dummy) {
                        var cell = graph.getCell(u);
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
                        var e_label = inputGraph.edge(e.v, e.w);
                        var link = graph.getCell(e_label);
                        if (link) {
                            opt.setVertices
                                ? opt.setVertices(link, e.v.points)
                                : link.set('vertices', e.v.points);
                        }
                    });
                }
                return {
                    width: runner.graph().width,
                    height: runner.graph().height
                };
            }
            // Helpers.
            // --------

            function buildGraph(data) {
                var elements = [];
                var links = [];

                _.each(data.nodes, function (node) {
                    elements.push(makeElement(node));
                })

                _.each(data.links, function (edge) {
                    links.push(makeLink(edge));
                })
                return elements.concat(links);
            }

            function makeLink(edge) {

                /*  if (edge.source.toString() == "2") {
                        var lnk = new joint.dia.Link({
                      source: { id: edge.source.toString() },
                      target: { x: 25, y: 25 },
                      attrs: {
                        '.marker-target': { d: 'M 4 0 L 0 2 L 4 4 z' }
                      },
                      labels: [{
                        position: 0.5,
                        attrs: {
                          text: {
                            text: "on"
                          }
                        }
                      }],
                      connector: {name: 'smooth'}
                  });
                    lnk.transition('target', { x: 250, y: 250 }, {
                      delay: 100,
                      duration: 1000,
                      timingFunction: joint.util.timing.bounce,
                      valueFunction: joint.util.interpolate.object
                    });
                  } else {*/
                var lnk = new joint.dia.Link({
                    source: { id: edge.source.toString() },
                    target: { id: edge.target.toString() },
                    attrs: {
                        '.marker-target': { d: 'M 4 0 L 0 2 L 4 4 z' }
                    },
                    labels: [{
                        position: 0.5,
                        attrs: {
                            text: {
                                text: "on"
                            }
                        }
                    }],
                    connector: { name: 'smooth' }
                });

                //}

                return lnk;
            }

            function makeElement(node) {

                var maxLineLength = _.max(node.name.split('\n'), function (l) { return l.length; }).length;

                // Compute width/height of the rectangle based on the number
                // of lines in the label and the letter size. 0.6 * letterSize is
                // an approximation of the monospace font letter width.
                var letterSize = 8;
                var width = 2 * (letterSize * (0.6 * maxLineLength + 1));
                var height = 2 * ((node.name.split('\n').length + 1) * letterSize);

                return new joint.shapes.basic.Rect({
                    id: node.id.toString(),
                    size: { width: 100, height: height },
                    attrs: {
                        text: {
                            text: node.name,
                            'font-size': letterSize,
                            'font-family': 'monospace'
                        },
                        rect: {
                            width: width, height: height,
                            rx: 5, ry: 5,
                            stroke: '#555'
                        }
                    }
                });
            }

            // Main.
            // -----

            var graph = new joint.dia.Graph;

            var paper = new joint.dia.Paper({
                el: $('#paper'),
                width: 2000,
                height: 2000,
                gridSize: 1,
                model: graph
            });

            // Just give the viewport a little padding.
            joint.V(paper.viewport).translate(20, 20);

            $('#btn-layout').on('click', layout);

            function layout() {

                try {
                    var dataList = eval('dataList = ' + $('#adjacency-list').val());
                } catch (e) { alert(e); }

                var cells = buildGraph(dataList);
                graph.resetCells(cells);
                joint.layout.DirectedGraph.layout(graph, {
                    setLinkVertices: false,
                    rankDir: "lr",
                    nodeSep: 100,
                    rankSep: 100
                });
            }
            layout();
        }
    }
</script>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.0.1/joint.css";
</style>