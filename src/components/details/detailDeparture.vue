<template>
    <div>
        <div class="yz_departureBox">
            <div class="yz_departure">
                <p>北京出发</p>
            </div>
            <div class="yz_datePriceBox">
                <div class="yz_datePrice">
                    <p>12/27</p>
                    <p>￥<span>12399</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailDeparture"
    }
</script>

<style scoped>
    .yz_departureBox{
        background-color: white;
        margin: 0.1rem 0;
    }
    .yz_departure{
        margin: 0 0.2rem;
        border-bottom: 0.01rem solid #dfdfdf;
    }
    .yz_departure p{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.17rem;
        font-weight: bold;
        text-align: left;
    }
    .yz_datePriceBox{
        margin: 0 0.2rem;
        padding: 0.15rem 0 0.05rem;
        text-align: left;
    }
    .yz_datePrice{
        display: inline-block;
        width: 18%;
        height: 0.4rem;
        text-align: center;
        border: 0.01rem solid #dfdfdf;
        border-radius: 0.1rem;
    }
    .yz_datePrice p:nth-child(1){
        margin-top: 0.06rem;
        color: #333;
    }
    .yz_datePrice p:nth-child(2){
        color: #fc5a3f;
    }
</style>