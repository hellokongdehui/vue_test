<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
  // 引入school组件
  import Student from "./components/stundent.vue"
  import School from "./components/school.vue"
  export default {
    name:"App",
    components:{
      Student,
      School
    },
    data() {
      return {
        
      }
    },
  }
</script>