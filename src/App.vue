<template>
  <div id="app">
    <div id="root" class="root">
      <Header/>
      <SidebarNav/>
      <main role="main">
        <router-view/>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/Header";
  import SidebarNav from "@/components/SidebarNav";
  import Footer from "@/components/Footer";
  export default{
    name: "App",
    components:{
      Header,
      SidebarNav,
      Footer
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

  .root{
    display: grid;
    grid-template-columns: 240px repeat(2, 1fr);
    grid-template-rows: 70px  auto 96px;
  }
  main{
    background: #ccc;
    height: calc(100vh - 70px);
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }

}


</style>
