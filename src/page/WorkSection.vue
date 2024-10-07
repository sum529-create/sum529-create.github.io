<template>
  <div class="content main__content">
    <div class="curtain" :class="{ open: isCurtainOpen }">
      <div class="curtain-inner"></div>
    </div>
    <div
      class="section work__section"
      ref="sectionRef"
      id="projects"
      @scroll="handleScroll"
    >
      <div class="work__main slider">
        <div class="work__main_cont">
          <div class="work__main_cont-wrapper">
            <h1 class="fs-6 fade-in-pulse fc_keycolor fc_txt-dark-sdw">
              MY<br />PROJECTS
            </h1>
            <img
              class="fade-in-slide-up"
              src="../assets/img/projects/work_main_img.png"
              alt="Projects 페이지 인트로 이미지"
            />
          </div>
        </div>
        <div class="work__main_text fc_white lh2 mb60">
          <!-- <h1 class="fs-2 fw450" id="line1"></h1> -->
          <wave-text text="제가_작업한_프로젝트들을_보여드릴게요!" />
          <p class="fs-1-5 fw450" id="line1"></p>
          <p class="fs-1-5 fw450" id="line2"></p>
          <p class="fs-1-5 fw450" id="line3"></p>
        </div>
      </div>
      <div class="box slider">
        <work-box :project="projectProps[0]" />
      </div>
      <div class="box slider">
        <work-box :project="projectProps[1]" />
      </div>
      <div class="box slider">
        <work-box :project="projectProps[2]" />
      </div>
      <div class="box slider">
        <work-box :project="projectProps[3]" />
      </div>
      <div class="box slider">
        <work-box :project="projectProps[4]" />
      </div>
    </div>
    <div ref="textEffectRef">
      <text-effect :secHeight="secHeight" />
    </div>
    <div class="section about_me__section" id="contact">
      <div class="contact-header">
        <h2 class="header-title fc_keycolor mb10">
          <i class="material-icons link-icon mr5 fs-1">link</i>
          Contact Me
        </h2>
        <p class="fs-1-5">
          성능 최적화와 접근성을 고려한 코딩을 실천하며, 꾸준히 발전하는
          <span class="fc_subcolor">프론트엔드 개발자</span>가 되겠습니다.<br />
          <span class="fc_subcolor">아래 영역 ⬇︎</span>을 클릭하시면 저와
          연락하실 수 있습니다.<br />
          언제든지 연락주세요! 빠른 시일 내에 답해드리겠습니다.🤩
        </p>
      </div>
      <div class="contact-content">
        <div class="contact-card">
          <a href="tel:+01049221955" target="_blank" class="contact-link">
            <div class="contact-image">
              <img
                src="../assets/img/myPhoto/contact_me_01.jpeg"
                alt="Message Me"
              />
              <!-- <img src="https://via.placeholder.com/400x400?text=Message+Me" alt="Message Me"> -->
            </div>
            <div class="contact-info">
              <h3>
                <i class="material-icons phone_iphone-icon mr5">phone_iphone</i>
                Message Me
              </h3>
              <p class="fs-1-125 lh1-25">Drop me a message on any platform.</p>
            </div>
          </a>
        </div>
        <div class="contact-card">
          <a
            href="https://github.com/sum529-create"
            target="_blank"
            class="contact-link"
          >
            <div class="contact-image">
              <img
                src="../assets/img/myPhoto/contact_me_02.jpeg"
                alt="Check My GitHub"
              />
              <!-- <img src="https://via.placeholder.com/400x400?text=Check+My+GitHub" alt="Check My GitHub"> -->
            </div>
            <div class="contact-info">
              <h3>
                <i class="fab fa-github"></i>
                Check My GitHub
              </h3>
              <p class="fs-1-125 lh1-25">
                Explore my GitHub repositories and projects.
              </p>
            </div>
          </a>
        </div>
        <div class="contact-card">
          <a href="mailto:nosumin29@gmail.com" class="contact-link">
            <div class="contact-image">
              <img
                src="../assets/img/myPhoto/contact_me_05.jpeg"
                alt="Send an Email"
              />
              <!-- <img src="https://via.placeholder.com/400x400?text=Send+an+Email" alt="Send an Email"> -->
            </div>
            <div class="contact-info">
              <h3>
                <i class="material-icons mail-icon mr5">mail</i>
                Send an Email
              </h3>
              <p class="fs-1-125 lh1-25">
                Send me an email for inquiries and collaborations.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <app-footer />
    <left-nav :in-view="true" @scrollToSection="handleScrollToSection" />
  </div>
</template>

<script>
import LeftNav from "../components/LeftNav";
import WaveText from "../components/WaveText";
import WorkBox from "../components/WorkBox";
import AppFooter from "../components/AppFooter";
import { mapActions } from "vuex";
import TextEffect from "../components/TextEffect";
export default {
  name: "WorkSection",
  components: { LeftNav, AppFooter, WorkBox, WaveText, TextEffect },
  data() {
    return {
      isCurtainOpen: false, // 커튼 열림 상태를 제어하는 데이터
      texts: [
        "여기서는 제 손길이 닿은 프로젝트들을 한눈에 볼 수 있습니다.",
        "각 프로젝트는 새로운 도전을 시도하고, 문제를 해결하기 위해 고민한 결과물입니다.",
        "저의 아이디어가 현실로 구현된 결과물로, 다양한 기술과 도전을 담고 있습니다.",
      ],
      typingSpeed: 30, // 타이핑 속도 (밀리초 단위)
      currentTextIndex: 0, // 현재 텍스트 인덱스
      displayedText: ["", "", ""],
      secHeight: 0,
      isScrollingToNext: true,
      windowWidth: window.innerWidth,
      projectProps: [
        {
          title: "Sumin's Portfolio",
          prjImg: "project_01.png",
          prdLan: [
            "Vue",
            "Vue-Router",
            "Vuex",
            "Html",
            "JavaScript",
            "Babel",
            "Node.js",
            "Css",
          ],
          gitHubUrl: "https://github.com/sum529-create",
          webLink: "https://sum529-create.github.io/",
          desTxt: [
            "프론트엔드 3년차 개발자 노수민의 포트폴리오입니다.",
            "웹 개발 능력과 기술을 보여주기 위한 용도로 제작되었습니다",
            "동적이고 사용자 친화적인 인터페이스를 만들어 제 작업과 기술력을 효과적으로 보여주도록 하였습니다.",
            "3년차 프론트엔드 개발자로서 다루었던 Vue.js를 활용하여 제작하였습니다.",
          ],
        },
        {
          title: "Echo-Wave",
          prjImg: "project_02.png",
          prdLan: [
            "Vue",
            "Vue-Router",
            "Vuex",
            "Html",
            "JavaScript",
            "Vite",
            "Firebase",
            "Node.js",
            "Css",
          ],
          gitHubUrl: "https://github.com/sum529-create/echo-wave",
          webLink: "https://echo-wave-f4948.web.app/",
          desTxt: [
            "Vue를 기반으로 한 프로젝트이며, 실시간 채팅 웹입니다.",
            "메시지가 파도처럼 전달되어 반향하는 느낌을 주는 이름으로 설정하였습니다.",
            "Firebase Authentication을 활용하여 로그인, 회원가입, 비밀번호 찾기 기능을 추가하였습니다.",
            "Firebase Firestore를 사용하여 채팅 메시지를 저장하고 실시간으로 업데이트합니다.",
            "사용자의 프로필을 설정하여 자신의 표현 할 수 있으며, 커뮤니케이션의 효율성을 높였습니다.",
            "기본 프로필을 제공하고, 프로필 삭제 기능을 통해 부담없이 프로필을 설정 할 수 있습니다.",
            "채팅방의 제목을 설정 할 수 있고, 2~4명 사이의 유저들과 실시간으로 단체 그룹 채팅을 주고 받을 수 있는 채팅룸을 생성할 수 있습니다.",
            "유저가 참여한 채팅방 당 읽지 않은 메시지 카운트를 확인할 수 있으며, 전체 채팅방의 읽지않은 메시지 수도 확인 할 수 있습니다.",
            "채팅방을 나갈 수 있는 기능과 삭제 기능이 존재합니다.",
          ],
        },
        {
          title: "Buzz-Chatly",
          prjImg: "project_03.png",
          prdLan: [
            "React",
            "React-router",
            "React-dom",
            "Html",
            "TypeScript",
            "Vite",
            "Firebase",
            "Node.js",
            "CSS-in-JS",
          ],
          gitHubUrl: "https://github.com/sum529-create/echo-wave",
          webLink: "https://buzz-chatly.web.app/",
          desTxt: [
            "React를 기반으로 한 프로젝트이며, 소셜 네트워크 서비스 웹입니다.",
            "'Buzz-Chatly'는 활발한 대화가 중심이 되는 웹사이트라는 의미를 담고 있습니다.",
            "사람들 사이에서 빠르게 화제를 모으고, 자유롭게 소통할 수 있는 공간을 제공하는 플랫폼입니다.",
            "백엔드 코딩 없이 FireBase로 인증 및 리얼타임 DB를 구현하였습니다.",
            "실시간으로 사람들과 개인의 생각과 상황을 텍스트와 이미지로 표현할 수 있습니다.",
            "'X(구. 트위터)'를 벤치마킹 하여 좋아요 기능과 댓글 기능을 추가하여, 사용자간의 소통을 높였습니다.",
            "프로필을 수정/추가/삭제 할 수 있어, 상대방을 인지하고 의사소통의 흐름이 원활하도록 하였습니다.",
            "프로필 페이지에서 작성한 버즈를 확인할 수 있도록 하여, 사용자의 편의성을 고려하였습니다.",
          ],
        },
        {
          title: "AirView",
          prjImg: "project_04.png",
          prdLan: [
            "React",
            "React-dom",
            "Html",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Glitch",
            "Css",
            "Sass",
            "CSS-in-JS",
          ],
          gitHubUrl: "https://github.com/sum529-create/AirView",
          webLink: "https://sum529-create.github.io/AirView/",
          desTxt: [
            "실시간 대기오염 지도 ( AirView ) : “공기를 보다”, 사용자들이 앱을 통해 주변 대기환경을 시각적으로 확인할수 있다는 의미",
            "React를 기반으로 한 사이트 이며, 사용자에게 실시간으로 대기오염 상황을 지도 위에 시각화하여 보여주는 웹입니다.",
            "실시간 대기오염 정보 표시: 공공데이터 포털의 대기오염 정보 API를 활용하여 실시간으로 대기오염 정보를 가져와 지도 위에 표시합니다.",
            "지역별 대기오염 수준 표시: 지도 위에 각 지역의 대기오염 수준을 색상으로 표시하여 사용자가 한눈에 파악할 수 있도록 합니다.",
            "대기오염 상세 정보 표시: 사용자가 특정 지역을 클릭하면 해당 지역의 대기오염 상세 정보를 표시하여 미세먼지 농도, 초미세먼지 농도 등을 확인할 수 있습니다.",
            "사용자 위치 기반 정보 표시: 사용자의 현재 위치를 기반으로 주변 지역의 대기오염 정보를 표시합니다.",
            "그래프 또는 차트 표시: 대기오염 정보를 그래프나 차트로 시각화하여 사용자에게 보다 직관적으로 제공합니다.",
            "이 프로젝트를 통해 공공데이터의 활용뿐만 아니라 지도 API 및 데이터 시각화 기술을 사용하여 사용자들이 쉽게 접할 수 있도록 하였습니다.",
          ],
        },
        {
          title: "Cultural-Event-Info",
          prjImg: "project_05.png",
          prdLan: [
            "React",
            "Html",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Glitch",
            "CSS-in-JS",
          ],
          gitHubUrl: "https://github.com/sum529-create/cultural-event-info",
          webLink: "https://sum529-create.github.io/cultural-event-info/",
          desTxt: [
            "React를 기반으로 제작한 하였으며, 서울 열린데이터광장의 OPEN API를 활용하여 만든 프로젝트입니다.",
            "서울시의 문화행사 정보와 관련하여 사용자들이 쉽게 검색하고 관련 정보를 제공하는 목적으로 제작하였습니다.",
            "원하는 날짜(연월일), 주제, 행사 제목을 입력하여 원하는 정보를 쉽게 조회할 수 있도록 하였습니다.",
            "react-paginate을 활용하여 페이징 기능과 모바일의 경우 별도의 페이지 스크롤 기능을 추가하였습니다.",
            "리스트 아이템별로 주제 라벨을 추가하여 사용자들이 한 눈에 항목을 구분할 수 있도록 하였습니다.",
            "문화 행사 정보의 상세 페이지에서 카카오 맵 API를 활용하여 행사가 진행되는 곳의 위치를 한눈에 파악할 수 있도록 하였습니다.",
            "문화 행사 정보의 상세 페이지의 링크 공유하기 기능을 추가하여, ① 페이지 링크 복사 ② 카카오톡 공유 ③ 페이스북 공유 3가지 기능을 추가하여, 사용자가 다른 사용자들에게 정보를 제공할 수 있도록 하였습니다.",
          ],
        },
      ],
    };
  },
  mounted() {
    // if (window.innerWidth > 768) {
    //   this.setupIntersectionObserver();
    //   this.addScrollListener();
    //   this.setInitialView();
    // }
    // 페이지 진입 시 스크롤을 맨 위로 이동
    window.scrollTo({
      top: 0,
      behavior: "auto", // 로드 시에는 부드러운 스크롤 대신 즉시 이동
    });
    this.typeWriter();
    setTimeout(() => {
      this.openCurtain(); // 커튼 애니메이션 시작
    }, 100);
    this.updateShowEffectBtn(false);
    const section = this.$refs.sectionRef;
    if (section) {
      this.secHeight = section.offsetHeight;
    }
    const sectionId = this.$route.query.sectionId; // 라우트의 params에서 직접 가져옴

    if (sectionId) {
      this.scrollToSectionById(sectionId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.3) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }
        });
      },
      {
        threshold: [0.3], // 요소가 50% 보일 때 트리거
      }
    );

    observer.observe(section);
  },
  watch: {
    secHeight(newData) {
      this.secHeight = newData;
    },
  },
  methods: {
    ...mapActions(["updateShowEffectBtn"]),
    handleScroll() {
      const box1 = this.$refs.sectionRef;
      const box1Height = box1.clientHeight;
      const scrollTop = box1.scrollTop;

      // 첫 번째 박스의 스크롤이 끝에 도달했는지 확인
      if (scrollTop + box1Height >= box1.scrollHeight - 10) {
        // 두 번째 박스로 스크롤
        window.scrollTo({
          top: box1Height,
          behavior: "smooth",
        });
      }
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "0px 0px -25% 0px", // 박스의 중앙이 뷰포트의 중앙에 위치할 때를 감지
        threshold: 0.5, // 요소의 50%가 교차할 때 콜백 호출
      };

      const observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );

      this.$refs.box1 && observer.observe(this.$refs.box1);
      this.$refs.box2 && observer.observe(this.$refs.box2);
      this.$refs.box3 && observer.observe(this.$refs.box3);
      this.$refs.box4 && observer.observe(this.$refs.box4);
      this.$refs.box5 && observer.observe(this.$refs.box5);
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    addScrollListener() {
      let isScrolling = false;

      const handleWheel = (event) => {
        if (isScrolling) return;

        isScrolling = true;

        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          const delta = event.deltaY;
          if (delta > 0) {
            this.scrollToNextSection();
          } else if (delta < 0) {
            this.scrollToPreviousSection();
          }
          isScrolling = false;
        }, 300); // 150ms debounce delay
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
    },
    scrollToNextSection() {
      const currentBox = document.querySelector(".box.in-view");
      const nextBox = currentBox ? currentBox.nextElementSibling : null;
      if (nextBox && nextBox.classList.contains("box")) {
        nextBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    scrollToPreviousSection() {
      const currentBox = document.querySelector(".box.in-view");
      const prevBox = currentBox ? currentBox.previousElementSibling : null;
      if (prevBox && prevBox.classList.contains("box")) {
        prevBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    setInitialView() {
      const initialBox = this.$refs.box1;
      if (initialBox) {
        // initialBox.scrollIntoView({ behavior: 'auto', block: 'center' });
        initialBox.classList.add("in-view");
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
        const element = document.getElementById(`line${i + 1}`);
        if (element) {
          element.innerHTML =
            this.displayedText[i] +
            (i === this.currentTextIndex ? '<span class="cursor"></span>' : "");
        }
      }
    },
    removeCursor() {
      for (let i = 0; i < this.displayedText.length; i++) {
        const element = document.getElementById(`line${i + 1}`);
        if (element) {
          element.innerHTML = this.displayedText[i];
        }
      }
    },
    handleScrollToSection(sectionId, routePath) {
      if (this.$route.path !== routePath) {
        this.$router.push(routePath).then(() => {
          this.scrollToSectionById(sectionId);
        });
      } else {
        this.scrollToSectionById(sectionId);
      }
    },
    scrollToSectionById(sectionId) {
      this.$nextTick(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      });
    },
  },
};
</script>

<style scoped>
.main__content {
  background-color: #1c1c1c;
}

.about_me__section {
  margin: 3rem auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
}

.curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(233, 236, 241, 0.8);
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
  background: rgba(233, 236, 241, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 96;
}

.work__main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.work__main_cont {
  position: relative;
  height: 43vh;
}

.work__main_cont .work__main_cont-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
  width: 100%;
  text-align: left;
  align-items: center;
}

.work__main_cont .work__main_cont-wrapper h1 {
  font-family: "Black Ops One", system-ui;
  font-weight: 400;
  font-style: normal;
}
.work__main_cont img {
  width: 30%;
}

.work__main_cont h1 {
  flex: 1;
}
.work__main_text {
  position: relative;
  width: 100%;
  min-height: 150px;
  text-align: left;
}
.work__section {
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  gap: 25px;
  scroll-behavior: smooth;
  align-items: center;
  max-width: 100%;
  scrollbar-width: thin; /* Firefox용 - 얇은 스크롤바 */
  scrollbar-color: #4a90e2 #1c1c1c; /* 스크롤바 색상 및 배경색 (Firefox) */
}
.work__section::-webkit-scrollbar {
  width: 8px; /* 스크롤바 너비 */
}

.work__section::-webkit-scrollbar-track {
  background: #1c1c1c; /* 트랙 배경색 */
  border-radius: 10px; /* 둥근 모서리 */
}

.work__section::-webkit-scrollbar-thumb {
  background-color: #4a90e2; /* 스크롤바 색상 */
  border-radius: 10px; /* 둥근 모서리 */
  border: 2px solid #1c1c1c; /* 트랙과 thumb 간격 */
}

.work__section::-webkit-scrollbar-thumb:hover {
  background-color: #3b7ddf; /* hover 상태에서 thumb 색상 */
}

.slider {
  height: 100vh;
  max-width: 1280px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  flex: 0 0 auto;
}

.box {
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  /*opacity: 0;
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
  transform: translateY(20px);*/
  /* scroll-snap-align: start; */
  position: relative;
  max-width: 800px;
  box-sizing: border-box;
  align-items: center;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}

.contact-header p {
  color: #e0e0e0;
  line-height: 2;
  padding-left: 3em;
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8vh;
  margin: 10vh 3em;
}

.contact-card .contact-image {
  overflow: hidden;
  height: 60%;
  flex: 0 0 auto;
}

.contact-card .contact-image img {
  transform: translateY(-65%);
  top: 50%;
  position: relative;
}

.contact-link {
  text-decoration: none;
  color: inherit;
  background: #2c2c2c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  flex-direction: column;
  display: flex;
  height: 350px;
}

.contact-link:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.contact-image img {
  width: 100%;
  height: auto;
}

.contact-info {
  padding: 20px;
  height: 40%;
  flex: 1;
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

@media (max-width: 1280px) {
  .about_me__section {
    margin-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
@media (max-width: 768px) {
  .contact-header p {
    padding-left: 0;
  }
}
</style>
