<template>
    <div class="travelTop-box">
       <span class="travelTop-box-span" @click="goBack"></span>
        <h3 class="travelTop-box-h3">国内游</h3>
    </div>
</template>

<script>
    export default {
        name: "travelTop",
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .travelTop-box{
        width: 3.75rem;
        height: 0.44rem;
        background-color: white;
    }
    .travelTop-box-h3{
        font-size: 0.20rem;
        text-align: center;
        line-height: 0.44rem;
        color: rgb(51,51,51);
    }
    .travelTop-box-span:before{
        content: "";
        height: 0.14rem;
        width: 0.14rem;
        display: inline-block;
        background-color: white;
        position: absolute;
        left: 0.2rem;
        top: 0.16rem;
        border: 0.01rem solid #333;
        border-width: 0.01rem 0 0 0.01rem;
        transform: rotate(315deg);

    }
</style>