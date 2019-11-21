<template>
    <ul class="travelCityTwo-ul">
        <li class="travelCityTwo-li" v-for="(u,j) in data" :key="j" @click="update(j)">
            <img :src="u.img" class="travelCityTwo-img">
            <p class="travelCityTwo-p">{{u.name}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "travelCityTwo",
        props:["data"],
        methods:{
            update(j){
                this.$emit("travelCityIndexT",j)
            },
        }

    }
</script>

<style scoped>
    .travelCityTwo-ul{
        width: 100%;
        height: 0.65rem;
        background-color: white;
    }
    .travelCityTwo-li{
        width: 25%;
        height: 0.65rem;
        background-color: white;
        display: inline-block;
        text-align: center;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .travelCityTwo-img{
        width: 0.4rem;
        height: 0.3rem;
    }
    .travelCityTwo-p{
        font-size: 0.12rem;
    }
</style>