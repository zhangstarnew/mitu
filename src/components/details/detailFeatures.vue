<template>
    <div class="yz_featuresBox">
        <div class="yz_features">
            <ul>
                <li v-for="(u,index) in productFeatures" :key="index">
                    <p>
                        <label>{{u.tags}}</label>
                        <span>{{u.title}}</span>
                        <strong>{{u.text}}</strong>
                    </p>
                </li>
            </ul>
        </div>
        <div class="yz_imageTitle">
            <p>——————— 特色信息 ———————</p>
        </div>
        <div class="yz_featuresImages" v-show="show">
            <img v-for="(u,index) in productImages" :src="u" :key="index">
        </div>
        <div class="yz_readBox">
            <p class="yz_readMore" @click="readMore">查看特色信息更多内容</p><i class="yz_iconMore" :class="[isActive?'yz_iconMore':'up']"></i>
            <p class="yz_readNotice" v-if="isActive"><i class="yz_iconNoticeGrey"></i>含大量图片，建议wifi环境下点开</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailFeatures",
        data(){
            return{
                show:false,
                isActive:true,
                productFeatures: [
                    {
                        "tags": "行程亮点",
                        "title": "[童乐时光]",
                        "text": "【水上乐园】【海底世界】【室外机动游戏乐场】【海豚乐园】【4D电影院】【音乐喷池秀】【室内游乐场】"
                    },
                    {
                        "tags": "成团方式",
                        "title": "[说走就走]",
                        "text": "2人成团，（不含领队和导游）"
                    },
                    {
                        "tags": "一价全含",
                        "title": "[超级省心]",
                        "text": "酒店住宿、一日三餐、机场接送、珍珠乐园+野生动物园无限畅玩，食住行游超省心！"
                    }
                ],
                productImages: [
                    "assets/detailImages/details01.jpg",
                    "assets/detailImages/details02.jpg",
                    "assets/detailImages/details03.jpg",
                    "assets/detailImages/details04.jpg",
                    "assets/detailImages/details05.jpg"
                ]
            }
        },
        methods:{
            readMore(e){
                this.show=!this.show;
                this.isActive=!this.isActive;
                if(this.show===true){
                    e.target.innerText="收起特色信息"
                }else{
                    e.target.innerText="查看特色信息更多内容"
                }
            }
        }
    }
</script>

<style scoped>
    .yz_featuresBox{
        background-color: white;
        margin-top: 0.1rem;
    }
    .yz_features ul{
        margin: 0 0.2rem;
        text-align: left;
    }
    .yz_features p{
        line-height: 0.27rem;
        display: inline-block;
        margin-top: 0.1rem;
    }
    .yz_features label{
        color: #ff5523;
        border: 0.01rem solid #ff5523;
        padding: 0 0.02rem;
    }
    .yz_features span{
        font-size: 0.16rem;
        color: #337FE5;
        font-weight: bold;
        display: inline-block;
        margin-left: 0.06rem;
    }
    .yz_features strong{
        font-size: 0.16rem;
    }
    .yz_imageTitle p{
        font-size: 0.14rem;
        color: #999;
        margin: 0 0.2rem;
        padding: 0.14rem 0;
    }
    .yz_featuresImages img{
        width: 100%;
    }
    .yz_readBox{
        position: relative;
        padding-bottom: 0.2rem;
    }
    .yz_readMore{
        font-size: 0.14rem;
        color: #41b3ee;
        padding-top: 0.1rem;
    }
    .yz_readNotice{
        font-size: 0.12rem;
        color: #999;
        padding-top: 0.1rem;
        position: relative;
    }
    .yz_iconMore{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.14rem;
        right: 1rem;
        background-image: url("../../assets/detailImages/iconDownBlue.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_iconNoticeGrey{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.12rem;
        left: 0.8rem;
        background-image: url("../../assets/detailImages/iconNoticeGrey.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .up{
        transform: rotate(-180deg);
    }
</style>