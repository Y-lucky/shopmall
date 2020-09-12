<template>
    
  <div class="cart-list" v-if="cartListLength !==0">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'

export default {
    name:"CartList",
    components:{
        CartListItem
    },
    computed:{
        ...mapGetters(['cartList','cartListLength'])
        // getcartList(){
        //     return this.$store.state.cartlist
        // }
    }
}
</script>

<style scoped>


</style>