<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 引入hunhe
  // import {hunhe,hunhe2} from "../mixin"
    export default {
      name:"School",
      data() {
        return {
          name:"上端",
          address:"广州"
        }
      },
      // mixins:[hunhe,hunhe2]
    }
</script>