<template>
<div class="home">
	<div v-show="footShow">
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img @click.stop.prevent="toLawyer" src="../assets/images/50.png">
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img @click.stop.prevent="toCase" src="../assets/images/51.png">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="hot">
			<div class="modal_title">
				<img src="../assets/images/new_zjm_icon34@2x.png">
				<span>热门咨询</span>
			</div>
			<div class="hot_type">
				<ul class="flex flex-1 flex-wrap flex-pack-justify">
					<li>
						<img src="../assets/images/new_zjm_icon41@2x.png">
						<p>婚姻继承</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon40@2x.png">
						<p>合同纠纷</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon38@2x.png">
						<p>人身损害</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon36@2x.png">
						<p>交通事故</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon42@2x.png">
						<p>劳动保障</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon39@2x.png">
						<p>公司经营</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon37@2x.png">
						<p>消费维权</p>
					</li>
					<li>
						<img src="../assets/images/new_zjm_icon47@2x.png">
						<p>其他咨询</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="box-line"></div>
		<div class="lawyers">
			<div class="modal_title">
				<img src="../assets/images/new_zjm_icon33@2x.png">
				<span>推荐律师</span>
				<keep-alive>
					<router-link :to="{path:'/lawyer',replace:true}">
						<span class="more">更多</span>
					</router-link>
				</keep-alive>
			</div>
			<div class="lawyer_list flex flex-1 flex-pack-justify">
				<div>
					<img v-if="g_review_most_list.avatar" :src="g_review_most_list.avatar">
					<img v-else src="../assets/images/new_zjm_icon49@2x.png">
					<p>{{ g_review_most_list.lawyer_name }}</p>
				</div>
				<div>
					<img v-if="g_review_most_list.avatar" :src="g_review_most_list.avatar">
					<img v-else src="../assets/images/new_zjm_icon49@2x.png">
					<p>{{ g_review_most_list.lawyer_name }}</p>
				</div>
				<div>
					<img v-if="r_fastest_list.avatar" :src="r_fastest_list.avatar">
					<img v-else src="../assets/images/new_zjm_icon49@2x.png">
					<p>{{ r_fastest_list.lawyer_name }}</p>
				</div>
				<div>
					<img v-if="r_words_most_list.avatar" :src="r_words_most_list.avatar">
					<img v-else src="../assets/images/new_zjm_icon49@2x.png">
					<p>{{ r_words_most_list.lawyer_name }}</p>
				</div>
			</div>
		</div>
		<div class="box-line"></div>
		<div class="solutions">
			<div class="modal_title">
				<img src="../assets/images/new_zjm_icon32@2x.png">
				<span>优质解答</span>
			</div>
			<ul class="solutions_list">
				<li class="clear" v-for="(val,index) in solution">
					<div class="flex flex-1">
						<img v-if="val.Avatar" :src="val.Avatar">
						<img v-else src="../assets/images/new_zjm_icon49@2x.png">
						<div>
							<p class="name">{{ val.u_names }}律师</p>
							<p class="desc ellipsis ellipsis-2">{{ val.desc }}</p>
						</div>
					</div>
					<div class="rt type">
						{{ val.city }}
					</div>
				</li>
			</ul>
		</div>
		<div class="box-line"></div>
		<div class="news">
			<div class="modal_title">
				<img src="../assets/images/new_zjm_icon31@2x.png">
				<span>律闻天下</span>
				<keep-alive>
					<router-link to="/home/news">
						<span class="more">更多</span>
					</router-link>
				</keep-alive>
			</div>
			<div >
				<ul class="news_list">
					<li v-for="(val,index) in news" class="flex flex-1" @click="toNewsDetails(val.id)" :key='index'>
						<img v-if="val.icon" :src="val.icon">
						<img v-else src="../assets/images/New_zjm_icon19@2x.png">
						<div>
							<h2>{{ val.title }}</h2>
							<p class="ellipsis">{{ val.summary }}</p>
							<div class="clear">
								<span class="lt">{{ val.board_text }}</span>
								<span class="rt">{{ val.review_count }}条评论</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</div>
</template>
<script>
	import Vue from 'vue'
	import { mapGetters } from 'vuex'
	import News from './News.vue'
	import axios from 'axios'
	import qs from 'qs'
	import { Toast , Indicator } from 'mint-ui'

	Vue.filter('len5',(arr)=>{
		if(arr.length>5){
			arr.length = 5;
		}
		let len = arr
		console.log(len)
		return len
	})

	export default {
		name:'home',
		data(){
			return{
				list:[1,2,3,4,5,6],
				news:[],
				solution:[],
				g_review_most_list:{},
				link_list:{},
				r_fastest_list:{},
				r_words_most_list:{}
			}
		},
		components:{
			News
		},
		methods:{
			toLawyer(){
				this.$router.push({path:'/lawyer',replace:true})
				this.$store.dispatch('lawyer')
			},
			toCase(){
				this.$router.push({path:'/case',replace:true})
				this.$store.dispatch('case')
			},
			toNewsDetails(id){
				this.$router.push({name:'details',params:{'id':id},replace:true})
			},
			// toNews(){
			// 	this.$router.push({path:'/home/news',replace:true})
			// 	this.$store.dispatch('hide')
			// }
			getHot(para){
				return axios.post('api/lawyer/hot',para)
			},
			getNews(){
				return axios.get('api/writings/news_list/1')
			},
			getSolution(para){
				return axios.post('api/advice/get_list/public',para)
			}
		},
		computed:{
			...mapGetters([
				'title',
				'footShow',
				'isShowParent',
				'headShow'
			]),
			solutions(){
				let arr = []
				this.solution.forEach((val,index)=>{
					if(index<5){
						arr.push(val)
					}else{
						return
					}
					return arr
				})

			}
		},
		beforeCreate(){

		},
		created(){
			let _this = this
			let para1 = {}
			let para2 = {
				law_code:'0',
				page:1
			}
			para1 = qs.stringify(para1)
			para2 = qs.parse(para2)
			axios.all([_this.getHot(para1),_this.getNews(),_this.getSolution(para2)])
			  .then(axios.spread((acct,perms,thirs)=>{
			    //当这两个请求都完成的时候会触发这个函数，三个参数分别代表返回的结果
			    console.log(acct)
			    console.log(perms);
			    console.log(thirs);
			    if(acct.data.result){
			    	let acctRes = acct.data.result
			    	_this.g_review_most_list = acctRes.g_review_most_list[0]
			    	_this.link_list = acctRes.g_review_most_list[1]
			    	_this.r_fastest_list = acctRes.r_fastest_list[2]
			    	_this.r_words_most_list = acctRes.r_words_most_list[1]
			    }
			    if(perms.data.result){
			    	_this.news = perms.data.result
			    }
			    if(thirs.data.result){
			    	_this.solution = thirs.data.result
			    }
			})).catch(error=>{
			  	console.log(error)
			})
		}
		
	}
</script>
<style>
	.box-line{
		width: 7.5rem;
		height: 0.2rem;
		background: #f1f1f1;
	}
</style>
<style scoped="scoped">
	.modal_title {
		position: relative;
	}
	.more{
		position:absolute;
		right: 0.3rem;
		top: 0;
	}
	.banner{
		height: 2.34rem
	}
	.banner img{
		width: 7.5rem;
		height: 2.34rem
	}
	.modal_title{
		border-bottom: 1px solid #d7d8dc;
		height: 0.69rem;
		line-height: 0.69rem;
		text-align: center;
	}
	.modal_title img{
		width: 0.38rem;
		height: 0.38rem;
		position: relative;
		top: 0.08rem
	}
	.hot_type ul{
		padding: 0.3rem;
		border-bottom: 1px solid #d7d8dc;
		text-align: center;
		font-size: 0.24rem
	}
	.hot_type ul li img{
		width: 0.84rem;
		height: 0.84rem;
		margin-bottom:0.1rem;
	}
	.hot_type ul li{
		min-width: 25%;
		margin-bottom: 0.36rem;
	}
	.news_list li{
		padding: 0.3rem;
		font-size: 0.24rem;
		border-bottom: 1px solid #eee;
	}
	.news_list li img{
		width: 1.6rem;
		max-width: 1.6rem;
		height: 1.4rem;
		margin-right: 0.2rem;
	}
	.news_list li h2{
		font-size: 0.28rem;
		line-height: 1.2;
	}
	.news_list li p{
		margin:0.08rem 0;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.news_list li span{
		padding: 2px 5px;
		font-size: 0.2rem;
		color:#999;
	}
	.news_list li span:nth-child(1){
		border: 1px solid #1675e1;
		color:#1675e1;
		border-radius: 2px;
	}
	.news_list li span:nth-child(2){
		background: #f1f1f1;
		border-radius: 2px;
	}
	.lawyer_list{
		padding: 0.3rem 0.1rem
	}
	.lawyer_list div{
		text-align: center;
		font-size: 0.28rem;
		color: #333;
		font-weight: bold;
	}
	.lawyer_list div img{
		width: 1.75rem;
		height: 1.75rem;
		margin-bottom: 0.2rem;
	}
	.solutions_list li{
		padding: 0.3rem;
		border-bottom: 1px solid #eee
	}
	.solutions_list img{
		min-width: 0.44rem;
		height: 0.44rem;
		border-radius: 0.04rem;
		margin-right: 0.2rem
	}
	.name{
		font-size: 0.28rem;
		color: #333;
		font-weight: bold;
		line-height: 0.44rem;
		margin-bottom: 0.2rem
	}
	.desc{
		font-size: 0.28rem;
		color:#757575;
		margin-bottom: 0.2rem;
		line-height: 1.5
	}
	.type{
		padding: 0.05rem 0.1rem;
		font-size: 0.18rem;
		color: #757575;
		background: #eee;
		border-radius: 0.04rem;
	}
</style>