<template>
  <ul class="container wrapper">
    <li v-for="news in newsList" :key="news.article_id">
      <NewsListItem :news="news" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import NewsListItem from "./NewsListItem.vue";
import { useNewsStore } from "@/stores/newsStore";

const newsStore = useNewsStore();
const { newsList } = storeToRefs(newsStore);

onMounted(() => {
  newsStore.fetchNewsList();
});
</script>

<style scoped>
.wrapper {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  justify-items: center;
}
</style>
