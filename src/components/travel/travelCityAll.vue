<template>
    <div>
        <travel-city-one :data="travelCity1" @travelCityIndexO="travelCityIndexO" ></travel-city-one>
        <travel-city-one-s :data="travelCity1[isChange]" v-show="flag"></travel-city-one-s>
        <travel-city-two :data="travelCity2" @travelCityIndexT="travelCityIndexT"></travel-city-two>
        <travel-city-two-s :data="travelCity2[isAlter]" v-show="star"></travel-city-two-s>
    </div>
</template>

<script>
    import travelCityOne from "./travelCityOne";
    import travelCityTwo from "./travelCityTwo";
    import travelCityOneS from "./travelCityOneS";
    import travelCityTwoS from "./travelCityTwoS";
    export default {
        name: "travelCityOneAll",
        components:{
            travelCityOne,
            travelCityTwo,
            travelCityOneS,
            travelCityTwoS
        },
        data(){
            return {
                isChange:0,
                isAlter:0,
                flag:false,
                star:false,
                travelCity1:[
                    {
                        img:"./images/travelAll/travelCity1.png",
                        name:"热门目的地",
                        cName:["西安","成都","三亚","丽江","成都","厦门","广州","桂林","哈尔滨","武汉","长沙","南昌"]
                    },
                    {
                        img:"./images/travelAll/travelCity2.png",
                        name:"陕西",
                        cName:["西安","咸阳","宝鸡","汉中","延安"]
                    },
                    {
                        img:"./images/travelAll/travelCity3.png",
                        name:"海南",
                        cName:["三亚","海口","兴隆"]
                    },
                    {
                        img:"./images/travelAll/travelCity4.png",
                        name:"云南",
                        cName:["丽江","大理","西双版纳","香格里拉"]
                    }
                ],
                travelCity2:[
                    {
                        img:"./images/travelAll/travelCity5.png",
                        name:"四川",
                        cName:["成都","都江堰","九寨沟","稻城"]
                    },
                    {
                        img:"./images/travelAll/travelCity6.png",
                        name:"福建",
                        cName:["厦门","鼓浪屿"]
                    },
                    {
                        img:"./images/travelAll/travelCity7.png",
                        name:"广东",
                        cName:["广州","珠海"]
                    },
                    {
                        img:"./images/travelAll/travelCity8.png",
                        name:"广西",
                        cName:["桂林","南宁"]
                    }
                ]
            }
        },
        methods:{
            travelCityIndexO(i){
                if(i==this.isChange){
                    this.flag=!this.flag
                }else{
                    this.flag=true
                }
                this.isChange = i
            },
            travelCityIndexT(j){
                if(j==this.isAlter){
                    this.star=!this.star
                }else{
                    this.star=true
                }
                this.isAlter=j
            }
        }
    }
</script>

<style scoped>

</style>