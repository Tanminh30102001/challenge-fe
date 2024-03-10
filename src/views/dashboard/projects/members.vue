<script>
export default {
  setup() {
    return {
      teamMembers: [
        {
          id: 1,
          img: require("@/assets/images/users/avatar-1.jpg"),
          name: "Donald Risher",
          position: "Product Manager",
          hours: "110",
          tasks: "258",
          series: [50],
          chartsColor: "#405189",
        },
        {
          id: 2,
          img: require("@/assets/images/users/avatar-2.jpg"),
          name: "Jansh Brown",
          position: "Lead Developer",
          hours: "83",
          tasks: "105",
          series: [45],
          chartsColor: "#405189",
        },
        {
          id: 3,
          img: require("@/assets/images/users/avatar-7.jpg"),
          name: "Carroll Adams",
          position: "Lead Designer",
          hours: "58",
          tasks: "75",
          series: [75],
          chartsColor: "#405189",
        },
        {
          id: 4,
          img: require("@/assets/images/users/avatar-4.jpg"),
          name: "William Pinto",
          position: "UI/UX Designer",
          hours: "96",
          tasks: "85",
          series: [25],
          chartsColor: "#f7b84b",
        },
        {
          id: 5,
          img: require("@/assets/images/users/avatar-6.jpg"),
          name: "Garry Fournier",
          position: "Web Designer",
          hours: "76",
          tasks: "69",
          series: [60],
          chartsColor: "#405189",
        },
        {
          id: 6,
          img: require("@/assets/images/users/avatar-5.jpg"),
          name: "Susan Denton",
          position: "Lead Designer",
          hours: "123",
          tasks: "658",
          series: [85],
          chartsColor: "#0ab39c",
        },
        {
          id: 7,
          img: require("@/assets/images/users/avatar-3.jpg"),
          name: "Joseph Jackson",
          position: "React Developer",
          hours: "117",
          tasks: "125",
          series: [70],
          chartsColor: "#405189",
        },
      ],

      chartOptions: {
        chart: {
          type: "radialBar",
          width: 36,
          height: 36,
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
            },
            track: {
              margin: 1,
            },
            dataLabels: {
              show: false,
            },
          },
        },
        colors: ["#405189"],
      },
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Team Members</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: -5, crossAxis: 0, mainAxis: 0 }">
          <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
              class="text-muted">Last 30 Days<i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>Today</BDropdownItem>
          <BDropdownItem>Yesterday</BDropdownItem>
          <BDropdownItem>Last 7 Days</BDropdownItem>
          <BDropdownItem>Last 30 Days</BDropdownItem>
          <BDropdownItem>This Month</BDropdownItem>
          <BDropdownItem>Last Month</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>

    <BCardBody>
      <div class="table-responsive table-card">
        <table class="table table-borderless table-nowrap align-middle mb-0">
          <thead class="table-light text-muted">
            <tr>
              <th scope="col">Member</th>
              <th scope="col">Hours</th>
              <th scope="col">Tasks</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of teamMembers" :key="index">
              <td class="d-flex">
                <img :src="item.img" alt="" class="avatar-xs rounded-3 me-2" />
                <div>
                  <h5 class="fs-13 mb-0">{{ item.name }}</h5>
                  <p class="fs-12 mb-0 text-muted">{{ item.position }}</p>
                </div>
              </td>
              <td>
                <h6 class="mb-0">{{ item.hours }}h
                  : <span class="text-muted">150h</span></h6>
              </td>
              <td>
                {{ item.tasks }}
              </td>
              <td style="width: 5%">
                <apexchart class="apex-charts" height="36" dir="ltr" :series="item.series"
                  :options="{ ...chartOptions, ...{ colors: [item.chartsColor] } }"></apexchart>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BCardBody>
  </BCard>
</template>
