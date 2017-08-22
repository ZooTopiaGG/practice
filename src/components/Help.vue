<template>
	<div class="help">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'help',
		components:{
			Childhead,
			Notopen
		}
	}
</script>