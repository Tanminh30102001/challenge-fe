<script>
import { CountTo } from "vue3-count-to";

export default {
    components: {
        CountTo,
    },

    data() {
        return {
            chartcolors: {
                colors: ["#f06548"]
            },
            chartOptions: {
                chart: {
                    type: "radialBar",
                    width: 105,
                    sparkline: {
                        enabled: true,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '70%'
                        },
                        track: {
                            margin: 1
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: false
                            },
                            value: {
                                show: true,
                                fontSize: '16px',
                                fontWeight: 600,
                                offsetY: 8,
                            }
                        }
                    },
                },
                colors: ["#0ab39c"]
            }
        };
    }
};
</script>

<template>

    <BCol xl="6">
        <div class="d-flex flex-column h-100">
            <BRow>
                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Total Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :startVal="0" :endVal="36894" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[95]'
                                        :options="{ ...chartOptions }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Apply Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :startVal="0" :endVal="28410" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[97]'
                                        :options="{ ...chartOptions }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">New Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :startVal="0" :endVal="4305" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[80]'
                                        :options="{ ...chartOptions }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Interview</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :startVal="0" :endVal="5021" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">

                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[89]'
                                        :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Hired</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :startVal="0" :endVal="3948" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[64]'
                                        :options="{ ...chartOptions }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="6" md="6">
                    <BCard no-body class="card-animate overflow-hidden">
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200"
                                height="120">
                                <path id="Shape 8" class="s0"
                                    d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                            </svg>
                        </div>
                        <BCardBody style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Rejected</p>
                                    <h4 class="fs-22 fw-semibold ff-econdary mb-0">
                                        <count-to :startVal="0" :endVal="1340" :duration="5000"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart class="apex-charts" dir="ltr" width="105px" height="90px" :series='[20]'
                                        :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </div>
    </BCol>
</template>
