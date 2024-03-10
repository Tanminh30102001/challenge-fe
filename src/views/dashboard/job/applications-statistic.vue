<script>
import getChartColorsArray from "@/common/getChartColorsArray";
import simplebar from "simplebar-vue";
import { CountTo } from "vue3-count-to";
export default {
    components: {
        CountTo,
        simplebar
    },
    data() {
        return {
            searchQuery: null,
            candidateList: [{ id: 1, img: require("@/assets/images/users/avatar-10.jpg"), name: "Tonya Noble", username: "@tonya", designation: "Web Developer" },
            { id: 2, img: require("@/assets/images/users/avatar-1.jpg"), name: "Nicholas Ball", username: "@nicholas", designation: "Assistant / Store Keeper" },
            { id: 3, img: require("@/assets/images/users/avatar-9.jpg"), name: "Zynthia Marrow", username: "@zynthia", designation: "Full Stack Engineer" },
            { id: 4, img: require("@/assets/images/users/avatar-2.jpg"), name: "Cheryl Moore", username: "@cheryl", designation: "Product Designer" },
            { id: 5, img: require("@/assets/images/users/avatar-5.jpg"), name: "Jennifer Bailey", username: "@jennifer", designation: "Marketing Director" },
            { id: 6, img: require("@/assets/images/users/avatar-8.jpg"), name: "Hadley Leonard", username: "@hadley", designation: "Executive, HR Operations" }]
        };
    },
    mounted() {
        const toggleBtn = document.getElementsByClassName("custom-toggle");
        Array.from(toggleBtn).forEach(ele => {
            ele.addEventListener("click", () => {
                if (ele.classList.contains("active")) {
                    ele.classList.remove("active");
                } else {
                    ele.classList.add("active");
                }
            });
        });
    },
    methods: {
        showdetail(data) {
            document.getElementById('candidate-img').setAttribute('src', data.img);
            document.getElementById('candidate-name').innerHTML = data.name;
            document.getElementById('candidate-position').innerHTML = data.username;
        },
    },
    computed: {
        displayedPosts() {
            return this.candidateList;
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.username.toLowerCase().includes(search) ||
                        data.designation.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    setup() {
        return {
            series: [{
                name: 'New Application',
                data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
            },
            {
                name: "Interview",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            },
            {
                name: " Hired",
                data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            }
            ],
            chartOptions: {
                chart: {
                    height: 345,
                    type: "line",
                    toolbar: "false",
                    enabled: false
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                    width: [3, 4, 3],
                    dashArray: [0, 8, 5]
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ],
                },
                colors: getChartColorsArray('["--vz-success", "--vz-info", "--vz-primary"]'),
                markers: {
                    size: 0,

                    hover: {
                        sizeOffset: 6
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
        };
    },
};
</script>

<template>
    <BRow>
        <BCol col xxl="8">
            <BCard no-body class="card-height-100">
                <BCardHeader class="border-0 align-items-center d-flex">
                    <BCardTitle class="mb-0 flex-grow-1">Applications Statistic</BCardTitle>
                    <div class="hstack gap-1">
                        <BButton variant="soft-secondary" size="sm">
                            ALL
                        </BButton>
                        <BButton variant="soft-secondary" size="sm">
                            1M
                        </BButton>
                        <BButton variant="soft-secondary" size="sm">
                            6M
                        </BButton>
                        <BButton variant="soft-primary" size="sm">
                            1Y
                        </BButton>
                    </div>
                </BCardHeader>

                <BCardHeader class="p-0 border-0 bg-light-subtle">
                    <BRow class="g-0 text-center">
                        <BCol cols="6" sm="3">
                            <div class="p-3 border border-dashed border-start-0">
                                <h5 class="mb-1">
                                    <count-to :startVal="0" :endVal="3364" :duration="5000"></count-to>
                                </h5>
                                <p class="text-muted mb-0">New Applications</p>
                            </div>
                        </BCol>
                        <BCol cols="6" sm="3">
                            <div class="p-3 border border-dashed border-start-0">
                                <h5 class="mb-1">
                                    <count-to :startVal="0" :endVal="2804" :duration="5000"></count-to>
                                </h5>
                                <p class="text-muted mb-0">Interview</p>
                            </div>
                        </BCol>
                        <BCol cols="6" sm="3">
                            <div class="p-3 border border-dashed border-start-0">
                                <h5 class="mb-1">
                                    <count-to :startVal="0" :endVal="2402" :duration="5000"></count-to>
                                </h5>
                                <p class="text-muted mb-0">Hired</p>
                            </div>
                        </BCol>
                        <BCol cols="6" sm="3">
                            <div class="p-3 border border-dashed border-start-0 border-end-0">
                                <h5 class="mb-1 text-success">
                                    <count-to :startVal="0" :endVal="8" :duration="5000"></count-to>k
                                </h5>
                                <p class="text-muted mb-0">Total Applications</p>
                            </div>
                        </BCol>
                    </BRow>
                </BCardHeader>

                <BCardBody class="p-0 pb-2">
                    <div class="w-100">
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="series" :options="chartOptions">
                        </apexchart>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>

        <BCol col xxl="4">
            <BCard no-body>
                <BCardHeader>
                    <div class="d-flex align-items-center">
                        <h6 class="card-title mb-0 flex-grow-1">Popular Candidates</h6>
                        <div class="flex-shrink-0">
                            <router-link to="/jobs/candidate-lists" class="link-primary">View All <i
                                    class="ri-arrow-right-line"></i></router-link>
                        </div>
                    </div>
                </BCardHeader>
                <BRow class="g-0">
                    <BCol col lg="6">
                        <BCardBody class="border-end">
                            <div class="search-box">
                                <input type="text" class="form-control bg-light border-light" autocomplete="off"
                                    id="searchList" placeholder="Search candidate..." v-model="searchQuery">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                            <simplebar data-simplebar style="max-height: 190px" class="px-3 mx-n3">
                                <ul class="list-unstyled mb-0 pt-2" id="candidate-list">
                                    <li v-for="(data, index) of resultQuery" :key="index" @click="showdetail(data)">
                                        <BLink href="javascript:void(0);" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs">
                                                    <img :src="data.img" alt=""
                                                        class="img-fluid rounded-circle candidate-img">
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-13 mb-1 text-truncate"><span class="candidate-name">{{
                                                    data.name
                                                }}</span> <span class="text-muted fw-normal">{{
    data.username
}}</span>
                                                </h5>
                                                <div class="d-none candidate-position">{{ data.designation }}</div>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
                            </simplebar>
                        </BCardBody>
                    </BCol>
                    <BCol col lg="6">
                        <BCardBody class="text-center">
                            <div class="avatar-md mb-3 mx-auto">
                                <img src="@/assets/images/users/avatar-10.jpg" alt="" id="candidate-img"
                                    class="img-thumbnail rounded-circle shadow-none">
                            </div>

                            <h5 id="candidate-name" class="mb-0">Tonya Noble</h5>
                            <p id="candidate-position" class="text-muted">Web Developer</p>

                            <div class="d-flex gap-2 justify-content-center mb-3">
                                <BButton variant="link" class="avatar-xs p-0" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Google">
                                    <span class="avatar-title rounded-circle bg-light text-body">
                                        <i class="ri-google-line"></i>
                                    </span>
                                </BButton>

                                <BButton variant="link" class="avatar-xs p-0" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Linkedin">
                                    <span class="avatar-title rounded-circle bg-light text-body">
                                        <i class="ri-linkedin-line"></i>
                                    </span>
                                </BButton>
                                <BButton variant="link" class="avatar-xs p-0" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Dribbble">
                                    <span class="avatar-title rounded-circle bg-light text-body">
                                        <i class="ri-dribbble-fill"></i>
                                    </span>
                                </BButton>
                            </div>

                            <div>
                                <BButton variant="success" class="custom-toggle w-100"
                                    data-bs-toggle="button">
                                    <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                    <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i>
                                        Unfollow</span>
                                </BButton>
                            </div>
                        </BCardBody>
                    </BCol>
                </BRow>
            </BCard>
            <BCard no-body class="overflow-hidden shadow-none">
                <BCardBody class="bg-danger-subtle">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-danger bg-opacity-10 text-danger rounded-circle fs-17">
                                    <i class="ri-gift-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h6 class="fs-16">Invite your friends to Velzon</h6>
                            <p class="text-muted mb-0">Nor again is there anyone who loves or pursues or desires to
                                obtain pain of itself, because it is pain, but because occasionally.</p>
                        </div>
                    </div>
                    <div class="mt-3 text-end">
                        <BLink href="#!" class="btn btn-danger">Invite Friends</BLink>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</template>
