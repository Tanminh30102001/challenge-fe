<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import {
  basicCandlestickChart,
  comboCandlestickBrushChart,
  comboCandlestickChart,
  categoryXaxisChart,
} from "./data";

/**
 * Candlestick Charts component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      basicCandlestickChart: basicCandlestickChart,
      comboCandlestickBrushChart: comboCandlestickBrushChart,
      comboCandlestickChart: comboCandlestickChart,
      categoryXaxisChart: categoryXaxisChart,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Candlestick Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="
              justify-content-between
              d-flex
              align-items-center
            ">
            <BCardTitle>Basic Candlestick Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicCandlestickChart.series"
              :options="basicCandlestickChart.chartOptions"></apexchart>
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
            <BCardTitle>Candlestick Synced with Brush Chart (Combo)</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="200" dir="ltr" :series="comboCandlestickBrushChart.series"
              :options="comboCandlestickBrushChart.chartOptions"></apexchart>
            <apexchart class="apex-charts" height="150" dir="ltr" :series="comboCandlestickChart.series"
              :options="comboCandlestickChart.chartOptions"></apexchart>
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
            <BCardTitle>Category X-Axis</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="categoryXaxisChart.series"
              :options="categoryXaxisChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>