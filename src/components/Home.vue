<template>
  <div class="main">
    <hero/>
  </div>
</template>

<script>
import Hero from './Hero.vue'
export default {
  components: { Hero },
  name: "HOME"
}
</script>

<style>
.main{
  position: relative;
    max-width: 1280px;
    margin: 0 auto;
}
</style>