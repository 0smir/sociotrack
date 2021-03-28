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
    grid-template-columns: 240px auto;
    grid-template-rows: 70px  auto 96px;
    @media(max-width: 992px){
      grid-template-columns: 180px auto;
    }
    @media (max-width: 768px){
      grid-template-columns: 96px auto;
      grid-template-rows: 70px  auto 70px;
    }
  }
  main{
    padding: 70px 0 96px;
    background: #EFF7ED;
    min-height: calc(100vh - 70px);
    justify-content: center;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    @media (max-width: 768px){
      padding: 70px 0;
      grid-row-end: 3;
    }
  }

}


</style>
