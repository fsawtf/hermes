import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// Lazy loading components
const Iden = resolve => {
  require.ensure(
    ["./views/Identification.vue"],
    () => {
      resolve(require("./views/Identification.vue"));
    },
    "iden"
  );
};

const Path = resolve => {
  require.ensure(
    ["./components/Path.vue"],
    () => {
      resolve(require("./components/Path.vue"));
    },
    "iden"
  );
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/iden",
      components: { default: Iden },
      children: [{ path: "", name: "path", component: Path }]
    }
  ]
});
