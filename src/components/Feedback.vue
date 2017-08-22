<template>
	<div class="feedback">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'feedback',
		components:{
			Childhead,
			Notopen
		}
	}
</script>