<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import axios from "axios";
import config from "../../../globalConfig";

export default {
  data() {
    return {
      addStatus: false,
      nameStatus: "",
      descStatus: "",
      allStatus: [],
      allType: [],
      allPriority: [],
      updateStatusModals:false,
      selectedStatus:null,
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  created() {
    this.fetchStatus();
    this.fetchPriority();
    this.fetchType();
  },
  methods: {
    async fetchStatus() {
      try {
        const response = await axios.get(config.API_URL + "/getStatus");
        this.allStatus = response.data;
        console.log(this.allStatus);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPriority() {
      try {
        const response = await axios.get(config.API_URL + "/getPriority");
        this.allPriority = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchType() {
      try {
        const response = await axios.get(config.API_URL + "/getType");
        this.allType = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    addNewStatus() {
      const data = {
        name: this.nameStatus,
        desc: this.descStatus,
      };
      axios
        .post(config.API_URL + "/addStatus", data)
        .then(() => {
          this.fetchStatus();
          this.addStatus = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    getIdStatus(id){
      this.selectedStatus=id
      this.updateStatusModals=true;
    },
    updateStatus(){
      const data = {
        name: this.nameStatus,
        desc: this.descStatus,
      };
      axios
        .patch(config.API_URL + "/updateStatus/"+ this.selectedStatus, data)
        .then(() => {
          this.fetchStatus();
          this.updateStatusModals = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    deleteStatus(id) {
      axios
        .delete(config.API_URL + "/deleteStatus/" + id)
        .then(() => {
          this.fetchStatus();
          this.addStatus = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Starter" pageTitle="Pages" />
    <BTabs nav-class=" animation-nav  gap-2 gap-lg-3  pt-4 text-muted" pills>
      <BTab title="Status" class="nav-item pt-4">
        <template #title>
          <i class="ri-airplay-fill d-inline-block d-md-none"></i>
          <span class="d-none d-md-inline-block">Status</span>
        </template>
        <BRow>
          <BCol sm="auto">
            <div class="mb-2">
              <BButton variant="primary" @click="addStatus = true">
                <i class="ri-add-line align-bottom me-1"></i>Add status</BButton
              >
            </div>
          </BCol>

          <BModal
            v-model="addStatus"
            hide-footer
            title="New message"
            title-class="varyingcontentModal"
            class="v-modal-custom"
          >
            <form>
              <div class="mb-3">
                <label for="customer-name" class="col-form-label"> Name Status:</label>
                <input
                  type="text"
                  class="form-control"
                  id="customer-name"
                  v-model="nameStatus"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Description status:</label
                >
                <textarea
                  class="form-control"
                  id="message-text"
                  v-model="descStatus"
                  rows="4"
                ></textarea>
              </div>
            </form>
            <div class="modal-footer v-modal-footer">
              <BButton type="button" variant="light" @click="addStatus = false"
                >Back
              </BButton>
              <BButton type="button" variant="primary" @click="addNewStatus"
                >Save Changes</BButton
              >
            </div>
          </BModal>
          <table class="table table-success table-striped align-middle table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Desc</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(status, index) of allStatus" :key="index">
                <td>{{ status.name }}</td>
                <td>{{ status.desc }}</td>

                <td>
                  <div class="hstack gap-3 flex-wrap">
                    <a class="link-success fs-15" @click="getIdStatus(status.id)"
                      ><i class="ri-edit-2-line"></i
                    ></a>
                    <a class="link-danger fs-15" @click="deleteStatus(status.id)"
                      ><i class="ri-delete-bin-line"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </BRow>
      </BTab>
      <BTab title="OVV" class="nav-item pt-4">
        <template #title>
          <i class="ri-airplay-fill d-inline-block d-md-none"></i>
          <span class="d-none d-md-inline-block">OVV</span>
        </template>
        <BRow> asdasdasd aszxc zxczxc </BRow>
      </BTab>
    </BTabs>
    <BModal
      v-model="updateStatusModals"
      hide-footer
      title="New message"
      title-class="varyingcontentModal"
      class="v-modal-custom"
    >
      <form>
        <div class="mb-3">
          <label for="customer-name" class="col-form-label"> Name Status:</label>
          <input
            type="text"
            class="form-control"
            id="customer-name"
            v-model="nameStatus"
            required
          />
        </div>
        <div class="mb-3">
          <label for="message-text" class="col-form-label">Description status:</label>
          <textarea
            class="form-control"
            id="message-text"
            v-model="descStatus"
            rows="4"
          ></textarea>
        </div>
      </form>
      <div class="modal-footer v-modal-footer">
        <BButton type="button" variant="light" @click="updateStatusModals = false">Back </BButton>
        <BButton type="button" variant="primary" @click="updateStatus"
          >Save Changes</BButton
        >
      </div>
    </BModal>
  </Layout>
</template>
