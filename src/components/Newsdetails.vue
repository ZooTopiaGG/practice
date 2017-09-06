<template>
	<div class="newsdetails" >
        <Childhead></Childhead>
        <div class="newsdetail" v-html="datas.content"></div>
	</div>
</template>
<script>
    import Childhead from './Childhead.vue'
    import axios from 'axios'
    import qs from 'qs'
	export default {
		name:'newsdetails',
        data(){
            return {
                datas:{}
            }
        },
        components:{
            Childhead
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
        box-shadow: none !important
    }
	.newsdetail{
		padding: 0.3rem 0.2rem;
		line-height: 1.6
	}
    .newsdetail img{
        width: 100% !important;
        height: auto;
    }
</style>