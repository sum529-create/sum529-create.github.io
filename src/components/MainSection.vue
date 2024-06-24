<template>
  <div class="content">
    <div class="main__content" :class="{ 'in-view': inView }">
      <left-nav :in-view="inView" />
      <div class="section">
        <about-me :in-view="inView" />
      </div>
    </div>
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
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const middleTxtFlag = windowHeight * 0.9;

      if (scrollPosition > middleTxtFlag) {
        this.inView = true;
        console.log("here!!");
      } else {
        this.inView = false;
      }
    },
  },
};
</script>

<style>
.main__content {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  text-align: center;
  transition: bottom 1s ease-out;
  z-index: 10; /* 다른 요소들 위에 표시 */
  display: flex;
}
.main__content > * {
  width: 100%;
}
</style>
