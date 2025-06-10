import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import HistoryView from "@/views/HistoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }, // Home view requires authentication
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/history",
    name: "history",
    component: HistoryView,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: RegistrationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//global navigation guard
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("loggedin") === "true";

  if (to.meta.requiresAuth === true && !loggedIn) {
    next("/login");
  } else {
    next(); //allow navigation
  }
});

export default router;
