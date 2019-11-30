<template>
    <div>
        <pay-mentsitem :orderList="orderList">{{orderList}}</pay-mentsitem>
<!--        {{orderList}}-->
    </div>
</template>

<script>
    import paymentsItem from "./paymentsItem";
    export default {
        name: "allOrder",
        props:['orderList'],
        data(){
            return{
               i:0
            }
        },
        components:{
            "pay-mentsitem": paymentsItem,
            //评价
            //"order-assess": assess,
            //"to-travel":toTravel
        },

    }
</script>

<style scoped>

</style>