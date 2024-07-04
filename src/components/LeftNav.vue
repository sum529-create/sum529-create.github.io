<template>
  <div
    class="nav__section"
    :class="{ 'in-view': inView, 'show-menu-flag': showMenuFlag }"
  >
    <nav>
      <div v-if="!showMenuFlag" class="nav__section-info">
        <div class="nav__section-title">
          <a href="/"> Sumin's portfolio </a>
        </div>
        <div class="nav__section-icon">
          <a href="javascript:;" @click="showMenuList()">
            <i class="material-icons menu-icon">menu</i>
          </a>
        </div>
        <div class="nav__section-contact">
          <a href="https://github.com/sum529-create" target="_blank">
            <img src="../assets/img/icon/github.png" alt="github" />
          </a>
          <a href="mailto:sum529@naver.com" target="_blank">
            <i class="material-icons mail-icon">mail</i>
          </a>
          <a href="tel:+01049221955" target="_blank">
            <i class="material-icons phone_iphone-icon">phone_iphone</i>
          </a>
          <a href="https://www.facebook.com/sum529/" target="_blank">
            <img src="../assets/img/icon/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
      <div v-else class="nav__section-list">
        <div class="nav__section-icon">
          <a href="javascript:;" @click="showMenuList()">
            <i v-show="showMenuFlag" class="material-icons close-icon">close</i>
          </a>
        </div>
        <div class="nav__section-menu">
          <ul>
            <li class="nav__section-menu-1 highlight-text">
              <a href="javascript:;">
                <img src="../assets/gif/menu-selected-01.gif" alt="메뉴 선택1" />
                <span>About</span>
              </a>
            </li>
            <li class="nav__section-menu-2 highlight-text">
              <a href="javascript:;">
                <img src="../assets/gif/menu-selected-02.gif" alt="메뉴 선택2" />
                <span>Careers</span>
              </a>
            </li>
            <li class="nav__section-menu-3 highlight-text">
              <a href="javascript:;">
                <img src="../assets/gif/menu-selected-03.gif" alt="메뉴 선택3" />
                <span>Skills</span>
              </a>
            </li>
            <li class="nav__section-menu-4 highlight-text">
              <a href="javascript:;">
                <img src="../assets/gif/menu-selected-04.gif" alt="메뉴 선택4" />
                <span>Projects</span>
              </a>
            </li>
            <li class="nav__section-menu-5 highlight-text">
              <a href="javascript:;">
                <img src="../assets/gif/menu-selected-05.gif" alt="메뉴 선택5" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "LeftNav",
  props: {
    inView: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      showMenuFlag: false,
    };
  },
  mounted() {},
  watch: {
    // eslint-disable-next-line
    inView(_newVal, _oldVal) {
      this.showMenuFlag = false;
    },
  },
  methods: {
    ...mapActions(['updateShowMenuFlag']),
    showMenuList() {
      this.showMenuFlag = !this.showMenuFlag;
      this.updateShowMenuFlag(this.showMenuFlag);
    },
  },
};
</script>

<style scoped>
.nav__section {
  position: fixed;
  color: #fff;
  z-index: 100;
  left: -100%;
  top: 0;
  height: 100vh;
  width: 55px;
  background: #e9ecf1;
  padding: 5rem 0;
  transition: left 1.2s ease, width 0.5s ease-out;
}
.nav__section.in-view {
  left: 0;
  color: #333;
}
.nav__section-title {
  position: absolute;
  letter-spacing: 0.07rem;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  margin-top: 1.2%;
  margin-top: 1.78rem;
  font-size: 1.2rem;
  font-weight: 500;
}
.nav__section-icon {
  position: absolute;
  text-align: center;
  cursor: pointer;
  top: 50%;
  width: 100%;
  transform: translateY(50%);
}
.nav__section-contact {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.nav__section-contact img {
  max-width: 24px;
  height: auto;
  filter: invert(10%) sepia(58%) saturate(0%) hue-rotate(150deg)
    brightness(100%) contrast(76%);
}
.nav__section.show-menu-flag {
  left: 0;
  width: 100%;
}
.nav__section.show-menu-flag .nav__section-icon {
  z-index: 101;
  width: 55px;
}
.nav__section.show-menu-flag .nav__section-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  line-height: 1.5;
  font-weight: 700;
}
@keyframes glitch {
  0% {
    text-shadow: 2px 2px gray;
  }
  25% {
    text-shadow: -2px -2px black;
  }
  50% {
    text-shadow: 2px 2px gray;
  }
  100% {
    text-shadow: 0 0 black;
  }
}
@keyframes wave {
  0%,
  40%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
}
.nav__section.show-menu-flag .nav__section-menu li {
  text-indent: -48px;
}
.nav__section.show-menu-flag
  .nav__section-menu
  li.nav__section-menu-1.highlight-text::before {
  background-color: #57bfc1;
}
.nav__section.show-menu-flag
  .nav__section-menu
  li.nav__section-menu-2.highlight-text::before {
  background-color: #c6e289;
}
.nav__section.show-menu-flag
  .nav__section-menu
  li.nav__section-menu-3.highlight-text::before {
  background-color: #ffba32;
}
.nav__section.show-menu-flag
  .nav__section-menu
  li.nav__section-menu-4.highlight-text::before {
  background-color: #c592e5;
}
.nav__section.show-menu-flag
  .nav__section-menu
  li.nav__section-menu-5.highlight-text::before {
  background-color: #ed682c;
}
.nav__section.show-menu-flag .nav__section-menu li:hover {
  animation: wave 1s infinite, glitch 1s infinite;
}
.nav__section.show-menu-flag .nav__section-menu li:hover::before {
  width: 100%;
}
.nav__section.show-menu-flag .nav__section-menu li img {
  width: 1em;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.nav__section.show-menu-flag .nav__section-menu li:hover img {
  opacity: 1;
}
</style>
