export default {
	showHead:({commit})=>{
		commit('showHead')
	},
	hideHead:({commit})=>{
		commit('hideHead')
	},
	showFoot:({commit})=>{
		commit('showFoot')
	},
	hideFoot:({commit})=>{
		commit('hideFoot')
	},
	home:({commit})=>{
		commit('home')
	},
	lawyer:({commit})=>{
		commit('lawyer')
	},
	case:({commit})=>{
		commit('case')
	},
	mine:({commit})=>{
		commit('mine')
	},
	changeTitle:({commit},para)=>{
		commit('changeTitle',para)
	},
	showParent:({commit})=>{
		commit('showParent')
	},
	hideParent:({commit})=>{
		commit('hideParent')
	}
}