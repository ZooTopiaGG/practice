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
					<img src="../assets/images/new_zjm_icon49@2x.png">
					<p>尤大大</p>
				</div>
				<div>
					<img src="../assets/images/new_zjm_icon49@2x.png">
					<p>尤大大</p>
				</div>
				<div>
					<img src="../assets/images/new_zjm_icon49@2x.png">
					<p>尤大大</p>
				</div>
				<div>
					<img src="../assets/images/new_zjm_icon49@2x.png">
					<p>尤大大</p>
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
				<li class="clear" v-for="(val,index) in [1,2,3,4]">
					<div class="flex flex-1">
						<img src="../assets/images/new_zjm_icon49@2x.png">
						<div>
							<p class="name">陈浩文律师</p>
							<p class="desc ellipsis ellipsis-2">Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。
							</p>
						</div>
					</div>
					<div class="rt type">
						消费维权
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
					<li v-for="(val,index) in list" class="flex flex-1" @click="toNewsDetails(index)" :key='index'>
						<img src="../assets/images/New_zjm_icon19@2x.png">
						<div>
							<h2>高孔坠物导致人死，坠物的主人应负相应的法律责任吗？</h2>
							<p>高孔坠物导致人死，坠物的主</p>
							<div class="clear">
								<span class="lt">热点咨询</span>
								<span class="rt">141条评论</span>
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
	import { mapGetters } from 'vuex'
	import News from './News.vue'
	export default {
		name:'home',
		data(){
			return{
				list:[1,2,3,4,5,6]
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
			}
			// toNews(){
			// 	this.$router.push({path:'/home/news',replace:true})
			// 	this.$store.dispatch('hide')
			// }
		},
		computed:{
			...mapGetters([
				'title',
				'footShow',
				'isShowParent',
				'headShow'
			])
		},
		/*home 组件可监听所有路由*/
		watch:{
			$route(to,from){
				console.log(to.path)
				if(to.path == '/home/news'){
					this.$store.dispatch('hideFoot')
					this.$store.dispatch('showParent')
					this.$store.dispatch('changeTitle','律闻天下')
				}else if(to.path.indexOf('/home/news/details') >-1){
					this.$store.dispatch('hideFoot')
					this.$store.dispatch('hideParent')
					this.$store.dispatch('changeTitle','新闻详情')
				}else if(to.path == '/lawyer'){
					this.$store.dispatch('showHead')
					this.$store.dispatch('lawyer')
				}else if(to.path == '/case'){
					this.$store.dispatch('showHead')
					this.$store.dispatch('case')
				}else if(to.path == '/mine'){
					this.$store.dispatch('mine')
					this.$store.dispatch('hideHead')
				}
				else{
					this.$store.dispatch('showHead')
					this.$store.dispatch('showFoot')
         			this.$store.dispatch('showParent')
				}
			}
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
		font-size: 0.24rem
	}
	.news_list li img{
		min-width: 1.6rem;
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