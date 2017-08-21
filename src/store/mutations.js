export default {
	showHead(state){
		state.headShow = true
	},
	hideHead(state){
		state.headShow = false
	},
	showFoot(state){
		state.footShow = true
	},
	hideFoot(state){
		state.footShow = false
	},
	home(state){
		state.title = '首页'
	},
	lawyer(state){
		state.title = '律师'
	},
	case(state){
		state.title = '案例'
	},
	mine(state){
		state.title = '我的'
	},
	changeTitle(state,para){
		state.changeTitle = para
	},
	showParent(state){
		state.ishowParent = true
	},
	hideParent(state){
		state.ishowParent = false
	}
}
