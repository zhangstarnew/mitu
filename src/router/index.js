import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/home"
import destination from "../views/destination"
import discover from "../views/discover"
import my from "../views/my"
import register from "../views/register"
import login from "../views/login"
import main from "../views/main"
import travelAll from "../components/travel/travelAll";
import seach from "../components/discover/seach";
import userInfo from "../components/discover/userInfo";
import articleInfo from "../components/discover/articleInfo";
import searchUser from "../components/discover/searchUser";
import homeSelect from "../components/homeSelect/homeSelect";
import nextSelect from "../components/homeSelect/nextSelect";
import detail from "../views/tabs/detail";
import allEva from "../views/tabs/allEva";
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
                    path: 'my',
                    component:  my
                }
            ]
        },
      {
          path: '/',
          redirect: '/main/home'
      },

      {
        path: '/main/register',
        component:register,
      },
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
        {path:'/ceshi/:id',
            component:()=>import('../components/ceshi/ceshi')
        }

    ],
    })
// 前置守卫,判断哪个需要登录
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
	next()
	window.console.log("请先登录")
    //当页面需要登录的时候判断浏览器是否有sessionStorage
    if(window.sessionStorage.data){
		// 注意next()必须加
      next()
    }else{
    // alert('session为空，请先登录')
    //如果没有，让页面进入登录页
      next('/login')
    }
  }
  else{
    next()
  }
})
export default router
