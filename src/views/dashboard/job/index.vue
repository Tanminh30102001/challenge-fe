<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import JobWidgets from "./job-widgets.vue";
import FeaturedCompanies from "./featured-companies.vue";
import ApplicationsStatistic from "./applications-statistic.vue";
import RecomendedJobs from "./recomended-jobs.vue";
import RecentApplicants from "./recent-applicants.vue";

export default {
  components: {
    Layout,
    PageHeader,
    JobWidgets,
    FeaturedCompanies,
    ApplicationsStatistic,
    RecomendedJobs,
    RecentApplicants
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Job Dashboard" pageTitle="Dashboards" />

    <BRow>
      <JobWidgets />
      <FeaturedCompanies />
    </BRow>

    <ApplicationsStatistic />

    <RecomendedJobs />

    <RecentApplicants />
  </Layout>
</template>