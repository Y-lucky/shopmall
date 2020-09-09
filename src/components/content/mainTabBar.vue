<template>
  <tab-bar>
       <tab-bar-item path="/home" activeColor="red">
        <img  slot="item-icon" src="@/assets/img/tabbar/homepage.svg">
        <img  slot="item-icon-active" src="@/assets/img/tabbar/home.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/classification.svg">
        <img slot="item-icon-active" src="@/assets/img/tabbar/cetacoge.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item path="/shopcart" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
         <img slot="item-icon-active" src="@/assets/img/tabbar/shop.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/my.svg">
         <img slot="item-icon-active" src="@/assets/img/tabbar/mine.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item> 
    </tab-bar>
</template>

<script>
import tabBar from '../common/tabbar/tabBar'
import tabBarItem from '../common/tabbar/tabBarItem'

export default {
name:"mainTabBar",
components:{
     tabBar,
    tabBarItem
}
}
</script>

<style>

</style>