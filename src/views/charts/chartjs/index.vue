<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

import { line, pie, Doughnut, radar, bar, PolarArea } from "./data";

/**
 * Chartjs-chart component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Vue3ChartJs,
  },
  data() {
    return {
      line: line,
      pie: pie,
      Doughnut: Doughnut,
      radar: radar,
      bar: bar,
      PolarArea: PolarArea,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Chartjs" pageTitle="Charts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line Chart</BCardTitle>
            <vue3-chart-js class="chartjs-chart" v-bind="{ ...line }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bar Chart</BCardTitle>

            <vue3-chart-js class="chartjs-chart" v-bind="{ ...bar }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>

            <vue3-chart-js :height="140" class="chartjs-chart" v-bind="{ ...pie }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Donut Chart</BCardTitle>

            <vue3-chart-js :height="140" class="chartjs-chart" v-bind="{ ...Doughnut }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Polar area Chart</BCardTitle>

            <vue3-chart-js :height="140" class="chartjs-chart" v-bind="{ ...PolarArea }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Radar Chart</BCardTitle>

            <vue3-chart-js :height="140" class="chartjs-chart" v-bind="{ ...radar }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>