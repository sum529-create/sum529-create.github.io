<template>
  <div id="app">
    <router-view />
    <div :class="{'show':showIcon && !showEffectBtn && !showMenuFlag}" class="arrow-container">
      <span class="arrow-text">Scroll down</span>
      <i class="material-icons double-arrow-icon">keyboard_double_arrow_down</i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import "./assets/css/reset.css";
import "./assets/css/common.css";
export default {
  name: "App",
  data() {
    return {
      showIcon: false,
      scrollTimeout: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.startScrollTimeout();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  },
  computed: {
    ...mapGetters(['getShowEffectBtn', 'getShowMenuFlag']),
    showEffectBtn() {
      return this.getShowEffectBtn;
    },
    showMenuFlag() {
      return this.getShowMenuFlag;
    }
  }, 
  methods: {
    handleScroll() {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.showIcon = false;
      this.startScrollTimeout();

      this.checkIfAtBottom();
    },
    startScrollTimeout() {
      this.scrollTimeout = setTimeout(() => {
        this.showIcon = true;
        this.checkIfAtBottom();
      }, 2000);
    },
    checkIfAtBottom() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition + windowHeight >= documentHeight) {
        this.showIcon = false;
      }
    },
  },
};
</script>

<style></style>
