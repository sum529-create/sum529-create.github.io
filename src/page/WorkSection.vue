<template>
  <div class="section work__section">
    <div class="curtain" :class="{ open: isCurtainOpen }">
      <div class="curtain-inner"></div>
    </div>
    <div class="container" ref="container">
      <div class="box" ref="box1">Box 1</div>
      <div class="box" ref="box2">Box 2</div>
      <div class="box" ref="box3">Box 3</div>
      <div class="box" ref="box4">Box 4</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCurtainOpen: false,  // 커튼 열림 상태를 제어하는 데이터
    };
  },
  mounted() {
    this.setupIntersectionObserver();
    this.addScrollListener();
    this.setInitialView();
    this.openCurtain();  // 커튼 애니메이션 시작
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px 0px -50% 0px',  // 박스의 중앙이 뷰포트의 중앙에 위치할 때를 감지
        threshold: 0.5,  // 요소의 50%가 교차할 때 콜백 호출
      };

      const observer = new IntersectionObserver(this.handleIntersection, options);

      this.$refs.box1 && observer.observe(this.$refs.box1);
      this.$refs.box2 && observer.observe(this.$refs.box2);
      this.$refs.box3 && observer.observe(this.$refs.box3);
      this.$refs.box4 && observer.observe(this.$refs.box4);
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
        initialBox.scrollIntoView({ behavior: 'auto', block: 'center' });
        initialBox.classList.add('in-view');
      }
    },
    openCurtain() {
      // 커튼이 열리는 애니메이션 시작
      this.isCurtainOpen = true;
    }
  },
};
</script>

<style scoped>
.work__section {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;  /* 충분한 높이로 스크롤이 가능하도록 설정 */
}

.curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
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
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 0;  /* 박스들 사이의 간격을 0으로 설정 */
  scroll-snap-type: y mandatory;  /* 스크롤 스냅 설정 */
  overflow-y: hidden;  /* 세로 스크롤을 허용 */
  height: 100vh;  /* 컨테이너의 높이를 화면의 높이로 설정 */
  scroll-behavior: smooth;  /* 부드러운 스크롤 동작 */
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: #4caf50;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transform: translateY(20px);
  scroll-snap-align: center;  /* 스크롤 스냅의 정렬을 가운데로 설정 */
  position: relative;
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
