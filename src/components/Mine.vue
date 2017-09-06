<template>
	<div class="mine">
		<div v-show="isShowParent" class="scroll-wrap">
			<div class="part1 flex flex-1">
				<div class="img">
					<img src="../assets/images/new_zjm_icon49@3x.png">
					<p>编辑信息</p>
				</div>
				<div class="pinfo">
					<div class="one flex flex-1 flex-pack-justify">
						<div>
							<p>12345</p>
							<p>解答</p>
						</div>
						<div>
							<p>12345</p>
							<p>原创</p>
						</div>
						<div>
							<p>12345</p>
							<p>喜欢</p>
						</div>
						<div>
							<p>12345</p>
							<p>收藏</p>
						</div>
					</div>
					<div class="two flex flex-1">
						<p>张三</p>
						<p>已认证</p>
						<p>VIP</p>
					</div>
					<div class="three">
						<span></span><span>4.5分</span>&nbsp;&nbsp;&nbsp;<span>(154人评)</span>
					</div>
					<div class="four">
						<div class="title">荣誉</div>
						<p>四川十大青年</p>
						<p>优秀律师</p>
						<p>合伙人</p>
					</div>
				</div>
			</div>
			<div class="part2 flex flex-1 flex-pack-justify">
				<div>
					<img src="../assets/images/new_grzx_icon72@2x.png">
					<p>订单</p>
				</div>
				<div>
					<img src="../assets/images/new_grzx_icon75@2x.png">
					<p>钱包</p>
				</div>
				<div>
					<img src="../assets/images/new_grzx_icon73@2x.png">
					<p>工具</p>
				</div>
				<div>
					<img src="../assets/images/new_grzx_icon74@2x.png">
					<p>名片</p>
				</div>
			</div>
			<div class="box-line"></div>
			<div class="part4">
				<ul class="list1">
					<li>
						<router-link to="/charge">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon92@2x.png">
								<p>收费设置</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/business">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon76@2x.png">
								<p>业务互助</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/discuss">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon77@2x.png">
								<p>评论回复</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/original">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon78@2x.png">
								<p>我的原创</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/collection">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon79@2x.png">
								<p>我的收藏</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
				</ul>
				<div class="box-line"></div>
				<ul class="list1">
					<li >
						<router-link to="/feedback">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon80@2x.png">
								<p>意见反馈</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/help">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon81@2x.png">
								<p>使用帮助</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/about">
							<div class="flex flex-1">
								<img class="img1" src="../assets/images/new_grzx_icon82@2x.png">
								<p>关于我们</p>
								<img class="img2" src="../assets/images/new_grzx_icon9@2x.png">
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- <div>
			<div class="navs"></div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div> -->
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name:'mine',
		data(){
			return {
				transitionName: 'slide-left'
			}
		},
		computed:{
			...mapGetters([
				'isShowParent'
			])
		},
		methods: {

		},
		
	}
</script>

<style scoped="scoped">
	.mine{
		background: #fff;
	}
	.list1 li{
		position: relative;
		height: 0.88rem;
		line-height: 0.88rem;
		border-bottom: 1px solid #eee;
		padding: 0 0.3rem
	}
	.list1 li a{
		display: block;
		color: #333;
	}
	.img1{
		width: 0.48rem;
		height: 0.48rem;
		margin-top: 0.2rem;
		margin-right: 0.2rem;
	}
	.img2{
		position: absolute;
		right: 0.3rem;
		top: 50%;
		margin-top: -0.14rem;
		height: 0.28rem;
		width: 0.16rem;
	}
	.part2{
		text-align: center;
		border-bottom: 1px solid #eee;
		color:#808080;
	}
	.part2>div{
		width: 25%;
		height: 1.875rem;
		border-right: 1px solid #eee;
	}
	.part2>div:last-child{
		border-right:0;
	}
	.part2 img{
		width: 0.48rem;
		height: 0.48rem;
		margin: 0.36rem 0 0.2rem;
	}
	.part1{
		width: 100%;
		height: 3.9rem;
		background: url(../assets/images/new_grzx_icon87@2x.png) no-repeat;
		background-size: cover;
		padding: 0.6rem 0 0.3rem;
		color: #fff;
	}
	.pinfo{
		width: 100%;
		margin-right: 0.3rem;
	}
	.img{
		border:0.04rem solid #fff;
		border-radius: 0.04rem;
		height: 2.63rem;
		min-width: 2.63rem;
		margin-right: 0.3rem;
		margin-left: 0.3rem;
	}
	.img p{
		background: #fff;
		height: 0.6rem;
		font-size: 0.32rem;
		width: 2.0rem;
		margin: 0.3rem auto 0;
		color: #1675e1;
		border-radius: 0.6rem;
		text-align: center;
		line-height: 0.6rem;
	}
	.part1 img{
		width: 2.63rem;
		height: 2.63rem;
	}
	.one>div>p:nth-child(1){
		margin-bottom: 0.1rem;
	}
	.two{
		margin-top: 0.3rem;
	}
	.two p{
		margin-right: 0.1rem;
		font-size: 0.2rem;
	}
	.two p:nth-child(1){
		font-size: 0.48rem;
	}
	.two p:nth-child(2){
		background: #1675e1;
		height: 0.24rem;
		padding: 0.05rem 0.1rem;
		border-radius: 0.04rem;
	}
	.two p:nth-child(3){
		background:#f58711;
		height: 0.24rem;
		padding: 0.05rem 0.1rem;
		border-radius: 0.04rem;
	}
	.three{
		margin-top: 0.1rem;
		margin-bottom: 0.3rem
	}
	.four p{
		margin-top: 0.15rem;
	}
</style>