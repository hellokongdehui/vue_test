<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点击number+1</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑getStuNa事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        name: "小花",
        sex: "女",
        number:0
      };
    },
    methods: {
      add(){
        console.log("number++回调")
        this.number++
      },
      sendStudentName(){
        // 触发Student组件实例身上的getStuNa事件
        this.$emit("getStuNa",this.name,666,888,999)
        // this.$emit("demo")
      },
      unbind(){
        this.$off("getStuNa")  // 解绑一个自定义事件
        // this.$off(["getStuNa","demo"])  // 解绑多个自定义事件
        // this.$off()  // 解绑所有自定义事件
      },
      death(){
        this.$destroy()  // 销毁当前Student组件实例,销毁后所有的Student实例的自定义事件全部不奏效
      }
    },
  };
</script>

<style lang="less">
  .student {
    background-color: hotpink;
    padding: 5px;
  }
</style>