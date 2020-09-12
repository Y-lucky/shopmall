<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1" :titles="['流行','新款','精选']" @tabclick="tabclick" 
                 class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" 
            @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
     <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
     <recommend-view :recommends="recommends"/>
     <fashion-view/>
     <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabclick="tabclick"/>
     <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isShowbackTop"/>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar/navBar'
import Scroll from '@/components/common/scroll/Scroll'
import tabControl from '@/components/content/TabControl/tabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import fashionView from './childComps/fashionView'

import {getHome,getHomeGoods} from '../../network/home'
import {debounce} from '@/components/common/Utils'

export default {
    name:"Home",
    components:{
      navBar,
      Scroll,
      tabControl,
      GoodsList,
      BackTop,
      HomeSwiper,
      RecommendView,
      fashionView
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page: 0,list: []},
          'new':{page: 0,list: []},
          'sell':{page: 0,list: []},
        },
        currentType: 'pop',
        isShowbackTop: false,
        tabOffsetTop:0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    // 钩子函数
    activated(){
      // home离开 记录位置
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY= this.$refs.scroll.getScrollY()
    },
    created(){
      // 网络请求方法
      this.getHome()
      // 请求流行 新款 精选的数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
     
     
    },
    mounted(){
      // 监听item中的图片加载完成
      const refresh= debounce(this.$refs.scroll.refresh)
      this.$bus.$on('homeImgLoad',()=>{
        refresh()
      })
      
    },
    methods:{ 
      // 事件监听相关的方法
      tabclick(index){
        // 获取对应按钮的下标
        this.currentType=Object.keys(this.goods)[index];
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
      },
      backclick(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){
        //1. 判断backTop是否显示
        this.isShowbackTop=(-position.y)>1000
        //2. 决定tabcontrol是否吸顶（position：fixed)
        this.isTabFixed=(-position.y)>this.tabOffsetTop
        // console.log(this.tabOffsetTop)
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
      // 获取tabcontrol的offsettop
      // 所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
      },
      // 网络请求相关的方法
     getHome(){
      getHome().then(res=>{
              // console.log(res);
              this.banners=res.data.banner.list;
              // console.log(res.data.banner.list);
              this.recommends=res.data.recommend.list;
            })
     },
     getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 上拉加载更多默认只加载一次，要加载更多要加finishPullUp函数
        this.$refs.scroll.finishPullUp()
      })
     }
    }
}
</script>

<style scoped>
 #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    color:#fff;
    background: #ff0000;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    z-index: 9;
  }
  .tab-control{
    /* 相对定位 */
    position: relative;
    z-index: 9;
    top: -1px;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
 
