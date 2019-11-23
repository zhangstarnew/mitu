<template>
    <div id="nextSelecct">
        <div @click="prev"><img src="../../../public/images/lqyImg/1.png" /></div>
        <div>
            <svg t="1574229302488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1934" width="200" height="200"><path d="M446.836364 723.781818c-160.581818 0-290.909091-130.327273-290.909091-290.909091S286.254545 141.963636 446.836364 141.963636s290.909091 130.327273 290.909091 290.909091-130.327273 290.909091-290.909091 290.909091z m0-558.545454c-146.618182 0-267.636364 121.018182-267.636364 267.636363s121.018182 267.636364 267.636364 267.636364 267.636364-121.018182 267.636363-267.636364S593.454545 165.236364 446.836364 165.236364zM877.381818 875.054545c-2.327273 0-6.981818 0-9.309091-2.327272l-232.727272-232.727273c-4.654545-4.654545-4.654545-11.636364 0-16.290909s11.636364-4.654545 16.290909 0l232.727272 232.727273c4.654545 4.654545 4.654545 11.636364 0 16.290909 0 0-4.654545 2.327273-6.981818 2.327272z" p-id="1935" fill="#8a8a8a"></path></svg>
            <input type="text" :value="cityName" onfocus=this.blur()>
        </div>
        <div><img src="../../../public/images/lqyImg/2.png" alt=""></div>
    </div>
</template>
<script>
    export default {
        name: "nextSelectHeader",
        props:['cityName'],
        methods:{
            prev(){
                this.$router.go(-1)

            }
        }
    }
</script>

<style scoped>
    #nextSelecct{
        width: 3.75rem;
        height: 0.4rem;
        background-color: white;
        border-bottom: 0.01rem solid gainsboro;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        font-size: 0.12rem;

    }
    #nextSelecct img{
        width:50%;
        height: 50%;
    }
    #nextSelecct div:nth-of-type(1){
        width: 0.25rem;
        padding-top: 0.1rem;
    }
    #nextSelecct div:nth-of-type(2){
        width: 2.2rem;
        height: 0.26rem;
        border: 0.01rem solid gainsboro;
        border-radius: 0.5rem;
        margin-top: 0.06rem;
    }
    #nextSelecct div:nth-of-type(2) input{
        width: 1.8rem;
        height: 0.2rem;
        border: 0rem;
        outline: none;
        margin-left: 0.15rem;
        padding-top: 0.03rem;
    }
    #nextSelecct div:nth-of-type(3){
        width: 0.3rem;
        padding-top: 0.1rem;
    }
    .icon{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.8rem;
        top: 0.11rem;
        color: gainsboro;
    }
</style>