<template>
  <div class="content">
    <div class="main__content" :class="{ 'in-view': inView }" ref="section">
      <div class="section">
        <about-me :in-view="inView" />
      </div>
    </div>
    <left-nav :in-view="inView" />
  </div>
</template>

<script>
import LeftNav from "./LeftNav";
import AboutMe from "./AboutMe";
export default {
  name: "MainSection",
  components: { LeftNav, AboutMe },
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
  },
};
</script>

<style>
.main__content {
  position: relative;
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  transition: bottom 1s ease-out;
  z-index: 10; /* 다른 요소들 위에 표시 */
  display: flex;
  padding-left: 55px;
}
.main__content > * {
  width: 100%;
}
</style>
