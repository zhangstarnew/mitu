<template>
        <div class="yz_brief" >
            <h1>{{data.title}}</h1>
            <h6>{{data.brief}}</h6>
            <div class="yz_priceBox">
                <label>￥</label>
                <span class="yz_price">{{data.price}}</span>
                <label>起/人</label>
                <label class="yz_oldPrice">原价<span>￥</span><span>{{data.oldPrice}}</span></label>
                <span class="yz_btn" @click="showExplain">起价说明</span>
            </div>
            <div class="yz_limit">
                <label>限购</label>
                <p>此产品每单支持预订1-3位出行人</p>
                <span @click="showLimit">1个限购</span>
                <i class="yz_iconNext"></i>
            </div>
        </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "detailBrief",
        props:["data"],
        methods:{
            showExplain(){
                Dialog.alert({
                    title: '起价说明',
                    message: '本起价是按2位成人参加2019年11月30日出发的团队所核算的单人价格。您最终提交的价格会根据您所选择的出发日期、出行人数以及所选附加服务的不同而有所差别',
                    messageAlign:'left'
                })
            },
            showLimit(){
                Dialog.alert({
                    title:'限购说明',
                    message:'此产品每单支持预订1-4位出行人',
                    messageAlign:'left'
                })
            }
        }
    }
</script>

<style scoped>
    .yz_brief h1,.yz_brief h6{
        margin: 0 0.2rem;
        text-align: left;
        line-height: 0.2rem;
    }
    .yz_brief h1{
        font-size: 0.16rem;
        color: #333;
    }
    .yz_brief h6{
        color: #666;
    }
    .yz_priceBox{
        height: 0.44rem;
        margin: 0 0.2rem;
        line-height: 0.44rem;
        text-align: left;
    }
    .yz_priceBox label:nth-child(1){
        font-size: 0.17rem;
        color: red;
    }
    .yz_priceBox label:nth-child(3),.yz_oldPrice{
        font-size: 0.14rem;
        color: #999;
    }
    .yz_price{
        font-size: 0.24rem;
        color: red;
    }
    .yz_oldPrice{
        margin-left: 0.1rem;
    }
    .yz_oldPrice span{
        text-decoration: line-through;
    }
    .yz_btn{
        font-size: 0.14rem;
        color: #41b3ee;
        margin-left: 0.14rem;
    }
    .yz_limit{
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: left;
        margin: 0 0.2rem;
        border-top: 0.01rem solid #dfdfdf;
        position: relative;
    }
    .yz_limit label{
        padding: 0.02rem 0.04rem;
        color: white;
        background-color: red;
        border-radius: 0.03rem;
    }
    .yz_limit p{
        display: inline-block;
        margin-left: 0.1rem;
        font-size: 0.14rem;
        color: #ff5647;
    }
    .yz_limit span{
        position: absolute;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #999;
    }
    .yz_iconNext{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.23rem;
        right: 0;
        background-image: url("../../assets/detailImages/rightArrow.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>