<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  // 引入hunhe
  // import {hunhe,hunhe2} from "../mixin"
    export default {
      name:"Student",
      data() {
        return {
          name:"小花",
          sex:"女"
        }
      },
      // mixins:[hunhe,hunhe2]
    }
  </script>