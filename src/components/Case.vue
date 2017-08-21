<template>
	<div class="case">
		<div>
			<ul>
				<li v-for="(val,index) in list" :key="index">
					<div class="flex flex-1 flex-pack-justify">
						<div>
							接单律师：<span>邓鹏</span> | <span>林大大</span>
						</div>
						<div>成都市</div>
					</div>
					<div class="content ellipsis ellipsis-4">
						 这是她与香儿早就商量好的暗号，听她连敲三声，就从墙那边把梯子给递过来。果然很快一副竹梯从墙后露了出来，她连忙上前接过，小心地按好，然后爬了上去，到了墙头，往内一看，果见香儿焦急地在看着她。轻轻做了个禁声的动作，她又把梯子翻到墙内，从墙上小心地爬下。
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:'case',
		data(){
			return{
				list:[1,2,3,4,5,6]
			}
		}
	}
</script>
<style scoped="scoped">
	.case{
		
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