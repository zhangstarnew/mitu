<template>
    <div class="travelContentShowC-box">
        <a href="#" class="travelContentShowC-a" v-for="(u,i) in data.contentC" :key="i">
            <img :src="u.img" class="travelContentShowC-img">
            <p class="travelContentShowC-p">{{u.title}}</p>
            <span class="travelContentShowC-span"><span class="travelContentShowC-span3">￥</span>{{u.price}}<span class="travelContentShowC-span2">起</span></span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "travelContentShowC",
        props:["data"]
    }
</script>

<style scoped>
    .travelContentShowC-box{
        width: 100%;
        background-color: white;
    }
    .travelContentShowC-a{
        width: 3.25rem;
        height: 0.7rem;
        display: inline-block;
        position: relative;
        margin-top: 0.14rem;
    }
    .travelContentShowC-img{
        width: 1.05rem;
        height: 0.7rem;
        border-radius: 0.06rem;
        position: absolute;
        left: 0;
    }
    .travelContentShowC-p{
        width: 2.1rem;
        font-size: 0.14rem;
        position: absolute;
        right: 0;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: left;
        color: rgb(151,151,151);
    }
    .travelContentShowC-span{
        width: 2.1rem;
        height: 0.24rem;
        display: inline-block;
        font-size: 0.14rem;
        position: absolute;
        bottom: 0;
        left: 0.4rem;
        color: rgb(253,144,125);
    }
    .travelContentShowC-span2{
        font-size: 0.1rem;
        margin-left: 0.04rem;
    }

</style>