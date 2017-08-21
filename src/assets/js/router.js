import Home from '../../components/Home.vue'
import Lawyer from '../../components/Lawyer.vue'
import Case from '../../components/Case.vue'
import Mine from '../../components/Mine.vue'
import News from '../../components/News.vue'
import Newsdetails from '../../components/Newsdetails.vue'

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
						component:Newsdetails
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
		path:'/mine',component:Mine
	},
	{
		path:'/home',redirect:'/home'
	},
	{
		path:'*',redirect:'/home'
	}
]

export default Routes
