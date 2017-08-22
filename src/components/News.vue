<template>
	<div class="news">
		<Childhead></Childhead>
		<div v-show="isShowParent">
			<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
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
			</mt-loadmore>
		</div>
		<div>
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view></router-view>
			</keep-alive>
			<router-view v-else></router-view>
		</div>
	</div>
</template>
<script>

  	import Childhead from './Childhead.vue'
	import { mapGetters } from 'vuex'
	import axios from 'axios'
	import qs from 'qs'
	import { Toast , Indicator } from 'mint-ui'
	export default {
		name:'news',
		data(){
			return{
				list:[1,2,3,4,5,6,7],
				news:[],
				allLoaded:false,
				status:'',
				pages:'',
				page:1
			}
		},
		computed:mapGetters([
			'isShowParent',
			'changeTitle'
		]),
		components:{
		    Childhead
		},
		methods:{
			toNewsDetails(id){
				this.$router.push({name:'details',params:{'id':id},replace:true})
			},
			back(){
		        this.$router.go(-1)
		    },
		    /*获取新闻列表*/
		    getNews(page){
				var _this = this;
				axios.get('api/writings/news_list/'+page)
				.then(res=>{
					console.log(res);
					if(res.data.result){
						let r = res.data.result
						let count = res.data.result_total_count
						_this.pages = Math.ceil(count/10)
						r.forEach((val,index)=>{
							_this.news.push(val)
						})
						console.log(_this.news)
					}
					_this.page++;
				})
				.catch(error=>{
					console.log(error);
				})
			},
			loadBottom() {
			  // 加载更多数据
			  if(this.page<this.pages){
			  	this.getNews(this.page)
			  	this.allLoaded = false;
			  }else{
				  this.allLoaded = true;// 若数据已全部获取完毕
				  this.$refs.loadmore.onBottomLoaded();
			  }
			},
			handleBottomChange(status){
				this.bottomStatus = status;
				console.log(status);

			}
		},
		beforeCreate(){
			Indicator.open();
		},
		created(){
			this.getNews(this.page)
		},
		mounted(){
			console.log(Indicator)
		}
	}
</script>
<style scoped="scoped">
	.news_list li{
		padding: 0.3rem;
		font-size: 0.24rem
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
</style>