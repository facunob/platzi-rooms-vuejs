import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import SearchPage from "./views/SearchPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";

// User Pages
import ProfilePage from "./views/user/ProfilePage.vue";
import HousesPages from "./views/user/HousesPage.vue";
import CreateHousePage from "@/views/CreateHousePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage
    },
    {
      path: "/user",
      redirect: { name: "ProfilePage" }
    },
    {
      path: "/user/profile",
      name: "ProfilePage",
      component: ProfilePage
    },
    {
      path: "/user/houses",
      name: "HousesPages",
      component: HousesPages
    },
    {
      path: "/house",
      redirect: { name: "ProfilePage" }
    },
    {
      path: "/house/new",
      name: "NewHouse",
      component: CreateHousePage
    },
    {
      path: "*",
      name: "NotFoundPage",
      component: NotFoundPage
    }
  ]
});
