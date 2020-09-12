<template>
  <div class="back-top">
      <img src="@/assets/img/common/back-top.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style scoped>
  .back-top{
      position: fixed;
      right: 20px;
      bottom: 70px;
    }

  .back-top img{
    height: 35px;
    width: 35px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 3px 8px rgba(100, 100, 100, 0.6);

  }
</style>