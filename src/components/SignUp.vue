<template>
  <div class="main d-flex justify-content-center align-items-center flex-column g-3 mt-5">
    <div class="form-info mb-4">
      <img class="logo" src="../assets/images/logo.jpg" />
      <h1 class="main-heading text-center fs-1">Sign Up</h1>
    </div>
      <!-- Form Inputs -->
    <form @click.prevent class="d-flex justify-content-center text-center flex-column">

      <div class="name-field  mb-3">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <label class="fs-4">Name: </label>
          <input class="form-control" type="text" v-model="name" />
        </div>
        <div class="error">
          <span class="error-feedback" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
        </div>
      </div>

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
        <input @click="signUp" class="submit-btn btn btn-secondary" type="submit" />
      </div>

      <div class="text-center log-sign mt-3">
        <router-link to="/login" class="fs-5 submit-btn btn btn-secondary d-inline-flex"
          >Log In</router-link
        >
      </div>

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
  name: 'SignUp',
  data() {
    return {
      v$: useValidate(),
      name: '',
      email: '',
      password: '',
      noUser: ''
    }
  },
  /* Form Validation */
  validations() {
    return {
      name: { required, minLength: minLength(13) },
      password: { required, minLength: minLength(13) },
      email: { required, email }
    }
  },
  /* Filling Data And Form Validation */
  methods: {
    async signUp() {
      this.v$.$validate()
      if (!this.v$.$error) {
        let comingResults = await axios.post('https://user-data-v3o2.onrender.com/users', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        if (comingResults.status == 201) {
          localStorage.setItem('user', JSON.stringify(comingResults.data))
          this.$router.push({ name: 'InformationView' })
        }
      } else {
        this.noUser = 'Enter A valid User Information'
        setTimeout(() => this.v$.name.$errors[0].$message = '', 3000);
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

<style lang="scss">
@import '../assets/mainSass.scss';
.main {
  margin-right: 1rem;
  margin-left: 1rem;
  .form-info {
    .logo {
      width: 180px;
      height: 120px;
      border-radius: 50%;
    }
    .main-heading {
      color: $dark_violet_color;
    }
  }
  > form {
    label {
      color: $dark_violet_color;
    }
  }
  > form {
    .form-control {
    font-size: 20px;
    color: $dark_violet_color;
    }
  }
  > form > div > .submit-btn {
    font-size: 20px;
    color: $white_color;
    background-color: $dark_violet_color;
    letter-spacing: 1px;
    transition: 0.3s;
    &:hover {
      background-color: $light_violet_color;
      letter-spacing: 2px;
    }
  }
  .error-feedback {
    color: #ff0000;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
