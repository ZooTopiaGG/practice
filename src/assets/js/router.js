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
		children:[
			{
				path:'news',
				component:News,
				children:[
					{
						path:'details/:id',
						name: 'details',
						component:Newsdetails,
						meta:{
							keepAlive: true
						}
					}
				]
			}
		]
	},
	{
		path:'/lawyer',component:Lawyer
	},
	{
		path:'/case',component:Case
	},
	{
		path:'/mine',
		component:Mine,
		children:[
			{
				path:'charge',
				component:Charge
			},
			{
				path:'business',
				component:Business
			},
			{
				path:'discuss',
				component:Discuss
			},
			{
				path:'help',
				component:Help
			},
			{
				path:'original',
				component:Original
			},
			{
				path:'collection',
				component:Collection
			},
			{
				path:'feedback',
				component:Feedback
			},
			{
				path:'about',
				component:About
			},
		]
	},
	{
		path:'/home',redirect:'/home'
	},
	{
		path:'*',redirect:'/home'
	}
]

export default Routes
