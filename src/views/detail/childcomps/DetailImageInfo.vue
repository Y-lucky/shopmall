<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="datail-info-image">
        <div class="info-desc">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
      
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info-image">
            <img v-for="(item, index) in detailInfo.detailImage[0].list" 
            :key="index" :src="item" @load="imageLoad" alt="">
        </div>
        <!-- <span>{{detailInfo.detailImage[0].list.length}}</span>
        <span>{{this.imageLength}}</span> -->
  </div>
</template>

<script>
export default {
    name:'DetailImageInfo',
    props:{
        detailInfo:{
            type: Object,
        }
    },
    data(){
        return{
            counter: 0,
            imageLength: 0
        }
    },
    methods:{
        imageLoad(){
            // console.log(this.imageLength);
            // console.log(detailInfo.detailImage[0].list.length);
            // 判断，所有的图片都加载完，那么进行一次回调就可以了
            // 用counter这个变量计数  当他等于图片数量就说明加载完成
            if(++this.counter === this.imageLength){
                // console.log("222");
                this.$emit('detailImageLoad')

            }
        }
    },
    watch:{
        // 当fullName值变化时，watch监听到并且执行
        detailInfo(){
            // 把图片的数量赋值这个变量
            this.imageLength = this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style scoped>
.datail-info-image{
    border-top: 5px solid #eee;
    margin-top: 20px;
}

.info-desc{
    margin: 15px 10px;
}

.desc{
    margin: 15px 0;
}

.start, .end{
    height: 1px;
    width: 129px;
    background-color: #3c3c3c;
    position: relative;
}

.start::before, .end::after{
    content: '';
    display: block;
    height: 5px;
    width: 5px;
    background-color: #3c3c3c;
    position: absolute;
    bottom: 0px;
    border-radius: 3px;
}

.end{
    float: right;
}

.end::after{
    right: 0;
}

.info-key{
    margin: 10px 10px;
}

.info-image img{
    width: 100%;
}
</style>