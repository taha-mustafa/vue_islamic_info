<template>
  <div class="d-flex justify-content-center align-items-center flex-column container">
    <p class="text-end">لقد وصلت إلى النهاية يا عزيزي</p>
    <span class="mt-3">
      <router-link class="back-again text-end" to="/information-view">هيا بنا إلى الصفحة الرئيسية</router-link>
    </span>
    <!-- Copy Rights -->
    <p class="text-end rights">©تم بواسطة <span class="author">طه مصطفى </span>جميع الحقوق محفوظة</p>
  </div>
</template>

<script setup>
/* Composition API */
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';

div {
  p {
    color: $dark_violet_color;
    font-size: 3rem;
  }
  .back-again {
      float: right;
      font-size: 25px;
  }

  .rights {
    font-size: 28px;
    margin-top: 10px;
    .author {
      font-size: 35px;
      color: $blue_color;
    }
  }
}
</style>