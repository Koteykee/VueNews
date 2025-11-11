<template>
  <div class="wrapper">
    <div v-if="!newsArticle">
      <h2 class="title">News not found</h2>
    </div>
    <div v-else>
      <h2 class="title">{{ newsArticle.title }}</h2>
      <div class="content-wrapper">
        <img :src="newsArticle.image_url" alt="Ad" class="image" />
        <p class="content">{{ newsArticle.content }}</p>
      </div>
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
</script>

<style scoped>
.wrapper {
  margin: 26px 0 0 16px;
}

.title {
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 28px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.8);
}

.content-wrapper {
  display: flex;
  gap: 16px;
}

.image {
  border-radius: 10px;
  width: 284px;
  height: 284px;
  object-fit: cover;
}

.content {
  font-size: 16px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.8);
}
</style>
