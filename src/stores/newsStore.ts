import { ref } from "vue";
import { defineStore } from "pinia";

import { type News } from "@/types/news.type";
import { getNewsPaginated, getNewsById } from "@/api/news/news.api";

export const useNewsStore = defineStore("news", () => {
  const newsList = ref<News[]>([]);
  const newsArticle = ref<News | null>(null);
  const nextPage = ref<string>("");

  const fetchNewsList = async () => {
    try {
      const response = await getNewsPaginated(nextPage.value);
      newsList.value.push(...response.results);
      nextPage.value = response.nextPage;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewsById = async (id: string) => {
    try {
      const response = await getNewsById(id);
      newsArticle.value = response;
    } catch (error) {
      console.log(error);
    }
  };

  return { newsList, newsArticle, fetchNewsList, fetchNewsById };
});
