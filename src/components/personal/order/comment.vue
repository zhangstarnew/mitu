<template>
    <div class="xl-comment">
        <!--头部开始-->
        <div class="xl-mitu-header">
            <a class="xl-header-left" href="#/main/personal/order/0">
                <div class="left-arrow"></div>
            </a>
            <h1 class="xl-header-title" >
                我要评价
            </h1>
        </div>
        <!--头部结束-->
        <!--内容开始-->
        <div id="J_rate_plugin" v-if="goodsData">
            <section class="oc-m">
                <div class="oc-info">
                    <div class="oc-info-l">
                        <img :src="goodsData.v_pic" />
                    </div>
                    <div class="oc-info-r">
                        <h2>{{goodsData.name}}</h2>
                        <div class="goodsDesc">{{goodsData.v_desc}}</div>
                        <div> ￥<strong class="red">{{goodsData.price}}</strong></div>
                    </div>
                </div>
                <div class="oc-star-fc"><label> 描述相符： </label>
                    <van-rate v-model="value1" />
                   <span class="oc-star-r"> {{msg}}</span>
<!--                    <span>{{value1}}分</span>-->
                    <input type="hidden" nullable="true" id="orderMerchandiseScore0"></div>
                <div class="oc-text">
                    <span class="c-f-textarea">
                    <textarea nullable="false" maxlength="500" id="J_rateContent0" placeholder="请输入评论内容" v-model="com"> </textarea>
                </span>
                </div>
<!--                -->
                <input type="hidden" value="706269059801476924" id="J_key0"></section>
            <input type="hidden" value="1" id="J_itemCount">
            <section class="oc-star">
                <div class="oc-star-f" id="J_star">
                    <div class="oc-star-fc"><label> 行程安排： </label>
                            <van-rate v-model="value2" /><span></span>
                        <span class="oc-star-r"> </span>
                        <input type="hidden" nullable="true" id="serviceQualityScore"></div>
                    <div class="oc-star-fc"><label> 导游领队： </label>
                            <van-rate v-model="value3" />
                        <span class="oc-star-r"> </span>
                        <input type="hidden" nullable="true" id="saleConsignmentScore"></div>
                </div>
                <div class="oc-star-b"><input type="hidden" value="2" id="J_orderType">
                    <input type="submit" id="J_comment" class="c-btn-orange" value="发表评价" @click="commented"></div>
            </section>
        </div>
        <!--内容结束-->
        <date-loading v-else></date-loading>
    </div>
</template>

<script>
    import { Rate } from 'vant';
    import commentApi from '../../../xl_api/orderComment'
    import loading from '../../common/xl_loding'
    export default {
        name: "comment",
        data() {
            return {
                value1: 0,
                value2: 0,
                value3: 0,
                msg:"",
                com:"",
                userId:'',
                orderId:'',
                goodId:'',
                goodsData:''
            };
        },
        components: {
            "van-rate":Rate,
            "date-loading":loading
        },
        methods: {
            changMag() {
                if (this.value1 == 1) {
                    this.msg = "非常差"
                }
                if (this.value1 == 2) {
                    this.msg = "差"
                }
                if (this.value1 == 3) {
                    this.msg = "一般"
                }
                if (this.value1 == 4) {
                    this.msg = "好"
                }
                if (this.value1 == 5) {
                    this.msg = "非常好"
                }
            },

            //提交评论接口     ud_id:7, //用户id
            //    order_id:32,   //订单
            //    stars:this.value1, //星星数
            //    content:this.com  //评论内容
            async commented() {
                let data = await commentApi.submitComment(1,this.orderId,this.value1,this.com)
               console.log(data)
            },
            //获取数据接口
            async getDate() {
                let a = window.sessionStorage.ud_id
                this.userId  = a
                let b = this.$route.params.vid;
                let c = this.$route.params.orderid
                this.orderId = c
                this.goodsId=b;
                let data = await commentApi.getCommentData(this.goodsId)
                this.goodsData = data.data
                console.log(data)
            },
        },
        created() {
            this.getDate()
        },
        beforeUpdate() {
            this.changMag()
        }
    }
</script>

<style scoped>
    .xl-comment {
        font-size: 0.14rem;
        text-align: left;
        height: 100%;
        background-color: #f5f5f5;
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

    .oc-m {
        margin-bottom: 30px;
        display: block;
    }

    .oc-m .oc-info {
        margin: 20px 10px;
        display: -webkit-box;
    }

    .oc-m .oc-info .oc-info-l {
        display: inline-block;
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin-right: 10px;
    }
    .oc-info-l img{
        width: 40px;
        height: 40px;
    }

    .oc-m .oc-info .oc-info-r {
        -webkit-box-flex: 1;
    }

    .oc-m .oc-info .oc-info-r h2 {
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 6px;
        font-size: 0.14rem;
    }

    .oc-m strong {
        margin: 0 4px;
    }

    .red {
        color: #d40000;
    }

    .oc-star-fc {
        position: relative;
        padding: 4px 0 0 118px;
        height: 20px;
        overflow: hidden;
        margin-bottom: 12px;
    }

    .oc-star-fc label {
        position: absolute;
        left: 0;
        padding-left: 15px;
    }
    .c-btn-orange {
        margin-top: 0.8rem;
        width: 100%;
        display: block;
        color: #fff;
        height: 38px;
        line-height: 38px;
        font-size: 16px;
        box-shadow: 0 0 1px #d13600;
        -webkit-box-shadow: 0 0 1px #d13600;
        background: -webkit-gradient(linear,center bottom,center top,from(#f50),to(#ff4300));
    }
    .c-btn, .c-btn-orange {
        text-align: center;
        border-radius: 4px;
    }
    .c-f-textarea {
        display: block;
        padding: 6px;
        height: 70px;
        border: 1px solid #DDD;
        border-top-color: #BBB;
        background-color: #fff;
    }
    input, select, textarea {
        -webkit-appearance: none;
        border: 0;
    }

    .oc-m .oc-text textarea {
        width: 100%;
        height: 62px;
        line-height: 18px;
        padding-top: 6px;
        padding-left: 0 !important;
    }

    .c-f-textarea textarea {
        border: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        color: #333;
        font-size: 14px;
    }

    input, select, textarea {
        -webkit-appearance: none;
        /*border: 0;*/
        border-radius: 0;
    }

    .oc-star-inp {
        margin-top: 20px;
    }
    #J_rate_plugin {
        padding: 0 10px;
    }
    .oc-star-r{
        position: absolute;
        display: inline-block;
        height: 0.2rem;
        left: 2.5rem;
        text-align: center;
    }
    .goodsDesc{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>