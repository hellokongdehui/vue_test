<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点击测试一个hello方法</button>
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
    methods:{
      test(){
        this.hello()
      }
    }
  }
</script>