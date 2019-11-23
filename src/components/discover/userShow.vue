<template>
    <div>
        <div v-for="(data,u) in data" :key="u" class="userShow">
            <a :href="'#/main/userInfo/'+data.userId"><img :src="data.charHead" alt="" class="chartHead"></a>
        <div class="head">
            <span class="userName">{{data.userName}}</span>
            <span class="label">{{data.userIntroduce}}</span>
        </div>
            <article-show :data="data"></article-show>
        </div>
    </div>
</template>

<script>
    import articleShow from "./articleShow";
    export default {
        name: "userShow",
        props:["data"],
        components:{
            articleShow
        }
    }
</script>


<style scoped>

    .userShow{
        width:100%;
        margin: 0.2rem auto;
        border-bottom: 0.1rem solid rgb(245,245,245);
        position: relative;
    }
    .head{
        width:80%;
        margin: 0 auto;
        margin-left: 0.55rem;
        /*height: 0.2rem;*/
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    .userName{
        font-size: 0.14rem;
        padding-left: 0.2rem;
    }
    .userName:after{
        content: "";
        height: 0.12rem;
        width: 1px;
        clear: both;
        margin: 0 0.06rem;
        border-right: 1px solid #ccc;
    }
    .label{
        font-size: 0.12rem;
        color: #999;
    }
    .banner{
        padding-top: 0.05rem;
        width:100%;
    }
    .title{
        width:90%;
        /*height:0.3rem;*/
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
    .chartHead{
        width: 45px;
        height: 45px;
        border-radius: 100px;
        border: white 0.03rem solid;
        position: absolute;
        left:0.2rem;
        top:-0.08rem;
    }
</style>