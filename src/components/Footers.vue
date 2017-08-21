<template>
	<div class="footer">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="首页">
			  <div @click="toHome"> 
			    <img v-if="title=='首页'" slot="icon" src="../assets/images/New_zjm_icon13@2x.png">
			    <img v-else slot="icon" src="../assets/images/New_zjm_icon8@2x.png">
			    <a href="javascript:;">首页</a>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="律师" >
			  <div @click='toLawyer'>
			  	<img v-if="title=='律师'" slot="icon" src="../assets/images/New_zjm_icon15@2x.png">
			    <img v-else slot="icon" src="../assets/images/New_zjm_icon10@2x.png">
			    <a href="javascript:;">律师</a>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="案例">
		    <div @click='toCase'>
		    	<img v-if="title=='案例'" slot="icon" src="../assets/images/New_zjm_icon16@2x.png">
			    <img v-else slot="icon" src="../assets/images/New_zjm_icon11@2x.png">
			    <a href="javascript:;">案例</a>
		    </div>
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		  	<div  @click='toMine'>
		  		<img v-if="title=='我的'" slot="icon" src="../assets/images/New_zjm_icon14@2x.png">
			    <img v-else slot="icon" src="../assets/images/New_zjm_icon9@2x.png">
			    <a href="javascript:;">我的</a>
		  	</div>
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script type="text/javascript">
	import { mapGetters, mapActions } from 'vuex'

	export default{
		name:'footer',
		data(){
			return{
				stage:111,
				selected:'首页'
			}
		},
		methods:{
			toHome(){
				//this.$router.push({path: '/home',query:{stage: this.stage,id:309}});
				this.$store.dispatch('home')
				this.$router.push({path: '/home'});
				console.log(typeof(this.$route.query) == 'object' )
			},
			toLawyer(){
				this.$store.dispatch('lawyer')
				this.$router.push({path: '/lawyer'});
			},
			toCase(){
				this.$store.dispatch('case')
				this.$router.push({path: '/case'});
			},
			toMine(){
				this.$store.dispatch('mine')
				this.$router.push({path: '/mine'});
			}
		},
		computed:mapGetters([
			'title'
		]),
		updated(){
				console.log('改变了'+this.title)
				this.selected = this.title
		},
		mounted(){
			// this.selected = this.title
			// this.$router.push({path: '/home'});
			//console.log(this.$route)
		}
	}
</script>
<style type="text/css">
	a{
		text-decoration: none;
	}
	.mint-tab-item-label a{
		color: #888;
		font-size: 0.24rem
	}
	.is-selected .mint-tab-item-label a{
		color: #1675e1;
	}
	.mint-tab-item-label div img{
		width: 0.48rem;
		height: 0.48rem;
		display: block;
		margin:0 auto 5px;
	}
	.mint-tabbar {
		position: fixed;
		height: 1.1rem;
	}
	.footer{
		height: 1.1rem
	}
</style>