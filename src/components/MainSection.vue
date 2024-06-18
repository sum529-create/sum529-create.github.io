<template>
    <div class="content">
        <div class="main__content" :class="{ 'in-view': inView }">
            <left-nav :in-view="inView" />
            <div class="section">
                <about-me/>
            </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './LeftNav.vue';
import AboutMe from './AboutMe.vue';
export default {
    name: "MainSection",
    components: {LeftNav, AboutMe},
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
.main__content{
  position: fixed;
  bottom: -200vh; /* 화면 아래로 숨기기 */
  left: 0;
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  transition: bottom 1s ease-out;
  z-index: 10; /* 다른 요소들 위에 표시 */
  height: 100vh; /* 임시 */
  display: table;
  table-layout: fixed;
}
.main__content > *{
    display: table-cell;
    vertical-align: top;
}
.main__content.in-view{
    bottom:0;
}
</style>