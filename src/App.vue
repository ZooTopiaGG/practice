<template>
  <div id="app">
    <div class="navs" v-show="coverShow"></div>
    <Navs v-show="headShow"></Navs>
    <div class="box">
      <keep-alive v-if="$route.meta.keepAlive">
          <router-view class="child-view"></router-view>
      </keep-alive>
      <router-view v-else class="child-view"></router-view>
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
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  components: {
    Navs,
    Footers
  },
  computed:mapGetters([
    'headShow',
    'footShow',
    'coverShow'
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
        if(path == '/news'){
          this.$store.commit('hideHead')
          this.$store.commit('showParent')
          this.$store.commit('showCover')
          this.$store.commit('hideFoot')
          this.$store.commit('changeTitle','律闻天下')
        }else if(path.indexOf('/details') >-1){
          this.$store.commit('hideFoot')
          this.$store.commit('hideParent')
          this.$store.commit('hideHead')
          this.$store.commit('showCover')
          this.$store.commit('changeTitle','新闻详情')
        }else if(path == '/lawyer'){
          this.$store.commit('showHead')
          this.$store.commit('showFoot')
          this.$store.commit('showParent')
          this.$store.commit('showCover')
          this.$store.commit('lawyer')
        }else if(path == '/case'){
          this.$store.commit('showHead')
          this.$store.commit('showFoot')
          this.$store.commit('showParent')
          this.$store.commit('showCover')
          this.$store.commit('case')
        }else if(path == '/mine'){
          this.$store.commit('mine')
          this.$store.commit('hideHead')
          this.$store.commit('hideCover')
          this.$store.commit('showFoot')
          this.$store.commit('showParent')
        }else if(path =='/charge' || path =='/discuss' || path =='/collection' || path =='/feedback' || path =='/business' || path =='/help' || path =='/about' || path =='/original'){
          this.$store.commit('hideHead')
          this.$store.commit('hideFoot')
          this.$store.commit('hideParent')
          this.$store.commit('showCover')
          if(path == '/charge'){
            this.$store.commit('changeTitle','收费设置')
          }else if(path == '/discuss'){
            this.$store.commit('changeTitle','评论回复')
          }else if(path == '/collection'){
            this.$store.commit('changeTitle','我的收藏')
          }else if(path == '/feedback'){
            this.$store.commit('changeTitle','反馈意见')
          }else if(path == '/help'){
            this.$store.commit('changeTitle','使用帮助')
          }else if(path == '/business'){
            this.$store.commit('changeTitle','业务互助')
          }else if(path == '/about'){
            this.$store.commit('changeTitle','关于我们')
          }else if(path == '/original'){
            this.$store.commit('changeTitle','我的原创')
          }else{
            this.$router.push({path:'/',replace:true})
          }
          
        }
        else{
          this.$store.commit('showHead')
          this.$store.commit('showFoot')
          this.$store.commit('showParent')
          this.$store.commit('showCover')
      }
    }
  }
}
</script>

<style>
body{
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.box{
  background: #fff
}
.child-view{
  box-shadow: none !important;
}
.mint-header{
  width: 100%
}
.mint-button-icon{
  vertical-align: text-bottom;
}
/*  .child-view {
    position: absolute;
    width:100%;
    transition: all .3s cubic-bezier(1, 1, 0, 0);
    }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(375px, 0);
    transform: translate(375px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-375px, 0);
    transform: translate(-375px, 0);
  }*/
  .navs{
    position: fixed;
    height: 0.88rem;
    width: 100%;
    top: 0;
    background:#1675e1;
    z-index: 0
  }
</style>
