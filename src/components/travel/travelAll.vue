<template>
    <div class="travelAll-box">
        <travel-top></travel-top>
        <travel-fdj></travel-fdj>
        <travel-banner :data="travelBanner"></travel-banner>
        <travel-city-all></travel-city-all>
        <travel-content ></travel-content>
    </div>
</template>

<script>
    import travelTop from "./travelTop";
    import travelFdj from "./travelFdj";
    import travelBanner from "./travelBanner";
    import travelCityAll from "./travelCityAll";
    import travelContent from "./travelContent";
    export default {
        name: "travelAll",
        components:{
            travelTop,
            travelFdj,
            travelBanner,
            travelCityAll,
            travelContent
        },
        data(){
            return {
                travelBanner:[
                    {bannerImg:"./images/travelAll/travelBanner1.jpg"},
                    {bannerImg:"./images/travelAll/travelBanner2.jpg"}
                ]
            }
        }
    }
</script>

<style scoped>
    .travelAll-box{
        width: 100%;
        height: auto;
        background-color: rgb(247,247,247);
    }
</style>