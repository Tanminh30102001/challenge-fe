<script>
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {
      series: [{
        name: "Pending",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Loss",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Won",
        data: [44, 76, 78, 13, 43, 10],
      },
      ],
      chartOptions: {
        chart: {
          height: 341,
          type: "radar",
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 2,
        },
        fill: {
          opacity: 0.2,
        },
        legend: {
          show: true,
          fontWeight: 500,
          offsetX: 0,
          offsetY: -8,
          markers: {
            width: 8,
            height: 8,
            radius: 6,
          },
          itemMargin: {
            horizontal: 10,
            vertical: 0,
          },
        },
        markers: {
          size: 0,
        },
        colors: getChartColorsArray('["--vz-warning", "--vz-danger", "--vz-success"]'),
        xaxis: {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        },
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Deal Type</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -35, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
              class="text-muted">Monthly<i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>Today</BDropdownItem>
          <BDropdownItem>Weekly</BDropdownItem>
          <BDropdownItem>Monthly</BDropdownItem>
          <BDropdownItem>Yearly</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody class="pb-0">
      <apexchart class="apex-charts" height="341" dir="ltr" :series="series" :options="chartOptions"></apexchart>
    </BCardBody>
  </BCard>
</template>