<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imageLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
    export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    computed: {
        showImage(){
            // 取图片的地址不一样，
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods:{
        imageLoad(){
            // 监听图片加载完成发送首页还是详情
            if(this.$route.path.indexOf('/home')){
                this.$bus.$emit('homeImgLoad')
            }else if(this.$route.path.indexOf('/detail')){
                this.$bus.$emit('datailImgLoad')
            }
        },
        itemClick(){
            // 点击进入详情页
            this.$router.push('/detail/'+ this.goodsItem.iid)
        }
    }
}
</script>

<style>
    .goods-item{
        width: 48%;
        padding-bottom: 40px;
        position: relative;
    }

    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
  }

  .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
  }

  .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
  }

  .goods-info .collect {
     position: relative;
  }

  .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("../../../assets/img/home/collectn.svg") 0 0/14px 14px;
  }

</style>