<template>
	<div class="lawyer">
		<div>
			<ul>
				<li v-for="(val,index) in list" :key="index">
					<div class="flex flex-1 lawyerinfo">
						<img src="../assets/images/new_zjm_icon49@2x.png">
						<div class="info">
							<p><span>郭云龙</span> | <span>重庆市</span></p>
							<p><span>30</span>次解答，<span class="num">5.0</span>分</p>
						</div>
						<div class="info_btn">
							<p class="num">¥30/次</p>
							<p>
								<span>咨询Ta</span>
							</p>
						</div>
					</div>
					<div class="content">
						 <p>执业于四川九益律师事务所，已从业30年</p>
						 <p>擅长征收拆迁、合同争议、房屋买卖等专业领域</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'lawyer',
		data(){
			return {
				list:[1,2,3,4,5,6,7,8]
			}
		}
	}
</script>
<style scoped="scoped">
	li{
		padding: 0.3rem;
		border-bottom: 1px solid #eee;
		font-size: 0.28rem;
		color:#999;
	}
	.lawyerinfo{
		height: 1.0rem;
		position: relative;
	}
	.info{
		
	}
	.info>p:nth-child(1){
		color: #333;
		font-size: 0.32rem
	}
	.num{
		color:#f58144;
		text-align: center;
	}
	img{
		width: 1.0rem;
		height: 1.0rem;
		border-radius: 0.06rem;
		margin-right: 0.2rem
	}
	.info_btn{
		min-width: 1.2rem;
		position: absolute;
		right: 0;
		top:0;
	}
	.info_btn>p:nth-child(2){
		display: block;
		width: 1.2rem;
		border: 1px solid #1675e1;
		border-radius: 0.06rem;
		height: 0.48rem;
		line-height: 0.48rem;
		text-align: center;
		color: #1675e1;
		margin-top: 0.1rem
	}
	.content{
		margin-top: 0.3rem
	}
	.content p:nth-child(1){
		margin-bottom: 0.1rem
	}
</style>