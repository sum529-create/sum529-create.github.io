<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  components: { Header, Footer },
  name: 'App',
  style: require('./assets/reset.css')
}
</script>

<style>
</style>
