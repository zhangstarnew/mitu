<template>
    <div id="nextContent-con" >
        <div  v-for="(data,u) in scenicSiteTablate" :key="u">
            <a :href="'#/detail/'+data.scenicSiteId" id="nextContent-conA">
                <div><img :src="data.scenicSitePicture" alt=""></div>
                <div>
                    <div class="navContent-div">{{data.scenicSiteName}}</div>
                    <p class="navContent-pa">{{data.scenicSiteProject}}</p>
                    <p class="navContent-pb">
                        <span v-for="(u,i) in data.scenicStieTag" :key="i">{{u}}</span>
                    </p>
                    <div class="navContent-price">
                        <span>￥{{data.scenicSitePrice}}起</span><span>日期:{{data.scenicSiteDate}}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nextContent",
        props:['scenicSiteTablate'],

    }
</script>

<style scoped>
    #nextContent-con{
        width: 3.5rem;
        margin: 0rem auto;
    }
    #nextContent-conA{
        display: flex;
        justify-content: space-around;
        height: 1.2rem;
        border-bottom: 0.01rem solid gainsboro;
        padding-top: 0.15rem;
    }
    #nextContent-conA img{
        width: 0.8rem;
        height: 1rem;
    }
    #nextContent>div:nth-of-type(1){
        width: 0.8rem;
        height: 1rem;
    }
    #nextContent>div:nth-of-type(2){
        width: 2.5rem;
        height: 1rem;
    }
    .navContent-div{
        text-align: left;
        font-size: 0.14rem;
        font-weight: 900;
        width: 2.5rem;
        height: 0.4rem;
        overflow: hidden;

    }
    .navContent-pa{
        font-size: 0.12rem;
        text-align: left;
        color: #999;
        margin-top: 0.05rem;
        width: 2.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .navContent-pb{
        font-size: 0.1rem;
        text-align: left;
        margin-top: 0.05rem;
    }
    .navContent-pb span{
        display: inline-block;
        border-radius: 0.05rem;
    }
    .navContent-pb span:nth-of-type(1){
        border: 0.01rem solid red;
        color: red;
    }
    .navContent-pb span:nth-of-type(2){
        border: 0.01rem solid red;
        color: red;
        margin-left: 0.05rem;
    }
    .navContent-pb span:nth-of-type(3){
        border: 0.01rem solid #5fc579;;
        color: #5fc579;
        margin-left: 0.05rem;
    }
    .navContent-pb span:nth-of-type(4){
        border: 0.01rem solid #e0e0e0;
        color: black;
        margin-left: 0.05rem;
    }
    .navContent-price{
        height: 0.2rem;
        font-size: 0.14rem;
        color: red;
        display: flex;
        justify-content: space-between;
    }
    .navContent-price span{
        display: inline-block;
    }
    .navContent-price span:nth-of-type(2){
        width: 1.3rem;
        color: #999;white-space: nowrap;
        overflow:  hidden;
        text-overflow: ellipsis;
    }
    #nextSelecct{
        width: 3.75rem;
        height: 0.4rem;
        background-color: white;
        border-bottom: 0.01rem solid gainsboro;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;

    }
    #nextSelecct img{
        width:50%;
        height: 50%;
    }
    #nextSelecct div:nth-of-type(1){
        width: 0.25rem;
        padding-top: 0.1rem;
    }
    #nextSelecct div:nth-of-type(2){
        width: 2.2rem;
        height: 0.26rem;
        border: 0.01rem solid gainsboro;
        border-radius: 0.5rem;
        margin-top: 0.06rem;
    }
    #nextSelecct div:nth-of-type(2) input{
        width: 1.8rem;
        height: 0.2rem;
        border: 0rem;
        outline: none;
        margin-left: 0.15rem;
        padding-top: 0.03rem;
    }
    #nextSelecct div:nth-of-type(3){
        width: 0.3rem;
        padding-top: 0.1rem;
    }
    .icon{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.8rem;
        top: 0.11rem;
        color: gainsboro;
    }
</style>