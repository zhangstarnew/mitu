<template>
    <div class="userInfo">
        <div class="userHeader">
            <div :class="topFixed == true ? 'block' :'none'"><p>{{userData.nick_name}}</p>
                <div><img src="../../../public/images/cmdimg/backwhite.png" @click="changeRouter" class="back"></div>
            </div>
            <img :src="userData.ud_img" class="background"/>
            <div class="user"><img :src="userData.ud_img" class="char">
                <h1>{{userData.nick_name}}</h1>
                <p>{{userData.ud_info}}</p>
            </div>
            <div><img src="../../../public/images/cmdimg/backwhite.png" @click="changeRouter" class="back"></div>
        </div>

        <div class="slogan">加入米途，传递美好</div>
        <div v-for="(data,u) in userData.article" :key="u" class="article">
            <!--                :href="'#/main/userInfo/'+userData.userId+'/'+data.articleId"-->
            <a @click="userIn(data.article_id)"><img :src="data.a_image" alt="" class="banner"></a>
            <p class="title" @click="userIn(data.article_id)">{{data.a_title}}</p>
            <div class="view">
                <div>
                    <img src="../../../public/images/cmdimg/view.png" alt=""
                         class="cmdsee"><span>{{data.good_num}}</span>
                </div>
                <div>
                    <img src="../../../public/images/cmdimg/zan.png" alt="" class="cmdsee"
                         @click="data.articleLike++"><span>{{data.good_num}}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                id: "",
                userData: null,
                topFixed: false,
                // user:[
                //     {
                //         "userId":"01",
                //         "charHead":"images/cmdimg/user001.jpg",
                //         "userName":"光影艺术",
                //         "userIntroduce":"喜欢游走在山川河流之间，用镜头记录下旅途的一切，并将路上的体会以游记形式向更多热爱旅游的朋友广为传播。",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户1第1篇文章-在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"在京城中心天安门广场人民大会堂西侧，有一座2007年完工的新建筑：国家大剧院。这座建筑时间不长，也曾引起各界人士和京城百姓的极大关注。由于建筑设计者来自法国建筑师保罗·安德鲁，因而对建筑本身人们议论纷纷。随着时间的推移，人们越来越多地关注这座外观呈半椭球形建筑，特别是日出、日落的时候，在霞光的映照下，大剧院犹如一颗散发着璀璨光芒的明珠，令人赏心悦目。站在景山公园制高点万春亭上眺望金碧辉煌的故宫博物院，在他的西南角能够清晰地看到这颗明珠。国家大剧院的建设让首都北京有了一座具有国际化大都市规模的文艺场所。能在国家大剧院上演的节目，自然也就令人刮目相看。这座“城市中的剧院、剧院中的城市”以一颗献给新世纪的超越想象的“湖中明珠”的奇异姿态出现。她所要表达的是内在的活力，是在外部宁静笼罩下的内部生机。一个简单的“蛋壳”，里面孕育着生命，大剧院代表了一个时代的结束与另一个新的时代的开始。",
                //                 "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户1第2篇文章-镜头下的京城中轴线：散发着璀璨光芒的国家大剧院","articleShow":"在京城中心天安门广场人民大会堂西侧，有一座2007年完工的新建筑：国家大剧院。这座建筑时间不长，也曾引起各界人士和京城百姓的极大关注。由于建筑设计者来自法国建筑师保罗·安德鲁，因而对建筑本身人们议论纷纷。随着时间的推移，人们越来越多地关注这座外观呈半椭球形建筑，特别是日出、日落的时候，在霞光的映照下，大剧院犹如一颗散发着璀璨光芒的明珠，令人赏心悦目。站在景山公园制高点万春亭上眺望金碧辉煌的故宫博物院，在他的西南角能够清晰地看到这颗明珠。国家大剧院的建设让首都北京有了一座具有国际化大都市规模的文艺场所。能在国家大剧院上演的节目，自然也就令人刮目相看。这座“城市中的剧院、剧院中的城市”以一颗献给新世纪的超越想象的“湖中明珠”的奇异姿态出现。她所要表达的是内在的活力，是在外部宁静笼罩下的内部生机。一个简单的“蛋壳”，里面孕育着生命，大剧院代表了一个时代的结束与另一个新的时代的开始。",
                //                 "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner002.jpg"],"articleListImg":["images/cmdimg/user001banner002.jpg"]
                //             },
                //             {"articleId":"03","articleTitle":"用户1第3篇文章-在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"...................",
                //                 "articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"02",
                //         "charHead":"images/cmdimg/user002.jpg",
                //         "userName":"奔跑的小东东",
                //         "userIntroduce":"环球旅行家，米途旅行家，自媒体人，微博知名旅游博主，试睡师！",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户2第1篇-新疆是个好地方|一路向西，去遇见我的时光之旅","articleShow":"...................",
                //                 "articleView":1659,"articleLike":0,"articleImg":["images/cmdimg/user002banner.jpg"],"articleListImg":["images/cmdimg/user002banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户2第2篇-新疆是个好地方|一路向西，去遇见我的时光之旅","articleShow":"...................",
                //                 "articleView":1659,"articleLike":0,"articleImg":["images/cmdimg/user002banner.jpg"],"articleListImg":["images/cmdimg/user002banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"03",
                //         "charHead":"images/cmdimg/user003.jpg",
                //         "userName":"超级小包子",
                //         "userIntroduce":"畅销旅行作家，CPA摄影师，极限运动玩家，美食达人，旅行体验师，私人旅行订制专家。",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户3第1-双11不止我们有，国外也有，折扣更狠优惠更多","articleShow":"...................",
                //                 "articleView":54017,"articleLike":2,"articleImg":["images/cmdimg/user003banner.jpg"],"articleListImg":["images/cmdimg/user003banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户3-2-双11不止我们有，国外也有，折扣更狠优惠更多","articleShow":"...................",
                //                 "articleView":54017,"articleLike":2,"articleImg":["images/cmdimg/user003banner.jpg"],"articleListImg":["images/cmdimg/user003banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"04",
                //         "charHead":"images/cmdimg/user004.jpg",
                //         "userName":"米兰旅行",
                //         "userIntroduce":"遨游旅行家，知名旅游博主，旅行专栏作家，新浪签约自媒体，资深旅行美食Kol。",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户4第1-漫山黄栌红似火，京西坡峰岭的醉美秋天！","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user004banner.jpg"],"articleListImg":["images/cmdimg/user004banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户4第2-漫山黄栌红似火，京西坡峰岭的醉美秋天！","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user004banner.jpg"],"articleListImg":["images/cmdimg/user004banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"05",
                //         "charHead":"images/cmdimg/user005.jpg",
                //         "userName":"jiexi",
                //         "userIntroduce":"用镜头记录美的瞬间",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户5第1-东门市井#打卡成都新晋网红景点","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user005banner.jpg"],"articleListImg":["images/cmdimg/user005banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户5第2-东门市井#打卡成都新晋网红景点","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user005banner.jpg"],"articleListImg":["images/cmdimg/user005banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"06",
                //         "charHead":"images/cmdimg/user006.jpg",
                //         "userName":"蔻蔻",
                //         "userIntroduce":"唯旅行与美食不可辜负",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户6第1-孝亲游|预算100亿的尼山圣境  光说“壕”可就太没文化了","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user006banner.jpg"],"articleListImg":["images/cmdimg/user006banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户6第2-孝亲游|预算100亿的尼山圣境  光说“壕”可就太没文化了","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user006banner.jpg"],"articleListImg":["images/cmdimg/user006banner.jpg"]
                //             },
                //         ]
                //     },
                //     {
                //         "userId":"07",
                //         "charHead":"images/cmdimg/user007.jpg",
                //         "userName":"色影姐",
                //         "userIntroduce":"色影迷途，美食相伴",
                //         "article":[
                //             {"articleId":"01","articleTitle":"用户7第1-寻味顺德，人文艺术及美食探索深度游攻略","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user007banner.jpg"],"articleListImg":["images/cmdimg/user007banner.jpg"]
                //             },
                //             {"articleId":"02","articleTitle":"用户7第2-寻味顺德，人文艺术及美食探索深度游攻略","articleShow":"...................",
                //                 "articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user007banner.jpg"],"articleListImg":["images/cmdimg/user007banner.jpg"]
                //             },
                //         ]
                //     },
                // ]
                user: null
            }
        },
        methods: {
            // async _initCarifyData() {
            //     let a = this.$route.params.id;
            //     this.id=a;
            //     if (this.user) {
            //         this.user.forEach((user) => {
            //             if (user.userId == a) {
            //                 this.userData = user;
            //             }
            //         })
            //     }
            // },
            changeRouter() {
                this.$router.go(-1)
            },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 100) {
                    this.topFixed = true
                } else {
                    this.topFixed = false
                }
            },
            //从后端获取数据
            _initDiscoverInfo() {
                let a = this.$route.params.id;
                this.$axios.get('http://39.105.52.171/api/discover/userArticle/?ud_id='+a)
                    .then(res => {
                        this.userData = res.data.data
                        // console.log(this.userData)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            //点击事件向后端传id
            // userIn(a) {
            //     console.log(a)
            //     this.$axios.get('http://39.105.52.171/api/discover/content/?article_id=' + a)
            //         .then(() => {
            //             this.$router.push('/main/articleInfo/'+a)
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            // },
            userIn(a){
                this.$axios.get('http://39.105.52.171/api/discover/content/?article_id='+a)
                    .then(()=>{
                        this.$router.push('/main/articleInfo/'+a)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }

        },
        beforeMount() {
            // let allData =require('../../api/api');
            // this.user=allData;
            // this._initCarifyData()
            this._initDiscoverInfo()
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll)
        }
    }
</script>

<style scoped>
    .userInfo {
        font-size: 0.12rem;
        overflow: hidden;
    }

    .userHeader {
        width: 100%;
        height: 3rem;
        overflow: hidden;
        position: relative;
        background: rgba(0, 0, 0, .7);
    }

    .background {
        width: 100%;
        height: 3rem;
        opacity: 0.3;
    }

    .user {
        width: 3.2rem; /*根据自己的需要随便写*/
        height: 2rem; /*根据自己的需要随便写*/
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -1rem; /*上面设置的高度的一半*/
        margin-left: -1.6rem; /*上面设置的宽度的一半*/
    }

    .user > h1 {
        margin-top: 0.1rem;
        font-size: 0.2rem;
        color: white;
    }

    .user > p {
        margin-top: 0.1rem;
        font-size: 0.12rem;
        color: white;
    }

    .char {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 1rem;
        border: gainsboro 0.03rem solid;
    }

    .banner {
        padding-top: 0.05rem;
        width: 100%;
    }

    .title {
        text-align: left;
        width: 90%;
        /*height:0.3rem;*/
        white-space: nowrap;
        margin: 0 auto;
        padding: 0 0.2rem;
        margin-top: 0.2rem;
        line-height: 0.3rem;
        overflow: hidden;
        font-size: 0.17rem;
        text-overflow: ellipsis;
    }

    .cmdsee {
        width: 0.27rem;
        height: 0.2rem;
        vertical-align: middle;
    }

    .view {
        width: 90%;
        margin: 0 auto;
        text-align: left;
    }

    .view > div {
        margin: 0.1rem 0.2rem 0.1rem 0;
        display: inline-block;
    }

    .view span {
        display: inline-block;
        margin-left: 0.05rem;
        font-size: 0.12rem;
        color: #999;
        font-weight: 400;
        vertical-align: middle;
    }

    .slogan {
        width: 100%;
        height: 0.4rem;
        background-color: white;
        font-size: 0.16rem;
        line-height: 0.4rem;
    }

    .article {
        border-bottom: 0.1rem solid rgb(245, 245, 245);
    }

    .back {
        width: 0.3rem;
        position: absolute;
        top: 0.05rem;
        left: 0.1rem;
    }

    .none {
        width: 100%;
        height: 0.4rem;
        background-color: #fc5a3f;
        line-height: 0.4rem;
        font-size: 0.16rem;
        color: white;
        display: none;
    }

    .block {
        width: 100%;
        height: 0.4rem;
        background-color: #fc5a3f;
        line-height: 0.4rem;
        font-size: 0.16rem;
        color: white;
        display: block;
        position: fixed;
        top: 0;
    }

</style>