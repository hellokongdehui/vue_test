// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象——vm
new Vue({
  el:"#app",
  // 将App组件放入容器中
  render: h => h(App),

  // render (createElement) {
  //   return createElement("h1", "您好啊！")
  // }
})

/*
  关于不同版本的Vue：
    1. vue.js与vue.runtime.xxx.js的区别：
      (1). vue.js是完整版是vue，包含核心功能与模块解析器
      (2). vue.runtime.xxx.js是运行版的vue，只包含核心功能，没有模板解析器
    2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数
    把接收到的createElement函数去指定具体内容
*/