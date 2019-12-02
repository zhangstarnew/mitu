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
                <div v-if="changComment">
                    <span @click="goComm">出行成功</span>
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
            <!--    确认出行成功弹出框结束  -->
            <div class="mitu_dialog_alert" v-show="goShow">
                <div class="mitu_mask mitu-fade-transition"></div>
                <div class="mitu_dialog mitu-dialog-transition">
                    <div class="mitu_dialog_bd">
                        <div class="booking-alert-content">
                            <p class="booking-alert-title">确认已出行？</p>
                            <div class="alert-btn">
                                <button class="xl-mitu_btn" @click="exit"> 否 </button>
                                <button class="xl-mitu_btn" @click="goOn"> 是 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 确认出行成功弹出框结束   -->

            <div>
                <van-popup v-model="payDetalishow" closeable
                           position="bottom"
                           :style="{ height: '80%' }"
                >
                    <h1 class="order_paymoney">确认付款</h1>
                    <div class="subprice"><span style="font-size: 0.16rem">￥</span>{{orderDetail.price}}</div>
                    <ul class="popup-list">
                        <li>
                            <div>
                                <div class="title" >支付账号</div>
                                <div class="price" >{{this.userName}}</div>
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
            <!--    取消成功弹出框-->
            <van-popup v-model="cutOrderShow"  closeable>
                <div class="info-box">
                    <i class="icon-succeed"></i>
                    <p class="info-title" >取消成功</p>
                    <p class="info-desc">正调转至订单页面...</p>
                </div>
            </van-popup>
            <!--    出行成功弹出框-->
            <van-popup v-model="commentShow"  closeable>
                <div class="info-box">
                    <i class="icon-succeed"></i>
                    <p class="info-title" >出行成功</p>
                    <p class="info-desc">正调转至订单页面...</p>
                </div>
            </van-popup>
            <!--   支付失败弹出框         -->
            <van-popup v-model="payfailShow"  closeable>
                <div class="info-box">
                    <i class="icon-fail"></i>
                    <p class="info-title" >支付失败,余额不足</p>
                    <p class="info-desc">正调转至充值页面...</p>
                </div>
            </van-popup>
        </div>
         <date-loading v-else></date-loading>
    </div>
</template>

<script>
    import orderDetailApi from "../../../xl_api/orderDetailApi";
    import payContent from "./payContent";
    import {Dialog,Popup,Toast,PasswordInput, NumberKeyboard} from 'vant'
    import loading from '../../common/xl_order_loading'
    //import axios from 'axios'
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
                goShow:false,  //确认出行成功
                flag:false,   //确认取消订单
                orderDetail:null,  //接收端口数据
                orderId:null,  //传参订单Id
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
                goodsId:null,
                cutOrderShow:false,  //取消成功弹出框
                userId:null,
                payfailShow:false,   //支付失败弹出框
                totalMoney:null,
                changComment:false, //改变为待评价状态
                commentShow:false
            }
        },
        methods: {
            // 获取订单详情页接口  参数：订单id  获取路由的id
            async getorderDate() {
                //路由传订单id
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
                    //this.goComment = true
                }else if(this.orderDetail.status == "已完成" || this.orderDetail.status == "已取消" ){
                    this.isShow = false
                    // this.isShow = true
                    // this.goPay = true
                }else if(this.orderDetail.status == "待评价"){
                    this.isShow = true
                    this.goComment = true
                }else if(this.orderDetail.status == "待出行"){
                    this.isShow = true
                    this.changComment = true
                }
                // console.log(this.orderDetail)
            },

            //取消成功弹出框
            showPopup() {
                this.cutOrderShow = true;
            },
            //返回
            back() {
                this.$router.go(-1)
            },

            //去支付显示弹出框
            payOrder(){
                this.payDetalishow =true
                //console.log(this.payDetalishow)
            },
            //支付密码
            showKeys(){
                this.payKey = true
                this.showKey = true;
                this.showKeyboard = true
                //console.log(this.showKeyboard)
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
                    // userId
                    let data = await orderDetailApi.goPay(this.userId,this.orderId,this.dataPrice)
                    //console.log(data)
                    if(data.status == 1){
                        this.$router.push('/main/paysuccessful')
                    }else if(data.status == 0){
                        this.payfailShow = true
                        setTimeout(()=>{
                            this.$router.push('/main/balance')
                        },3000)
                    }

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
            //改变状态为评价
           goComm() {
                this.goShow = true
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
                if(data.status == 1){
                    this.cutOrderShow = true
                    setTimeout(()=>{
                        this.$router.push('/main/personal/order/0')
                    },3000)
                }
            },

            async goOn() {
                this.goShow = false
               let data = await orderDetailApi. goSuccessful(this.orderId)
                console.log(data)
               if(data.status == 3){
                    this.commentShow = true
                    setTimeout(()=>{
                        this.$router.push('/main/personal/order/0')
                    },3000)
               }
            },

        },
        created() {
            // this.initData(null);
            this.getorderDate();
            //用户账号
            let b = window.sessionStorage.data
            this.userName  = b
            let a = window.sessionStorage.ud_id
            this.userId = a;
        },
    }
</script>

<style scoped>
    @import "../../../assets/css/xl_home_css/xl_orderDetail.css";
</style>