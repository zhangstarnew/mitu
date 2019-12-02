<template>
    <div class="xl-order">
        <!--头部开始-->
        <div class="xl-order-header">
            <!--头部开始-->
            <div class="xl-mitu-header">
                <a class="xl-header-left" href="#/main/personal">
                    <div class="left-arrow"></div>
                </a>
                <h1 class="xl-header-title">
                    我的订单
                </h1>
            </div>
            <!--头部结束-->
            <!--切换按钮开始-->
            <div class="xl-order-tab">
                <div class="order-tab-item" v-for="(item, index) in orderNavs"
                     @click="navChange(index)" :key="index" :class="{orderActive:tabindex == index}">
                    {{item.text}}
                </div>
            </div>
            <!--切换按钮结束-->
        </div>
        <!--头部结束-->
        <div class="order-kong"></div>
        <!-- cartList开始-->
        <div class="xl-cart-list" v-if="orderAll[tabindex]">
            <!--全部订单开始-->
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <all-order  :orderList="orderAll[tabindex]"></all-order>
            </van-pull-refresh>
        </div>
        <!--   loading效果        -->
        <div class="loading-wrap" v-else >
            <div class="loading-pic">
                <img  src="http://pic1.aoyou.com/load/loading.gif">
            </div>
        </div>
    </div>
</template>

<script>
    import allOrder from "../order/allOrder";
    import allOrderApi from '../../../xl_api/allOrder'
    import { PullRefresh,Toast} from 'vant';
    export default {
        name: "lx_secondary_order",
        data() {
            return {
                b:0,
                a: null,
                orderNavs: [
                        {
                            'text': "全部"
                        },
                        {
                            'text': "待付款"
                        },
                        {
                            'text': "待出行"
                        },
                        {
                            'text': "待评价"
                        },
                ],
                tabindex: 0,
                index: 0,
                orders:"",
                confirItem: [],
                //已取消
                canceledItem: [],
                //待付款
                paymentsItem: [],
                //待出行
                travelItem: [],
                //待评价
                assessItem: [],
                // 设置一个空数组，把所有状态下的订单集合放到空数组中
                orderAll: [],
                count: 0,
                isLoading: false,
                flag:false
            }
        },
        components: {
            "all-order": allOrder,
            // "date-loading":loading
            "van-pull-refresh": PullRefresh,
            // eslint-disable-next-line vue/no-unused-components
            Toast
        },
        methods: {
            navChange(index) {
                this.tabindex = index;
            },

            onRefresh() {
                setTimeout(() => {
                    //this._initDate()
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },

            //进入全部订单接口 //发送参数：用户编号ud_id 以及type
            async _initDate() {
                let a = window.sessionStorage.ud_id
                let data =await allOrderApi.getOrderData(a)
                this.orders = data.data
                if (this.orders) {
                        //把所有不同状态的订单通过if判断push到相对应的订单状态集合中。
                    this.orders.forEach((order) => {
                        //待付款
                        if (order.status == "待支付") {
                            this.paymentsItem.push(order);
                        }
                        //待出行
                        if (order.status == "待出行") {
                            this.travelItem.push(order);
                        }
                        //待完成
                        if (order.status == "待评价") {
                            this.assessItem.push(order);
                        }
                    });
                    //设置一个空数组，把所有状态下的订单集合放到空数组中，从0-5的顺序按照你的自己设置的tab切换的内容0-5的顺序对应排列，
                    this.orderAll = [this.orders, this.paymentsItem, this.travelItem, this.assessItem];
                    // console.log(this.orderAll[2]);
                }
            },
        },
        created() {
            this._initDate();
        },
        beforeMount() {
            this.tabindex = this.$route.params.id;
        }

    }
</script>

<style scoped>
    .xl-order {
        background-color: #f5f5f5;
        font-size: 0.12rem;
        height: 100%;
        position: relative;
    }

    .xl-order-header {
        position: fixed !important;
        top: 0;
        left: 0;
        height: 88px;
        width: 100%;
        z-index: 99;
    }

    .order-kong {
        height: 0.1rem;
    }

    .xl-mitu-header {
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.19rem;
        background-color: #fff;
        position: relative;
        padding: 2px 0;
        box-sizing: border-box;
    }

    .xl-header-left {
        position: absolute;
        top: 0.14rem;
        display: block;
        font-size: 0.14rem;
        line-height: 0.21rem;
        color: #fff;
        left: 0.22rem;
    }

    .xl-header-left .left-arrow {
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        top: -0.05rem;
        left: -0.05rem;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    .xl-header-left .left-arrow:before {
        content: "";
        border: 2px solid #333;
        border-width: 1px 0 0 1px;
        position: absolute;
        width: 0.12rem;
        height: 0.12rem;
        transform: rotate(315deg);
        top: 0.08rem;
        left: 0.07rem;
    }

    .xl-mitu-header h1 {
        color: #333;
        line-height: 0.4rem;
        text-align: center;
        height: 0.4rem;
        font-size: 0.18rem;
        font-weight: 400;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .xl-mitu-header:after, .xl-order-tab:after {
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

    .xl-order-tab {
        display: -webkit-box;
        display: flex;
        background-color: #fff;
        height: 0.44rem;
        position: relative;
    }

    .order-tab-item {
        display: flex;
        justify-content: space-around;
        width: 0.5375rem;
        margin: 0 0.2rem;
        height: 100%;
        box-sizing: border-box;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.44rem;
        color: #666;
    }

    .orderActive {
        border: none;
        color: rgb(255, 85, 35);
        border-bottom: 2px solid rgb(255, 85, 35);
        /*margin-left: 0.2rem;*/
    }

    .xl-cart-list {
        position: relative;
        box-sizing: border-box;
        margin-top: 0.88rem;
        background-color: #f5f5f5;
    }
    .loading-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 100%;
        background-color: #f5f5f5;
        z-index: 9999;
    }
    .loading-wrap .loading-pic {
        margin: 280px auto 0;
        padding-top: 40px;
        width: 100px;
        height: 100px;
        background-color: #f5f5f5;
        border-radius: 6px;
        box-sizing: border-box;
    }
    .loading-wrap .loading-pic img {
        display: block;
        margin: 0 auto;
        width: 60px;
    }
    .van-pull-refresh{
        overflow: visible!important;
    }


</style>