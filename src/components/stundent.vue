<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name:"Student",
    data() {
      return {
        name:"小硅谷",
        sex:"男",
        age:20
      }
    },
  }
</script>