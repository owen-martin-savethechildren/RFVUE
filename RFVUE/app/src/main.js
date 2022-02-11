/// <reference path="js/jquery.js" />
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

//import jquery from "../src/js/jquery";

Vue.config.productionTip = false;

window.$ = window.jQuery = require("jquery");
window.site = require("../src/js/site.js");
window.joint = require("jointjs");
window.dagre = require("dagre");
window._ = require("lodash");

//window._ = require("../src/js/lodash.js")
//window.backbone = require("../src/js/backbone.js")
//window.joint = require("../src/js/joint.js")
//window.dagre = require("../src/js/dagre.js")

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
