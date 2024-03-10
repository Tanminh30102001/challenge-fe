<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import Widget from "./widget.vue";
import SalesForecast from "./forecast.vue";
import DealType from "./deal-type.vue";
import BalanceOverview from "./balance-overview.vue";
import DealStatus from "./deals-status.vue";
import Tasks from "./tasks.vue";
import UpcomingActivity from "./activities.vue";
import ClosingDeals from "./closing-deals.vue";

export default {
  components: {
    Layout,
    PageHeader,
    Widget,
    SalesForecast,
    DealType,
    BalanceOverview,
    DealStatus,
    Tasks,
    UpcomingActivity,
    ClosingDeals
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="CRM" pageTitle="Dashboards" />
    
    <BRow>
      <BCol xl="12">
        <Widget />
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="3" md="6">
        <SalesForecast />
      </BCol>

      <BCol xxl="3" md="6">
        <DealType />
      </BCol>
      <BCol xxl="6">
        <BalanceOverview />
      </BCol>
    </BRow>
    <BRow>
      <BCol xl="7">
          <DealStatus />
      </BCol>
      <BCol xl="5">
          <Tasks />
      </BCol>
    </BRow>
    <BRow>
      <BCol xxl="5">
          <UpcomingActivity />
      </BCol>
      <BCol xxl="7">
          <ClosingDeals />
      </BCol>
    </BRow>
  </Layout>
</template>
