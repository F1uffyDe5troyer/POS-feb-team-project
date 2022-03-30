import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/products.vue")
  },
  {
    path: "/userDetails",
    name: "userDetails",
    component: () => import("../views/userDetails.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart.vue")
  },
  {
    path: "/notloggedin",
    name: "notloggedin",
    component: () => import("../views/notloggedin.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;