<template>
  <div>
    <nav-bar class="profile">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-avater/>
    <profile-score/>
    <profile-information/>
    <profile-shop/>
  </div>
</template>

<script>
import navBar from '../../components/common/navbar/navBar'

import ProfileAvater from './childComps/ProfileAvater'
import ProfileScore from './childComps/ProfileScore'
import ProfileInformation from './childComps/ProfileInformation'
import ProfileShop from './childComps/ProfileShop'
export default {
  name:'Profile',
  components:{
    ProfileAvater,
    ProfileScore,
    ProfileInformation,
    ProfileShop,
    navBar
  }
}
</script>

<style>
.profile{
  background-color: #ff0000;
  color: #fff;
}
</style>