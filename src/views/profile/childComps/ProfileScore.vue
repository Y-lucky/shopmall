<template>
  <div class="profile-score">
      <div class="score-item">
          <p><span class="balance">{{this.showsBalance}}</span>元</p>
          <span>我的额度</span>
      </div>
      <div class="score-item">
          <p><span class="balance">{{discounts}}</span>个</p>
          <span>我的优惠</span>
      </div>
      <div class="score-item">
          <p><span class="balance">{{score}}</span>分</p>
          <span>我的积分</span>
      </div>
  </div>
</template>

<script>
export default {
name:"ProfileScore",
    data(){
        return{
            balance:0,
            discounts:0,
            score:0
        }
    },
    computed:{
        showsBalance(){
            return this.balance.toFixed(2)
        }
    }

}
</script>

<style>
.profile-score{
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-bottom: 15px solid #eee;
}

.score-item{
    flex: 1;
    text-align: center;
    border-right: 1px solid #eee;
}

.score-item p{
    margin-bottom: 3px;
}

.balance{
    font-size: 23px;
    font-weight: 700;
    color: #ff0000;
    
}

</style>