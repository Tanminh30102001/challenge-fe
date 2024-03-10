<script>
import { required, helpers } from "@vuelidate/validators";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { authMethods, authFackMethods, notificationMethods } from "@/state/helpers";
import config from "../../../globalConfig";
import Swal from "sweetalert2";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      username: "",
      password: "",
      alertSignup: false,
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      processing: false,
    };
  },
  validations: {
    username: {
      required: helpers.withMessage("Password is required", required),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
  },
  computed: {},
  created() {
    this.alertRegister();
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    alertRegister() {
      const alertSignupValue = localStorage.getItem('alertSignUp');
      console.log(alertSignupValue)
      if (alertSignupValue) {
        this.alertSignup = true;
        this.position();
      }
    },
    position() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async signinapi() {
      this.processing = true;
      const result = await axios.post(config.API_URL + "/login", {
        username: this.username,
        password: this.password,
      });
      if (result.data.status !== 200) {
        return (this.authError = result.data.data);
      }
      console.log(result);
      // localStorage.setItem('jwt', result.data.token);
      
      this.$router.push({
        path: "/",
      });
    },

    // Try to log the user in with the username
    // and password they provided.
    async tryToLogIn() {
      this.processing = true;
      this.submitted = true;
      // stop here if form is invalid
      try{
        const result = await axios.post(config.API_URL + '/login', {
          username: this.username,
        password: this.password
      });
      if (result.status == 200) {
        console.log( result.data.user,result.data.account_ID)
      localStorage.setItem('user', JSON.stringify(result.data.user));
      localStorage.setItem('account_ID', result.data.account_ID);
      this.$router.push('/');
      }
      }catch(e){
        this.isRegisterError = true;
        console.log(e);
        return (this.authError = "Wrong Email or password. Please try again");
      }
    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <path
            d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="auth-page-content">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <img src="@/assets/images/logo-light.png" alt="" height="20" />
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
            </div>
          </BCol>
        </BRow>

        <BRow class="justify-content-center">
          <BCol md="8" lg="6" xl="5">
            <BCard no-body class="mt-4">
              <BCardBody class="p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p class="text-muted">Sign in to continue to Velzon.</p>
                </div>
                <div class="p-2 mt-4">
                  <BAlert v-model="authError" variant="danger" class="mt-3" dismissible>{{
                    authError
                  }}</BAlert>

                  <div></div>

                  <form @submit.prevent="tryToLogIn">
                    <div class="mb-3">
                      <label for="email" class="form-label">username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        v-model="username"
                      />
                      <div class="invalid-feedback">
                        <span></span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted"
                          >Forgot password?</router-link
                        >
                      </div>
                      <label class="form-label" for="password-input">Password</label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input
                          type="password"
                          v-model="password"
                          class="form-control pe-5"
                          placeholder="Enter password"
                          id="password-input"
                        />
                        <BButton
                          variant="link"
                          class="position-absolute end-0 top-0 text-decoration-none text-muted"
                          type="button"
                          id="password-addon"
                        >
                          <i class="ri-eye-fill align-middle"></i>
                        </BButton>
                        <div class="invalid-feedback">
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="auth-remember-check"
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        >Remember me</label
                      >
                    </div>

                    <div class="mt-4">
                      <BButton variant="success" class="w-100" type="submit">
                        Sign In
                      </BButton>
                    </div>

                    <!-- <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title">Sign In with</h5>
                      </div>
                      <div>
                        <BButton variant="primary" type="button" class="btn btn-primary btn-icon">
                          <i class="ri-facebook-fill fs-16"></i>
                        </BButton>
                        <BButton variant="danger" type="button" class="btn btn-danger btn-icon ms-1">
                          <i class="ri-google-fill fs-16"></i>
                        </BButton>
                        <BButton variant="dark" type="button" class="btn btn-dark btn-icon ms-1">
                          <i class="ri-github-fill fs-16"></i>
                        </BButton>
                        <BButton variant="info" type="button" class="btn btn-info btn-icon ms-1">
                          <i class="ri-twitter-fill fs-16"></i>
                        </BButton>
                      </div>
                    </div> -->
                  </form>
                </div>
              </BCardBody>
            </BCard>

            <div class="mt-4 text-center">
              <p class="mb-0">
                Don't have an account ?
                <router-link
                  to="/register"
                  class="fw-semibold text-primary text-decoration-underline"
                >
                  Signup
                </router-link>
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>

    <footer class="footer">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center">
              <p class="mb-0 text-muted">
                &copy; {{ new Date().getFullYear() }} Velzon. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
  </div>
</template>
