import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count:9
}

//处理数据状态变化
const mutations = {
	incrememts: (state) =>{
		return state.count++
	},
	decrements: (state) =>{
		return state.count--
	}
}

//行为 比如 异步请求 判断 流程控制等
const actions = {
	incrememt:({
		commit
	})=>{
		commit('incrememts')
	},
	decrement:({
		commit
	})=>{
		commit('decrements')
	}
}

const getters = {
	count:(state)=>{
		return state.count
	}
//	count(state){
//		return state.count
//	}
}

export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters
})
