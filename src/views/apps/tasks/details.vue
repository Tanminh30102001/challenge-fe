<script>
import "@vueform/multiselect/themes/default.css";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import config from "../../../../globalConfig";
import axios from "axios";
import animationData from "@/components/widgets/kbtmbyzy.json";
import Lottie from "@/components/widgets/lottie.vue";
import simplebar from "simplebar-vue";
import moment from "moment/moment";
import Swal from "sweetalert2";

export default {
  props: ["id"],
  data() {
    return {
      modalShow: false,
      value: null,
      defaultOptions: { animationData: animationData },
      taskId: this.$route.params.id,
      taskCode: "",
      created_at: " ",
      deadline: "",
      desc: "",
      priority: "",
      status: " ",
      type: "",
      updated_at: "",
      name: "",
      created_user: " ",
      array_assignee: [],
      allUsers: [],
      assignedTo: [],
    };
  },
  created() {
    this.getDetailsTask();
    this.fetchUser();
  },
  computed: {
    remainingTime() {
      const currentTime = new Date();
      const deadlines = new Date(this.deadline);
      const diff = deadlines - currentTime;
      if (diff < 0) {
        return "OVER DEADLINE";
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours} hrs ${minutes} min`;
      }
    },

    isOverDeadline() {
      const currentTime = new Date();
      return this.deadline - currentTime < 0;
    },
  },
  methods: {
    formatDate(dateString) {
      return moment(dateString).format("YYYY/MM/DD HH:mm:ss");
    },
    async fetchUser() {
      try {
        const response = await axios.get(config.API_URL + "/getAllUser");
        this.allUser = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getDetailsTask() {
      try {
        const response = await axios.get(
          config.API_URL + "/getDetails/" + this.taskId
        );
        console.log(response.data);
        this.taskCode = response.data[0].task_code;
        this.created_at = response.data[0].created_at;
        this.deadline = response.data[0].deadline;
        this.desc = response.data[0].desc;
        this.priority = response.data[0].priority_task;
        this.status = response.data[0].status_task;
        this.type = response.data[0].type_task;
        this.updated_at = response.data[0].updated_at;
        this.name = response.data[0].name;
        this.created_user = response.data[0].created_user;
        this.array_assignee = response.data[0].user_fullnames;
      } catch (error) {
        console.error(error);
      }
    },
    successmsg() {
      Swal.fire("Good job!", "You clicked the button!", "success");
    },
    assgineeMember() {
      console.log(this.assignedTo);
      const data = {
        users: this.assignedTo,
      };
      axios
        .post(`${config.API_URL}/assignUser/${this.taskId}`, data)
        .then(() => {
          this.successmsg();
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
  components: {
    Layout,
    PageHeader,
    lottie: Lottie,

    simplebar,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Task Details" pageTitle="Tasks" />
    <BRow>
      <BCol xxl="3">
        <BCard no-body>
          <BCardBody class="text-center">
            <h6 class="card-title mb-3 flex-grow-1 text-start">
              Time Tracking
            </h6>
            <div class="mb-2">
              <lottie
                colors="primary:#405189,secondary:#02a8b5"
                :options="defaultOptions"
                :height="90"
                :width="90"
              />
            </div>
            <!-- <h3 :class="{ 'text-warning mb-1': isOverDeadline }">{{remainingTime}}</h3> -->
            <h3
              v-if="remainingTime === 'OVER DEADLINE'"
              class="text-danger mb-1"
            >
              OVER DEADLINE
            </h3>
            <h3 v-else>{{ remainingTime }}</h3>
            <h5 class="fs-14 mb-4">{{ name }}</h5>
            <div class="hstack gap-2 justify-content-center">
              <BButton variant="danger" size="sm"
                ><i class="ri-stop-circle-line align-bottom me-1"></i>
                Stop</BButton
              >
              <BButton variant="success" size="sm"
                ><i class="ri-play-circle-line align-bottom me-1"></i>
                Start</BButton
              >
            </div>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-3">
          <BCardBody>
            <div class="table-card">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td class="fw-medium">Tasks No</td>
                    <td>{{ taskCode }}</td>
                  </tr>
                  <tr>
                    <td class="fw-medium">Tasks name</td>
                    <td>{{ name }}</td>
                  </tr>

                  <tr>
                    <td class="fw-medium">Priority</td>
                    <td>
                      <BBadge
                        variant="danger-subtle"
                        class="badge text-uppercase"
                        :class="{
                          'bg-danger': priority == 'High',
                          'bg-success': priority == 'Low',
                          'bg-warning': priority == 'Medium',
                        }"
                        >High
                      </BBadge>
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-medium">Status</td>
                    <td>
                      <BBadge
                        variant="secondary-subtle"
                        :class="{
                          'bg-secondary-subtle text-secondary':
                            status == 'In Process',
                          'bg-info-subtle text-info': status == 'Not Start',
                          'bg-success-subtle text-success': status == 'Done ',
                          'bg-warning-subtle text-warning': status == 'Pending',
                        }"
                      >
                        Inprogress</BBadge
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="fw-medium">Deadline</td>
                    <td>{{ deadline }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BCardBody>
        </BCard>
        <BCard no-body class="mb-3">
          <BCardBody>
            <div class="d-flex mb-3">
              <h6 class="card-title mb-0 flex-grow-1">Assigned To</h6>
              <div class="flex-shrink-0">
                <BButton
                  type="button"
                  variant="soft-danger"
                  size="sm"
                  @click="modalShow = !modalShow"
                >
                  <i class="ri-share-line me-1 align-bottom"></i>
                  Assigned Member
                </BButton>
              </div>
            </div>
            <ul class="list-unstyled vstack gap-3 mb-0">
              <li v-for="(user, index) in array_assignee" :key="index">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="@/assets/images/users/avatar-10.jpg"
                      alt=""
                      class="avatar-xs rounded-circle"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h6 class="mb-1">
                      <router-link to="/pages/profile">{{
                        user.name
                      }}</router-link>
                    </h6>
                    <!-- <p class="text-muted mb-0">Full Stack Developer</p> -->
                  </div>
                  <!-- <div class="flex-shrink-0">
                                     <i class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>
                                    <BDropdown variant="link"
                                        toggle-class="btn btn-icon btn-sm fs-16 text-muted arrow-none"
                                        menu-class="dropdown-menu-end">
                                        <template #button-content>
                                            <i class="ri-more-fill fs-17"></i>
                                        </template>
                                        <BDropdownItem><i class="ri-eye-fill me-2 align-bottom text-muted"></i>
                                            View </BDropdownItem>
                                        <BDropdownItem><i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                            Favorite </BDropdownItem>
                                        <BDropdownItem><i class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>
                                            Delete </BDropdownItem>
                                    </BDropdown>
                                </div> -->
                </div>
              </li>
            </ul>
          </BCardBody>
        </BCard>
        <!-- <BCard no-body>
                    <BCardBody>
                        <h5 class="card-title mb-3">Attachments</h5>
                        <div class="vstack gap-2">
                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-folder-zip-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                App pages.zip</BLink>
                                        </h5>
                                        <div>2.2MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill"></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-file-ppt-2-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                Velzon admin.ppt</BLink>
                                        </h5>
                                        <div>2.4MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill "></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-folder-zip-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <BLink href="javascript:void(0);" class="text-body text-truncate d-block">
                                                Images.zip</BLink>
                                        </h5>
                                        <div>1.2MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <BButton variant="link" size="sm" class="btn-icon text-muted fs-18"><i
                                                    class="ri-download-2-line"></i></BButton>
                                            <BDropdown variant="link"
                                                toggle-class="btn btn-icon text-muted btn-sm fs-18 arrow-none"
                                                menu-class="dropdown-menu-end">
                                                <template #button-content>
                                                    <i class="ri-more-fill"></i>
                                                </template>
                                                <BDropdownItem><i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Rename </BDropdownItem>
                                                <BDropdownItem><i
                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Delete </BDropdownItem>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 text-center">
                                <BButton type="button" variant="success">View more</BButton>
                            </div>
                        </div>
                    </BCardBody>
                </BCard> -->
      </BCol>
      <BCol xxl="9">
        <BCard no-body>
          <BCardBody>
            <div class="text-muted">
              <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
              <p>{{ desc }}</p>

              <h6 class="mb-3 fw-semibold text-uppercase">Sub-tasks</h6>
              <ul class="ps-3 list-unstyled vstack gap-2">
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="productTask"
                    />
                    <label class="form-check-label" for="productTask">
                      Product Design, Figma (Software), Prototype
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="dashboardTask"
                      checked
                    />
                    <label class="form-check-label" for="dashboardTask">
                      Dashboards : Ecommerce, Analytics, Project,etc.
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="calenderTask"
                    />
                    <label class="form-check-label" for="calenderTask">
                      Create calendar, chat and email app pages
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="authenticationTask"
                    />
                    <label class="form-check-label" for="authenticationTask">
                      Add authentication pages
                    </label>
                  </div>
                </li>
              </ul>

              <div class="pt-3 border-top border-top-dashed mt-4">
                <h6 class="mb-3 fw-semibold text-uppercase">Logs Task</h6>
                Last update:
                <p class="fw-medium">{{ formatDate(updated_at) }}</p>
              </div>
            </div>
          </BCardBody>
        </BCard>
        <!-- <BCard no-body>
                    <BCardBody>
                        <BTabs  nav-class="nav-tabs-custom card-header-tabs border-bottom-0">
                            <BTab active title="Comments (5)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <h5 class="card-title mb-4">Comments</h5>
                                <simplebar data-simplebar style="height: 508px;" class="px-3 mx-n3 mb-2">
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile">Joseph Parker</router-link> <small
                                                    class="text-muted">20 Dec 2021 - 05:47AM</small>
                                            </h5>
                                            <p class="text-muted">I am getting message from customers that when they
                                                place order always get error message .</p>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <router-link to="/pages/profile">Tonya Noble</router-link>
                                                        <small class="text-muted">22 Dec 2021 - 02:32PM</small>
                                                    </h5>
                                                    <p class="text-muted">Please be sure to check your Spam mailbox to
                                                        see if your email filters have identified the email from Dell as
                                                        spam.</p>
                                                    <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</BLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile">Thomas Taylor</router-link> <small
                                                    class="text-muted">24 Dec 2021 - 05:20PM</small>
                                            </h5>
                                            <p class="text-muted">If you have further questions, please contact Customer
                                                Support from the “Action Menu” on your <BLink href="javascript:void(0);"
                                                    class="text-decoration-underline">Online
                                                    Order Support</BLink>.</p>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile">Tonya Noble</router-link> <small
                                                    class="text-muted">26 min ago</small>
                                            </h5>
                                            <p class="text-muted">Your <BLink href="javascript:void(0)"
                                                    class="text-decoration-underline">Online Order Support</BLink>
                                                provides
                                                you with the most current status of your order. To help manage your
                                                order refer to the “Action Menu” to initiate return, contact Customer
                                                Support and more.</p>
                                            <BRow class="g-2 mb-3">
                                                <BCol lg="1" sm="2" cols="6">
                                                    <img src="@/assets/images/small/img-4.jpg" alt=""
                                                        class="img-fluid rounded">
                                                </BCol>
                                                <BCol lg="1" sm="2" cols="6">
                                                    <img src="@/assets/images/small/img-5.jpg" alt=""
                                                        class="img-fluid rounded">
                                                </BCol>
                                            </BRow>
                                            <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</BLink>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <router-link to="/pages/profile">Nancy Martino</router-link>
                                                        <small class="text-muted">8 sec ago</small>
                                                    </h5>
                                                    <p class="text-muted">Other shipping methods are available at
                                                        checkout if you want your purchase delivered faster.</p>
                                                    <BLink href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</BLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </simplebar>
                                <form class="mt-4">
                                    <BRow class="g-3">
                                        <BCol lg="12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Leave a
                                                Comments</label>
                                            <textarea class="form-control bg-light border-light"
                                                id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Enter comments"></textarea>
                                        </BCol>
                                        <BCol cols="12" class="text-end">
                                            <BButton type="button" variant="ghost-secondary" class="btn-icon me-1"><i
                                                    class="ri-attachment-line fs-16"></i></BButton>
                                            <BLink href="javascript:void(0);" class="btn btn-success">Post Comments
                                            </BLink>
                                        </BCol>
                                    </BRow>
                                </form>
                            </BTab>
                            <BTab title=" Attachments File (4)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                        <thead class="table-light text-muted">
                                            <tr>
                                                <th scope="col">File Name</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Upload Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-primary-subtle text-primary rounded fs-20">
                                                                <i class="ri-file-zip-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0)">App
                                                                    pages.zip</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Zip File</td>
                                                <td>2.22 MB</td>
                                                <td>21 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                                                <i class="ri-file-pdf-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Velzon
                                                                    admin.ppt</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>PPT File</td>
                                                <td>2.24 MB</td>
                                                <td>25 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-info-subtle text-info rounded fs-20">
                                                                <i class="ri-folder-line"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Images.zip</BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>ZIP File</td>
                                                <td>1.02 MB</td>
                                                <td>28 Dec, 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                                                <i class="ri-image-2-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <BLink href="javascript:void(0);">Bg-pattern.png
                                                                </BLink>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>PNG File</td>
                                                <td>879 KB</td>
                                                <td>02 Nov 2021</td>
                                                <td>
                                                    <BDropdown toggle-class="btn btn-light btn-icon arrow-none p-0"
                                                        no-caret>
                                                        <template #button-content> <i class="ri-equalizer-fill"></i>
                                                        </template>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                                        </BDropdownItem>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                                        </BDropdownItem>
                                                        <li class="dropdown-divider"></li>
                                                        <BDropdownItem href="#"><i
                                                                class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                                        </BDropdownItem>
                                                    </BDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BTab>
                            <BTab title="Time Entries (9 hrs 13 min)" class="nav-item pt-4" style="position: relative; top: 10px;">
                                <h6 class="card-title mb-4 pb-2">Time Entries</h6>
                                <div class="table-responsive table-card">
                                    <table class="table align-middle mb-0">
                                        <thead class="table-light text-muted">
                                            <tr>
                                                <th scope="col">Member</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Timer Idle</th>
                                                <th scope="col">Tasks Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div class="d-flex align-items-center">
                                                        <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <router-link to="/pages/profile" class="fw-medium">Thomas
                                                                Taylor</router-link>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>02 Jan, 2022</td>
                                                <td>3 hrs 12 min</td>
                                                <td>05 min</td>
                                                <td>Apps Pages</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <router-link to="/pages/profile" class="fw-medium">Tonya
                                                                Noble</router-link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>28 Dec, 2021</td>
                                                <td>1 hrs 35 min</td>
                                                <td>-</td>
                                                <td>Profile Page Design</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="d-flex align-items-center">
                                                        <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                            class="rounded-circle avatar-xxs">
                                                        <div class="flex-grow-1 ms-2">
                                                            <router-link to="/pages/profile" class="fw-medium">Tonya
                                                                Noble</router-link>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>27 Dec, 2021</td>
                                                <td>4 hrs 26 min</td>
                                                <td>03 min</td>
                                                <td>Ecommerce Dashboard</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard> -->
      </BCol>
    </BRow>

    <BModal
      v-model="modalShow"
      hide-footer
      title="Team Members"
      body-class="p-4"
      content-class="border-0"
      header-class="p-3 ps-4 bg-success-subtle"
      class="v-modal-custom"
      centered
    >
      <div class="search-box mb-3">
        <input
          type="text"
          class="form-control bg-light border-light"
          placeholder="Search here..."
        />
        <i class="ri-search-line search-icon"></i>
      </div>
      <div class="mb-4 d-flex align-items-center">
        <div class="me-2">
          <h5 class="mb-0 fs-13">Members :</h5>
        </div>
        <!-- <li v-for="(user, index) in array_assignee"
                            :key="index">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                        class="avatar-xs rounded-circle">
                                </div>
                            </div>
                        </li> -->
        <div
          class="avatar-group justify-content-center"
          v-for="(user, index) in array_assignee"
          :key="index"
        >
          <BLink
            href="javascript: void(0);"
            class="avatar-group-item"
            v-b-tooltip.hover
            title="Tonya Noble"
          >
            <div class="avatar-xs">
              <img
                src="@/assets/images/users/avatar-10.jpg"
                alt=""
                class="rounded-circle img-fluid"
              />
            </div>
          </BLink>
        </div>
      </div>
      <simplebar data-simplebar style="height: 95px">
        <ul class="list-unstyled vstack gap-2 mb-0">
          <li v-for="(data, index) of allUser" :key="index">
            <div class="form-check d-flex align-items-center">
              <input
                class="form-check-input me-3"
                type="checkbox"
                :value="data.id"
                :id="'checkbox_' + data.id"
                v-model="assignedTo"
              />
              <label
                class="form-check-label d-flex align-items-center"
                :for="'checkbox_' + data.id"
              >
                <span class="flex-shrink-0">
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="avatar-xxs rounded-circle"
                  />
                </span>
                <span class="flex-grow-1 ms-2">{{ data.username }}</span>
              </label>
            </div>
          </li>
        </ul>
      </simplebar>
      <!-- <div class="mx-n4 px-4" data-simplebar style="max-height: 225px;">
                <div class="vstack gap-3">
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Nancy Martino
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                                HB
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Henry Baird
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Frank Hook
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <BLink href="javascript:void(0);" class="text-body d-block">Jennifer Carter
                                </BLink>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <BButton type="button" variant="light" size="sm">Add</BButton>
                        </div>
                    </div>
                </div>
            </div> -->
      <div class="modal-footer v-modal-footer">
        <BButton
          type="button"
          variant="light"
          class="w-xs"
          @click="modalShow = false"
        >
          Cancel</BButton
        >
        <BButton
          type="button"
          variant="success"
          class="w-xs"
          @click="assgineeMember"
          >Assigned</BButton
        >
      </div>
    </BModal>
  </Layout>
</template>
