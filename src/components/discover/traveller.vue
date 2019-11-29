<template>
    <div class="travellerCon">
        <!-- :href="'#/main/userInfo/'+data.ud_id"-->
        <a v-for="(data,u) in data" :key="u" @click="userIn(data.ud_id)">
            <img :src="data.ud_img" alt="">
            <h2>{{data.nick_name}}</h2>
            <p>{{data.ud_info}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "traveller",
     data(){
            return {
                data:null
            }
        },
        methods:{
            _initDiscoverInfo(){
                this.$axios.get('http://39.105.52.171/api/discover/lxj')
                    .then(res=>{
                        this.data=res.data.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            userIn(a){
                this.$axios.get('http://39.105.52.171/api/discover/userArticle/?ud_id='+a)
                    .then(()=>{
                        this.$router.push('/main/userInfo/'+a)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        beforeMount() {
           this._initDiscoverInfo()
        }

    }
</script>

<style scoped>
    .travellerCon{
        width:100%;
        margin: 0 auto;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }
    .travellerCon>a>img{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 1rem;
    }
    .travellerCon>a{
        display: block;
        /*float: left;*/
        width: 40%;
        height: 1.5rem;
        overflow: hidden;
        text-align: center;
        padding: 0.1rem 0.15rem 0.15rem;
    }
    .travellerCon>a>p{
        color: #999;
        font-size: 0.12rem;
        line-height: 1.4;
        height: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>