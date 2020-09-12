<template>
  <div class="category">
    <nav-bar class="category-navbar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
        <category-list  class="list-tab" :cate-list="categoryList" :categoods="categoryGoods" @itemClick="categoryListClick"/>
        
        <scroll class="scroll-height">
          <!-- <div> -->
            <category-list-item  class="info-one"  :goods-info="categoryGoods"/>
          <!-- </div> -->
         </scroll>
    </div>
  </div>
</template>

<script>
import CategoryList from './childcomps/CategoryList'
import CategoryListItem from'./childcomps/CategoryListItem'

import navBar from  '@/components/common/navbar/navBar'

import Scroll from '@/components/common/scroll/Scroll'

import { getcategoryList, getcategoryGoods, getCategoryDetail} from '../../network/category'
  export default {
      name:'Category',
      components:{
        CategoryList,
        CategoryListItem,
        navBar,
        Scroll
      },
      data(){
        return{
          categoryList:[],
          currentIndex:0,
          categoryGoods:[],
          maitKey: 3627,
          miniWallkey:10062603,
          CategoryDetail:[]
        }
      },
      created(){
        // 获取分类列表
        this.getcategoryList()
        //  获取分类商品
        this.getcategoryGoods(this.maitKey)
        // 获取分类商品里面的推荐数据
        this.getCategoryDetail()
       
      },
      methods:{
        getcategoryList(){
          getcategoryList().then(res=>{
            console.log(res);
            // 获取商品列表
            this.categoryList= res.data.category.list;
          })
        },

        categoryListClick(index){
          // console.log(index);
          this.currentIndex = index
          // 获取相对应下标的 maitKey
          this.maitKey = this.categoryList[this.currentIndex].maitKey;
          // 获取到maitKey要重新调用getcategoryGoods函数，获取相对应的商品分类
          this.getcategoryGoods(this.maitKey);
          this.miniWallkey = this.categoryList[this.currentIndex].miniWallkey
          this.getCategoryDetail(this.miniWallkey,'pop')
        },

        getcategoryGoods(maitKey){
           getcategoryGoods(maitKey).then(res=>{
            this.categoryGoods= res.data.list
            // console.log(res);
            // console.log(this.categoryGoods);
          })
        },
        // 获取分类推荐数据  
        getCategoryDetail(){
          getCategoryDetail(this.miniWallkey,'pop').then(res=>{
            // console.log(res);
            this.categoryDetail = res;
          })
        }
      }
    }
</script>

<style scoped>
  .category{
    height: 100vh;
    position: relative;
    /* overflow: hidden; */
  }

 .category-navbar{
   position: relative;
   color: #fff;
   background-color: #ff0000;
 }

  .content{
    display: flex;
    /* height: calc(100% - 44px - 49px); */
  }

  .list-tab{
    /* flex: 1; */
    width: 25%;
    overflow: hidden;
    
  }
  
  .scroll-height{
    flex: 1;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
    /* word-break: break-all; */
    width: calc(100% - 25%);
    position: absolute;
    right: 0;
    left: 25%;
    top: 45px;
    bottom: 49px; 
  }

</style>