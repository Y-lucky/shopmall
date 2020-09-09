<template>
  <div class="profile-shop">
      <ul>
          <li>我的购物车</li>
          <li>下载购物app</li>
      </ul>
  </div>
</template>

<script>
export default {
name:"ProfileShop"
}
</script>

<style>
.profile-shop ul{
    padding-left: 20px;
}

.profile-shop li{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    padding-left: 20px;
    list-style: none;
}

.profile-shop li:nth-child(1)::before{
    content: '';
    position: relative;
    top: 2px;
    left: -8px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url('../../../assets/img/tabbar/shopcart.svg') no-repeat center;
    background-size: 18px;
}

.profile-shop li:nth-child(2)::before{
    content: '';
    position: relative;
    top: 2px;
    left: -8px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url('../../../assets/img/common/mall.svg') no-repeat center;
    background-size: 25px;
}

</style>