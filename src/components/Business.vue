<template>
	<div class="business">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'business',
		components:{
			Childhead,
			Notopen
		}
	}
</script>
<style type="text/css">
	.business{
		box-shadow: none !important;
	}
</style>