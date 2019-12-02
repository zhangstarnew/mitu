import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/home"
import destination from "../views/destination"
import discover from "../views/discover"
import my from "../views/my"
import registers from "../views/registers"
import login from "../views/login"
import main from "../views/main"
import travelAll from "../components/travel/travelAll";
import seach from "../components/discover/seach";
import userInfo from "../components/discover/userInfo";
import articleInfo from "../components/discover/articleInfo";
import homeSelect from "../components/homeSelect/homeSelect";
import nextSelect from "../components/homeSelect/nextSelect";
import detail from "../views/tabs/detail";
import allEva from "../views/tabs/allEva";
import searchUser from "../components/discover/searchUser";

import lx_secondary_set from "../components/personal/secondaryPage/lx_secondary_set";
import lx_secondary_order from "../components/personal/secondaryPage/lx_secondary_order";
import lx_secondary_wallet from "../components/personal/secondaryPage/lx_secondary_wallet";
import lx_secondary_coupon_one from "../components/personal/secondaryPage/lx_secondary_coupon_one";
import lx_secondary_coupon_two from "../components/personal/secondaryPage/lx_secondary_coupon_two";
import lx_secondary_coupon_three from "../components/personal/secondaryPage/lx_secondary_coupon_three";
import lx_secondary_coupon_four from "../components/personal/secondaryPage/lx_secondary_coupon_four";
import lx_secondary_message from "../components/personal/secondaryPage/lx_secondary_message";
import lx_secondary_pmessage from "../components/personal/secondaryPage/lx_secondary_pmessage";
import lx_secondary_service_one from '../components/personal/wuyi/lx_secondary_service-one';
import lx_secondary_service_two from '../components/personal/wuyi/lx_secondary_service-two';
import lx_secondary_service_three from '../components/personal/wuyi/lx_secondary_service-three';
import lx_secondary_service_four from '../components/personal/wuyi/lx_secondary_service-four';
import lx_secondary_service_five from '../components/personal/wuyi/lx_secondary_service-five';

// xl-订单页面
import comment from "../components/personal/order/comment"
import orderdetail from "../components/personal/order/orderdetail"
import xl_optionalDate from "../components/xl-order/xl-optionalDate"
import xl_data_travel from "../components/xl-order/xl-data-travel"
// import lx_secondary_service_three from '../components/xl-order/lx_secondary_service-three';

// import ceshi from "../components/ceshi/ceshi";
Vue.use(VueRouter)
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
		// 映射路由
        {
            path: '/main',
            component: main,
            children: [
                {
                    path: 'home',
                    component: home
                },
                {
                    path:'destination',
                    component:destination,
                },
                {
                    path: 'discover',
                    component: discover
                },
                {
                    path: 'personal',
                    component:  my,
                    meta: {
                        keepAlive: true
                    }
                }
            ]
        },
      {
          path: '/',
          redirect: '/main/home'
      },

      {
        path: '/main/register',
        component:registers,
      },
        // {
        //     path: '/main/register',
        //     component: ()=> import ('../views/registers'),
        // },
      {
        path: '/main/login',
        component:login,
      },
        {
            path: '/main/home/travelAll',
            component:travelAll,
        },
        {
            path: '/seach',
            component: seach,
        },
        {
            path:'/main/userInfo/:id',
            component:userInfo
        },
        {
            path:'/main/userInfo/:id/:aid',
            component:articleInfo
        },
        {
            path: '/main/searchUser/:id',
            component: searchUser,
        },
        {
            path:'/homeSelect',
            component:homeSelect,
        },
        {
            path:'/main/nextSelect/:id',
            component:nextSelect,
        },

        {path:"/detail/:id",component:detail},
        {path:"/alleva/:id",component:allEva},
        // {
        //     path:'/ceshi/:id',
        //     component:ceshi
        // },

        //路由按需引入
        // {path:'/ceshi',
        //     component:()=>import('../components/ceshi/ceshi')
        // },

        // 我的二级页面
        {
            path:'/main/set',
            component: lx_secondary_set
        },
        {
            path:'/main/message',
            component: lx_secondary_message,meta:{needLogin: true}
        },
        {
            path:'/main/pMessage',
            component: lx_secondary_pmessage,meta:{needLogin: true}
        },
        {
            path:'/main/order',
            component: lx_secondary_order,meta:{needLogin: true}
        },
        {
            path:'/main/myWallet',
            component: lx_secondary_wallet,meta:{needLogin: true}
        },
        {
            path:'/main/coupon_dis/:id',
            component: lx_secondary_coupon_one,meta:{needLogin: true}
        },
        {
            path:'/main/coupon_intel',
            component: lx_secondary_coupon_two,meta:{needLogin: true}
        },
        {
            path:'/main/coupon_bon',
            component: lx_secondary_coupon_three,meta:{needLogin: true}
        },
        {
            path:'/main/coupon_cen',
            component: lx_secondary_coupon_four,meta:{needLogin: true}
        },

        // 常用服务
        {
            path:'/main/service_adviser',
            component: lx_secondary_service_one,
        },
        {
            path:'/main/service_discounts',
            component: lx_secondary_service_two,
        },
        {
            path:'/main/service_information',
            component: lx_secondary_service_three,
        },
        {
            path:'/main/service_collect',
            component: lx_secondary_service_four,
        },
        {
            path:'/main/service_history',
            component: lx_secondary_service_five,
        },

        // 会员权益
        {
            path:'/main/memberone',
            component: ()=> import ('../components/personal/member/memberone'),
        },
        {
            path:'/main/membertwo',
            component: ()=> import ('../components/personal/member/membertwo'),
        },
        {
            path:'/main/memberthree',
            component: ()=> import ('../components/personal/member/memberthree'),
        },
        {
            path:'/main/memberfour',
            component: ()=> import ('../components/personal/member/memberfour'),
        },
        // 三级页面
        {
            path:'/main/balance',
            component:() => import('../components/personal/Level3Page/lx_Level3Page_myWallet')
        },
        //订单详情
        {
            path:'/main/personal/order/orderdetail/:id',
            component:orderdetail,meta:{needLogin: true}
        },
    //全部订单
        {
            path:'/main/personal/order/:id',
            component: lx_secondary_order,meta:{needLogin: true}
        },
    //提交订单
        {
            path:'/main/xl_detail/optional/:id',
            component:xl_optionalDate,
        },
    //评价模块
        {
            //产品id和订单id
            path:'/main/xl_detail/comment/:vid/:orderid',
            component:comment,
        },
    //选择日期
        {
            path:'/main/xl_detail/xl_data_travel/:id',
            component:xl_data_travel,meta:{needLogin: true}
        },
        //预定成功
        {
            path:'/main/reserve',
            component:() => import('../components/personal/order/reserve')
        },
        //支付成功
        {
            path:'/main/paysuccessful',
            component:() => import('../components/personal/order/pay_successful')
        }

    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
    })

// 前置守卫,判断哪个需要登录
router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        next()
       // window.console.log("请先登录")
//当页面需要登录的时候判断浏览器是否有sessionStorage
        if (window.sessionStorage.data) {
// 注意next()必须加
            next()
        } else {
// alert('session为空，请先登录')
//如果没有，让页面进入登录页
            next('/main/login')
        }
    } else {
        next()
    }
})
export default router
