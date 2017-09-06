import Home from '../../components/Home.vue'
import Lawyer from '../../components/Lawyer.vue'
import Case from '../../components/Case.vue'
import Mine from '../../components/Mine.vue'
import News from '../../components/News.vue'
import Newsdetails from '../../components/Newsdetails.vue'
import Charge from '../../components/Charge.vue'
import Business from '../../components/Business.vue'
import Discuss from '../../components/Discuss.vue'
import Collection from '../../components/Collection.vue'
import Original from '../../components/Original.vue'
import Help from '../../components/Help.vue'
import Feedback from '../../components/Feedback.vue'
import About from '../../components/About.vue'

var Routes = [
	 {
		path:'/home',
		component:Home,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/news',
		component:News,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/details/:id',
		name: 'details',
		component:Newsdetails,
		meta:{
			keepAlive: false
		}
	},
	{
		path:'/lawyer',
		component:Lawyer,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/case',
		component:Case,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/mine',
		component:Mine,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/charge',
		component:Charge,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/business',
		component:Business,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/discuss',
		component:Discuss,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/help',
		component:Help,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/original',
		component:Original,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/collection',
		component:Collection,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/feedback',
		component:Feedback,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/about',
		component:About,
		meta:{
			keepAlive: true
		}
	},
	{
		path:'/',redirect:'/home'
	},
	{
		path:'*',redirect:'/home'
	}
]

export default Routes
