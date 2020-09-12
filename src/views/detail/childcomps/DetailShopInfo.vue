<template>
  <div class="shop-top">
     <div class="shop-info">
        <div class="shop-detail">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>

        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div  class="shop-fans">
                    <span>{{shop.fans | sellCountFilter}}</span>
                    <div>总销量</div>
                </div>
                <div  class="shop-sells">
                    <span>{{shop.sells | sellCountFilter}}</span>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="shop-middle-item shop-middle-right">
                 <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{scoremore:item.isBetter}">{{item.score}}</td>
                        <td><span class="better" :class="{bettermore:item.isBetter}">{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
       
        <div class="enter-shop"><a href="#">进店逛逛</a></div>
    
     </div>
  </div>
</template>

<script>
export default {
name:"DetailShopInfo",
    props:{
        shop:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        // 判断销售量是否过万
        sellCountFilter(value){
            if(value < 10000) return value;
            return (value/10000).toFixed(1)+'万'
        }
    }
}
</script>

<style>
.shop-top{
    border-top: 5px solid #eee;
}

.shop-info{
    margin: 0 12px;
}

.shop-detail{
    margin: 30px 0;
}
.shop-detail img{
    height: 50px;
    vertical-align: middle;
}

.shop-detail span{
    font-size: 20px;
    padding-left: 10px;
    color: #3c3c3c;
    font-weight: 700;
}

.shop-middle{
    display: flex;
    color: #3c3c3c;
    font-weight: 700;
}

.shop-middle-item{
    flex: 1;
}

.shop-middle-left{
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
}

.shop-score .score{
    color: #198400;
}

.shop-score .scoremore{
    color: #ff0000;
}
.shop-fans, .shop-sells{
    flex: 1;
    text-align: center;
   
}

.shop-fans span{
    font-size: 18px;
    color: #3c3c3c;
}

.shop-fans div{
    padding-top: 8px;
}

.shop-sells div{
    padding-top: 8px;
}
.shop-middle-right table{
    padding-left: 20px;
}

.shop-middle-right table td{
    padding: 5px 5px;
}

.shop-middle-right .score{
    color: #198400;
}

.shop-middle-right .scoremore{
    color: #ff0000;
}

.better, .bettermore{
    color: #fff;
    font-size: 13px;
    padding: 2px 3px;
    border-radius: 8px;
}

.better{
    background-color: #198400;
}

.bettermore{
    background-color: #ff0000;
}

.enter-shop{
    text-align: center;
    margin-top: 15px;
    
}

.enter-shop a{
    background-color: #eee;
    padding: 5px 20px;
    border-radius: 5px;
}
</style>