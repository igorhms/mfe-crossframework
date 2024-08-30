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
  routes,
});

export class MfeVue extends HTMLElement {
  connectedCallback() {
    const app = createApp(App);
    app.use(router);
    app.mount(this);
  }
}

customElements.define("mfe4_vue-element", MfeVue);
createApp(App).use(router).mount("#app");
