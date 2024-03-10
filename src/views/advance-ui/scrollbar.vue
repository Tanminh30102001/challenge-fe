<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import simplebar from "simplebar-vue";

export default {
    components: {
        Layout,
        PageHeader,
        simplebar
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="Scrollbar" pageTitle="Advance UI" />
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Default Scroll</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>data-simplebar</code> attribute and add
                            <code>max-height: **px</code> to set default scrollbar.
                        </p>

                        <div class="mx-n3">
                            <simplebar data-simplebar style="max-height: 220px;" class="px-3">
                                <p>If several languages coalesce, the grammar of the resulting language is more simple
                                    and regular than that of the individual languages. The new common language will be
                                    more simple and regular than the existing</p>
                                <p>To an English person, it will seem like simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is. The European languages are members of the
                                    same family. Their separate existence is a myth. For science, music, sport, etc,
                                    Europe uses the same vocabulary.</p>
                                <p>The languages only differ in their grammar, their pronunciation and their most common
                                    words. Everyone realizes why a new common language would be desirable: one could
                                    refuse to pay expensive translators. To achieve this, it would be necessary to have
                                    uniform grammar, pronunciation and more common words.</p>
                                <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the
                                    same vocabulary. The languages only differ in their grammar, their pronunciation and
                                    their most common words.</p>
                            </simplebar>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>


            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Auto Hide False</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>data-simplebar-auto-hide="false"</code> attribute and add
                            <code>max-height: **px</code> to show simplebar as default.
                        </p>

                        <div class="mx-n3">
                            <simplebar data-simplebar data-simplebar-auto-hide="false" style="max-height: 220px;"
                                class="px-3">
                                <p>If several languages coalesce, the grammar of the resulting language is more simple
                                    and regular than that of the individual languages. The new common language will be
                                    more simple and regular than the existing</p>
                                <p>To an English person, it will seem like simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is. The European languages are members of the
                                    same family. Their separate existence is a myth. For science, music, sport, etc,
                                    Europe uses the same vocabulary.</p>
                                <p>The languages only differ in their grammar, their pronunciation and their most common
                                    words. Everyone realizes why a new common language would be desirable: one could
                                    refuse to pay expensive translators. To achieve this, it would be necessary to have
                                    uniform grammar, pronunciation and more common words.</p>
                                <p class="mb-0">Their separate existence is a myth. For science, music, sport, etc,
                                    Europe uses the same vocabulary. The languages only differ in their grammar, their
                                    pronunciation and their most common words.</p>
                            </simplebar>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>

        </BRow>


        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">RTL Direction</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">Use <code>data-simplebar-direction="rtl"</code> attribute and add
                            <code>max-height: **px</code> to set simplebar at right side.
                        </p>

                        <div class="mx-n3">
                            <simplebar data-simplebar data-simplebar-direction="rtl" style="max-height: 220px;" class="px-3">
                                <p>If several languages coalesce, the grammar of the resulting language is more simple
                                    and regular than that of the individual languages. The new common language will be
                                    more simple and regular than the existing</p>
                                <p>To an English person, it will seem like simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is. The European languages are members of the
                                    same family. Their separate existence is a myth. For science, music, sport, etc,
                                    Europe uses the same vocabulary.</p>
                                <p>The languages only differ in their grammar, their pronunciation and their most common
                                    words. Everyone realizes why a new common language would be desirable: one could
                                    refuse to pay expensive translators. To achieve this, it would be necessary to have
                                    uniform grammar, pronunciation and more common words.</p>
                                <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the
                                    same vocabulary. The languages only differ in their grammar, their pronunciation and
                                    their most common words.</p>
                            </simplebar>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>

        </BRow>


        <BRow class="mt-2">
            <BCol lg="12">
                <div class="justify-content-between d-flex align-items-center mb-3">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Simplebar Track Color</h5>
                </div>

                <BRow>
                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Primary Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="primary"</code> attribute to set
                                    primary color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="primary"
                                        style="max-height: 275px;">
                                        <BLink  href="#!" class="text-reset notification-item d-block dropdown-item">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs me-3">
                                                    <span
                                                        class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                        <i class="ri-checkbox-circle-fill"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-grow-1 text-muted">
                                                    <p class="m-0">Your <span class="fw-semibold text-dark">Elite</span>
                                                        author Graphic Optimization <span
                                                            class="text-secondary">reward</span> is ready!</p>

                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <div class="fs-11 text-muted">
                                                        <i class="mdi mdi-clock-outline"></i> 30 min ago
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink >

                                        <BLink  href="#!"
                                            class="text-reset notification-item d-block dropdown-item active">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs me-3">
                                                    <img src="@/assets/images/users/avatar-2.jpg"
                                                        class="rounded-circle img-fluid" alt="user-pic">
                                                </div>
                                                <div class="flex-grow-1 text-muted">
                                                    <h6 class="mb-1 fs-14">Angela Bernier</h6>
                                                    <p class="mb-0">Answered to your comment on the cash flow forecast's
                                                        graph 🔔.</p>
                                                </div>

                                                <div class="flex-shrink-0 ms-2">
                                                    <div class="fs-11 text-muted">
                                                        <i class="mdi mdi-clock-outline"></i> 01 hr ago
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink >

                                        <BLink  href="#!" class="text-reset notification-item d-block dropdown-item">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs me-3">
                                                    <span
                                                        class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                                        <i class="ri-message-2-fill"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-grow-1 text-muted">
                                                    <p class="m-0">You have received <span
                                                            class="fw-semibold text-success">20</span> new messages in
                                                        the conversation</p>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <div class="fs-11 text-muted">
                                                        <i class="mdi mdi-clock-outline"></i> 02 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink >

                                        <BLink  href="#!" class="text-reset notification-item d-block dropdown-item">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs me-3">
                                                    <img src="@/assets/images/users/avatar-8.jpg"
                                                        class="rounded-circle img-fluid" alt="user-pic">
                                                </div>
                                                <div class="flex-grow-1 text-muted">
                                                    <h6 class="mb-1 fs-14">Maureen Gibson</h6>
                                                    <p class="mb-0">We talked about a project on linkedin.</p>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <div class="fs-11 text-muted">
                                                        <i class="mdi mdi-clock-outline"></i> 02 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink >
                                        <BLink  href="#!" class="text-reset notification-item d-block dropdown-item">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs me-3">
                                                    <span
                                                        class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                        <i class="ri-checkbox-circle-fill"></i>
                                                    </span>
                                                </div>
                                                <div class="flex-grow-1 text-muted">
                                                    <p class="m-0">Your <span class="fw-semibold text-dark">Elite</span>
                                                        author Graphic Optimization <span
                                                            class="text-secondary">reward</span> is ready!</p>

                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <div class="fs-11 text-muted">
                                                        <i class="mdi mdi-clock-outline"></i> 30 min ago
                                                    </div>
                                                </div>
                                            </div>
                                        </BLink >
                                        <div class="text-center my-2">
                                            <BLink  href="javascript:void(0);" class="text-success"><i
                                                    class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load
                                                more </BLink >
                                        </div>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>

                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Secondary Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="secondary"</code> attribute to set
                                    secondary color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false"
                                        data-simplebar-track="secondary" style="max-height: 274px;">
                                        <div class="list-group list-group-flush">
                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                M
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Michael Johnston</h5>
                                                        <p class="text-truncate mb-0">New updates for ABC Theme</p>
                                                    </div>
                                                    <div class="fs-11">06 mins</div>
                                                </div>
                                            </BLink >
                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                D
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Darren James</h5>
                                                        <p class="text-truncate mb-0">Bug Report - abc theme</p>
                                                    </div>
                                                    <div class="fs-11">12 mins</div>
                                                </div>
                                            </BLink >
                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                P
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Patricia Shelton</h5>
                                                        <p class="text-truncate mb-0">Nice to meet you</p>
                                                    </div>
                                                    <div class="fs-11">28 mins</div>
                                                </div>
                                            </BLink >

                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                T
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Thomas McNeil</h5>
                                                        <p class="text-truncate mb-0">This theme is awesome!</p>
                                                    </div>
                                                    <div class="fs-11">02 hrs</div>
                                                </div>
                                            </BLink >

                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                C
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Carolyn Jones</h5>
                                                        <p class="text-truncate mb-0">I've finished it! See you so</p>
                                                    </div>
                                                    <div class="fs-11">03 hrs</div>
                                                </div>
                                            </BLink >
                                            <BLink  href="#" class="list-group-item text-muted py-3">
                                                <div class="d-flex align-items-start">
                                                    <div class="flex-shrink-0 align-self-center me-3">
                                                        <div class="avatar-xs">
                                                            <span
                                                                class="avatar-title rounded-circle bg-light text-primary">
                                                                M
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Michael Johnston</h5>
                                                        <p class="text-truncate mb-0">New updates for ABC Theme</p>
                                                    </div>
                                                    <div class="fs-11">03 hrs</div>
                                                </div>
                                            </BLink >
                                        </div>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>

                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Success Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="success"</code> attribute to set
                                    success color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="success"
                                        style="max-height: 274px;">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <div>2019 - 21</div>
                                                    </div>
                                                    <div class="flex-shrink-0 mx-3">
                                                        <i class="ri-arrow-right-fill text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Lead designer / Developer
                                                        </h5>
                                                        <div class="text-truncate">Xyz Company</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <div>2017 - 19</div>
                                                    </div>
                                                    <div class="flex-shrink-0 mx-3">
                                                        <i class="ri-arrow-right-fill text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Senior Graphic Designer
                                                        </h5>
                                                        <div class="text-truncate">Abc Company</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <div>2016 - 17</div>
                                                    </div>
                                                    <div class="flex-shrink-0 mx-3">
                                                        <i class="ri-arrow-right-fill text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Graphic Designer</h5>
                                                        <div class="text-truncate">Xyz Company</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <div>2017 - 16</div>
                                                    </div>
                                                    <div class="flex-shrink-0 mx-3">
                                                        <i class="ri-arrow-right-fill text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Graphic Designer</h5>
                                                        <div class="text-truncate">Abc Company</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <div>2016 - 15</div>
                                                    </div>
                                                    <div class="flex-shrink-0 mx-3">
                                                        <i class="ri-arrow-right-fill text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 text-muted overflow-hidden">
                                                        <h5 class="text-truncate fs-14 mb-1">Graphic Designer</h5>
                                                        <div class="text-truncate">Xyz Company</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>


                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Info Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="info"</code> attribute to set info
                                    color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="info"
                                        style="max-height: 238px;">
                                        <ol class="list-group list-group-flush list-group-numbered">
                                            <li class="list-group-item d-flex align-items-center">
                                                A list item
                                                <BBadge variant="success" class="ms-auto">Paid</BBadge>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                A second list item
                                                <BBadge variant="danger" class="ms-auto">Refund</BBadge>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                A third list item
                                                <BBadge variant="success" class="ms-auto">Paid</BBadge>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                A fourth list item
                                                <BBadge variant="success" class="ms-auto">Paid</BBadge>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                A Fifth list item
                                                <BBadge class="ms-auto bg-warning">Inprogress</BBadge>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                A Sixth list item
                                                <BBadge variant="success" class="ms-auto">Paid</BBadge>
                                            </li>
                                        </ol>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>


                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Warning Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="warning"</code> attribute to set
                                    warning color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="warning"
                                        style="max-height: 220px;" class="px-3">
                                        <div class="d-flex align-items-center py-3">
                                            <div class="avatar-xs flex-shrink-0 me-3">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="flex-grow-1">
                                                <div>
                                                    <h5 class="fs-14 mb-1">Esther James</h5>
                                                    <p class="fs-13 text-muted mb-0">Frontend Developer</p>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BButton variant="outline-success" size="sm" type="button"><i
                                                        class="ri-user-add-line align-middle"></i></BButton>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center py-3">
                                            <div class="avatar-xs flex-shrink-0 me-3">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="flex-grow-1">
                                                <div>
                                                    <h5 class="fs-14 mb-1">Jacqueline Steve</h5>
                                                    <p class="fs-13 text-muted mb-0">UI/UX Designer</p>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BButton variant="outline-success" size="sm" type="button"><i
                                                        class="ri-user-add-line align-middle"></i></BButton>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center py-3">
                                            <div class="avatar-xs flex-shrink-0 me-3">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="flex-grow-1">
                                                <div>
                                                    <h5 class="fs-14 mb-1">George Whalen</h5>
                                                    <p class="fs-13 text-muted mb-0">Backend Developer</p>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BButton variant="outline-success" size="sm" type="button"><i
                                                        class="ri-user-add-line align-middle"></i></BButton>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center py-3">
                                            <div class="avatar-xs flex-shrink-0 me-3">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                    class="img-fluid rounded-circle">
                                            </div>
                                            <div class="flex-grow-1">
                                                <div>
                                                    <h5 class="fs-14 mb-1">Carl Lynch</h5>
                                                    <p class="fs-13 text-muted mb-0">Frontend Developer</p>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-2">
                                                <BButton variant="outline-success" size="sm" type="button"><i
                                                        class="ri-user-add-line align-middle"></i></BButton>
                                            </div>
                                        </div>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>


                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Danger Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="danger"</code> attribute to set
                                    danger color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="danger"
                                        style="max-height: 220px;" class="px-3">
                                        <BLink  href="#" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <div class="avatar-title bg-light text-primary rounded-circle">
                                                    <i class="ri-hashtag"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 mb-1">ABC Project Customization</h5>
                                                <p class="text-muted mb-0">04 Members</p>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start ms-2">
                                                <BBadge tag="div" variant="warning-subtle"
                                                    class="bg-warning-subtle text-warning fs-10">Inprogress</BBadge>
                                            </div>
                                        </BLink >
                                        <BLink  href="#" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <div class="avatar-title bg-light text-primary rounded-circle">
                                                    <i class="ri-hashtag"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 mb-1">Client - John</h5>
                                                <p class="text-muted mb-0">02 Members</p>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start ms-2">
                                                <BBadge tag="div" variant="warning-subtle"
                                                    class="bg-warning-subtle text-warning fs-10">Inprogress</BBadge>
                                            </div>
                                        </BLink >
                                        <BLink  href="#" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <div class="avatar-title bg-light text-primary rounded-circle">
                                                    <i class="ri-hashtag"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 mb-1">Brand logo Design</h5>
                                                <p class="text-muted mb-0">01 Members</p>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start ms-2">
                                                <BBadge tag="div" variant="success-subtle"
                                                    class="bg-success-subtle text-success fs-10">Completed</BBadge>
                                            </div>
                                        </BLink >
                                        <BLink  href="#" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <div class="avatar-title bg-light text-primary rounded-circle">
                                                    <i class="ri-hashtag"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 mb-1">Project update</h5>
                                                <p class="text-muted mb-0">03 Members</p>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start ms-2">
                                                <BBadge tag="div" variant="warning-subtle"
                                                    class="bg-warning-subtle text-warning fs-10">Inprogress</BBadge>
                                            </div>
                                        </BLink >
                                        <BLink  href="#" class="d-flex align-items-center py-2">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <div class="avatar-title bg-light text-primary rounded-circle">
                                                    <i class="ri-hashtag"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 mb-1">Chat App</h5>
                                                <p class="text-muted mb-0">05 Members</p>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start ms-2">
                                                <BBadge tag="div" variant="success-subtle"
                                                    class="bg-success-subtle text-success fs-10">Completed</BBadge>
                                            </div>
                                        </BLink >
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>


                    <BCol xl="4" lg="6">
                        <BCard no-body>
                            <BCardHeader>
                                <BCardTitle class="mb-0">Dark Track</BCardTitle>
                            </BCardHeader>

                            <BCardBody>
                                <p class="text-muted">Use <code>data-simplebar-track="dark"</code> attribute to set dark
                                    color simplebar track.</p>

                                <div class="mx-n3">
                                    <simplebar data-simplebar data-simplebar-auto-hide="false" data-simplebar-track="dark"
                                        style="max-height: 220px;">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <div>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <BBadge tag="div" variant="success"
                                                                class="bg-gradient mb-2"><i class="mdi mdi-star"></i>
                                                                4.1</BBadge>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <p class="text-muted fs-13">12 Jul, 21</p>
                                                        </div>
                                                    </div>

                                                    <p class="text-muted mb-4">It will be as simple as in fact, It will
                                                        seem like simplified</p>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-14 mb-0">Michael Lemire</h5>
                                                        </div>

                                                        <div class="flex-shrink-0">
                                                            <div class="hstack gap-3">
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Like">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-thumb-up-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Comment">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-discuss-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <BDropdown  variant="link" right
                                                                    toggle-class="text-muted arrow-none p-0" no-caret>
                                                                    <template #button-content> <i
                                                                            class="ri-more-fill"></i> </template>
                                                                    <BDropdownItem href="#">Action</BDropdownItem>
                                                                    <BDropdownItem href="#">Another
                                                                        action</BDropdownItem>
                                                                    <BDropdownItem href="#">Something else
                                                                        here</BDropdownItem>
                                                                </BDropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <BBadge tag="div" variant="success"
                                                                class="bg-gradient mb-2"><i class="mdi mdi-star"></i>
                                                                4.0</BBadge>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <p class="text-muted fs-13">06 Jul, 21</p>
                                                        </div>
                                                    </div>
                                                    <p class="text-muted mb-4">Sed ut perspiciatis iste error sit</p>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-14 mb-0">Carl Lynch</h5>
                                                        </div>

                                                        <div class="flex-shrink-0">
                                                            <div class="hstack gap-3">
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Like">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-thumb-up-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Comment">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-discuss-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <BDropdown variant="link" right
                                                                    toggle-class="text-muted arrow-none p-0" no-caret>
                                                                    <template #button-content> <i
                                                                            class="ri-more-fill"></i> </template>
                                                                    <BDropdownItem href="#">Action</BDropdownItem>
                                                                    <BDropdownItem href="#">Another
                                                                        action</BDropdownItem>
                                                                    <BDropdownItem href="#">Something else
                                                                        here</BDropdownItem>
                                                                </BDropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="list-group-item">
                                                <div>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <BBadge tag="div" variant="success"
                                                                class="bg-gradient mb-2"><i class="mdi mdi-star"></i>
                                                                4.2</BBadge>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <p class="text-muted fs-13">26 Jun, 21</p>
                                                        </div>
                                                    </div>
                                                    <p class="text-muted mb-4">Neque porro quisquam est, qui dolorem
                                                        ipsum quia dolor sit amet</p>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-14 mb-0">Joyce White</h5>
                                                        </div>

                                                        <div class="flex-shrink-0">
                                                            <div class="hstack gap-3">
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Like">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-thumb-up-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Comment">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-discuss-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <BDropdown variant="link" right
                                                                    toggle-class="text-muted arrow-none p-0" no-caret>
                                                                    <template #button-content> <i
                                                                            class="ri-more-fill"></i> </template>
                                                                    <BDropdownItem href="#">Action</BDropdownItem>
                                                                    <BDropdownItem href="#">Another
                                                                        action</BDropdownItem>
                                                                    <BDropdownItem href="#">Something else
                                                                        here</BDropdownItem>
                                                                </BDropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="list-group-item">
                                                <div>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <BBadge tag="div" variant="success"
                                                                class="bg-gradient mb-2"><i class="mdi mdi-star"></i>
                                                                4.1</BBadge>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <p class="text-muted fs-13">24 Jun, 21</p>
                                                        </div>
                                                    </div>
                                                    <p class="text-muted mb-4">Ut enim ad minima veniam, quis nostrum
                                                        ullam corporis suscipit consequatur nisi ut</p>
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-14 mb-0">Etta Smith</h5>
                                                        </div>

                                                        <div class="flex-shrink-0">
                                                            <div class="hstack gap-3">
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Like">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-thumb-up-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <div data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Comment">
                                                                    <BLink  href="#" class="text-muted"><i
                                                                            class="ri-discuss-line"></i></BLink >
                                                                </div>
                                                                <div class="vr"></div>
                                                                <BDropdown variant="link" right
                                                                    toggle-class="text-muted arrow-none p-0" no-caret>
                                                                    <template #button-content> <i
                                                                            class="ri-more-fill"></i> </template>
                                                                    <BDropdownItem href="#">Action</BDropdownItem>
                                                                    <BDropdownItem href="#">Another
                                                                        action</BDropdownItem>
                                                                    <BDropdownItem href="#">Something else
                                                                        here</BDropdownItem>
                                                                </BDropdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </simplebar>
                                </div>
                            </BCardBody>
                        </BCard> 
                    </BCol>

                </BRow>

            </BCol>

        </BRow>

    </Layout>
</template>
