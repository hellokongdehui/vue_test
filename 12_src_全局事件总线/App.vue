<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/stundent.vue"
  import School from "./components/school.vue"
  export default {
    name:"App",
    data() {
      return {
        msg:"您好！"
      }
    },
    components:{
      Student,
      School
    },
  }
</script>

<style scoped>
  .app {
    background-color: #ddd;
    padding: 5px;
  }
</style>