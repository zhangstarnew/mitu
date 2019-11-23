<template>
    <div class="travelContentShowA-box">
        <a href="#" v-for="(u,i) in data.contentA" :key="i" class="travelContentShowA-a">
            <img :src="u.img" class="travelContentShowA-img">
            <h3 class="travelContentShowA-h3">{{u.title}}</h3>
        </a>
    </div>
</template>

<script>
    export default {
        name: "travelContentShowA",
        props:["data"]
    }
</script>

<style scoped>
    .travelContentShowA-box{
        width: 100%;
    }
    .travelContentShowA-a{
        width: 3.35rem;
        height: 1.5rem;
        display: inline-block;
        position: relative;
        margin-top: 0.2rem;
    }
    .travelContentShowA-img{
        width: 3.35rem;
        height: 1.5rem;
    }
    .travelContentShowA-h3{
        font-size: 0.18rem;
        color: white;
        width: 3.35rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        position: absolute;
        z-index: 10;
        bottom: 0.1rem;
        left: 0.1rem;
        font-weight: 500;
        text-align: left;
    }
</style>