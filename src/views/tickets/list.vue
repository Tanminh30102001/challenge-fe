<script>
import { CountTo } from "vue3-count-to";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Swal from "sweetalert2";
import axios from 'axios';
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";

export default {
  data() {
    return {
      modalShow: false,
      rangeDateconfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range",
      },
      config: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date2: null,
      filterdate: null,
      filterdate1: null,
      filtervalue: 'All',
      filtervalue1: 'All',
      filtersearchQuery1: null,
      searchQuery: null,
      page: 1,
      perPage: 8,
      pages: [],
      ticketsList: [],
      defaultOptions: {
        animationData: animationData
      },
      defaultOptions1: {
        animationData: animationData1
      },

      //
      submitted: false,

      dataEdit: false,
      deleteModal: false,
      event: {
        _id: "",
        id: "",
        assigned: "",
        client: "",
        create: "",
        due: "",
        title: "",
        priority: "",
        status: ""
      },
      //

    };
  },
  components: {
    Layout,
    PageHeader,
    CountTo,
    lottie: Lottie,
    Multiselect,
    flatPickr,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.ticketsList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.title.toLowerCase().includes(search) ||
            data.client.toLowerCase().includes(search) ||
            data.assigned.toLowerCase().includes(search) ||
            data.create.toLowerCase().includes(search) ||
            data.due.toLowerCase().includes(search) ||
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
            new Date(data.due.slice(0, 12)) >= new Date(date1) &&
            new Date(data.due.slice(0, 12)) <= new Date(date2)
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.filtervalue !== null) {
        return this.displayedPosts.filter((data) => {
          if (data.status === this.filtervalue || this.filtervalue == 'All') {
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
    ticketsList() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  beforeMount() {
    axios.get('https://api-node.themesbrand.website/apps/ticket').then((data) => {
      this.ticketsList = [];
      data.data.data.forEach((row) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
          "Oct", "Nov", "Dec"
        ];
        var dd = new Date(row.create);
        var due = new Date(row.due);
        row.create = dd.getDate() + " " + monthNames[dd.getMonth()] + ", " + dd.getFullYear();
        row.due = due.getDate() + " " + monthNames[due.getMonth()] + ", " + due.getFullYear();
        this.ticketsList.push(row);
      });
    }).catch((er) => {
      console.log(er);
    });
  },
  methods: {
    SearchData() {
      this.filterdate = this.filterdate1;
      this.filtervalue = this.filtervalue1;
    },

    // 
    handleSubmit() {
      if (this.dataEdit) {
        this.submitted = true;
        if (this.submitted && (this.event.title && this.event.client && this.event.assigned && this.event.create && this.event.due && this.event.priority && this.event.status)) {
          this.modalShow = false;

          axios.patch(`https://api-node.themesbrand.website/apps/ticket/${this.event._id}`, this.event)
            .then((response) => {
              const data = response.data.data;
              this.ticketsList = this.ticketsList.map(item => item._id.toString() == data._id.toString() ? { ...item, ...data } : item);
            }).catch((er) => {
              console.log(er);
            });
        }
      } else {
        this.submitted = true;
        if (this.submitted && (this.event.title && this.event.client && this.event.assigned && this.event.create && this.event.due && this.event.priority && this.event.status)) {
          const data = {
            _id: (Math.floor(Math.random() * 100 + 20) - 20),
            id: '#VLZ4' + (Math.floor(Math.random() * 100 + 20) - 20),
            ...this.event
          };
          this.modalShow = false;

          axios.post(`https://api-node.themesbrand.website/apps/ticket`, data)
            .then((response) => {
              this.ticketsList.unshift(response.data.data);
            }).catch((er) => {
              console.log(er);
            });
        }
      }
    },

    editDetails(data) {
      this.dataEdit = true;
      this.modalShow = true;
      this.event = { ...data };

      this.submitted = false;
    },

    toggleModal() {
      this.modalShow = true;
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
        axios.delete(`https://api-node.themesbrand.website/apps/ticket/${this.event._id}`)
          .then((response) => {
            if (response.data.status === 'success') {
              this.ticketsList = this.ticketsList.filter((item) => item._id != this.event._id);
            }
          }).catch((er) => {
            console.log(er);
          });

        this.deleteModal = false;
      }
    },
    //

    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.ticketsList];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.ticketsList = sortedArray;
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
          var cusList = this.ticketsList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.id != id;
            });
          });
          this.ticketsList = cusList;
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
      let numberOfPages = Math.ceil(this.ticketsList.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(ticketsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return ticketsList.slice(from, to);
    },
  },
  mounted() {
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
            document.getElementById('remove-actions').style.display = 'block';
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
            document.getElementById('remove-actions').style.display = 'none';
          });
        }
      };
    }

    var checkboxes = document.querySelectorAll('#ticketsList .form-check-input');
    Array.from(checkboxes).forEach(function (element) {
      element.addEventListener('change', function (event) {
        var checkedCount = document.querySelectorAll('#ticketsList .form-check-input:checked').length;

        if (event.target.closest("tr").classList.contains("table-active")) {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        } else {
          (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        }
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Tickets List" pageTitle="Tickets" />
    <BRow>
      <BCol xxl="3" sm="6">
        <BCard no-body class="card-animate">
          <BCardBody>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Total Tickets</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :duration="1000" :startVal="0" :endVal="547"></count-to>k
                </h2>
                <p class="mb-0 text-muted">
                  <BBadge class="bg-light text-success mb-0">
                    <i class="ri-arrow-up-line align-middle"></i> 17.32 %
                  </BBadge>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-4">
                    <i class="ri-ticket-2-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="3" sm="6">
        <BCard no-body class="card-animate">
          <BCardBody>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Pending Tickets</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :duration="1000" :startVal="0" :endVal="124"></count-to>k
                </h2>
                <p class="mb-0 text-muted">
                  <BBadge class="bg-light text-danger mb-0">
                    <i class="ri-arrow-down-line align-middle"></i> 0.96 %
                  </BBadge>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-4">
                    <i class="mdi mdi-timer-sand"></i>
                  </span>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="3" sm="6">
        <BCard no-body class="card-animate">
          <BCardBody>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Closed Tickets</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :duration="1000" :startVal="0" :endVal="107"></count-to>K
                </h2>
                <p class="mb-0 text-muted">
                  <BBadge class="bg-light text-danger mb-0">
                    <i class="ri-arrow-down-line align-middle"></i> 3.87 %
                  </BBadge>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-4">
                    <i class="ri-shopping-bag-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="3" sm="6">
        <BCard no-body class="card-animate">
          <BCardBody>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Deleted Tickets</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :duration="1000" :startVal="0" :endVal="15.95" :decimals="2"></count-to>%
                </h2>
                <p class="mb-0 text-muted">
                  <BBadge class="bg-light text-success mb-0">
                    <i class="ri-arrow-up-line align-middle"></i> 1.09 %
                  </BBadge>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-4">
                    <i class="ri-delete-bin-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body id="ticketsList">
          <BCardHeader class="border-0">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1">Tickets</h5>
              <div class="flex-shrink-0">
                <div class="d-flex flex-wrap gap-2">
                  <BButton variant="soft-danger" class="me-1" id="remove-actions" @click="deleteMultiple">
                    <i class="ri-delete-bin-2-line"></i>
                  </BButton>
                  <BButton variant="danger" class="add-btn" @click="toggleModal">
                    <i class="ri-add-line align-bottom me-1"></i> Create Tickets
                  </BButton>
                </div>
              </div>
            </div>
          </BCardHeader>
          <BCardBody class="border border-dashed border-end-0 border-start-0">
            <form>
              <BRow class="g-3">
                <BCol xxl="5" sm="12">
                  <div class="search-box">
                    <input type="text" class="form-control search bg-light border-light"
                      placeholder="Search for ticket details or something..." v-model="searchQuery" />
                    <i class="ri-search-line search-icon"></i>
                  </div>
                </BCol>

                <BCol xxl="3" sm="4">
                  <flat-pickr v-model="filterdate1" :config="rangeDateconfig" class="form-control bg-light border-light"
                    placeholder="Select date"></flat-pickr>
                </BCol>

                <BCol xxl="3" sm="4">
                  <div class="input-light">
                    <Multiselect v-model="filtervalue1" :close-on-select="true" :searchable="true" :create-option="true"
                      :options="[
                        { value: '', label: 'Status' },
                        { value: 'All', label: 'All' },
                        { value: 'Open', label: 'Open' },
                        { value: 'Inprogress', label: 'Inprogress' },
                        { value: 'Closed', label: 'Closed' },
                        { value: 'New', label: 'New' },
                      ]" />
                  </div>
                </BCol>
                <BCol xxl="1" sm="4">
                  <BButton type="button" variant="primary" class="w-100" @click="SearchData">
                    <i class="ri-equalizer-fill me-1 align-bottom"></i>
                    Filters
                  </BButton>
                </BCol>
              </BRow>
            </form>
          </BCardBody>
          <BCardBody>
            <div class="table-responsive table-card mb-4">
              <table class="table align-middle table-nowrap mb-0" id="ticketTable">
                <thead>
                  <tr>
                    <th scope="col" style="width: 40px">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkAll" value="option" />
                      </div>
                    </th>
                    <th class="sort" data-sort="id" @click="onSort('id')">ID</th>
                    <th class="sort" data-sort="tasks_name" @click="onSort('title')">Title</th>
                    <th class="sort" data-sort="client_name" @click="onSort('client')">Client</th>
                    <th class="sort" data-sort="assignedto" @click="onSort('assigned')">Assigned To</th>
                    <th class="sort" data-sort="create_date" @click="onSort('create')">Create Date</th>
                    <th class="sort" data-sort="due_date" @click="onSort('due')">Due Date</th>
                    <th class="sort" data-sort="status" @click="onSort('status')">Status</th>
                    <th class="sort" data-sort="priority" @click="onSort('priority')">Priority</th>
                    <th class="sort" data-sort="action">Action</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(data, index) of resultQuery" :key="index">
                    <th scope="row">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                      </div>
                    </th>
                    <td class="id">
                      <router-link to="/apps/tickets-details" class="fw-medium link-primary">{{ data.id }}</router-link>
                    </td>
                    <td class="tasks_name">
                      {{ data.title }}
                    </td>
                    <td class="client_name">{{ data.client }}</td>
                    <td class="assignedto">{{ data.assigned }}</td>
                    <td class="create_date">{{ data.create }}</td>
                    <td class="due_date">{{ data.due }}</td>
                    <td class="status">
                      <span class="badge text-uppercase" :class="{
                        'bg-warning-subtle text-warning': data.status == 'Inprogress',
                        'bg-info-subtle text-info': data.status == 'New',
                        'bg-success-subtle text-success': data.status == 'Open',
                        'bg-danger-subtle text-danger': data.status == 'Closed',
                      }">{{ data.status }}</span>
                    </td>
                    <td class="priority">
                      <span class="badge text-uppercase" :class="{
                        'bg-danger': data.priority == 'High',
                        'bg-success': data.priority == 'Low',
                        'bg-warning': data.priority == 'Medium',
                      }">{{ data.priority }}</span>
                    </td>
                    <td>
                      <BDropdown toggle-class="btn btn-soft-secondary btn-sm arrow-none" size="sm" no-caret>
                        <template #button-content> <i class="ri-more-fill align-middle"></i> </template>
                        <BDropdownItem to="/apps/tickets-details"><i
                            class="ri-eye-fill align-bottom me-2 text-muted"></i>View</BDropdownItem>
                        <BDropdownItem href="#" class="edit-item-btn" @click="editDetails(data)"><i
                            class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</BDropdownItem>
                        <BDropdownItem href="javascript:void(0);" class="remove-item-btn"
                          @click="deleteModalToggle(data)"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                          Delete</BDropdownItem>
                      </BDropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="noresult" v-if="resultQuery.length < 1">
                <div class="text-center">
                  <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions"
                    :height="90" :width="90" />
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">
                    We've searched more than 150+ Tickets We did not find any
                    Tickets for you search.
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-3" v-if="resultQuery.length >= 1">
              <div class="pagination-wrap hstack gap-2">
                <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                  Previous
                </BLink>
                <ul class="pagination listjs-pagination mb-0">
                  <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                    v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                    <BLink class="page" href="#">{{ pageNumber }}</BLink>
                  </li>
                </ul>
                <BLink class="page-item pagination-next" href="#" :disabled="page >= pages.length" @click="page++">
                  Next
                </BLink>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- ticket list modal -->
    <BModal v-model="modalShow" id="showModal" modal-class="zoomIn" :title="dataEdit ? 'Edit Ticket' : 'Add Ticket'"
      title-class="exampleModalLabel" hide-footer header-class="p-3 bg-info-subtle" class="v-modal-custom" size="lg"
      centered>
      <BFrom id="addform" class="tablelist-form" autocomplete="off">
        <BRow class="g-3">
          <BCol lg="12">
            <div id="modal-id" style="display: none;">
              <label for="orderId" class="form-label">ID</label>
              <input type="text" id="orderId" class="form-control" placeholder="ID" value="#VLZ462" readonly="">
            </div>
          </BCol>
          <BCol lg="12">
            <div>
              <label for="tasksTitle-field" class="form-label">Title</label>
              <input type="text" id="tasksTitle" class="form-control" placeholder="Title" v-model="event.title"
                :class="{ 'is-invalid': submitted && !event.title }" />
              <div class="invalid-feedback">Please enter a title.</div>
            </div>
          </BCol>
          <BCol lg="6">
            <div>
              <label for="clientName-field" class="form-label">Client</label>
              <input type="text" id="clientName" class="form-control" placeholder="Client Name" v-model="event.client"
                :class="{ 'is-invalid': submitted && !event.client }" />
              <div class="invalid-feedback">Please enter a client name.</div>
            </div>
          </BCol>
          <BCol lg="6">
            <div>
              <label for="assignedtoName-field" class="form-label">Assigned To</label>
              <input type="text" id="assignedtoName" class="form-control" placeholder="Assigned to"
                v-model="event.assigned" :class="{ 'is-invalid': submitted && !event.assigned }" />
              <div class="invalid-feedback">Please enter a Assignes.</div>
            </div>
          </BCol>
          <BCol lg="6">
            <label for="date-field" class="form-label">Create Date</label>
            <flat-pickr :config="config" placeholder="Create Date" class="form-control" id="cdate" v-model="event.create"
              :class="{ 'is-invalid': submitted && !event.create }">
            </flat-pickr>
            <div class="invalid-feedback">Please enter a create date.</div>
          </BCol>
          <BCol lg="6">
            <label for="duedate-field" class="form-label">Due Date</label>
            <flat-pickr :config="config" placeholder="Due Date" class="form-control" id="ddate" v-model="event.due"
              :class="{ 'is-invalid': submitted && !event.due }">
            </flat-pickr>
            <div class="invalid-feedback">Please enter a due date.</div>
          </BCol>
          <BCol lg="6">
            <label for="ticket-status" class="form-label">Status</label>
            <select class="form-control" data-plugin="choices" name="ticket-status" id="ticketstatus"
              v-model="event.status" :class="{ 'is-invalid': submitted && !event.status }">
              <option value="">Status</option>
              <option value="New">New</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Closed">Closed</option>
              <option value="Open">Open</option>
            </select>
            <div class="invalid-feedback">Please select a status.</div>
          </BCol>
          <BCol lg="6">
            <label for="priority-field" class="form-label">Priority</label>
            <select class="form-control" data-plugin="choices" name="priority-field" id="priority"
              v-model="event.priority" :class="{ 'is-invalid': submitted && !event.priority }">
              <option value="">Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <div class="invalid-feedback">Please select a priority.</div>
          </BCol>
        </BRow>
        <div class="modal-footer v-modal-footer mt-3">
          <div class="hstack gap-2 justify-content-end">
            <BButton type="button" variant="light" @click="modalShow = false" id="closemodal"> Close </BButton>
            <BButton type="submit" variant="success" id="add-btn" @click="handleSubmit">
              {{ dataEdit ? 'Update' : 'Add Ticket' }}
            </BButton>
          </div>
        </div>
      </BFrom>
    </BModal>

    <!-- delete modal -->
    <BModal v-model="deleteModal" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
      <div class="mt-2 text-center">
        <lottie class="avatar-xl" colors="primary:#f7b84b,secondary:#f06548" :options="defaultOptions1" :height="75"
          :width="75" />
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>Are you sure ?</h4>
          <p class="text-muted mx-4 mb-0">Are you sure you want to remove this record ?</p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <BButton variant="light" size="w-sm" @click="deleteModal = false">Close</BButton>
        <BButton variant="danger" size="w-sm" id="delete-record" @click="deleteData">Yes, Delete It!</BButton>
      </div>
    </BModal>
  </Layout>
</template>