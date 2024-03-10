<script>
export default {
  setup() {
    return {

    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1 py-1">My Tasks</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: 2, crossAxis: 0, mainAxis: 0 }">
          <template #button-content><span class="text-muted">All Tasks <i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>All Tasks</BDropdownItem>
          <BDropdownItem>Completed</BDropdownItem>
          <BDropdownItem>Inprogress</BDropdownItem>
          <BDropdownItem>Pending</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody>
      <div class="table-responsive table-card">
        <table class="table table-borderless table-nowrap table-centered align-middle mb-0">
          <thead class="table-light text-muted">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Deadline</th>
              <th scope="col">Status</th>
              <th scope="col">Assignee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask1" />
                  <label class="form-check-label ms-2" for="checkTask1">
                    Create new Admin Template
                  </label>
                </div>
              </td>
              <td class="text-muted">03 Nov 2021</td>
              <td>
                <BBadge variant="success-subtle" class="bg-success-subtle text-success">Completed</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Mary Stoner">
                  <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask2" />
                  <label class="form-check-label ms-2" for="checkTask2">
                    Marketing Coordinator
                  </label>
                </div>
              </td>
              <td class="text-muted">17 Nov 2021</td>
              <td>
                <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning">Progress</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Den Davis">
                  <img src="@/assets/images/users/avatar-7.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask3" />
                  <label class="form-check-label ms-2" for="checkTask3">
                    Administrative Analyst
                  </label>
                </div>
              </td>
              <td class="text-muted">26 Nov 2021</td>
              <td>
                <BBadge variant="success-subtle" class="bg-success-subtle text-success">Completed</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Alex Brown">
                  <img src="@/assets/images/users/avatar-6.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask4" />
                  <label class="form-check-label ms-2" for="checkTask4">
                    E-commerce Landing Page
                  </label>
                </div>
              </td>
              <td class="text-muted">10 Dec 2021</td>
              <td>
                <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Pending</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Prezy Morin">
                  <img src="@/assets/images/users/avatar-5.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask5" />
                  <label class="form-check-label ms-2" for="checkTask5">
                    UI/UX Design
                  </label>
                </div>
              </td>
              <td class="text-muted">22 Dec 2021</td>
              <td>
                <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning">Progress</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Stine Nielsen">
                  <img src="@/assets/images/users/avatar-1.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
            <tr>
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" value="" id="checkTask6" />
                  <label class="form-check-label ms-2" for="checkTask6">
                    Projects Design
                  </label>
                </div>
              </td>
              <td class="text-muted">31 Dec 2021</td>
              <td>
                <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Pending</BBadge>
              </td>
              <td>
                <BLink href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top"
                  title="" data-bs-original-title="Jansh William">
                  <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xxs" />
                </BLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-3 text-center">
        <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">Load More</BLink>
      </div>
    </BCardBody>
  </BCard>
</template>
