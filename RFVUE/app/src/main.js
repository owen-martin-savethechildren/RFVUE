
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import JExcel from "./components/JExcel.vue";
import JSpreadsheet from "./components/JSpreadsheet.vue";

import "./css/site.css"
import 'vuetify/dist/vuetify.min.css'
//import "jointjs/dist/joint.core.css";
import "jointjs/dist/joint.css";
//import "jsuites/dist/jsuites.basic.css";
import "jsuites/dist/jsuites.css";
//import "jsuites/dist/jsuites.layout.css";


//import "jspreadsheet-ce/dist/jspreadsheet.theme.css"

//import jquery from "../src/js/jquery";

Vue.config.productionTip = false;

window.$ = window.jQuery = require("jquery");
window.site = require("../src/js/site.js");
window.joint = require("jointjs");
window.dagre = require("dagre");
window._ = require("lodash");
//window.jspreadsheet = require("jspreadsheet-ce");

//window._ = require("../src/js/lodash.js")
//window.backbone = require("../src/js/backbone.js")
//window.joint = require("../src/js/joint.js")
//window.dagre = require("../src/js/dagre.js")

Vue.component('JExcel', JExcel)
Vue.component('JSpreadsheet', JSpreadsheet)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
