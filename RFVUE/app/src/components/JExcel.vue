<template>
    <!--<v-container>
        <v-row>
            <v-col cols="12">

            </v-col>
        </v-row>
    </v-container>-->
    <div class="wrapper-jexcel">
        <!--<div class="introduction"><span>This is a list of my cars</span></div>-->
        <!--<v-btn class="float-right" @click="jExcelObj.insertRow()">Add new row</v-btn><br /><br />-->
        <v-btn class="float-right" @click="insertRowc">Add new row</v-btn><br /><br />
        <div id="spreadsheet" ref="spreadsheet"></div>
    </div>
</template>

<script>
    //import "jexcel/dist/jexcel.css";
    import jexcel from "jexcel"; // eslint-disable-line no-unused-vars
    export default {
        name: "JExcel",
        data() {
            return {
                myCars: [
                    [
                        "Jazz",
                        "Honda",
                        "2019-02-12",
                        imageExample,
                        true,
                        "$ 2.000,00",
                        "#777700"
                    ],
                    ["Civic", "Honda", "2018-07-11", "", true, "$ 4.000,01", "#007777"],
                    ["Z4", "BMW", "2017-11-24", "", false, "$ 324.072,58", "#700d0d"],
                    [
                        "Boxter S",
                        "Porshe",
                        "2019-08-24",
                        "",
                        true,
                        "$ 307.839,45",
                        "#0e0438"
                    ]
                ],
                data: [
                    ['No Splash', '', 'Model A', 'Task 3', '1', 'Sajeeb', '3d 1h', '1h', 'Done', '', '*', ''],
                    ['Intro', 'Intro', 'Model A, Model C', 'Circle Progress', '2', 'Sajeeb', '2h', '2h', 'Done', 'Done', '*', ''],
                    ['Social Media Login', 'Login', '', 'DB Login', '2', 'Sajeeb', '3h', '3h', 'Pending', 'Pending', '', ''],
                    ['Social Media Login', 'Login', '', 'FB Login, Twitter, LinkedIn, Google', '1', 'Shakil', '4h', '4h', 'Pending', 'Pending', '', ''],
                ]
            };
        },
        computed: {
            jExcelOptions() {
                return {
                    data: this.data,
                    columns: [
                        { type: 'text', title: 'Screen/Functions', width: 100 },
                        { type: 'text', title: 'Type', width: 120 },
                        { type: 'text', title: 'Models', width: 120 },
                        { type: 'text', title: 'Tasks', width: 120 },
                        { type: 'numeric', title: 'Sprint', width: 80 },
                        { type: 'dropdown', title: 'Developer', width: 120, source: ["Martin", "Sajeeb", "Shakil", "Team"], multiple: true },
                        { type: 'text', title: 'ET', width: 70 },
                        { type: 'text', title: 'CT', width: 70 },
                        { type: 'dropdown', title: 'Prototype',width: 120, source: [ "Done", "Pending" ] },
                        { type: 'dropdown', title: 'Coding', width: 120, source: [ "Done", "Pending" ] },
                        { type: 'text', title: 'Today', width: 80 },
                        { type: 'text', title: 'Comments', width: 120 }
                    ]
                };
            }
        },
        methods: {
            insertRowc() {
                console.log(this);
                // this.spreadsheet.insertRow();
                this.jExcelObj.insertRow();
            }
        },
        mounted: function () {
            //console.log(this.jExcelOptions);
            //console.log(this.$refs["spreadsheet"]);
            const jExcelObj = jexcel(this.$refs["spreadsheet"], this.jExcelOptions);
            // Object.assign(this, jExcelObj); // pollutes component instance
            Object.assign(this, { jExcelObj }); // tucks all methods under jExcelObj object in component instance
            // console.log(this.jExcelObj);
        }
    }

    const imageExample =
        "data:image/jpeg;base64,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";
</script>

<style scoped>
    #spreadsheet {
        font-size: 12px;
    }
    .introduction {
        font-size: 14px;
        padding: 0.5em;
        margin-bottom: 0.3em;
        color: gold;
        background: #111;
    }
</style>