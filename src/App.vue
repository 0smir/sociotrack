<template>
  <div id="app">
    <Header/>
    <main role="main">
      <router-view/>
    </main>

  </div>
</template>
<script>
  import Header from "@/components/Header";
  export default{
    name: "App",
    components:{
      Header
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main{
    background: #ccc;
    height: calc(100vh - 70px);
  }

}


</style>
