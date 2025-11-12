import { Api } from "../api";

import { type News } from "@/types/news.type";

interface ApiResponse {
  nextPage: string;
  results: News[];
  status: string;
  totalResults: number;
}

export const getNewsPaginated = async (
  nextPage: string = ""
): Promise<ApiResponse> => {
  const query = nextPage && `&page=${nextPage}`;
  const { data } = await Api.get(`/latest?image=1&country=ru${query}`);
  console.log(data);
  return data;
};

export const getNewsById = async (id: string): Promise<News> => {
  const { data } = await Api.get(`/latest?id=${id}`);
  return data.results[0];
};
