<template>
    <div id="pay">
        <!--头部开始-->
        <header class="yz_header">
            <span class="yz_iconBack" @click="back" ></span>
            <p>订单详情</p>
        </header>
        <div class="order-kong"></div>
        <!--头部结束-->
        <!-- v-if="orderDetail"-->
        <div class="order_detail_con" v-if="orderDetail">
            <!--  内容开始    -->
            <div>
                  <pay-content :date="orderDetail"></pay-content>
            </div>
            <!-- 底部开始    -->
            <footer class="footer" v-if="isShow">
                <div v-if="goPay">
                    <span @click="cutOrder">取消订单</span><span @click="payOrder">去支付</span>
                </div>
                <div v-if="goComment">
                    <span @click="next">去评价</span>
                </div>
            </footer>
            <!-- 取消订单弹出框开始-->
            <div class="mitu_dialog_alert" v-show="flag">
                <div class="mitu_mask mitu-fade-transition"></div>
                <div class="mitu_dialog mitu-dialog-transition">
                    <div class="mitu_dialog_bd">
                        <div class="booking-alert-content">
                            <p class="booking-alert-title">是否取消？</p>
                            <div class="alert-btn">
                                <button class="xl-mitu_btn" @click="exit"> 否 </button>
                                <button class="xl-mitu_btn" @click="cancel"> 是 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--弹出框结束-->
            <!-- 确认付款-->
            <div>
                <van-popup v-model="payDetalishow" closeable
                           position="bottom"
                           :style="{ height: '80%' }"
                >
                    <h1 class="order_paymoney">确认付款</h1>
                    <div class="subprice"><span style="font-size: 0.16rem">￥</span>0</div>
                    <ul class="popup-list">
                        <li>
                            <div>
                                <div class="title" >支付账号</div>
                                <div class="price" >125454631</div>
                            </div>
                        </li>
                        <li>
                            <div >
                                <div class="title">付款方式</div>
                                <div class="price" >余额 > </div>
                            </div>
                        </li>
                    </ul>
                    <button class="mitu-imdaetly" @click="showKeys">立即付款</button>
                </van-popup>
            </div>
            <!--支付详情弹出框-->
            <van-popup v-model="payDetail" closeable
                       position="bottom"
                       :style="{ height: '80%' }"
            >
                <ul class="popup-list">
                    <li>
                        <div>
                            <div class="price-title">出游费用</div>
                            <div class="price" >￥0</div>
                        </div>
                    </li>
                </ul>
                <div class="totle-price" >
                    <span >总额</span>
                    <em >¥ </em>
                </div>
            </van-popup>
            <!-- 支付密码框-->
            <div class="order_pass" v-if="showKey">
                <van-popup v-model="payKey" closeable
                           position="bottom"
                           :style="{ height: '60%' }"
                >
                    <!-- 密码输入框 -->
                    <van-password-input
                            :value="value"
                            info="密码为 6 位数字"
                            :focused="showKeyboard"
                            @focus="showKeyboard = true"

                    />
                    <!--数字键盘-->
                    <van-number-keyboard
                            :show="showKeyboard"
                            @input="onInput"
                            @delete="onDelete"
                            @blur="showKeyboard = false"
                    > <div slot="extra-key" class="sucPay" @click="finshOrder">完成</div></van-number-keyboard>
                    <!--                    <extra-key>删除</extra-key>-->
                </van-popup>
            </div>
        </div>
         <date-loading v-else></date-loading>
    </div>
</template>

<script>
    import orderDetailApi from "../../../xl_api/orderDetailApi";
    import payContent from "./payContent";
    import {Dialog,Popup,Toast,PasswordInput, NumberKeyboard} from 'vant'
    // import axios from 'axios'
    import loading from '../../common/xl_order_loading'
    export default {
        name: "pay",
        components:{
            payContent,
            [Dialog.Component.name]: Dialog.Component,
            [Popup.name]:Popup,
            [PasswordInput.name]: PasswordInput,
            [NumberKeyboard.name]: NumberKeyboard,
            // eslint-disable-next-line vue/no-unused-components
            Toast,
            "date-loading":loading
        },
        data(){
            return{
                // date:[
                //     {
                //         number:'061911186795',
                //         title:'欧洲—【员工和老客户特惠专享】奥地利+捷克10日游【四星酒店/布拉格城堡/ck世遗小镇/音乐之声取景地/芬兰航空】',
                //         status:'待付款',
                //         time:'2020-01-09至2020-01-17',
                //         peopleNum:'1',
                //         router:'A',
                //         name:'xxx',
                //         handSet:'18022223333',
                //         postBox:'xxxxxx@163.com',
                //         price:'6999'
                //     }
                // ],
                flag:false,
                orderDetail:null,  //接收端口数据
                orderId:'',  //传参订单Id
                isShow:false,  //控制底部
                cancelOrder:false,  //取消订单成功框
                goPay:false,   // 去支付
                goComment:false,
                showKey:false, //密码键盘显示
                payDetalishow: false,//   vant弹出框去支付
                payDetail:false, //支付详情弹出框
                payKey:false, //输入密码
                showKeyboard: true,
                userName:'',
                value: '', //键盘输入密码值
                dataPrice:null, //接受价格
                goodsId:null
            }
        },
        methods: {
            // 获取订单详情页接口  参数：订单id  获取路由的id
            async getorderDate() {
                //路由传商品id
                let a = this.$route.params.id;
                this.orderId=a;
                let data = await orderDetailApi.getOrderData(this.orderId)
                this.orderDetail = data
                this.dataPrice = data.price
                this.goodsId = data.v_id
                if(this.orderDetail.status == "待支付"){
                    this.isShow = true
                    this.goPay = true
                    // this.isShow = true
                    this.goComment = true
                }else if(this.orderDetail.status == "待出发" || this.orderDetail.status == "已完成" ){
                    // this.isShow = false
                    this.isShow = true
                    this.goPay = true
                }else if(this.orderDetail.status == "待评价"){
                    this.isShow = true
                    this.goComment = true
                }
                // console.log(this.orderDetail)
            },

            back() {
                this.$router.go(-1)
            },

            //去支付显示弹出框
            payOrder(){
                this.payDetalishow =true
                console.log(this.payDetalishow)
            },
            //支付密码
            showKeys(){
                this.payKey = true
                this.showKey = true;
                this.showKeyboard = true
                console.log(this.showKeyboard)
            },
            //支付详情弹出框
            showPayDetail(){
                this.payDetail = true;
            },
            //支付密码弹出框
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },

            //密码框消失重定向页面
            //去支付接口  参数： ud_id:7, //用户id
            //                 order_id:32,   //
            //                 price:500
            async finshOrder(){
                if(this.value.length===6){
                    // this.payKey = !this.payKey
                    // userId
                    let data = await orderDetailApi.goPay(1,this.orderId,this.dataPrice)
                    console.log(data)
                    this.$router.push('/main/personal')
                }else {
                    this.$toast("输入密码错误")
                }
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
            //去评价
            next() {
                this.$router.push('/main/xl_detail/comment/'+this.goodsId+'/'+this.orderId);
            },
            //取消订单 否
            exit() {
                this.flag = false
            },
            //取消订单按钮
            cutOrder() {
                this.flag = true
            },

            //取消订单 是 接口  参数 :订单id  :order_id &  type_:1
            async cancel() {
                this.flag = false
                let data = await orderDetailApi.delOrder(this.orderId)
                console.log(data)
            },

        },
        created() {
            // this.initData(null);
            this.getorderDate();
            //用户账号
            let b = window.sessionStorage.data
            this.userName  = b
        },
    }
</script>

<style scoped>
    #pay{
        display: flex;
        font-size: 0.12rem;
        height: 100%;
        background-color: #f5f5f5;
    }
    .yz_header{
        width: 100%;
        height: 0.44rem;
        z-index: 5002;
        border-bottom: 1px solid #dfdfdf;
        background-color: white;
    }
    .yz_header p{
        font-size: 0.19rem;
        line-height: 0.44rem;
        position: absolute;
        left: 40%;
    }
    .yz_iconBack{
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin: 0.11rem 0 0.11rem 0.2rem;
        background-image: url("../../../assets/images/xl_home_img/leftArrowBlack.png");
        background-repeat: no-repeat;
        background-size: contain;
    }

    .footer{
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
    .footer span{
        display: inline-block;
        margin-top: 15px;
        margin-left: 4px;
        min-width: 75px;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border: 1px solid #dfdfdf;
        border-radius: 15px;
        text-align: center;
        font-family: STHeitiSC-Light;
        font-size: 14px;
        color: #333;
        letter-spacing: 0;
    }
    .footer span:nth-of-type(2){
        margin-left: 0.1rem;
    }
    .footer span:last-child {
        border: 1px solid #ff5523;
        color: #ff5523;
    }

    /*弹出框*/
    /*弹出框*/
    .mitu-fade-transition {
        opacity: 1;
        transition: opacity .2s linear;
    }
    .mitu_mask {
        z-index: 1000;
        background: rgba(0,0,0,.6);
    }
    .mitu_mask{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .mitu-dialog-transition {
        opacity: 1;
        transition-duration: .4s;
        transform: translate(-50%,-50%) scale(1)!important;
        transition-property: transform,opacity,-webkit-transform!important;
    }
    .mitu_dialog {
        position: fixed;
        z-index: 5000;
        width: 2.7rem;
        top: 50%;
        left: 50%;
        background-color: #fafafc;
        text-align: center;
        border-radius: 0.03rem;
        overflow: hidden;
    }
    .mitu_dialog_bd {
        padding: 0 0.2rem;
        font-size: 0.14rem;
        color: #888;
    }
    .booking-alert-content {
        padding: 0.25rem 0 0.3rem;
    }
    .booking-alert-title {
        font-size: 0.14rem;
        font-weight: 300;
        color: #333;
        line-height:0.2rem;
    }
    .alert-btn {
        display: flex;
        align-items: center;
        margin-top: 0.25rem;
        padding: 0 0.1rem;
        width: 100%;
        box-sizing: border-box;
    }
    .xl-mitu_btn{
        padding: 0 0.05rem;
        width: 1rem;
        height: 0.4rem;
        box-sizing: border-box;
        color: #666;
        border: 1px solid #dfdfdf;
        margin: 0;
        font-size: 0.17rem;
        border-radius: 1rem;
        background-color: white;
    }
    .alert-btn button:last-child {
        color: #41b3ee;
        margin-left: 0.1rem;
    }
    .order_paymoney{
        font-size: 0.2rem;
        font-weight: 400;
        margin-top: 0.16rem ;
        margin-bottom: 0.5rem;

    }
    .mitu-imdaetly{
        border: none;
        width: 3.4rem;
        height: 0.45rem;
        background-color: #337FE5;
        color: white;
        font-size: 0.18rem;
        position: fixed;
        transform: translateX(-50%);
        bottom: 0;
        left: 50%;
        right: 0;
        border-radius: 0.05rem;
    }
    .popup-list{
        padding: 0 0.2rem;
        height:3rem;
        overflow: auto;
        margin-top: 0.44rem;
        text-align: left;
    }
    .subprice{
        text-align: center;
        margin-top: 0.3rem;
        /*width: 20% !important;*/
        font-size: 0.28rem;
        color: #333;
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
        color: rgb(153,153,153);
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
        width: 80%;
        font-family: PingFang-SC-Medium;
        font-size: 17px;
        color: #444444;
        letter-spacing: .72px;
        font-weight: 700;
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
    .van-toast--text {
        width: 1.8rem!important;
        min-height: unset;
        padding: 8px 12px;
    }
    .van-toast{
        background-color: rgba(0,0,0,.8)!important;
    }
    .van-toast--html .van-toast__text, .van-toast--text .van-toast__text {
        padding: 20px 5px;
        font-size: 14px;
        line-height: 20px;
    }
    .order_pass>.van-popup{
        background-color: #f8f8f8!important;
    }
    .van-password-input{
        top: 0.5rem;
    }
    .order_pass{
        display: flex;
    }
    .sucPay{
        font-size: 16px;
    }
    .allAddPre{
        font-size: 0.12rem;
        height: 100%;
        width:3.75rem;
        background-color: white;
    }

</style>