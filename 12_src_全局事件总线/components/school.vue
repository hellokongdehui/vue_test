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
        name:"上端国际",
        address:"广州"
      }
    },
    mounted(){
      // console.log("school",this)
      this.$bus.$on("hello",(data)=>{
        console.log("我是school组件,收到了数据：",data)
      })
    },
    beforeDestroy() {
      this.$bus.$off("hello")
    },
  }
</script>

<style lang="less" scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>
