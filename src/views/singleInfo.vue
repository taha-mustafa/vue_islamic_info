<template>
  <main>
    <InfoHeader :infoNumStatus="infoNumStatus" />
    <InfoShow :importantInfo="findInfo.allInformation[currentInfoIndex]" />

    <button @click="currentInfoIndex++" v-if="!showFinalMsg">
      المعلومة التالية
    </button>
    <FinalCompo v-else />
  </main>
</template>

<script setup>
/* Composition API */
import InfoHeader from '../components/InfoHeader.vue';
import InfoShow from '../components/InfoShow.vue';
import FinalCompo from '../components/FinalCompo.vue';
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
import information from '../DataBase/information.json';

const route = useRoute();
const infoId = parseInt(route.params.id);
const findInfo = information.find((inf) => inf.id === infoId);
const currentInfoIndex = ref(0);
const showFinalMsg = ref(false);

const infoNumStatus = computed(() => `${currentInfoIndex.value + 1}/${findInfo.allInformation.length}`);

/* Watching The Indexes Of The Information For Showing The Final Message Or Not */
watch(currentInfoIndex, (newValue) => {
  if (newValue === findInfo.allInformation.length - 1) {
    showFinalMsg.value = true;
  }
});
</script>


<style lang="scss" scoped>
@import '../assets/mainSass.scss';

main {
  margin: 80px 20px;
  border: 2px solid $dark_violet_color;
  border-radius: 20px;
  position: relative;

  button {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    background-color: $dark_violet_color;
    color: $white_color;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    transition: 0.4s;
    border: none;

    &:hover {
      background-color: $light_violet_color;
      letter-spacing: 1px;
    }
  }
}
</style>