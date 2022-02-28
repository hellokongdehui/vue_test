<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        name: "小花",
        sex: "女",
      };
    },
    mounted(){
      // console.log("student",this.x)
    },
    methods: {
      sendStudentName(){
        this.$bus.$emit("hello",this.name)
      }
    },
  };
</script>

<style lang="less">
  .student {
    background-color: hotpink;
    padding: 5px;
    margin-top: 10px;
  }
</style>