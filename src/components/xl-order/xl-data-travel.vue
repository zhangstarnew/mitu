<template>
    <div class="dataOrder" v-if="travelDate">
        <!--头部开始-->
        <header class="yz_header">
            <span class="yz_iconBack" @click="back" ></span>
            <p>可选预定日期</p>
        </header>
        <div class="order-kong"></div>
        <!--头部结束-->
        <div id="calendar" :class="{'change':isChange}">
            <!-- 年份 月份 -->
            <div class="year-month">
                <div class="year-month_left">
                    <span class="top-time">{{currentMonth}}月</span>
                    <ul>
<!--                        <li>周{{weekdays[newWeek]}}</li>-->
                        <li>{{currentYear}}年</li>
                    </ul>
                </div>
                <div class="year-month_right"></div>
<!--                <x-icon @click="addSchedule" type="ios-plus-empty" size="30" class="i-plus-empty"></x-icon>-->
            </div>
            <!-- 星期 -->
            <ul class="weekdays">
                <li v-for="(vo,index) in weekdays" v-text="vo" :key="index"></li>
            </ul>
            <!-- 日期 -->
            <ul
                    class="days"
                    :class="{'fadeOut':fadeOut,'fadeIn':fadeIn,'fadeOutR':fadeOutR,'fadeInR':fadeInR}"
                    @touchstart="allTouchStart"
                    @touchend="allTouchEnd"
                    @touchstart.stop="touchStart"
                    @touchend.stop="touchEnd"
            >
                <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
                <li
                        v-for="(dayobject,index) in days"
                        :class="{'weekend':(index%7 === 0)||((index+1)%7 === 0)}"
                        :key="index"
                >
                    <!--本月-->
                    <!--如果不是本月 改变类名加灰色-->
                    <div
                            v-if="dayobject.day.getMonth()+1 !== currentMonth"
                            @click="otherMonth(dayobject.day.getDate())"
                            class="other-month"
                    >{{ dayobject.day.getDate() }}</div>
                    <!--如果是本月 还需要判断是不是这一天-->
                    <div v-else class="everyDay">
                        <!--今天 同年同月同日-->
                        <div
                                @click="getDay"
                                v-if="dayobject.day.getFullYear() === Number(useYear) && dayobject.day.getMonth() === Number(useMonth)-1 && dayobject.day.getDate() === Number(useDate)"
                                class="active" :class="{choose:addClass===true}"
                        ><span>{{ dayobject.day.getDate() }}</span><br/><b class="price">¥{{price.data.price}}</b></div>
                        <div
                                :class="{'otherday':dayobject.day.getDate() === otherDay}"
                                v-else
                        >{{ dayobject.day.getDate() }}</div>
                        <div :class="{'circle':dayobject.status==='3','o':dayobject.status==='2'}"></div>
                    </div>
                </li>
            </ul>
            <!--背景色-->
            <div class="background" :class="{'change':isChange}">
                <div v-for="(value,index) in 5" :class="{'dbg':(index%2===0),'lbg':(index%2!==0)}" :key="index"></div>
            </div>
        </div>
        <!--底部开始-->
        <div class="next clearfix" @click="next">
            <p>下一步
                <span>填写出行人信息</span>
            </p>
            <i class="iconin"></i> </div>
        <!--底部结束-->
    </div>
    <date-loading v-else></date-loading>
</template>

<script>
    import loading from '../common/xl_loding'
    import { Toast} from 'vant';
    import travelDateApi from '../../xl_api/xl_data_travel'
    export default {
        name: 'Calendar',
        data() {
            return {
                detailData:'',
                currentDay: 1,
                currentMonth: 1,
                currentYear: 1970,
                currentWeek: 1,
                newWeek:1,
                days: [],
                weekdays:['日', '一', '二', '三', '四', '五', '六'],
                // 上下滑动的鼠标位置
                positionSX: "",
                positionEX: "",
                positionSY: "",
                positionEY: "",
                isChange: false,
                // 左右滑动动画的初始状态
                show: true,
                fadeOut: false,
                fadeIn: false,
                fadeOutR: false,
                fadeInR: false,
                monthList: [],
                status: "",
                otherDay: "",
                travelDate:"",
                detaliList:[],
                orderDate:'',
                productId:'',
                goodsId:'',
                useDate:1,
                useMonth:1,
                useYear:1,
                price:0, //价格
                //用于接收
                addClass:false
            };
        },
        components:{
            // eslint-disable-next-line vue/no-unused-components
            Toast,
            "date-loading":loading
        },
        methods: {
            getDay(){
                this.addClass = !this.addClass
            },

            async getDate(){
                let data=await travelDateApi.getTravelData(this.goodsId)
                this.travelDate = data.start_time;
                this.price = data
                console.log(this.travelDate);
                this.useYear = this.travelDate.trim().split('-')[0]
                this.useMonth = this.travelDate.trim().split('-')[1]
                this.useDate = this.travelDate.trim().split('-')[2]
                this.initData(this.useYear+'-'+this.useMonth+'-01');
            },
            //从后端获取端口 参数：产品id
            // getDate() {
            //     axios.get('http://117.78.9.95/api/view_detail/?v_id='+2 ) //产品id
            //         .then(res => {
            //             console.log(res.data); //出行日期
            //             this.travelDate = data.start_time;
            //             this.price = res.data
            //             console.log(this.travelDate);
            //             this.useYear = this.travelDate.trim().split('-')[0]
            //             this.useMonth = this.travelDate.trim().split('-')[1]
            //             this.useDate = this.travelDate.trim().split('-')[2]
            //             this.initData(this.useYear+'-'+this.useMonth+'-01');
            //         });
            // },

            //将数据传入到填写出行人页面中
            next(){
                if(this.addClass){
                    this.$router.push('/main/xl_detail/optional/'+this.goodsId)
                }
                else{
                    this.$toast('请选择出发日期');
                }
            },
            back(){
                this.$router.go(-1)
            },
            otherMonth(day){
                if(day<15){
                    this.rightSliding()
                }else if(day>15){
                    this.leftSliding()
                }
            },
            //向下滑监听坐标
            allTouchStart(e) {
                //开始x轴坐标
                this.positionSX = e.changedTouches[0].clientX;
                //开始y轴坐标
                this.positionSY = e.changedTouches[0].clientY;
            },
            allTouchEnd(e) {
                //结束x轴坐标
                this.positionEX = e.changedTouches[0].clientX;
                //结束y轴坐标
                this.positionEY = e.changedTouches[0].clientY;
                const distanceY = this.positionEY - this.positionSY;
                const distanceX = this.positionSX - this.positionEX;
                //判断滑动的方向
                if (distanceY < -30 && Math.abs(distanceY) > Math.abs(distanceX)) {
                    this.isChange = true;
                }
                if (distanceY > 30 && Math.abs(distanceY) > Math.abs(distanceX)) {
                    this.isChange = false;
                }
            },
            //监听左右滑动坐标
            touchStart(e) {
                //开始x轴坐标
                this.positionSX = e.changedTouches[0].clientX;
                //开始y轴坐标
                this.positionSY = e.changedTouches[0].clientY;
            },
            touchEnd(e) {
                this.show = !this.show;
                //结束x轴坐标
                this.positionEX = e.changedTouches[0].clientX;
                //结束y轴坐标
                this.positionEY = e.changedTouches[0].clientY;
                const distanceY = this.positionEY - this.positionSY;
                const distanceX = this.positionSX - this.positionEX;
                //判断滑动 的方向
                if (distanceX > 30 && Math.abs(distanceY) < Math.abs(distanceX)) {
                    this.rightSliding()
                }
                if (distanceX < -30 && Math.abs(distanceY) < Math.abs(distanceX)) {
                    this.leftSliding()
                }
            },
            //向右滑动
            rightSliding(){
                const self = this;
                self.pickNext(self.currentYear, self.currentMonth);
                self.fadeOut = true;
                self.fadeIn = false;
                self.fadeInR = false;
                self.fadeOutR = false;
                setTimeout(function() {
                    self.fadeIn = true;
                    self.fadeOut = false;
                    self.fadeOutR = false;
                    self.fadeInR = false;
                }, 300);
            },
            //向左滑动
            leftSliding(){
                const self = this;
                self.pickPre(self.currentYear, self.currentMonth);
                self.fadeOutR = true;
                self.fadeInR = false;
                self.fadeOut = false;
                self.fadeIn = false;
                setTimeout(function() {
                    self.fadeInR = true;
                    self.fadeOutR = false;
                    self.fadeOut = false;
                    self.fadeIn = false;
                }, 300);
            },
            //初始化页面
            initData(cur) {
                let date;
                if (cur) {
                    date = new Date(cur);
                } else {
                    const now = new Date();
                    const t = this.formatDate(now.getFullYear(), now.getMonth(), 1);
                    const d = new Date(t);
                    d.setDate(35);
                    date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
                    // console.log(date)
                }

                this.currentDay = date.getDate();
                this.currentYear = date.getFullYear();
                this.currentMonth = date.getMonth() + 1;
                this.currentWeek = date.getDay();
                if(!cur || !this.otherDay){
                    this.otherDay= new Date().getDate();
                }
                const str = this.formatDate(
                    this.currentYear,
                    this.currentMonth,
                    this.currentDay
                );
                this.days.length = 0;
                //初始化本周
                for (let i = this.currentWeek; i >= 0; i--) {
                    const d = new Date(str);
                    d.setDate(d.getDate() - i);
                    const dayobject = {}; //用一个对象包装Date对象 以便为以后预定功能添加属性
                    dayobject.day = d;
                    dayobject.status = "";
                    this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
                }
                //其他周
                for (let i = 1; i <= 34 - this.currentWeek; i++) {
                    const d = new Date(str);
                    d.setDate(d.getDate() + i);
                    const dayobject = {};
                    dayobject.day = d;
                    dayobject.status = "";
                    this.days.push(dayobject);
                }
                //选中日期在其他月份是否超出最大日期判断
                const arr=[]
                for(let j=0, length=this.days.length; j<length; j++){
                    if(this.days[j].day.getMonth() + 1 === this.currentMonth){
                        arr.push(this.days[j].day.getDate())
                    }
                }
                const maxDate=Math.max.apply(null, arr);
                if(this.otherDay > maxDate){
                    this.otherDay=maxDate
                }

            },
            // 上个月信息
            pickPre(year, month) {
                const d = new Date(this.formatDate(year, month, 1));
                d.setDate(0);
                this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
            },
            // 下个月信息
            pickNext(year, month) {
                const d = new Date(this.formatDate(year, month, 1));
                d.setDate(35);
                this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
            },
            // 补零处理
            formatDate(year, month, day) {
                let y = year;
                let m = month;
                if (m < 10) m = "0" + m;
                let d = day;
                if (d < 10) d = "0" + d;
                return y + "-" + m + "-" + d;
            }
        },
        created() {
            //路由传商品id
            let a = this.$route.params.id;
            this.goodsId=a;
            this.getDate();  //给后端发送产品的id
        },
    };
</script>

<style lang="scss" scoped>
    .dataOrder{
        font-size: 0.12rem;
        display: flex;
    }
    .yz_header{
        width: 100%;
        height: 0.44rem;
        position: fixed;
        top: 0;
        z-index: 10;
        border-bottom: 1px solid #dfdfdf;
        background-color: white;
    }
    .yz_header p{
        font-size: 0.19rem;
        line-height: 0.44rem;
        position: absolute;
        left: 35%;
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
     .next {
        width: 100%;
        background: #ff5523;
        height: 60px;
        padding: 0 20px;
        position: absolute;
        z-index: 10;
        bottom: 0;
         text-align: left;
    }
    .next p {
        width: 285px;
        line-height: 60px;
        font-size: 20px;
        color: #fff;
        text-align: left;
    }
    .next p span {
        font-size: 14px;
        margin-left: 10px;
    }
    .next i {
        position: absolute;
        right: 58px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .next i {
         right: 20px!important;
     }
    b {
        font-weight: 300;
        font-size: 10px;
        /*display: block;*/
        height: 10px;
    }
     i.iconin, i.iconshu {
         vertical-align: middle;
         display: inline-block;
         margin-left: 5px;
         background-repeat: no-repeat;
         background-size: contain;
     }
     i.iconin {
         width: 14px;
         height: 14px;
         background-image: url(../../assets/images/xl_home_img/addData.png);
     }
     .next {
         box-sizing: border-box;
     }
    #calendar {
        width: 100%;
        height:auto;
        margin: 0 auto;
        transition: all 0.5s;
        overflow: hidden;
        background: #fafafa;
        margin-top: 0.45rem;
        .change {
            height: 250px !important;
        }
        .year-month {
            height:40px;
            width: 100%;
            display: flex;
            /*align-items: center;*/
            line-height: 0.33rem;
            justify-content: space-around;
            .year-month_left{
                height:100%;
                width:80%;
                padding-left: 15px;
                display: flex;
                align-items: center;
                .top-time {
                    color: #ff5523;
                    /*padding-bottom: 5px;*/
                    border-bottom: 2px solid #ff5523;
                    font-size:14px;
                    font-weight: 300;
                    /*margin-right: 15px;*/
                }
                ul{
                    display:flex;
                    flex-direction:column;
                    li{
                        color:#ff5523;
                        font-size:20px;
                        margin-left: 0.3rem;
                    }
                }
            }
            .year-month_right{
                height:100%;
                width:20%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding-right: 12px;
                .i-plus-empty{
                    fill: #f18d2f;
                }
            }
        }
        .weekdays li:first-child,.weekdays li:last-child{
            color: #ff5523;
        }
        .weekdays {
            margin: 0;
            height: 40px;
            display: flex;
            flex-wrap: wrap;
            color:#ccc;
            justify-content: space-around;
            background-color: white;
            font-size: 12px;
            border-bottom: 1px solid #eee;
            li{
                display: inline-block;
                width: 13.6%;
                text-align: center;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
        .days {
            /*height: 210px;*/
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            overflow: hidden;
            position: relative;
            background-color: white;
            li{
                list-style-type: none;
                display: inline-block;
                width: 50px;
                height: 50px;
                text-align: center;
                font-size: 17px;
                color:silver;
                position: relative;
                .active{
                    line-height: 14px;
                    text-align: center;
                    color: #ff5523;
                    width: 50px;
                    height: 50px;
                    margin: auto;
                    justify-content: center;
                    align-items: center;
                    span{
                        margin-top: 0.13rem;
                        display:inline-block;
                    }
                }
                .choose{
                    background-color: #ff5523;
                    color: white;
                }
                .other-month{
                    width: 40px;
                    height: 40px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:#ccc;
                    display: none;
                }
                .everyDay {
                    width: 50px;
                    height: 50px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .circle {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background-color: #f2553d;
                    position: absolute;
                    bottom: 6px;
                    left: 48%;
                }
                .o {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    border: 1px solid #f2553d;
                    position: absolute;
                    bottom: 1px;
                    left: 49%;
                }
                .otherday {
                    width: 38px;
                    height: 38px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    /*border:1px solid #b2b2b2;*/
                }
            }

        }
        .fadeOut {
            animation-name: fadeOut;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }
        .fadeOutR {
            animation-name: fadeOutR;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }
        .fadeIn {
            animation-name: fadeIn;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }
        .fadeInR {
            animation-name: fadeInR;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }
        .background {
            position: absolute;
            top: 100px;
            height: 211px;
            width: 100%;
            z-index: -1;
            overflow: hidden;
            transition: all 0.5s;
            .dbg {
                background-color: #e1e1e1;
                height: 42.2px;
            }
            .lbg {
                background-color: #d5d5d5;
                height: 42.2px;
            }
        }
    }

    @keyframes fadeOut {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
    @keyframes fadeIn {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOutR {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    @keyframes fadeInR {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>
