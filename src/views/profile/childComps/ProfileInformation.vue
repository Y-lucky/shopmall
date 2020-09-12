<template>
  <div class="profile-information">
      <ul>
          <li>我的消息</li>
          <li>积分商城</li>
          <li>会员卡</li>
      </ul>
  </div>
</template>

<script>
export default {
name:"ProfileInformation"
}
</script>

<style>
.profile-information{
    border-bottom: 15px solid #eee;
}

.profile-information ul{
    padding-left: 20px;
}

.profile-information li{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    padding-left: 20px;
    list-style: none;
}

.profile-information li:last-child{
    border-bottom: none;
}

.profile-information li:nth-child(1)::before{
    content: '';
    position: relative;
    top: 2px;
    left: -8px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url('../../../assets/img/common/news.svg') no-repeat center;
    background-size: 18px;
}

.profile-information li:nth-child(2)::before{
    content: '';
    position: relative;
    top: 2px;
    left: -8px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url('../../../assets/img/common/information.svg') no-repeat center;
    background-size: 18px;
}

.profile-information li:nth-child(3)::before{
    content: '';
    position: relative;
    top: 2px;
    left: -8px;
    display: inline-block;
    height: 18px;
    width: 18px;
    background: url('../../../assets/img/common/member.svg') no-repeat center;
    background-size: 18px;
}
</style>