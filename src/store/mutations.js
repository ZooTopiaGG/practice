export default {
	//显示，隐藏头部导航
	showHead(state){
		state.headShow = true
		window.localStorage.setItem('headShow',state.headShow)
	},
	hideHead(state){
		state.headShow = false
		window.localStorage.setItem('headShow',state.headShow)
	},
	//显示，隐藏底部导航
	showFoot(state){
		state.footShow = true
		window.localStorage.setItem('footShow',state.footShow)
	},
	hideFoot(state){
		state.footShow = false
		window.localStorage.setItem('footShow',state.footShow)
	},
	//切换一级导航标题导航
	home(state){
		state.title = '首页'
		window.localStorage.setItem('title',state.title)
	},
	lawyer(state){
		state.title = '律师'
		window.localStorage.setItem('title',state.title)
	},
	case(state){
		state.title = '案例'
		window.localStorage.setItem('title',state.title)
	},
	mine(state){
		state.title = '我的'
		window.localStorage.setItem('title',state.title)
	},
	//切换二级以下导航标题导航
	changeTitle(state,para){
		state.changeTitle = para
		window.localStorage.setItem('changeTitle',state.changeTitle)
	},
	//显示，隐藏内容
	showParent(state){
		state.ishowParent = true
		window.localStorage.setItem('isShowParent',state.ishowParent)

	},
	hideParent(state){
		state.ishowParent = false
		window.localStorage.setItem('isShowParent',state.ishowParent)
	},
	//显示，隐藏头部导航遮罩层
	hideCover(state){
		state.coverShow = false
		window.localStorage.setItem('coverShow',state.coverShow)
	},
	showCover(state){
		state.coverShow = true
		window.localStorage.setItem('coverShow',state.coverShow)
	}
}
