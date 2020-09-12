<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" 
        :class="{active:currentIndex===index}" @click="tabclick(index)">
        <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name:'tabControl',
        props:{
           titles:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            tabclick(index){
                this.currentIndex=index
                this.$emit('tabclick',index)
            }
        }
    }
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        z-index: 9;
        background-color: #fff;
    }

    .tab-control-item{
        flex: 1;
    }
    .active span{
        color:#ff0000;
        padding: 8px 5px;
        border-bottom: 3px solid #ff0000;
    }
</style>