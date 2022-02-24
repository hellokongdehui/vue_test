<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{ name }}</h2>
    <h2 class="sex">学生性别：{{ sex }}</h2>
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
  };
</script>

<style lang="less">
  .demo {
    background-color: hotpink;
    .sex {
      color: white;
    }
  }
</style>