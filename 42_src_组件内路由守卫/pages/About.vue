<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name:"About",
    /* beforeDestroy(){
      console.log("Home组件即将被销毁")
    },
    mounted() {
      console.log("Home组件挂载完毕",this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    }, */

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log("About---beforeRouterEnter",to,from)
      if (to.meta.isAuth) {  // 判断是否需要鉴权
        if (localStorage.getItem('School') === 'HITSZ') {
          next()
        }else {
          alert('名称不对，无权查看！')
        }
      }else{
        next()
      }
    },

    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log("About---beforeRouterLeave",to,from)
      next()
    }
  }
</script>