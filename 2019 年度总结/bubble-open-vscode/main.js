import Vue from "vue";
import Pop from "@/components/pop.vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

new Vue({
  router,
  store,
  render: h => {
    if (process.env.NODE_ENV === "development") {
      return h(App, [h(Pop)]);
    }
    return h(App);
  }
}).$mount("#app");
