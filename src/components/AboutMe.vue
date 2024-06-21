<template>
    <div class="about-me">
        <div class="about-me__photo">
          <div class="about-me__img-area">
            <div class="circle" :class="{ active: isCircleActive }"></div>
            <img src="../assets/my-ar-img.jpeg" alt="노수민 AR 이미지" class="about-me__image" :class="{ active: isImgShow }">
          </div>
          <div class="about-me__profile">
            <div class="about-me__name">
              <h3 class="about-me__name-kor">노수민</h3>
              <span class="about-me__name-eng">(NohSuMin)</span>
            </div>
            <div class="about-me-intro">
              <p>저는 창의적이고 열정적인 프론트엔드 개발자 노수민입니다.</p>
            </div>
          </div>
        </div>
        <div class="about-me__details">
          <div class="about-me__header">
            <h2 class="about-me__title">About Me</h2>
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons work-icon">work</i>
              <span>경력</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">유아이랩</li>
              <li class="about-me__list-item">(2021.10 ~ 2024.08)</li>
            </ul>
            <card-lists />
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons construction-icon">construction</i>
              <span>기술 스택</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">[Detail 1]</li>
              <li class="about-me__list-item">[Detail 2]</li>
            </ul>
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons school-icon">school</i>
              <span>교육</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">[Detail 1]</li>
              <li class="about-me__list-item">[Detail 2]</li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import CardLists from "./CardLists";
export default {
  name: 'AboutMe',
  props: {
    inView: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  data() {
    return {
      isSecFlag: false,
      isCircleActive: false,
      isImgShow: false,
      timer: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: {
    // eslint-disable-next-line
    inView(_newVal, _oldVal) {
      this.isSecFlag = !this.isSecFlag
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    handleScroll() {
      if (this.isSecFlag) {
        this.setCircleActiveWithDelay(true);
      } else {
        this.setCircleActiveWithDelay(false);
      }
    },
    setCircleActiveWithDelay(active) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (active) {
        this.timer = setTimeout(() => {
          this.isCircleActive = active;
        }, 100);  
        this.timer = setTimeout(() => {
          this.isImgShow = active;
        }, 100);
      } else {
        this.isCircleActive = active;
        this.isImgShow = active;
      }
    }
  },
  components: {
    CardLists,
  },
};
</script>

<style scoped>

.about-me {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.about-me__photo {
  flex: 1;
  position: relative;
}

.about-me__image {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.about-me__image.active{
  opacity: 1;
}
.about-me__profile{
  margin: 1rem 0;
  width: 100%;
  line-height: 1.5rem;
}
.about-me__name-eng{
  color: #666;
}

.about-me-intro{
  padding: 1rem 0;
}

.about-me__details {
  flex: 3;
  margin-left: 2rem;
}
.about-me__header {
  text-align: left;
  margin-bottom: 1.5rem;
}

.about-me__title {
  font-size: 2.5rem;
}
.about-me__info{
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  background-color: #373737;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.about-me__sub-title {
  font-size: 1.125rem;
  color: #EFEFEF;
  text-align: left;
  margin-bottom: 1.5rem;
}
.about-me__sub-title > i{
  margin-right: 0.5rem;
}

.about-me__list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.about-me__list-item {
  font-size: 1rem;
  color: #666;
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 10px;
}
.about-me__list-item:nth-child(odd){
  text-align: left;
}
.about-me__list-item:nth-child(even){
  text-align: right;
}
/* Circle animaiton */
.circle {
  position: absolute;
  top: 50%;
  left: -132px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0;
  transition: opacity 0.5s, transform 1s;
}
.circle.active {
  opacity: 1;
  transform: translate(239px, -105px) scale(5.3);
}
</style>
