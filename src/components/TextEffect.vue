<template>
  <div class="portfolio" @scroll="handleScroll">
    <div class="txt-effect__highlight">
      <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(6)">
          <h1 class="slide-text fc_999">
              Thank you very much for visiting my portfolio site.
              Thank you very much for visiting my portfolio site.
              Thank you very much for visiting my portfolio site.
              <span class="txt_blue_line fc_txt-dark-sdw">Thank you very much for visiting my portfolio site.</span>
              Thank you very much for visiting my portfolio site.
              Thank you very much for visiting my portfolio site.
              Thank you very much for visiting my portfolio site.
          </h1>
      </div>
      <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(7)">
          <h1 class="slide-text fc_999">
              I'm looking forward to working with you.
              I'm looking forward to working with you.
              I'm looking forward to working with you.
              <span class="txt_yellow_line fc_txt-dark-sdw">I'm looking forward to working with you.</span>
              I'm looking forward to working with you.
              I'm looking forward to working with you.
              I'm looking forward to working with you.
          </h1>
      </div>
    </div>
    <div class="txt-effect__rotate">
      <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(1)">
          <h1 class="slide-text fc_666">
            <span class="fc_cimson fc_txt-dark-sdw">Crafting Dynamic User Experiences.</span>
              Crafting Dynamic User Experiences.
              <span class="fc_cimson fc_txt-dark-sdw">Crafting Dynamic User Experiences.</span>
              Crafting Dynamic User Experiences.
              <span class="fc_cimson fc_txt-dark-sdw">Crafting Dynamic User Experiences.</span>
              Crafting Dynamic User Experiences.
          </h1>
      </div>
      <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(2)">
          <h1 class="slide-text fc_666">
              Empowering Web Interfaces.
              <span class="fc_wildwatermelon fc_txt-dark-sdw">Empowering Web Interfaces.</span>
              Empowering Web Interfaces.
              <span class="fc_wildwatermelon fc_txt-dark-sdw">Empowering Web Interfaces.</span>
              Empowering Web Interfaces.
              <span class="fc_wildwatermelon fc_txt-dark-sdw">Empowering Web Interfaces.</span>
          </h1>
      </div>
      <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(3)">
          <h1 class="slide-text fc_666">
            Proficient in creating responsive web designs.
              Proficient in creating responsive web designs.
              <span class="fc_slateblue fc_txt-dark-sdw">Proficient in creating responsive web designs.</span>
              Proficient in creating responsive web designs.
              Proficient in creating responsive web designs.
              <span class="fc_slateblue fc_txt-dark-sdw">Proficient in creating responsive web designs.</span>
          </h1>
      </div>
      <div class="txt-effect__section slide-section" :class="{ 'even': true }" :style="slideTextStyle(4)">
          <h1 class="slide-text fc_666">
            <span class="fc_springgreen fc_txt-dark-sdw">Excellent problem-solving skills and analytical thinking.</span>
              Excellent problem-solving skills and analytical thinking.
              <span class="fc_springgreen fc_txt-dark-sdw">Excellent problem-solving skills and analytical thinking.</span>
              Excellent problem-solving skills and analytical thinking.
              <span class="fc_springgreen fc_txt-dark-sdw">Excellent problem-solving skills and analytical thinking.</span>
              Excellent problem-solving skills and analytical thinking.
          </h1>
      </div>
      <div class="txt-effect__section slide-section" :class="{ 'odd': true }" :style="slideTextStyle(5)">
          <h1 class="slide-text fc_666">
              Commitment to continuous learning and self-improvement.
              <span class="fc_deepskyblue fc_txt-dark-sdw">Commitment to continuous learning and self-improvement.</span>
              Commitment to continuous learning and self-improvement.
              <span class="fc_deepskyblue fc_txt-dark-sdw">Commitment to continuous learning and self-improvement.</span>
              Commitment to continuous learning and self-improvement.
              <span class="fc_deepskyblue fc_txt-dark-sdw">Commitment to continuous learning and self-improvement.</span>
          </h1>
      </div>
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
  color: #ffffff;
  scroll-behavior: smooth;
  margin-bottom: 30vh;
  perspective: 800px;
  position: relative;
}

.txt-effect__rotate{
  position: relative;
  transform: rotate3d(1, 1, 1, 35deg) translateY(-35%);
  opacity: 0.3;
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
}

.txt-effect__highlight{
  position:relative;
  transform: rotate3d(1, 1, 1, -10deg);
  z-index: 1;
}

.txt-effect__section {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.txt-effect__highlight .txt-effect__section.even{
  margin-bottom: 15vh;
}

h1 {
  font-size: 3rem;
  transition: transform 0.3s ease-out;
  will-change: transform;
  white-space: nowrap;
  height: 100%;
  align-content: center;
}

.txt-effect__rotate .txt-effect__section{
  margin: 10vh 0;
}

.txt-effect__rotate .txt-effect__section.even h1{
  border-top: 1px solid #a5b1c2;
  border-bottom: 1px solid #a5b1c2;
  background:#2f3542;
}

.txt-effect__highlight h1{
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  background-color: rgba(0, 0, 0, 0.8);
}

.txt-effect__highlight .odd h1{
  background: rgba(51, 51, 51, 0.8);
}
.txt-effect__highlight h1 span.txt_blue_line{
  /* text-shadow: -1px 0 #007dfe, 0 1px #007dfe, 1px 0 #007dfe, 0 -1px #007dfe; */
  color: #007dfe; /* 텍스트 색상 */
  text-shadow: 
    1px 1px 0 #FFF, /* 아래 오른쪽 */
   -1px -1px 0 #FFF, /* 위 왼쪽 */
    1px -1px 0 #FFF, /* 아래 왼쪽 */
   -1px 1px 0 #FFF, /* 위 오른쪽 */
    0px 1px 0 #FFF, /* 아래 */
    0px -1px 0 #FFF, /* 위 */
    1px 0px 0 #FFF, /* 오른쪽 */
   -1px 0px 0 #FFF; /* 왼쪽 */
}
.txt-effect__highlight h1 span.txt_yellow_line{
  color: #fdd835;
  text-shadow: 
    2px 2px 0 #000, /* 아래 오른쪽 */
   -2px -2px 0 #000, /* 위 왼쪽 */
    2px -2px 0 #000, /* 아래 왼쪽 */
   -2px 2px 0 #000, /* 위 오른쪽 */
    0px 2px 0 #000, /* 아래 */
    0px -2px 0 #000, /* 위 */
    2px 0px 0 #000, /* 오른쪽 */
   -2px 0px 0 #000; /* 왼쪽 */
}

.fc_txt-dark-sdw{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
