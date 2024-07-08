<template>
  <div class="main">
    <app-hero />
    <main-section/>
  </div>
</template>

<script>
import AppHero from "../components/AppHero";
import MainSection from "../components/MainSection"
export default {
  components: { AppHero, MainSection },
  name: "HOME",
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
.main {
  position: relative;
}
.arrow-container {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #FFF;
  z-index: 999;
  animation: upDown 1s infinite alternate;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center;
}
.arrow-container.show {
  opacity: 1;
}

.double-arrow-icon {
  display: block;
  font-size: 24px;
}

.arrow-text {
  display: block;
  font-size: 16px;
  margin-top: 5px;
}

@keyframes upDown {
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -10px);
  }
}

</style>
