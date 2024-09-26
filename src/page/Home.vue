<template>
  <div class="main">
    <app-header @scrollToSection="handleScrollToSection" />
    <app-hero />
    <main-section ref="contentComponent" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppHero from "../components/AppHero";
import MainSection from "../components/MainSection";
export default {
  components: { AppHeader, AppHero, MainSection },
  name: "HOME",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleScrollToSection(sectionId, routePath) {
      if (this.$route.path !== routePath) {
        this.$router.push({
          path: routePath,
          query: { sectionId: sectionId },
        });
      } else {
        this.$nextTick(() => {
          if (this.$refs.contentComponent) {
            this.$refs.contentComponent.handleScrollToSection(
              sectionId,
              routePath
            );
          }
        });
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
  left: calc(50% - 40px);
  transform: translateX(-50%);
  color: #fff;
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
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
