<template>
  <div>
    <button @click="isShow = !isShow">切换显示</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">您好！！</h1>
      <h1 v-show="isShow" key="2">上端国际</h1>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name:"test2",
    data() {
      return {
        isShow:true
      }
    },
  }
</script>

<style scoped>
  h1{
    background-color: orangered;
    text-align: center;
    color: white;
  }
  
  /* 进入的起点 离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }

  /* 进出过程 */
  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }

  /* 进入的终点 离开的起点 */
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }
</style>