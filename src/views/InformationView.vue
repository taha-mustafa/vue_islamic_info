<template>
  <div>
    <!-- All The Application is Showing Here -->
    <RouterView />
    <HomePage />
  </div>
</template>

<script setup>
/* Composition API */
import { RouterView } from 'vue-router';
import HomePage from '../components/HomePage.vue';
</script>

<style lang="scss" scoped>

</style>