<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
    <h1 v-show="isShow">您好！</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name:"test",
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
  
  .hello-enter-active{
    animation: shangduan 1s linear;
  }

  .hello-leave-active{
    animation: shangduan 1s linear reverse;
  }

  @keyframes shangduan {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>