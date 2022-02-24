<template>
  <div>
    <Student name="小硅谷" sex="男" :age="20"/>
  </div>
</template>

<script>
  // 引入school组件
  import Student from "./components/stundent.vue"
  export default {
    name:"App",
    components:{
      Student
    },
    data() {
      return {
        
      }
    },
  }
</script>