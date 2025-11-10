<template>
  <div class="wrapper">
    <h1 class="title">Новости</h1>
    <NewsList />
    <div class="btn-wrapper">
      <button class="show-more">Показать ещё</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsList from "./NewsList.vue";
</script>

<style scoped>
.wrapper {
  margin: 16px;
}

.title {
  margin: 10px 0 8px 0;
  font-weight: 400;
  font-size: 28px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #e4e4e4;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
}

.show-more {
  margin: 16px 0 16px 0;
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
}
</style>
