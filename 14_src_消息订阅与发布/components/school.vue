<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from "pubsub-js"
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
      /* this.$bus.$on("hello",(data)=>{
        console.log("我是school组件,收到了数据：",data)
      }) */
      this.pubId = pubsub.subscribe("hello",(msgName,data) => {
        console.log(this)
        console.log("有人发布了hello消息，hello消息的回调执行了！",msgName,data)
      })
    },
    beforeDestroy() {
      // this.$bus.$off("hello")
      pubsub.unsubscribe(this.pubId)
    },
  }
</script>

<style lang="less" scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>
