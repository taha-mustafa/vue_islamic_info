<template>
  <main>
    <header>
      <HeaderCompo />

      <!-- Header For Home Page Once You Signed Up Or Loged In -->
      <div class="header-container container mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1 class="mb-2">الصحابة <span>رضوان الله عليهم أجمعين</span></h1>
        <input v-model.trim="forSearch" type="text" class="form-control w-50 text-end" placeholder="...ابحث">
      </div>
    </header>
    
    <!-- Cards Show -->
    <section class="cards-container container mt-5">
      <div class="row">
        <!-- Cards Component usage -->
        <InfoCard v-for="info in allInfo" :key="info.id" :info= "info"/>
      </div>
    </section>
  </main>
</template>

<script setup>
/* Composition API */
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderCompo from '../components/HeaderCompo.vue'
import information from '../DataBase/information.json'
import InfoCard from '../components/InfoCard.vue'


const allInfo = ref(information);
const forSearch = ref('')
const router = useRouter();
const user = ref(localStorage.getItem('user'));

/* Serching By Letters For The Required One */
watch(forSearch, () => {
  allInfo.value = information.filter((info => 
    info.name.toLowerCase().includes(forSearch.value.toLowerCase())));
})

onMounted(() => {
  if (!user.value) {
    router.push({ name: 'SignUp' });
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';
main {
  margin: 0 auto;
  header {
    h1 {
      font-size: 3rem;
      color: $dark_violet_color;
      > span {
        border-bottom: 2px solid $dark_violet_color;
        font-size: 25px;
      }
    }
    input {
      font-size: 20px;
      color: $dark_violet_color;
    }
  }
.cards-container {
  .row {
    justify-content: center;
    flex-direction: row-reverse;
    }
  } 
}
</style>