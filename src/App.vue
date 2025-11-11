<template>
  <Header />
  <main class="container">
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
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
