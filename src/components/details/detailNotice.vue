<template>
    <div class="yz_noticeBox">
        <div class="yz_feeInclude">
            <h2 @click="showText1">费用包含<i class="yz_iconNext" :class="[isActive1?'yz_iconNext':'down1']"></i></h2>
            <div class="yz_notice" v-if="show1">
                <ul>
                    <li v-for="(u,index) in data.feeInclude" :key="index"><span>【{{u.title}}】</span>{{u.text}}</li>
                </ul>
            </div>
        </div>
        <div class="yz_feeNotInclude">
            <h2 @click="showText2">费用不包含<i class="yz_iconNext" :class="[isActive2?'yz_iconNext':'down2']"></i></h2>
            <div class="yz_notice" v-show="show2">
                <ul>
                    <li v-for="(u,index) in data.feeNotInclude" :key="index"><span>【{{u.title}}】</span>{{u.text}}</li>
                </ul>
            </div>
        </div>
        <div class="yz_reserve">
            <h2>预订须知</h2>
            <div class="yz_notice">
                <ul>
                    <li v-for="(u,index) in data.reserve" :key="index"><span>【{{u.title}}】</span>{{u.text}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailNotice",
        props:["data"],
        data(){
            return{
                show1:false,
                show2:false,
                isActive1:true,
                isActive2:true
            }
        },
        methods:{
            showText1(){
                this.show1=!this.show1;
                this.isActive1=!this.isActive1
            },
            showText2(){
                this.show2=!this.show2;
                this.isActive2=!this.isActive2
            }
        }
    }
</script>

<style scoped>
    .yz_feeInclude,.yz_feeNotInclude,.yz_reserve{
        background-color: white;
    }
    .yz_feeInclude h2,.yz_feeNotInclude h2,.yz_reserve h2{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.17rem;
        color: #333;
        text-align: left;
        margin: 0.1rem 0.2rem 0;
        position: relative;
    }
    .yz_iconNext{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.23rem;
        right: 0rem;
        background-image: url("../../assets/detailImages/rightArrow.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_notice{
        height: auto;
    }
    .yz_notice ul{
        margin: 0 0.2rem;
        padding-bottom: 0.2rem;
    }
    .yz_notice ul li{
        color: #333;
        line-height: 0.27rem;
        font-size: 0.16rem;
        text-align: left;
        word-wrap: break-word;
        word-break: normal;
    }
    .down1{
        transform: rotate(90deg);
    }
    .down2{
        transform: rotate(90deg);
    }
</style>