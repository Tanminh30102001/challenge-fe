<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
// import { candidatelist } from "@/common/data";
import axios from "axios";
import config from "../../../globalConfig";

export default {
  data() {
    return {
      searchQuery: null,
      page: 1,
      perPage: 8,
      pages: [],
      candidatelist: [],
      email:"",
      username:"",
      password:"",
      fullname:"",
      modalAddUser: false,
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.candidatelist);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.name.toLowerCase().includes(search) ||
            data.designation.toLowerCase().includes(search) ||
            data.type.toLowerCase().includes(search) ||
            data.ratingCount.toLowerCase().includes(search) ||
            data.rating.toLowerCase().includes(search) ||
            data.location.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  // watch: {
  //   candidatelist() {
  //     this.setPages();
  //   },
  // },
  created() {
    this.setPages();
    this.getAllUser();
  },
  mounted() {
    document.querySelectorAll(".custom-toggle").forEach((item) => {
      item.addEventListener("click", function () {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      });
    });
  },
  methods: {
    async getAllUser() {
      try {
        const response = await axios.get(config.API_URL + "/getAllUser");
        this.candidatelist = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    activeUser(id) {
      console.log(id);
      axios
        .patch(`${config.API_URL}/approveUser/${id}`, this.event)
        .then(() => {
          this.getAllUser();
        })
        .catch((er) => {
          console.log(er);
        });
    },
    async addUsser(){
      try {
        const newUser = {
          fullname: this.fullname,
          username: this.username,
          email: this.email,
          password: this.password,
          approve:1
        };
        const response = await axios.post(config.API_URL + "/register", newUser);
        console.log('User added successfully:', response.status);
        this.modalAddUser=false;
      } catch (error) {
        console.error('Error adding user:', error);

      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.candidatelist.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(candidatelist) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return candidatelist.slice(from, to);
    },
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="List View" pageTitle="Candidate Lists" />
    <BRow class="g-4 mb-4">
      <BCol sm="auto">
        <div>
          <BLink class="btn btn-success" @click="modalAddUser=true"
            ><i class="ri-add-line align-bottom me-1"></i> Add New User</BLink
          >
        </div>
      </BCol>
      <BCol sm>
        <div class="d-md-flex justify-content-sm-end gap-2">
          <div class="search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0">
            <input
              type="text"
              class="form-control"
              id="searchJob"
              autocomplete="off"
              placeholder="Search for candidate name or designation..."
              v-model="searchQuery"
            />
            <i class="ri-search-line search-icon"></i>
          </div>
          <!-- <div class="w-md">
            <select class="form-select" data-choices data-choices-search-false>
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Yesterday" selected>Yesterday</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="This Month">This Month</option>
              <option value="Last Year">Last Year</option>
            </select>
          </div> -->
        </div>
      </BCol>
    </BRow>

    <BRow class="gy-2 mb-2" id="candidate-list">
      <BCol lg="12" v-for="(data, index) of resultQuery" :key="index">
        <BCard no-body class="mb-0">
          <BCardBody>
            <div class="d-lg-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avatar-sm rounded">
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="member-img img-fluid d-block rounded"
                  />
                </div>
              </div>
              <div class="ms-3">
                <router-link to="/pages/profile">
                  <h5 class="fs-16 mb-2">{{ data.fullname }}</h5>
                </router-link>
                <p class="text-muted mb-0">{{ data.username }}</p>
              </div>
              <div class="d-flex gap-4 mt-0 text-muted mx-auto">
                <div>
                  <i class="las la-user-check text-primary me-1 align-bottom"></i>
                  <span
                    class="badge"
                    :class="{
                      'bg-success-subtle text-success': data.approve == 1,
                      'bg-danger-subtle text-danger': data.approve == 0,
                    }"
                    >{{ data.approve === 1 ? "Active" : "Not Active" }}</span
                  >
                </div>
                <div>
                  <i class="ri-time-line text-primary me-1 align-bottom"></i>
                  <span
                    class="badge"
                    :class="{
                      'bg-success-subtle text-success': data.role == 1,
                      'bg-danger-subtle text-danger': data.role == 2,
                    }"
                    >{{ data.role === 1 ? "Staff" : "Manage" }}</span
                  >
                </div>
              </div>

              <div>
                <BButton
                  href="#!"
                  class="btn btn-soft-success me-1"
                  @click="activeUser(data.id)"
                  :disabled="data.approve === 1"
                >
                  <i class="ri-check-double-line"></i>Active</BButton
                >
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow class="g-0 justify-content-end mb-4" id="pagination-element">
      <BCol sm="6">
        <div
          class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"
          v-if="pages.length > 1"
        >
          <div class="page-item">
            <BLink
              href="#"
              class="page-link"
              id="page-prev"
              :disabled="page <= 1"
              @click="page--"
              >Previous</BLink
            >
          </div>
          <span id="page-num" class="pagination">
            <div
              class="page-item"
              :class="{ active: pageNumber == page, disabled: pageNumber == '...' }"
              v-for="(pageNumber, index) in pages"
              :key="index"
              @click="page = pageNumber"
            >
              <BLink class="page-link clickPageNumber" href="javascript:void(0);">{{
                pageNumber
              }}</BLink>
            </div>
          </span>
          <div class="page-item">
            <BLink
              href="#"
              class="page-link"
              id="page-next"
              :disabled="page >= pages.length"
              @click="page++"
              >Next</BLink
            >
          </div>
        </div>
      </BCol>
    </BRow>
    <!-- Modal add user-->
    <BModal
      v-model="modalAddUser"
      hide-footer
      body-class="p-0"
      header-class="p-3"
      class="v-modal-custom"
      title="Sign Up"
      content-class="border-0 overflow-hidden"
      centered
    >
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter full name"
              v-model="fullname"
            />
          </div>
          <div class="mb-3">
            <label for="fullName" class="form-label">User name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="EnterUser name"
              v-model="username"/>
          </div>
          <div class="mb-3">
            <label for="emailInput1" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput1"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword" class="form-label">Password</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Enter password"
              v-model="password"
            />
          </div>
          <div class="text-end">
            <BButton type="submit" variant="primary" @click="addUsser">Add User</BButton>
          </div>
        </form>
      </div>
    </BModal>
  </Layout>
</template>
