<template>
	 <div class="nav">
	    <mt-header :title="changeTitle">
	       <mt-button icon="back" slot="left" @click="back">返回</mt-button>
	    </mt-header>
	 </div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		name:'nav',
		computed:{
			...mapGetters([
				'changeTitle'
			])
		},
		methods:{
			back(){
				this.$router.back()
			}
		}
	}
</script>
<style>
	
</style>