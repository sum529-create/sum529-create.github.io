<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/AppFooter";
import Header from "./components/AppHeader";
import "./assets/reset.css";
export default {
  components: { Header, Footer },
  name: "App",
};
</script>

<style></style>
