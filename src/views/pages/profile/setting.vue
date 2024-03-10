<script>
// import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
// import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from 'axios';
import Layout from "@/layouts/main.vue";
import config from "../../../../globalConfig"
import Swal from "sweetalert2";

export default {

  data() {
    return {
      value: ['javascript'],
      date: null,
      addacc: false,
      alertfail:false,
      brokerData: [
        { broker: 'MetaQuotes', server: ['MetaQuotes-Demo'] },
        { broker: 'EXNESS', server: ['ExnessUK-Real10', 'Exness-Real', 'Exness-Trial', 'Exness-Server', 'Exness-Real2', 'ExnessCY-Trial', 'Exness-Real3', 'Exness-Real4', 'Exness-Real5', 'Exness-Real6', 'Exness-Real7', 'Exness-Real8', 'Exness-Real9', 'Exness-Real10', 'Exness-Real11', 'Exness-Real12', 'Exness-Real13', 'Exness-Real14', 'Exness-Real15', 'Exness-Real16', 'Exness-Real17', 'Exness-Real18', 'Exness-Real19', 'Exness-Real20', 'Exness-Real21', 'Exness-Real22', 'Exness-Real23', 'Exness-Real24', 'Exness-Real25', 'Exness-Real26', 'Exness-Real27', 'Exness-Real28', 'Exness-Real29', 'Exness-Real30', 'Exness-Real31', 'Exness-Real32', 'Exness-Real33', 'Exness-Real34', 'Exness-Real35', 'Exness-Real36', 'Exness-Trial2', 'Exness-Trial3', 'Exness-Trial4', 'Exness-Trial5', 'Exness-Trial6', 'Exness-Trial7', 'Exness-Trial8', 'Exness-Trial9', 'Exness-Trial10', 'Exness-Trial11', 'Exness-Trial12', 'Exness-Trial13', 'Exness-Trial14',] },
      ],
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
    selectedBrokerServers() {
      const selectedBrokerObj = this.brokerData.find(brokerObj => brokerObj.broker === this.selectedBroker);
      return selectedBrokerObj ? selectedBrokerObj.server : [];
    },
    defaultSelectedServer() {
      return this.selectedBrokerServers.length > 0 ? this.selectedBrokerServers[0] : null;
    }
  },
  watch: {
    selectedBroker(newValue) {
      if (newValue) {
        this.selectedServer = this.defaultSelectedServer;
        this.formData.broker = newValue;
        this.formData.servername = this.selectedServer;
      }
    },
    selectedServer(newValue) {
      if (newValue) {
        this.formData.servername = newValue;
      }
    }
  },
  created() {
    this.getAccountTrade();
    this.account_id = localStorage.getItem('account_ID');
    this.formData.account_id = this.account_id;
  },
  methods: {
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
        password: document.getElementById('oldpasswordInput').value,
        new_password: document.getElementById('newpasswordInput').value,
        confirm_password: document.getElementById('confirmpasswordInput').value
      };
      axios.post(config.API_URL+'/changePassword/'+localStorage.getItem('account_ID'),data).then((data) => {
        console.log(data);
        this.successmsg();
      }).catch((e) => {
        this.alertfail=true
        console.log(e);
      });
    },
    updatedata() {
      var userid = localStorage.getItem('userid');
      var data = {
        first_name: document.getElementById('firstnameInput').value,
        last_name: document.getElementById('lastnameInput').value,
        phone: document.getElementById('phonenumberInput').value,
        email: document.getElementById('emailInput').value,
        joining_date: document.getElementById('dateinput').value,
        skills: document.getElementById('skillsinput').value,
        designation: document.getElementById('designationInput').value,
        website: document.getElementById('websiteInput1').value,
        city: document.getElementById('cityInput').value,
        country: document.getElementById('countryInput').value,
        zipcode: document.getElementById('zipcodeInput').value,
        Description: document.getElementById('exampleFormControlTextarea').value,
      };
      axios.patch('https://api-node.themesbrand.website/user/' + userid, data).then((data) => {
        console.log(data);
      }).catch((e) => {
        console.log(e);
      });
    },
    addaccount() {
      this.addacc = !this.addacc
    },
    getSelectedBrokerServers(selectedBroker) {
      const broker = this.brokerData.find(brokerObj => brokerObj.broker === selectedBroker);
      return broker ? broker.server : [];
    },
    updateServers() {
      this.selectedServer = this.defaultSelectedServer;
    },
    async getAccountTrade() {
      await axios
        .get(config.API_URL + '/user/getacc/' + localStorage.getItem('account_ID'))
        .then((res) => {
          this.accountTrade = res.data;
          this.accountTradeLen = this.accountTrade.length
        })
        .catch((e) => console.log(e));
    },
    async createAccountTrade() {
      await axios
        .post(config.API_URL +'/user/createacc',this.formData
        )
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((e) => console.log(e));
    }
  },
};
</script>

<template>
  <Layout>
    <div class="position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg profile-setting-img">
        <img src="@/assets/images/profile-bg.jpg" class="profile-wid-img" alt="" />
        <div class="overlay-content">
          <div class="text-end p-3">
            <div class="p-0 ms-auto rounded-circle profile-photo-edit">
              <input id="profile-foreground-img-file-input" type="file" class="profile-foreground-img-file-input" />
              <label for="profile-foreground-img-file-input" class="profile-photo-edit btn btn-light">
                <i class="ri-image-edit-line align-bottom me-1"></i> Change
                Cover
              </label>
            </div>
          </div>
        </div>
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
              <p class="text-muted mb-0">{{ user.username }}</p>
            </div>
          </BCardBody>
        </BCard>
        <BCard no-body >
          <BCardBody>
            <div class="d-flex align-items-center mb-5">
              <div class="flex-grow-1">
                <h5 class="card-title mb-0">Complete Your Profile</h5>
              </div>
              <div class="flex-shrink-0">
                <BLink href="javascript:void(0);" class="badge bg-light text-primary fs-12"><i
                    class="ri-edit-box-line align-bottom me-1"></i> Edit</BLink>
              </div>
            </div>

            <BProgress class="animated-progress custom-progress progress-label">
              <BProgressBar :value="30" variant="danger">
                <div class="label">30%</div>
              </BProgressBar>
            </BProgress>
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
              <!-- <BTab class="nav-item" title="Account" active >
                <form action="javascript:void(0);">
                  <BRow>
                    <div v-if="!addacc">
                      <BCol class="px-1 pt-1 pb-5" v-if="accountTradeLen > 0">
                        <div class="w-100 px-2 py-2 d-flex justify-content-between align-items-center" style="background-color: #eff2f7;">
                          <span class="py-0"></span>
                          <span class="py-0">Accounts Without Portfolio ({{ accountTradeLen }})</span>
                          <span class="fs-4 ps-3" style="cursor: pointer" @click="expand = true" v-if="!expand"><i class="ri-add-line"></i></span>
                          <span class="fs-4 ps-3" style="cursor: pointer" @click="expand = false" v-else><i class="ri-subtract-line"></i></span>
                        </div>

                        <BCol lg="12" v-if="expand">
                          <BCard no-body>
                              <BCardBody>
                                  <div class="live-preview">
                                      <BRow>
                                          <BCol xl="12">
                                              <div class="table-responsive">
                                                  <table class="table table-hover align-middle table-nowrap mb-0">
                                                      <thead>
                                                          <tr>
                                                              <th scope="col">Account Number</th>
                                                              <th scope="col">Account Name</th>
                                                              <th scope="col">Broker</th>
                                                             
                                                              <th scope="col">Action</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr v-for="(item, index) in accountTrade" :key="index">
                                                              <td>{{ item.accountID }}</td>
                                                              <td>{{ item.accountName }}</td>
                                                              <td>{{ item.broker }}</td>
                                                              <td>name</td>
                                                              <td>Private</td>
                                                              <td>Active</td>
                                                              <td>
                                                                  <a href="" class="text-decoration-none px-2 py-1 text-center bg-warning rounded text-light fw-bold">Edit</a>

                                                                  <router-link class="dropdown-item" :to="`/pages/statistic/${item.accountID}`">
                                                                    <span class="align-middle px-2 py-1 text-center bg-warning rounded text-light fw-bold"> Edit</span>
                                                                  </router-link>
                                                              </td>
                                                          </tr>
                                                          
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </BCol>
                                      </BRow>

                                  </div>
                              </BCardBody>
                          </BCard> 
                      </BCol>

                      </BCol>
                      <BCol class="px-1 py-5 text-center" v-else>
                        <p><i class="ri-information-line"></i> You don't have any accounts currently. Click the 'Add' button to add a new account.</p>
                      </BCol>
                    </div>
                    <BCol lg="12" v-else>
                      <div class="d-flex align-items-center justify-content-center py-3" >
                        <BCol lg="2">
                          <span>My platform is:</span>
                        </BCol>
                        <BCol lg="5">
                          <select class="form-select" v-model="formData.platform" name="platform">
                            <option selected>Please select</option>
                            <option value="mt4">Meta Trader 4</option>
                            <option value="mt5">Meta Trader 5</option>
                          </select>
                        </BCol>
                      </div>
                      <BRow>
                        <BCol lg="12">
                          <div class="d-flex align-items-center justify-content-center py-1" >
                            <BCol lg="2">
                              <span> Account Name: </span>
                            </BCol>
                            <BCol lg="5">
                              <input type="text" name="accName" v-model="formData.accountname" class="form-control" placeholder="Example: demo1">
                            </BCol>
                          </div>
                          <div class="d-flex align-items-center justify-content-center py-1" >
                            <BCol lg="2">
                              <span> Broker: </span>
                            </BCol>
                            <BCol lg="5">
                              <select class="form-select" v-model="selectedBroker" name="broker">
                                <option value="null" selected>Please select</option>
                                <option v-for="(brokerObj, index) in brokerData" :key="index" :value="brokerObj.broker">
                                  {{ brokerObj.broker }}
                                </option>
                              </select>
                            </BCol>
                          </div>
                          <div class="d-flex align-items-center justify-content-center py-1" >
                            <BCol lg="2">
                              <span> Server: </span>
                            </BCol>
                            <BCol lg="5">
                              <select class="form-select" v-model="selectedServer" name="server">
                                <option value='null' selected>Please select a Broker</option>
                                <option v-for="(server, index) in selectedBrokerServers" :key="index" :value="server">
                                  {{ server }}
                                </option>
                              </select>
                            </BCol>
                          </div>
                          <div class="d-flex align-items-center justify-content-center py-1" >
                            <BCol lg="2">
                              <span> Account Number: </span>
                            </BCol>
                            <BCol lg="5">
                              <input type="text" class="form-control" v-model="formData.accountid" name="accnum">
                            </BCol>
                          </div>
                          <div class="d-flex align-items-center justify-content-center py-1" >
                            <BCol lg="2">
                              <span> Investor password:  </span>
                            </BCol>
                            <BCol lg="5">
                              <input type="text" class="form-control" v-model="formData.passview" name="invertorpass">
                            </BCol>
                          </div>
                        </BCol>
                      </BRow>
                    </BCol>
                  </BRow>
                  <BCol lg="12">
                    <div class="text-end mt-2">
                      <BButton class="mx-1" variant="secondary" @click="addacc = false">
                        Cancel
                      </BButton>
                      <BButton variant="success" @click="addaccount" v-if="!addacc">
                        Add Account
                      </BButton>
                      <BButton type="submit" variant="warning" @click="createAccountTrade" v-else>
                        Create Account
                      </BButton>
                    </div>
                  </BCol>
                </form>
              </BTab> -->

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
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="mb-3">
                        <BLink href="javascript:void(0);" class="link-primary text-decoration-underline">Forgot
                          Password
                          ?</BLink>
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="text-end">
                        <BButton type="submit" variant="success" @click="changepass">
                          Change Password
                        </BButton>
                      </div>
                    </BCol>
                  </BRow>
                </form>
                <div class="d-none" >
                  <div class="mt-4 mb-3 border-bottom pb-2 ">
                  <div class="float-end">
                    <BLink href="javascript:void(0);" class="link-primary">All Logout</BLink>
                  </div>
                  <h5 class="card-title">Login History</h5>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-shrink-0 avatar-sm">
                    <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                      <i class="ri-smartphone-line"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6>iPhone 12 Pro</h6>
                    <p class="text-muted mb-0">
                      Los Angeles, United States - March 16 at 2:47PM
                    </p>
                  </div>
                  <div>
                    <BLink href="javascript:void(0);">Logout</BLink>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-shrink-0 avatar-sm">
                    <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                      <i class="ri-tablet-line"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6>Apple iPad Pro</h6>
                    <p class="text-muted mb-0">
                      Washington, United States - November 06 at 10:43AM
                    </p>
                  </div>
                  <div>
                    <BLink href="javascript:void(0);">Logout</BLink>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-shrink-0 avatar-sm">
                    <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                      <i class="ri-smartphone-line"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6>Galaxy S21 Ultra 5G</h6>
                    <p class="text-muted mb-0">
                      Conneticut, United States - June 12 at 3:24PM
                    </p>
                  </div>
                  <div>
                    <BLink href="javascript:void(0);">Logout</BLink>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 avatar-sm">
                    <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                      <i class="ri-macbook-line"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6>Dell Inspiron 14</h6>
                    <p class="text-muted mb-0">
                      Phoenix, United States - July 26 at 8:10AM
                    </p>
                  </div>
                  <div>
                    <BLink href="javascript:void(0);">Logout</BLink>
                  </div>
                </div>
                </div>
              </BTab>

              <!-- <BTab class="nav-item" title="Account" active>
                <form action="javascript:void(0);">
                  <BRow class="pt-4">
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="firstnameInput" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstnameInput" placeholder="Enter your firstname"
                          value="Dave" />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="lastnameInput" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastnameInput" placeholder="Enter your lastname"
                          value="Adame" />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="phonenumberInput" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="phonenumberInput"
                          placeholder="Enter your phone number" value="+(1) 987 6543" />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="emailInput" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Enter your email"
                          value="daveadame@velzon.com" />
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="mb-3">
                        <label for="JoiningdatInput" class="form-label">Joining Date</label>

                        <flat-pickr v-model="date" id="dateinput" class="form-control"></flat-pickr>

                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="mb-3">
                        <label for="skillsInput" class="form-label">Skills</label>
                        <Multiselect v-model="value" id="skillsinput" mode="tags" :close-on-select="false"
                          :searchable="true" :create-option="true" :options="[
                            { value: 'illustrator', label: 'Illustrator' },
                            { value: 'photoshop', label: 'Photoshop' },
                            { value: 'css', label: 'CSS' },
                            { value: 'html', label: 'HTML' },
                            { value: 'javascript', label: 'Javascript' },
                            { value: 'python', label: 'Python' },
                            { value: 'php', label: 'PHP' },
                          ]" />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="designationInput" class="form-label">Designation</label>
                        <input type="text" class="form-control" id="designationInput" placeholder="Designation"
                          value="Lead Designer / Developer" />
                      </div>
                    </BCol>
                    <BCol lg="6">
                      <div class="mb-3">
                        <label for="websiteInput1" class="form-label">Website</label>
                        <input type="text" class="form-control" id="websiteInput1" placeholder="www.example.com"
                          value="www.velzon.com" />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="cityInput" class="form-label">City</label>
                        <input type="text" class="form-control" id="cityInput" placeholder="City" value="California" />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="countryInput" class="form-label">Country</label>
                        <input type="text" class="form-control" id="countryInput" placeholder="Country"
                          value="United States" />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="zipcodeInput" class="form-label">Zip Code</label>
                        <input type="text" class="form-control" minlength="5" maxlength="6" id="zipcodeInput"
                          placeholder="Enter zipcode" value="90011" />
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="mb-3 pb-2">
                        <label for="exampleFormControlTextarea" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea"
                          placeholder="Enter your description" rows="3">
Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                      </div>
                    </BCol>
                    <BCol lg="12">
                      <div class="hstack gap-2 justify-content-end">
                        <BButton type="submit" variant="primary" @click="updatedata">
                          Updates
                        </BButton>
                        <BButton type="button" variant="soft-success">
                          Cancel
                        </BButton>
                      </div>
                    </BCol>
                  </BRow>
                </form>
              </BTab> -->
             
              <!-- <BTab title="Experience">
                <form>
                  <div id="newlink">
                    <div id="1">
                      <BRow class="pt-4">
                        <BCol lg="12">
                          <div class="mb-3">
                            <label for="jobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="jobTitle" placeholder="Job title"
                              value="Lead Designer / Developer" />
                          </div>
                        </BCol>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="companyName" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="companyName" placeholder="Company name"
                              value="Themesbrand" />
                          </div>
                        </BCol>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="experienceYear" class="form-label">Experience Years</label>
                            <BRow>
                              <BCol lg="5">
                                <Multiselect class="form-control" v-model="value2" :close-on-select="true"
                                  :searchable="true" :create-option="true" :options="[
                                    { value: '', label: 'Select years' },
                                    { value: 'Choice 1', label: '2001' },
                                    { value: 'Choice 2', label: '2002' },
                                    { value: 'Choice 3', label: '2003' },
                                    { value: 'Choice 4', label: '2004' },
                                    { value: 'Choice 5', label: '2005' },
                                    { value: 'Choice 6', label: '2006' },
                                    { value: 'Choice 7', label: '2007' },
                                    { value: 'Choice 8', label: '2008' },
                                    { value: 'Choice 9', label: '2009' },
                                    { value: 'Choice 10', label: '2010' },
                                    { value: 'Choice 11', label: '2011' },
                                    { value: 'Choice 12', label: '2012' },
                                    { value: 'Choice 13', label: '2013' },
                                    { value: 'Choice 14', label: '2014' },
                                    { value: 'Choice 15', label: '2015' },
                                    { value: 'Choice 16', label: '2016' },
                                    { value: 'Choice 17', label: '2017' },
                                    { value: 'Choice 18', label: '2018' },
                                    { value: 'Choice 19', label: '2019' },
                                    { value: 'Choice 20', label: '2020' },
                                    { value: 'Choice 21', label: '2021' },
                                    { value: 'Choice 22', label: '2022' }


                                  ]" />
                              </BCol>
                              <BCol cols="auto" class="align-self-center">to</BCol>
                              <BCol lg="5">


                                <Multiselect class="form-control" v-model="value1" :close-on-select="true"
                                  :searchable="true" :create-option="true" :options="[
                                    { value: '', label: 'Select years' },
                                    { value: 'Choice 1', label: '2001' },
                                    { value: 'Choice 2', label: '2002' },
                                    { value: 'Choice 3', label: '2003' },
                                    { value: 'Choice 4', label: '2004' },
                                    { value: 'Choice 5', label: '2005' },
                                    { value: 'Choice 6', label: '2006' },
                                    { value: 'Choice 7', label: '2007' },
                                    { value: 'Choice 8', label: '2008' },
                                    { value: 'Choice 9', label: '2009' },
                                    { value: 'Choice 10', label: '2010' },
                                    { value: 'Choice 11', label: '2011' },
                                    { value: 'Choice 12', label: '2012' },
                                    { value: 'Choice 13', label: '2013' },
                                    { value: 'Choice 14', label: '2014' },
                                    { value: 'Choice 15', label: '2015' },
                                    { value: 'Choice 16', label: '2016' },
                                    { value: 'Choice 17', label: '2017' },
                                    { value: 'Choice 18', label: '2018' },
                                    { value: 'Choice 19', label: '2019' },
                                    { value: 'Choice 20', label: '2020' },
                                    { value: 'Choice 21', label: '2021' },
                                    { value: 'Choice 22', label: '2022' }


                                  ]" />
                              </BCol>
                            </BRow>
                          </div>
                        </BCol>
                        <BCol lg="12">
                          <div class="mb-3">
                            <label for="jobDescription" class="form-label">Job Description</label>
                            <textarea class="form-control" id="jobDescription" rows="3" placeholder="Enter description">
              You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>
                          </div>
                        </BCol>
                        <div class="hstack gap-2 justify-content-end">
                          <BLink class="btn btn-success" href="javascript:void(0);">Delete</BLink>
                        </div>
                      </BRow>
                    </div>
                  </div>
                  <div id="newForm" style="display: none"></div>
                  <BCol lg="12">
                    <div class="hstack gap-2">
                      <BButton type="button" variant="success">
                        Update
                      </BButton>
                      <BLink href="javascript:void(0);" class="btn btn-primary">Add New</BLink>
                    </div>
                  </BCol>
                </form>
              </BTab>
              <BTab title="Privacy Policy">
                <div class="mb-4 pb-2 pt-4">
                  <h5 class="card-title text-decoration-underline mb-3">
                    Security:
                  </h5>
                  <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                    <div class="flex-grow-1">
                      <h6 class="fs-14 mb-1">Two-factor Authentication</h6>
                      <p class="text-muted">
                        Two-factor authentication is an enhanced security
                        meansur. Once enabled, you'll be required to give two
                        types of identification when you log into Google
                        Authentication and SMS are Supported.
                      </p>
                    </div>
                    <div class="flex-shrink-0 ms-sm-3">
                      <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Enable Two-facor Authentication
                      </BLink>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                    <div class="flex-grow-1">
                      <h6 class="fs-14 mb-1">Secondary Verification</h6>
                      <p class="text-muted">
                        The first factor is a password and the second commonly
                        includes a text with a code sent to your smartphone, or
                        biometrics using your fingerprint, face, or retina.
                      </p>
                    </div>
                    <div class="flex-shrink-0 ms-sm-3">
                      <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Set up secondary method</BLink>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                    <div class="flex-grow-1">
                      <h6 class="fs-14 mb-1">Backup Codes</h6>
                      <p class="text-muted mb-sm-0">
                        A backup code is automatically generated for you when
                        you turn on two-factor authentication through your iOS
                        or Android Twitter app. You can also generate a backup
                        code on twitter.com.
                      </p>
                    </div>
                    <div class="flex-shrink-0 ms-sm-3">
                      <BLink href="javascript:void(0);" class="btn btn-sm btn-primary">Generate backup codes</BLink>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <h5 class="card-title text-decoration-underline mb-3">
                    Application Notifications:
                  </h5>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex">
                      <div class="flex-grow-1">
                        <label for="directMessage" class="form-check-label fs-14">Direct messages</label>
                        <p class="text-muted">
                          Messages from people you follow
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="directMessage" checked />
                        </div>
                      </div>
                    </li>
                    <li class="d-flex mt-2">
                      <div class="flex-grow-1">
                        <label class="form-check-label fs-14" for="desktopNotification">
                          Show desktop notifications
                        </label>
                        <p class="text-muted">
                          Choose the option you want as your default setting.
                          Block a site: Next to "Not allowed to send
                          notifications," click Add.
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="desktopNotification"
                            checked />
                        </div>
                      </div>
                    </li>
                    <li class="d-flex mt-2">
                      <div class="flex-grow-1">
                        <label class="form-check-label fs-14" for="emailNotification">
                          Show email notifications
                        </label>
                        <p class="text-muted">
                          Under Settings, choose Notifications. Under Select an
                          account, choose the account to enable notifications
                          for.
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="emailNotification" />
                        </div>
                      </div>
                    </li>
                    <li class="d-flex mt-2">
                      <div class="flex-grow-1">
                        <label class="form-check-label fs-14" for="chatNotification">
                          Show chat notifications
                        </label>
                        <p class="text-muted">
                          To prevent duplicate mobile notifications from the
                          Gmail and Chat apps, in settings, turn off Chat
                          notifications.
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="chatNotification" />
                        </div>
                      </div>
                    </li>
                    <li class="d-flex mt-2">
                      <div class="flex-grow-1">
                        <label class="form-check-label fs-14" for="purchaesNotification">
                          Show purchase notifications
                        </label>
                        <p class="text-muted">
                          Get real-time purchase alerts to protect yourself from
                          fraudulent charges.
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="purchaesNotification" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 class="card-title text-decoration-underline mb-3">
                    Delete This Account:
                  </h5>
                  <p class="text-muted">
                    Go to the Data & Privacy section of your profile Account.
                    Scroll to "Your data & privacy options." Delete your Profile
                    Account. Follow the instructions to delete your account :
                  </p>
                  <div>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Enter your password"
                      value="make@321654987" style="max-width: 265px" />
                  </div>
                  <div class="hstack gap-2 mt-3">
                    <BLink href="javascript:void(0);" class="btn btn-soft-danger">Close & Delete This Account</BLink>
                    <BLink href="javascript:void(0);" class="btn btn-light">Cancel</BLink>
                  </div>
                </div>
              </BTab> -->
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>





