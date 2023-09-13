<template>
  <div>
    <!-- Header For Log Out Link -->
    <nav class="text-center">
      <a @click="logOutFnc" href="#" class="fs-3">Log Out</a>
    </nav>
  </div>
</template>

<script>
/* Options API */
  export default {
    name: 'HeaderCompo',
    methods: {
      logOutFnc() {
        // Clear Local Storage
        localStorage.clear();

        // Redirect The User To Login Page
        this.$router.push({name: 'LoginPage'});
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/mainSass.scss';

nav {
  padding: 12px;
  background-color: $dark_violet_color;
  > a {
    color: $white_color;
    list-style: none;
    text-decoration: none;
    border-bottom: 2px solid $white_color;
    transition: .3s;
    &:hover {
      color: $grey_color;
      border-color: $grey_color;
    }
  }
}
</style>