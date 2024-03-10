<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";
import { ref } from "vue";

export default {
  data() {
    return {
      ex3CurrentPage: ref(2),
      ex3Rows: ref(100),
      ex4CurrentPage: ref(2),
      ex4Rows: ref(100),
    };
  },
  components: {
    Layout,
    PageHeader,
    CardHeader
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="General" pageTitle="Base UI" />
    <BRow>
      <BCol>
        <BCard no-body>
          <CardHeader title="Popovers" />

          <BCardBody>
            <p class="text-muted">Popovers example are available with follwing options , Directions are mirrored when
              using in Bootstrap RTL.</p>
            <div class="live-preview">
              <div class="hstack flex-wrap gap-2">

                <BButton variant="light" id="popover-button-top">
                  Popover on top
                </BButton>
                <BPopover target="popover-button-top" title="Top Popover" triggers="focus" html placement="top"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>

                <BButton variant="light" id="popover-button-right">
                  Popover on right
                </BButton>
                <BPopover target="popover-button-right" title="Right Popover" triggers="focus" html placement="right"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>

                <BButton variant="light" id="popover-button-bottom">
                  Popover on bottom
                </BButton>
                <BPopover target="popover-button-bottom" title="Bottom Popover" triggers="focus" html placement="bottom"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>

                <BButton variant="light" id="popover-button-left">
                  Popover on left
                </BButton>
                <BPopover target="popover-button-left" title="Left Popover" triggers="focus" html placement="left"
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                </BPopover>

                <BButton variant="success" id="popover-button-variant" href="#" tabindex="0">Dismissible popover
                </BButton>
                <BPopover target="popover-button-variant" title="Dismissible Popover" triggers="focus" html
                  content="And here's some amazing content. Its very engaging. Right?">
                </BPopover>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup"
                style="height: 275px;"><code>&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-BPopover.click.top=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Top Popover&quot;&gt;
Popover on top
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-BPopover.click.right=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Right Popover&quot;&gt;
Popover on right
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-BPopover.click.bottom=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Bottom Popover&quot;&gt;
Popover on bottom
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-BPopover.click.left=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Left Popover&quot;&gt;
Popover on left
&lt;/BButton&gt;
&lt;BButton variant=&quot;success&quot; id=&quot;popover-button-variant&quot; href=&quot;#&quot; tabindex=&quot;0&quot;&gt;Dismissible popover&lt;/BButton&gt;
&lt;BPopover target=&quot;popover-button-variant&quot; variant=&quot;danger&quot; triggers=&quot;focus&quot;&gt;
&lt;template #title&gt;Dismissible Popover&lt;/template&gt; And here some amazing content. Its very engaging. Right?&lt;/BPopover&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCard no-body>
          <CardHeader title="Tooltips" />

          <BCardBody>
            <p class="text-muted">Tooltip example are available with follwing options, Directions are mirrored when
              using in Bootstrap RTL.</p>
            <div class="live-preview">
              <div class="hstack flex-wrap gap-2">
                <BButton variant="light" v-b-tooltip.hover title="Tooltip on top">Tooltip on top</BButton>
                <BButton variant="light" v-b-tooltip.hover.right title="Tooltip on right">Tooltip on right
                </BButton>
                <BButton variant="light" v-b-tooltip.hover.bottom title="Tooltip on bottom">Tooltip on bottom
                </BButton>
                <BButton variant="light" v-b-tooltip.hover.left title="Tooltip on left">Tooltip on left
                </BButton>
                <BButton variant="primary" v-b-tooltip.hover title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                  Tooltip with HTML</BButton>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Tooltips --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on top&quot; &gt;
Tooltip on top
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on right&quot; &gt;
Tooltip on right
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on bottom&quot; &gt;
Tooltip on bottom
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on left&quot; &gt;
Tooltip on left
&lt;/BButton&gt;
&lt;BButton type=&quot;button&quot; variant=&quot;primary&quot; v-b-tooltip.hover title=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot;&gt;
Tooltip with HTML
&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCard no-body>
          <CardHeader title="Breadcrumb" />

          <BCardBody>
            <p class="text-muted">
              Indicate the current page’s location within a navigational
              hierarchy
            </p>

            <div class="live-preview">
              <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
              </BBreadcrumb>

              <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                <BBreadcrumbItem href="#library"> Library </BBreadcrumbItem>
              </BBreadcrumb>

              <BBreadcrumb class="p-3 py-2 bg-light mb-3">
                <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
                <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
              </BBreadcrumb>

              <BBreadcrumb class="p-3 py-2 bg-light ">
                <BBreadcrumbItem href="#home"> <i class="ri-home-5-fill"></i> </BBreadcrumbItem>
                <BBreadcrumbItem href="#base-ui"> Base UI </BBreadcrumbItem>
                <BBreadcrumbItem href="#general"> General </BBreadcrumbItem>
              </BBreadcrumb>

            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;BBreadcrumb&gt;
&lt;BBreadcrumbItem active aria-current=&quot;page&quot;&gt;Home&lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;BBreadcrumbItem&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/BBreadcrumbItem&gt;
&lt;BBreadcrumbItem active aria-current=&quot;page&quot;&gt;Library&lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;BBreadcrumbItem&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/BBreadcrumbItem&gt;
&lt;BBreadcrumbItem&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/BBreadcrumbItem&gt;
&lt;BBreadcrumbItem active aria-current=&quot;page&quot;&gt;General&lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;BBreadcrumbItem&gt;&lt;a href=&quot;#&quot;&gt;&lt;i class=&quot;ri-home-5-fill&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/BBreadcrumbItem&gt;
&lt;BBreadcrumbItem&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/BBreadcrumbItem&gt;
&lt;BBreadcrumbItem active aria-current=&quot;page&quot;&gt;General&lt;/BBreadcrumbItem&gt;
&lt;/BBreadcrumb&gt;
&lt;/nav&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BCard no-body>
          <CardHeader title="Pagination" />

          <BCardBody>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <h5 class="fs-15">Default Pagination</h5>
                  <p class="text-muted">
                    Use
                    <code>pagination</code> class to ul element to indicate a
                    series of related content exists across multiple pages.
                  </p>

                  <!-- Pagination Disabled & Active -->
                  <nav aria-label="...">
                    <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                      <template #prev-text>← &nbsp; Prev</template>
                      <template #next-text>Next &nbsp; →</template>
                    </BPagination>
                    <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                      <template #prev-text>&lt; &nbsp; </template>
                      <template #next-text> &nbsp; &gt;</template>
                    </BPagination>
                  </nav>
                </BCol>

                <BCol lg="6">
                  <div class="mt-4 mt-lg-0">
                    <h5 class="fs-15">Disabled and Active states</h5>
                    <p class="text-muted">
                      Use
                      <code>disabled</code> class to links that appear
                      un-clickable and <code>active</code> class to indicate the
                      current page.
                    </p>

                    <!-- Pagination Disabled & Active -->
                    <nav aria-label="...">
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                        <template #prev-text>← &nbsp; Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                        <template #prev-text>&lt; &nbsp; </template>
                        <template #next-text> &nbsp; &gt;</template>
                      </BPagination>
                    </nav>
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="6">
                  <div class="mt-4">
                    <h5 class="fs-15">Sizing</h5>
                    <p class="text-muted">
                      Use
                      <code>pagination-lg</code> or
                      <code>pagination-sm</code> to set different pagination
                      sizes.
                    </p>
                    <!-- Pagination Large -->
                    <nav aria-label="...">
                      <!-- Pagination Large -->
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="lg"
                        class="d-flex-wrap">
                        <template #prev-text>← Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>

                      <!-- Pagination Small -->
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="sm">
                        <template #prev-text>← Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>
                    </nav>
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mt-4">
                    <h5 class="fs-15">Alignment</h5>

                    <p class="text-muted">
                      Use
                      <code>justify-content-start</code>,
                      <code>justify-content-start</code>, or
                      <code>justify-content-start</code>, class to pagination
                      class to change the alignment of pagination respectively.
                    </p>
                    <!-- Pagination Alignment -->

                    <!-- Center Alignment -->
                    <nav aria-label="Page navigation example">
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="center">
                        <template #prev-text>← &nbsp; Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>


                      <!-- Right Alignment -->
                      <BPagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="end">
                        <template #prev-text>← &nbsp; Prev</template>
                        <template #next-text>Next &nbsp; →</template>
                      </BPagination>
                    </nav>
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="6">
                  <div class="mt-4">
                    <h5 class="fs-15">Custom Separated Pagination</h5>
                    <p class="text-muted">
                      Use
                      <code>pagination-separated</code> class to pagination
                      class to set custom separated pagination.
                    </p>
                    <!-- Custom Separated Pagination Large -->
                    <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="lg" prev-text="←" next-text="→"
                      hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>
                    <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" prev-text="←" next-text="→"
                      hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>
                    <BPagination v-model="ex3CurrentPage" :total-rows="ex3Rows" size="sm" prev-text="←" next-text="→"
                      hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"> </BPagination>


                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mt-4">
                    <h5 class="fs-15">Custom Rounded Pagination</h5>
                    <p class="text-muted">
                      Use
                      <code>pagination-rounded</code> class to pagination class
                      to set custom rounded pagination.
                    </p>
                    <!-- Pagination rounded -->
                    <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
                      next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap">
                    </BPagination>
                    <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
                      hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"> </BPagination>
                    <BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
                      next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap">
                    </BPagination>
                  </div>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;
</code>
<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>


<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-separated d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>

<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;;</code>


<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>

<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>


<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>

<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;</code>


<code>  &lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="lg" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" prev-text="←" next-text="→"
  hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt; &lt;/BPagination&gt;
&lt;BPagination v-model="ex4CurrentPage" pills :total-rows="ex4Rows" size="sm" prev-text="←"
  next-text="→" hide-goto-end-buttons="true" class="pagination-rounded d-flex-wrap"&gt;
&lt;/BPagination&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BCard no-body>
          <CardHeader title="Spinners" />

          <BCardBody>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <div>
                    <h5 class="fs-15">Border spinner</h5>
                    <p class="text-muted">
                      Use
                      <code>spinner-border</code> class for a lightweight
                      loading indicator.
                    </p>
                    <div class="d-flex flex-wrap gap-3 mb-2">
                      <!-- Border spinner -->
                      <BSpinner variant="primary" label="Spinning" />
                      <BSpinner variant="secondary" label="Spinning" />
                      <BSpinner variant="success" label="Spinning" />
                      <BSpinner variant="info" label="Spinning" />
                      <BSpinner variant="warning" label="Spinning" />
                      <BSpinner variant="danger" label="Spinning" />
                      <BSpinner variant="dark" label="Spinning" />
                      <BSpinner variant="light" label="Spinning" />
                    </div>
                  </div>
                </BCol>

                <BCol lg="6">
                  <div>
                    <h5 class="fs-15">Growing spinner</h5>
                    <p class="text-muted">
                      Use
                      <code>spinner-grow</code> class for a lightweight spinner
                      with growing effect.
                    </p>
                    <div class="d-flex flex-wrap gap-3 mb-2">
                      <!-- Growing spinner -->
                      <BSpinner variant="primary" type="grow" label="Spinning" />
                      <BSpinner variant="secondary" type="grow" label="Spinning" />
                      <BSpinner variant="success" type="grow" label="Spinning" />
                      <BSpinner variant="info" type="grow" label="Spinning" />
                      <BSpinner variant="warning" type="grow" label="Spinning" />
                      <BSpinner variant="danger" type="grow" label="Spinning" />
                      <BSpinner variant="dark" type="grow" label="Spinning" />
                      <BSpinner variant="light" type="grow" label="Spinning" />
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Border spinner --&gt;

&lt;BSpinner variant=&quot;primary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;secondary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;success&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;info&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;warning&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;danger&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;dark&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner variant=&quot;light&quot;&gt;&lt;/BSpinner&gt;
</code>
<code>&lt;!-- Growing spinner --&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;primary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;success&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;info&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;warning&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;danger&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;dark&quot;&gt;&lt;/BSpinner&gt;

&lt;BSpinner type=&quot;grow&quot; variant=&quot;light&quot;&gt;&lt;/BSpinner&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
    </BCol>
  </BRow>
</Layout></template>