<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-image-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
        <detail-goods-param ref="params" :param-info="paramInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCar"/>
    <back-top @click.native="backclick" v-show="isShowbackTop"/>
  </div>
</template> 

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailImageInfo from './childcomps/DetailImageInfo'
import DetailGoodsParam from './childcomps/DetailGoodsParam'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'
// 推荐模板
import GoodsList from '@/components/content/goods/GoodsList'

import BackTop from '@/components/content/backTop/BackTop'
// 滚动模块
import Scroll from '@/components/common/scroll/Scroll'
import {debounce} from '@/components/common/Utils'
// 网络请求
import {getDetail, Goods, Shop, GoodsParam, getRecommends} from '../../network/detail'
export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailImageInfo,
        DetailGoodsParam,
        DetailCommentInfo,
        DetailBottomBar,
        GoodsList,
        BackTop,
        Scroll,
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods: {},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopYs:{},
            currentIndex:null,
            isShowbackTop: false,
        }
    },
    created(){
        this.iid=this.$route.params.iid

        getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result;
            // 1. 获取顶部图片轮播图的数据
            this.topImages= data.itemInfo.topImages

            // 2.获取商品的数据
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 3. 获取店铺信息
            this.shop = new Shop(data.shopInfo)

            // 4.获取详情图片 
            this.detailInfo = data.detailInfo

            // 5.获取宝贝参数
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            // 6.获取评论
            if(data.rate.cRate !==0){
                this.commentInfo= data.rate.list[0]
            }
        })
        getRecommends().then(res=>{
            // 请求推荐商品
            console.log(res);
            this.recommends = res.data.list
        })

        // 获取每个组件的offsettop  利用防抖
        this.getThemeTopYs= debounce(()=>{
            this.getThemeTopYs=[]
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            // 获取屏幕长度的最大值
            this.themeTopYs.push(Number.MAX_VALUE)
        },100)
    },
    methods:{
        detailImageLoad(){
            // console.log('555');
            // 图片加载完刷新 scroll的可滚动的高度
            this.$refs.scroll.refresh()
            // 图片加载完成调用函数  是获取组件的offsettop属性
            this.getThemeTopYs()
        },
        titleClick(index){
            // console.log(index);
            // 点击导航滚到对应的位置
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
        },
        contentScroll(position){
            // console.log(position);
            // 获取y值
            // +44是因为navbar的高度
            const positionY= -position.y+44;
            const length= this.themeTopYs.length
            for(let i=0; i<length-1; i++){
                // 判断滚动的区域在参数，评论，推荐  之间
                // currentIndex!==i 让currentindex 条件只判断一次
                if(this.currentIndex !== i && (positionY>= this.themeTopYs[i] && positionY< this.themeTopYs[i+1])){
                    this.currentIndex= i;
                    this.$refs.navbar.currentIndex = this.currentIndex
                }
            }
            // 判断backTop是否显示
            this.isShowbackTop=(-position.y)>1000
        },
        backclick(){
            this.$refs.scroll.scrollTo(0, 0)
        },
        addToCar(){
            //1. 获取购物车的信息
            const product={};
            product.image= this.topImages[0];
            product.title= this.goods.title;
            product.desc= this.goods.desc;
            product.price= this.goods.realPrice;
            product.iid= this.iid;

            // 2.将商品加入购物车里
            this.$store.dispatch('addtoCart', product).then(res=>{
                // console.log(res);

                this.$toast.show(res, 1500)
            })
        }
    },
    mounted(){
      // 监听item中的图片加载完成
      const refresh= debounce(this.$refs.scroll.refresh)
      this.$bus.$on('datailImgLoad',()=>{
        refresh()
      })
      
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
/* 让detail-Nav显示 */
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
</style>