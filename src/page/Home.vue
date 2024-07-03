<template>
  <div class="main">
    <app-hero />
    <main-section/>
    <div :class="{'show':showIcon && !showEffectBtn && !showMenuFlag}" class="arrow-container">
      <span class="arrow-text">Scroll down</span>
      <i class="material-icons double-arrow-icon">keyboard_double_arrow_down</i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHero from "../components/AppHero";
import MainSection from "../components/MainSection"
export default {
  components: { AppHero, MainSection },
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
