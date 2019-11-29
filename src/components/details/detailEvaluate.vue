<template>
    <div class="yz_evaBox">
        <div class="yz_evaTitle">
            <p>用户评价(<span>{{totalEvaluate}}</span>)</p>
            <i class="yz_iconNotice" @click="showNotice"></i>
            <a @click="yz_readAll">好评率{{evaluateRate}}</a>
            <i class="yz_iconNext" @click="yz_readAll"></i>
        </div>
        <div v-for="(u,index) in userContent.slice(0,1)" :key="index" class="yz_evaItem">
            <div class="yz_itemHeader">
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <span>{{u.evaluateDate}}</span>
                <p class="yz_user"><i class="yz_iconUser"></i>{{u.userName}}</p>
            </div>
            <div class="yz_itemContent" v-for="(v,index) in u.userEva" :key="index">
                <p class="yz_contentTitle">{{v.title}}</p>
                <p class="yz_contentText">{{v.text}}</p>
            </div>
            <div class="yz_userPhoto">
                <ul>
                    <li v-for="(w,index) in u.userPhoto" :key="index"><img :src="w" alt="" @click="showImage"></li>
                    <van-image-preview
                            v-model="show"
                            :images="u.userPhoto"
                            @change="onChange"
                            @close="onClose">
                    </van-image-preview>
                </ul>
            </div>
        </div>
        <div class="yz_evaMore" @click="yz_readAll">
            <p>查看全部评价<i class="yz_iconMore"></i></p>
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import Vue from 'vue';
    import { ImagePreview } from 'vant';
    Vue.use(ImagePreview);
    export default {
        name: "detailEvaluate",
        components:{
            [ImagePreview.name]:ImagePreview
        },
        props:["data"],
        data(){
            return{
                'title':[
                    "行程安排",
                    "餐饮安排",
                    "酒店住宿",
                    "导游领队"
                ],
                show: false,
                index: 0,
                "totalEvaluate": "74",
                "evaluateRate": "100%",
                "userContent": [
                    {
                        "evaluateDate": "2016-10-10",
                        "userName": "406999",
                        "userEva":
                            [
                                {"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}
                            ],
                        "userPhoto": [
                            "assets/detailImages/evaPhoto01.jpg",
                            "assets/detailImages/evaPhoto02.jpg",
                            "assets/detailImages/evaPhoto03.jpg",
                            "assets/detailImages/evaPhoto04.jpg",
                            "assets/detailImages/evaPhoto05.jpg",
                            "assets/detailImages/evaPhoto06.jpg"
                        ]
                    },
                    {
                        "evaluateDate": "2018-08-08",
                        "userName": "406888",
                        "userEva":
                            [{"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}],
                        "userPhoto": [
                            "assets/detailImages/plan1.jpg",
                            "assets/detailImages/plan2.jpg",
                            "assets/detailImages/plan3.jpg",
                            "assets/detailImages/plan4.jpg",
                            "assets/detailImages/plan5.jpg",
                            "assets/detailImages/plan1.jpg"
                        ]
                    },
                    {
                        "evaluateDate": "2018-08-08",
                        "userName": "4068881",
                        "userEva":
                            [{"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}],
                        "userPhoto": [
                            "assets/detailImages/plan1.jpg",
                            "assets/detailImages/plan2.jpg",
                            "assets/detailImages/plan3.jpg",
                            "assets/detailImages/plan4.jpg",
                            "assets/detailImages/plan5.jpg",
                            "assets/detailImages/plan1.jpg"
                        ]
                    },
                    {
                        "evaluateDate": "2018-08-08",
                        "userName": "4068882",
                        "userEva":
                            [{"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}],
                        "userPhoto": [
                            "assets/detailImages/plan1.jpg",
                            "assets/detailImages/plan2.jpg",
                            "assets/detailImages/plan3.jpg",
                            "assets/detailImages/plan4.jpg",
                            "assets/detailImages/plan5.jpg",
                            "assets/detailImages/plan1.jpg"
                        ]
                    },
                    {
                        "evaluateDate": "2018-08-08",
                        "userName": "4068883",
                        "userEva":
                            [{"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}],
                        "userPhoto": [
                            "assets/detailImages/plan1.jpg",
                            "assets/detailImages/plan2.jpg",
                            "assets/detailImages/plan3.jpg",
                            "assets/detailImages/plan4.jpg",
                            "assets/detailImages/plan5.jpg",
                            "assets/detailImages/plan1.jpg"
                        ]
                    },
                    {
                        "evaluateDate": "2018-08-08",
                        "userName": "4068884",
                        "userEva":
                            [{"title": "行程安排", "text": "这是个半自助的团，泡酒店的玩法，所以并不需要导游领队一价全含模式让我们吃住行不再操心，只想着如何畅玩"},
                                {"title": "餐饮安排", "text": "特意要说珍珠酒店的自助餐，种类丰富，用餐环境干净宽敞，每一个餐台都有服务人员，一共住了五天，餐食都有变化，没见过小料那么丰富的自助餐。细节非常到位，还会有一些海鲜吃到，越南人微笑服务，让我们心旷神怡"},
                                {"title": "酒店住宿", "text": "珍珠度假村集酒店和游乐场，水上乐园，游乐场为一体，所以占地面积大，盖在富国岛的郊区，如果只在度假村里面玩，有班车直达各个景点，非常方便，而且很近。但如果大家想去市区酒店还有免费班车接送，虽然有点远但也基本算无忧出行"},
                                {"title": "导游领队", "text": "本行程无导游领队"}],
                        "userPhoto": [
                            "assets/detailImages/plan1.jpg",
                            "assets/detailImages/plan2.jpg",
                            "assets/detailImages/plan3.jpg",
                            "assets/detailImages/plan4.jpg",
                            "assets/detailImages/plan5.jpg",
                            "assets/detailImages/plan1.jpg"
                        ]
                    }
                ]
            }
        },
        methods:{
            showNotice(){
                Dialog.alert({
                    title: '用户满意度百分比',
                    message: '是该产品订单用户评价4星和5星的总数，占总订单数的百分比。',
                    messageAlign:'left',
                    confirmButtonText:'知道了'
                })
            },
            showImage(){
                this.show=!this.show;
            },
            onChange(index) {
                this.index = index;
            },
            onClose() {

            },
            yz_readAll(){
                this.$router.push('/alleva/1')
            }
        }
    }
</script>

<style scoped>
    .yz_evaBox{
        background-color: white;
        margin: 0.1rem 0 0.6rem;
    }
    .yz_evaTitle{
        margin: 0 0.2rem;
        border-bottom: 0.01rem solid #dfdfdf;
        position: relative;
        text-align: left;
    }
    .yz_evaTitle p{
        display: inline-block;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.2rem;
        font-weight: bold;
        text-align: left;
    }
    .yz_evaTitle a{
        display: inline-block;
        margin-left: 1.2rem;
        height: 0.6rem;
        color: #41b3ee;
        line-height: 0.6rem;
        font-size: 0.14rem;
    }
    .yz_iconNext{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.25rem;
        right: 0;
        background-image: url("../../assets/detailImages/rightArrow.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_iconNotice{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.24rem;
        left: 2.1rem;
        background-image: url("../../assets/detailImages/iconNotice.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_itemHeader{
        text-align: left;
        padding: 0.15rem 0 0;
        box-sizing: border-box;
    }
    .yz_itemHeader span{
        display: inline-block;
        color: #999;
        line-height: 0.16rem;
        margin-left: 1.9rem;
    }
    .yz_iconStar{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        background-image: url("../../assets/detailImages/evaluationStar.png");
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
    }
    .yz_user{
        text-align: left;
        height: 0.3rem;
        padding-top: 0.02rem;
        box-sizing: border-box;
        line-height: 0.28rem;
        color: #f5a623;
        position: relative;

    }
    .yz_iconUser{
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background-image: url("../../assets/detailImages/user.png");
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .yz_itemContent{
        margin: 0.06rem 0 0;
    }
    .yz_userPhoto{
        margin: 0.1rem 0 0;
        white-space: nowrap;
        overflow-x: scroll;
    }
    .yz_userPhoto ul li{
        display: inline-block;
        margin-right: 0.05rem;
    }
    .yz_userPhoto img{
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.1rem;
    }
    .yz_contentTitle{
        text-align: left;
        color: #999;
        line-height: 0.2rem;
    }
    .yz_contentText{
        text-align: left;
        color: #333;
        line-height: 0.2rem;
        font-size: 0.14rem;
    }
    .yz_evaMore{
        margin: 0 0.2rem 0;
    }
    .yz_evaMore p{
        width: 1.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.14rem;
        color: #41b3ee;
        position: relative;
        margin: 0 auto;
    }
    .yz_iconMore{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 0.2rem;
        right: 0;
        background-image: url("../../assets/detailImages/rightArrowBlue.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_evaItem{
        margin: 0 0.2rem;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #dfdfdf;
    }
</style>