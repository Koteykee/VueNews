<template>
  <router-link :to="`/news/${news.article_id}`" class="card">
    <div class="image-wrapper">
      <img :src="news.image_url" alt="Ad" class="image" />
    </div>
    <div>
      <p class="date">{{ news.pubDate }}</p>
      <p class="title">{{ news.title }}</p>
      <p class="description">{{ news.description }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const { news } = defineProps({
  news: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 549px;
  height: 200px;
  display: flex;
  gap: 16px;
  text-decoration: none;
}

.card:hover .title {
  text-decoration: underline;
}

.image-wrapper {
  min-width: 200px;
}

.image {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.date {
  margin: 5px 0 7px 0;
  font-size: 13px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.5);
}

.title {
  margin-bottom: 5px;
  font-size: 20px;
  line-height: 111%;
  color: #1d5ab6;
}

.description {
  font-size: 16px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.8);

  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
