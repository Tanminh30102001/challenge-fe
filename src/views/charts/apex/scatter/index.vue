<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import {
  basicScatterChart,
  dateTimeScatterChart,
  scatterImagesChart,
} from "./data";

/**
 * Scatter chart component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      basicScatterChart: basicScatterChart,
      dateTimeScatterChart: dateTimeScatterChart,
      scatterImagesChart: scatterImagesChart,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Scatter Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Basic Scatter Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicScatterChart.series"
              :options="basicScatterChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Scatter - Datetime Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="dateTimeScatterChart.series"
              :options="dateTimeScatterChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Scatter Images Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="scatterImagesChart.series"
              :options="scatterImagesChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
