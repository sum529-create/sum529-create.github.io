<template>
  <div class="hero">
    <div class="hero__section">
      <video class="hero__video-container" autoplay muted loop>
        <source src="../assets/main_video.mp4" type="video/mp4" />
        My browser does not support the video tag.
      </video>
      <div class="hero__headline">
        <p class="hero__headline-txt" :class="{ 'in-view': roleInView }">
          Front-End Developer
        </p>
      </div>
      <div
        class="hero__icons"
        :class="{ 'in-view': portfolioInView, 'fade-out': fadeOut }"
      >
        <div class="icon icon1"></div>
        <div class="icon icon2"></div>
        <div class="icon icon3"></div>
        <div class="icon icon4"></div>
        <div class="icon icon5"></div>
        <div class="icon icon6"></div>
      </div>
      <div class="hero__portfolio">
        <img
          src="../assets/developer_img.png"
          alt="개발자 이미지"
          class="hero__portfolio-img"
          ref="portfolioImg"
          :class="{ 'in-view': portfolioInView, 'fade-out': fadeOut }"
        />
        <h2
          class="hero__portfolio-txt"
          ref="portfolio"
          :class="{ 'in-view': portfolioInView, 'fade-out': fadeOut }"
        >
          <span v-html="typedText"></span
          ><span class="cursor" v-if="showCursor && !showCursorFlag">|</span>
        </h2>
      </div>
      <div class="hero__middle">
        <h1
          class="hero__middle-title"
          ref="title"
          :class="{ 'in-view': title1InView }"
        >
          안녕하세요!
        </h1>
        <p
          class="hero__middle-subtitle"
          ref="subtitle"
          :class="{ 'in-view': subtitle1InView }"
        >
          <span class="highlight">안정적이고 효율적인 코드</span>를 작성하는
          개발자를 찾으시나요?
        </p>
        <p
          class="hero__middle-subtitle"
          ref="subtitle"
          :class="{ 'in-view': subtitle2InView }"
        >
          그렇다면 잘 찾아오셨습니다!
        </p>
        <div class="hero__middle-description">
          <p
            class="hero__middle-description-01"
            ref="description1"
            :class="{ 'in-view': description1InView }"
          >
            지속 가능한 웹 솔루션을 향한 노력
          </p>
          <p
            class="hero__middle-description-02"
            ref="description2"
            :class="{ 'in-view': description2InView }"
          >
            프로젝트 성공을 위한 열정과 헌신
          </p>
          <p
            class="hero__middle-description-03"
            ref="description3"
            :class="{ 'in-view': description3InView }"
          >
            팀과의 협업을 통해 더 나은 결과를 창출
          </p>
          <p
            class="hero__middle-description-04"
            ref="description4"
            :class="{ 'in-view': description4InView }"
          >
            UI/UX 디자인과 개발을 통해 가치를 더하는
          </p>
        </div>
      </div>
      <div class="hero__bottom">
        <div class="hero__bottom-txt">
          <h1
            class="hero__bottom-title hero__bottom-back-title"
            ref="title"
            :class="{ 'in-view': title3InView, 'font-white': !title2InView }"
          >
            FrontEnd-Developer
          </h1>
          <h1
            class="hero__bottom-title"
            ref="title"
            :class="{ 'in-view': title2InView }"
          >
            프론트엔드 개발자 <span class="highlight">노수민</span>입니다.
          </h1>
          <p
            class="hero__bottom-description"
            ref="subtitle"
            :class="{ 'in-view': description5InView }"
          >
            <span class="highlight">세련된 디자인</span>과
            <span class="highlight">원활한 사용자 경험</span>을<br />
            제공하는 웹 개발을 즐기는 개발자입니다.
          </p>
        </div>
        <img
          src="../assets/sumin_img.png"
          alt="노수민 인물사진"
          class="hero__bottom-img"
          ref="portfolioImg"
          :class="{ 'in-view': description5InView }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHero",
  data() {
    return {
      roleInView: false,
      portfolioInView: false,
      title1InView: false,
      title2InView: false,
      title3InView: false,
      subtitle1InView: false,
      subtitle2InView: false,
      description1InView: false,
      description2InView: false,
      description3InView: false,
      description4InView: false,
      typedText: "",
      showCursor: true,
      showCursorFlag: false,
      fadeOut: false,
    };
  },
  mounted() {
    this.handleScroll(); // Check scroll position on load
    window.addEventListener("scroll", this.handleScroll);
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
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const titleTrigger = windowHeight * 0.05;
      const subtitle1Trigger = windowHeight * 0.2;
      const subtitle2Trigger = windowHeight * 0.3;
      const description1Trigger = windowHeight * 0.4;
      const description2Trigger = windowHeight * 0.5;
      const description3Trigger = windowHeight * 0.6;
      const description4Trigger = windowHeight * 0.7;
      const titlebackTrigger = windowHeight * 0.8;
      const middleTxtFlag = windowHeight * 0.9;

      if (scrollPosition > titleTrigger) {
        this.title1InView = true;
        this.portfolioInView = false;
        this.fadeOut = true;
      } else {
        this.title1InView = false;
        this.portfolioInView = true;
        this.fadeOut = false;
      }

      if (scrollPosition > subtitle1Trigger) {
        this.subtitle1InView = true;
      } else {
        this.subtitle1InView = false;
      }
      if (scrollPosition > subtitle2Trigger) {
        this.subtitle2InView = true;
      } else {
        this.subtitle2InView = false;
      }

      if (scrollPosition > description1Trigger) {
        this.description1InView = true;
        this.title1InView = false;
        this.subtitle1InView = false;
        this.subtitle2InView = false;
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
      if (scrollPosition > description4Trigger) {
        this.description4InView = true;
      } else {
        this.description4InView = false;
      }
      if (scrollPosition > titlebackTrigger) {
        this.title3InView = true;
      } else {
        this.title3InView = false;
      }

      if (scrollPosition > middleTxtFlag) {
        this.title1InView = false;
        this.subtitle1InView = false;
        this.subtitle2InView = false;
        this.description1InView = false;
        this.description2InView = false;
        this.description3InView = false;
        this.description4InView = false;
        this.title2InView = true;
        this.description5InView = true;
      } else {
        this.title2InView = false;
        this.description5InView = false;
      }
    },
    async handleTextAnimation() {
      await this.typeText("SUMIN'S PORTFOLIO", 100);
      this.showCursorFlag = true;
    },
    async typeText(text, delay) {
      this.typedText = "";
      for (let i = 0; i < text.length; i++) {
        await this.delay(delay);
        this.typedText = text.substring(0, i + 1);
        this.typedText = this.typedText.replace(
          "SUMIN'S",
          "<span class='highlight'>SUMIN</span>'S<br>"
        );
      }
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style>
.icon {
  position: absolute;
  width: 96px;
  height: 96px;
  background-image: url("../assets/programmer-icon-flat.png");
  background-size: 384px 384px;
}
.icon1 {
  background-position: 0 0;
  top: 40vh;
  animation: moveUpDown 1s infinite alternate;
}

.icon2 {
  background-position: -96px 0;
  left: 12vh;
  top: 33vh;
  animation: moveUpDownReverse 1s infinite alternate;
}

.icon3 {
  background-position: -192px 0;
  left: 20vh;
  top: 42vh;
  animation: moveUpDownReverse 1s infinite alternate;
}

.icon4 {
  background-position: -288px 0;
  left: 37vh;
  top: 45vh;
  animation: moveUpDown 1s infinite alternate;
}
.icon5 {
  background-position: 0 -96px;
  left: 22vh;
  top: 28vh;
  animation: moveUpDown 1s infinite alternate;
}
.icon6 {
  background-position: -96px -96px;
  left: 31vh;
  top: 36vh;
  animation: moveUpDownReverse 1s infinite alternate;
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0); /* 아이콘 초기 위치 */
  }
  100% {
    transform: translateY(20px); /* 아이콘 위아래로 이동할 거리 */
  }
}
@keyframes moveUpDownReverse {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.hero {
  position: relative;
  overflow: hidden;
}
.hero__section {
  height: 200vh;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1028px;
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
.hero__headline {
  text-align: left;
  color: white;
  position: relative;
  margin: 80px auto 0;
  font-weight: 500;
}
.hero__headline-txt {
  border-bottom: 1px solid #fff;
  font-size: 2em;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 1s, opacity 1s;
}

.hero__headline-txt.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__icons {
  position: absolute;
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}
.hero__icons.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__icons.fade-out {
  transition-duration: 0.1s;
  opacity: 0;
  transform: translateY(-20px);
}
.hero__portfolio {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1028px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  align-items: center;
  z-index: 1;
  color: white;
  margin: 0 auto;
  box-sizing: border-box;
}
.hero__portfolio-img {
  height: 40vh;
  margin-right: 20px;
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}
.hero__portfolio-img.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__portfolio-img.fade-out {
  transition-duration: 0.1s;
  opacity: 0;
  transform: translateY(-20px);
}
.hero__portfolio-txt {
  font-size: 4em;
  margin: 0;
  white-space: pre;
  opacity: 0;
}
.hero__portfolio-txt.in-view {
  opacity: 1;
}
.hero__portfolio-txt.fade-out {
  transition-duration: 0.1s;
  opacity: 0;
}
.cursor {
  font-weight: 100;
  font-size: 1em;
  color: white;
  animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.1%,
  100% {
    opacity: 0;
  }
}
.hero__middle {
  position: sticky;
  top: 40%;
  transform: translateY(-40%);
  z-index: 1;
  text-align: center;
  color: white;
}

.hero__middle-title,
.hero__middle-subtitle,
.hero__middle-description-01,
.hero__middle-description-02,
.hero__middle-description-03,
.hero__middle-description-04,
.hero__bottom-title,
.hero__bottom-description {
  margin-bottom: 1.5em;
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  transform: translateY(50px);
}
.hero__bottom-title,
.hero__middle-title {
  font-size: 3em;
  font-weight: 400;
  line-height: 1;
}
.hero__middle-subtitle {
  font-size: 2em;
}

.hero__middle-description,
.hero__bottom-description {
  font-size: 1.5em;
  transform: translateY(50%);
  line-height: 1.5;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}
.hero__bottom {
  position: absolute;
  z-index: 1;
  bottom: 0px;
  text-align: center;
  width: 100%;
  max-width: 1028px;
  color: white;
}
.hero__bottom-img {
  height: 50vh;
  opacity: 0;
  transform: translateY(100px);
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}
.hero__bottom-img.in-view {
  opacity: 1;
  transform: translateY(0);
}
.hero__bottom-back-title {
  margin-bottom: -25px;
  font-size: 5em;
  color: #3d3d3d;
}
.hero__bottom-back-title.font-white {
  color: #fff;
}

.highlight {
  color: #007dfe !important;
  font-weight: 700;
}
</style>
