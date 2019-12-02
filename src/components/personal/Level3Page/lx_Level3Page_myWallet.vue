<template>
    <div class="integration">
        <div class="property">
            <a href="#/main/myWallet"><span class="return"></span></a>
            <span class="my_wallet">余额</span>
        </div>
        <div class="integration_details">
            <p>
                <span class="assets">可用余额(元)</span>
                <span class="synax_cli"  @click="changeStyle" v-show="flag == false"></span>
                <span class="synax" v-show="flag == true" @click="changeStyle"></span>
                <span class="totalMoney" v-show="flag == false">******</span>
<!--                <span class="hidenMoney" v-show="flag == true" v-text="hidenPrice"></span>-->
                <span class="hidenMoney" v-show="flag == true" >{{this.hidenPrice}}</span>
            </p>
        </div>
        <div class="recharge">
            <p @click="showDialog">
                <span class="charge">充值</span>
                <span class="right_arrows"></span>
            </p>

            <div class="mitu_dialog_alert" v-show="show">
                <div class="mitu_mask mitu-fade-transition"></div>
                <div class="mitu_dialog mitu-dialog-transition">
                    <div class="mitu_dialog_bd">
                        <div class="booking-alert-content">
                            <input type="text" class="scanf" placeholder="请输入金额" v-model="pushMoney">
                            <div class="alert-btn">
                                <span clas="cross"></span>
                                <button class="xl-mitu_btn" @click="exit"> 确定 </button>
                                <button class="xl-mitu_btn" @click="cancel"> 取消 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 支付密码框-->
            <div class="order_pass" v-show="showKey">
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
                    > <div slot="extra-key" class="sucPay" @click="finshOrder">完成</div>
                    </van-number-keyboard>
                    <!--                    <extra-key>删除</extra-key>-->
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Dialog,Popup,Toast,PasswordInput, NumberKeyboard } from 'vant'
    export default {
        name: "lx_Level3Page_myWallet",
        data(){
            return {
                hidenPrice:"",
                flag:false,
                show: false,
                myWallet:[],
                pushMoney:'',
                a:0,
                price:0,
                showKey:false, //密码键盘显示
                payKey:false, //输入密码
                showKeyboard: true,
                userName:'',
                value: '', //键盘输入密码值
            }
        },
        components:{
            [Dialog.Component.name]: Dialog.Component,
            [Popup.name]:Popup,
            [PasswordInput.name]: PasswordInput,
            [NumberKeyboard.name]: NumberKeyboard,
            // eslint-disable-next-line vue/no-unused-components
            Toast,

        },
        methods: {
            changeStyle(){
                this.flag = !this.flag;
            },
            showDialog(){
                this.show = true;
            },
            cancel(){
                this.show = false;
            },
            exit() {
                var money = document.querySelector(".scanf");
                sessionStorage.setItem("price", money.value);
                console.log(sessionStorage.price);
                this.showKey = true;
                this.payKey= true;
                this.showKeyboard = true
                this.show = false;

            },
            //支付密码弹出框
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
            finshOrder(){
                if(this.value.length===6){
                    this.payKey = !this.payKey
                    this.value="";
                }else {
                    this.$toast("输入密码错误");
                }
                this.a= sessionStorage.getItem("ud_id");
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    transformRequest: [function (data) {
                        data = JSON.stringify(data)
                        return data
                    }],
                    url: "http://117.78.9.95/api/wallet/",
                    method: "POST",
                    data: { //body
                        ud_id:this.a,
                        recharge_num: this.pushMoney
                    }
                }).then(res => {
                    // console.log(res.data);
                    this.myWallet = res.data;
                   // console.log(res.data)
                    //console.log(this.myWallet.w_acount);
                    this.hidenPrice=this.myWallet.w_acount;
                    // console.log(this.hidenPrice);
                    //sessionStorage.setItem("total_money",this.hidenPrice)
                })
            }
        },
        created() {
            this.a= sessionStorage.getItem("ud_id")
            axios.get("http://117.78.9.95/api/wallet/?ud_id="+this.a)
                .then(res=>{
                    //console.log(res.data);
                    this.hidenPrice=res.data.data.w_acount;
                    //console.log(this.money);
                    //sessionStorage.setItem("total_money",this.money);
                })
        },
        beforeUpdate() {
            this.hidenPrice=sessionStorage.getItem("total_money")
            //console.log(this.hidenPrice)
        }
    }
</script>

<style scoped>
    .integration{
        width: 100%;
        height: 1.5rem;
        background-color:rgb(255,85,35) ;
        z-index:0;
        text-align: left;
    }
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.1rem 0;
        color: white;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.7rem;
        color: white;
    }
    .return{
        display: inline-block;
        width:0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/return_white.png") no-repeat;
        background-size:60% 60%;
        font-size: 0;
        position: absolute;
        left: 0.1rem;
    }
    .integration_details{
        font-size: 0;
        color: white;
    }
    .synax_cli{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/hide_white.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left: 0.3rem;
        top: 0.25rem;
    }
    .synax{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/show_white.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left: 0.3rem;
        top: 0.25rem;
    }
    .assets{
        font-size: 0.14rem;
        position: relative;
        left: 0.2rem;
        top: 0.2rem;
    }
    .totalMoney{
        font-size: 0.26rem;
        font-weight: 600;
        text-align: left;
        position: relative;
        top: 0.5rem;
        left: -0.75rem;
    }
    .hidenMoney{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
        font-size: 0.26rem;
        position: relative;
        top: 0.5rem;
        left: -0.75rem;
    }
    .recharge{
        width: 100%;
        font-size: 0.14rem;
        background-color: white;
        margin-top: 0.8rem;
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid gainsboro;
    }
    .charge{
        margin-left: 0.2rem;
    }
    .right_arrows{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        background: url("../../../assets/images/lx_img/arrows.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left:3rem;
        top: 0.05rem;
    }
    .scanf{
        width: 2rem;
        height: 0.25rem;
        border-radius: 0.05rem 0.05rem;
        margin: 0.1rem 0 0.1rem 0.1rem;
    }
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