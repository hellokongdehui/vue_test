<template>
  <div>
    <Student/>
  </div>
</template>

<script>
  // 引入school组件
  import School from "./components/stundent.vue"
  export default {
    name:"App",
    components:{
      School
    },
    data() {
      return {
        msg:"欢迎学习Vue"
      }
    },
  }
</script>

<style>

</style>