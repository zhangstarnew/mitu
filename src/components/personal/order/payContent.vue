<template>
    <div>
        <div id="payContent" v-if="date">
            <nav class="payNav">
                <img src="../../../assets/images/xl_home_img/detail_03.jpg" alt="">
                <div class="tip" >{{date.status}}</div>
            </nav>
            <div class="status">
         <span>订单号：{{date.order_id}}</span>  <span>{{date.status}}</span>
            </div>
            <div class="border">
                <div >
                    <span class="tour">跟团游</span>
                </div>
                <div class="content">
                    <h3>{{date.order_name}}</h3>
                    <p>时间：{{date.start_time | formatDate}}</p>
                    <p class="contentSpan">
                        <span class="color-a">￥{{date.price}}</span>
                    </p>
                    <p class="contentSpan">
                        <span>行程：默认行程</span>
                        <span class="color-b" @click="showPopup">费用明细</span>
                    </p>
                </div>
            </div>
<!--            <div class="payContent-touch">-->
<!--                <p><span>联系人</span><span class="spana">{{data.name}}</span></p>-->
<!--                <p><span>联系方式</span><span class="spanb">{{data.handSet}}</span></p>-->
<!--                <p><span>邮箱</span><span class="spanc">{{data.postBox}}</span></p>-->
<!--            </div>-->
        </div>
        <!--费用明细弹出框-->
        <van-popup v-model="show" closeable
                   position="bottom"
                   :style="{ height: '80%' }">
            <ul class="popup-list">
                <li>
                    <div v-if="date.status== '待评价' || date.status== '待出发' || date.status== '已完成'">
                        <div class="title" >已完成支付</div>
                        <div class="price" >￥{{date.price}}</div>
                    </div>
                    <div v-else>
                        <div class="title" >暂时没有支付信息</div>
                        <div class="price" >￥0</div>
                    </div>

                </li>
<!--                <li>-->
<!--                    <div >-->
<!--                        <div class="title">优惠</div>-->
<!--                        <div class="price" ></div>-->
<!--                    </div>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="subprice">￥{{date.price}}</div>-->
<!--                </li>-->
            </ul>
            <div class="totle-price" v-if="date.status== '待评价' || date.status== '待出发' || date.status== '已完成'">
                <span >待支付</span>
                <em >¥ </em>0
            </div>
            <div class="totle-price" v-else>
                <span >待支付</span>
                <em >¥ </em>{{date.price}}
            </div>
        </van-popup>
    </div>
</template>
<script>
    import { formatDate } from '../../common/commonUtil'
    import { Popup } from 'vant';
    export default {
        name: "payContent",
        props:['date'],
        data() {
            return {
                show: false
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },

        },
        components:{
            [Popup.name]:Popup,
        },
        filters: {
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            },
        },
    }
</script>

<style scoped>
#payContent{
    font-size: 0.12rem;
    overflow: auto;
    background-color: white;
    margin-top: 0.45rem;
}
.payNav{

    width: 3.75rem;
    color: white;
    font-size: 0.16rem;
    font-weight: 600;
    position: relative;
}
.tip{
    position: absolute;
    top: 22px;
    left: 0;
    width: 100%;
    text-align: center;
    font-family: STHeitiSC-Medium;
    font-size: 19px;
    font-weight: 300;
    color: #fff;
    letter-spacing: .8px;
}
.payNav img{
    display: block;
    width: 100%;
    height: 75px;
}
.payIcon{
    margin-top: 0.05rem;
}
.icon{
    width: 0.2rem;
    height: 0.2rem;
}
.popup-list{
    padding: 0 0.2rem;
    height:3rem;
    overflow: auto;
    margin-top: 0.44rem;
    text-align: left;
}
.subprice{
    width: 20% !important;
    text-align: right!important;
    float: right;
    font-size: 0.16rem;
    color: rgb(153,153,153);
}
.popup-list li{
    position: relative;
    min-height:0.5rem;
    line-height: 0.5rem;
}
.popup-list li>div{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}
.popup-list li>div .title {
    width: 70%;
    font-family: STHeitiSC-Medium;
    font-size: 17px;
    color: #333;
    letter-spacing: .67px;
}
.popup-list li:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
    color: #e5e5e5;
    transform-origin: 0 100%;
    transform: scaleY(.5);
}
.popup-list li>div .price{
    text-align: right;
    width: 30%;
    font-family: PingFang-SC-Medium;
    font-size: 17px;
    color: #333;
    letter-spacing: .72px;
}
.totle-price{
    text-align: right;
    padding: 0 20px;
    margin-top: 10%;
    font-family: HelveticaNeue;
    font-size: 24px;
    color: #fc5a3f;
    letter-spacing: .13px;
}
.totle-price span{
    font-family: STHeitiSC-Medium;
    font-size: 16px;
    color: #fc5a3f;
    letter-spacing: .67px;
    margin-right: 20px;
}
.totle-price em{
    font-family: STHeitiSC-Light;
    font-size: 17px;
    color: #fc5a3f;
    letter-spacing: 0;
}
em{
    font-style: normal;
}
.content{
    font-size: 0.14rem;
    text-align: left;
    width: 3.5rem;
    height: 1.5rem;
    margin: 0rem auto;
    line-height: 0.23rem;
    margin-top: 0.1rem;
}
.payContent-touch{
    margin-bottom: 0.2rem;
    width: 3.5rem;
    line-height: 0.2rem;
    margin: 0rem auto;
    text-align: left;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
    border-bottom: 0.01rem gainsboro solid;
    font-size: 0.14rem;

}
.payContent-touch p{
    color: #999;
    line-height: 0.3rem;
}
.payContent-touch>span:nth-of-type(1){
    color: #999;
}
.payContent-touch>span:nth-of-type(2){
    margin-left: 0.2rem;
    font-weight: 600;
}
.payContent-toucha{
    text-align: left;
    width: 3.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin: 0rem auto;
}
.payContent-toucha>span:nth-of-type(1){
    color: #999;
}
.payContent-toucha>span:nth-of-type(2){
    margin-left: 0.2rem;
    font-weight: 600;
}
.status{
    width: 3.5rem;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.1rem;
    margin: 0rem auto;
    border-bottom: 0.01rem solid gainsboro;
    line-height: 0.4rem;
}
.status>span:nth-of-type(1){
    color: #999;
}
.status>span:nth-of-type(2){
    color: #ff5523;
    font-size: 0.14rem;
}
   .border{
       border-bottom: 0.01rem gainsboro solid;
   }
    .content p{
        color: #999;
    }
    .contentSpan{
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
    }
  .color-a{
      font-size: 19px;
      color: #fc5a3f;
      font-weight: 600;
  }
    .color-b{
        color: skyblue;
        font-size: 0.12rem;
        font-weight: 600;
    }
    .color-b:after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 5px;
        margin-left: 5px;
        background: url("../../../assets/images/xl_home_img/order_jie.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .spana{
        color: black;
        font-size: 0.14rem;
        font-weight: 600;
        margin-left: 0.35rem;
    }
.spanb{
    color: black;
    font-size: 0.14rem;
    font-weight: 600;
    margin-left: 0.2rem;
}
.spanc{
    color: black;
    font-size: 0.14rem;
    font-weight: 600;
    margin-left: 0.45rem;
}
    .tour{
        display: inline-block;
        width: 0.6rem;
        height: 0.2rem;
        background: #ff5c5d;
        color: white;
        line-height: 0.2rem;
        margin-left: -2.9rem;
        border-bottom-left-radius: 0.05rem;
        border-bottom-right-radius: 0.05rem;
    }
.tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20px;
    background: #fff;
    min-height: 60px;
    border-top: 1px solid #e5e5e5;
    text-align: right;
}
</style>