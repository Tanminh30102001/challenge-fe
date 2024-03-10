<script>
import { VueEcharts } from "vue3-echarts";

import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import {
  lineChart,
  areaChart,
  polarChart,
  stackedLineChart,
  basicBar,
  lineYCategoryChart,
  stackedAreaChart,
  horizontalBarChart,
  stepLineChart,
  pieChart,
  bubbleChart,
  doughnutChart,
  candlestickChart,
  mixedBarChart,
  stackedHorizontalBarChart,
  guageChart,
  graphChart,
  treemapChart,
  sunburstChart,
  scatterChart,
  parallelChart,
  sankeyChart,
  funnelChart,
} from "./data";

export default {
  components: { Layout, PageHeader, VueEcharts },
  computed: {
    option() {
      return {
        lineChart: lineChart,
        scatterChart: scatterChart,
        areaChart: areaChart,
        stackedAreaChart: stackedAreaChart,
        polarChart: polarChart,
        basicBar: basicBar,
        horizontalBarChart: horizontalBarChart,
        stackedLineChart: stackedLineChart,
        graphChart: graphChart,
        lineYCategoryChart: lineYCategoryChart,
        stepLineChart: stepLineChart,
        candlestickChart: candlestickChart,
        pieChart: pieChart,
        sunburstChart: sunburstChart,
        treemapChart: treemapChart,
        parallelChart: parallelChart,
        sankeyChart: sankeyChart,
        funnelChart: funnelChart,
        bubbleChart: bubbleChart,
        doughnutChart: doughnutChart,
        stackedHorizontalBarChart: stackedHorizontalBarChart,
        mixedBarChart: mixedBarChart,
        guageChart: guageChart,
      };
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="E Charts" pageTitle="Charts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line Chart</BCardTitle>
            <vue-echarts :option="option.lineChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Stacked Line Chart</BCardTitle>
            <vue-echarts :option="option.stackedLineChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Area Chart</BCardTitle>
            <vue-echarts :option="option.areaChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Stacked Area Chart</BCardTitle>
            <vue-echarts :option="option.stackedAreaChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Step Line</BCardTitle>
            <vue-echarts :option="option.stepLineChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line Y Category</BCardTitle>
            <vue-echarts :option="option.lineYCategoryChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Basic Bar</BCardTitle>
            <vue-echarts :option="option.basicBar" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Horizontal Bar</BCardTitle>
            <vue-echarts :option="option.horizontalBarChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Stacked Horizontal Bar</BCardTitle>
            <vue-echarts :option="option.stackedHorizontalBarChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Candlestick Chart</BCardTitle>
            <vue-echarts :option="option.candlestickChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>
            <vue-echarts :option="option.pieChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Doughnut Chart</BCardTitle>
            <vue-echarts :option="option.doughnutChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Graph Chart</BCardTitle>
            <vue-echarts :option="option.graphChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Treemap Chart</BCardTitle>
            <vue-echarts :option="option.treemapChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Basic Scatter Chart</BCardTitle>
            <vue-echarts :option="option.scatterChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Sunburst Chart</BCardTitle>
            <vue-echarts :option="option.sunburstChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bubble Chart</BCardTitle>
            <vue-echarts :option="option.bubbleChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Polar Chart</BCardTitle>
            <vue-echarts :option="option.polarChart.polar" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Parallel Chart</BCardTitle>
            <vue-echarts :option="option.parallelChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Sankey Chart</BCardTitle>
            <vue-echarts :option="option.sankeyChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Mix Line-Bar</BCardTitle>
            <vue-echarts :option="option.mixedBarChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Funnel Chart</BCardTitle>
            <vue-echarts :option="option.funnelChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Gauge Chart</BCardTitle>
            <vue-echarts :option="option.guageChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>