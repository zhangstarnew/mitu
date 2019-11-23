<template>
    <div>
        <detailTop :data="data"></detailTop>
        <detailBrief class="yz_briefBox" :data="data"></detailBrief>
    </div>
</template>

<script>
    import detailTop from "./detailTop";
    import detailBrief from "./detailBrief";
    export default {
        name: "detailTopBrief",
        props:["data"],
        components:{
            detailTop,
            detailBrief
        }
    }
</script>

<style scoped>
    .yz_briefBox{
        position: relative;
        background-color: white;
        border-radius: 0.1rem 0.1rem 0 0;
        padding-top: 0.2rem;
        margin: -0.1rem 0 0.1rem;
        z-index: 2;
    }
</style>