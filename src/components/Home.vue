<template>
  <div class="main">
    <hero />
    <main-section/>
    <div :class="{'show':showIcon}" class="arrow-container">
      <span class="arrow-text">Scroll down</span>
      <i class="material-icons double-arrow-icon">keyboard_double_arrow_down</i>
    </div>
  </div>
</template>

<script>
import Hero from "./AppHero.vue";
import MainSection from "./MainSection.vue"
export default {
  components: { Hero, MainSection },
  name: "HOME",
  data() {
    return {
      showIcon: false,
      scrollTimeout: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.startScrollTimeout();
    // setTimeout(() => {
    //   this.showIcon = true;
    // }, 2000);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  },
  methods: {
    handleScroll() {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.showIcon = false;
      this.startScrollTimeout();
    },
    startScrollTimeout() {
      this.scrollTimeout = setTimeout(() => {
        this.showIcon = true;
      }, 2000);
    },
  },
};
</script>

<style>
.main {
  position: relative;
  background-color: #000;
  z-index: -1;
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
