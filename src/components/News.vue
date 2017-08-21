<template>
	<div class="news">
		 <div class="nav">
		    <mt-header :title="changeTitle">
		       <mt-button icon="back" slot="left" @click="back">返回</mt-button>
		    </mt-header>
		 </div>
		<div v-show="isShowParent">
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
		<div>
			<keep-alive>
				<router-view>
				</router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name:'news',
		data(){
			return{
				list:[1,2,3,4,5,6,7]
			}
		},
		computed:mapGetters([
			'isShowParent',
			'changeTitle'
		]),

		methods:{
			toNewsDetails(id){
				this.$router.push({name:'details',params:{'id':id},replace:true})
			},
			back(){
		        this.$router.go(-1)
		    }
		},
		/*home 组件可监听所有路由*/
		// watch:{
		// 	$route(to,from){
		// 		// if(to.path.indexOf('/home/news/details')>-1){
		// 		// 	this.$store.dispatch('hideParent')
		// 		// }else{
		// 		// 	this.$store.dispatch('showParent')
		// 		// }
		// 	}
		// },
		mounted(){
			//this.$store.dispatch('showParent')
		}
	}
</script>
<style scoped="scoped">
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
</style>