<template>
        <div class="yz_top">
            <img :src="data.topImage" alt="">
            <div class="yz_info">
                <p><label class="yz_type">{{data.type}}</label><label class="yz_level">{{data.level}}</label><label class="yz_number">产品编号：{{data.goodsId}}</label></p>
            </div>
        </div>
</template>

<script>
    export default {
        name: "detailTop",
        props:["data"]
    }
</script>

<style scoped>
    .yz_top{
        width: 100%;
        height: 2.2rem;
        position: relative;
    }
    .yz_top img{
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .yz_info{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.36rem;
        z-index: 1;
        background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.5));
    }
    .yz_info p{
        position: relative;
        text-align: left;
    }
    .yz_type{
        color: white;
        border-radius: 0.04rem;
        padding: 0 0.05rem;
        background-color: #70c100;
        margin-left: 0.2rem;
    }
    .yz_level{
        color: white;
        border-radius: 0.04rem;
        padding: 0 0.05rem;
        margin-left: 0.1rem;
        border: 0.01rem solid #fff;
    }
    .yz_number{
        color: white;
        position: absolute;
        right: 0.2rem;
    }
</style>