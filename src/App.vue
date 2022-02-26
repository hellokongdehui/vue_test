<template>
  <div class="app">
    <h1>您好</h1>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种：通过@或v-on) -->
    <Student v-on:getStuNa.once="getStudentName"/>  <!-- 加once仅触发一次 -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种：通过ref) -->
    <!-- <Student ref="student"/> -->

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/stundent.vue"
  import School from "./components/school.vue"
  export default {
    name:"App",
    components:{
      Student,
      School
    },
    methods: {
      getSchoolName (name) {
        console.log("App收到了学校名：", name)
      },
      getStudentName(name,...params){
        console.log("App收到了学生名：", name,params)
      }
    },
    mounted(){
        // this.$refs.student.$on("getStuNa",this.getStudentName)  // 绑定自定义事件
        // this.$refs.student.$once("getStuNa",this.getStudentName)  // 绑定自定义事件(仅一次)
    }
  }
</script>

<style scoped>
  .app {
    background-color: #ddd;
    padding: 5px;
  }
</style>