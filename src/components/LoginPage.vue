<template>
  <div class="main d-flex justify-content-center align-items-center flex-column g-3 mt-5">
    <div class="form-info mb-4">
      <img class="logo" src="../assets/images/logo.jpg" />
      <h1 class="main-heading text-center fs-1">LogIn</h1>
    </div>

    <!-- Form Inputs -->
    <form @click.prevent class="d-flex justify-content-center text-center flex-column">
      
      <div class="email-field mb-3">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <label class="fs-4">Email: </label>
          <input class="form-control" type="email" v-model="email" />
        </div>
        <div class="error">
          <span class="error-feedback" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
        </div>
      </div>
      
      <div class="password-field mb-3">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <label class="fs-4">Password: </label>
          <input class="form-control" type="password" v-model="password" />
        </div>
        <div class="error">
          <span class="error-feedback" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
        </div>
      </div>

      <div class="text-center mt-4">
        <input @click="logIn" class="submit-btn btn btn-secondary" type="submit" />
      </div>
      <div class="log-sign mt-3">
        <router-link to="/sign-up" class="fs-5 submit-btn btn btn-secondary">Sign Up</router-link>
      </div>

      <br />
      
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto mt-4 error-feedback">
          {{ noUser }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* Options API */
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {
  name: 'LoginPage',
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: '',
      noUser: '',
    }
  },
  /* Form Validation */
  validations() {
    return {
      password: { required, minLength: minLength(13) },
      email: { required, email },
    }
  },
  /* Filling Data And Form Validation */
  methods: {
    async logIn() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let comingResults = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        if (comingResults.status == 200 && comingResults.data.length > 0) {
          localStorage.setItem('user', JSON.stringify(comingResults.data[0]))
          this.$router.push({ name: 'InformationView' })
        } else {
          this.noUser = 'No Matched User Found';
          setTimeout(() => this.noUser = '', 3000);
        }
      } else {
        this.noUser = 'No Matched User Found';
        setTimeout(() => this.v$.email.$errors[0].$message = '', 3000);
        setTimeout(() => this.v$.password.$errors[0].$message = '', 3000);
        setTimeout(() => this.noUser = '', 3000);
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if (user) {
      this.$router.push({ name: 'InformationView' })
    }
  }
}
</script>

<style lang="scss"></style>
