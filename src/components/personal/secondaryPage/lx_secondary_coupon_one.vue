<template>
    <div class="compon">
        <div class="property">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="my_wallet">优惠券</span>
        </div>
        <div class="select_list">
            <van-dropdown-menu active-color="#ee0a24">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
        </div>
        <div class="compons" v-for="(n,index) in list" :key="index">
            <div class="compons_left">
                <p class="explain">{{n.ut_desc}}</p>
                <p class="time">{{n.create_time}}</p>
            </div>
            <div class="compons_right">
                <p class="pesd">￥{{n.ut_money}}</p>
                <p class="term">{{n.ut_tiaojian}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { DropdownMenu, DropdownItem } from 'vant';
    import axios from 'axios';
    export default {
        name: "lx_secondary_coupon_one",
        data() {
            return {
                value1: 'a',
                value2: 0,
                value3:'e',
                option1: [
                    { text: '全部', value: 'a' }
                ],
                option2: [
                    { text: '价格由高到低', value: 0 },
                    { text: '价格由低到高', value: 1 }
                ],
                option3: [
                    { text: '可用', value: 'e' },
                    { text: '不可用', value: 'f' }
                ],
                list:[]
            }
        },
        components:{
            [DropdownMenu.name]:DropdownMenu,
            [DropdownItem.name]:DropdownItem
        },
        methods:{
            change(i){
                let t =sessionStorage.getItem("ud_id");
                // console.log(this.option1[0].value);
                // if(this.option1[0].value == 'a'){
                //     axios.get('http://10.35.167.122:8080/api/u_ticket/?ud_id='+t+'&status='+i)
                    axios.get('http://117.78.9.95/api/u_ticket/?ud_id='+ t +'&status='+i)
                        .then(res => {
                            console.log(res.data);
                            this.list = res.data.dataList;
                            console.log(this.list);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                // }
            }
        },
        watch:{
           value1(){
               if(this.value1 == 'a'){
                   this.change(5);
               }
           },
            value2(){
                if(this.value2 == 0){
                    this.change(2);
                }else if(this.value2 == 1){
                    this.change(1);
                }
            },
            value3(){
                if(this.value3 == 'e'){
                    this.change(3);
                }else if(this.value3 == 'f'){
                    this.change(4);
                }
            }

        },
        // beforeMount() {
        //     this.change(5);
        // }
    }
</script>

<style scoped>
    .compon{
        width: 100%;
    }
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.1rem 0;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.5rem;
    }
    .return{
        display: inline-block;
        width:0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/return.png") no-repeat;
        background-size:60% 60%;
        font-size: 0;
        position: absolute;
        left: 0.1rem;
    }
    .select_list{
        width: 100%;
        font-size: 0.12rem;
        border-top: 0.01rem solid gainsboro;
        border-bottom: 0.01rem solid gainsboro;
    }
    .compons{
        width: 95%;
        margin: 0.2rem auto;
        background: url("../../../assets/images/lx_img/vip_1.455bad2.png") no-repeat;
        background-size: 100% 100%;
        padding: 0.3rem 0;
        text-align: left;
    }
    .compons_left{
        display: inline-block;
        margin-left: 0.3rem;
    }
    .compons_right{
        display: inline-block;
        position: relative;
        left: 0.4rem;
        top: -0.1rem;
    }
    .explain{
        font-size: 0.16rem;
        width: 2rem;
        text-align: left;
        position: relative;
        top: -0.4rem;
    }
    .time{
        font-size: 0.12rem;
        width: 1.5rem;
        color: gray;
        margin-top: -0.4rem;
    }
    .pesd{
        width: 0.4rem;
        font-size: 0.2rem;
        color: white;
        padding-top: 0.15rem;
        font-weight: 600;
    }
    .term{
        color: white;
        font-size: 0.12rem;
        width: 0.8rem;
        margin:0.1rem 0 0 0.2rem;
    }
</style>