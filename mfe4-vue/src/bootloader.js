import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import Home from "./view/Home.vue";

const routes = [
  {
    path: "/mfe4-vue",
    name: "home",
    component: Home,
  },
  {
    path: "/mfe4-vue/page1",
    name: "page1",
    component: () => import("./view/Page1.vue"),
  },
  {
    path: "/mfe4-vue/page2",
    name: "page2",
    component: () => import("./view/Page2.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default (refElement, props, base) => {
  const app = createApp(App, {
      data: () => {
          return (this.props || {});
      }
  });
  app.use(router);
  console.log("VUE REF ELEMENT", refElement)
  app.mount(refElement);
}

