<template>
    <div class="yz_allBox">
        <header class="yz_header">
            <span class="yz_iconBack" @click="back"></span>
            <p>用户评价 <span>({{totalEvaluate}})</span></p>
        </header>
        <div class="yz_evaDetail">
            <p class="yz_evaRate">整体满意度：<span>{{evaluateRate}}</span></p>
            <div class="yz_TagsBox">
                <p class="yz_evaTags" v-for="(u,index) in evaluateTags" :key="index">{{u}}</p>
            </div>
        </div>
        <div v-for="(u,index) in userContent" :key="index" class="yz_evaItem" v-show="index<num">
            <div class="yz_itemHeader">
                <p class="yz_user"><i class="yz_iconUser"></i>{{u.userName}}</p>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <i class="yz_iconStar"></i>
                <span>{{u.evaluateDate}}</span>
            </div>
            <div class="yz_itemContent" v-for="(v,index) in u.userEva" :key="index">
                <p class="yz_contentTitle">{{v.title}}</p>
                <p class="yz_contentText">{{v.text}}</p>
            </div>
            <div class="yz_userPhoto">
                <ul>
                    <li v-for="(w,index) in u.userPhoto" :key="index">
                        <img :src="w" alt="" @click="showImage(u)">
                    </li>
                </ul>
            </div>
        </div>
        <van-image-preview
                v-model="show"
                :images="images"
                @change="onChange">
        </van-image-preview>
        <div class="yz_readMoreEva">
            <p @click="readMore">{{text}}</p>
        </div>
    </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    export default {
        name: "allEva",
        components:{
            [ImagePreview.name]:ImagePreview
        },
        data(){
            return{
                num:1,
                show: false,
                isShow:true,
                index: 0,
                images:[],
                text:"点击查看更多",
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
                ],
                "evaluateTags":[
                    "世界文化遗产",
                    "好玩",
                    "家庭游",
                    "爆款系列",
                    "悠久历史",
                    "浪漫",
                    "呼朋唤友"
                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
                // this.$router.push('/detail')
            },
            showImage(u){
                this.show=!this.show;
                this.images=u.userPhoto
            },
            onChange(index) {
                this.index = index;
            },
            onClose() {

            },
            readMore(){
                this.isShow = !this.isShow;
                this.num =this.num+2;
                let l=this.userContent.length;
                if(this.num>l){
                    this.text="已全部显示"
                }else{
                    this.text="点击查看更多"
                }
            }
        },
        beforeMount() {
            // let allData=require('../../../mocks/detail');
            // this.data=allData;
            window.scrollTo(0,0);
        }
    }
</script>

<style scoped>
    .yz_allBox{
        background-color: #efeff4;
        /*position: relative;*/
    }
    .yz_header{
        width: 100%;
        height: 0.44rem;
        position: fixed;
        top: 0;
        z-index: 10;
        background-color: white;
    }
    .yz_header p{
        font-size: 0.19rem;
        line-height: 0.44rem;
        position: absolute;
        left: 36%;
    }
    .yz_header p span{
        font-size: 0.14rem;
    }
    .yz_iconBack{
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin: 0.11rem 0 0.11rem 0.2rem;
        background-image: url("../../assets/detailImages/leftArrowBlack.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_evaDetail{
        background-color: white;
        padding: 0.2rem 0.06rem;
    }
    .yz_evaRate{
        font-size: 0.16rem;
        color: #333;
        line-height: 0.2rem;
        text-align: left;
        margin: 0.4rem 0.2rem 0;
    }
    .yz_evaDetail p span{
        color: #fc5a3f;
    }
    .yz_TagsBox{
        margin: 0.2rem 0.2rem 0;
        text-align: left;
    }
    .yz_evaTags{
        display: inline-block;
        width: auto;
        height: 0.25rem;
        line-height: 0.25rem;
        color: #666;
        background-color: #f6f6f6;
        font-size: 0.14rem;
        border-radius: 0.5rem;
        padding: 0.02rem 0.1rem;
        margin: 0.1rem 0.1rem;
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
    .yz_itemHeader{
        text-align: left;
        padding: 0.15rem 0 0;
        box-sizing: border-box;
        margin: 0 0.2rem;
        border-top: 0.01rem solid #dfdfdf;
    }
    .yz_itemHeader span{
        display: inline-block;
        color: #999;
        line-height: 0.16rem;
        margin-left: 1.2rem;
        vertical-align: middle;
    }
    .yz_iconUser{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background-image: url("../../assets/detailImages/user.png");
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .yz_user{
        display: inline-block;
        text-align: left;
        width: auto;
        height: 0.3rem;
        padding-top: 0.02rem;
        box-sizing: border-box;
        line-height: 0.28rem;
        color: #333;
        position: relative;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .yz_iconStar{
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        background-image: url("../../assets/detailImages/star.png");
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
    }
    .yz_itemContent{
        margin: 0.3rem 0.2rem 0;
    }
    .yz_userPhoto{
        margin: 0.1rem 0.2rem 0;
        text-align: left;
    }
    .yz_userPhoto ul li{
        display: inline-block;
        margin-right: 0.05rem;
        margin-top: 0.1rem;
    }
    .yz_userPhoto img{
        width: 0.75rem;
        height: 0.75rem;
    }
    .yz_contentTitle{
        text-align: left;
        color: #999;
        line-height: 0.2rem;
        margin-top: 0.1rem;
    }
    .yz_contentText{
        text-align: left;
        color: #333;
        line-height: 0.2rem;
        font-size: 0.14rem;
        margin-top: 0.1rem;
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
    .yz_evaItem{
        padding-bottom: 0.2rem;
        background-color: white;
    }
    .yz_readMoreEva{
        margin-bottom: 0.2rem;
        background-color: white;
    }
    .yz_readMoreEva p{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.14rem;
        color: #41b3ee;
        position: relative;
        margin: 0 0.2rem;
        border-top: 0.01rem solid #dfdfdf;
    }
</style>