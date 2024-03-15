<script>
// import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
// import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from 'axios';
import Layout from "@/layouts/main.vue";
import config from "../../../../globalConfig"
import Swal from "sweetalert2";
import moment from "moment";

export default {

  data() {
    return {
      value: ['javascript'],
      date: null,
      addacc: false,
      alertfail:false,
      disableChangePassword:false,
      passwordMismatch:false,
      selectedBroker: null,
      selectedServer: null,
      accountTrade: null,
      accountTradeLen: 0,
      expand: false,
      formData:{
        account_id:"",
        platform:"",
        accountname:"",
        broker:"",
        servername:"",
        accountid:"",
        passview:""
      },
      account_id: null,
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
  components: {
    Layout,
    // Multiselect,
    // flatPickr
  },
  computed: {
  },
  watch: {
  },
  created() {
    
  },
  methods: {
    successmsgUpdate() {
      Swal.fire("Good job!", "You updated the your profile", "success");
    },
    successmsg() {
      Swal.fire({
        position: "top-mid",
        icon: "success",
        title: "Change password success",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    changepass() {
      var data = {
        current_password: document.getElementById('oldpasswordInput').value,
        new_password: document.getElementById('newpasswordInput').value
      };
      const confirmPassword = document.getElementById('confirmpasswordInput').value;
      const newPassword = document.getElementById('newpasswordInput').value;
      if (confirmPassword === ''|| confirmPassword !== newPassword) {
     
      this.disableChangePassword = true; 
      this.passwordMismatch = true; 
    } else {
      axios.post(config.API_URL+'/changePassWord/'+this.user.id,data).then((data) => {
        console.log(data);
        this.successmsg();
      }).catch((e) => {
        this.alertfail=true
        console.log(e);
      });
    }
      
    },
    formatDate(dateString) {
      return moment(dateString).format("YYYY/MM/DD HH:mm:ss");
    },
    updatedata() {
      var firstName=document.getElementById('firstnameInput').value
      var lastName=document.getElementById('lastnameInput').value
      var data = {
        fullname: firstName + ' ' + lastName ,
        phone: document.getElementById('phonenumberInput').value,
        position: document.getElementById('positionInput').value,
        address: document.getElementById('addressInput').value,
        description: document.getElementById('exampleFormControlTextarea').value,
      };
      axios.patch( config.API_URL + "/updateUser/" + this.user.id, data).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.successmsgUpdate();
        console.log(response.data);
      }).catch((e) => {
        console.log(e);
      });
    },

    
   
    
    
  },
};
</script>

<template>
  <Layout>
    <div class="position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg profile-setting-img">
        <img src="../../../assets/images/galaxy/img-1.png" class="profile-wid-img" alt="" />
      </div>
    </div>
    <BRow>
      <BCol xxl="3">
        <BCard no-body class="mt-n5">
          <BCardBody class="p-4">
            <div class="text-center">
              <div class="
                  profile-user
                  position-relative
                  d-inline-block
                  mx-auto
                  mb-4
                ">
                <img src="@/assets/images/users/avatar-1.jpg" class="
                    rounded-circle
                    avatar-xl
                    img-thumbnail
                    user-profile-image
                  " alt="user-profile-image" />
                <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                  <input id="profile-img-file-input" type="file" class="profile-img-file-input" />
                  <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-camera-fill"></i>
                    </span>
                  </label>
                </div>
              </div>
              <h5 class="fs-16 mb-1">{{ user.fullname }}</h5>
              <p class="text-muted mb-0">{{ user.username }} </p>
            </div>
          </BCardBody>
        </BCard>
        <BCard no-body >
          <BCardBody>
            <BProgress class="animated-progress custom-progress progress-label">
              <BProgressBar :value="30" variant="danger">
                <div class="label">30%</div>
              </BProgressBar>
            </BProgress>
          </BCardBody>
        </BCard>
        <BCard no-body>
          <BCardBody>
            <h5 class="card-title mb-3">Info</h5>
            <div class="table-responsive">
              <table class="table table-borderless mb-0">
                <tbody>
                  <tr>
                    <th class="ps-0" scope="row">Position</th>
                    <td class="text-muted">{{user.position}}</td>
                  </tr>
                  <tr>
                    <th class="ps-0" scope="row">Full Name :</th>
                    <td class="text-muted">{{user.fullname}}</td>
                  </tr>
                  <tr>
                    <th class="ps-0" scope="row">Mobile :</th>
                    <td class="text-muted">{{user.phone}}</td>
                  </tr>
                  <tr>
                    <th class="ps-0" scope="row">E-mail :</th>
                    <td class="text-muted">{{user.email}}</td>
                  </tr>
                  <tr>
                    <th class="ps-0" scope="row">Location :</th>
                    <td class="text-muted">
                      {{ user.address }}
                    </td>
                  </tr>
                  <tr>
                    <th class="ps-0" scope="row">Joining Date</th>
                    <td class="text-muted">{{formatDate(user.created_at)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BCardBody>
        </BCard>
        <BCard  >
          <BCardBody>
            <div class="d-flex align-items-center mb-4">
              <div class="flex-grow-1">
                <h5 class="card-title mb-0">Portfolio</h5>
              </div>
              <div class="flex-shrink-0">
                <BLink href="javascript:void(0);" class="badge bg-light text-primary fs-12"><i
                    class="ri-add-fill align-bottom me-1"></i> Add</BLink>
              </div>
            </div>
            <div class="mb-3 d-flex">
              <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-body text-body">
                  <i class="ri-github-fill"></i>
                </span>
              </div>
              <input type="email" class="form-control" id="gitUsername" placeholder="Username" value="@daveadame" />
            </div>
            <div class="mb-3 d-flex">
              <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-primary">
                  <i class="ri-global-fill"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="websiteInput" placeholder="www.example.com"
                value="www.velzon.com" />
            </div>
            <div class="mb-3 d-flex">
              <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-success">
                  <i class="ri-dribbble-fill"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="dribbleName" placeholder="Username" value="@dave_adame" />
            </div>
            <div class="d-flex">
              <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-danger">
                  <i class="ri-pinterest-fill"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="pinterestName" placeholder="Username" value="Advance Dave" />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="9">
        <BCard no-body class="mt-xxl-n5">
          <BCardBody class="p-4 pt-2">
            <BTabs nav-class="nav-tabs-custom rounded border-bottom-0" >
              <BTab title="Change Password">
                
                <BAlert :model-value="true" v-model="alertfail" variant="danger" show dismissible>
                  <strong>Something is very wrong! Please try again</strong> 
                </BAlert>
                <form action="javascript:void(0);">
                  <BRow class="g-2 pt-4">
                    <BCol lg="4">
                      <div>
                        <label for="oldpasswordInput" class="form-label">Old Password*</label>
                        <input type="password" class="form-control" id="oldpasswordInput"
                          placeholder="Enter current password" />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div>
                        <label for="newpasswordInput" class="form-label">New Password*</label>
                        <input type="password" class="form-control" id="newpasswordInput"
                          placeholder="Enter new password" />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div>
                        <label for="confirmpasswordInput" class="form-label">Confirm Password*</label>
                        <input type="password" class="form-control" id="confirmpasswordInput"
                          placeholder="Confirm password" />
                          <div v-if="passwordMismatch=true" class="invalid-feedback">
                            <span>This field is required</span>
                          </div>
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="text-end">
                        <BButton type="submit" variant="success" @click="changepass" :disabled="disableChangePassword">
                          Change Password
                        </BButton>
                      </div>
                    </BCol>
                  </BRow>
                </form>
              </BTab>

              <BTab class="nav-item" title="Update Account" active>
                <form action="javascript:void(0);">
                  <BRow class="pt-4">
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="firstnameInput" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstnameInput" placeholder="Enter your firstname"
                          />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="lastnameInput" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastnameInput" placeholder="Enter your lastname"
                         />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="phonenumberInput" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="phonenumberInput"
                          placeholder="Enter your phone number"  />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="positionInput" class="form-label">Position</label>
                        <input type="text" class="form-control" id="positionInput" placeholder="Ex: Developer/Fresher"
                          />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="addressInput" class="form-label">Address</label>
                        <input type="text" class="form-control" id="addressInput" placeholder="180 Cao Lỗ "  />
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="mb-3 pb-2">
                        <label for="exampleFormControlTextarea" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea"
                          placeholder="Ex: Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental.n" rows="3">
                            </textarea>
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="hstack gap-2 justify-content-end">
                        <BButton type="submit" variant="primary" @click="updatedata">
                          Updates
                        </BButton>

                      </div>
                    </BCol>
                  </BRow>
                </form>
              </BTab>

            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>





