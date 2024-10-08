import Vue from "vue";
import Router from "vue-router";
import Home from "../page/Home.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import WorkSection from "../page/WorkSection";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects/:sectionId?",
      name: "WorkSection",
      component: WorkSection,
      props: true,
    },
  ],
});
router.beforeEach((to, _from, next) => {
  document.title = "노수민 | 프론트엔드 개발자 포트폴리오";
  next();
});

export default router;
