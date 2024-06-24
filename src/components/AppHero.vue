<template>
  <div class="content">
    <div class="section hero__section">
      <video class="hero__video-container" autoplay muted loop>
        <source src="../assets/main_video.mp4" type="video/mp4" />
        My browser does not support the video tag.
      </video>
      <div class="hero__headline">
        <p class="hero__headline-txt fs-2" :class="{ 'in-view': roleInView }">
          Front-End Developer
        </p>
      </div>
      <div class="hero__portfolio">
        <div
          class="hero__img-area"
          :class="{ 'in-view': portfolioInView, 'fade-out': fadeOut }"
        >
          <div class="hero__icons">
            <div class="icon icon1"></div>
            <div class="icon icon2"></div>
            <div class="icon icon3"></div>
            <div class="icon icon4"></div>
            <div class="icon icon5"></div>
            <div class="icon icon6"></div>
          </div>
          <img
            src="../assets/developer_img.png"
            alt="개발자 이미지"
            class="hero__portfolio-img"
            ref="portfolioImg"
          />
        </div>
        <h2
          class="hero__portfolio-txt fs-4"
          ref="portfolio"
          :class="{ 'in-view': portfolioInView, 'fade-out': fadeOut }"
        >
          <span v-html="typedText"></span
          ><span class="cursor fs-1" v-if="showCursor && !showCursorFlag"
            >|</span
          >
        </h2>
      </div>
      <div class="hero__middle">
        <div class="hero__middle-main">
          <h1
            class="hero__middle-title fs-3"
            ref="title"
            :class="{ 'in-view': title1InView }"
          >
            안녕하세요!
          </h1>
          <p
            class="hero__middle-subtitle fs-2"
            ref="subtitle"
            :class="{ 'in-view': subtitle1InView }"
          >
            <span class="highlight">안정적이고 효율적인 코드</span>를 작성하는
            개발자를 찾으시나요?
          </p>
          <p
            class="hero__middle-subtitle fs-2"
            ref="subtitle"
            :class="{ 'in-view': subtitle2InView }"
          >
            그렇다면 잘 찾아오셨습니다!
          </p>
        </div>
        <div class="hero__middle-description">
          <p
            class="hero__middle-description-01 highlight-text"
            ref="description1"
            :class="{ 'in-view': description1InView }"
          >
            <i class="material-icons check-icon">check</i>
            지속 가능한 웹 솔루션을 향한 노력
          </p>
          <p
            class="hero__middle-description-02 highlight-text"
            ref="description2"
            :class="{ 'in-view': description2InView }"
          >
            <i class="material-icons check-icon">check</i>
            프로젝트 성공을 위한 열정과 헌신
          </p>
          <p
            class="hero__middle-description-03 highlight-text"
            ref="description3"
            :class="{ 'in-view': description3InView }"
          >
            <i class="material-icons check-icon">check</i>
            팀과의 협업을 통해 더 나은 결과를 창출
          </p>
          <p
            class="hero__middle-description-04 highlight-text"
            ref="description4"
            :class="{ 'in-view': description4InView }"
          >
            <i class="material-icons check-icon">check</i>
            UI/UX 디자인과 개발을 통해 가치를 더하는
          </p>
        </div>
      </div>
      <div class="hero__bottom">
        <div class="hero__bottom-txt">
          <h1
            class="hero__bottom-title fs-3 hero__bottom-back-title fs-5"
            ref="title"
            :class="{ 'in-view': title3InView, 'font-white': !title2InView }"
          >
            FrontEnd-Developer
          </h1>
          <h1
            class="hero__bottom-title fs-3"
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
      description5InView: false,
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

      const titleTrigger = windowHeight * 0.1;
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
  animation: moveUpDown 1s infinite alternate;
}

.icon2 {
  background-position: -96px 0;
  left: 8vh;
  top: -8vh;
  animation: moveUpDownReverse 1s infinite alternate;
}

.icon3 {
  background-position: -192px 0;
  left: 18vh;
  animation: moveUpDownReverse 1s infinite alternate;
}

.icon4 {
  background-position: -288px 0;
  left: 37vh;
  top: 6vh;
  animation: moveUpDown 1s infinite alternate;
}
.icon5 {
  background-position: 0 -96px;
  left: 26vh;
  top: -8vh;
  animation: moveUpDown 1s infinite alternate;
}
.icon6 {
  background-position: -96px -96px;
  left: 33vh;
  top: 1vh;
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
.content {
  position: relative;
  overflow: hidden;
  word-break: keep-all;
}
.section {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 40px;
}
.hero__section {
  height: 200vh;
}
.hero__video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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
  opacity: 0;
  transform: translateX(100%);
  transition: transform 1s, opacity 1s;
}

.hero__headline-txt.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__portfolio {
  position: relative;
  top: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: right;
  align-items: center;
  z-index: 1;
  color: white;
  margin: 0 auto;
  box-sizing: border-box;
}
.hero__img-area {
  opacity: 0;
  transform: translateX(-100px);
  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
}
.hero__img-area.in-view {
  opacity: 1;
  transform: translateX(0);
}
.hero__img-area.fade-out {
  transition-duration: 0.1s;
  opacity: 0;
  transform: translateY(-20px);
}
.hero__icons {
  position: absolute;
  z-index: 2;
}
.hero__portfolio-img {
  width: 40vh;
  margin-right: 20px;
}
.hero__portfolio-txt {
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
.hero__middle,
.hero__bottom {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-weight: 400;
  line-height: 1;
}
.hero__middle-main {
  transform: translateY(50%);
}
.hero__middle-description,
.hero__bottom-description {
  font-size: 1.5em;
  transform: translateY(-50%);
  line-height: 1.5;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}
.hero__bottom {
  z-index: 1;
  text-align: center;
  width: 100%;
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
  color: #3d3d3d;
}
.hero__bottom-back-title.font-white {
  color: #fff;
}

.highlight {
  color: #007dfe !important;
  font-weight: 700;
}
/* 형광펜 효과와 체크 아이콘 등장 애니메이션 CSS */
.highlight-text {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
}

.highlight-text::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 50%;
  transform: translateY(50%);
  width: 0;
  height: 0.4em;
  background-color: yellow;
  z-index: -1;
  opacity: 0.3;
  transition: width 1.3s ease;
}

.check-icon {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.highlight-text.in-view::before {
  width: 100%;
}

.highlight-text.in-view .check-icon {
  opacity: 1;
}
i.material-icons {
  vertical-align: bottom;
}
@media (max-width: 1024px) {
  .icon {
    width: 60px;
    height: 60px;
    background-size: 240px 240px;
  }
  .icon2 {
    background-position: -60px 0;
    left: 6vh;
  }
  .icon3 {
    background-position: -120px 0;
    left: 14vh;
  }
  .icon4 {
    background-position: -180px 0;
    left: 31vh;
  }
  .icon5 {
    background-position: 0 -60px;
    left: 17vh;
  }
  .icon6 {
    background-position: -60px -60px;
    left: 27vh;
  }
  .hero__portfolio-img {
    width: 30vh;
  }
}
@media (max-width: 768px) {
  .hero__headline {
    margin: 0;
  }
  .hero__portfolio {
    flex-direction: column;
    top: 10%;
    text-align: center;
  }
}
</style>
