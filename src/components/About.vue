<template>
	<div class="about">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'about',
		components:{
			Childhead,
			Notopen
		}
	}
</script>
<style type="text/css">
	.about{
		box-shadow: none !important;
	}
</style>