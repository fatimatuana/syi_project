import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import SplashView from "@/views/SplashView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "splash",
    component: SplashView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
