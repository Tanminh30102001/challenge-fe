<script>
import getChartColorsArray from "@/common/getChartColorsArray";

export default {
  setup() {
    return {

      series: [{
        name: "Goal",
        data: [37],
      },
      {
        name: "Pending Forcast",
        data: [12],
      },
      {
        name: "Revenue",
        data: [18],
      },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 341,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "65%",
          },
        },
        stroke: {
          show: true,
          width: 5,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [""],
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          title: {
            text: "Total Forecasted Value",
            offsetX: 0,
            offsetY: -30,
            style: {
              color: "#78909C",
              fontSize: "12px",
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value + "k";
            },
          },
          tickAmount: 4,
          min: 0,
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 500,
          offsetX: 0,
          offsetY: -14,
          itemMargin: {
            horizontal: 8,
            vertical: 0,
          },
          markers: {
            width: 10,
            height: 10,
          },
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning"]'),
      }
    };
  },
};
</script>

<template>
  <BCard no-body>
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Sales Forecast</BCardTitle>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
            menu-class="dropdown-menu-end" aria-haspopup="true"
            :offset="{ alignmentAxis: -30, crossAxis: 0, mainAxis: 0 }">
            <template #button-content><span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                class="text-muted">Nov 2021<i class="mdi mdi-chevron-down ms-1"></i></span>
            </template>
            <BDropdownItem>Oct 2021</BDropdownItem>
            <BDropdownItem>Nov 2021</BDropdownItem>
            <BDropdownItem>Dec 2021</BDropdownItem>
            <BDropdownItem>Jan 2022</BDropdownItem>
          </BDropdown>
        </div>
      </div>
    </BCardHeader>

    <BCardBody class="pb-0">
      <apexchart class="apex-charts" height="341" dir="ltr" :series="series" :options="chartOptions"></apexchart>
    </BCardBody>
  </BCard>
</template>