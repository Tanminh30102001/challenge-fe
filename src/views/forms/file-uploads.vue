<script>
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";

import DropZone from "@/components/widgets/dropZone";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.parentElement.remove();
    },
  },
  setup() {
    let files = ref([]);
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    watch(
      () => [...files.value],
      (currentValue) => {
        return currentValue;
      }
    );

    return { dropzoneFile, files, drop, selectedFile, v$: useVuelidate() };
  },
 
  components: {
    Layout,
    PageHeader,
    DropZone,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Upload" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropzone</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              DropzoneJS is an open source library that provides drag’n’drop
              file uploads with image previews.
            </p>

            <DropZone @drop.prevent="drop" @change="selectedFile" />
            <ul class="list-unstyled mb-0" id="dropzone-preview">
              <div class="border rounded" v-for="(file, index) of files" :key="index">
                <div class="d-flex p-2">
                  <div class="flex-grow-1">
                    <div class="pt-1">
                      <h5 class="fs-14 mb-1" data-dz-name="">
                        {{ file.name }}
                      </h5>
                      <p class="fs-13 text-muted mb-0" data-dz-size="">
                        <strong>{{ file.size / 1024 }}</strong> KB
                      </p>
                      <strong class="error text-danger" data-dz-errormessage=""></strong>
                    </div>
                  </div>
                  <div class="flex-shrink-0 ms-3">
                    <BButton variant="danger" size="sm" data-dz-remove="" @click="deleteRecord">
                      Delete
                    </BButton>
                  </div>
                </div>
              </div>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>
