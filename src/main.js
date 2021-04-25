import Vue from "vue"; //多分これは特殊な奴 npm installをした時に
import App from "./App.vue";
import router from "./router.index";
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false;

//Vue.component('app-server-status', Home)
//グローバルに登録<app-server-status></app-server-status>でHomeコンポーネントを描画できる

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");

//  new Vue({
//    el: '#app',
//    template: '<App />',
//    components: { App }
//  })



