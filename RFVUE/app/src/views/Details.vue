<template>
    <section>
        <v-switch v-model="switch1"
                  flat
                  :label="switch1 ? 'jspreadsheet' : 'jexcel'"></v-switch>
        <JSpreadsheet v-if="switch1"></JSpreadsheet>
        <JExcel v-else></JExcel>
    </section>
</template>

<script>
    //import JSpreadsheet from "../components/JSpreadsheet.vue"
    export default {
        name: "Details",
        //components: { JSpreadsheet },
        data() {
            return {
                switch1: true
            };
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style>
</style>