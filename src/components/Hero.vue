<template>
  <div class="hero">
    <div class="hero__section">
      <video class="hero__video-container" autoplay muted loop>
        <source src="../assets/main_video.mp4" type="video/mp4">
        My browser does not support the video tag.
      </video>
      <div class="hero__headline">
        <p class="hero__headline-txt" :class="{ 'in-view': roleInView }">Front-End Developer</p>
      </div>
      <div class="hero__portfolio">
        <h2 class="hero__portfolio-txt" ref="portfolio" :class="{ 'in-view': portfolioInView }" v-show="portfolioInView">
          <span v-html="typedText"></span><span class="cursor" v-if="showCursor && !showCursorFlag">|</span>
        </h2>
      </div>
      <div class="hero__middle">
        <h1 class="hero__middle-title" ref="title" :class="{ 'in-view': titleInView }">Welcome</h1>
        <p class="hero__middle-subtitle" ref="subtitle" :class="{ 'in-view': subtitleInView }">Scroll down to see more</p>
        <div class="hero__middle-description">
          <p class="hero__middle-description-01" ref="description1" :class="{ 'in-view': description1InView }">Discover my work and projects</p>
          <p class="hero__middle-description-02" ref="description2" :class="{ 'in-view': description2InView }">Discover my work and projects</p>
          <p class="hero__middle-description-03" ref="description3" :class="{ 'in-view': description3InView }">Discover my work and projects</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      roleInView: false,
      portfolioInView: false,
      titleInView: false,
      subtitleInView: false,
      description1InView: false,
      description2InView: false,
      description3InView: false,
      typedText: '',
      showCursor: true,
      showCursorFlag: false,
    };
  },
  mounted() {
    this.handleScroll(); // Check scroll position on load
    window.addEventListener('scroll', this.handleScroll);
    this.handleTextAnimation(); // Call the method to animate text typing
    setTimeout(() => {
      this.roleInView = true; // Trigger the animation on load
      this.portfolioInView = true; // Trigger the animation on load
    }, 500); 

    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const titleTrigger = windowHeight * 0.2;
      const subtitleTrigger = windowHeight * 0.3;
      const description1Trigger = windowHeight * 0.5;
      const description2Trigger = windowHeight * 0.55;
      const description3Trigger = windowHeight * 0.6;
      const middleTxtFlag = windowHeight * 0.8;

      if (scrollPosition > titleTrigger) {
        this.titleInView = true;
        this.portfolioInView = false;
      } else {
        this.titleInView = false;
        this.portfolioInView = true;
      }

      if (scrollPosition > subtitleTrigger) {
        this.subtitleInView = true;
      } else {
        this.subtitleInView = false;
      }

      if (scrollPosition > description1Trigger) {
        this.description1InView = true;
      } else {
        this.description1InView = false;
      }
      if (scrollPosition > description2Trigger) {
        this.description2InView = true;
      } else {
        this.description2InView = false;
      }
      if (scrollPosition > description3Trigger) {
        this.description3InView = true;
      } else {
        this.description3InView = false;
      }

      if (scrollPosition > middleTxtFlag) {
        this.titleInView = false;
        this.subtitleInView = false;
        this.description1InView = false;
        this.description2InView = false;
        this.description3InView = false;
      }
    },
    async handleTextAnimation() {
      await this.typeText("SUMIN'S PORTFOLIO", 100);
      this.showCursorFlag = true;
    },
    async typeText(text, delay) {
      this.typedText = '';
      for (let i = 0; i < text.length; i++) {
        await this.delay(delay);
        this.typedText = text.substring(0, i + 1);
        this.typedText = this.typedText.replace("SUMIN'S", "<span class='highlight'>SUMIN</span>'S<br>");
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
};
</script>

<style>
.hero {
  position: relative;
}
.hero__section{
  height: 200vh;
  overflow: hidden;
  margin:0 auto;
  max-width: 1140px;
  width: calc(100% - 40px);
}
.hero__video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%) grayscale(30%);
}
.hero__headline{
  text-align: left;
  color: white;
  position: relative;
  margin: 80px auto 0;
  font-weight: 500;
}
.hero__headline-txt {
  border-bottom: 1px solid #FFF;
  font-size: 2em;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 1s, opacity 1s;
}

.hero__headline-txt.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__portfolio {
  position: sticky;
  top: 30%;
  display: flex;
  justify-content: right;
  text-align: right;
  align-items: center;
  z-index: 1;
  color: white;
}
.hero__portfolio-txt {
  font-size: 4em;
  margin: 0;
  white-space: pre;
}
.cursor {
  font-weight: 100;
  font-size: 1em;
  color: white;
  animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  50.1%, 100% {
    opacity: 0;
  }
}
.hero__middle {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center;
  color: white;
}

.highlight {
  color: #4cd137 !important;
}

.hero__middle-title,
.hero__middle-subtitle,
.hero__middle-description-01,
.hero__middle-description-02,
.hero__middle-description-03
 {
   margin-bottom: 0.5em;
   transition: transform 0.5s, opacity 0.5s;
   opacity: 0;
   transform: translateY(50px);
  }
.hero__middle-title{
  font-size: 3em;
}

.hero__middle-subtitle {
  font-size: 2em;
}

.hero__middle-description {
  font-size: 1.5em;
  transform: translateY(100%);
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
