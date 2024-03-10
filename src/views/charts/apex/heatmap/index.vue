<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import {
  multipleSeriesHeatmapChart,
  basicHeatmapChat,
  colorHeatmapChart,
  shadesHeatmapChart,
} from "./data";

/**
 * Heatmap chart component
 */
export default {
  components: {
    Layout, PageHeader
  },
  data() {
    return {
      multipleSeriesHeatmapChart: multipleSeriesHeatmapChart,
      basicHeatmapChat: basicHeatmapChat,
      colorHeatmapChart: colorHeatmapChart,
      shadesHeatmapChart: shadesHeatmapChart,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Heatmap Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Basic Heatmap Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicHeatmapChat.series"
              :options="basicHeatmapChat.chartOptions"></apexchart>

          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Heatmap - Multiple Series</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="multipleSeriesHeatmapChart.series"
              :options="multipleSeriesHeatmapChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Heatmap Color Range</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="colorHeatmapChart.series"
              :options="colorHeatmapChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Heatmap - Range Without Shades</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="shadesHeatmapChart.series"
              :options="shadesHeatmapChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
