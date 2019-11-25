<template>
    <div class="yz_details">
        <header class="yz_header">
            <span class="yz_iconBack" @click="back"></span>
            <p>产品详情</p>
        </header>
        <detailTopBrief :data="product"></detailTopBrief>
        <detailReason :data="product"></detailReason>
        <detailDeparture></detailDeparture>
        <detailTabs class="yz_tabs"></detailTabs>
        <detailFeatures :data="product"></detailFeatures>
        <detailRoute :data="product"></detailRoute>
        <detailNotice :data="product"></detailNotice>
        <detailEvaluate :data="product" class="yz_eva"></detailEvaluate>
        <detailFooter :data="product"></detailFooter>
    </div>
</template>

<script>
    import detailTopBrief from "../../components/details/detailTopBrief";
    import detailReason from "../../components/details/detailReason";
    import detailDeparture from "../../components/details/detailDeparture";
    import detailTabs from "../../components/details/detailTabs";
    import detailFeatures from "../../components/details/detailFeatures";
    import detailFooter from "../../components/details/detailFooter";
    import detailRoute from "../../components/details/detailRoute";
    import detailNotice from "../../components/details/detailNotice";
    import detailEvaluate from "../../components/details/detailEvaluate";
    export default {
        name: "detail",
        components:{
            detailTopBrief,
            detailReason,
            detailDeparture,
            detailTabs,
            detailFeatures,
            detailRoute,
            detailNotice,
            detailEvaluate,
            detailFooter
        },
        data(){
            return {
                data:null,
                product:[]
            }
        },
        methods:{
          back(){
              this.$router.go(-1)
          },
            async _initCarifyData() {
                let a = this.$route.params.id;
                this.id=a;
                if (this.data) {
                    this.data.forEach((aaa) => {
                        if (aaa.goodsId == a) {
                            this.product = aaa;
                        }
                    })
                }
            }
        },
        beforeMount() {
            let allData=require('../../../mocks/detail');
            this.data=allData;
            this._initCarifyData()
        }
    }
</script>

<style scoped>
    .yz_details{
        background-color: #efeff4;
        position: relative;
        font-size: 0.12rem;
    }
    .yz_header{
        width: 100%;
        height: 0.44rem;
        position: fixed;
        top: 0;
        z-index: 10;
        /*background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.5));*/
        background-color: white;
    }
    .yz_header p{
        font-size: 0.19rem;
        line-height: 0.44rem;
        position: absolute;
        left: 40%;
    }
    .yz_iconBack{
        width: 0.2rem;
        height: 0.2rem;
        float: left;
        margin: 0.11rem 0 0.11rem 0.2rem;
        background-image: url("../../assets/detailImages/leftArrowBlack.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .yz_tabs{
        position: sticky;
        top: 0.44rem;
        margin: 0.1rem 0;
    }
</style>