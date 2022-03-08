<template>
    <!--<v-container>
        <v-row>
            <v-col cols="12" align-self="center">

            </v-col>
        </v-row>

    </v-container>-->
    <div id="spreadsheet" ref="spreadsheet">
        <v-btn class="float-right mr-2" color="primary" @click="addRow">Add Row</v-btn>
        <v-btn class="float-right mr-2" color="primary" @click="getColumnData">Save</v-btn>
        <v-btn class="float-right mr-2" color="primary" @click="download">Export</v-btn>

        <!--<v-alert type="error" elevation="5" max-width="250" dismissible="true">
        I'm an error alert.
    </v-alert>-->
        <v-snackbar v-model="snackbarToggle"
                    :timeout="snackbarTimeout"
                    absolute
                    top
                    right
                    transition="slide-x-reverse-transition">
            {{ snackbarText }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue"
                       text
                       v-bind="attrs"
                       @click="snackbarToggle = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>

</template>

<script>
    import jspreadsheet from "jspreadsheet-ce";
    import DataService from "../js/Data.js";
    import rf from "../js/rf"; /* eslint-disable-line no-unused-vars */
    //import "jsuites/dist/jsuites.css"
    import "jspreadsheet-ce/dist/jspreadsheet.css"
    //import "jspreadsheet-ce/dist/jspreadsheet.datatables.css"
    export default {
        name: "JSpreadsheet",
        data() {
            return {
                spreadsheetData: null,
                spreadsheetStyle: null,
                spreadsheetMerge: null,
                spreadsheetHeaders: DataService.columns,
                style: null,
                snackbarToggle: false,
                snackbarText: null,
                snackbarTimeout: 2000
            };
        },
        async created() {
            
        },
        async mounted() {
            const self = this;

            const responseData = await rf.api.get('TaskInfo')
            if (responseData.Status === 200) {
                //console.log(responseData)
                this.snackbarText = responseData.Message;
                this.snackbarToggle = true;
                this.spreadsheetData = responseData.ApiPacket.PacketList
            }

            const responseStyleMerge = await rf.api.get('TaskStyle')
            if (responseStyleMerge.Status === 200 && responseStyleMerge.ApiPacket.PacketList.length > 0) {
                //console.log(responseStyleMerge)
                this.style = {
                    TaskStyleId: responseStyleMerge.ApiPacket.PacketList[0].TaskStyleId,
                    ProjectKey: responseStyleMerge.ApiPacket.PacketList[0].ProjectKey
                }
                this.spreadsheetStyle = JSON.parse(responseStyleMerge.ApiPacket.PacketList[0].StyleJson);
                this.spreadsheetMerge = JSON.parse(responseStyleMerge.ApiPacket.PacketList[0].MergeJson);

            }
            //console.log(this.spreadsheetStyle);

            const jspreadsheetObj = jspreadsheet(self.$refs.spreadsheet, {
                //csv: "~/app/src/assets/PP-Task-Mobile.csv",
                //csvHeaders: true,
                //tableOverflow: true,
                data: self.spreadsheetData,
                search: true,
                columns: self.spreadsheetHeaders,
                contextMenu: function (obj, x, y, e) /* eslint-disable-line no-unused-vars */ {
                    let items = [];
                    const cells = ['A', 'B', 'C'];

                    if (x < 3) {
                        items.push({
                            title: 'Merge selected cells',
                            onclick: () => {
                                if ((obj.selectedCell[2] - obj.selectedCell[0]) === 0) {
                                    obj.setMerge(`${cells[obj.selectedCell[0]]}${parseInt(obj.selectedCell[1]) + 1}`, 1, parseInt((obj.selectedCell[3] - obj.selectedCell[1]) + 1));
                                } else {
                                    self.snackbarText = 'Merging multiple columns is not allowed.';
                                    self.snackbarToggle = true;
                                }
                            }
                        });
                    }
                    items.push({
                        title: 'Delete selected rows',
                        onclick: function () {
                            obj.deleteRow(parseInt(y), parseInt((obj.selectedCell[3] - obj.selectedCell[1]) + 1))
                        }
                    })
                    
                    

                    return items;
                },
                toolbar: [
                    {
                        type: 'i',
                        content: 'undo',
                        onclick: function () {
                            jspreadsheetObj.undo();
                        }
                    },
                    {
                        type: 'i',
                        content: 'redo',
                        onclick: function () {
                            jspreadsheetObj.redo();
                        }
                    },
                    {
                        type: 'i',
                        content: 'save',
                        onclick: function () {
                            jspreadsheetObj.download();
                        }
                    },
                    {
                        type: 'select',
                        k: 'font-family',
                        v: ['Arial', 'monospace','Verdana']
                    },
                    {
                        type: 'select',
                        k: 'font-size',
                        v: ['9px', '10px', '11px', '12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px']
                    },
                    {
                        type: 'i',
                        content: 'format_align_left',
                        k: 'text-align',
                        v: 'left'
                    },
                    {
                        type: 'i',
                        content: 'format_align_center',
                        k: 'text-align',
                        v: 'center'
                    },
                    {
                        type: 'i',
                        content: 'format_align_right',
                        k: 'text-align',
                        v: 'right'
                    },
                    {
                        type: 'i',
                        content: 'format_bold',
                        k: 'font-weight',
                        v: 'bold'
                    },
                    {
                        type: 'color',
                        content: 'format_color_text',
                        k: 'color'
                    },
                    {
                        type: 'color',
                        content: 'format_color_fill',
                        k: 'background-color'
                    },
                    {
                        type: 'i',
                        content: 'add_box',
                        onclick: function () {
                            jspreadsheetObj.insertRow();
                        }
                    },
                    {
                        type: 'i',
                        content: 'restart_alt',
                        onclick: function () {
                            jspreadsheetObj.resetSearch();
                        }
                    },
                ],
                style: self.spreadsheetStyle,
                mergeCells: self.spreadsheetMerge
            });
            //jspreadsheetObj.el.style.fontFamily = 'Arial'
            //console.log(jspreadsheetObj.el.style.fontFamily);
            jspreadsheetObj.table.style.fontSize = '12px'
            //jspreadsheetObj.table.style.fontStyle = 'italic'
            //console.log(jspreadsheetObj);
            //console.log(jspreadsheetObj.getCellFromCoords(0,0));
            //jspreadsheetObj.setStyle(jspreadsheetObj.el, 'background-color', 'yellow');
            Object.assign(this, { jspreadsheetObj })
        },
        //watch: {
        //    spreadsheetData: function () {
        //        this.jspreadsheetObj.data = this.spreadsheetData;
        //    }
        //},
        methods: {
            download() {
                this.jspreadsheetObj.download();
            },
            async getColumnData() {
                //console.log(this.jspreadsheetObj.getJson());

                let taskData = this.jspreadsheetObj.getJson();

                taskData.forEach((td, index) => {
                    if (td.TaskInfoId === "") {
                        td.TaskInfoId = null;
                    }
                    if (td.ProjectId === "") {
                        td.ProjectId = taskData[index - 1].ProjectId ? taskData[index - 1].ProjectId : this.style.ProjectKey;
                    }
                });

                console.log(taskData);
                const responseData = await rf.api.post('TaskInfo', taskData);

                console.log(responseData);

                const TaskStyle = {
                    "TaskStyleId": this.style.TaskStyleId, // "046a6cef-65af-49d7-9eb8-ed67e2d6d330"

                    "ProjectKey": this.style.ProjectKey, // "BLOOM", "NEW ENTRY", "UPDATE"

                    "StyleJson": `${JSON.stringify(this.jspreadsheetObj.getStyle())}`, // "[{A1:'Color:#000'},{A2:'Color:#fff'}]"

                    "MergeJson": `${JSON.stringify(this.jspreadsheetObj.getMerge())}` // "[{A1:A9,{B2:C9}]"
                }
                

                const responseStyle = await rf.api.post('TaskStyle', [ TaskStyle ])

                console.log(responseStyle);
                //console.log(JSON.stringify(this.jspreadsheetObj.getMerge()));
                //console.log(JSON.stringify(this.jspreadsheetObj.getStyle()));
            },
            addRow() {
                this.jspreadsheetObj.insertRow();
            }
        }
    }
</script>



<style>
    #spreadsheet {
        font-size: 12px;
        
    }
    /*.jexcel_content table {
        font-size: 12px;
    }*/
    .jexcel {
        font-family: Arial !important;
    }
</style>