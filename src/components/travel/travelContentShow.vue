<template>
    <div>
        <travel-content-show-a :data="data"></travel-content-show-a>
        <travel-content-show-b :data="data"></travel-content-show-b>
        <travel-content-show-c :data="data"></travel-content-show-c>
    </div>

</template>

<script>
    import travelContentShowA from "./travelContentShowA";
    import travelContentShowB from "./travelContentShowB";
    import travelContentShowC from "./travelContentShowC";
    export default {
        name: "travelContentShow",
        props:["data"],
        components:{
            travelContentShowA,
            travelContentShowB,
            travelContentShowC
        }
    }
</script>

<style scoped>

</style>