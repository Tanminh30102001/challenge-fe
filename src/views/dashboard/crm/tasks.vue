<script>
import simplebar from 'simplebar-vue';
export default {
  components: {
    simplebar
  },
  setup() {
    return {
      tasks: [
        {
          id: 1,
          forId: "task_one",
          text: "Review and make sure nothing slips through cracks",
          date: "15 Sep, 2021",
        },
        {
          id: 2,
          forId: "task_two",
          text: "Send meeting invites for sales upcampaign",
          date: "20 Sep, 2021",
        },
        {
          id: 3,
          forId: "task_three",
          text: "Weekly closed sales won checking with sales team",
          date: "24 Sep, 2021",
        },
        {
          id: 4,
          forId: "task_four",
          text: "Add notes that can be viewed from the individual view",
          date: "27 Sep, 2021",
        },
        {
          id: 5,
          forId: "task_five",
          text: "Move stuff to another page",
          date: "27 Sep, 2021",
        },
        {
          id: 6,
          forId: "task_six",
          text: "Styling wireframe design and documentation for velzon admin",
          date: "27 Sep, 2021",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">My Tasks</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: 1, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="text-muted"><i
                class="ri-settings-4-line align-middle me-1 fs-15"></i>Settings</span>
          </template>
          <BDropdownItem>Edit</BDropdownItem>
          <BDropdownItem>Remove</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>

    <BCardBody class="p-0">
      <div class="align-items-center p-3 justify-content-between d-flex">
        <div class="flex-shrink-0">
          <div class="text-muted">
            <span class="fw-semibold">4</span> of
            <span class="fw-semibold">10</span> remaining
          </div>
        </div>
        <BButton type="button" variant="success" size="sm">
          <i class="ri-add-line align-middle me-1"></i> Add Task
        </BButton>
      </div>

      <simplebar data-simplebar style="max-height: 219px">
        <ul class="list-group list-group-flush border-dashed px-3">
          <li class="list-group-item ps-0" v-for="(item, index) in tasks" :key="index">
            <div class="d-flex align-items-start">
              <div class="form-check ps-0 flex-sharink-0">
                <input type="checkbox" class="form-check-input ms-0" :id="`${item.forId}`" />
              </div>
              <div class="flex-grow-1">
                <label class="form-check-label mb-0 ps-2" :for="`${item.forId}`">{{ item.text }}</label>
              </div>
              <div class="flex-shrink-0 ms-2">
                <p class="text-muted fs-12 mb-0">{{ item.date }}</p>
              </div>
            </div>
          </li>
        </ul>
      </simplebar>
      <div class="p-3 pt-2">
        <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">Show more...</BLink>
      </div>
    </BCardBody>
  </BCard>
</template>
