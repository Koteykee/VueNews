<template>
  <Header />
  <main class="container">
    <NewsPage />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import NewsPage from "./components/NewsPage.vue";
</script>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
}
</style>
