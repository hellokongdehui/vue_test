<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <CorporateNa></CorporateNa>
    <EmployeeNa></EmployeeNa>
  </div>
</template>
<script>
  import CorporateNa from "./components/Corporate.vue"
  import EmployeeNa from "./components/Employee.vue"
  export default {
    name:"App",
    components:{
      CorporateNa,
      EmployeeNa
    }
  }
</script>

<style>

</style>