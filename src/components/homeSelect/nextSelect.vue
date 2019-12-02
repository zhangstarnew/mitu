<template>
    <div>
        <div v-if="!this.city">
             <div id="circle"></div>
        </div>
     <div v-else>
         <next-select-header :cityName="tab.cityName"></next-select-header>
         <div class="searchBar" id="searchBar">
             <next-nav :class="searchBarFixed == true ? 'isFixed' :''"></next-nav>
         </div>
         <next-content class="nextNav-b" :scenicSiteTablate="tab.scenicSiteTablate"></next-content>
     </div>
    </div>
</template>

<script>
    import nextSelectHeader from "./nextSelectHeader";
    import nextNav from "./nextNav";
    import nextContent from "./nextContent";
    export default {
        name: "nextSelect",
        components:{
            nextSelectHeader,
            nextNav,
            nextContent
        },
        data(){
            return{
                id:'',
                tab:[],
                city:[],
                searchBarFixed:false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)

        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                var offsetTop = document.querySelector('#searchBar').offsetTop
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
            _initSelectInfo(){
                let b = this.$route.params.id;
                this.$axios.get('http://117.78.9.95/api/CityViewList/?id='+b)
                    .then(res=>{
                        this.tab=res.data.data
                       // console.log(this.tab)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },

        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        },
        created(){
          this._initSelectInfo()
        },
    }
</script>

<style scoped>
    .isFixed{
        position:fixed;
        background-color:#Fff;
        top:0;
        z-index:999;
        width: 3.75rem;
    }

     #circle{
               margin: 20px auto;
              width: 100px;
               height: 100px;
               border: 5px white solid;
               border-left-color: #ff5500;
               border-right-color:#0c80fe;
               border-radius: 100%;
               animation: loading1 1s infinite linear;
           }
     @keyframes loading1{
         from{transform: rotate(0deg)}to{transform: rotate(360deg)}
     }
</style>