import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

export class MfeVue extends HTMLElement {
  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define("mfe4_vue-element", MfeVue);
createApp(App).mount("#app");
