<template>
  <!-- Number Of The Information -->
  <header class="header-container container mt-5 mb-2 d-flex flex-column justify-content-center align-items-center">
    <h1 class="fs-1 text-end">المعلومة {{ infoNumStatus }}</h1>
  </header>
</template>

<script setup>
/* Composition API */
import {defineProps} from "vue"

const {infoNumStatus} = defineProps(['infoNumStatus', 'statusPercentage'])
</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';

.header-container {
  h1 {
    color: $dark_violet_color;
  }
}
</style>