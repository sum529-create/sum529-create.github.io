<template>
  <div class="main">
    <hero />
    <main-section/>
  </div>
</template>

<script>
import Hero from "./AppHero.vue";
import MainSection from "./MainSection.vue"
export default {
  components: { Hero, MainSection },
  name: "HOME",
};
</script>

<style>
.main {
  position: relative;
}
</style>
