<template>
  <div>
    <test/>
    <test2/>
    <test3/>
  </div>
</template>

<script>
  import test from "./components/Test"
  import test2 from "./components/Test2"
  import test3 from "./components/Test3"
  export default {
    name:"App",
    components:{test,test2,test3},
  }
</script>