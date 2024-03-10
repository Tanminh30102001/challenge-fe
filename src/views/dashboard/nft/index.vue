<script>
import getChartColorsArray from "@/common/getChartColorsArray";
import { CountTo } from "vue3-count-to";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import Marketplace from "./marketplace.vue";
import Popularity from "./popularity.vue";
import Historyofbids from "./historyofbids.vue";
import Featurednft from "./featurednft.vue";
import Topartworks from "./topartworks.vue";
import Recentnfts from "./recentnfts.vue";
import Topcollaction from "./topcollaction.vue";
import Worldwidetopcrearor from "./worldwidetopcrearor.vue";

// import Revenue from "./revenue";
// import SalesLocation from "./sales-location";

export default {
    components: {
        CountTo,
        Layout,
        // Swiper,
        // SwiperSlide,
        PageHeader,
        Marketplace,
        Popularity,
        Historyofbids,
        Featurednft,
        Topartworks,
        Recentnfts,
        Topcollaction,
        Worldwidetopcrearor
    },
    data() {
        return {
            title: "NFT Dashboard",
            items: [{
                text: "Dashboards",
                href: "/",
            },
            {
                text: "NFT Dashboard",
                active: true,
            },
            ],
            date: null,
            config: {
                mode: "range",
            },
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                labels: ["Direct", "Social", "Email", "Other", "Referrals"],
                chart: {
                    height: 333,
                    type: "donut",
                },
                legend: {
                    position: "bottom",
                },
                stroke: {
                    show: false,
                },
                dataLabels: {
                    dropShadow: {
                        enabled: false,
                    },
                },
                colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'),
            },
        };
    },
    methods: {
    }

};
</script>
  
<template>
    <Layout>
        <PageHeader title="NFT Dashboard" pageTitle="Dashboards" />
        <BRow class="dash-nft">
            <BCol xxl="9">
                <BRow>
                    <BCol xl="6">
                        <BCard no-body class="overflow-hidden">
                            <BCardBody class="bg-marketplace d-flex">
                                <div class="flex-grow-1">
                                    <h4 class="fs-18 lh-base fw-bold mb-0">Discover, Collect, Sell and Create <br> your
                                        own <span class="text-success">NFTs.</span> </h4>
                                    <p class="mb-0 mt-2 pt-1 text-muted">The world's first and largest digital
                                        marketplace.</p>
                                    <div class="d-flex gap-3 mt-4">
                                        <BLink href="" class="btn btn-primary">Discover Now </BLink>
                                        <BLink href="" class="btn btn-success">Create Your Own</BLink>
                                    </div>
                                </div>
                                <img src="@/assets/images/bg-d.png" alt="" class="img-fluid" />
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" md="6">
                        <BCard no-body class="card-height-100 mt-0">
                            <BCardBody>
                                <div class="float-end">
                                    <BDropdown variant="link" class="card-header-dropdown"
                                        toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                                        aria-haspopup="true" :offset="{ alignmentAxis: -145, crossAxis: 0, mainAxis: 0 }">
                                        <template #button-content> <span class="text-muted fs-18"><i
                                                    class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </template>
                                        <BDropdownItem>Today</BDropdownItem>
                                        <BDropdownItem>Last Week</BDropdownItem>
                                        <BDropdownItem>Last Month</BDropdownItem>
                                        <BDropdownItem>Current Year</BDropdownItem>
                                    </BDropdown>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-info-subtle rounded fs-3">
                                            <i class="bx bx-dollar-circle text-info"></i>
                                        </span>
                                    </div>
                                    <div class="flex-grow-1 ps-3">
                                        <h5 class="text-muted text-uppercase fs-13 mb-0">Total Revenue</h5>
                                    </div>
                                </div>
                                <div class="mt-4 pt-1">
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        $<count-to :startVal='20000' :endVal='559526' :duration='2000'></count-to>
                                    </h4>
                                    <p class="mt-4 mb-0 text-muted"><BBadge variant="danger-subtle"
                                            class="text-danger mb-0 me-1"> <i class="ri-arrow-down-line align-middle"></i>
                                            3.96 % </BBadge> vs. previous
                                        month</p>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol xl="3" md="6">
                        <BCard no-body class="card-height-100">
                            <BCardBody>
                                <div class="float-end">
                                    <BDropdown variant="link" class="card-header-dropdown"
                                        toggle-class="text-reset dropdown-btn arrow-none" menu-class="dropdown-menu-end"
                                        aria-haspopup="true" :offset="{ alignmentAxis: -145, crossAxis: 0, mainAxis: 0 }">
                                        <template #button-content> <span class="text-muted fs-18"><i
                                                    class="mdi mdi-dots-vertical align-middle"></i></span>
                                        </template>
                                        <BDropdownItem>Today</BDropdownItem>
                                        <BDropdownItem>Last Week</BDropdownItem>
                                        <BDropdownItem>Last Month</BDropdownItem>
                                        <BDropdownItem>Current Year</BDropdownItem>
                                    </BDropdown>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-info-subtle rounded fs-3">
                                            <i class="bx bx-wallet text-info"></i>
                                        </span>
                                    </div>
                                    <div class="flex-grow-1 ps-3">
                                        <h5 class="text-muted text-uppercase fs-13 mb-0">Estimated</h5>
                                    </div>
                                </div>
                                <div class="mt-4 pt-1">
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        $<count-to :startVal='20000' :endVal='624562' :duration='2000'></count-to>
                                    </h4>
                                    <p class="mt-4 mb-0 text-muted"><BBadge variant="success-subtle"
                                            class="text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                                        </BBadge> vs. previous
                                        month</p>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

                <BRow>
                    <BCol xxl="12">
                        <Marketplace />
                    </BCol>
                </BRow>
            </BCol>

            <BCol xxl="3">
                <Popularity />

                <Historyofbids />
            </BCol>
        </BRow>


        <BRow>
            <Featurednft />
            <Topartworks />
        </BRow>

        <BRow>
            <BCol xxl="6">
                <Recentnfts />
            </BCol>
            <BCol xxl="3" lg="6">
                <Worldwidetopcrearor />
            </BCol>
            <BCol xxl="3" lg="6">
                <Topcollaction />
            </BCol>
        </BRow>
    </Layout>
</template>

<style>
.float-end {
    position: absolute;
    right: 15px;
    top: 0px;
}
</style>