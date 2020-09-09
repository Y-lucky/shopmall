<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comment-top">
     <div class="comment-info">
        <div class="comment">
        <span>商品评价</span>
        <span class="comment-more">更多</span>
      </div>
      <div class="user-info">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div>
        <p>{{commentInfo.content}}</p>
        <div class="style-info">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="comment-images">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
        </div>
      </div>
     </div>
  </div>
</template>

<script>
// 封装时间函数
import {formatDate} from "@/components/common/Utils"
export default {
  props:{
    commentInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  filters:{
    showDate(value){
      // 时间戳单位是秒 乘以1000位为毫秒
      const date = new Date(value * 1000)
      // 利用函数获取时间格式化 yyyy-MM-dd hh:mm:ss
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
.comment-top{
  margin: 10px 0;
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
}

.comment-info{
  margin: 15px 10px;
}

.comment{
  padding-bottom: 15px;
  border-bottom: 2px solid #eee;
  position: relative;
}

.comment-more{
  float: right;
  padding-right: 16px;
}

.comment-more::after{
  content: '';
  height: 12px;
  width: 12px;
  border-top: 2px solid #3c3c3c;
  border-right: 2px solid #3c3c3c;
  position: absolute;
  right: 5px;
  bottom: 18px;
  transform: rotate(45deg);
}

.user-info{
  margin: 13px 0;
}

.user-info img{
  height: 55px;
  border-radius: 50%;
  vertical-align: middle;
}

.user-info span{
  padding-left: 10px;
  font-size: 18px;
  font-weight: 700;
}

.style-info{
  margin: 13px 0 ;
}

.style-info .date{
  padding-right: 10px;
  font-size: 16px;
}

.comment-images img{
  height: 100px;
  width: 100px;
  /* background-size: cover; */
  /* object-fit: cover; */
  margin-right: 5px;
}
</style>