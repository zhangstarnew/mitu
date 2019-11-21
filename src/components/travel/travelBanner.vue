<template>
    <div class="travelBanner-box">
        <van-swipe :autoplay="3000" indicator-color="red" :width="375" :height="80">
            <van-swipe-item v-for="(u,i) in data" :key="i"><img :src="u.bannerImg" class="travelBanner-box-img"></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "travelBanner",
        props:["data"]
    }
</script>

<style scoped>
    .travelBanner-box{
        width: 3.75rem;
        height: 0.8rem;
        font-size: 0.12rem;
    }
    .travelBanner-box-img{
        width: 100%;
        height: 100%;
    }
    .van-swipe__indicators{
    }
</style>