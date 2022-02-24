<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM" >点击获取上方DOM元素</button>
    <school ref="sch"></school>
  </div>
</template>

<script>
  // 引入school组件
  import School from "./components/school.vue"
  export default {
    name:"App",
    components:{
      School
    },
    data() {
      return {
        msg:"欢迎学习Vue"
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.title); // 真实DOM元素
        console.log(this.$refs.btn);  // 真实DOM元素
        console.log(this.$refs.sch);  // School组件的实例对象(vc)
      }
    },
  }
</script>

<style>

</style>