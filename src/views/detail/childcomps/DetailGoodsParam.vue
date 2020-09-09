<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !==0">
      <!-- 商品尺寸数据 -->
      <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
          <tr v-for="(tr, indey) in table" :key="indey">
              <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
          </tr>
      </table>
      <!-- 商品的参数数据 -->
      <table class="info-value">
          <tr v-for="(info, index) in paramInfo.infos" :key="index">
              <td>{{info.key}}</td>
              <td>{{info.value}}</td>
          </tr>
      </table>
      <div class="info-image" v-if="paramInfo.image.length !==0">
          <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        paramInfo:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.info-size{
    width: 100%;
    padding: 10px 10px;
}

.info-size td{
    border-bottom: 1px solid #ccc;
    height: 50px;
} 

.info-value{
    width: 100%;
    padding: 10px 10px;
}

.info-value td{
    border-bottom: 1px solid #ccc;
    height: 40px;
}

.info-value td:nth-child(1){
    width: 95px;
}

.info-value td:nth-child(2){
    color: #ff0000;
}

.info-image img{
    width: 100%;
}
</style>