<template>
    <div>
        <div v-if="orderList[0]">
                <div class="xl-orderItem" v-for="(item,index) in orderList" :key="index" >
                    <a :href="'#/main/personal/order/orderdetail/'+item.order_id" class="xl-miyu-orderitem">
                        <div class="mitu_panel mitu_panel_access" >
                            <div class="card-header">
                                <div class="title">订单号：{{item.order_id}}</div>
                                <div class="staute cancel">{{item.status}} </div>
                            </div>
                            <div class="mitu_panel_bd">
                                <div class="card-content">
                                    <!--                                <span class="orange colGroup"></span>-->
                                    <div>
                                        <div class="name">{{item.order_name}}</div>
                                        <div class="date">出行日期：{{item.start_time | formatDate}}</div>
                                        <div class="price">
                                            <span>
                                                实付款：
                                            </span>
                                            <b>￥{{item.price}}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer" >
                            <div style="line-height: 0; font-size: 0" v-if="item.status=='待支付'">
                                <span>去付款</span>
                            </div>
                            <div style="line-height: 0; font-size: 0" v-if="item.status=='待评价'">
                                <span>去评价</span>
                            </div>
                            <div style="line-height: 0; font-size: 0" v-if="item.status=='待出行'">
                                <span>出行</span>
                                <span>已出行</span>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
        <div  v-else class="xl-noOrder">
            <div class="noorders"><i></i> <p>非常抱歉，您还没有符合条件的订单</p></div>
        </div>
    </div>
</template>

<script>
    import { formatDate } from '../../common/commonUtil'
    export default {
        name: "paymentsItem",
        props: ['orderList'],
        data() {
            return {
                count: 0,
                isLoading: false,
                flag: false
            }
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
    .xl-orderItem{
        background-color: white;
        margin-top: 0.1rem;


    }
    .xl-miyu-orderitem{
        display: block;
    }
    .card-header {
        position: relative;
        height: 0.35rem;
        line-height: 0.35rem;
        overflow: hidden;
    }
    .card-header .title {
        position: absolute;
        top: 0;
        left: 0.2rem;
        font-size: 0.12rem;
        color: #999;
    }
    .card-header .staute.cancel {
        color: #ff5523;
        position: absolute;
        top: 0;
        right: 0.2rem;
        font-size: 14px;
    }
    .page-wrap .mitu_panel_bd {
        padding: 0 0.2rem;
    }
    .card-content {
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
        text-align: left!important;
    }
    .card-content:before,  .card-content:after{
        top: 0;
        border-top: 1px solid #e5e5e5;
        transform: scaleY(.5);
    }
    .card-content:after, .card-content:before {
        content: " ";
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        color: #e5e5e5;
    }
    .card-content .orange.colGroup {
        background: #ff5c5d;
    }
    .card-content .orange {
        margin-top: 0.01rem;
        display: block;
        width: 0.55rem;
        height: 0.2rem;
        line-height: 0.2rem;
        background: #3fadff;
        font-size: 0.12rem;
        color: #fff;
        border-radius: 0 0 0.05rem 0.05rem ;
        font-weight: 100;
        -webkit-font-smoothing: antialiased;
        text-align: left;
    }
    .card-content .name {
        font-size: 0.14rem;
        height: 0.16rem;
        line-height: 0.16rem;
        color: #333;
        margin: 0.1rem 0 0.03rem;
    }
    .card-content .date {
        color: #999;
        font-size: 0.12rem;
        display: inline-block;
        text-align: left;
        margin-top: 0.05rem;
    }
    .card-content .date, .card-content .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .card-content .price {
        margin-top: 0.06rem;
        text-align: right;
        color: #333;
        font-size: 0.12rem;
        margin-bottom: 0.02rem;
        display: inline-block;
        float: right;
    }
    .card-content .price b {
        font-size: 0.17rem;
    }
    .card-footer {
        padding: 0 0.2rem;
        height: 0.5rem;
        text-align: right;
        overflow: hidden;
    }
    .mitu_panel_bd {
        padding: 0 0.2rem;
    }
    .card-footer span:last-child {
        color: #ff5523;
        border: 1px solid #ff5523;
    }
    .card-footer span {
        display: inline-block;
        text-align: center;
        font-family: STHeitiSC-Light;
        font-size: 14px;
        color: #333;
        letter-spacing: 0;
        margin-top: 12px;
        margin-left: 10px;
        min-width: 60px;
        padding: 0 10px;
        height: 25px;
        line-height: 25px;
        background: #fff;
        border: 1px solid #dfdfdf;
        border-radius: 15px;
    }
    .card-footer {
        padding: 0 20px;
        height: 50px;
        text-align: right;
        overflow: hidden;
    }
    .xl-noOrder {
        position: relative;
        height: 100%;
    }

    .noorders {
        margin-top: 1.2rem;
        padding-top: 0.88rem;
        margin-bottom: 1rem;

    }

    .noorders i {
        height: 0.5rem;
        width: 0.5rem;
        background: url(../../../assets/images/xl_home_img/xl-noorder.png) no-repeat;
        background-size: cover;
        display: block;
        margin: 0 auto;
        text-align: center;
    }

    .noorders p {
        font-size: 0.14rem;
        color: #999;
        text-align: center;
        margin-top: 0.15rem;
    }

</style>