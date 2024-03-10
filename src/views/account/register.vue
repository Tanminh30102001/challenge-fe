<script>
import {
  required,
  email,
  helpers
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from 'axios';
import countriesData from '../../../country.json'
import config from "../../../globalConfig";
export default {
  setup() {
    return {
      v$: useVuelidate()
    };
  },
  components: {},
  data() {
    return {
      countries:countriesData,
      selectedCountry: '',
      user: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        fullname:"",
        country_code:"",
        country_name:"",
        phone:"",
        referral_code:""
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      username: {
        required: helpers.withMessage("Username is required", required),
      },
      phone:{
        required: helpers.withMessage("Phone number is required", required),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Please enter valid email", email),
      },
      password: {
        required: helpers.withMessage("Password is required", required),
      },
      confirm_password: {
        required: helpers.withMessage("Confirm Password is required", required),
      },
      referral_code:{
        required: helpers.withMessage("Referral Code is required", required),
      },
      fullname:{
        required: helpers.withMessage("Full name is required", required),
      },
    },
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {

    updateDialCode() {
      // Update the dial code based on the selected country
      const selectedCountryData = this.countries[this.selectedCountry];
      if (selectedCountryData) {
        this.user.dial_code = selectedCountryData.dial_code;
      } else {
        this.user.dial_code = ''; // Reset dial code if selected country is not found
      }
    },
    // Try to register the user in with the email, username
    // and password they provided.
    async tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
      try{
        this.user.phone = `+${this.countries[this.selectedCountry].dial_code} ${this.user.phone}`
      this.user.country_name=this.countries[this.selectedCountry].country
      this.user.country_code=this.selectedCountry
      this.v$.$touch();
      const result = await axios.post(config.API_URL + '/user/register', {
        username:this.user.username,
        email: this.user.email,
        password: this.user.password,
        re_password: this.user.confirm_password,
        fullname:this.user.fullname,
        phone:this.user.phone,
        country_name:this.user.country_name,
        country_code:this.user.country_code,
        referral_code:this.user.referral_code
      });
      console.log(result.status)

      if(result.status == 200){
        this.$router.push('/login');
        localStorage.setItem('alertSignUp',result.data.message)
        return this.registerSuccess = result.data.message;
      }
      }catch(e){
        this.isRegisterError = true;
        console.log(e)
        return this.regError = 'Something went wrong. Please Try again';
      }
      
      // if (result.status === 200) {
      //   this.isRegisterError = true;
      //   console.log(result.data)
      //   return this.regError = result.data.message;
      // }
      // localStorage.setItem('jwt', result.data.token);
      // this.$router.push({
      //   path: '/'
      // });

    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
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
                  <img src="@/assets/images/logo-light.png" alt="" height="20">
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
                  <h5 class="text-primary">Create New Account</h5>
                  <p class="text-muted">Get your free velzon account now</p>
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="tryToRegisterIn">
                    <BAlert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration
                      successfull.</BAlert>

                    <BAlert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }}
                    </BAlert>

                    <!-- <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div> -->
                    <div class="mb-3">
                      <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" v-model="user.email" id="useremail" :class="{
                        'is-invalid': submitted && v$.user.email.$error,
                      }" placeholder="Enter email address">
                      <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.fullname" id="fullname" :class="{
                        'is-invalid': submitted && v$.user.fullname.$error,
                      }" placeholder="Enter your full name">
                      <div v-if="submitted && v$.user.fullname.$error" class="invalid-feedback">
                        <span v-if="v$.user.fullname.required.$message">{{
                            v$.user.fullname.required.$message
                        }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.username" :class="{
                        'is-invalid': submitted && v$.user.username.$error,
                      }" id="username" placeholder="Enter username">
                      <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                        <span v-if="v$.user.username.required.$message">{{
                            v$.user.username.required.$message
                        }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="country" class="form-label">Country <span class="text-danger">*</span></label>
                      <select v-model="selectedCountry" @change="updateDialCode" class="form-select" id="country">
                        <option value="" disabled>Select a country</option>
                        <option v-for="(countryData, countryCode) in countries" :key="countryCode" :value="countryCode">{{ countryData.country }}</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label">Phone Number <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">+{{ user.dial_code }}</span>
                        <input type="number" class="form-control" v-model="user.phone" id="phoneNumber" placeholder="Enter Phone Number">
                        <div v-if="submitted && v$.user.phone.$error" class="invalid-feedback">
                          <span v-if="v$.user.phone.required.$message">{{
                              v$.user.phone.required.$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <label for="userpassword" class="form-label">Password <span class="text-danger">*</span></label>
                      <input type="password" class="form-control" v-model="user.password" :class="{
                        'is-invalid': submitted && v$.user.password.$error,
                      }" id="userpassword" placeholder="Enter password">
                      <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{
                            v$.user.password.required.$message
                        }}</span>
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="userpassword" class="form-label">Confirm Password <span
                          class="text-danger">*</span></label>
                      <input type="password" class="form-control" v-model="user.confirm_password" :class="{
                        'is-invalid': submitted && v$.user.confirm_password.$error,
                      }" id="userconfirmpassword" placeholder="Enter password">
                      <div v-if="submitted && v$.user.confirm_password.$error" class="invalid-feedback">
                        <span v-if="v$.user.confirm_password.required.$message">{{
                            v$.user.confirm_password.required.$message
                        }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label">Referral Code <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.referral_code" :class="{
                        'is-invalid': submitted && v$.user.referral_code.$error,
                      }" id="referral_code" placeholder="Enter Referral Code">
                      <div v-if="submitted && v$.user.referral_code.$error" class="invalid-feedback">
                        <span v-if="v$.user.referral_code.required.$message">{{
                            v$.user.referral_code.required.$message
                        }}</span>
                      </div>
                    </div>
                    <div class="mb-4">
                      <p class="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <BLink
                          href="#" class="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use
                        </BLink>
                      </p>
                    </div>

                    <div class="mt-4">
                      <BButton variant="success" class="w-100" type="submit">Sign Up</BButton>
                    </div>

                    <!-- <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title text-muted">Create account with</h5>
                      </div>

                      <div>
                        <BButton type="button" variant="primary" class="btn-icon"><i
                            class="ri-facebook-fill fs-16"></i></BButton>
                        <BButton type="button" variant="danger" class="btn-icon ms-1"><i
                            class="ri-google-fill fs-16"></i></BButton>
                        <BButton type="button" variant="dark" class="btn-icon ms-1"><i
                            class="ri-github-fill fs-16"></i></BButton>
                        <BButton type="button" variant="info" class="btn-icon ms-1"><i
                            class="ri-twitter-fill fs-16"></i></BButton>
                      </div>
                    </div> -->
                  </form>

                </div>
              </BCardBody>
            </BCard>

            <div class="mt-4 text-center">
              <p class="mb-0">Already have an account ? <router-link to="/login"
                  class="fw-semibold text-primary text-decoration-underline"> Signin </router-link>
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
              <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                  class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
  </div>
</template>