<template>
    <div class="home-destination">
        <a href="#/main/nextSelect/1"><img src="../../assets/images/home-wy/hotred.png"/>西安</a><!--1-->
        <a href="#/main/nextSelect/6"><img src="../../assets/images/home-wy/hotyellow.png"/>三亚</a><!--6-->
        <a href="#/main/nextSelect/9"><img src="../../assets/images/home-wy/hotblue.png"/>丽江</a><!--9-->
        <a href="#/main/nextSelect/13">成都</a><!--13-->
        <a href="#/main/nextSelect/18">鼓浪屿</a><!--18-->
        <a href="#/main/nextSelect/20">珠海</a><!--20-->
        <a href="#/main/nextSelect/21">桂林</a><!--21-->
        <a href="#/main/nextSelect/22">南宁</a><!--22-->
        <a href="#/main/nextSelect/25">武汉</a><!--25-->
        <a href="#/main/nextSelect/23">哈尔滨</a><!--23-->
        <a href="#/main/nextSelect/28">长沙</a><!--28-->
        <a href="#/main/nextSelect/29">张家界</a><!--29-->
    </div>
</template>

<script>
    export default {
        name: "home-destination"
    }
</script>

<style scoped>
    .home-destination{
        display: flex;
        flex-wrap: wrap;
        font-size: 0.14rem;
    }
    .home-destination>a{
        width: 25%;
        padding: 0.15rem 0;
        position: relative;
    }
    .home-destination>a>img{
        width: 0.18rem;
        position: absolute;
        top: 0.15rem;
        left: 0;
    }
</style>