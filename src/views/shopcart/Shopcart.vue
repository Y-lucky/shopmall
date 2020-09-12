<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-botton-bar />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navBar'
import Scroll from '@/components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import CartBottonBar from './childComps/CartBottonBar'

export default {
    name:'Shopcart',
    components:{
      NavBar,
      CartList,
      CartBottonBar,
      Scroll
    },
    computed:{
      cartLength(){
       
        return this.$store.state.cartList.length
      }
    },
    activted(){
      // 重新刷新购物车页面
      this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
#cart{
  height: 100vh;
  position: relative;
}

.nav-bar{
  color: #fff;
  background-color: #ff0000;
}

.content{
  height: calc(100% - 44px - 49px - 50px);
  overflow: hidden;
  
}

</style>