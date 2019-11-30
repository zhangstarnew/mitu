<template>
    <div class="xl-order-con" v-if="travelDate">
        <!--主页面开始-->
        <div>
            <!--头部开始-->
            <header class="yz_header">
                <span class="yz_iconBack" @click="back" ></span>
                <p>订单填写</p>
            </header>
            <div class="order-kong"></div>
            <!--头部结束-->
            <!-- 弹出框开始-->
            <div class="mitu_dialog_alert" v-show="flag">
                <div class="mitu_mask mitu-fade-transition"></div>
                <div class="mitu_dialog mitu-dialog-transition">
                    <div class="mitu_dialog_bd">
                        <div class="booking-alert-content">
                            <p class="booking-alert-title">订单尚未提交是否退出</p>
                            <div class="alert-btn">
                                <button class="xl-mitu_btn" @click="exit"> 确定 </button>
                                <button class="xl-mitu_btn" @click="cancel"> 取消 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--弹出框结束-->
            <!--内容开始-->
            <div class="xl-order-section">
                <!--产品信息开始-->
                <section class="mitu-section order-info" >
                    <div class="order-info-title" v-if="travelDate.data">
                        <p class="p-title"><span>产品编号：{{goodsId}}</span></p>
                        <p class="p-title">{{travelDate.data.v_desc}}</p>
                    </div>
                    <div class="order-info-detail">
                        <p class="p-detail">
                            <b>{{travelDate.start_time}}</b>
                            <span>出发</span>
                        </p>
                    </div>
                </section>
                <!--产品信息结束 -->
                <!--联系人信息开始-->
                <section class="mitu-section contact-info">
                    <div class="section-title">联系人信息</div>
                    <div class="section-group">
                        <div class="form-item">
                            <div class="form-item-title" >姓名</div>
                            <div class="form-item-inner">
                               <keep-alive>
                                   <input placeholder="必填" class="form-input" :class="{ayRed:nameFlag === false}" v-model="userName"   @focus="nameFlag=true">
                               </keep-alive>
<!--                                @blur="checkname()"-->
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="form-item-title">手机</div>
                            <div class="form-item-inner">
                                <input placeholder="必填" class="form-input" :class="{ayRed:phoneFlag === false}" v-model="userPhone" @focus="phoneFlag=true" >
                            </div>
                        </div>
                        <div class="form-item">
                            <div class="form-item-title">邮箱</div>
                            <div class="form-item-inner">
                                <input placeholder="用于接收出行通知" class="form-input" :class="{ayRed:emailFlag === false}" v-model="email" @focus="emailFlag=true">
                            </div>
                        </div>
                    </div>
                </section>
                <!--联系人信息结束-->
                <!--出行人信息开始-->
                <section class="ay-section traveller-info">
                    <div class="section-title">
                        <p>出行人信息</p>
                        <a @click="addTraveler" :class="{active:addPeople == true}">
                            <i class="icon-checker"></i>稍后填写
                        </a>
                    </div>
                    <div class="section-group" v-if="addPeople==false">
                        <div class="form-item">
                            <div class="form-item-title">出行人1</div>
                            <div class="form-item-inner with-arrow" @click="add">
                                <div class="form-value" style="display: none;">
                                    <p class="inner-title"> {{travelPerson}}</p>
                                    <p class="inner-desc"> </p>
                                </div>
                                <div class="form-placeholder">请提供出行人信息</div>
                            </div>
                        </div>
                    </div>
                </section>
                <!--出行人信息结束-->
            </div>
            <div class="footer-wrap" v-if="travelDate.data">
                <div class="footer-bar">
                    <div class="footer-item ay-center-v">
                        <div v-if="travelDate.data">
                            <p class="footer-price">
                            <em>¥{{travelDate.data.price}}</em>
                            <a href="javascript:void(0);" @click="showPayDetail">明细</a></p>
                        </div>
                    </div>
                    <div class="footer-item ay-center-v">
                        <div class="service-tel">
                            <a name="hometel" :href="'tel:'+tel">
                                <i class="icon-service"></i>
                                <svg class="icon" height="200" p-id="2243" t="1574751975468" version="1.1"
                                     viewBox="0 0 1024 1024" width="200" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M798.758 373.71h48.743c-24.974-62.793-66.801-115.811-119.227-154.443-59.578-43.906-132.905-69.244-210.781-69.244-77.877 0-151.202 25.338-210.781 69.244-52.428 38.633-94.252 91.65-119.226 154.443h36.649c13.824 0 26.473 5.69 35.683 14.855l0.049 0.057 0.055 0.047c9.179 9.209 14.857 21.853 14.857 35.683v261.945c0 13.838-5.69 26.472-14.857 35.684l-0.055 0.044-0.049 0.058c-9.21 9.179-21.854 14.854-35.683 14.854h-59.029c-30.113 0-57.505-12.332-77.369-32.188l-0.102-0.102c-19.852-19.864-32.188-47.255-32.188-77.363V483.375c0-30.186 12.331-57.607 32.194-77.471l0.053 0.053c12.058-12.052 26.866-21.333 43.356-26.781 26.933-82.614 78.645-152.116 145.341-201.27 68.221-50.273 152.092-79.282 241.101-79.282 89.004 0 172.881 29.008 241.102 79.282 68.225 50.279 120.78 121.851 147.162 206.96a110.937 110.937 0 0 1 29.441 21.09l0.053-0.053c19.864 19.864 32.196 47.285 32.196 77.471v143.909c0 30.108-12.336 57.499-32.188 77.363l-0.102 0.102c-19.864 19.855-47.259 32.188-77.371 32.188h-16.381l6.668 4.748c-38.188 53.37-88.051 95.872-144.725 125-56.787 29.189-120.37 45.037-185.856 45.037l-2.038-0.004c-8.404 8.768-20.244 14.229-33.354 14.229-25.525 0-46.211-20.69-46.211-46.213s20.686-46.209 46.211-46.209c18.563 0 34.57 10.949 41.918 26.74 55.055-1.005 108.27-14.709 155.845-39.162a355.11 355.11 0 0 0 107.883-85.391c-9.464-2.136-17.972-6.958-24.673-13.63l-0.049-0.058-0.053-0.044c-9.179-9.212-14.859-21.838-14.859-35.684V424.352c0-13.83 5.681-26.473 14.859-35.683l0.053-0.047 0.049-0.057c9.214-9.179 21.839-14.855 35.686-14.855zM223.38 425.108h-58.274c-16.059 0-30.619 6.528-41.125 17.034v0.102c-10.571 10.57-17.136 25.136-17.136 41.131v143.909c0 16.03 6.549 30.609 17.083 41.172 10.563 10.533 25.143 17.084 41.178 17.084h58.274V425.108z m634.407 0h-58.273V685.54h58.273c16.034 0 30.617-6.551 41.18-17.084 10.533-10.563 17.08-25.142 17.08-41.172V483.375c0-15.995-6.566-30.561-17.134-41.131v-0.102c-10.505-10.505-25.067-17.034-41.126-17.034z"
                                          fill="#999999" p-id="2244"></path>
                                </svg>
                                <p>客服电话</p>
                            </a>
                        </div>
                        <button v-show="addPeople==true" class="ay_btn ay_btn_disabled ay_btn_primary" @click="sumbit"> 提交订单</button>
                        <button v-show="addPeople==false" class="ay_btn ay_btn_disabled ay_btn_primary" @click="payMoney">
                            去支付
                        </button>
                    </div>
                </div>
            </div>
            <!-- 确认付款-->
            <div v-if="showKey===false">
                <van-popup v-model="show" closeable
                           position="bottom"
                           :style="{ height: '80%' }"
                >
                    <h1 class="order_paymoney">确认付款</h1>
                    <div class="subprice" v-if="travelDate.data">
                        <span style="font-size: 0.16rem">￥</span>
                        {{travelDate.data.price}}
                    </div>
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
                        <div v-if="travelDate.data">
                            <div class="price-title">出游费用</div>
                            <div class="price" >￥{{travelDate.data.price}}</div>
                        </div>
                    </li>
                </ul>
                <div class="totle-price" v-if="travelDate.data">
                    <span >总额</span>
                    <em >¥ </em>{{travelDate.data.price}}
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
                            v-if="showKey"

                    />
                    <!--数字键盘-->
                    <van-number-keyboard
                            :show="showKeyboard"
                            @input="onInput"
                            @delete="onDelete"
                            @blur="showKeyboard = false"
                            v-if="showKey"
                    > <div slot="extra-key" class="sucPay" @click="finshOrder">完成</div></van-number-keyboard>
                </van-popup>
            </div>
            <!--添加出行人 -->
            <van-popup v-model="travelPer" closeable
                       :style="{ height: '100%' }"
            >
                <div class="allAddPre">
                    添加出行人
                </div>
            </van-popup>
        </div>
        <!--主页面结束-->
    </div>
    <date-loading v-else></date-loading>
</template>

<script>
    import {Dialog,Popup,Toast,PasswordInput, NumberKeyboard} from 'vant'
    import loading from '../common/xl_loding'
    import optionalDataApi from '../../xl_api/optionalDateApi'
    export default {
        name: "xl-optionalDate",
        data(){
            return{
                useAccount:'', // 支付账户
                travelPerson:'', //添加出行人
                value: '',
                travelPer:false, //编辑出行人信息
                showKeyboard: true,
                showKey:false, //密码键盘显示
                flag:false,
                userName:'',
                userPhone:'',
                email:'',
                nameFlag:'',
                phoneFlag:'',
                emailFlag:'',
                tel:'400 - 600 - 6666',
                addPeople:true,
                show: false,//   vant弹出框去支付
                payDetail:false, //支付详情弹出框
                payKey:false, //输入密码
                travelDate:[],//接收后端数据
                detailData:[], //接收仓库中的所有数据
                detailList:[], //接收符合条件的数据
                goodsId:'',
                returnValue:''
            }
        },
        components: {
            [Dialog.Component.name]: Dialog.Component,
            [Popup.name]:Popup,
            [PasswordInput.name]: PasswordInput,
            [NumberKeyboard.name]: NumberKeyboard,
            // eslint-disable-next-line vue/no-unused-components
            Toast,
            "date-loading":loading
        },
        created() {
            //路由传商品id
            let a = this.$route.params.id;
            this.goodsId=a;
            this.getDate();
            let b = sessionStorage.getItem("data")   //获取到账号
            this.useAccount = b
        },
        methods:{
            //支付详情弹出框
            showPayDetail(){
                this.payDetail = true;
            },
            //支付密码弹出框
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
            //密码框消失重定向页面
            finshOrder(){
                if(this.value.length===6){
                    this.payKey = !this.payKey
                    this.$router.push('/main/personal')
                }else {
                    this.$toast("输入密码错误")
                }
            },
            //支付密码
            showKeys(){
                this.payKey = !this.payKey
                this.showKey = ! this.showKey
            },
            //去支付
            payMoney(){
                this.checkFlag()
                if( this.nameFlag && this.phoneFlag && this.emailFlag){
                    this.show =!this.show
                }
            },

            // 获取商品信息接口  参数： v_id='+goodsId
            async getDate() {
                let data= await optionalDataApi.getTravelData(this.goodsId)
                this.travelDate = data;
                console.log(this.travelDate)
            },

            back(){
                this.flag = !this.flag
            },
            cancel(){
                this.flag = false
            },
            exit(){
                this.$router.go(-1)
            },
            addTraveler(){
                this.addPeople = !this.addPeople
            },
            //添加出行人
            add(){
                this.travelPer = true
            },
            //确认下订单 提交数据接口  参数：
            //         ud_id:2,
            //         v_id:2,
            //         name:this.userName,
            //         phone_:this.userPhone,
            //         email_:this.email,

            sumbit() {
                this.checkFlag()
                this.postDate()
                if( this.nameFlag && this.phoneFlag && this.emailFlag){
                    //this.$router.push('/main/personal')
                    // window.location.replace('http://106.13.228.250/succeed/#/book')
                }
            },
            async postDate(){
                let a = window.sessionStorage.ud_id
                let data= await optionalDataApi.setmessageData(a,this.goodsId,this.userName,this.userPhone,this.email)
                this.returnValue = data;
                console.log( this.returnValue)
            },
            //预订成功跳转页面
            bookSuccessful(){
               this.$router.push('/main/personal')

            },
            // 正则验证
            checkFlag(){
                let a = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                let b = /^1[35789]\d{9}$/;
                let c = /^\w+[@]\w+\.com$/;
                if(this.userName === '' && this.userPhone === '' && this.email === ''){
                    this.$toast('请把联系人信息补充完整');
                    this.nameFlag=false
                    this.phoneFlag=false
                    this.emailFlag=false
                }else if (!a.test(this.userName)){
                    this.$toast('姓名请输入中文或字母(不带空格)');
                    this.nameFlag=false
                    if (!c.test(this.email)){
                        this.emailFlag=false
                    }
                    if (!b.test(this.userPhone)){
                        this.phoneFlag=false
                    }
                }else if (!b.test(this.userPhone)){
                    this.$toast('请填写正确的手机号码');
                    this.phoneFlag=false
                    if (!c.test(this.email)){
                        this.emailFlag=false
                    }
                }else if (!c.test(this.email)) {
                    this.$toast('请填写正确的邮箱');
                    this.emailFlag = false
                }
            },
        }
    }
</script>

<style scoped>
    @import "../../assets/css/xl_home_css/xl_order_css.css";
    @import "../../assets/css/xl_home_css/xl_optionalDate_css.css";
</style>