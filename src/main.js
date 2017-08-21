import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/font/style.css'

Vue.use(VueRouter)
Vue.use(MintUI)

import Rt from './assets/js/router.js'
import store from './store/index.js'
import './assets/js/device.js'
import './assets/css/common.css'
import './assets/css/animate.css'
import './assets/css/reset.css'

const routes = Rt

const router = new VueRouter({
	mode:'history',
	scrollBehavior (to, from, savedPosition) {
	    // return 期望滚动到哪个的位置
	    if(savedPosition){
	    	return savedPosition
	    }else{
	    	return { x:0,y:0 }
	    }
	},
	routes
})



new Vue({
	store,
	router,
    render: h => h(App)
}).$mount('#app')