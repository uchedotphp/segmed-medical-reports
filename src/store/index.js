/* eslint-disable no-empty-pattern */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reportsTotal: 0,
    reports: [],
    goodReports: [],
    conditionReports: [],
    report: {},
    // limit: 20
  },
  mutations: {
    REPLACE_REPORTS(state, reports){
      localStorage.removeItem('segmed_reports')
      localStorage.setItem("segmed_reports", JSON.stringify(reports));
      state.reports = reports
    },
    SET_REPORTS(state, reports) {
      if (localStorage.getItem("segmed_reports") === null) {
        localStorage.setItem("segmed_reports", JSON.stringify(reports));
        state.reports = reports;
      } else {
        // state.reports = localStorage.getItem("segmed_reports")
        const exits = localStorage.getItem("segmed_reports");
        state.reports = JSON.parse(exits);
        // exits.push(localStorage.getItem("segmed_reports"))
        // console.log("reports from local that exists: ", JSON.parse(exits));
      }
    },
    SET_GOOD_REPORTS(state, goodReports){
      state.goodReports.push(goodReports)
    },
    SET_REPORTS_TOTAL(state, reportsTotal) {
      state.reportsTotal = reportsTotal;
    },
    SET_REPORT(state, report) {
      state.report = report;
    },
  },
  actions: {
    fetchReports({ commit }) {
      // const exits = localStorage.getItem("segmed_reports");
      // const storedReports = JSON.parse(exits);

      if (localStorage.getItem("segmed_reports") !== null) {
        const exits = localStorage.getItem("segmed_reports");
        const storedReports = JSON.parse(exits);
        // storedReports.length
        commit("SET_REPORTS", storedReports);
        commit("SET_REPORTS_TOTAL", parseInt(100));
        // console.log("na the getter run");
        // console.log("the getter data: ", storedReports);
      } else {
        // console.log("na the axios call run");
        // return axios
        //   .get(
        //     "https://jsonplaceholder.typicode.com/posts?_page=" +
        //       page +
        //       "&_limit=20"
        //   )
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
            const newData = response.data.map((eachObj) => {
              eachObj.tag = "goodReport";
              return eachObj;
            });
            commit("SET_REPORTS", newData);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },

    fetchSingleReport({ commit }, id) {
      if (localStorage.getItem("segmed_reports") !== null) {
        const exits = localStorage.getItem("segmed_reports");
        const storedReports = JSON.parse(exits);
        const report = storedReports.find((report) => report.id == id);
        // commit("SET_REPORT", report);
        // console.log("yur report: ", report);
        // console.log("the id: ", id);
        return report;
      } else {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(({ data }) => {
            commit("SET_REPORT", data);
            return data;
          });
      }
    },

    changeReportTag({ commit }, { tag, id }) {
      const exits = localStorage.getItem("segmed_reports");
      const storedReports = JSON.parse(exits);
      const report = storedReports.find((report) => report.id == id);
      report.tag = tag;
      storedReports.splice((id-1), 1, report);
      commit("REPLACE_REPORTS", storedReports);
    },
  },
  getters: {
    fetchAllReports: (state) => state.reports,
    reportsCount: (state) => state.reportsTotal,
  },
});
