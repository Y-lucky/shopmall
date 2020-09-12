<template>
  <div class="benefits" :class="{checked:isChecked}">
      <img src="@/assets/img/common/benefits.svg" alt="">
  </div>
</template>

<script>
export default {
name:"CheckButton",
    props:{
        isChecked:{
            type:Boolean,
            default: false
        }
    }
}
</script>

<style>
.benefits{
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;
}

.benefits img{
    width: 28px;
    position: relative;
    bottom: 6px;
    right: 6px;
}

.checked{
    border-color: #ff0000;
    background-color: #ff0000;
}
</style>