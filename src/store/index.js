import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reportsTotal: 0,
    reports: [],
    // limit: 20
  },
  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports;
    },
    SET_REPORTS_TOTAL(state, reportsTotal) {
      state.reportsTotal = reportsTotal;
    },
  },
  actions: {
    fetchReports({ commit }, page) {
      return axios
        .get(
          "https://jsonplaceholder.typicode.com/posts?_page=" +
            page +
            "&_limit=20"
        )
        .then((response) => {
          commit("SET_REPORTS", response.data);
          commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    fetchAllReports: (state) => state.reports,
    reportsCount: (state) => state.reportsTotal,
  },
});
