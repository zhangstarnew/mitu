<template>
    <div class="order">
        <div>
            <header class="pay">
                <span class="yz_iconBack" @click="cmdAlert"></span>
                <!--    </span>-->
                <span class="xl-title">订单填写</span>
                <span>&nbsp;</span>
            </header>
            <div class="orderInfo">
                <p class="p-title">订单号：<span>051911260309</span></p>
                <p class="p-text">日本冲绳4晚5天百变自由行【那覇市中心/购物美食两不误/酒店随心加价升级】(国航航班 3小时直达 市区3星酒店 超低起价 +149/人预订专车接送机)</p>
            </div>
            <div class="order-info-detail"><p class="p-detail"><b>2019-12-08</b><span>出发</span> <b>1</b><span>成人</span>
                <b>0</b><span>儿童</span></p></div>
            <section class="ay-section contact-info">
                <div class="section-title">联系人信息</div>
                <div class="section-group">
                    <div class="form-item">
                        <div class="form-item-title">姓名</div>
                        <div class="form-item-inner"><input class="form-input" placeholder="请填写联系人姓名"
                                                            v-model="userName"></div>
                    </div>
                    <div class="form-item">
                        <div class="form-item-title">手机</div>
                        <div class="form-item-inner"><input class="form-input" placeholder="请填写联系人手机"
                                                            v-model="userPhone"></div>
                    </div>
                    <div class="form-item">
                        <div class="form-item-title">邮箱</div>
                        <div class="form-item-inner"><input class="form-input" placeholder="请填写联系人邮箱" v-model="email">
                        </div>
                    </div>
                </div>
            </section>
            <section class="ay-section traveller-info">
                <div class="section-title">出行人信息</div>
                <div class="section-group fix-top-boder">
                    <div class="form-item">
                        <div class="form-item-title">出行人1</div>
                        <div class="form-item-inner with-arrow">
                            <div class="form-value" style="display: none;"><p class="inner-title"> /</p>
                                <p class="inner-desc"></p></div>
                            <div class="form-item-inner">
                                <input class="form-input" placeholder="请提供出行人信息" type="text">
                            </div>
                            <svg @click="alertCard" class="icon" height="200" p-id="5043" t="1574739789863"
                                 version="1.1"
                                 viewBox="0 0 1024 1024" width="200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"
                                      p-id="5044"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ay-section contract-info">
                <div class="contract-inner">
                    <div class="contract-title">米途出行合同<span>未签约</span> <em style="display: none;">已签约</em>
                    </div>
                    <div class="contract-brief"><p>旅行社业务经营许可证编号：MT-00000</p>
                    </div>
                </div>
            </section>
            <div class="footer-wrap">
                <div class="footer-bar">
                    <div class="footer-item ay-center-v">
                        <div><p class="footer-price"><span>待付</span><em>¥4399</em> <a href="javascript:void(0);">明细</a>
                        </p>
                        </div>
                    </div>
                    <div class="footer-item ay-center-v">
                        <div class="service-tel"><a name="hometel"><i class="icon-service"></i>
                            <svg class="icon" height="200" p-id="2243" t="1574751975468" version="1.1"
                                 viewBox="0 0 1024 1024" width="200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M798.758 373.71h48.743c-24.974-62.793-66.801-115.811-119.227-154.443-59.578-43.906-132.905-69.244-210.781-69.244-77.877 0-151.202 25.338-210.781 69.244-52.428 38.633-94.252 91.65-119.226 154.443h36.649c13.824 0 26.473 5.69 35.683 14.855l0.049 0.057 0.055 0.047c9.179 9.209 14.857 21.853 14.857 35.683v261.945c0 13.838-5.69 26.472-14.857 35.684l-0.055 0.044-0.049 0.058c-9.21 9.179-21.854 14.854-35.683 14.854h-59.029c-30.113 0-57.505-12.332-77.369-32.188l-0.102-0.102c-19.852-19.864-32.188-47.255-32.188-77.363V483.375c0-30.186 12.331-57.607 32.194-77.471l0.053 0.053c12.058-12.052 26.866-21.333 43.356-26.781 26.933-82.614 78.645-152.116 145.341-201.27 68.221-50.273 152.092-79.282 241.101-79.282 89.004 0 172.881 29.008 241.102 79.282 68.225 50.279 120.78 121.851 147.162 206.96a110.937 110.937 0 0 1 29.441 21.09l0.053-0.053c19.864 19.864 32.196 47.285 32.196 77.471v143.909c0 30.108-12.336 57.499-32.188 77.363l-0.102 0.102c-19.864 19.855-47.259 32.188-77.371 32.188h-16.381l6.668 4.748c-38.188 53.37-88.051 95.872-144.725 125-56.787 29.189-120.37 45.037-185.856 45.037l-2.038-0.004c-8.404 8.768-20.244 14.229-33.354 14.229-25.525 0-46.211-20.69-46.211-46.213s20.686-46.209 46.211-46.209c18.563 0 34.57 10.949 41.918 26.74 55.055-1.005 108.27-14.709 155.845-39.162a355.11 355.11 0 0 0 107.883-85.391c-9.464-2.136-17.972-6.958-24.673-13.63l-0.049-0.058-0.053-0.044c-9.179-9.212-14.859-21.838-14.859-35.684V424.352c0-13.83 5.681-26.473 14.859-35.683l0.053-0.047 0.049-0.057c9.214-9.179 21.839-14.855 35.686-14.855zM223.38 425.108h-58.274c-16.059 0-30.619 6.528-41.125 17.034v0.102c-10.571 10.57-17.136 25.136-17.136 41.131v143.909c0 16.03 6.549 30.609 17.083 41.172 10.563 10.533 25.143 17.084 41.178 17.084h58.274V425.108z m634.407 0h-58.273V685.54h58.273c16.034 0 30.617-6.551 41.18-17.084 10.533-10.563 17.08-25.142 17.08-41.172V483.375c0-15.995-6.566-30.561-17.134-41.131v-0.102c-10.505-10.505-25.067-17.034-41.126-17.034z"
                                      fill="#999999" p-id="2244"></path>
                            </svg>
                            <p>客服电话</p></a></div>
                        <button class="ay_btn ay_btn_disabled ay_btn_primary" @click="sumbit"> 提交订单</button>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import {Dialog} from 'vant';

    export default {
        name: "order",
        data() {
            return {
                userName: "",
                userPhone: "",
                email: "",
                chosenContactId: null,
                editingContact: {},
                showList: false,
                showEdit: false,
                isEdit: false,
                list: [{
                    name: '张三',
                    tel: '13000000000',
                    id: 0
                }]
            }
        },
        computed: {
            cardType() {
                return this.chosenContactId !== null ? 'edit' : 'add';
            },
            currentContact() {
                const id = this.chosenContactId;
                return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            }
        },
        components: {
            [Dialog.Component.name]: Dialog.Component
        },
        methods: {
            cmdAlert() {
                Dialog.confirm({
                    message: '订单尚未提交是否退出'
                }).then(() => {
                    this.$router.go(-1);
                }).catch(() => {
                });
            },
            alertCard() {
                this.$router.push('/contactCard');
            },
            sumbit() {
                let a = /^.+$/;
                let b = /^1[35789]\d{9}$/;
                let c = /^\w+[@]\w+\.com$/;
                if (a.test(this.userName) && b.test(this.userPhone) && c.test(this.email)) {
                    // this.$router.go(1)
                } else {
                    Dialog.alert({
                        message: '您的信息填写有误，请正确填写，谢谢'
                    }).then(() => {
                        // on close
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .order {
        width: 90%;
        margin: 0 auto;
        font-size: 0.12rem;
        overflow: hidden;
        text-align: left;
    }

    .yz_iconBack {
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin: 0.12rem 0 0 0;
        background-image: url("../../assets/detailImages/leftArrowBlack.png");
        background-repeat: no-repeat;
        background-size: contain;
    }

    .xl-title {
        font-size: 0.19rem;
        line-height: 0.44rem;
        position: absolute;
        left: 36%;
    }

    .orderInfo {
        padding: 0 0.1rem;
        margin-bottom: 0.1rem;
        margin-top: 0.1rem;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 0.01rem solid rgb(245, 245, 245);
    }

    .pay {
        font-size: 0.16rem;
        font-weight: 400;
        width: 3.5rem;
        height: 0.5rem;
        background-color: white;
        display: flex;
        justify-content: space-between;
        line-height: 0.5rem;
        margin: 0rem auto;
        border-bottom: 0.01rem solid rgb(245, 245, 245);
        position: fixed;
        top: 0;
        /*margin-bottom: 0.5rem;*/
    }

    .payIcon {
        margin-top: 0.05rem;
    }

    .icon {
        width: 0.2rem;
        height: 0.2rem;
    }

    .p-title {
        font-size: 0.12rem;
        color: #333;
        font-weight: 300;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        text-align: left;
        margin-bottom: 0.05rem;
        /*-webkit-line-clamp: 1;*/
    }

    .p-text {
        font-size: 14px;
        color: #333;
        font-weight: 300;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .order-info-detail {
        text-align: left;
        padding: 0.2rem 0.1rem;
        width: 100%;
        font-size: 0.14rem;
        line-height: 20px;
        border-bottom: 0.1rem solid rgb(245, 245, 245);
    }

    .orderInfo {
        margin-top: 0.55rem;
    }

    .p-detail {
        display: block;
        width: 100%;
        height: auto;
        line-height: 0;
    }

    .order-info-detail b {
        margin-right: 4px;
        font-family: Helvetica Neue;
        font-size: 14px;
        font-weight: 700;
    }

    .section-title {
        padding: 0.08rem 0.1rem;
        font-size: 17px;
        color: #333;
        line-height: 44px;
        text-align: left;
    }

    .section-group {
        position: relative;
        background-color: #fff;
    }

    .section-group:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #dfdfdf;
        color: #dfdfdf;
        transform-origin: 0 0;
        transform: scaleY(.5);
    }

    .booking-wrap-content .form-item {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 0;
        width: 100%;
        box-sizing: border-box;
    }

    .booking-wrap-content .form-item {
        padding: 0;
        width: 90px;
        height: auto;
        font-size: 17px;
        color: #333;
        line-height: 20px;
    }

    .form-item {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 8px 0;
        width: 100%;
        box-sizing: border-box;
    }

    .form-item .form-item-title {
        padding: 0;
        width: 90px;
        height: auto;
        font-size: 17px;
        color: #333;
        line-height: 20px;
        padding: 0 0.1rem;
    }

    .form-item .form-item-inner {
        display: -ms-flexbox;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        width: 50%;
        min-height: 44px;
        box-sizing: border-box;
    }

    .form-input {
        display: block;
        flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        padding: 13px 0 11px;
        width: 50%;
        height: 20px;
        border: none;
        font-family: Heiti SC, Helvetica Neue, Helvetica, Roboto, sans-serif;
        font-size: 17px;
        color: #333;
        line-height: 20px;
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    .form-item:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #dfdfdf;
        color: #dfdfdf;
        transform-origin: 0 0;
        transform: scaleY(.5);
    }

    .footer-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        display: -ms-flexbox;
        display: flex;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-top: 1px solid #d9d9d9;
        box-sizing: border-box;
    }

    .footer-bar .footer-item {
        position: relative;
        flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
    }

    .footer-bar .footer-item p {
        display: block;
        width: 100%;
    }

    .ay-section {
        padding: 0 20px;
        margin-bottom: 10px;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
    }

    .contract-info .contract-inner {
        position: relative;
        padding: 10px 20px 10px 0;
    }

    .contract-info .contract-title {
        padding: 3px 0;
        font-size: 17px;
        color: #333;
        line-height: 24px;
    }

    .contract-brief {
        margin-top: 5px;
    }

    .contract-title span {
        display: inline-block;
        margin-left: 5px;
        padding: 0 4px;
        width: auto;
        height: 20px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid #ff5647;
        font-size: 14px;
        color: #ff5647;
        line-height: 18px;
        vertical-align: text-top;
        opacity: .36;
    }

    .footer-wrap {
        height: 60px;
    }

    .footer-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        padding: 0 20px;
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-top: 1px solid #d9d9d9;
        box-sizing: border-box;
    }

    .footer-bar .footer-item {
        position: relative;
        flex: 1;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
    }

    .ay-center-v {
        -ms-flex-align: center;
        align-items: center;
    }

    .footer-bar .footer-item p span {
        font-size: 12px;
        color: #999;
        font-weight: 300;
    }

    .footer-bar .footer-item p em {
        font-style: normal;
        font-size: 24px;
        color: #ff5523;
        line-height: 30px;
    }

    .footer-bar .footer-item p a {
        font-size: 12px;
        color: #41b3ee;
        font-weight: 300;
        line-height: 20px;
    }

    .footer-bar button.ay_btn, .footer-bar input.ay_btn {
        margin: 0;
        padding: 0;
        width: 100px;
        height: 45px;
        border-width: 0;
        outline: 0;
        -webkit-appearance: none;
        box-sizing: border-box;
        font-size: 16px;
        border-radius: 10px;
        background-color: #ff5523;
        color: #fff;
    }

    .booking-wrap .ay_btn {
        border-radius: 100px;
    }

    .ay-center-v {
        display: flex;
        justify-content: space-between;
    }

    .service-tel {
        text-align: center;
    }

    .contract-info {
        border-bottom: 0.1rem solid rgb(245, 245, 245);
    }
</style>