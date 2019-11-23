<template>
    <div>
        <van-tabs class="travelContent-box" sticky animated swipeable>
            <van-tab v-for="(item,index) in travelContent" :title="item.title" :key="index">
                <travel-content-show :data="item"></travel-content-show>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import travelContentShow from "./travelContentShow";
    export default {
        name: "travelContent",
        components:{
            travelContentShow
        },
        data(){
            return {
                travelContent:[
                    {
                        id:"1",
                        title:"当季优选",
                        contentA:[
                            {

                                img:"./images/travelContent/dA-img1.jpg",
                                title:"11月区哪儿玩?"
                            },
                            {
                                img:"./images/travelContent/dA-img2.jpg",
                                title:'跟着二十四节气"趣"旅行'
                            },
                            {
                                img:"./images/travelContent/dA-img3.gif",
                                title:"2019下半年国内最佳旅行时间表，值得收藏！"
                            },
                            {
                                img:"./images/travelContent/dA-img4.jpg",
                                title:"最贵值3亿，学会画唐卡，你将获得怎样的超然脱俗？"
                            },
                        ],
                        contentB:[
                            {
                                img:"./images/travelContent/dB-img1.jpg",
                                title:"冬·藏|去成都吃啥?这份3天2夜最强攻略告诉你！",
                                presentation:"巴适得很略"
                            },
                            {
                                img:"./images/travelContent/dB-img2.jpg",
                                title:"One night in 北京|穿胡同,吃烤鸭,吃京剧,睡四合院儿",
                                presentation:"北京人的魂，才是北京的正根儿"
                            },
                            {
                                img:"./images/travelContent/dB-img3.jpg",
                                title:"吐血整理|大兴机场给游客多少影响?全新航线+购票福利,一网打尽",
                                presentation:"冬春新航季来了"
                            },
                            {
                                img:"./images/travelContent/dB-img4.jpg",
                                title:"【杭州乌镇】伴水而生,枕水而眠——古镇,水乡，浪漫的霓虹灯让人忘却喧嚣",
                                presentation:""
                            },
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/dC-img1.jpeg",
                                title:"四川成都/九寨沟/黄龙/茂县/叠溪海子/松潘/宽窄巷子/都江堰水利工程/人民公园",
                                price:"¥ 2680"
                            },
                            {
                                img:"./images/travelContent/dC-img2.jpg",
                                title:"【购实惠】福建 厦门/鼓浪屿/云水谣土楼/沙坡尾双飞5日游【云上厦门/五缘湾】",
                                price:"¥ 2830"
                            },
                            {
                                img:"./images/travelContent/dC-img3.jpg",
                                title:"【购实惠】江西经典庐山婺源景德镇三清山鄱阳湖双卧六日游【0购物0自费】",
                                price:"¥ 2799"
                            },
                            {
                                img:"./images/travelContent/dC-img4.jpg",
                                title:"【美丽中国】广西桂林/阳朔全景大漓江纯玩双卧6日游【纯玩无购物/明星景点/全程指定好评酒店住宿/可升级往返飞机】",
                                price:"¥ 3299"
                            },
                            {
                                img:"./images/travelContent/dC-img5.jpg",
                                title:"【美丽中国】南京/无锡/苏州/杭州/上海/绍兴高铁5日游【一价全包/无自费景点/无压力/北京成团】",
                                price:"¥ 2736"
                            },
                            {
                                img:"./images/travelContent/dC-img6.jpg",
                                title:"【购实惠】陕西西安兵马俑/延安/华山/法门寺/壶口瀑布双高7日游【深度全景/市区挂三/双高铁往返】",
                                price:"¥ 3466"
                            },
                            {
                                img:"./images/travelContent/dC-img7.jpg",
                                title:"【购实惠】西安华山/兵马俑/华清宫/城墙/回民街 双高5日游【纯玩/市区挂三/半日自由行】",
                                price:"¥ 2688"
                            },
                            {
                                img:"./images/travelContent/dC-img8.jpg",
                                title:"【遨游摄影】冬季喀纳斯•禾木冰雪摄影创作7日游【武林老师带队/乌鲁木齐/喀纳斯/禾木/布尔津】",
                                price:"¥ 8800"
                            },
                            {
                                img:"./images/travelContent/dC-img9.jpg",
                                title:"【美丽中国】陕西西安 兵马俑/华清宫半自助双高铁4日游【纯玩0购物/挂牌四星/无线耳麦】",
                                price:"¥ 2588"
                            },
                            {
                                img:"./images/travelContent/dC-img10.jpg",
                                title:"【购实惠】陕北延安/壶口瀑布/兵马俑/黄帝陵/双卧6日游【红色延安/黄河胜景/无线耳麦】",
                                price:"¥ 1920"
                            },



                        ]
                    },
                    {
                        id:"2",
                        title:"亲子玩乐",
                        contentA:[
                            {
                                img:"./images/travelContent/qA-img1.jpg",
                                title:"一价全包"
                            }
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/qC-img1.jpg",
                                title:"【美丽中国】云南昆明/西双版纳升级版6日游【三飞/昆虫派对/度假首选-亲子/雨林探秘/法式帆船/热带雨林奇遇记/热带雨林花园度假酒店】",
                                price:"¥ 3750"
                            },
                            {
                                img:"./images/travelContent/qC-img2.jpg",
                                title:"三亚ClubMed4晚5天百变自由行【Amazing Family亲子家庭活动/豪华房/海滩亲子乐园】",
                                price:"¥ 7299"
                            },
                            {
                                img:"./images/travelContent/qC-img3.jpg",
                                title:"桂林ClubMed4晚5天百变自由行【Amazing Family亲子家庭活动/一价全包/自然与艺术的乐园】",
                                price:"¥ 4799"
                            },
                            {
                                img:"./images/travelContent/qC-img4.jpg",
                                title:"广州长隆2晚3天百变自由行【熊猫驾到亲子必选/广州长隆熊猫酒店/帅帅房】",
                                price:"¥ 4110"
                            },
                            {
                                img:"./images/travelContent/qC-img5.jpg",
                                title:"海南三亚4晚5天百变自由行【“岛主之王”套餐/亚龙湾红树林/园景房】",
                                price:"¥ 4380"
                            },
                            {
                                img:"./images/travelContent/qC-img5.jpg",
                                title:"【购实惠】华东五市+迪士尼双高6日游【畅玩迪士尼/祈福牛首/三水乡（乌镇/西塘/木渎）/狮子林/漫步西湖】【“岛主之王”套餐/亚龙湾红树林/园景房】",
                                price:"¥ 3199"
                            }
                        ]
                    },
                    {
                        id:"3",
                        title:"海滩海风",
                        contentA:[
                            {
                                img:"./images/travelContent/stA-img1.jpg",
                                title:"椰林树影，水清沙幼，三亚攻略→"
                            }
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/stC-img1.jpg",
                                title:"三亚ClubMed4晚5天百变自由行【Amazing Family亲子家庭活动/豪华房/海滩亲子乐园】",
                                price:"¥ 7299"
                            },
                            {
                                img:"./images/travelContent/stC-img2.jpg",
                                title:"海南三亚4晚5天百变自由行【“岛主之王”套餐/亚龙湾红树林/园景房】",
                                price:"¥ 4380"
                            },
                            {
                                img:"./images/travelContent/stC-img3.jpg",
                                title:"海南三亚4晚5天百变自由行【食尚银泰/大东海银泰/豪华海景房】",
                                price:"¥ 3820"
                            },
                            {
                                img:"./images/travelContent/stC-img4.jpg",
                                title:"海南三亚4晚5天百变自由行【边吃边玩/三亚湾胜意海景大酒店/豪华胜景房】",
                                price:"¥ 2899"
                            },
                            {
                                img:"./images/travelContent/stC-img5.jpg",
                                title:"【购实惠】南海之梦探寻西沙群岛+鸭公岛+银屿岛+全富岛4日游【可选择升级舱位/一半海一半鱼的世界】",
                                price:"¥ 5480"
                            },
                            {
                                img:"./images/travelContent/stC-img6.jpg",
                                title:"【购实惠精选】三亚一地/蜈支洲岛网红别墅1晚5日游【景区免排队通道/24H三亚机场专车接送0等待/赠亚特兰蒂斯水族馆】",
                                price:"¥ 3520"
                            },
                            {
                                img:"./images/travelContent/stC-img7.jpg",
                                title:"【美食美宿】【美丽中国】三亚一地奢玩双飞5日游【2晚君澜三亚湾迎宾馆180度海景房+2晚国际品牌五星标准酒店/特含1顿酒店自助晚餐】",
                                price:"¥ 6180"
                            },
                            {
                                img:"./images/travelContent/stC-img8.jpg",
                                title:"【购实惠】海南三亚双飞5日游【海享玩/西岛/南山/天涯海角/兴隆热带植物园/亚龙湾爱立方滨海乐园】",
                                price:"¥ 3380"
                            },
                            {
                                img:"./images/travelContent/stC-img9.jpg",
                                title:"【购实惠】长乐公主号游大美西沙群岛-全富岛+银屿岛+鸭公岛4日游【可选择升级舱位/探寻神秘西沙】",
                                price:"¥ 5680"
                            },
                            {
                                img:"./images/travelContent/stC-img10.jpg",
                                title:"【购实惠】海南三亚一地5日游【2晚三亚湾中心皇冠假日+2晚香水湾富力万豪海景房/搭配品鉴专属BBQ/雨林簸箕餐】",
                                price:"¥ 3020"
                            }
                        ]
                    },
                    {
                        id:"4",
                        title:"古镇古都",
                        contentA:[
                            {
                                img:"./images/travelContent/scA-img1.jpg",
                                title:"最美二十四节气"
                            },
                            {
                                img:"./images/travelContent/scA-img2.jpg",
                                title:"山城重庆，爬不完的山坎，吃不完的火锅"
                            }
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/scC-img1.jpg",
                                title:"【购实惠】山西五台山平遥乔家双高3日游【双高/快捷酒店/天天发团】",
                                price:"¥ 1178"
                            },
                            {
                                img:"./images/travelContent/scC-img2.jpg",
                                title:"【购实惠】山西晋中双高4日【五台山/云冈石窟/平遥古城/悬空寺】",
                                price:"¥ 1508"
                            },
                            {
                                img:"./images/travelContent/scC-img3.jpg",
                                title:"【购实惠】山西盛典/五台山/云冈石窟/乔家大院/平遥古城双高5日【无购物/体验佛韵虔诚祈福/含平遥古城电瓶车】",
                                price:"¥ 2299"
                            },
                            {
                                img:"./images/travelContent/scC-img4.jpg",
                                title:"【购实惠】山西盛典/印象双谷/雨岔大峡谷+波浪谷/壶口瀑布双高6日【无购物/晋陕两省/行摄之旅/1晚窑洞大院】",
                                price:"¥ 2699"
                            },
                            {
                                img:"./images/travelContent/scC-img5.jpg",
                                title:"【购实惠】山西高铁往返2日【晋祠/平遥古城/乔家大院】",
                                price:"¥ 948"
                            },
                            {
                                img:"./images/travelContent/scC-img6.jpg",
                                title:"【企业尊享】晋善晋美山西平遥3日游【奖励旅游/企业团建/随心定制】",
                                price:"¥ 1600"
                            }
                        ]
                    },
                    {
                        id:"5",
                        title:"西域大漠",
                        contentA:[
                            {
                                img:"./images/travelContent/xA-img1.jpg",
                                title:"河西走廊”历史文化风光摄影之旅"
                            },
                            {
                                img:"./images/travelContent/xA-img2.jpg",
                                title:"2019年十二月｜精华线路·新疆冬季喀纳斯·禾木冰雪摄影教学创作团"
                            }
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/xC-img1.jpg",
                                title:"【购实惠】甘肃敦煌/嘉峪关/张掖双卧5日超值之旅【0自费/0购物】",
                                price:"¥ 2950"
                            },
                            {
                                img:"./images/travelContent/xC-img2.jpg",
                                title:"【遨游摄影】“河西走廊”历史文化风光摄影之旅6日游【拍摄题材丰富/资深摄影师带队/现场指导分享/专业极致行程】",
                                price:"¥ 4280"
                            },
                            {
                                img:"./images/travelContent/xC-img3.png",
                                title:"【购实惠】青海赞至尊青海纯玩双卧6/卧飞5/双飞5日【0自费0购物/网评四钻洲际温泉酒店+五星索菲特大酒店+茶卡木屋别墅/享恒温泳池水疗】",
                                price:"¥ 4830"
                            }

                        ]
                    },
                    {
                        id:"6",
                        title:"天山共色",
                        contentA:[
                            {
                                img:"./images/travelContent/tsA-img1.jpg",
                                title:"往后余生还是你丨在云南日光倾城的冬日，我们终再相见"
                            },
                            {
                                img:"./images/travelContent/tsA-img2.jpg",
                                title:"美哭！最美的小火车，不输世界工程奇迹！"
                            }
                        ],
                        contentC:[
                            {
                                img:"./images/travelContent/tsC-img1.jpg",
                                title:"【购实惠】第三极-西藏拉萨+林芝+布达拉宫+大昭寺+南伊沟+雅鲁藏布大峡谷+巴松措+鲁朗林海+雅尼湿地双卧11日/【0自费0购物】",
                                price:"¥ 4299"
                            },
                            {
                                img:"./images/travelContent/tsC-img2.jpg",
                                title:"【购实惠】第三极-西藏拉萨+林芝+布达拉宫+大昭寺+巴松措+雅鲁藏布江大峡谷+羊卓雍措+措木及日双卧11日【无自费/沧海记下午茶/四钻酒店】",
                                price:"¥ 3880"
                            },
                            {
                                img:"./images/travelContent/tsC-img3.jpg",
                                title:"【遨游摄影】波密桃花私享摄影之旅7日游【拍摄题材丰富/资深摄影师带队/现场指导分享/专业极致行程】",
                                price:"¥ 4780"
                            },
                            {
                                img:"./images/travelContent/tsC-img4.jpg",
                                title:"【遨游摄影】林芝桃花、山南藏地解码全景线路9日游【拍摄题材丰富/资深摄影师带队/现场指导分享/专业成熟线路】",
                                price:"¥ 6680"
                            }
                        ]
                    }

                ]
            }
        }
    }
</script>

<style scoped>
    .travelContent-box{
        margin-top: 0.1rem;
    }

</style>