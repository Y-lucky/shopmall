<template>
  <div class="cart-botton">
      <div class="check-botton">
          <check-button :is-checked="checkedall" @click.native="checkClick"/>
          <span>全选</span>
      </div>
      <div class="cart-total">
          <span></span>
          <span class="total">合计：{{totalPrice}}</span>
          <span class="settlement">结算({{checkLength}})</span>
      </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
name:"CartBottonBar",
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            // 总计
            return '￥'+ this.$store.state.cartList.filter(item =>{
              return item.checked
            }).reduce((preValue, item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            // 获取结算件数
            return this.$store.state.cartList.filter(item=>item.checked).length
        },
        checkedall(){
            if(this.$store.state.cartList.length == 0) return false
            return !(this.$store.state.cartList.find(item => !item.checked))
        }
    },
    methods:{
        checkClick(){
            // console.log('222')
            if(this.checkedall){
                this.$store.state.cartList.forEach(item => item.checked = false);
            }else{
                this.$store.state.cartList.forEach(item=>item.checked = true);
            }
        }
    }
}
</script>

<style scoped>
.cart-botton{
    height: 50px;
    position: relative;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    /* background-color: blueviolet; */
    display: flex;
    align-items: center;
}

.check-botton{
    width: 80px;
    display: flex;
    padding-left: 10px;
}

.check-botton span{
    padding-left: 5px;
}

.cart-total{
    flex: 1;
    text-align: right;
    padding-right: 20px;
}

.total{
    padding-right: 15px;
}

.settlement{
    padding: 10px 20px;
    background-color: #ff0000;
    border-radius: 30px;
    color: #fff;
}

.checkedall{
    background-color: #ff0000;
}
</style>