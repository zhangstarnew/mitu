<template>
    <div class="destination-zx-box">
        <h2 class="destination-zx-box-h2">目的地</h2>
        <a href="#/homeSelect" class="destination-zx-box-a">
            <span class="iconfont destination-zx-box-a-span1">&#xe600;</span>
            <span class="destination-zx-box-a-span2">目的地/主题/关键字</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "destinationTop"
    }
</script>

<style scoped>
    @import "../../assets/destinationCss/font_FDJ/iconfont.css";
    .destination-zx-box{
        width: 3.75rem;
        height:1.1rem;
        background-color: pink;
        background-image: url("../../assets/destinationImg/destination-zx-top.png");
        background-size: 100%;
        padding-top: 0.14rem;
        box-sizing: border-box;
        position: fixed;
        top: 0rem;
        z-index: 10;

    }
    .destination-zx-box-h2{
        font-size: 0.18rem;
        color: white;
    }
    .destination-zx-box-a{
        font-size: 0.14rem;
        width: 3.35rem;
        height: 0.3rem;
        display: inline-block;
        background-color: rgb(242,225,222);
        margin-top: 0.2rem;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 0.3rem;
    }
    .destination-zx-box-a-span1{
        font-size: 0.18rem;
        margin-right: 0.04rem;
        color: rgb(119,108,112);
    }
    .destination-zx-box-a-span2{
        font-size: 0.14rem;
        color: rgb(119,108,112);
    }
</style>