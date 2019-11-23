<template>
    <div>
        <a :href="'#/main/userInfo/'+data.userId+'/'+data.article[0].articleId"><img :src="data.article[0].articleImg[0]" alt="" class="banner"></a>
        <p class="title">{{data.article[0].articleTitle}}</p>
        <div class="view">
            <div>
                <img src="../../../public/images/cmdimg/view.png" alt="" class="cmdsee" ><span>{{data.article[0].articleView}}</span>
            </div>
            <div>
                <img src="../../../public/images/cmdimg/zan.png" alt="" class="cmdsee" @click="data.article[0].articleLike++"><span>{{data.article[0].articleLike}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articleShow",
        props:["data"]
    }
</script>

<style scoped>
    .banner{
        padding-top: 0.05rem;
        width:100%;
    }
    .title{
        width:90%;
        white-space: nowrap;
        margin: 0 auto;
        padding: 0 20px;
        margin-top: 20px;
        line-height: 30px;
        overflow: hidden;
        font-size: 17px;
        text-overflow: ellipsis;
    }
    .cmdsee{
        width: 27px;
        height: 20px;
        vertical-align: middle;
    }
    .view{
        width:90%;
        margin: 0 auto;
        text-align: left;

    }
    .view>div{
        margin: 0.1rem 0.2rem 0.1rem 0;
        display: inline-block;
    }
    .view span{
        display: inline-block;
        margin-left:0.05rem;
        font-size: 0.12rem;
        color: #999;
        font-weight: 400;
        vertical-align: middle;
    }

</style>