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
}
</style>