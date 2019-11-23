<template>
    <div class="travelContentShowB-box">
        <a href="#" class="travelContentShowB-a" v-for="(u,i) in data.contentB" :key="i">
            <p class="travelContentShowB-p">{{u.title}}</p>
            <img :src="u.img" class="travelContentShowB-img">
            <span class="travelContentShowB-span">{{u.presentation}}</span>
        </a>

    </div>
</template>

<script>
    export default {
        name: "travelContentShowB",
        props:["data"]
    }
</script>

<style scoped>
    .travelContentShowB-box{
        width: 100%;
    }
    .travelContentShowB-a{
        width: 3.35rem;
        height: 0.9rem;
        display: inline-block;
        border-bottom: 0.01rem solid gainsboro;
        background-color: white;
        box-sizing: border-box;
        position: relative;
    }
    .travelContentShowB-p{
        width: 2.2rem;
        height: 0.6rem;
        font-size: 0.14rem;
        color: black;
        text-align: left;
        margin-top: 0.1rem;
    }
    .travelContentShowB-img{
        width: 1.05rem;
        height: 0.8rem;
        position: absolute;
        right: 0;
        top: 0.05rem;
        border-radius: 0.08rem;
    }
    .travelContentShowB-span{
        width: 2.2rem;
        height: 0.2rem;
        display: inline-block;
        font-size: 0.12rem;
        color: gray;
        text-align: left;
        position: absolute;
        left: 0;
        bottom: 0.02rem;
    }
</style>