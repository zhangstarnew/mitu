<template>
        <ul class="travelCityOneS-ul">
            <li class="travelCityOneS-li" v-for="(u,i) in data.cName" :key="i">{{u}}</li>
        </ul>
</template>

<script>

    export default {
        name: "travelCityOneS",
        props:["data"]
    }
</script>

<style scoped>
    .travelCityOneS-ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .travelCityOneS-li{
        width: 25%;
        height: 0.4rem;
        background-color: rgb(245,245,245);
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.4rem;
        color: rgb(147,147,147);
    }
</style>