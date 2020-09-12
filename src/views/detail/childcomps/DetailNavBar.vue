<template>
 <nav-bar>
        <div slot="left" class="back-home" @click="backClick">
           <img src="@/assets/img/common/arrow_left.svg" alt="">
        </div>
        <div slot="center" class="titles"> 
            <div v-for="(item, index) in titles" :key="index" class="titles-item" 
                :class="{active:currentIndex === index}" @click="titleClick(index)">
                {{item}}</div>
        </div>
 </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/navBar'
export default {
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex= index;
            this.$emit('titleClick',index)
        },
        backClick(){
            // 返回主页 back 和 go
            this.$router.back()
        }
    }
}
</script>

<style>
    .titles{
        display: flex;
        color: #333;
    }

    .titles-item{
        flex: 1;
    }

    .active{
        color: #ff0000;
    }
    
    .back-home img{
        height: 30px;
        margin-top: 5px;
    }
</style>