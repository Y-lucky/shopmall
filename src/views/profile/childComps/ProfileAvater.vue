<template>
  <div class="profile-avater">
      <img src="@/assets/img/tabbar/mine.svg" alt="">
      <div class="profile-login">
           <a href="">登录</a>/<a href="">注册</a>
           <span> 暂无绑定手机号</span>
      </div>
         
      <span class="profile-right"></span>
  </div>
</template>

<script>
export default {
name:"ProfileAvater"
}
</script>

<style>
.profile-avater{
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #ff0000;
}

.profile-avater img{
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin: 0px 20px;
    padding: 0 15px;
    background-color: #fff;
}

.profile-login{
    flex: 1;
}

.profile-login a{
    color: #fff;
}

.profile-login span{
    font-size: 6px;
    display: block;
}

.profile-login span::before{
    content: '';
    position: relative;
    left: 1px;
    bottom: -4px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url("../../../assets/img/common/phone.svg") no-repeat center;
    background-size: 20px;
}

.profile-right{
    height: 80px;
    width: 80px;
    /* background-color: black; */
    background: url("../../../assets/img/common/arrow_right.svg") no-repeat center;
    background-size: 40px;
}
</style>