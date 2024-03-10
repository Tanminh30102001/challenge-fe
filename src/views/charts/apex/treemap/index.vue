<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import {
  treemapChart,
  multiSeriesChart,
  distributedChart,
  colorRangeChart,
} from "./data";

/**
 * Treemap chart
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      treemapChart: treemapChart,
      multiSeriesChart: multiSeriesChart,
      distributedChart: distributedChart,
      colorRangeChart: colorRangeChart,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Treemap Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Basic Treemap Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="treemapChart.series"
              :options="treemapChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Multi-Dimensional Treemap Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="multiSeriesChart.series"
              :options="multiSeriesChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>
              Distributed Treemap Chart (Different Color for each Cell)
            </BCardTitle>

          </BCardHeader>

          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="distributedChart.series"
              :options="distributedChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Treemap Chart with Color Ranges</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="colorRangeChart.series"
              :options="colorRangeChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
