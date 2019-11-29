<template>
    <div class="yz_routeBox">
        <div class="yz_routeTitle">
            <p>行程简介</p>
            <span>详细行程</span>
            <i class="yz_iconNext"></i>
        </div>
        <div class="yz_route">
            <ul>
                <li v-for="(u,index) in routeDetails" :key="index"><span>{{u.day}}</span>{{u.city}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailRoute",
        props:["data"],
        data(){
            return{
                routeDetails: [
                    {"day":"D1","city":"北京"},
                    {"day":"D2","city":"北京/伊斯坦布尔"},
                    {"day":"D3","city":"伊斯坦布尔"},
                    {"day":"D4","city":"伊斯坦布尔－萨夫兰博卢Safranbulu（车程约5.5小时）"},
                    {"day":"D5","city":"萨夫兰布鲁—安卡拉—图兹湖—卡帕多奇亚（车程约4+4个小时）"},
                    {"day":"D6","city":"卡帕多奇亚"},
                    {"day":"D7","city":"卡帕多奇亚-孔亚-安塔利亚（车程约4+4个小时） "},
                    {"day":"D8","city":"安塔利亚-帕姆卡莱（棉花堡） （路程约330公里；约4小时）"},
                    {"day":"D9","city":"帕姆卡莱-库萨达斯（路程约195公里；约3小时）"},
                    {"day":"D10","city":"库萨达斯-埃菲所-伊兹密尔/伊斯坦布尔"},
                    {"day":"D11","city":"伊斯坦布尔/北京"}
                ]
            }
        }
    }
</script>

<style scoped>
    .yz_routeBox{
        margin-top: 0.1rem;
        background-color: white;
    }
    .yz_routeTitle{
        height: 0.6rem;
        margin: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .yz_routeTitle p{
        line-height: 0.6rem;
        color: #333;
        font-size: 0.17rem;
        font-weight: bold;
    }
    .yz_routeTitle span{
        display: block;
        line-height: 0.6rem;
        margin-right: 0.2rem;
        color: #999;
    }
    .yz_iconNext{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        position: absolute;
        top: 0.23rem;
        right: 0;
        background-image: url("../../assets/detailImages/rightArrow.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_route ul{
        margin: 0 0.2rem;
        padding-bottom: 0.15rem;
    }
    .yz_route ul li{
        height: 0.45rem;
        font-size: 0.16rem;
        line-height: 0.45rem;
        text-align: left;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .yz_route ul li span{
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        color: white;
        background-color: #ffab0a;
        border-radius: 60%;
        text-align: center;
        margin-right: 0.1rem;
    }
</style>