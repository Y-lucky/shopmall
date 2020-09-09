<template>
<!-- <div> -->
    <!-- <scroll > -->
        <div class="category-item">
        <ul class="goods-list">
            <li v-for="(item,index) in goodsInfo" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
        </div>
    <!-- </scroll> -->
<!-- </div> -->
</template>

<script>

// import scroll from '../../../components/common/scroll/Scroll'
export default {
name:"CategoryListItem",
components:{
    // scroll
},
    props:{
          goodsInfo:{
                type: Array,
                default(){
                    return []
                }
            }
    }
}
</script>

<style scoped>
/* .category-item{ */
    /* position: fixed;
    right: 0;
    left: 25%;
    top: 45px;
    bottom: 49px; */
    /* overflow: hidden; */
    /* height: calc(100% - 44px - 49px); */
/* } */

.goods-list{ 
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;
}

.goods-list li{
    position: relative;
    flex: 33%;
    text-align: center;
    list-style: none;
    margin: 15px 0 25px 0;
}

.goods-list li:last-child{
    text-align: left;
    padding-left: 3%;
}

.goods-list li:last-child span{
    left: 18%;
}

.goods-list img{
    height: 75px;
    margin-bottom: 8px;
}

.goods-list span{
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%);
    /* 限制span里面的文字只能在一行内 */
    white-space: nowrap;  
}
</style>