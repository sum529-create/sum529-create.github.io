<template>
  <div class="about-me" id="about">
    <div class="about-me__photo">
      <div class="about-me__img-area">
        <img
          src="../assets/img/myPhoto/card_member.jpeg"
          alt="노수민 프로필 이미지"
          class="about-me__image"
        />
      </div>
      <div class="about-me__profile">
        <div class="about-me__name">
          <h3 class="about-me__name-kor">노수민</h3>
          <span class="about-me__name-eng">(NohSuMin)</span>
        </div>
        <div class="about-me-intro">
          <p>저는 창의적이고 열정적인 프론트엔드 개발자 노수민입니다.</p>
        </div>
        <div class="about-me-education tal fs-0-75 pl23">
          <ul>
            <li class="dib">
              <i class="material-icons school-icon mr5 mln23 fz18 pb3"
                >school</i
              >
              <span>안산대학교 - 글로벌IT비즈니스학과</span>
            </li>
            <li class="dib">
              <i class="material-icons school-icon mr5 mln23 fz18 pb3"
                >school</i
              >
              <span>건국대학교 - 컴퓨터공학과(편입)</span>
            </li>
            <li class="dib">
              <i
                class="material-icons cast_for_education-icon mr5 mln23 fz18 pb3"
                >cast_for_education</i
              >
              <span>코리아정보보안IT아카데미 - 풀스택 개발자 양성과정</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-me__details">
      <h2 class="about-me__header header-title fc_subcolor fs-2-5">About Me</h2>
      <div class="about-me__info">
        <div class="about-me__sub-title fs-1-125">
          <i class="material-icons work-icon">work</i>
          <h3>경력</h3>
        </div>
        <ul class="about-me__list">
          <li class="about-me__list-item fs-1">
            <img src="../assets/img/icon/ico_ui_lab.png" alt="UILAB 로고" />
            유아이랩
          </li>
          <li class="about-me__list-item fs-1">(2021.10 ~ 2024.08)</li>
        </ul>
        <card-lists :in-view="inView" :card-type="'trello'" />
      </div>
      <div class="about-me__info">
        <div class="about-me__sub-title fs-1-125">
          <i class="material-icons construction-icon">construction</i>
          <h3>기술 스택</h3>
        </div>
        <card-lists :in-view="inView" />
      </div>
      <div class="about-me__info">
        <div class="about-me__sub-title fs-1-125">
          <i class="material-icons workspace_premium-icon">workspace_premium</i>
          <h3>자격증</h3>
        </div>
        <ul class="about-me__list">
          <li class="about-me__list-item fs-1">
            <div class="list-image">
              <img
                src="../assets/img/icon/ico_k_data.png"
                alt="K-data 아이콘"
              />
            </div>
            <p class="ml34">SQL 개발자(SQLD, SQL Developer)</p>
          </li>
          <li class="about-me__list-item fs-1">2020.12.20</li>
          <li class="about-me__list-item fs-1">
            <div class="list-image">
              <img src="../assets/img/icon/ico_q_net.png" alt="Q-net 아이콘" />
            </div>
            <p class="ml34">정보처리기사</p>
          </li>
          <li class="about-me__list-item fs-1">2022.06.17</li>
        </ul>
      </div>
      <div class="about-me__info">
        <div class="about-me__sub-title fs-1-125">
          <i class="material-icons terminal-icon">terminal</i>
          <h3>프로젝트</h3>
        </div>
        <a
          class="about-me__show-more"
          :class="{ 'btn-effect': showEffectBtn }"
          href="/#/projects"
          >Show more Project ➣</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardLists from "./CardLists";
export default {
  name: "AboutMe",
  props: {
    inView: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
      showEffectBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkIfInProjectArea);
  },
  destroyed() {
    window.removeEventListener("scroll", this.checkIfInProjectArea);
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    ...mapActions(["updateShowEffectBtn"]),
    checkIfInProjectArea() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 230) {
        setTimeout(() => {
          this.showEffectBtn = true;
        }, 1500);
      } else {
        this.showEffectBtn = false;
      }
      this.updateShowEffectBtn(this.showEffectBtn);
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
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
  display: flex;
  flex-direction: column;
}

.about-me__img-area {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.about-me__image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;
  transition: opacity 1s ease-in-out;
}
.about-me__profile {
  margin: 1rem 0;
  width: 100%;
  line-height: 1.5rem;
}
.about-me__name-eng {
  color: #666;
}

.about-me-intro {
  padding: 1rem 0;
}

.about-me-education ul {
  display: flex;
  flex-direction: column;
}

.about-me__details {
  flex: 3;
  margin-left: 2rem;
}
.about-me__info {
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  background-color: #373737;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.about-me__sub-title {
  display: flex;
  align-items: center;
  color: #efefef;
  text-align: left;
  margin-bottom: 1.5rem;
}
.about-me__sub-title > i {
  margin-right: 0.5rem;
}

.about-me__list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.5;
}

.about-me__list-item {
  color: #dcdde1;
  box-sizing: border-box;
  padding: 10px;
}
.about-me__list-item:nth-child(odd) {
  text-align: left;
  flex: 0 0 70%;
}
.about-me__list-item:nth-child(even) {
  text-align: right;
  flex: 0 0 30%;
}

.about-me__list-item .list-image {
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #fff;
  float: left;
  margin-right: 10px;
}

.about-me__info .about-me__show-more {
  color: #fff;
  font-weight: 500;
  line-height: 40px;
  width: 100%;
  text-align: center;
  font-size: 1em;
  border-radius: 20px;
  display: block;
  background-color: #000; /* 다크 배경 색상 */
  transition: opacity 0.5s, transform 0.5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.about-me__info .about-me__show-more.btn-effect {
  transform: translateY(0);
  animation: sparkle 1.5s infinite alternate;
}

@keyframes sparkle {
  0% {
    box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #95afc0,
      0 0 20px #95afc0, 0 0 25px #95afc0;
  }
  100% {
    box-shadow: 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #95afc0,
      0 0 25px #95afc0, 0 0 30px #95afc0;
  }
}

@media (max-width: 1028px) {
  .about-me {
    flex-direction: column;
  }
  .about-me__photo {
    flex-direction: row;
    margin-bottom: 30px;
    width: 100%;
    gap: 40px;
  }
  .about-me__img-area {
    padding-bottom: 33%;
    flex: 1;
  }
  .about-me__profile {
    flex: 2;
  }
  .about-me__details {
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .about-me__photo {
    flex-direction: column;
    margin: 0 auto 30px;
  }
  .about-me__info {
    padding: 1rem;
  }
  .about-me__img-area {
    width: 50%;
    padding-bottom: 50%;
    margin: 0 auto;
  }
  .about-me-education ul {
    text-align: center;
  }
  .about-me__list .about-me__list-item {
    flex: 0 0 100%;
  }
}
</style>
