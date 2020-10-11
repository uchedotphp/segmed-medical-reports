import Vue from 'vue'
import VueRouter from 'vue-router'

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
