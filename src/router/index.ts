import { createRouter, createWebHistory } from "vue-router";

import NewsPage from "@/components/NewsPage.vue";
import NewsArticle from "@/components/NewsArticle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/news/:id",
      name: "article",
      component: NewsArticle,
    },
  ],
});

export default router;
