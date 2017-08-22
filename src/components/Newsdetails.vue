<template>
	<div class="newsdetails" v-html="datas.content">
		
	</div>
</template>
<script>
    import axios from 'axios'
    import qs from 'qs'
	export default {
		name:'newsdetails',
        data(){
            return {
                datas:{}
            }
        },
        methods:{
            getNewsDetails(id){
                axios.get('api/writings/'+id)
                .then(res=>{
                    console.log(res);
                    this.datas = res.data.result
                })
                .catch(error=>{

                })
            }
        },
        created(){
            this.getNewsDetails(this.$route.params.id);
        }
	}
</script>
<style>
	.newsdetails{
		padding: 0.3rem 0.2rem;
		line-height: 1.6
	}
    .newsdetails img{
        width: 100% !important;
        height: auto;
    }
</style>