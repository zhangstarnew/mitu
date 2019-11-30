<template>
    <div class="loading-box">
        <van-loading  size="34px" color="#FE7763" vertical text-size="10px" type="spinner">
            <img src="../../assets/images/home-wy/logo.png" class="logoImg">
            <!--				<span class="logoSpan">loading...</span>-->
        </van-loading>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .loading-box{
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 30;
        padding-top: 2.8rem;
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        bottom: 0px;

    }
    .logoImg{
        width: 60px;
        height: 40px;
    }
    .logoSpan{
        color: #FE7763;
        position: absolute;
        top: 28px;
        left: 205px;
    }
</style>