<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";
import simplebar from "simplebar-vue";

export default {
  data() {
    return {
      defaultOffcanvas: false,
      topOffcanvas: false,
      rightOffcanvas: false,
      bottomOffcanvas: false,
      leftOffcanvas: false,
      backdropOff: false,
      backdrop: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    CardHeader,
    simplebar
  },
  methods: {
    backdropType(type, backdropType) {
      if (type == false) {
        this.backdropOff = true;
        this.backdrop = backdropType;
      } else {
        this.backdropOff = true;
        this.backdrop = backdropType;
      }
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Offcanvas" pageTitle="Base UI" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Default Offcanvas" />
          <BCardBody class="tab-content">
            <p class="text-muted">
              Use the
              <code>offcanvas</code> class to set a default offcanvas.
            </p>
            <div class="live-preview show active" id="defaultOffcanvasPreview" role="tabpanel"
              aria-labelledby="defaultOffcanvasPreview-tab" tabindex="0">
              <div class="hstack flex-wrap gap-2">
                <BButton @click="defaultOffcanvas = true">Link with href</BButton>
                <BButton @click="defaultOffcanvas = true">Button with data-bs-target</BButton>
              </div>
              <BOffcanvas v-model="defaultOffcanvas" title="Recent Activity" header-class="border-bottom"
                body-class="p-0 overflow-hidden" footer-class="border-top p-3 text-center">
                <simplebar data-simplebar style="height: calc(100vh - 112px);">
                  <div class="acitivity-timeline p-4">
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-1.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Oliver Phillips <span
                            class="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                        <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                        <small class="mb-0 text-muted">Today</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                        <div class="avatar-title bg-success-subtle text-success rounded-circle">
                          N
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Nancy Martino <span
                            class="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                        <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                          project Building product</p>
                        <div class="avatar-group mb-2">
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Christi">
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle bg-light text-primary">
                                R
                              </div>
                            </div>
                          </BLink>
                          <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="" data-bs-original-title="more">
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle">
                                2+
                              </div>
                            </div>
                          </BLink>
                        </div>
                        <small class="mb-0 text-muted">Yesterday</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-2.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Natasha Carey <span
                            class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                        <p class="text-muted mb-2">Adding a new event with attachments</p>
                        <BRow class="border border-dashed gx-2 p-2 mb-2">
                          <BCol cols="4">
                            <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                          </BCol>
                          <BCol cols="4">
                            <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                          </BCol>
                          <BCol cols="4">
                            <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                          </BCol>
                        </BRow>
                        <small class="mb-0 text-muted">25 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-6.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Bethany Johnson</h6>
                        <p class="text-muted mb-2">added a new member to Judia dashboard</p>
                        <small class="mb-0 text-muted">19 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                            <i class="ri-shopping-bag-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Your order is placed <span
                            class="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                        <p class="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                        <small class="mb-0 text-muted">16 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-7.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Lewis Pratt</h6>
                        <p class="text-muted mb-2">They all have something to say beyond the words on the page. They can
                          come across as casual or neutral, exotic or graphic. </p>
                        <small class="mb-0 text-muted">22 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div class="avatar-title rounded-circle bg-info-subtle text-info">
                            <i class="ri-line-chart-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Monthly sales report</h6>
                        <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to submit
                          the monthly sales report. <BLink href="javascript:void(0);"
                            class="link-warning text-decoration-underline">Reports Builder</BLink>
                        </p>
                        <small class="mb-0 text-muted">15 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img src="@/assets/images/users/avatar-8.jpg" alt=""
                          class="avatar-xs rounded-circle acitivity-avatar">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">New ticket received <span
                            class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                        <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span> submitted a ticket.
                        </p>
                        <small class="mb-0 text-muted">26 Aug</small>
                      </div>
                    </div>
                  </div>
                </simplebar>
                <template #footer>
                  <BLink href="javascript:void(0);" class="link-success">View All Activity <i
                      class="ri-arrow-right-s-line align-middle ms-1"></i></BLink>
                </template>
              </BOffcanvas>
            </div>
            <div class="d-none code-view" id="defaultOffcanvasCode" role="tabpanel"
              aria-labelledby="defaultOffcanvasCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Base Examples --&gt;
            &lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
            &lt;a class=&quot;btn btn-light&quot; data-bs-toggle=&quot;offcanvas&quot; href=&quot;#offcanvasExample&quot; role=&quot;button&quot; aria-controls=&quot;offcanvasExample&quot;&gt;
            Link with href
            &lt;/a&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasExample&quot; aria-controls=&quot;offcanvasExample&quot;&gt;
            Button with data-bs-target
            &lt;/button&gt;
            &lt;/div&gt;
            
            &lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasExample&quot; aria-labelledby=&quot;offcanvasExampleLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasExampleLabel&quot;&gt;Offcanvas&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Placement Offcanvas" />

          <BCardBody class="tab-content">
            <p class="text-muted">
              Use
              <code>offcanvas-top</code>,
              <code>offcanvas-end</code>,
              <code>offcanvas-bottom</code>, or
              <code>offcanvas-start</code> to offcanvas class to set different Offcanvas Placement.
            </p>
            <div class="live-preview show active" id="placementOffcanvasPreview" role="tabpanel"
              aria-labelledby="placementOffcanvasPreview-tab" tabindex="0">
              <div>
                <div class="d-flex flex-wrap gap-2">
                  <BButton @click="topOffcanvas = true" variant="primary">
                    Toggle Top Offcanvas
                  </BButton>
                  <BButton @click="rightOffcanvas = true" variant="secondary">
                    Toggle Right Offcanvas
                  </BButton>
                  <BButton @click="bottomOffcanvas = true" variant="success">
                    Toggle Bottom Offcanvas
                  </BButton>
                  <BButton @click="leftOffcanvas = true" variant="danger">
                    Toggle Left Offcanvas
                  </BButton>
                </div>

                <!-- top offcanvas -->
                <BOffcanvas v-model="topOffcanvas" placement="top" title="Gallery">
                  <BRow class="gallery-light">
                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card light mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-12.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">A mix of friends and strangers adventure.</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Erica
                                Kernan</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                </BButton>
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card light mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Dramatic clouds at the Golden Gate Bridge</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Ron
                                Mackie</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 5.1K
                                </BButton>
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 4.7k
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-11.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Cycling in the countryside</h5>
                          </div>


                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Nancy
                                Martino</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                  </BButton>
                                  <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                    <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                    </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol class="d-md-none d-xl-block" xl="3" lg="4" sm="6">
                      <div class="gallery-box card mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Henry
                                Baird</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                </BButton>
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                  </BRow>

                </BOffcanvas>

                <!-- right offcanvas -->
                <BOffcanvas v-model="rightOffcanvas" placement="end" title="Recent Acitivity" header-class="border-bottom"
                  body-class="p-0 overflow-hidden" footer-class="border-top p-3 text-center">
                  <simplebar data-simplebar style="height: calc(100vh - 112px);">
                    <div class="acitivity-timeline p-4">
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-1.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Oliver Phillips <span
                              class="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                          <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                          <small class="mb-0 text-muted">Today</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                          <div class="avatar-title bg-success-subtle text-success rounded-circle">
                            N
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Nancy Martino <span
                              class="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                          <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                            project Building product</p>
                          <div class="avatar-group mb-2">
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Christi">
                              <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                              <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle bg-light text-primary">
                                  R
                                </div>
                              </div>
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="more">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle">
                                  2+
                                </div>
                              </div>
                            </BLink>
                          </div>
                          <small class="mb-0 text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-2.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Natasha Carey <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">Adding a new event with attachments</p>
                          <BRow class="border border-dashed gx-2 p-2 mb-2">
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                          </BRow>
                          <small class="mb-0 text-muted">25 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-6.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Bethany Johnson</h6>
                          <p class="text-muted mb-2">added a new member to Judia dashboard</p>
                          <small class="mb-0 text-muted">19 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                              <i class="ri-shopping-bag-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Your order is placed <span
                              class="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                          <p class="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                          <small class="mb-0 text-muted">16 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-7.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Lewis Pratt</h6>
                          <p class="text-muted mb-2">They all have something to say beyond the words on the page. They
                            can come across as casual or neutral, exotic or graphic. </p>
                          <small class="mb-0 text-muted">22 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-info-subtle text-info">
                              <i class="ri-line-chart-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Monthly sales report</h6>
                          <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to submit
                            the monthly sales report. <BLink href="javascript:void(0);"
                              class="link-warning text-decoration-underline">Reports Builder</BLink>
                          </p>
                          <small class="mb-0 text-muted">15 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-8.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">New ticket received <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span> submitted a
                            ticket.</p>
                          <small class="mb-0 text-muted">26 Aug</small>
                        </div>
                      </div>
                    </div>
                  </simplebar>
                  <template #footer>
                    <BLink href="javascript:void(0);" class="link-success">View All Activity <i
                        class="ri-arrow-right-s-line align-middle ms-1"></i></BLink>
                  </template>
                </BOffcanvas>

                <!-- bottom offcanvas -->
                <BOffcanvas v-model="bottomOffcanvas" placement="bottom" title="Gallery" class="offcanvas-body py-4">
                  <BRow class="gallery-light">
                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card light mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-12.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">A mix of friends and strangers adventure.</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Erica
                                Kernan</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                </BButton>
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card light mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Dramatic clouds at the Golden Gate Bridge</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Ron
                                Mackie</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 5.1K
                                </BButton>
                                <BButton variant="link" size="sm" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 4.7k
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol xl="3" lg="4" sm="6">
                      <div class="gallery-box card mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-11.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Cycling in the countryside</h5>
                          </div>


                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Nancy
                                Martino</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="link" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                </BButton>
                                <BButton variant="link" size="link" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol xl="3" lg="4" sm="6" class="d-md-none d-xl-block">
                      <div class="gallery-box card mb-0">
                        <div class="gallery-container">
                          <BLink href="#" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg" alt="">
                          </BLink>
                        </div>
                        <div class="box-content px-3 py-2">
                          <div class="gallery-overlay">
                            <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                          </div>
                          <div class="d-flex align-items-center mt-1">
                            <div class="flex-grow-1 text-muted">by <BLink href="" class="text-body text-truncate">Henry
                                Baird</BLink>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <BButton variant="link" size="link" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                </BButton>
                                <BButton variant="link" size="link" class="fs-xs text-body text-decoration-none px-0">
                                  <i class="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                </BButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>

                  </BRow>

                </BOffcanvas>

                <!-- left offcanvas -->
                <BOffcanvas v-model="leftOffcanvas" placement="start" title="Recent Acitivity"
                  header-class="border-bottom" body-class="p-0 overflow-hidden" footer-class="border-top p-3 text-center">
                  <simplebar data-simplebar style="height: calc(100vh - 112px);">
                    <div class="acitivity-timeline p-4">
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-1.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Oliver Phillips <span
                              class="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                          <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                          <small class="mb-0 text-muted">Today</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                          <div class="avatar-title bg-success-subtle text-success rounded-circle">
                            N
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Nancy Martino <span
                              class="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                          <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                            project Buildng product</p>
                          <div class="avatar-group mb-2">
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Christi">
                              <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                              <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle bg-light text-primary">
                                  R
                                </div>
                              </div>
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="more">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle">
                                  2+
                                </div>
                              </div>
                            </BLink>
                          </div>
                          <small class="mb-0 text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-2.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Natasha Carey <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">Adding a new event with attachments</p>
                          <BRow class="border border-dashed gx-2 p-2 mb-2">
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                          </BRow>
                          <small class="mb-0 text-muted">25 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-6.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Bethany Johnson</h6>
                          <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                          <small class="mb-0 text-muted">19 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                              <i class="ri-shopping-bag-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Your order is placed <span
                              class="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                          <p class="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                          <small class="mb-0 text-muted">16 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-7.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Lewis Pratt</h6>
                          <p class="text-muted mb-2">They all have something to say beyond the words on the page. They
                            can come across as casual or neutral, exotic or graphic. </p>
                          <small class="mb-0 text-muted">22 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-info-subtle text-info">
                              <i class="ri-line-chart-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Monthly sales report</h6>
                          <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to submit
                            the monthly sales report. <BLink href="javascript:void(0);"
                              class="link-warning text-decoration-underline">Reports Builder</BLink>
                          </p>
                          <small class="mb-0 text-muted">15 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-8.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">New ticket received <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span> submitted a
                            ticket.</p>
                          <small class="mb-0 text-muted">26 Aug</small>
                        </div>
                      </div>
                    </div>
                  </simplebar>
                  <template #footer>
                    <BLink href="javascript:void(0);" class="link-success">View All Activity <i
                        class="ri-arrow-right-s-line align-middle ms-1"></i></BLink>
                  </template>
                </BOffcanvas>
              </div>
            </div>
            <div class="d-none code-view" id="placementOffcanvasCode" role="tabpanel"
              aria-labelledby="placementOffcanvasCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Placement Offcanvas --&gt;
            &lt;div class=&quot;d-flex flex-wrap gap-2&quot;&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasTop&quot; aria-controls=&quot;offcanvasTop&quot;&gt;Toggle Top offcanvas&lt;/button&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasRight&quot; aria-controls=&quot;offcanvasRight&quot;&gt;Toggle Right offcanvas&lt;/button&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasBottom&quot; aria-controls=&quot;offcanvasBottom&quot;&gt;Toggle Bottom offcanvas&lt;/button&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasLeft&quot; aria-controls=&quot;offcanvasLeft&quot;&gt;Toggle Left offcanvas&lt;/button&gt;
            &lt;/div&gt;</code>
            
            <code>&lt;!-- top offcanvas --&gt;
            &lt;div class=&quot;offcanvas offcanvas-top&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasTop&quot; aria-labelledby=&quot;offcanvasTopLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 id=&quot;offcanvasTopLabel&quot;&gt;Offcanvas Top&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/d0iv&gt;</code>
            
            <code>&lt;!-- right offcanvas --&gt;
            &lt;div class=&quot;offcanvas offcanvas-end&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasRight&quot; aria-labelledby=&quot;offcanvasRightLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 id=&quot;offcanvasRightLabel&quot;&gt;Offcanvas Right&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code>
            
            <code>&lt;!-- bottom offcanvas --&gt;
            &lt;div class=&quot;offcanvas offcanvas-bottom&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasBottom&quot; aria-labelledby=&quot;offcanvasBottomLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 id=&quot;offcanvasBottomLabel&quot;&gt;Offcanvas Bottom&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code>
            
            <code>&lt;!-- left offcanvas --&gt;
            &lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasLeft&quot; aria-labelledby=&quot;offcanvasLeftLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 id=&quot;offcanvasLeftLabel&quot;&gt;Offcanvas Left&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Backdrop Offcanvas" />
          <BCardBody class="tab-content">
            <p class="text-muted">Here are the example of offcanvas with scrolling active and backdrop
              visible.</p>
            <div class="live-preview show active" id="backdropOffcanvasPreview" role="tabpanel"
              aria-labelledby="backdropOffcanvasPreview-tab" tabindex="0">
              <div>
                <div class="d-flex flex-wrap gap-2">

                  <BButton @click="backdropType(false, false)" variant="light">
                    Enable Body Scrolling
                  </BButton>

                  <BButton @click="backdropType(false, true)" variant="light">
                    Enable Backdrop (Default)
                  </BButton>

                  <BButton @click="backdropType(true, true)" variant="light">
                    Enable Both Scrolling & Backdrop
                  </BButton>
                </div>

                <BOffcanvas v-model="backdropOff" title="Customer Acitivity" :backdrop="backdrop"
                  header-class="border-bottom" body-class="p-0 overflow-hidden" footer-class="border-top p-3 text-center">
                  <simplebar data-simplebar style="height: calc(100vh - 112px);">
                    <div class="acitivity-timeline p-4">
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-1.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Oliver Phillips <span
                              class="badge bg-primary-subtle text-primary align-middle">New</span></h6>
                          <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                          <small class="mb-0 text-muted">Today</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                          <div class="avatar-title bg-success-subtle text-success rounded-circle">
                            N
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Nancy Martino <span
                              class="badge bg-secondary-subtle text-secondary align-middle">In Progress</span></h6>
                          <p class="text-muted mb-2"><i class="ri-file-text-line align-middle ms-2"></i> Create new
                            project Buildng product</p>
                          <div class="avatar-group mb-2">
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Christi">
                              <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="Frank Hook">
                              <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle avatar-xs">
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle bg-light text-primary">
                                  R
                                </div>
                              </div>
                            </BLink>
                            <BLink href="javascript: void(0);" class="avatar-group-item" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="" data-bs-original-title="more">
                              <div class="avatar-xs">
                                <div class="avatar-title rounded-circle">
                                  2+
                                </div>
                              </div>
                            </BLink>
                          </div>
                          <small class="mb-0 text-muted">Yesterday</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-2.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Natasha Carey <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">Adding a new event with attachments</p>
                          <BRow class="border border-dashed gx-2 p-2 mb-2">
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-2.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                            <BCol cols="4">
                              <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                          </BRow>
                          <small class="mb-0 text-muted">25 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-6.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Bethany Johnson</h6>
                          <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                          <small class="mb-0 text-muted">19 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                              <i class="ri-shopping-bag-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Your order is placed <span
                              class="badge bg-danger-subtle text-danger align-middle ms-1">Out of Delivery</span></h6>
                          <p class="text-muted mb-2">These customers can rest assured their order has been placed.</p>
                          <small class="mb-0 text-muted">16 Nov</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-7.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Lewis Pratt</h6>
                          <p class="text-muted mb-2">They all have something to say beyond the words on the page. They
                            can come across as casual or neutral, exotic or graphic. </p>
                          <small class="mb-0 text-muted">22 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item py-3 d-flex">
                        <div class="flex-shrink-0">
                          <div class="avatar-xs acitivity-avatar">
                            <div class="avatar-title rounded-circle bg-info-subtle text-info">
                              <i class="ri-line-chart-line"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">Monthly sales report</h6>
                          <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to submit
                            the monthly sales report. <BLink href="javascript:void(0);"
                              class="link-warning text-decoration-underline">Reports Builder</BLink>
                          </p>
                          <small class="mb-0 text-muted">15 Oct</small>
                        </div>
                      </div>
                      <div class="acitivity-item d-flex">
                        <div class="flex-shrink-0">
                          <img src="@/assets/images/users/avatar-8.jpg" alt=""
                            class="avatar-xs rounded-circle acitivity-avatar">
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-1">New ticket received <span
                              class="badge bg-success-subtle text-success align-middle">Completed</span></h6>
                          <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span> submitted a
                            ticket.</p>
                          <small class="mb-0 text-muted">26 Aug</small>
                        </div>
                      </div>
                    </div>
                  </simplebar>
                  <template #footer>
                    <BLink href="javascript:void(0);" class="link-success">View All Activity <i
                        class="ri-arrow-right-s-line align-middle ms-1"></i></BLink>
                  </template>
                </BOffcanvas>
              </div>
            </div>
            <div class="d-none code-view" id="backdropOffcanvasCode" role="tabpanel"
              aria-labelledby="backdropOffcanvasCode-tab" tabindex="0">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Backdrop Offcanvas --&gt;
            &lt;div class=&quot;d-flex flex-wrap gap-2&quot;&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasScrolling&quot; aria-controls=&quot;offcanvasScrolling&quot;&gt;Enable body scrolling&lt;/button&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasWithBackdrop&quot; aria-controls=&quot;offcanvasWithBackdrop&quot;&gt;Enable backdrop (default)&lt;/button&gt;
            &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasWithBothOptions&quot; aria-controls=&quot;offcanvasWithBothOptions&quot;&gt;Enable both scrolling &amp; backdrop&lt;/button&gt;
            &lt;/div&gt;</code>    
            
            <code>&lt;div class=&quot;offcanvas offcanvas-start&quot; data-bs-scroll=&quot;true&quot; data-bs-backdrop=&quot;false&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasScrolling&quot; aria-labelledby=&quot;offcanvasScrollingLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasScrollingLabel&quot;&gt;Colored with scrolling&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code>
            
            <code>&lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasWithBackdrop&quot; aria-labelledby=&quot;offcanvasWithBackdropLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasWithBackdropLabel&quot;&gt;Offcanvas with backdrop&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code>
            
            <code>&lt;div class=&quot;offcanvas offcanvas-start&quot; data-bs-scroll=&quot;true&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasWithBothOptions&quot; aria-labelledby=&quot;offcanvasWithBothOptionsLabel&quot;&gt;
            &lt;div class=&quot;offcanvas-header&quot;&gt;
            &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasWithBothOptionsLabel&quot;&gt;Backdroped with scrolling&lt;/h5&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;offcanvas-body&quot;&gt;
            ...
            &lt;/div&gt;
            &lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>