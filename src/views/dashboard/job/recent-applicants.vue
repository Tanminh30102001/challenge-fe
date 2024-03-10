<script>
var echarts = require("echarts");
import worldJson from "../../../components/widgets/world.json";
export default {
    mounted() {
        let chartuser = document.getElementById("sales-by-locations");

        let userChart = echarts.init(chartuser);
        let useroption;
        echarts.registerMap("world", worldJson, {
            Alaska: {
                left: -131,
                top: 25,
                width: 15,
            },
            Hawaii: {
                left: -110,
                top: 28,
                width: 5,
            },
            "Puerto Rico": {
                left: -76,
                top: 26,
                width: 2,
            },
        });
        useroption = {
            tooltip: {
                trigger: "item",
                showDelay: 0,
                transitionDuration: 0.2,
            },
            series: [{
                name: "World",
                type: "map",
                map: "world",
                label: {
                    show: false,
                },
            },],
        };

        userChart.setOption(useroption);
        useroption && userChart.setOption(useroption);
    }
};
</script>

<template>
    <BRow>
        <BCol xxl="8">
            <BCard no-body>
                <BCardHeader class="align-items-center d-flex">
                    <BCardTitle class="mb-0 flex-grow-1">Recent Applicants</BCardTitle>
                    <div class="flex-shrink-0">
                        <BButton type="button" variant="soft-info" size="sm">
                            <i class="ri-file-list-3-line align-bottom"></i> Generate Report
                        </BButton>
                    </div>
                </BCardHeader>

                <BCardBody>
                    <div class="table-responsive table-card">
                        <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead class="text-muted table-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Candidate Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Rate/hr</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2112</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Nicholas Ball</div>
                                        </div>
                                    </td>
                                    <td>Assistant / Store Keeper</td>
                                    <td>
                                        <span class="text-success">$109.00</span>
                                    </td>
                                    <td>California, US</td>
                                    <td>
                                        <BBadge variant="success-subtle" class="bg-success-subtle text-success">Full Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">5.0<span class="text-muted fs-11 ms-1">(245
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2111</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Elizabeth Allen</div>
                                        </div>
                                    </td>
                                    <td>Education Training</td>
                                    <td>
                                        <span class="text-success">$149.00</span>
                                    </td>
                                    <td>Zuweihir, UAE</td>
                                    <td>
                                        <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary">Freelancer</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.5<span class="text-muted fs-11 ms-1">(645
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2109</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Cassian Jenning</div>
                                        </div>
                                    </td>
                                    <td>Graphic Designer</td>
                                    <td>
                                        <span class="text-success">$215.00</span>
                                    </td>
                                    <td>Limestone, US</td>
                                    <td>
                                        <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Part Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.9<span class="text-muted fs-11 ms-1">(89
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2108</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Scott Holt</div>
                                        </div>
                                    </td>
                                    <td>UI/UX Designer</td>
                                    <td>
                                        <span class="text-success">$199.00</span>
                                    </td>
                                    <td>Germany</td>
                                    <td>
                                        <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Part Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.3<span class="text-muted fs-11 ms-1">(47
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2109</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Hadley Leonard</div>
                                        </div>
                                    </td>
                                    <td>React Developer</td>
                                    <td>
                                        <span class="text-success">$330.00</span>
                                    </td>
                                    <td>Mughairah, UAE</td>
                                    <td>
                                        <BBadge variant="success-subtle" class="bg-success-subtle text-success">Full Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.7<span class="text-muted fs-11 ms-1">(161
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2110</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Harley Watkins</div>
                                        </div>
                                    </td>
                                    <td>Project Manager</td>
                                    <td>
                                        <span class="text-success">$330.00</span>
                                    </td>
                                    <td>Texanna, US</td>
                                    <td>
                                        <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary">Freelancer</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.7<span class="text-muted fs-11 ms-1">(3.21k
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2111</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Nadia Harding</div>
                                        </div>
                                    </td>
                                    <td>Web Designer</td>
                                    <td>
                                        <span class="text-success">$330.00</span>
                                    </td>
                                    <td>Pahoa, US</td>
                                    <td>
                                        <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Part Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.7<span class="text-muted fs-11 ms-1">(2.93k
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BLink href="#!" class="fw-medium link-primary">#VZ2112</BLink>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <img src="@/assets/images/users/avatar-9.jpg" alt=""
                                                    class="avatar-xs rounded-circle" />
                                            </div>
                                            <div class="flex-grow-1">Jenson Carlson</div>
                                        </div>
                                    </td>
                                    <td>Product Director</td>
                                    <td>
                                        <span class="text-success">$330.00</span>
                                    </td>
                                    <td>Pahoa, US</td>
                                    <td>
                                        <BBadge variant="success-subtle" class="bg-success-subtle text-success">Full Time</BBadge>
                                    </td>
                                    <td>
                                        <h5 class="fs-14 fw-medium mb-0">4.7<span class="text-muted fs-11 ms-1">(4.31k
                                                Rating)</span></h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol xxl="4">

            <BCard no-body class="card-height-100">
                <BCardHeader class="align-items-center d-flex">
                    <BCardTitle class="mb-0 flex-grow-1">Jobs Views Location</BCardTitle>
                    <div class="flex-shrink-0">
                        <BButton type="button" variant="soft-primary" size="sm">
                            Export Report
                        </BButton>
                    </div>
                </BCardHeader>


                <BCardBody>
                    <div id="sales-by-locations" style="height: 269px" dir="ltr"></div>

                    <div class="px-2 py-2 mt-4">
                        <p class="mb-1 d-flex" style="justify-content: space-between;">Canada <span >75%</span></p>
                        <BProgress striped :value="75" class="mt-2" variant="primary" style="height: 6px;" />

                        <p class="mt-3 mb-1 d-flex" style="justify-content: space-between;">Greenland <span >47%</span>
                        </p>
                        <BProgress striped :value="47" class="mt-2" variant="primary" style="height: 6px;" />

                        <p class="mt-3 mb-1 d-flex" style="justify-content: space-between;">Russia <span >82%</span></p>
                        <BProgress striped :value="82" class="mt-2" variant="primary" style="height: 6px;" />
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</template>
