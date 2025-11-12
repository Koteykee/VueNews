<template>
  <Suspense>
    <NewsArticle />
    <template #fallback>
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    </template>
  </Suspense>
  <div class="btn-wrapper">
    <router-link to="/news" class="main-page">Main Page</router-link>
  </div>
</template>

<script setup lang="ts">
import { Suspense } from "vue";
import NewsArticle from "./NewsArticle.vue";
</script>

<style scoped>
.btn-wrapper {
  display: flex;
  justify-content: center;
}

.main-page {
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 24px;
  width: 180px;
  height: 47px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-decoration: none;
}
</style>
