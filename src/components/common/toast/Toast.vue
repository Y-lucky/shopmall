<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
name:"Toast",
    // props: {
    //     message: {
    //         type: String,
    //         default: ''
    //     },
    //     show:{
    //     type:Boolean,
    //     default:false
    //     }
    // },
    data(){
        return{
            message: '',
            isShow: false
        }
    },
   methods:{
       show(message, timeout= 1500){
           this.isShow = true;
           this.message = message;

           setTimeout(() => {
               this.isShow= false;
               this.message ='';
           }, timeout);
       }
   }
}
</script>

<style scoped>
.toast{
    position: fixed;
    left: 50%;
    top:75%;
    transform: translate(-50%, -50%);
    color: #fff;
    background-color: rgba(50, 50, 50, .75);
    z-index: 999;
    padding: 10px 30px;
    border-radius: 30px;
}
</style>