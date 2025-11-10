import { createRouter, createWebHistory } from "vue-router";

import NewsPage from "@/components/NewsPage.vue";
import NewsInfo from "@/components/NewsInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/info",
      name: "info",
      component: NewsInfo,
    },
  ],
});

export default router;
