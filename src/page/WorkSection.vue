<template>
  <div class="content main__content">
    <div class="curtain" :class="{ open: isCurtainOpen }">
      <div class="curtain-inner"></div>
    </div>
    <div class="section" ref="sectionRef">
      <div class="work__main_cont">
        <div class="work__main_cont-wrapper">
          <h1 class="fs-6 fc_white fade-in-pulse fc_keycolor">
            MY<br/>PROJECTS
          </h1>
          <img class="fade-in-slide-up" src="../assets/img/projects/work_main_img.png" alt="Projects 페이지 인트로 이미지">
        </div>
      </div>
      <div class="work__intro-wrapper fc_white lh2 mb60">
        <!-- <h1 class="fs-2 fw450" id="line1"></h1> -->
        <wave-text text="제가_작업한_프로젝트들을_보여드릴게요!"/>
        <p class="fs-1-5 fw450" id="line1"></p>
        <p class="fs-1-5 fw450" id="line2"></p>
        <p class="fs-1-5 fw450" id="line3"></p>
      </div>
      <div class="container" ref="container">
        <div class="box" ref="box1">
          <work-box/>
        </div>
        <div class="box" ref="box2">
          <work-box/>
        </div>
        <div class="box" ref="box3">
          <work-box/>
        </div>
        <div class="box" ref="box4">
          <work-box/>
        </div>
        <div class="box" ref="box5">
          <work-box/>
        </div>
      </div>
    </div>
    <text-effect :secHeight="secHeight"/>
    <div class="section">
      <div class="contact-header header-title">
        <h2 class="fs-2-5">Contact Me</h2>
        <p class="fs-1-125">Feel free to reach out through any of the following channels.</p>
      </div>
      <div class="contact-content">
        <div class="contact-card">
          <a href="tel:+01049221955" target="_blank" class="contact-link">
            <div class="contact-image">
              <img src="https://via.placeholder.com/400x400?text=Message+Me" alt="Message Me">
            </div>
            <div class="contact-info">
              <h3>Message Me</h3>
              <p>Drop me a message on any platform.</p>
            </div>
          </a>
        </div>
        <div class="contact-card">
          <a href="https://github.com/sum529-create" target="_blank" class="contact-link">
            <div class="contact-image">
              <img src="https://via.placeholder.com/400x400?text=Check+My+GitHub" alt="Check My GitHub">
            </div>
            <div class="contact-info">
              <h3>Check My GitHub</h3>
              <p>Explore my GitHub repositories and projects.</p>
            </div>
          </a>
        </div>
        <div class="contact-card">
          <a href="mailto:nosumin29@gmail.com" class="contact-link">
            <div class="contact-image">
              <img src="https://via.placeholder.com/400x400?text=Send+an+Email" alt="Send an Email">
            </div>
            <div class="contact-info">
              <h3>Send an Email</h3>
              <p>Send me an email for inquiries and collaborations.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <app-footer/>
    <left-nav :in-view="true" />
  </div>
</template>

<script>
import LeftNav from "../components/LeftNav";
import WaveText from '../components/WaveText';
import WorkBox from '../components/WorkBox';
import AppFooter from "../components/AppFooter";
import { mapActions } from "vuex";
import TextEffect from '../components/TextEffect';
export default {
  name: "WorkSection",
  components: { LeftNav, AppFooter, WorkBox, WaveText, TextEffect },
  data() {
    return {
      isCurtainOpen: false,  // 커튼 열림 상태를 제어하는 데이터
      texts: [
        '여기서는 제 손길이 닿은 프로젝트들을 한눈에 볼 수 있습니다.',
        '각 프로젝트는 새로운 도전을 시도하고, 문제를 해결하기 위해 고민한 결과물입니다.',
        '저의 아이디어가 현실로 구현된 결과물로, 다양한 기술과 도전을 담고 있습니다.'
      ],
      typingSpeed: 30, // 타이핑 속도 (밀리초 단위)
      currentTextIndex: 0, // 현재 텍스트 인덱스
      displayedText: ['', '', ''],
      secHeight: 0,
    };
  },
  mounted() {
    this.setupIntersectionObserver();
    this.addScrollListener();
    this.setInitialView();
    this.typeWriter();
    setTimeout(() => {
      this.openCurtain();  // 커튼 애니메이션 시작
    }, 100);
    this.updateShowEffectBtn(false);
    const section = this.$refs.sectionRef;
    if (section) {
      this.secHeight = section.offsetHeight;
    }
  },
  watch: {
    secHeight(newData) {
      this.secHeight = newData
    }
  },
  methods: {
    ...mapActions(['updateShowEffectBtn']),
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px 0px -25% 0px',  // 박스의 중앙이 뷰포트의 중앙에 위치할 때를 감지
        threshold: 0.5,  // 요소의 50%가 교차할 때 콜백 호출
      };

      const observer = new IntersectionObserver(this.handleIntersection, options);

      this.$refs.box1 && observer.observe(this.$refs.box1);
      this.$refs.box2 && observer.observe(this.$refs.box2);
      this.$refs.box3 && observer.observe(this.$refs.box3);
      this.$refs.box4 && observer.observe(this.$refs.box4);
      this.$refs.box5 && observer.observe(this.$refs.box5);
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    addScrollListener() {
      let isScrolling = false;

      const handleWheel = (event) => {
        if (isScrolling) return;

        isScrolling = true;

        // 스크롤 방향에 따라 이동할 박스를 결정
        const delta = event.deltaY;
        if (delta > 0) {
          this.scrollToNextSection();
        } else if (delta < 0) {
          this.scrollToPreviousSection();
        }

        // 400ms 후에 스크롤이 완료되면 다시 스크롤을 허용합니다.
        setTimeout(() => {
          isScrolling = false;
        }, 400);  // 400ms 동안의 스크롤 이벤트를 합쳐서 하나의 스크롤 이벤트로 처리
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
    },
    scrollToNextSection() {
      const currentBox = document.querySelector('.box.in-view');
      const nextBox = currentBox ? currentBox.nextElementSibling : null;
      if (nextBox && nextBox.classList.contains('box')) {
        nextBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    scrollToPreviousSection() {
      const currentBox = document.querySelector('.box.in-view');
      const prevBox = currentBox ? currentBox.previousElementSibling : null;
      if (prevBox && prevBox.classList.contains('box')) {
        prevBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    setInitialView() {
      const initialBox = this.$refs.box1;
      if (initialBox) {
        // initialBox.scrollIntoView({ behavior: 'auto', block: 'center' });
        initialBox.classList.add('in-view');
      }
    },
    openCurtain() {
      this.isCurtainOpen = true;
    },
    typeWriter() {
      if (this.currentTextIndex < this.texts.length) {
        this.typingEffect(this.texts[this.currentTextIndex], 0).then(() => {
          this.currentTextIndex++;
          this.typeWriter(); // 다음 문장 타이핑
        });
      } else {
        // 모든 텍스트가 타이핑 완료되면 커서 제거
        this.removeCursor();
      }
    },
    typingEffect(text, index) {
      return new Promise((resolve) => {
        if (index < text.length) {
          this.displayedText[this.currentTextIndex] += text.charAt(index);
          this.updateText();
          setTimeout(() => {
            this.typingEffect(text, index + 1).then(resolve);
          }, this.typingSpeed);
        } else {
          resolve();
        }
      });
    },
    updateText() {
      for (let i = 0; i < this.displayedText.length; i++) {
        document.getElementById(`line${i + 1}`).innerHTML = this.displayedText[i] + (i === this.currentTextIndex ? '<span class="cursor"></span>' : '');
      }
    },
    removeCursor() {
      for (let i = 0; i < this.displayedText.length; i++) {
        document.getElementById(`line${i + 1}`).innerHTML = this.displayedText[i];
      }
    },
  },
};
</script>

<style scoped>

.curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(233,236,241, 0.8);
  z-index: 96;
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 1s ease-out;
}

.curtain.open {
  transform: scaleX(0);
}

.curtain-inner {
  width: 200%;
  height: 100%;
  background: rgba(233,236,241, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 96;
}

.work__main_cont{
  position: relative;
  height: 50vh;
}

.work__main_cont .work__main_cont-wrapper{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  gap: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  align-items: center;
}

.work__main_cont .work__main_cont-wrapper h1{
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
  text-shadow: 2px 2px 4px rgba(233,236,241, 0.5);
}
.work__main_cont img{
  width: 30%;
}

.work__main_cont h1{
  flex:1;
}
.work__intro-wrapper{
  position: relative;
  width: 100%;
  min-height: 150px;
  text-align: left
}
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  scroll-snap-type: y mandatory;
  overflow-y: hidden;
  scroll-behavior: smooth;
  width: 100%;
  align-items: center;
  margin: 10vh 0;
}

.box {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transform: translateY(20px);
  scroll-snap-align: center;
  position: relative;
  max-width: 800px;
  box-sizing: border-box;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}


.contact-header h2 {
      font-size: 2.5rem; /* Larger text for the main header */
      color: #fdd835; /* Instagram-like yellow color */
      margin-bottom: 10px; /* Space below the header */
    }

    .contact-header p {
      font-size: 1.125rem; /* Slightly larger text for the description */
      color: #e0e0e0; /* Light grey text for better readability */
      margin-bottom: 40px; /* Space below the description */
    }

    .contact-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid layout */
      gap: 20px; /* Space between grid items */
    }

    .contact-card {
      background: #2c2c2c; /* Dark background for the card */
      border-radius: 10px; /* Rounded corners for the card */
      overflow: hidden; /* Hide overflow for rounded corners */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Subtle shadow effect */
      transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
    }

    .contact-card:hover {
      transform: scale(1.05); /* Slightly enlarge on hover */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7); /* More prominent shadow on hover */
    }

    .contact-link {
      text-decoration: none; /* Remove underline from links */
      color: inherit; /* Inherit color from parent */
    }

    .contact-image img {
      width: 100%; /* Make image responsive */
      height: auto; /* Maintain aspect ratio */
    }

    .contact-info {
      padding: 20px; /* Padding inside the card */
    }

    .contact-info h3 {
      font-size: 1.5rem; /* Slightly larger font size for the title */
      color: #ffffff; /* White text color */
      margin-bottom: 10px; /* Space between title and description */
    }

    .contact-info p {
      font-size: 1rem; /* Normal text size for description */
      color: #b0b0b0; /* Light grey text for description */
    }
</style>
