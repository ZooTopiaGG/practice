import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/font/style.css'
// import { Rate } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import qs from 'qs'


Vue.use(VueRouter)
Vue.use(MintUI)
// Vue.component(Rate.name,Rate)

import Rt from './assets/js/router.js'
import store from './store/index.js'
import './assets/js/device.js'
import './assets/css/common.css'
import './assets/css/animate.css'
import './assets/css/reset.css'


import { Toast , Indicator } from 'mint-ui'

//响应时间
axios.defaults.timeout = 5000;
//配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//配置接口地址
//测试网接口地址
axios.defaults.baseURL = 'http://test2.lawyer-says.cn/';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  Indicator.open()
  return config;
},function(err){
  //Do something with request error
  Indicator.close()
  Toast('系统繁忙，请稍后再试')
  return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  Indicator.close()
 // Toast('获取信息成功')
  return res;
},function(err){
  Indicator.close()
  Toast('信息加载失败')
  //Do something with response error
  return Promise.reject(error);
})



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
	qs,
    render: h => h(App)
}).$mount('#app')