import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
});
