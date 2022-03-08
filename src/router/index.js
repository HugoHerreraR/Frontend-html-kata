import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formp from "../components/form.vue"
import About from "../views/About.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Homepasteles",
    name: "HomeView",
    meta: { requiresAuth: true },
    component: () => import("../views/HomeView.vue"),
    children:[
      {
        path: "pastel",
        name: "pastel",
        component: () => import("../components/pastel.vue"),
      },
      {
        path: "form",
        name: "form",
        component:Formp,
      },
      {
        path: "about",
        name: "About",
        component:About,
      }
    ],
    meta: {
      requiresAuth: true
    }
  },

 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
