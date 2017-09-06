<template>
	
	<div class="case">
		<div class="scroll-wrap">
			<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<li v-for="(val,index) in caselist" :key="index">
						<div class="flex flex-1 flex-pack-justify">
							<div>
								接单律师：<span>{{ val.u_names }}</span>
							</div>
							<div>{{ val.city }}</div>
						</div>
						<div class="content ellipsis ellipsis-4">
							 {{ val.desc }}
						</div>
					</li>
				</ul>
			</mt-loadmore>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import qs from 'qs'
	import { Toast , Indicator } from 'mint-ui'
	export default {
		name:'case',
		data(){
			return{
				allLoaded:false,
				status:'',
				caselist:[],
				pages:'',
				page:1
			}
		},
		methods:{
			getCase(page){
				var _this = this;
				var para = {
					page:page,
					law_code:'0'
				}
				para = qs.parse(para)
				axios.post('api/advice/get_list/public',para)
				.then(res=>{
					console.log(res);
					if(res.data.result){
						let r = res.data.result;
						_this.pages = Math.ceil( res.data.result_total_count/10 )
						r.forEach((val,index)=>{
							_this.caselist.push(val)
						})
						console.log(_this.caselist);
					}
					_this.page++
				})
				.catch(error=>{
					console.log(error);
				})
			},
			loadBottom() {
			  // 加载更多数据
			  if(this.page<this.pages){
			  	this.getCase(this.page)
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
			Indicator.open()
		},
		created(){
			this.getCase(this.page)
		}
	}
</script>
<style scoped="scoped">
	.case{
		background: #fff;
	}
	li{
		padding: 0.4rem 0.3rem 0.35rem;
		color:#999;
		font-size: 0.24rem;
		border-bottom: 1px solid #eee;
	}
	.content{
		color: #333;
		font-size: 0.32rem;
		line-height: 1.6;
		margin-top: 0.3rem
	}
</style>