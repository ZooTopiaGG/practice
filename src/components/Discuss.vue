<template>
	<div class="discuss">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'discuss',
		components:{
			Childhead,
			Notopen
		}
	}
</script>
<style type="text/css">
	.discuss{
		box-shadow: none !important;
	}
</style>