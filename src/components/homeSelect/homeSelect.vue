<template>
    <div>
        <div class="homeSelect-a">
            <div>
                    <svg @click="_initSelectInfo" t="1574229302488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1934" width="200" height="200"><path d="M446.836364 723.781818c-160.581818 0-290.909091-130.327273-290.909091-290.909091S286.254545 141.963636 446.836364 141.963636s290.909091 130.327273 290.909091 290.909091-130.327273 290.909091-290.909091 290.909091z m0-558.545454c-146.618182 0-267.636364 121.018182-267.636364 267.636363s121.018182 267.636364 267.636364 267.636364 267.636364-121.018182 267.636363-267.636364S593.454545 165.236364 446.836364 165.236364zM877.381818 875.054545c-2.327273 0-6.981818 0-9.309091-2.327272l-232.727272-232.727273c-4.654545-4.654545-4.654545-11.636364 0-16.290909s11.636364-4.654545 16.290909 0l232.727272 232.727273c4.654545 4.654545 4.654545 11.636364 0 16.290909 0 0-4.654545 2.327273-6.981818 2.327272z" p-id="1935" fill="#8a8a8a"></path></svg>
                    <input type="text" placeholder="搜索目的地/关键词"  v-model="citySelect" @keyup.enter="_initSelectInfo"/>
            </div>
            <div @click="prev">
                取消
            </div>
        </div>
        <home-select-content></home-select-content>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    import homeSelectContent from "./homeSelectContent";
    export default {
        name: "homeSelect",
        components:{
            homeSelectContent,
            [Dialog.Component.name]: Dialog.Component
        },
        methods:{
            fn(){
                this.$store.commit('setValue')
            },
            prev(){
                this.$router.go(-1)
            },
            _initSelectInfo(){
                // let b = this.$route.params.id;
                this.$axios.get('http://117.78.9.95/api/select/?name='+this.citySelect)
                    .then(res=>{
                        this.cid=res.data.data.cid
                        if (this.cid) {
                            this.$router.push('/main/nextSelect/'+this.cid)
                        }
                    }).catch(err=>{
                    console.log(err)
                        Dialog.alert({
                            message: '没有此城市'
                        })
                })

            },
        },

        data(){
            return{
                citySelect:"",
                cid:''
            }
        }
    }
</script>

<style scoped>
    .icon{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.3rem;
        top: 0.1rem;
        color: gainsboro;
    }
    .homeSelect-a{
        width: 3.75rem;
        font-size: 0.12rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 0.01rem solid gainsboro;
        height: 0.44rem;
        padding-top: 0.05rem;
        box-sizing: border-box;
        position: fixed;
        top: 0rem;
        background-color: white;
    }
    .homeSelect-a input{
        width: 2rem;
        height: 0.25rem;
        outline: none;
        border: 0rem;
        font-size: 0.17rem;
    }
    .homeSelect-a>div:nth-of-type(1){
        width: 2.6rem;
        height: 0.3rem;
        border: 0.01rem solid gainsboro;
        border-radius: 0.5rem;
        padding-left: 0.2rem;
        box-sizing: border-box;

    }
    .homeSelect-a>div:nth-of-type(2){
        width: 0.6rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.17rem;
        color: #1f99f4;
    }
</style>