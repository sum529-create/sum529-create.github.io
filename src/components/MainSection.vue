<template>
  <div class="content">
    <div class="main__content" :class="{ 'in-view': inView }" ref="section">
      <div class="section">
        <h2 class="header-title fc_subcolor">About Me</h2>
        <about-me :in-view="inView" ref="contentComponent" />
      </div>
      <app-footer />
    </div>
    <popup-card />
    <left-nav :in-view="inView" @scrollToSection="handleScrollToSection" />
  </div>
</template>

<script>
import LeftNav from "./LeftNav";
import AboutMe from "./AboutMe";
import AppFooter from "./AppFooter";
import PopupCard from "./PopupCard";
export default {
  name: "MainSection",
  components: { LeftNav, AboutMe, AppFooter, PopupCard },
  data() {
    return {
      inView: false,
    };
  },
  mounted() {
    this.createObserver();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    createObserver() {
      const options = {
        root: null, // viewport를 기준으로 함
        rootMargin: "0px",
        threshold: 0.2,
      };

      this.observer = new IntersectionObserver(this.handleIntersect, options);
      this.observer.observe(this.$refs.section);
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        this.inView = entry.isIntersecting;
      });
    },
    handleScrollToSection(sectionId, routePath) {
      if (this.$route.path !== routePath) {
        /*this.$router.push(routePath).then(() => {
          this.$nextTick(() => {
            if (this.$refs.contentComponent) {
              this.$refs.contentComponent.scrollToSection(sectionId);
            }
          });
        });*/
        this.$router.push({
          path: routePath,
          query: { sectionId: sectionId },
        });
      } else {
        this.$nextTick(() => {
          if (this.$refs.contentComponent) {
            this.$refs.contentComponent.scrollToSection(sectionId);
          }
        });
      }
    },
  },
};
</script>

<style>
.main__content {
  background-image: url("../assets/img/aboutMe/main_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  overflow: hidden;
  color: #fff;
  text-align: center;
  z-index: 10; /* 다른 요소들 위에 표시 */
  display: flex;
  padding-left: 55px;
  flex-direction: column;
  justify-content: center;
}
.main__content > * {
  width: 100%;
}

@media (max-width: 768px) {
  .main__content {
    padding-left: 0;
  }
}
</style>
