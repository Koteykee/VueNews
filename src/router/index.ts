import { createRouter, createWebHistory } from "vue-router";

import NewsPage from "@/components/NewsPage.vue";
import NewsArticlePage from "@/components/NewsArticlePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/news/:id",
      name: "article",
      component: NewsArticlePage,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
  ],
});

export default router;
