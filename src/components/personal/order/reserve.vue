<template>
    <div class="ending-page">
        <div class="white-header">
            <div class="ay-header">
                <div class="ay-header-left"><a class="ay-header-back v-transition" style="display: none;"></a>
                    <div class="left-arrow v-transition" style="display: none;"></div>
                </div>
                <h1 class="ay-header-title"><span class="v-transition" style="display: none;"></span>
                    <p>预订成功</p></h1>
                <div class="ay-header-right"></div>
            </div>
        </div>
        <div class="pop-content">
            <div class="info-box"><i class="icon-succeed"></i>
                <p class="info-title">恭喜您，预订成功！</p>
                <p class="info-detail">客服会尽快与您确认订单信息，请保持手机畅通。</p></div>
            <div class="ay-section button-section">
                <button class="ay_btn ay_btn_default ay_btn_plain_default"><a href="//m.aoyou.com/order.html">查看订单</a>
                </button>
                <br>
                <button class="ay_btn ay_btn_default ay_btn_plain_default"><a>回到首页</a></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reserve"
    }
</script>

<style scoped>
    .ending-page {
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 400;
        font-size:0.12rem ;
    }
    .white-header {
        height: 44px;
    }
    .white-header .ay-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 9;
    }
    .ay-header {
        position: relative;
        padding: 2px 0;
        box-sizing: border-box;
        background-color: #ff5523;
    }
    .white-header .ay-header .ay-header-left {
        top: 0;
        left: 0;
        width: 60px;
        height: 44px;
    }
    .white-header .ay-header .ay-header-title, .white-header .ay-header h1 {
        margin: 0 60px;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 19px;
        color: #333;
        font-weight: 400;
    }
    .ay-header .ay-header-title, .ay-header h1 {
        margin: 0 88px;
        line-height: 40px;
        text-align: center;
        height: 40px;
        font-size: 18px;
        font-weight: 400;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
    }
    .white-header .ay-header .ay-header-right {
        top: 0;
        right: 0;
        width: 60px;
        height: 44px;
    }
    .ay-header .ay-header-left, .ay-header .ay-header-right {
        position: absolute;
        top: 14px;
        display: block;
        font-size: 14px;
        line-height: 21px;
        color: #fff;
    }
    .info-box {
        padding: 50px 20px 20px;
    }
    .info-box i {
        margin: 0 auto;
    }
     .info-box i {
         margin: 0 auto;
     }
    .icon-failure, .icon-succeed {
        display: block;
        width: 54px;
        height: 54px;
    }
    .icon-succeed {
        background: url(../../../assets/images/xl_home_img/sucsess_order.png) no-repeat;
        background-size: 100%;
    }
    .info-box .info-title {
        margin-top: 20px;
        font-size: 19px;
        line-height: 28px;
        text-align: center;
    }
    .info-box .info-detail {
        margin-top: 30px;
        font-weight: 300;
        line-height: 22px;
        text-align: center;
    }
    .ay-section.button-section {
        margin: 0;
        padding: 30px 0;
        background-color: transparent;
    }
    .ay-section {
        padding: 0 20px;
        margin-bottom: 10px;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
    }
    .ending-page .ay-section.button-section button.ay_btn, .ending-page .ay-section.button-section input.ay_btn {
        font-size: 16px;
        font-weight: 300;
    }
    .ay-section.button-section button.ay_btn, .ay-section.button-section input.ay_btn {
        margin: 0 auto;
        width: 200px;
        height: 45px;
    }
    .ending-page .ay_btn_plain_default {
        border-color: #dbdbdb;
    }
     .ending-page .ay_btn {
         border-radius: 100px;
     }
     .button-section .ay_btn_default {
         background: #fff;
         border: 1px solid #dbdbdb;
     }
    .ay_btn {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        line-height: 2.33333333;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        overflow: hidden;
    }
    .ending-page .ay-section.button-section button.ay_btn a, .ending-page .ay-section.button-section input.ay_btn a {
        display: block;
        width: 100%;
        height: 100%;
        color: #333;
        line-height: 43px;
    }
</style>