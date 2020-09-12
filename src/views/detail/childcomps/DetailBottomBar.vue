<template>
  <div class="bottom-bar">
    <div class="bottom-item">
        <div class="bar-item">
            <span class="bar-serive"></span>
            <span>客服</span>
        </div>
        <div class="bar-item">
            <span class="bar-shop"></span>
            <span>店铺</span>
        </div>
        <div class="bar-item">
            <span class="bar-collection"></span>
            <span>收藏</span>
        </div>
    </div>
    <div class="bottom-item">
        <div class="jion-car bar-right" @click="addToCart">加入购物车</div>
        <div class="buy bar-right">购买</div>
    </div>
  </div>
</template>

<script>
export default {
name:"DetailBottomBar",
    methods:{
        addToCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style>
.bottom-bar{
    height: 49px;
    background-color: #fff;
    position: relative;
    /* bottom: 49px; */
    display: flex;
    z-index: 99;
}

.bottom-item{
    flex: 1;
    display: flex;
}

.bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
}

.bar-serive{
    height: 25px;
    width: 25px;
    margin: 2px 0;
    background: url("../../../assets/img/home/serive.svg") no-repeat;
    background-size: 25px auto;
}

.bar-shop{
    height: 25px;
    width: 25px;
    margin: 2px 0;
    background: url("../../../assets/img/home/shop.svg") no-repeat;
    background-size: 23px auto;
}

.bar-collection{
    height: 25px;
    width: 25px;
    margin: 2px 0;
    background: url("../../../assets/img/home/collectn.svg") no-repeat;
    background-size: 25px auto;
}

.jion-car{
    color: #000;
    background-color: #fff000;
}

.buy{
    color: #fff;
    background-color: #ff0000;
}
.bar-right{
    flex: 1;
    text-align: center;
    line-height: 49px;
}

</style>