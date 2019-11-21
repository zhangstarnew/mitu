<template>
    <ul class="destinationLeft-zx-ul">
        <li class="destinationLeft-zx-li" v-for="(u,i) in data" :key="i" @click="update(i)" :class="{destinationLeftA:index==i}">{{u.province}}</li>
    </ul>
</template>

<script>
    export default {
        name: "destinationLeft",
        props:["data"],
        data(){
            return {
                index:0
            }
        },
        methods:{
            update(i){
                this.index=i
                this.$emit("cityIndex",i)
            }
        }
    }
</script>

<style scoped>
    .destinationLeft-zx-ul{
        width: 26%;
        overflow-y:scroll;
        height: calc(100vh);
        position: fixed;
    }
    .destinationLeft-zx-li{
        height: 0.8rem;
        background-color: rgb(245,245,245);
        padding-left: 0.2rem;
        line-height: 0.8rem;
        text-align: left;
        font-size: 0.16rem;
        color: rgb(109,109,109);
        position: relative;
    }
    .destinationLeft-zx-li:after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0.16rem;
        width: 0.32rem;
        border-bottom: 0.005rem solid gainsboro;
    }
    .destinationLeftA:after{
        border-bottom: 0.015rem solid rgb(255,85,35);
    }

    .destinationLeftA{
        color: rgb(255,85,35);
        font-size: 0.16rem;
    }
</style>