<template>
    <Header />
    <Navbar />
    <router-view />
    
</template>

<script>
import Header from "./components/HeaderVista.vue";
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>