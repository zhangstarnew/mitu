<template>
    <div>
        <div class="details"  v-for="(n,index) in ticketData" :key="index">
<!--            :style="'background:url('+n.bgColor+')'"-->
            <div class="details_left" >
                <p class="pesd">{{n.st_money}}</p>
                <p class="explain">{{n.st_ticket_desc}}</p>
                <p class="time">{{n.create_time}}</p>
            </div>
            <div class="details_right">
                <p class="type">{{n.st_name}}</p>
                <p class="term" @click="addTicket">{{n.st_tiaojian}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "lx_secondary_coupon_four_son",
        props:["ticketData"],
        data() {
            return {
                a: null
            }
        },
        methods:{
            addTicket(){
                this.a= sessionStorage.getItem("ud_id");
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    transformRequest: [function (data) {
                        data = JSON.stringify(data)
                        return data
                    }],
                    // url: "http://10.35.167.122:8080/api/s_ticket/",
                    url: "http://117.78.9.95/api/s_ticket/",
                    method: "POST",
                    data: { //body
                        ud_id:this.a,
                        sys_ticket_id:this.ticketData.sys_ticket_id
                    }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.status == 200) {
                        alert("添加成功!");
                    }else{
                        alert("添加失败！")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .details{
        width: 95%;
        margin: 0.05rem auto;
        background-repeat: no-repeat!important;
        background: url("../../../assets/images/lx_img/vip_1.png") no-repeat;
        background-size: 100% 100%!important;
        padding: 0.3rem 0;
        text-align: left;
    }
    /*.datails_other{*/
    /*    width: 95%;*/
    /*    margin: 0.05rem auto;*/
    /*    background: url("../../../assets/images/lx_img/vip_1.png") no-repeat;*/
    /*    background-size: 100% 100%;*/
    /*    padding: 0.3rem 0;*/
    /*    text-align: left;*/
    /*}*/
    .details_left{
        display: inline-block;
        margin-left: 0.3rem;
    }
    .details_right{
        display: inline-block;
        position: relative;
        left: 0.4rem;
        top: -0.1rem;
    }
    .explain{
        font-size: 0.12rem;
        width: 2rem;
        text-align: left;
    }
    .time{
        font-size: 0.12rem;
        width: 1.5rem;
        color: gray;
        position: relative;
        top:0.1rem;
    }
    .pesd{
        width: 0.4rem;
        font-size: 0.2rem;
        color: red;
        font-weight: 600;
    }
    .count{
        font-size: 0.12rem;
        color: red;
    }
    .type{
        font-size: 0.14rem;
        color: white;
        /*opacity: 0.3;*/
        position: relative;
        /*left: 0.1rem;*/
        top: -0.1rem;
        text-align: center;
    }
    .term{
        width: 0.6rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        border-radius: 0.3rem 0.3rem;
        background-color: white;
        color: red;
        font-size: 0.1rem;
        margin-left: 0.05rem;
    }
</style>