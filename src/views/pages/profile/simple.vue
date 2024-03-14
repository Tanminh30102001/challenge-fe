<script>
import Layout from "@/layouts/main.vue";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import axios from "axios";
import config from "../../../../globalConfig";

export default {
  data() {
    return {
      Autoplay, Navigation,
      user: JSON.parse(localStorage.getItem('user')),
      userId: this.$route.params.id,
      tasks:[],
      fullname:"",
      approve:null,
      role:null,
      username:"",
      email:"",
      created_at:"",
      phone:"",
      address:"",
      position:"",
      description:"",
      updated_at:"",
    };
  },
  components: {
    Layout,
    Swiper,
    SwiperSlide,
  },
  created(){
  this.getDetailUser()
  this.fetchTasks()
  },
  methods: {
    formatDate(dateString) {
      return moment.utc(dateString).format("YYYY/MM/DD HH:mm:ss");
    },
    remainingTime(deadline) {
      const currentTime = new Date();
      const deadlines = new Date(deadline);
      const diff = deadlines - currentTime;
      if (diff < 0) {
        return "OVER DEADLINE";
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours} hrs ${minutes} min`;
      }
    },
    async fetchTasks() {
      try {
        this.user_id = JSON.parse(localStorage.getItem("user")).id;

        const response = await axios.get(
          `${config.API_URL}/getTaskByUser/${this.userId}`
        );
        this.tasks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getDetailUser() {
      try {
        const response = await axios.get(
          `${config.API_URL}/getDetailsUser/${this.userId}`
        );
        console.log(response.data)
        this.fullname=response.data[0].fullname;
      this.approve=response.data[0].approve;
      this.username=response.data[0].username;
      this.role=response.data[0].role;
      this.email=response.data[0].email;
      this.created_at=response.data[0].created_at;
      this.updated_at=response.data[0].updated_at;
      this.phone=response.data[0].phone;
      this.address=response.data[0].address;
      this.position=response.data[0].position;
      this.description=response.data[0].description;
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<template>
  <Layout>
    <div class="profile-foreground position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg">
        <img src="@/assets/images/profile-bg.jpg" alt="" class="profile-wid-img" />
      </div>
    </div>
    <div class="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
      <BRow class="g-4">
        <BCol cols="auto">
          <div class="avatar-lg">
            <img src="@/assets/images/users/avatar-1.jpg" alt="user-img" class="img-thumbnail rounded-circle" />
          </div>
        </BCol>
        <BCol>
          <div class="p-2">
            <h3 class="text-white mb-1">{{fullname}}</h3>
            <p class="text-white text-opacity-75">{{poition}}</p>
            <div class="hstack text-white-50 gap-1">
              <div class="me-2">
                <i class="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i> <span v-if="approve === 1">Approved</span>
                <span v-else>Not approve</span> 
              </div>
              <div> 
                
                <i class="ri-user-2-line me-1 text-white text-opacity-75 fs-16 align-middle"></i> <span v-if="role === 1">Staff</span>
                <span v-else>Manager</span>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </div>

    <BRow>
      <BCol lg="12">
        <div>
          <BTabs
            nav-class=" animation-nav profile-nav gap-2 gap-lg-3  pt-4 text-muted"
            pills
          >
            <BTab title="Overview" class="nav-item pt-4">
              <template #title>
                <i class="ri-airplay-fill d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Overview</span>
              </template>
              <BRow>
                <BCol xxl="3">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">Info</h5>
                      <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th class="ps-0" scope="row">Full Name :</th>
                              <td class="text-muted">{{ fullname }}</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Mobile :</th>
                              <td class="text-muted">{{ phone }}</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">E-mail :</th>
                              <td class="text-muted">{{ email }}</td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Address :</th>
                              <td class="text-muted">
                                {{ address }}
                              </td>
                            </tr>
                            <tr>
                              <th class="ps-0" scope="row">Joining Date</th>
                              <td class="text-muted">
                                {{ formatDate(created_at) }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </BCardBody>
                  </BCard>

                  <BCard no-body> </BCard>

                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-4">Skills</h5>
                      <div class="d-flex flex-wrap gap-2 fs-15">
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >Photoshop</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >illustrator</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >HTML</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >CSS</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >Javascript</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >Php</BLink
                        >
                        <BLink
                          href="javascript:void(0);"
                          class="badge bg-primary-subtle text-primary"
                          >Python</BLink
                        >
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol xxl="9">
                  <BCard no-body>
                    <BCardBody>
                      <h5 class="card-title mb-3">About</h5>
                      <p>
                        {{ description }}
                      </p>
                    
                      <BRow>
                        <BCol cols="12" md="4">
                          <div class="d-flex mt-4">
                            <div class=" ">
                              <p class="mb-1">Designation :</p>
                              <h6 class="text-truncate mb-0">
                                {{ position }}
                              </h6>
                            </div>
                          </div>
                        </BCol>
                      </BRow>
                    </BCardBody>
                  </BCard>

                  <BRow>
                    <BCol lg="12">
                      <BCard no-body>
                        <BCardHeader class="align-items-center d-flex">
                          <BCardTitle class="mb-0 me-2">Recent Activity</BCardTitle>
                        </BCardHeader>
                        <BCardBody>
                          <h5 class="card-title mb-3">Recent Task</h5>
                          <div class="swiper project-swiper">
                            <swiper :slides-per-view="3" :space-between="50">
                              <swiper-slide v-for="(task, index) of tasks" :key="index">
                                <div class="swiper-slide">
                                  <BCard
                                    no-body
                                    class="profile-project-card shadow-none profile-project-success mb-0"
                                  >
                                    <BCardBody class="p-4">
                                      <div class="d-flex">
                                        <div
                                          class="flex-grow-1 text-muted overflow-hidden"
                                        >
                                          <h5 class="fs-14 text-truncate mb-1">
                                            <BLink  :to="{ name: 'tasks-details', params: { id: task.id } }" class="text-body"
                                              >{{task.name}}</BLink
                                            >
                                          </h5>
                                          <p class="text-muted text-truncate mb-0">
                                            Last Update :
                                            <span class="fw-semibold text-body"
                                              >{{remainingTime(task.updated_at)}}</span
                                            >
                                          </p>
                                          <p class="text-muted text-truncate mb-0">
                                            Create day :
                                            <span class="fw-semibold text-body"
                                              >{{formatDate(task.created_at)}}</span
                                            >
                                          </p>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                          <span
                                          class="badge text-uppercase"
                                          :class="{
                                            'bg-secondary-subtle text-secondary':
                                              task.status_task == 'In Process',
                                            'bg-info-subtle text-info':
                                              task.status_task == 'Not Start',
                                            'bg-success-subtle text-success':
                                              task.status_task == 'Done ',
                                            'bg-warning-subtle text-warning':
                                              task.status_task == 'Pending',
                                          }"
                                          >{{ task.status_task }}</span
                                        >
                                        </div>
                                      </div>
                                      <div class="d-flex mt-4">
                                        <div class="flex-grow-1">
                                          <div class="d-flex align-items-center gap-2">
                                            <div>
                                              <h5 class="fs-12 text-muted mb-0">
                                                Members :
                                              </h5>
                                            </div>
                                            <div class="avatar-group">
                                              <div class="avatar-group-item">
                                                <div class="avatar-xs"  v-for="(task, index) of task.user_fullnames"
                                                :key="index">
                                                  <img
                                                    src="@/assets/images/users/avatar-4.jpg"
                                                    alt=""
                                                    class="rounded-circle img-fluid"
                                                  />
                                                </div>
                                              </div>
                                            
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </BCardBody>
                                  </BCard>
                                </div>
                              </swiper-slide>
                            </swiper>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BCol>
              </BRow>
            </BTab>
            <!-- <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-list-unordered d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Activities</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <h5 class="card-title mb-3">Activities</h5>
                  <div class="acitivity-timeline">
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-1.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Oliver Phillips
                          <BBadge variant="primary-subtle" class="text-primary align-middle">New</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          We talked about a project on linkedin.
                        </p>
                        <small class="mb-0 text-muted">Today</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                        <div class="avatar-title bg-success-subtle text-success rounded-circle">
                          N
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Nancy Martino
                          <BBadge variant="secondary-subtle" class="text-secondary align-middle">In Progress</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          <i class="ri-file-text-line align-middle ms-2"></i>
                          Create new project Building product
                        </p>
                        <div class="avatar-group mb-2">
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Christi">
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle bg-light text-primary">
                                R
                              </div>
                            </div>
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="more">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle">2+</div>
                            </div>
                          </BLink>
                        </div>
                        <small class="mb-0 text-muted">Yesterday</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-2.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Natasha Carey
                          <BBadge variant="success-subtle" class="text-success align-middle">Completed</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          Adding a new event with attachments
                        </p>
                        <BRow>
                          <BCol xxl="4">
                            <BRow class="border border-dashed gx-2 p-2 mb-2">
                              <BCol cols="4">
                                <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                              <BCol cols="4">
                                <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                              <BCol cols="4">
                                <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded" />
                              </BCol>
                            </BRow>
                          </BCol>
                        </BRow>
                        <small class="mb-0 text-muted">25 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-6.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Bethany Johnson</h6>
                        <p class="text-muted mb-2">
                          added a new member to velzon dashboard
                        </p>
                        <small class="mb-0 text-muted">19 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                            <i class="ri-shopping-bag-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Your order is placed
                          <BBadge variant="danger-subtle" class="text-danger align-middle ms-1">Out of Delivery</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          These customers can rest assured their order has been
                          placed.
                        </p>
                        <small class="mb-0 text-muted">16 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-7.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Lewis Pratt</h6>
                        <p class="text-muted mb-2">
                          They all have something to say beyond the words on the
                          page. They can come across as casual or neutral,
                          exotic or graphic.
                        </p>
                        <small class="mb-0 text-muted">22 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-info-subtle text-info">
                            <i class="ri-line-chart-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Monthly sales report</h6>
                        <p class="text-muted mb-2">
                          <span class="text-danger">2 days left</span>
                          notification to submit the monthly sales report.
                          <BLink href="javascript:void(0);" class="link-warning text-decoration-underline">Reports
                            Builder</BLink>
                        </p>
                        <small class="mb-0 text-muted">15 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-8.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          New ticket received
                          <BBadge variant="success-subtle" class="text-success align-middle">Completed</BBadge>
                        </h6>
                        <p class="text-muted mb-2">
                          User
                          <span class="text-secondary">Erica245</span> submitted
                          a ticket.
                        </p>
                        <small class="mb-0 text-muted">26 Aug</small>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-price-tag-line d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Projects</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <BRow>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-warning">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Chat App Update</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">2 year Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        J
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">ABC Project Customization</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">2 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary fs-10">
                                Progress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-info">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Client - Frank Hook</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">1 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        M
                                      </div>
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Velzon Project</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">11 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-danger">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Brand Logo Design</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">10 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        E
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Chat App</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">8 hr Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        R
                                      </div>
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-warning">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Project Update</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">48 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning fs-10">
                                Inprogress
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Client - Jennifer</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">30 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary fs-10">
                                Process
                              </BBadge>
                            </div>
                          </div>

                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-xxl-0 profile-project-info">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Business Template - UI/UX design</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">7 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-xxl-0 profile-project-success">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Update Project</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">1 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        A
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-sm-0 profile-project-danger">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">Bank Management System</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">10 month Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="success-subtle" class="bg-success-subtle text-success fs-10">
                                Completed
                              </BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-primary">
                                        2+
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol xxl="3" sm="6">
                      <BCard no-body class="profile-project-card shadow-none mb-0 profile-project-primary">
                        <BCardBody class="p-4">
                          <div class="d-flex">
                            <div class="flex-grow-1 text-muted overflow-hidden">
                              <h5 class="fs-14 text-truncate">
                                <BLink href="#" class="text-body">PSD to HTML Convert</BLink>
                              </h5>
                              <p class="text-muted text-truncate mb-0">
                                Last Update :
                                <span class="fw-semibold text-body">29 min Ago</span>
                              </p>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <BBadge variant="info-subtle" class="bg-info-subtle text-info fs-10">New</BBadge>
                            </div>
                          </div>
                          <div class="d-flex mt-4">
                            <div class="flex-grow-1">
                              <div class="d-flex align-items-center gap-2">
                                <div>
                                  <h5 class="fs-12 text-muted mb-0">
                                    Members :
                                  </h5>
                                </div>
                                <div class="avatar-group">
                                  <div class="avatar-group-item">
                                    <div class="avatar-xs">
                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                        class="rounded-circle img-fluid" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol lg="12">
                      <div class="mt-4">
                        <ul class="pagination pagination-separated justify-content-center mb-0">
                          <li class="page-item disabled">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-left"></i>
                            </BLink>
                          </li>
                          <li class="page-item active">
                            <BLink href="javascript:void(0);" class="page-link">1</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">2</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">3</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">4</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link">5</BLink>
                          </li>
                          <li class="page-item">
                            <BLink href="javascript:void(0);" class="page-link"><i class="mdi mdi-chevron-right"></i>
                            </BLink>
                          </li>
                        </ul>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BTab>
            <BTab class="nav-item pt-4">
              <template #title>
                <i class="ri-folder-4-line d-inline-block d-md-none"></i>
                <span class="d-none d-md-inline-block">Documents</span>
              </template>
              <BCard no-body>
                <BCardBody>
                  <div class="d-flex align-items-center mb-4">
                    <h5 class="card-title flex-grow-1 mb-0">Documents</h5>
                    <div class="flex-shrink-0">
                      <input class="form-control d-none" type="file" id="formFile" />
                      <label for="formFile" class="btn btn-danger"><i class="ri-upload-2-fill me-1 align-bottom"></i>
                        Upload File</label>
                    </div>
                  </div>
                  <BRow>
                    <BCol lg="12">
                      <div class="table-responsive">
                        <table class="table table-borderless align-middle mb-0">
                          <thead class="table-light">
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
                                    <div class="avatar-title bg-primary-subtle text-primary rounded fs-20">
                                      <i class="ri-file-zip-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0)">Artboard-documents.zip</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Zip File</td>
                              <td>4.57 MB</td>
                              <td>12 Dec 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                      <i class="ri-file-pdf-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Bank Management System</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>PDF File</td>
                              <td>8.89 MB</td>
                              <td>24 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-secondary-subtle text-secondary rounded fs-20">
                                      <i class="ri-video-line"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Tour-video.mp4</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>MP4 File</td>
                              <td>14.62 MB</td>
                              <td>19 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-success-subtle text-success rounded fs-20">
                                      <i class="ri-file-excel-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Account-statement.xsl</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>XSL File</td>
                              <td>2.38 KB</td>
                              <td>14 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-info-subtle text-info rounded fs-20">
                                      <i class="ri-folder-line"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Project Screenshots Collection</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>Folder File</td>
                              <td>87.24 MB</td>
                              <td>08 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="avatar-sm">
                                    <div class="avatar-title bg-danger-subtle text-danger rounded fs-20">
                                      <i class="ri-image-2-fill"></i>
                                    </div>
                                  </div>
                                  <div class="ms-3 flex-grow-1">
                                    <h6 class="fs-15 mb-0">
                                      <BLink href="javascript:void(0);">Velzon-logo.png</BLink>
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>PNG File</td>
                              <td>879 KB</td>
                              <td>02 Nov 2021</td>
                              <td>
                                <BDropdown variant="light" toggle-class="arrow-none px-1" class="btn-icon" no-caret>
                                  <template #button-content><i class="ri-equalizer-fill"></i>
                                  </template>
                                  <BDropdownItem href="#">
                                    <i class="ri-eye-fill me-2 align-middle text-muted"></i>View
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-download-2-fill me-2 align-middle text-muted"></i>Download
                                  </BDropdownItem>
                                  <BDropdownItem href="#">
                                    <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete
                                  </BDropdownItem>
                                </BDropdown>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-center mt-3">
                        <BLink href="javascript:void(0);" class="text-success"><i
                            class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                          Load more
                        </BLink>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BTab> -->
          </BTabs>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>
.tamp {
  position: absolute;
  top: 17px;
  right: 16px;
}
</style>
