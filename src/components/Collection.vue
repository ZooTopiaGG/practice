<template>
	<div class="collection">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'collection',
		components:{
			Childhead,
			Notopen
		}
	}
</script>
<style type="text/css">
	.collection{
		box-shadow: none !important;
	}
</style>