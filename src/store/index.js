import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import getters from './getters.js'

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
export default store
// const store = new Vuex.Store({
// 	state:{
// 		isShow:true,
// 		title:'首页'
// 	},
// 	mutations:{
// 		show(state){
// 			state.isShow = true
// 		},
// 		hide(state){
// 			state.isShow = false
// 		},
// 		home(state){
// 			state.title = '首页'
// 		},
// 		lawyer(state){
// 			state.title = '律师'
// 		},
// 		case(state){
// 			state.title = '案例'
// 		},
// 		mine(state){
// 			state.title = '我的'
// 		}
// 	},
// 	actions:{
// 		show:({commit})=>{
// 			commit('show')
// 		},
// 		hide:({commit})=>{
// 			commit('hide')
// 		},
// 		home:({commit})=>{
// 			commit('home')
// 		},
// 		lawyer:({commit})=>{
// 			commit('lawyer')
// 		},
// 		case:({commit})=>{
// 			commit('case')
// 		},
// 		mine:({commit})=>{
// 			commit('mine')
// 		}
// 	},
// 	getters:{
// 		showOrHide:(state)=> {
// 			return state.isShow
// 		},
// 		title:(state)=>{
// 			return state.title
// 		}
// 	}
// })
//export default store