import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Work from "./views/Work.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Service from "./views/Service.vue";

Vue.use(Router); //use→プラグインを適用する宣言をしている

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/work",
      component: Work
    },
    {
      path: "/about",
      component: About //変数名みたいだから特に関係ない名前でも大丈夫っぽい。
    },
    {
      path: "/contact",
      component: Contact
    },
     {
       path: "/service",
       component: Service
     }
  ]
});
