<template>
	<div class="original">
		<Childhead></Childhead>
		<Notopen></Notopen>
	</div>
</template>
<script>
	import Childhead from './Childhead.vue'
	import Notopen from './Notopen.vue'
	export default{
		name:'original',
		components:{
			Childhead,
			Notopen
		}
	}
</script>