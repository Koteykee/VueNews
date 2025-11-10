<template>
  <ul class="container wrapper">
    <li>
      <NewsListItem />
    </li>
  </ul>
</template>

<script setup lang="ts">
import NewsListItem from "./NewsListItem.vue";
</script>

<style scoped>
.wrapper {
  list-style: none;
}
</style>
