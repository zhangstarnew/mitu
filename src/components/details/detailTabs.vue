<template>
    <div>
        <div class="yz_tabs">
            <div :class="{yz_bottomLine:shows===1}" @click="item01">产品特色</div>
            <div :class="{yz_bottomLine:shows===2}" @click="item02">行程介绍</div>
            <div :class="{yz_bottomLine:shows===3}" @click="item03">须知</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailTabs",
        data(){
            return{
                shows:1
            }
        },
        methods:{
            item01(){
                this.shows=1;
                // window.scrollTo(0,715)
                window.scrollTo({
                    top: 715,
                    behavior: "smooth"
                });
            },
            item02(){
                this.shows=2;
                // window.scrollTo(0,1120)
                window.scrollTo({
                    top: 1120,
                    behavior: "smooth"
                });
            },
            item03(){
                this.shows=3;
                // window.scrollTo(0,1700)
                window.scrollTo({
                    top: 1700,
                    behavior: "smooth"
                });
            }
        },
        // mounted() {
        //     // window.addEventListener('scroll', () => {
        //     //     let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        //     //     // eslint-disable-next-line no-console
        //     //     console.log(top);
        //     // })
        // }
    }
</script>

<style scoped>
    .yz_tabs{
        display: flex;
        height: 0.5rem;
        background-color: white;
        z-index: 2;
    }
    .yz_tabs div{
        width: 100%;
        line-height: 0.5rem;
        font-size: 0.14rem;
        color: #333;
        font-weight: bold;
    }
    .yz_bottomLine{
        border-bottom: 0.03rem solid #f0643c;
    }
</style>