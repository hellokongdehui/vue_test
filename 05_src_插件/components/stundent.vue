<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-bind:value="sex">
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