<script setup>
import Header from "./Header.vue"
import Home from "./Home.vue"
import Footer from "./Footer.vue"
import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick(); // Ensures DOM is fully rendered
  const script = document.createElement('script');
  script.src = './src/assets/js/main.js';
  document.body.appendChild(script);
});
</script>

<template>
    <Header />
    <Home />
    <Footer />
</template>

<style scoped>

</style>
