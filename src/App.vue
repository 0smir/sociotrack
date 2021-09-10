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
    display: flex;
    flex-wrap: wrap;
  }
  main{
    display: flex;
    padding: 70px 0 96px;
    background: #EFF7ED;
    width: calc(100% - 240px);
    min-height: calc(100vh - 70px);
    justify-content: center;
    @media (max-width: 992px){
      width: calc(100% - 180px);
    }
    @media (max-width: 768px){
      width: calc(100% - 160px);
      padding: 70px 0;
    }
    @media(max-width: 600px){
      width: calc(100% - 80px);
      margin-left: auto;
    }
  }

}


</style>
