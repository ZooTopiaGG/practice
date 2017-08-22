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
  /*home 组件可监听所有路由
    showHead 显示头部
    showFoot 显示底部
    showParent 显示内容
    hideHead 隐藏头部
    hideFoot 隐藏底部
    hideParent 隐藏内容
    */
  watch:{
    $route(to,from){
      let path = to.path;
        if(path == '/home/news'){
          this.$store.dispatch('hideHead')
          this.$store.dispatch('showParent')
          this.$store.dispatch('hideFoot')
          this.$store.dispatch('changeTitle','律闻天下')
        }else if(path.indexOf('/home/news/details') >-1){
          this.$store.dispatch('hideFoot')
          this.$store.dispatch('hideParent')
          this.$store.dispatch('hideHead')
          this.$store.dispatch('changeTitle','新闻详情')
        }else if(path == '/lawyer'){
          this.$store.dispatch('showHead')
          this.$store.dispatch('showFoot')
          this.$store.dispatch('showParent')
          this.$store.dispatch('lawyer')
        }else if(path == '/case'){
          this.$store.dispatch('showHead')
          this.$store.dispatch('showFoot')
          this.$store.dispatch('showParent')
          this.$store.dispatch('case')
        }else if(path == '/mine'){
          this.$store.dispatch('mine')
          this.$store.dispatch('hideHead')
          this.$store.dispatch('showFoot')
          this.$store.dispatch('showParent')
        }else if(path.indexOf('/mine/')>-1){
          this.$store.dispatch('hideHead')
          this.$store.dispatch('hideFoot')
          this.$store.dispatch('hideParent')
          if(path == '/mine/charge'){
            this.$store.dispatch('changeTitle','收费设置')
          }else if(path == '/mine/discuss'){
            this.$store.dispatch('changeTitle','评论回复')
          }else if(path == '/mine/collection'){
            this.$store.dispatch('changeTitle','我的收藏')
          }else if(path == '/mine/feedback'){
            this.$store.dispatch('changeTitle','反馈意见')
          }else if(path == '/mine/help'){
            this.$store.dispatch('changeTitle','使用帮助')
          }else if(path == '/mine/business'){
            this.$store.dispatch('changeTitle','业务互助')
          }else if(path == '/mine/about'){
            this.$store.dispatch('changeTitle','关于我们')
          }else if(path == '/mine/original'){
            this.$store.dispatch('changeTitle','我的原创')
          }else{
            this.$router.push({path:'/',replace:true})
          }
          
        }
        else{
          this.$store.dispatch('showHead')
          this.$store.dispatch('showFoot')
          this.$store.dispatch('showParent')
      }
    }
  }
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
