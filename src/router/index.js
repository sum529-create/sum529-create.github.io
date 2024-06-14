import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: '노수민 | 프론트엔드 개발자 포트폴리오'
      }
    },
  ],
});
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;