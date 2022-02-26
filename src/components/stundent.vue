<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
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
    methods: {
      sendStudentName(){
        // 触发Student组件实例身上的getStuNa事件
        this.$emit("getStuNa",this.name,666,888,999)
      }
    },
  };
</script>

<style lang="less">
  .student {
    background-color: hotpink;
    padding: 5px;
  }
</style>