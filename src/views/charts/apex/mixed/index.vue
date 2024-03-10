<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import {
  mixedLineChart,
  yAxisChart,
  lineAreaChart,
  lineColumnAreaChart,
} from "./data";

/**
 * Mixed chart component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      mixedLineChart: mixedLineChart,
      yAxisChart: yAxisChart,
      lineAreaChart: lineAreaChart,
      lineColumnAreaChart: lineColumnAreaChart,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Mixed Charts" pageTitle="Apexcharts" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="
              
              justify-content-between
              d-flex
              align-items-center
            ">
            <BCardTitle>Line & Column Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="mixedLineChart.series"
              :options="mixedLineChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Multiple Y-Axis Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="yAxisChart.series"
              :options="yAxisChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="
              
              justify-content-between
              d-flex
              align-items-center
            ">
            <BCardTitle>Line & Area Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="lineAreaChart.series"
              :options="lineAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="
              
              justify-content-between
              d-flex
              align-items-center
            ">
            <BCardTitle>Line, Column & Area Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="lineColumnAreaChart.series"
              :options="lineColumnAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>