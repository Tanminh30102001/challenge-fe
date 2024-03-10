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
        <PageHeader title="Grid" pageTitle="Base UI" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Grid Options</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <p class="text-muted">
                            See how aspects of the Bootstrap grid
                            system work across multiple devices with a handy table.
                        </p>
                        <div class="table-responsive">
                            <table class="table table-bordered table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col" class="text-center">
                                            xs
                                            <br />
                                            <span class="fw-normal">&lt;576px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            sm
                                            <br />
                                            <span class="fw-normal">≥576px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            md
                                            <br />
                                            <span class="fw-normal">≥768px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            lg
                                            <br />
                                            <span class="fw-normal">≥992px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            xl
                                            <br />
                                            <span class="fw-normal">≥1200px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            xxl
                                            <br />
                                            <span class="fw-normal">≥1400px</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Grid behavior</th>
                                        <td>Horizontal at all times</td>
                                        <td colspan="5">Collapsed to start, horizontal above breakpoints</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Max container width</th>
                                        <td>None (auto)</td>
                                        <td>540px</td>
                                        <td>720px</td>
                                        <td>960px</td>
                                        <td>1140px</td>
                                        <td>1320px</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Class prefix</th>
                                        <td>
                                            <code>col-</code>
                                        </td>
                                        <td>
                                            <code>col-sm-</code>
                                        </td>
                                        <td>
                                            <code>col-md-</code>
                                        </td>
                                        <td>
                                            <code>col-lg-</code>
                                        </td>
                                        <td>
                                            <code>col-xl-</code>
                                        </td>
                                        <td>
                                            <code>col-xxl-</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row"># of columns</th>
                                        <td colspan="6">12</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Gutter width</th>
                                        <td colspan="6">1.5rem (0.75rem 5rem on each side of a column)</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Custom gutters</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Nestable</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Offsets</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Column ordering</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Vertical alignment (align-items-start)" />

                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>align-items-start</code> class to vertically align-items at the start.
                        </p>
                        <div class="live-preview">
                            <div class="bg-light p-3 text-center">
                                <BRow class="align-items-start" style="min-height: 6rem;">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2">col-sm-4</div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-start) --&gt;
    &lt;BRow class=&quot;align-items-start&quot; style=&quot;min-height: 6rem;&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;col-sm-4&lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Vertical alignment (align-items-center)" />

                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>align-items-center</code> class to vertically align-items at the center.
                        </p>

                        <div class="live-preview">
                            <div class="bg-light p-3 text-center">
                                <BRow class="align-items-center" style="min-height: 6rem;">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2">col-sm-4</div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-center) --&gt;
    &lt;BRow class=&quot;align-items-center&quot; style=&quot;min-height: 6rem;&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;col-sm-4&lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Vertical alignment (align-items-end)" />

                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>align-items-end</code> class to vertically align-items at the end.
                        </p>
                        <div class="live-preview">
                            <div class="bg-light p-3 text-center">
                                <BRow class="align-items-end" style="min-height: 6rem;">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2">col-sm-4</div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">col-sm-4
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-end) --&gt;
    &lt;BRow class=&quot;align-items-end&quot; style=&quot;min-height: 6rem;&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;col-sm-4&lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;col-sm-4
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Align Self" />

                    <BCardBody>
                        <p class="text-muted">
                            Use the
                            <code>align-self-start</code>,
                            <code>align-self-center</code>, or
                            <code>align-self-end</code> class respectively to vertically align items with a different
                            position.
                        </p>

                        <div class="live-preview">
                            <div class="bg-light p-3 text-center">
                                <BRow class="g-2" style="min-height: 9rem;">
                                    <BCol sm="4" class="align-self-start">
                                        <div class="bg-primary-subtle text-primary rounded p-2">align-self-start</div>
                                    </BCol>
                                    <BCol sm="4" class="align-self-center">
                                        <div class="bg-primary-subtle text-primary rounded p-2">align-self-center</div>
                                    </BCol>
                                    <BCol sm="4" class="align-self-end">
                                        <div class="bg-primary-subtle text-primary rounded p-2">align-self-end</div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Align Self --&gt;
    &lt;BRow class=&quot;g-2&quot; style=&quot;min-height: 9rem;&quot;&gt;
        &lt;BCol sm=&quot;4&quot; class=&quot;align-self-start&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;align-self-start&lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot; class=&quot;align-self-center&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;align-self-center&lt;/div&gt;
        &lt;/BCol&gt;
        &lt;BCol sm=&quot;4&quot; class=&quot;align-self-end&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;align-self-end&lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow>
</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Horizontal Alignment" />

                    <BCardBody>
                        <p class="text-muted">
                            Use the
                            <code>justify-content-start</code>,
                            <code>justify-content-center</code>, or
                            <code>justify-content-end</code> class respectively to horizontally align items with a
                            different position.
                        </p>
                        <div class="live-preview">
                            <div class="bg-light p-3 text-center">
                                <BRow class="justify-content-start">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2">justify-content-start
                                        </div>
                                    </BCol>
                                </BRow>
                                <BRow class="justify-content-center">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            justify-content-center</div>
                                    </BCol>
                                </BRow>
                                <BRow class="justify-content-end">
                                    <BCol sm="4">
                                        <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                            justify-content-end</div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Horizontal Alignment --&gt;
    &lt;BRow class=&quot;justify-content-start&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2&quot;&gt;justify-content-start
            &lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;justify-content-center&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;
                justify-content-center&lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
    &lt;BRow class=&quot;justify-content-end&quot;&gt;
        &lt;BCol sm=&quot;4&quot;&gt;
            &lt;div class=&quot;bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0&quot;&gt;
                justify-content-end&lt;/div&gt;
        &lt;/BCol&gt;
    &lt;/BRow&gt;
</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>