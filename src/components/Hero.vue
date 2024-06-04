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
        <h2 class="hero__portfolio-txt" ref="portfolio" :class="{ 'in-view': portfolioInView }" v-show="!titleInView" v-html="typedText"></h2>
      </div>
      <div class="hero__content">
        <h1 class="hero__content-title" ref="title" :class="{ 'in-view': titleInView }">Welcome</h1>
        <p class="hero__content-subtitle" ref="subtitle" :class="{ 'in-view': subtitleInView }">Scroll down to see more</p>
        <p class="hero__content-description" ref="description" :class="{ 'in-view': descriptionInView }">Discover my work and projects</p>
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
      descriptionInView: false,
      typedText: '',
    };
  },
  mounted() {
    this.handleScroll(); // Check scroll position on load
    window.addEventListener('scroll', this.handleScroll);
    this.handleTextAnimation(); // Call the method to animate text typing
    setTimeout(() => {
      this.roleInView = true; // Trigger the animation on load
      this.portfolioInView = true; // Trigger the animation on load
    }, 500); // Adjust the delay as needed
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const titleTrigger = windowHeight * 0.3;
      const subtitleTrigger = windowHeight * 0.5;
      const descriptionTrigger = windowHeight * 0.7;

      if (scrollPosition > titleTrigger) {
        this.titleInView = true;
      } else {
        this.titleInView = false;
      }

      if (scrollPosition > subtitleTrigger) {
        this.subtitleInView = true;
      } else {
        this.subtitleInView = false;
      }

      if (scrollPosition > descriptionTrigger) {
        this.descriptionInView = true;
      } else {
        this.descriptionInView = false;
      }
    },
    async handleTextAnimation() {
      await this.typeText("SUMIN'S PORTFOLIO", 'portfolioInView', 100);
    },
    async typeText(text, prop, delay) {
      this.typedText = '';
      for (let i = 0; i < text.length; i++) {
        await this.delay(delay);
        this.typedText = text.substring(0, i + 1);
        this.typedText = this.typedText.replace("SUMIN'S", "SUMIN'S<br>");
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
};
</script>

<style scoped>
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
}

.hero__content {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center;
  color: white;
}

.hero__content-title,
.hero__content-subtitle,
.hero__content-description {
  font-size: 3em;
  margin-bottom: 0.5em;
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  transform: translateY(50px);
}

.hero__content-subtitle {
  font-size: 2em;
}

.hero__content-description {
  font-size: 1.5em;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
