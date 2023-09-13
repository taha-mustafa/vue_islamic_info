<template>
  <!-- Information Show Area -->
  <section class="info-type container mt-5 mb-2 d-flex flex-column justify-content-center align-items-center">
    <h2 class="fs-1 text-end">{{ importantInfo.infoType }}</h2>
  </section>
  <section class="info-content container mt-5 mb-2 d-flex flex-column justify-content-center align-items-center">
    <div>
      <p class="fs-3 text-end">{{ importantInfo.infoType_text }}</p>
      <span class="info-source mt-4 fs-5 text-end">{{ importantInfo.source }}</span>
    </div>
  </section>
</template>

<script setup>
/* Composition API */
import { defineProps} from "vue"

const { importantInfo } = defineProps(['importantInfo'])

</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';

.info-type {
    h2 {
      color: $dark_violet_color;
      border-bottom: 2px solid $dark_violet_color;
    }
  }
  .info-content {
    p {
      border-bottom: 2px solid $dark_violet_color;
    }
    span {
      float: right;
    }
    p, span {
      color: $dark_violet_color;
      margin-bottom: 1rem;
    }
  }
</style>