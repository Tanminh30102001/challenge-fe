<script>
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  data() {
    return {
      series: [125, 42, 58, 89],
      chartOptions: {
        labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
        chart: {
          type: "donut",
          height: 230,
        },
        plotOptions: {
          pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "90%",
              labels: {
                show: false,
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          lineCap: "round",
          width: 0,
        },
        colors: getChartColorsArray('["--vz-success", "--vz-primary", "--vz-warning", "--vz-danger"]'),
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="BCard card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Projects Status</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" >
          <template #button-content> All Time<i class="mdi mdi-chevron-down ms-1"></i>
          </template>
          <BDropdownItem>All Time</BDropdownItem>
          <BDropdownItem>Last 7 Days</BDropdownItem>
          <BDropdownItem>Last 30 Days</BDropdownItem>
          <BDropdownItem>Last 90 Days</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>

    <BCardBody>
      <apexchart class="apex-charts" dir="ltr" height="230" :series="series" :options="chartOptions"></apexchart>
      <div class="mt-3">
        <div class="d-flex justify-content-center align-items-center mb-4">
          <h2 class="me-3 ff-secondary mb-0">258</h2>
          <div>
            <p class="text-muted mb-0">Total Projects</p>
            <p class="text-success fw-medium mb-0">
              <BBadge variant="success-subtle" pill class="bg-success-subtle text-success p-1"><i
                  class="ri-arrow-right-up-line"></i></BBadge>
              +3 New
            </p>
          </div>
        </div>

        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i>
            Completed
          </p>
          <div>
            <span class="text-muted pe-5">125 Projects</span>
            <span class="text-success fw-medium fs-12">15870hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i>
            In Progress
          </p>
          <div>
            <span class="text-muted pe-5">42 Projects</span>
            <span class="text-success fw-medium fs-12">243hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i>
            Yet to Start
          </p>
          <div>
            <span class="text-muted pe-5">58 Projects</span>
            <span class="text-success fw-medium fs-12">~2050hrs</span>
          </div>
        </div>
        <div class="d-flex justify-content-between py-2">
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i>
            Cancelled
          </p>
          <div>
            <span class="text-muted pe-5">89 Projects</span>
            <span class="text-success fw-medium fs-12">~900hrs</span>
          </div>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>