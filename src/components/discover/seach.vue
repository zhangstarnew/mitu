<template>
    <div class="seach">
        <div class="searchBox">
            <div><img src="../../../public/images/cmdimg/goback.png" @click="changeRouter"/></div>
            <div><input type="text" placeholder="搜索精彩内容" v-model="searchList"></div>
           <div><a @click="isSearch">搜索</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seach",
        methods:{
            changeRouter(){
                this.$router.go(-1)
            },
            isSearch(){
                if(this.user){
                    this.flag=false
                    this.user.forEach((user) => {
                        if (user.userName == this.searchList) {
                            this.flag=true
                            this.$router.push('/main/searchUser/'+this.searchList)
                        }
                    })
                    if(this.flag==false){
                        alert("请输入用户名")
                    }
                }
            }
        },
        data(){
            return {
                searchList:'',
                user:[
                    {
                        "userId":"01",
                        "charHead":"images/cmdimg/user001.jpg",
                        "userName":"光影艺术",
                        "userIntroduce":"喜欢游走在山川河流之间，用镜头记录下旅途的一切，并将路上的体会以游记形式向更多热爱旅游的朋友广为传播。",
                        "article":[
                            {"articleId":"01","articleTitle":"用户1第1篇文章-在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"在京城中心天安门广场人民大会堂西侧，有一座2007年完工的新建筑：国家大剧院。这座建筑时间不长，也曾引起各界人士和京城百姓的极大关注。由于建筑设计者来自法国建筑师保罗·安德鲁，因而对建筑本身人们议论纷纷。随着时间的推移，人们越来越多地关注这座外观呈半椭球形建筑，特别是日出、日落的时候，在霞光的映照下，大剧院犹如一颗散发着璀璨光芒的明珠，令人赏心悦目。站在景山公园制高点万春亭上眺望金碧辉煌的故宫博物院，在他的西南角能够清晰地看到这颗明珠。国家大剧院的建设让首都北京有了一座具有国际化大都市规模的文艺场所。能在国家大剧院上演的节目，自然也就令人刮目相看。这座“城市中的剧院、剧院中的城市”以一颗献给新世纪的超越想象的“湖中明珠”的奇异姿态出现。她所要表达的是内在的活力，是在外部宁静笼罩下的内部生机。一个简单的“蛋壳”，里面孕育着生命，大剧院代表了一个时代的结束与另一个新的时代的开始。",
                                "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户1第2篇文章-镜头下的京城中轴线：散发着璀璨光芒的国家大剧院","articleShow":"在京城中心天安门广场人民大会堂西侧，有一座2007年完工的新建筑：国家大剧院。这座建筑时间不长，也曾引起各界人士和京城百姓的极大关注。由于建筑设计者来自法国建筑师保罗·安德鲁，因而对建筑本身人们议论纷纷。随着时间的推移，人们越来越多地关注这座外观呈半椭球形建筑，特别是日出、日落的时候，在霞光的映照下，大剧院犹如一颗散发着璀璨光芒的明珠，令人赏心悦目。站在景山公园制高点万春亭上眺望金碧辉煌的故宫博物院，在他的西南角能够清晰地看到这颗明珠。国家大剧院的建设让首都北京有了一座具有国际化大都市规模的文艺场所。能在国家大剧院上演的节目，自然也就令人刮目相看。这座“城市中的剧院、剧院中的城市”以一颗献给新世纪的超越想象的“湖中明珠”的奇异姿态出现。她所要表达的是内在的活力，是在外部宁静笼罩下的内部生机。一个简单的“蛋壳”，里面孕育着生命，大剧院代表了一个时代的结束与另一个新的时代的开始。",
                                "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner002.jpg"],"articleListImg":["images/cmdimg/user001banner002.jpg"]
                            },
                            {"articleId":"03","articleTitle":"用户1第3篇文章-在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"...................",
                                "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"02",
                        "charHead":"images/cmdimg/user002.jpg",
                        "userName":"奔跑的小东东",
                        "userIntroduce":"环球旅行家，米途旅行家，自媒体人，微博知名旅游博主，试睡师！",
                        "article":[
                            {"articleId":"01","articleTitle":"用户2第1篇-新疆是个好地方|一路向西，去遇见我的时光之旅","articleShow":"...................",
                                "articleView":1659,"articleLike":0,"articleImg":["images/cmdimg/user002banner.jpg"],"articleListImg":["images/cmdimg/user002banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户2第2篇-新疆是个好地方|一路向西，去遇见我的时光之旅","articleShow":"...................",
                                "articleView":1659,"articleLike":0,"articleImg":["images/cmdimg/user002banner.jpg"],"articleListImg":["images/cmdimg/user002banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"03",
                        "charHead":"images/cmdimg/user003.jpg",
                        "userName":"超级小包子",
                        "userIntroduce":"畅销旅行作家，CPA摄影师，极限运动玩家，美食达人，旅行体验师，私人旅行订制专家。",
                        "article":[
                            {"articleId":"01","articleTitle":"用户3第1-双11不止我们有，国外也有，折扣更狠优惠更多","articleShow":"...................",
                                "articleView":54017,"articleLike":2,"articleImg":["images/cmdimg/user003banner.jpg"],"articleListImg":["images/cmdimg/user003banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户3-2-双11不止我们有，国外也有，折扣更狠优惠更多","articleShow":"...................",
                                "articleView":54017,"articleLike":2,"articleImg":["images/cmdimg/user003banner.jpg"],"articleListImg":["images/cmdimg/user003banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"04",
                        "charHead":"images/cmdimg/user004.jpg",
                        "userName":"米兰旅行",
                        "userIntroduce":"遨游旅行家，知名旅游博主，旅行专栏作家，新浪签约自媒体，资深旅行美食Kol。",
                        "article":[
                            {"articleId":"01","articleTitle":"用户4第1-漫山黄栌红似火，京西坡峰岭的醉美秋天！","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user004banner.jpg"],"articleListImg":["images/cmdimg/user004banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户4第2-漫山黄栌红似火，京西坡峰岭的醉美秋天！","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user004banner.jpg"],"articleListImg":["images/cmdimg/user004banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"05",
                        "charHead":"images/cmdimg/user005.jpg",
                        "userName":"jiexi",
                        "userIntroduce":"用镜头记录美的瞬间",
                        "article":[
                            {"articleId":"01","articleTitle":"用户5第1-东门市井#打卡成都新晋网红景点","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user005banner.jpg"],"articleListImg":["images/cmdimg/user005banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户5第2-东门市井#打卡成都新晋网红景点","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user005banner.jpg"],"articleListImg":["images/cmdimg/user005banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"06",
                        "charHead":"images/cmdimg/user006.jpg",
                        "userName":"蔻蔻",
                        "userIntroduce":"唯旅行与美食不可辜负",
                        "article":[
                            {"articleId":"01","articleTitle":"用户6第1-孝亲游|预算100亿的尼山圣境  光说“壕”可就太没文化了","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user006banner.jpg"],"articleListImg":["images/cmdimg/user006banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户6第2-孝亲游|预算100亿的尼山圣境  光说“壕”可就太没文化了","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user006banner.jpg"],"articleListImg":["images/cmdimg/user006banner.jpg"]
                            },
                        ]
                    },
                    {
                        "userId":"07",
                        "charHead":"images/cmdimg/user007.jpg",
                        "userName":"色影姐",
                        "userIntroduce":"色影迷途，美食相伴",
                        "article":[
                            {"articleId":"01","articleTitle":"用户7第1-寻味顺德，人文艺术及美食探索深度游攻略","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user007banner.jpg"],"articleListImg":["images/cmdimg/user007banner.jpg"]
                            },
                            {"articleId":"02","articleTitle":"用户7第2-寻味顺德，人文艺术及美食探索深度游攻略","articleShow":"...................",
                                "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user007banner.jpg"],"articleListImg":["images/cmdimg/user007banner.jpg"]
                            },
                        ]
                    },
                ],
                flag:false
            }
        }
    }
</script>

<style scoped>
.seach{
    font-size: 0.12rem;

}
.searchBox{
    display: flex;
    justify-content: space-between;
    /*height: 0.5rem;*/
    width:90%;
    margin: 0.1rem auto;
    padding: 5px;
    border-bottom: 1px solid rgb(245,245,245);

}
.searchBox>div>a{
    height: 0.5rem;
    font-size: 17px;
    line-height: 0.35rem;
}
.searchBox>div>input{
    display: block;
    background-color: #fff;
    border-radius: 100px;
    padding-left: 40px;
    height: 30px;
    font-size: 0.14rem;
    color: #999;
    border: 1px solid #dfdfdf;
    text-align: left;
    outline: none;
}
.searchBox>div>img{
    width:0.3rem;
}
</style>