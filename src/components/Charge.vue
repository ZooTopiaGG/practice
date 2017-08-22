<template>
	<div class="charge">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'charge',
		components:{
			Childhead,
			Notopen
		}
	}
</script>