import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routeStrings = {
  root: '/',
  github: '/github-people-filter'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: routeStrings.root,
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: routeStrings.github,
    name: "Github",
    component: () =>
      import(/* webpackChunkName: "github" */ "../views/Github.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
