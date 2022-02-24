<template>
  <div class="demo">
    <h2>公司名称：{{corporateName}}</h2>
    <h2>公司地址：{{address}}</h2>
    <button @click="showName">点击显示公司名称</button>
  </div>
</template>

<script>
export default {
  name:"CorporateNa",
  data() {
    return {
      corporateName:"腾讯微信",
      address:"广州市"
    }
  },
  methods: {
    showName(){
      alert(this.corporateName)
    }
  },
}
</script>

<style>
  .demo {
    background-color: orange;
  }
</style>