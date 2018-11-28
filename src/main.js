import Vue from "vue";
import cryptobar from "./cryptobar.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(cryptobar)
}).$mount("#app");
