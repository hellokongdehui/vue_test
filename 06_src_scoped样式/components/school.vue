<template>
  <div class="demo">
    <h2 class="title">学校名称：{{name}}</h2>
    <h2 class="add">学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:"School",
    data() {
      return {
        name:"上端国际有限公司",
        address:"广州"
      }
    },
  }
</script>

<style lang="less" scoped>
  .demo {
    background-color: skyblue;
    .add {
    color: white;
  }
  }
</style>
