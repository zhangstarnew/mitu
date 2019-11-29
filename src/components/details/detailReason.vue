<template>
    <div class="yz_reason">
        <h2>推荐理由</h2>
        <ul>
            <li v-for="(u,index) in reason" :key="index">
                <i></i>
                <p>{{u}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "detailReason",
        data(){
            return {
                reason:[
                    "米途旅行！",
                    "全程三飞，享早报名优惠/信用卡立减优惠！",
                    "五钻住宿还是有特色的五钻住宿！"
                ]
            }
        }
    }
</script>

<style scoped>
    .yz_reason{
        margin: 0.1rem 0;
        background-color: white;
        color: #333;
    }
    .yz_reason h2{
        font-size: 0.19rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin: 0 0.2rem;
        text-align: left;
    }
    .yz_reason ul{
        margin: 0 0.2rem;
        padding-bottom: 0.2rem;
    }
    .yz_reason ul li{
        margin-bottom: 0.1rem;
        position: relative;
    }
    .yz_reason ul li i{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.04rem;
        left: 0;
        background-image: url("../../assets/detailImages/star.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_reason ul li p{
        font-size: 0.16rem;
        height: 0.27rem;
        line-height: 0.27rem;
        margin-left: 0.2rem;
        text-align: left;
    }
</style>