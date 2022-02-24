<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:"School",
    data() {
      return {
        name:"哈工大",
        address:"深圳市"
      }
    },
  }
</script>

<style>
  .school{
    background-color: hotpink;
  }
</style>