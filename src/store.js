import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "home",
    pageBackground: ""
  },
  getters: {
    getCurrentPage: ({ currentPage }) => {
      return currentPage;
    },
    getPageBackground: ({ pageBackground }) => {
      return pageBackground;
    }
  },
  mutations: {
    setCurrentPage: (state, newPage) => {
      state.currentPage = newPage;
    },
    setPageBackground: (state, newImage) => {
      state.pageBackground = newImage;
    }
  },
  actions: {}
});
