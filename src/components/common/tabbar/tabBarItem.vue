<template>
      <div class="tab-bar-item" @click="pageclick">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props:{
    path:String,
    activeColor:{
      type: String,
      default:'green'
    }
  },
  data(){
    return{
      
    }
  },
  computed:{
    isActive(){
     return this.$route.path.indexOf(this.path) !==-1
    }, 
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    pageclick(){
     this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
 
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>