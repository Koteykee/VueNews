<template>
  <div v-if="!newsArticle">
    <h2>News not found</h2>
  </div>
  <div v-else>
    <h2>{{ newsArticle.title }}</h2>
    <div>
      <img :src="newsArticle.image_url" alt="Ad" />
      <p>{{ newsArticle.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/newsStore";

const route = useRoute();
const newsStore = useNewsStore();
const { newsArticle } = storeToRefs(newsStore);

onMounted(() => {
  const id = route.params.id as string;
  if (id) {
    newsStore.fetchNewsById(id);
  }
});
console.log(newsArticle.value);
</script>

<style scoped></style>
