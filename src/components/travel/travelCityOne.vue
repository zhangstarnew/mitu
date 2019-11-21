<template>
        <ul class="travelCityOne-ul">
            <li class="travelCityOne-li" v-for="(u,i) in data" :key="i" @click="update(i)">
                <img :src="u.img" class="travelCityOne-img">
                <p class="travelCityOne-p">{{u.name}}</p>
            </li>
        </ul>
</template>

<script>
    export default {
        name: "travelCityOne",
        props:["data"],
        methods:{
            update(i){
               this.$emit("travelCityIndexO",i)

            },
        }
    }
</script>

<style scoped>
    .travelCityOne-ul{
        width: 100%;
        height: 0.65rem;
        background-color: white;
    }
    .travelCityOne-li{
        width: 25%;
        height: 0.65rem;
        background-color: white;
        display: inline-block;
        text-align: center;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .travelCityOne-img{
        width: 0.4rem;
        height: 0.3rem;
    }
    .travelCityOne-p{
        font-size: 0.12rem;
    }
</style>