import { Api } from "../api";

import { type News } from "@/types/news.type";

export const getNewsPaginated = async (size = 6): Promise<News[]> => {
  const { data } = await Api.get(`/latest?country=ru&size=${size}`);
  return data.results as News[];
};

export const getNewsById = async (id: string): Promise<News> => {
  const { data } = await Api.get(`/latest?id=${id}`);
  return data.results as News;
};
