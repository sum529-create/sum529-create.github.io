<template>
  <div class="portfolio" @scroll="handleScroll">
    <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(1)">
        <h1 class="slide-text fc_666">
            Crafting Dynamic User Experiences.
            <span class="yellow-text">Crafting Dynamic User Experiences.</span>
            Crafting Dynamic User Experiences.
            <span class="yellow-text">Crafting Dynamic User Experiences.</span>
            Crafting Dynamic User Experiences.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(2)">
        <h1 class="slide-text fc_666">
            Empowering Web Interfaces.
            <span class="red-text">Empowering Web Interfaces.</span>
            Empowering Web Interfaces.
            <span class="red-text">Empowering Web Interfaces.</span>
            Empowering Web Interfaces.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(3)">
        <h1 class="slide-text fc_666">
            Thank You for watching my portfolio.
            <span class="green-text">Thank You for watching my portfolio.</span>
            Thank You for watching my portfolio.
            <span class="green-text">Thank You for watching my portfolio.</span>
            Thank You for watching my portfolio.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(4)">
        <h1 class="slide-text fc_666">
            Frontend Developer.
            <span class="blue-text">Frontend Developer.</span>
            Frontend Developer.
            <span class="blue-text">Frontend Developer.</span>
            Frontend Developer.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(5)">
        <h1 class="slide-text fc_666">
            Crafting Dynamic User Experiences.
            <span class="yellow-text">Crafting Dynamic User Experiences.</span>
            Crafting Dynamic User Experiences.
            <span class="yellow-text">Crafting Dynamic User Experiences.</span>
            Crafting Dynamic User Experiences.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(6)">
        <h1 class="slide-text fc_666">
            Empowering Web Interfaces.
            <span class="red-text">Empowering Web Interfaces.</span>
            Empowering Web Interfaces.
            <span class="red-text">Empowering Web Interfaces.</span>
            Empowering Web Interfaces.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(7)">
        <h1 class="slide-text fc_666">
            Thank You for watching my portfolio.
            <span class="green-text">Thank You for watching my portfolio.</span>
            Thank You for watching my portfolio.
            <span class="green-text">Thank You for watching my portfolio.</span>
            Thank You for watching my portfolio.
        </h1>
    </div>
    <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(8)">
        <h1 class="slide-text fc_666">
            Frontend Developer.
            <span class="blue-text">Frontend Developer.</span>
            Frontend Developer.
            <span class="blue-text">Frontend Developer.</span>
            Frontend Developer.
        </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    secHeight: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      scrollPosition: 0
    };
  },
  computed: {
    slideTextStyle() {
      return (sectionIndex) => {
        const direction = sectionIndex % 2 === 0 ? -1 : 1;
        return {
          transform: `translateX(${(this.scrollPosition - this.secHeight) * direction * 1}px)` // 더 극적인 움직임을 위해 값 조정
        };
      };
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.portfolio {
  height: 80vh; /* 20vh * 4 섹션 */
  background: #121212;
  color: #ffffff;
  scroll-behavior: smooth;
}

.txt-effect__section {
  height: 10vh; /* 각 섹션의 높이를 20vh로 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow: hidden; */
}

h1 {
  font-size: 3rem;
  transition: transform 0.3s ease-out;
  will-change: transform;
  white-space: nowrap;
}

.yellow-text {
  color: #fdd835; /* 카카오톡 노란색 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.red-text {
  color: #ef5350; /* 빨간색 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.green-text {
  color: #66bb6a; /* 녹색 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.blue-text {
  color: #42a5f5; /* 파란색 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
