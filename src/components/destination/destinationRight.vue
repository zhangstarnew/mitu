<template>
    <div class="destinationRight-zx-box">
        <p>{{data.province}}</p>
        <div class="destinationRight-zx-box1" >
            <a :href="'#/ceshi/'+u.cid" class="destinationRight-zx-box1-a" v-for="(u,i) in data.city" :key="i">
                <img :src="u.cityImg" class="destinationRight-zx-box1-img">
                <br>
                <span class="destinationRight-zx-box1-span">{{u.cityName}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "destinationRight",
        props:["data"]
    }
</script>

<style scoped>
    .destinationRight-zx-box{
        width: 70%;
        background-color: white;
        font-size: 0.12rem;
        /*padding: 0rem 0.1rem;*/
        margin: 0 0 0 1.12rem;
        overflow: auto;
    }
    .destinationRight-zx-box p{
        font-size: 0.2rem;
        font-weight: bold;
        color: black;
        width: 70%;
        height: 0.5rem;
        text-align:left;
        line-height: 0.5rem;
        padding-left: 0.09rem;
    }
    .destinationRight-zx-box1{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        /*align-content: flex-start;*/
    }
    .destinationRight-zx-box1-a{
        padding: 0.09rem;
    }
    .destinationRight-zx-box1-img{
        width: 1.05rem;
        height: 0.7rem;
        border-radius: 0.1rem;
    }
    .destinationRight-zx-box1-span{
        width: 1.05rem;
        height: 0.2rem;
        display: inline-block;
        font-size: 0.14rem;
        text-align: left;
    }

</style>