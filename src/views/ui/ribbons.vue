<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
    components: {
        Layout,
        PageHeader,
        CardHeader
    }
};
</script>

<template>
    <Layout>
        <PageHeader title="Ribbons" pageTitle="Base UI" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Rounded Ribbon" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>round-shape</code> class to show round-shaped ribbon.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-primary round-shape">Primary</div>
                                            <h5 class="fs-14 text-end">Rounded Ribbon</h5>

                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-success round-shape">Success</div>
                                            <h5 class="fs-14 text-end">Rounded Ribbon</h5>
                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none right mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-info round-shape">Info</div>
                                            <h5 class="fs-14 text-start">Rounded Ribbon Right</h5>
                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Rounded Ribbon --&gt;
&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary round-shape&quot;&gt;Primary&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-success round-shape&quot;&gt;Success&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;!-- Right Ribbon --&gt;
&lt;BCard class=&quot;ribbon-box border shadow-none right mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-info round-shape&quot;&gt;Info&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-start&quot;&gt;Rounded Ribbon Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Ribbon Shape" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>ribbon-shape</code> class to show ribbon shaped ribbon.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-primary ribbon-shape">Primary</div>
                                            <h5 class="fs-14 text-end">Ribbon Shape</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-success ribbon-shape">Success</div>
                                            <h5 class="fs-14 text-end">Ribbon Shape</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0 right">
                                        <BCardBody>
                                            <div class="ribbon ribbon-info ribbon-shape">Info</div>
                                            <h5 class="fs-14 text-start">Ribbon Shape Right</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Ribbon Shape --&gt;
&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary ribbon-shape&quot;&gt;Primary&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-success ribbon-shape&quot;&gt;Success&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0 right&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape&quot;&gt;Info&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-start&quot;&gt;Ribbon Shape Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Filled Ribbons" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>ribbon-fill</code> class to show fill-shaped ribbon.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-primary">New</div>
                                            <h5 class="fs-14 text-end">Fill Ribbon</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-success">Sale</div>
                                            <h5 class="fs-14 text-end">Fill Ribbon</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
                                        <BCardBody>
                                            <div class="ribbon ribbon-info">New</div>
                                            <h5 class="fs-14 text-start">Fill Ribbon Right</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">
                                                    Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                    dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                    eleifend et sem ac, commodo dapibus odio.
                                                </p>
                                            </div>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;BCard class=&quot;ribbon-box border ribbon-fill shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary&quot;&gt;- 10 %&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Fill Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-5 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard &gt;
&lt;/BCard &gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border ribbon-fill shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-success&quot;&gt;- 20 %&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end&quot;&gt;Fill Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-5 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard &gt;
&lt;/BCard &gt;</code>

<code>&lt;!-- Right Ribbon --&gt;
&lt;BCard class=&quot;ribbon-box border ribbon-fill shadow-none right mb-lg-0&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;ribbon ribbon-info&quot;&gt;- 30 %&lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-start&quot;&gt;Fill Ribbon Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-5 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/BCard &gt;
&lt;/BCard &gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Boxed Ribbons" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>ribbon-box</code> class with
                                    <code>ribbon-two</code> class at child element to show below-mentioned shaped
                                    ribbon.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon-two ribbon-two-primary">
                                                <span>Basic</span>
                                            </div>
                                            <h5 class="fs-14 text-end mb-3">Box Ribbon</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon-two ribbon-two-success">
                                                <span>Standard</span>
                                            </div>
                                            <h5 class="fs-14 text-end mb-3">Box Ribbon</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0 right">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon-two ribbon-two-info">
                                                <span>Premium</span>
                                            </div>
                                            <h5 class="fs-14 mb-3">Box Ribbon Right</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus elementum ornare.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon-two ribbon-two-primary&quot;&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/div&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon-two ribbon-two-success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/div&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon-two ribbon-two-success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/div&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Ribbons" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>ribbon-box</code> class with
                                    <code>ribbon-three</code> class at child element to show below-mentioned shaped
                                    ribbon.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <span class="ribbon-three ribbon-three-primary">
                                                <span>Featured</span>
                                            </span>
                                            <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <span class="ribbon-three ribbon-three-success">
                                                <span>Featured</span>
                                            </span>
                                            <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none mb-lg-0 right">
                                        <BCardBody class="text-muted">
                                            <span class="ribbon-three ribbon-three-info">
                                                <span>Featured</span>
                                            </span>
                                            <h5 class="fs-14 mb-3">Ribbon Right Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;span class=&quot;ribbon-three ribbon-three-primary&quot;&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/span&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon-three ribbon-three-success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/div&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon-three ribbon-three-info&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/div&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Ribbons Hover" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <p class="text-muted">
                                    Use
                                    <code>trending-ribbon</code> class to show ribbon with hovering effect.
                                </p>
                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span class="trending-ribbon-text">Trending</span>
                                                <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span class="trending-ribbon-text">Trending</span>
                                                <i class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 class="fs-14 text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol xxl="4">
                                    <BCard no-body class="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
                                        <BCardBody class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <i class="ri-flashlight-fill text-white align-bottom float-start me-1"></i>
                                                <span class="trending-ribbon-text">Trending</span>
                                            </div>
                                            <h5 class="fs-14 mb-3">Ribbon Right Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo
                                                dapibus odio. Vivamus pretium nec odio cursus.</p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;BCard class=&quot;ribbon-box border shadow-none overflow-hidden&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt; &lt;i class=&quot;ri-flashlight-fill text-white align-bottom float-end ms-1&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end mb-3&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box border shadow-none overflow-hidden&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt; &lt;i class=&quot;ri-flashlight-fill text-white align-bottom float-end ms-1&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-14 text-end mb-3&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;ribbon-box right border shadow-none overflow-hidden&quot;&gt;
    &lt;BCard no-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;i class=&quot;ri-flashlight-fill text-white align-bottom float-start me-1&quot;&gt;&lt;/i&gt; &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-14 mb-3&quot;&gt;Ribbon Right Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>