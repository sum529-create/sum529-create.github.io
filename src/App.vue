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
import "./assets/css/reset.css";
import "./assets/css/common.css";
export default {
  components: { Header, Footer },
  name: "App",
};
</script>

<style></style>
