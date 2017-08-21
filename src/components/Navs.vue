<template>
  <div class="nav" v-show="footShow">
    <mt-header fixed :title="title"></mt-header>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    computed:mapGetters([
      'title',
      'footShow',
      'changeTitle'
    ]),
    methods:{
     
    },
    /*home 组件可监听所有路由*/
    // watch:{
    //   $route(to,from){
    //     // if(to.path == '/home'){
    //     //   this.$store.dispatch('show')
    //     //   this.$store.dispatch('showParent')
    //     // }else if(to.path == '/home/news'){
    //     //   this.$store.dispatch('showParent')
    //     // }
    //   }
    // }
  }
</script>
<style type="text/css">
	.mint-header,.nav{
    height: 0.8rem;
  }
  .mint-header{
    position: fixed;
    background: #1675e1;
  }
  .mint-header .mint-button{
    color: #fff
  }
</style>