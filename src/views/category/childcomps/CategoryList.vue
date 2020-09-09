<template>
  <!-- <div> -->
      <!-- <scroll > -->
          <div class="category-list">
          <!-- <template> -->
                <ul>
                    <li v-for="(item, index) in cateList" :key="index"
                        @click="itemClick(index)" 
                        :class="{highlighted:index===currentIndex}">
                        {{item.title}}
                    </li>
                </ul>
            <!-- </template> -->
            </div>
      <!-- </scroll> -->
  <!-- </div> -->
</template>

<script>
// import Scroll from '@/components/common/scroll/Scroll'
export default {
name:"CategoryList", 
    components:{
        // Scroll
    },
    props:{
        cateList:{
            type: Array,
            default(){
                return []
            }
        },
        categoods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex: 0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex= index;
            this.$emit('itemClick', index);
        }
    }
}
</script>

<style scoped>
.category-list{
    /* width: 25%; */
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;  
    /* height: calc(100% - 44px - 49px); */
    width: calc(100% - 75%);
}

.category-list li{
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-left: 2px solid #ffffff;
}

.category-list .highlighted{
    /* 动态添加class不起效果的原因是  权重不够 */
    background-color: #ddd;
    color: #ff0000;
    border-left: 2px solid #ff0000;
}

</style>