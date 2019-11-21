<template>
    <ul class="travelCityTwoS-ul">
        <li class="travelCityTwoS-li" v-for="(u,i) in data.cName" :key="i">{{u}}</li>
    </ul>
</template>

<script>
    export default {
        name: "travelCityTwoS",
        props:["data"]
    }
</script>

<style scoped>
    .travelCityTwoS-ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .travelCityTwoS-li{
        width: 25%;
        height: 0.4rem;
        background-color: rgb(245,245,245);
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.4rem;
        color: red;
    }
</style>