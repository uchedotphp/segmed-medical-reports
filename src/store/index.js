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
    REPLACE_REPORTS(state, reports) {
      localStorage.removeItem("segmed_reports");
      localStorage.setItem("segmed_reports", JSON.stringify(reports));
      state.reports = reports;
    },
    SET_REPORTS(state, reports) {
      if (localStorage.getItem("segmed_reports") === null) {
        localStorage.setItem("segmed_reports", JSON.stringify(reports));
        state.reports = reports;
      } else {
        const exits = localStorage.getItem("segmed_reports");
        state.reports = JSON.parse(exits);
      }
    },
    SET_GOOD_REPORTS(state, goodReport) {
      if (localStorage.getItem("segmed_good_reports") === null) {
        const theGoodReports = [];
        theGoodReports.push(goodReport);
        localStorage.setItem(
          "segmed_good_reports",
          JSON.stringify(theGoodReports)
        );
        state.goodReports.push(goodReport);
      } else {
        const exits = localStorage.getItem("segmed_good_reports");
        state.goodReports = JSON.parse(exits);
        state.goodReports.push(goodReport);
        localStorage.setItem(
          "segmed_good_reports",
          JSON.stringify(state.goodReports)
        );
      }
    },
    SET_CONDITION_REPORTS(state, conditionReport) {
      if (localStorage.getItem("segmed_condition_reports") === null) {
        const theConditionReports = [];
        theConditionReports.push(conditionReport);
        localStorage.setItem(
          "segmed_condition_reports",
          JSON.stringify(theConditionReports)
        );
        state.conditionReports.push(conditionReport);
      } else {
        const exits = localStorage.getItem("segmed_condition_reports");
        state.conditionReports = JSON.parse(exits);
        state.conditionReports.push(conditionReport);
        localStorage.setItem(
          "segmed_condition_reports",
          JSON.stringify(state.conditionReports)
        );
      }
    },
    SET_REPORTS_TOTAL(state, reportsTotal) {
      state.reportsTotal = reportsTotal;
    },
    SET_REPORT(state, report) {
      state.report = report;
    },
  },
  actions: {
    clearAllData(){
      localStorage.removeItem("segmed_reports");
      localStorage.removeItem("segmed_good_reports");
      localStorage.removeItem("segmed_condition_reports");
      location.reload();
    },
    fetchReports({ state, commit }) {
      if (localStorage.getItem("segmed_reports") !== null) {
        const exits = localStorage.getItem("segmed_reports");
        const storedReports = JSON.parse(exits);
        commit("SET_REPORTS", storedReports);
        commit("SET_REPORTS_TOTAL", parseInt(100));
      } else {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
            const newData = response.data.map((eachObj) => {
              eachObj.tag = "goodReport";
              return eachObj;
            });
            commit("SET_REPORTS", newData)
            state.goodReports = newData
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },

    fetchGoodReports({ state }) {
      if (localStorage.getItem("segmed_good_reports") !== null) {
        const exits = localStorage.getItem("segmed_good_reports");
        const goodReports = JSON.parse(exits);
        state.goodReports = goodReports
        console.log('the good reports', state.goodReports)
        // commit("SET_GOOD_REPORTS", goodReports);
        // commit("SET_REPORTS_TOTAL", parseInt(100));
      } 
      // else {
      //   return axios
      //     .get("https://jsonplaceholder.typicode.com/posts")
      //     .then((response) => {
      //       console.log(response)
      //       // commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
      //       // const newData = response.data.map((eachObj) => {
      //       //   eachObj.tag = "goodReport";
      //       //   return eachObj;
      //       // });
      //       // commit("SET_REPORTS", newData);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }
    },

    fetchConditionReports({ state }) {
      if (localStorage.getItem("segmed_condition_reports") !== null) {
        const exits = localStorage.getItem("segmed_condition_reports");
        const conditionReports = JSON.parse(exits);
        state.conditionReports = conditionReports
        console.log('the condition reports', state.conditionReports)
      } 
      // else {
      //   return axios
      //     .get("https://jsonplaceholder.typicode.com/posts")
      //     .then((response) => {
      //       console.log(response)
      //       // commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
      //       // const newData = response.data.map((eachObj) => {
      //       //   eachObj.tag = "goodReport";
      //       //   return eachObj;
      //       // });
      //       // commit("SET_REPORTS", newData);
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }
    },

    fetchSingleReport({ commit }, id) {
      if (localStorage.getItem("segmed_reports") !== null) {
        const exits = localStorage.getItem("segmed_reports");
        const storedReports = JSON.parse(exits);
        const report = storedReports.find((report) => report.id == id);
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
      storedReports.splice(id - 1, 1, report);
      commit("REPLACE_REPORTS", storedReports);
      if (report.tag == "goodReport") {
        commit("SET_GOOD_REPORTS", report);
      } else {
        commit("SET_CONDITION_REPORTS", report);
      }
    },

    pushToGoodReports({ commit }, goodReport) {
      commit("SET_GOOD_REPORTS", goodReport);
    },
  },
  getters: {
    fetchAllReports: (state) => state.reports,
    fetchAllGoodReports: (state) => state.goodReports,
    fetchAllConditionReports: (state) => state.conditionReports,
    reportsCount: (state) => state.reportsTotal,
  },
});
