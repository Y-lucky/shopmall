<template>
  <div class="cart-product">
      <div class="check-button">
          <check-button @click.native="chekedClick" :is-checked="product.checked"/>
      </div>
     <div class="cart-context">
        <img :src="product.image" alt="">
     </div>   
       <div class="product-title" @click="productClick">
            <h3>{{product.title}}</h3>
            <p>{{product.desc}}</p>
            <span class="p-price">{{product.price | Pricefilter}}</span>
            <span class="p-count">x{{product.count}}</span>
       </div>
   
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
    name:"CartListItem",
    components:{
        CheckButton
    },
    props:{
        product:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        chekedClick(){
            // checked是对象模型  在mutations里面
            this.product.checked = !this.product.checked
        },
        productClick(){
            this.$router.push('/detail/'+this.product.iid)
        }
    },
    computeds:{
    
    },
    filters:{
        Pricefilter(value){
            return '￥'+ value
        }
    }
}
</script>

<style scoped>
.cart-product{
    border-bottom: 1px solid #ccc;
    display: flex;
}

.check-button{
    display: flex;
    width: 35px;
    /* flex-direction:column; */
    justify-content: space-around;
    align-items: center;
}

.cart-context{
    padding: 10px 10px 10px 0;
    width: 75px;
    /* height: 100px; */
}

.cart-context img{
    width: 60px;
    /* height: 100px; */
    vertical-align: middle;
    /* display: inline-block; */
    border-radius: 8px;
}

.product-title{
    flex: 1;
    padding: 10px 10px 10px 0;
    overflow: hidden;
}

.product-title h3{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product-title p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 15px 0 22px 0;
}

.p-price{
    float: left;
    color: #ff0000;
}

.p-count{
    float: right;
}
</style>