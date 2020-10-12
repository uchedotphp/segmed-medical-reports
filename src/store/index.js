import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reportsTotal: 0,
    reports: [],
    report: {}
    // limit: 20
  },
  mutations: {
    SET_REPORTS(state, reports) {
      // state.reports = reports
      // console.log('local storage stuff: ',localStorage.getItem("segmed_reports"));
      // console.log('the reports from api: ',reports)
      if (localStorage.getItem("segmed_reports") === null) {
        localStorage.setItem("segmed_reports", JSON.stringify(reports));
        console.log('doesnt exist till now: ',reports)
        state.reports = reports;
      }else{
        // state.reports = localStorage.getItem("segmed_reports")
        const exits = localStorage.getItem("segmed_reports");
        state.reports = JSON.parse(exits);
        // exits.push(localStorage.getItem("segmed_reports"))
        console.log("reports from local that exists: ", JSON.parse(exits));
      }
    },
    SET_REPORTS_TOTAL(state, reportsTotal) {
      state.reportsTotal = reportsTotal;
    },
    SET_REPORT(state, report){
      state.report = report
    }
  },
  actions: {
    fetchReports({ commit, getters }, page) {
      const storedReports = getters.fetchAllReports

      if (storedReports.length) {
        commit("SET_REPORTS", storedReports);
        // console.log('na the getter run')
        // console.log("the getter data: ",storedReports);
      } else {
        // console.log("na the axios call run");
        return axios
          .get(
            "https://jsonplaceholder.typicode.com/posts?_page=" +
              page +
              "&_limit=20"
          )
          .then((response) => {
            // console.log("api response: ", response);
            // console.log("reports: ", response.data);
            const newData = response.data.map((eachObj) => {
              eachObj.tag = "goodReport";
              return eachObj;
            });
            // console.log('mapped data: ',newData)
            commit("SET_REPORTS", newData);
            commit("SET_REPORTS_TOTAL", response.headers["x-total-count"]);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
    },

    fetchSingleReport({ commit }, id){
      return axios
        .get(
          "https://raw.githubusercontent.com/uchedotphp/segmed-medical-reports/main/src/resource/doc.json/" +
            id
        )
        .then(({ data }) => {
          commit("SET_REPORT", data);
          return data;
        });
    }
  },
  getters: {
    // fetchFromLocalStorage: state => state.
    fetchAllReports: (state) => state.reports,
    reportsCount: (state) => state.reportsTotal,
  },
});
