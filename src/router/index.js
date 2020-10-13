import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
// import axios from 'axios'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "AllReports",
    component: () =>
      import(/* webpackChunkName: "good-reports" */ "../views/Reports.vue"),
  },
  {
    path: "/good-reports",
    name: "GoodReports",
    component: () =>
      import(/* webpackChunkName: "good-reports" */ "../views/GoodReports.vue"),
  },
  {
    path: "/condition-reports",
    name: "ConditionReports",
    component: () =>
      import(
        /* webpackChunkName: "condition-reports" */ "../views/ConditionReports.vue"
      ),
  },
  {
    path: "/report-detail/:id",
    name: "ReportDetail",
    beforeEnter(to, from, next) {
      store.dispatch("fetchSingleReport", to.params.id).then( reponse => {
        to.params.reportDetail = reponse
        to.params.receivedTag = to.params.reportDetail.tag
        next();
      })
    },
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "report-detail" */ "../views/ReportDetail.vue"
      ),
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done()
});

export default router
