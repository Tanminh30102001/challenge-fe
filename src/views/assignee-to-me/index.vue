<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import config from "../../../globalConfig";
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import axios from "axios";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import Lottie from "@/components/widgets/lottie.vue";
import simplebar from "simplebar-vue";
export default {
  data() {
    return {
      taskListModal: false,
      date3: null,
      rangeDateconfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range",
      },
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      timeConfig: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      filterdate: null,
      filterdate1: null,
      filtervalue: "All",
      filtervalue1: "All",
      filtersearchQuery1: null,
      date: null,
      allTask: [],
      allStatus: [],
      allPriority: [],
      allType: [],
      allUser: [],
      eventPriorityOptions: [],
      eventStatusOptions: [],
      eventTypeOptions: [],
      assignedTo: [],
      searchQuery: null,
      page: 1,
      perPage: 8,
      pages: [],
      defaultOptions: {
        animationData: animationData,
      },
      defaultOptions1: {
        animationData: animationData1,
      },
      submitted: false,
      dataEdit: false,
      deleteModal: false,
      event: {
        id: "",
        taskId: "",
        name: "",
        type: "",
        desc: "",
        created_id: "",
        deadline: "",
        priority: "",
        project: "",
        assigned_to: [],
        status: "",
        user_id: null,
      },

      //search
      search: "",
      type: null,
      priority: null,
      status: null,
      datefilter: null,
      //
    };
  },
  components: {
    Layout,
    PageHeader,
    lottie: Lottie,
    Multiselect,
    flatPickr,
    simplebar,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.allTask);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.taskId.toLowerCase().includes(search) ||
            data.task.toLowerCase().includes(search) ||
            data.project.toLowerCase().includes(search) ||
            data.creater.toLowerCase().includes(search) ||
            data.dueDate.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.priority.toLowerCase().includes(search)
          );
        });
      } else if (this.filterdate !== null) {
        if (this.filterdate !== null) {
          var date1 = this.filterdate.split(" to ")[0];
          var date2 = this.filterdate.split(" to ")[1];
        }
        return this.displayedPosts.filter((data) => {
          if (
            new Date(data.dueDate.slice(0, 12)) >= new Date(date1) &&
            new Date(data.dueDate.slice(0, 12)) <= new Date(date2)
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.filtervalue !== null) {
        return this.displayedPosts.filter((data) => {
          // if (data.status === this.filtervalue || this.filtervalue == "All") {
          if (this.filtervalue == "All") {
            return data;
          } else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    allTask() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
    this.fetchTasks();
    this.fetchStatus();
    this.fetchType();
    this.fetchPriority();
    this.fetchUser();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get(config.API_URL + "/getAllUser");
        this.allUser = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchStatus() {
      try {
        const response = await axios.get(config.API_URL + "/getStatus");
        this.allStatus = response.data;
        this.eventStatusOptions = this.allStatus.map((priority) => ({
          value: priority.id,
          label: priority.name,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPriority() {
      try {
        const response = await axios.get(config.API_URL + "/getPriority");
        this.allPriority = response.data;
        this.eventPriorityOptions = this.allPriority.map((priority) => ({
          value: priority.id,
          label: priority.name,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async fetchType() {
      try {
        const response = await axios.get(config.API_URL + "/getType");
        this.allType = response.data;
        this.eventTypeOptions = this.allType.map((priority) => ({
          value: priority.id,
          label: priority.name,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTasks() {
      try {
        this.user_id = JSON.parse(localStorage.getItem("user")).id;
        console.log(this.user_id);
        const response = await axios.get(
          `${config.API_URL}/getTaskByUser/${this.user_id}`
        );
        this.allTask = response.data;
        console.log(this.allTask);
      } catch (error) {
        console.error(error);
      }
    },
    filterData(){
        const filterdata={
          status_id:this.status,
          type_id:this.type,
          priority:this.priority
        }
        console.log(filterdata)
        axios.post(`${config.API_URL}/fillterWithUser/${this.user_id}`, filterdata)
  .then(response => {
    this.allTask=response.data
    console.log(this.allTask);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Error:', error);
  })
    },
    formatDateTo(dateString) {
      // Tạo một đối tượng Date từ chuỗi ngày
      const date = new Date(dateString);

      // Lấy các thành phần ngày, tháng, năm
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2); // Thêm số 0 phía trước nếu cần
      const day = ("0" + date.getDate()).slice(-2); // Thêm số 0 phía trước nếu cần

      // Tạo chuỗi định dạng ngày tháng năm
      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate;
    },
    handleSubmit() {
      this.event.assigned_to = this.assignedTo;
      this.event.deadline = this.formatDateTo(this.event.deadline);
      if (this.dataEdit) {
        this.submitted = true;
        this.event.created_id = JSON.parse(localStorage.getItem("user")).id;

        if (
          this.submitted &&
          this.event.name &&
          this.event.desc &&
          this.event.created_id &&
          this.event.deadline &&
          this.event.status &&
          this.event.priority &&
          this.event.type &&
          this.event.assigned_to.length > 0
        ) {
          this.taskListModal = false;
          axios
            .patch(`${config.API_URL}/updateTask/${this.event.id}`, this.event)
            .then((response) => {
              const data = response.data.data;
              this.allTask = this.allTask.map((item) =>
                item._id.toString() == data._id.toString() ? { ...item, ...data } : item
              );
            })
            .catch((er) => {
              console.log(er);
            });
        }
      } else {
        this.submitted = true;
        this.event.created_id = JSON.parse(localStorage.getItem("user")).id;
        console.log(this.event.assigned_to, "sss");
        if (
          this.submitted &&
          this.event.name &&
          this.event.desc &&
          this.event.created_id &&
          this.event.deadline &&
          this.event.status &&
          this.event.priority &&
          this.event.type &&
          this.event.assigned_to.length > 0
        ) {
          console.log("this.event", this.event);
          // this.event.assigned_to = this.assignedTo;
          this.taskListModal = false;

          axios
            .post(config.API_URL + "/addTask", this.event)
            .then((response) => {
              console.log(response.data);
              this.allTask.unshift(response.data.data);
            })
            .catch((er) => {
              console.log(er);
            });
        }
      }
    },

    onSort(column) {
      this.direction = this.direction === "asc" ? "desc" : "asc";
      const sortedArray = [...this.allTask];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === "asc" ? res : -res;
      });
      this.allTask = sortedArray;
    },

    editDetails(data) {
      // console.log(data)
      this.dataEdit = true;
      this.taskListModal = true;
      this.event = { ...data };
      console.log(this.event);
      this.submitted = false;
    },

    toggleModal() {
      this.taskListModal = true;
      this.dataEdit = false;
      this.event = {};
      this.submitted = false;
    },
    deleteModalToggle(data) {
      this.deleteModal = true;
      this.event._id = data._id;
    },
    deleteData() {
      if (this.event._id) {
        axios
          .delete(`https://api-node.themesbrand.website/apps/task/${this.event._id}`)
          .then((response) => {
            if (response.data.status === "success") {
              this.allTask = this.allTask.filter((item) => item._id != this.event._id);
            }
          })
          .catch((er) => {
            console.log(er);
          });

        this.deleteModal = false;
      }
    },
    SearchData() {
      this.filterdate = this.filterdate1;
      this.filtervalue = this.filtervalue1;
    },

    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.allTask;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (allTask) {
              return allTask.taskId != id;
            });
          });
          this.allTask = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },

    setPages() {
      let numberOfPages = Math.ceil(this.allTask.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(allTask) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return allTask.slice(from, to);
    },
  },
  mounted() {
    console.log(this.allPriority, "this.allPriority");
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );

        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
            document.getElementById("remove-actions").style.display = "block";
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
            document.getElementById("remove-actions").style.display = "none";
          });
        }
      };
    }

    var checkboxes = document.querySelectorAll("#tasksTable .form-check-input");
    Array.from(checkboxes).forEach(function (element) {
      element.addEventListener("change", function (event) {
        var checkedCount = document.querySelectorAll(
          "#tasksTable .form-check-input:checked"
        ).length;

        if (event.target.closest("tr").classList.contains("table-active")) {
          checkedCount > 0
            ? (document.getElementById("remove-actions").style.display = "block")
            : (document.getElementById("remove-actions").style.display = "none");
        } else {
          checkedCount > 0
            ? (document.getElementById("remove-actions").style.display = "block")
            : (document.getElementById("remove-actions").style.display = "none");
        }
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="List View" pageTitle="Tasks" />

    <BRow>
      <BCol lg="12">
        <BCard no-body id="tasksList">
          <BCardHeader class="border-0">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1">All Tasks</h5>
              <div class="flex-shrink-0">
                <div class="d-flex flex-wrap gap-2">
                  <!-- <BButton variant="soft-danger" class="me-1" id="remove-actions" @click="deleteMultiple">
                    <i class="ri-delete-bin-2-line"></i>
                  </BButton> -->
                  <BButton variant="danger" class="add-btn" @click="toggleModal">
                    <i class="ri-add-line align-bottom me-1"></i> Create Task
                  </BButton>
                </div>
              </div>
            </div>
          </BCardHeader>
          <BCardBody class="border border-dashed border-end-0 border-start-0">
            <BFrom>
              <BRow class="g-3">
                <BCol xxl="3" sm="12">
                  <div class="search-box">
                    <input
                      type="text"
                      class="form-control search bg-light border-light"
                      placeholder="Search for task name or task ID"
                      v-model="search"
                    />
                    <i class="ri-search-line search-icon"></i>
                  </div>
                </BCol>

                <BCol xxl="2" sm="4">
                  <flat-pickr
                    v-model="datefilter"
                    placeholder="Select date"
                    class="form-control bg-light border-light"
                  ></flat-pickr>
                </BCol>

                <BCol xxl="2" sm="4">
                  <div class="input-light">
                    <Multiselect
                      v-model="priority"
                      :close-on-select="true"
                      :searchable="true"
                      :create-option="true"
                      placeholder="Select Priority"
                      :options="eventPriorityOptions"
                    />
                  </div>
                </BCol>
                <BCol xxl="2" sm="4">
                  <div class="input-light">
                    <Multiselect
                      v-model="status"
                      :close-on-select="true"
                      :searchable="true"
                      :create-option="true"
                      placeholder="Select Status"
                      :options="eventStatusOptions"
                    />
                  </div>
                </BCol>
                <BCol xxl="2" sm="4">
                  <div class="input-light">
                    <Multiselect
                      v-model="type"
                      :close-on-select="true"
                      :searchable="true"
                      :create-option="true"
                      placeholder="Select Type"
                      :options="eventTypeOptions"
                    />
                  </div>
                </BCol>
                <BCol xxl="1" sm="4">
                  <BButton type="button" variant="primary" @click="filterData">
                    <i class="ri-equalizer-fill me-1 align-bottom"></i>
                    Filters
                  </BButton>
                </BCol>
              </BRow>
            </BFrom>
          </BCardBody>
          <BCardBody>
            <div class="table-responsive table-card mb-4">
              <table class="table align-middle table-nowrap mb-0" id="tasksTable">
                <thead class="table-light text-muted">
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Assigned To</th>
                    <th>Deadline Date</th>
                    <th>Status</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(task, index) of resultQuery" :key="index">
                    <td class="id">
                      <router-link to="/apps/tasks-details" class="fw-medium link-primary"
                        >{{ task.task_code }}
                      </router-link>
                    </td>
                    <td class="project_name">
                      <router-link
                        to="/apps/projects-overview"
                        class="fw-medium link-primary"
                        >{{ task.type_task }}
                      </router-link>
                    </td>
                    <td>
                      <div class="d-flex">
                        <div class="flex-grow-1 tasks_name">
                          {{ task.name }}
                        </div>
                        <div class="flex-shrink-0 ms-4">
                          <ul class="list-inline tasks-list-menu mb-0">
                            <li class="list-inline-item">
                              <router-link to="/apps/tasks-details"
                                ><i class="ri-eye-fill align-bottom me-2 text-muted"></i
                              ></router-link>
                            </li>
                            <li class="list-inline-item" @click="editDetails(task)">
                              <BLink href="#"
                                ><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"
                                ></i
                              ></BLink>
                            </li>
                            <li class="list-inline-item"></li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td class="client_name">{{ task.created_user }}</td>
                    <td class="assignedto">
                      <div class="flex-grow-1 ms-2">
                        <div
                          v-for="(task, index) of task.user_fullnames"
                          :key="index"
                          class="avatar-group-item"
                        >
                          <BLink
                            href="javascript: void(0);"
                            :data-bs-toggle="task.name"
                            v-b-tooltip.hover
                            :title="task.name"
                          >
                            <div class="mr-1">
                              <span style="margin-right: 12px">{{ task.name }}</span>
                            </div>
                          </BLink>
                        </div>
                      </div>
                    </td>
                    <td class="due_date">{{ task.deadline }}</td>
                    <td class="status">
                      <span
                        class="badge text-uppercase"
                        :class="{
                          'bg-secondary-subtle text-secondary':
                            task.status_task == 'In Process',
                          'bg-info-subtle text-info': task.status_task == 'Not Start',
                          'bg-success-subtle text-success': task.status_task == 'Done ',
                          'bg-warning-subtle text-warning': task.status_task == 'Pending',
                        }"
                        >{{ task.status_task }}</span
                      >
                    </td>
                    <td class="priority">
                      <span
                        class="badge text-uppercase"
                        :class="{
                          'bg-danger': task.priority_task == 'High',
                          'bg-success': task.priority_task == 'Low',
                          'bg-warning': task.priority_task == 'Medium',
                        }"
                        >{{ task.priority_task }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="noresult" v-if="resultQuery.length < 1">
                <div class="text-center">
                  <lottie
                    colors="primary:#121331,secondary:#08a88a"
                    :options="defaultOptions"
                    :height="75"
                    :width="75"
                  />
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">
                    We've searched more than 200k+ tasks We did not find any tasks for you
                    search.
                  </p>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end" v-if="resultQuery.length >= 1">
              <div class="pagination-wrap hstack gap-2">
                <BLink
                  class="page-item pagination-prev"
                  href="#"
                  :disabled="page <= 1"
                  @click="page--"
                >
                  Previous
                </BLink>
                <ul class="pagination listjs-pagination mb-0">
                  <li
                    :class="{ active: pageNumber == page, disabled: pageNumber == '...' }"
                    v-for="(pageNumber, index) in pages"
                    :key="index"
                    @click="page = pageNumber"
                  >
                    <BLink class="page" href="#" data-i="1" data-page="8">{{
                      pageNumber
                    }}</BLink>
                  </li>
                </ul>
                <BLink
                  class="page-item pagination-next"
                  href="#"
                  :disabled="page >= pages.length"
                  @click="page++"
                >
                  Next
                </BLink>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- task list modal -->
    <BModal
      v-model="taskListModal"
      id="showmodal"
      modal-class="zoomIn"
      hide-footer
      header-class="p-3 bg-info-subtle taskModal"
      class="v-modal-custom"
      centered
      size="lg"
      :title="dataEdit ? 'Edit Task' : 'Add Task'"
    >
      <BFrom id="addform" class="tablelist-form" autocomplete="off">
        <BRow class="g-3">
          <input type="hidden" id="id" name="" />
          <BCol lg="12">
            <label for="projectName-field" class="form-label">Task Name</label>
            <input
              type="text"
              id="projectName"
              class="form-control"
              placeholder="Task Name"
              v-model="event.name"
              :class="{ 'is-invalid': submitted && !event.name }"
            />
            <div class="invalid-feedback">Please enter a Task Name.</div>
          </BCol>
          <BCol lg="12">
            <div>
              <label for="tasksTitle-field" class="form-label">Desc</label>
              <textarea
                rows="3"
                type="text"
                id="tasksTitle"
                class="form-control"
                placeholder="Description of task"
                v-model="event.desc"
                :class="{ 'is-invalid': submitted && !event.desc }"
              ></textarea>
              <div class="invalid-feedback">Please enter a Description.</div>
            </div>
          </BCol>
          <BCol lg="12">
            <label class="form-label">Assigned To</label>
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
            <div class="invalid-feedback">Please select an Assignee.</div>
          </BCol>

          <BCol lg="6">
            <label for="duedate-field" class="form-label">Deadline Date</label>
            <flat-pickr
              placeholder="Select date"
              :config="timeConfig"
              class="form-control flatpickr-input"
              id="date"
              v-model="event.deadline"
              :class="{ 'is-invalid': submitted && !event.deadline }"
            ></flat-pickr>
            <div class="invalid-feedback">Please enter a date name.</div>
          </BCol>
          <BCol lg="6">
            <label for="ticket-status" class="form-label">Status</label>
            <Multiselect
              id="statusid"
              :close-on-select="true"
              :searchable="true"
              :create-option="true"
              :options="eventStatusOptions"
              v-model="event.status"
              :class="{ 'is-invalid': submitted && !event.status }"
            />
            <div class="invalid-feedback">Please select a status.</div>
          </BCol>
          <BCol lg="6">
            <label for="priority-field" class="form-label">Priority</label>
            <Multiselect
              id="priority"
              :close-on-select="true"
              :searchable="true"
              :create-option="true"
              :options="eventPriorityOptions"
              v-model="event.priority"
              :class="{ 'is-invalid': submitted && !event.priority }"
            />
            <div class="invalid-feedback">Please select a priority.</div>
          </BCol>
          <BCol lg="6">
            <label for="priority-field" class="form-label">Type of Task</label>
            <Multiselect
              id="Type"
              :close-on-select="true"
              :searchable="true"
              :create-option="true"
              :options="eventTypeOptions"
              v-model="event.type"
              :class="{ 'is-invalid': submitted && !event.type }"
            />
            <div class="invalid-feedback">Please select a priority.</div>
          </BCol>
        </BRow>

        <div class="hstack gap-2 justify-content-end mt-3">
          <BButton
            type="button"
            variant="light"
            @click="taskListModal = false"
            id="closemodal"
          >
            Close
          </BButton>
          <BButton type="submit" variant="success" id="add-btn" @click="handleSubmit">
            {{ dataEdit ? "Update" : "Add Task" }}
          </BButton>
        </div>
      </BFrom>
    </BModal>

    <!-- delete modal -->
    <BModal
      v-model="deleteModal"
      modal-class="zoomIn"
      hide-footer
      no-close-on-backdrop
      centered
    >
      <div class="mt-2 text-center">
        <lottie
          class="avatar-xl"
          colors="primary:#f7b84b,secondary:#f06548"
          :options="defaultOptions1"
          :height="75"
          :width="75"
        />
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>Are you sure ?</h4>
          <p class="text-muted mx-4 mb-0">
            Are you sure you want to remove this record ?
          </p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <BButton variant="light" size="w-sm" @click="deleteModal = false">Close</BButton>
        <BButton variant="danger" size="w-sm" id="delete-record" @click="deleteData"
          >Yes, Delete It!</BButton
        >
      </div>
    </BModal>
  </Layout>
</template>
