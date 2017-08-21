<template>
  <div id="app">
    <Navs v-show="headShow"></Navs>
    <div>
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </div>
    <Footers v-show="footShow"></Footers>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navs from './components/Navs.vue'
import Footers from './components/Footers.vue'
//导入辅助函数
//1.mapActions和
//2.mapGetters 将 getter 映射到局部的计算属性当中
//import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Navs,
    Footers
  },
  computed:mapGetters([
    'headShow',
    'footShow'
  ]),
  // watch:{
  //   $route(){
  //     alert(1)
  //   }
  // },
  // mounted(){
  //   console.log(this.$route);
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mint-header{
  width: 100%
}

</style>
