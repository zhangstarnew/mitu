import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
import axios from "axios"
import qs from 'qs'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem,DropdownMenu, DropdownItem,Popup,Tab, Tabs,Loading,Skeleton} from 'vant'
import "vant/lib/index.css"
import 'swiper/css/swiper.css'
import 'swiper/js/swiper.min'
// import gg from'../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem).use(Popup).use(Tab).use(Tabs).use(Loading).use(Skeleton)
Vue.config.productionTip = false

let bus = new Vue()
Vue.prototype.$bus = bus



new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
