import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Repo from "@/views/Repo";
import App from "@/views/App";
import Browse from "@/views/Browse";
import Status from "@/views/Status";
import ISO from "@/views/ISO";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/repo/:reponame/:tab?",
    name: "repo",
    component: Repo
  },
  {
    path: "/app/:appname/:tab?",
    name: "app",
    component: App
  },
  {
    path: "/browse",
    name: "browse",
    component: Browse
  },
  {
    path: "/status/:tab?",
    name: "status",
    component: Status
  },
  {
    path: "/downloadiso/:repo?/:version?/:arch?",
    name: "downloadiso",
    component: ISO
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import("../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
