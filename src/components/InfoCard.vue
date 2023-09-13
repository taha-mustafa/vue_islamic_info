<template>
  <!-- To Redirect You to the Right Card ID -->
  <div @click="redirectYouToInfo" class="single-card col-md-6 col-lg-4">
        <img :src="info.img">
        <div class="card-info text-center">
          <h2>{{ info.name }}</h2>
          <span>{{ info.infoNum }}</span>
        </div>
      </div>
</template>

<script setup>
/* Composition API */
import { defineProps } from "vue"
import { useRouter } from "vue-router";

const {info} = defineProps(['info'])
const router = useRouter()

/* To Redirect You to the Right Card ID */
const redirectYouToInfo = () => {
  router.push(`/info/${info.id}`)
}
</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';

.single-card {
      width: 310px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 35px;
      margin-right: 20px;
      border: 2px solid $dark_violet_color;
      cursor: pointer;
      &:hover img {
        transform: scale(1.03);
      }
        > img {
          width: 100%;
          height: 195px;
          margin: 0;
          border-radius: 5px;
          transition: 0.4s;
        }
        .card-info {
          h2, span {
            color: $dark_violet_color;
          }
          h2 {
            border-bottom: 1.5px solid $dark_violet_color;
            margin-bottom: 2px;
          }
          span {
            font-size: 18px;
          }
        }
      }
</style>