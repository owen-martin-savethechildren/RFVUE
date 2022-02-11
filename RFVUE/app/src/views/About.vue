<template>
    <Diagram :DiagramData="diagram"></Diagram>
    <!--<Test></Test>-->
</template>

<script>
    import Diagram from "../components/Diagram.vue";
    //import Test from "../components/Test.vue";
    export default {
        name: "About",
        components: { Diagram /*Test*/ },
        data: () => ({
            diagram: /*null*/
            {
                DiagramId: '366eaa63-d1bf-4b73-9076-c6c37c4a1ddf', DiagramName: 'Sample', Models: [
                    {
                        ModelId: '466eaa63-d1bf-4b73-9076-c6c37c4a1ddg', ModelName: "Students",
                        Properties: [
                            { PropertyId: 1, ModelId: '466eaa63-d1bf-4b73-9076-c6c37c4a1ddg', Name: "StudentId", Type: "string", PK: true, Unique: false, Required: true },
                            { PropertyId: 2, ModelId: '466eaa63-d1bf-4b73-9076-c6c37c4a1ddg', Name: "StudentName", Type: "string", PK: false, Unique: false, Required: true },
                            { PropertyId: 3, ModelId: '466eaa63-d1bf-4b73-9076-c6c37c4a1ddg', Name: "DateOfBirth", Type: "datetime", PK: false, Unique: false, Required: false },
                            { PropertyId: 4, ModelId: '466eaa63-d1bf-4b73-9076-c6c37c4a1ddg', Name: "Gender", Type: "int", PK: false, Unique: false, Required: true }
                        ]
                    },
                    {
                        ModelId: '566eaa63-d1bf-4b73-9076-c6c37c4a1ddh', ModelName: "ClassInfo",
                        Properties: [
                            { PropertyId: 1, ModelId: '566eaa63-d1bf-4b73-9076-c6c37c4a1ddh', Name: "ClassId", Type: "string", PK: true, Unique: false, Required: true },
                            { PropertyId: 2, ModelId: '566eaa63-d1bf-4b73-9076-c6c37c4a1ddh', Name: "ClassName", Type: "string", PK: false, Unique: true, Required: true }
                        ]
                    },
                    {
                        ModelId: '666eaa63-d1bf-4b73-9076-c6c37c4a1ddi', ModelName: "StudentClass",
                        Properties: [
                            { PropertyId: 1, ModelId: '666eaa63-d1bf-4b73-9076-c6c37c4a1ddi', Name: "StudentClassId", Type: "string", PK: true, Unique: false, Required: true },
                            { PropertyId: 2, ModelId: '666eaa63-d1bf-4b73-9076-c6c37c4a1ddi', Name: "ClassId", Type: "string", PK: false, Unique: false, Required: true },
                            { PropertyId: 3, ModelId: '666eaa63-d1bf-4b73-9076-c6c37c4a1ddi', Name: "StudentId", Type: "string", PK: false, Unique: false, Required: true }
                        ]
                    },
                ]
            }
        })
    }
</script>
