<template>
    <div class="content">
        <left-nav :in-view="inView" />
        <div class="main__section" :class="{ 'in-view': inView }">
          <h2>About me.</h2>
          <p>안녕하세요 이건 테스트용 텍스트입니다.</p>
    </div>
  </div>
</template>

<script>
import LeftNav from './LeftNav.vue';
export default {
    name: "MainSection",
    components: {LeftNav},
    data() {
        return {
            inView: false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },  
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition + windowHeight >= document.body.scrollHeight - 100) {
                this.inView = true;
            } else {
                this.inView = false;
            }
        },
    },
}
</script>

<style>
.main__section{
  position: fixed;
  bottom: -100vh; /* 화면 아래로 숨기기 */
  left: 0;
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  transition: bottom 1s ease-out;
  z-index: 10; /* 다른 요소들 위에 표시 */
  height: 100vh; /* 임시 */
}
.main__section.in-view{
    bottom:0;
}
</style>