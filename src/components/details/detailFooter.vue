<template>
    <div class="yz_footerBox">
        <div class="yz_footerLeft">
            <span></span>
            <p @click="alert">咨询</p>
        </div>
        <div class="yz_footerRight">
            <a :href="'#/main/xl_detail/xl_data_travel/'+goodsId">
                <p>开始预订</p>
            </a>
        </div>
        <van-popup v-model="show" position="bottom" class="yz_alertBox">
            <div class="yz_alertBottom" v-for="(u,index) in alertBottom" :key="index">
                <img :src="u.src" alt="">
                <p>{{u.word}}</p>
                <p>{{u.text}}</p>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import { Popup } from 'vant';
    export default {
        name: "detailFooter",
        components:{
            [Popup.name]:Popup
        },
        data(){
            return{
                show:false,
                goodsId:null,
                "alertBottom": [
                    {
                        "src": "assets/detailImages/iconPhone.png",
                        "word": "客服热线",
                        "text": "400-600-6666"
                    },
                    {
                        "src": "assets/detailImages/iconAsk.png",
                        "word": "在线客服",
                        "text": "服务时间：9:00 - 24:00"
                    },
                    {
                        "src": "assets/detailImages/iconShop.png",
                        "word": "遨游门店",
                        "text": "免费预约 上门服务"
                    }
                ]

            }
        },
        methods:{
            alert(){
                this.show=true;
            }
        },
        created() {
            //路由传商品id
            let a = this.$route.params.id;
            this.goodsId=a;
        },
    }
</script>

<style scoped>
    .yz_footerBox{
        width: 100%;
        height: 0.6rem;
        background-color: white;
        display: flex;
        border-top: 0.01rem solid #dfdfdf;
        position: fixed;
        bottom: 0;
        z-index: 10;
    }
    .yz_footerLeft{
        width: 50%;
        padding-top: 0.1rem;
    }
    .yz_footerLeft span{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background-image: url("../../assets/detailImages/iconAsk.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_footerLeft p{
        font-size: 0.14rem;
        color: #888;
    }
    .yz_footerRight{
        width: 50%;
    }
    .yz_footerRight p{
        width: 1.5rem;
        height: 0.45rem;
        font-size: 0.16rem;
        line-height: 0.45rem;
        background-color: red;
        color: white;
        margin: 0.07rem auto;
        border-radius: 0.3rem;
    }
    .yz_alertBottom{
        margin: 0 0.2rem;
        height: 0.6rem;
        border-bottom: 0.01rem solid #dfdfdf;
    }
    .yz_alertBottom img{
        display: inline-block;
        width: 0.17rem;
        height: 0.17rem;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .yz_alertBottom p:nth-child(2){
        display: inline-block;
        width: 1.4rem;
        font-size: 0.17rem;
        line-height: 0.6rem;
        text-align: left;
        vertical-align: middle;
    }
    .yz_alertBottom p:nth-child(3){
        display: inline-block;
        width: 1.4rem;
        color: #888;
        line-height: 0.6rem;
        text-align: right;
    }
    .yz_alertBox{
        padding-bottom: 0.3rem;
    }
</style>