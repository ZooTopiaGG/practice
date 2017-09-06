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
import vueg from 'vueg'    
import 'vueg/css/transition-min.css'


VueRouter.prototype.back = function(){
  this.isBack = true;
  window.history.go(-1)
}

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

//路由
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

const options={  
    duration: '0.3',              //转场动画时长，默认为0.3，单位秒   
    firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false  
    firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6  
    forwardAnim: 'fadeInRight',   //前进动画，默认为fadeInRight  
    backAnim: 'fadeInLeft',       //后退动画，默认为fedeInLeft   
    sameDepthDisable: false,      //url深度相同时禁用动画，默认为false   
    tabs: [{
            name:'home'
        },{
            name:'lawyer'
        },{
          name:'case'
        },{
          name:'mine'
        }],                       //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画  
    tabsDisable: false,           //值为true时，tabs间的转场没有动画，默认为false  
    shadow:true,                  //值为false，转场时没有阴影的层次效果
    disable: false,               //禁用转场动画，默认为false，嵌套路由默认为true  
}  

Vue.use(vueg, router, options) 



new Vue({
	store,
	router,
	qs,
    render: h => h(App)
}).$mount('#app')