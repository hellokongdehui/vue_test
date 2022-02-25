<template>
  <div>
    <h1 class="title">您好</h1>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/stundent.vue"
  import School from "./components/school.vue"
  export default {
    name:"App",
    components:{
      Student,
      School
    },
  }
</script>

<style scoped>
  .title {
    color:red
  }
</style>