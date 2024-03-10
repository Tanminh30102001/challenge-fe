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
        <PageHeader title="Placeholders" pageTitle="Base UI" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Default Placeholder" />

                    <BCardBody>
                        <p class="text-muted">In the example below, we take a typical card component and recreate it
                            with placeholders applied to create a “loading card”.</p>

                        <div class="live-preview">
                            <BRow class="justify-content-center">
                                <BCol xl="7">
                                    <BRow class="justify-content-between">
                                        <BCol lg="5" sm="6">
                                            <BCard no-body>
                                                <img src="@/assets/images/small/img-1.jpg" class="card-img-top"
                                                    alt="card img" />

                                                <BCardBody>
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">Some quick example text to build on the card
                                                        title and make up the bulk of the card's content.</p>
                                                    <BLink  href="#" class="btn btn-primary">Go somewhere</BLink >
                                                </BCardBody>
                                            </BCard>
                                        </BCol>
                                        <BCol lg="5" sm="6">
                                            <BCard no-body aria-hidden="true">
                                                <img src="@/assets/images/small/img-2.jpg" class="card-img-top"
                                                    alt="card dummy img" />
                                                <BCardBody>
                                                    <h5 class="card-title placeholder-glow">
                                                        <span class="placeholder col-6"></span>
                                                    </h5>
                                                    <p class="card-text placeholder-glow">
                                                        <span class="placeholder col-7"></span>
                                                        <span class="placeholder col-4"></span>
                                                        <span class="placeholder col-4"></span>
                                                        <span class="placeholder col-6"></span>
                                                    </p>
                                                    <BLink  href="#" tabindex="-1"
                                                        class="btn btn-primary disabled placeholder col-6"></BLink >
                                                </BCardBody>
                                            </BCard>
                                        </BCol>
                                    </BRow>
                                </BCol>
                            </BRow>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Examples --&gt;
&lt;BCard&gt;
    &lt;img src=&quot;...&quot; class=&quot;card-img-top&quot; alt=&quot;card img&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;h5 class=&quot;card-title&quot;&gt;Card title&lt;/h5&gt;
        &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
        &lt;a href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard aria-hidden=&quot;true&quot;&gt;
    &lt;img src=&quot;assets/images/small/img-2.jpg&quot; class=&quot;card-img-top&quot; alt=&quot;card dummy img&quot;&gt;
    &lt;BCard no-body&gt;
      &lt;BCard title=&quot; &quot; class=&quot;placeholder-glow&quot;&gt;
        &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt;
      &lt;/BCard&gt;
      &lt;BCard-text class=&quot;placeholder-glow&quot;&gt;
        &lt;span class=&quot;placeholder col-7&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;placeholder col-4&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;placeholder col-4&quot;&gt;&lt;/span&gt;
        &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt;
      &lt;/BCard-text&gt;
      &lt;BLink  href=&quot;#&quot; tabindex=&quot;-1&quot; class=&quot;btn btn-primary disabled placeholder col-6&quot;&gt;&lt;/BLink &gt;
    &lt;/BCard&gt;
&lt;/BCard&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <BCard no-body>
                    <CardHeader title="Width" />
                   
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>w-25,w-50,w-75</code> or
                            <code>w-100</code> class to placeholder class to set different widths to the placeholder.
                        </p>
                        <div class="live-preview">
                            <span class="placeholder w-50"></span>
                            <span class="placeholder w-75"></span>
                            <span class="placeholder w-25"></span>
                            <span class="placeholder w-100"></span>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Width Sizing--&gt;
&lt;div class=&quot;live-preview&quot;&gt;
    &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;placeholder w-75&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;placeholder&quot; style=&quot;width: 25%;&quot;&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <BCard no-body>
                    <CardHeader title="Sizing" />
                   
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>placeholder-lg</code>,
                            <code>placeholder-sm</code>, or
                            <code>placeholder-xs</code> class to placeholder class to set different size placeholder.
                        </p>
                        <div class="live-preview">
                            <BRow class="gap-0">
                                <BCol cols="12">
                                    <span class="placeholder placeholder-lg w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder placeholder-sm w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder placeholder-xs w-100"></span>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Sizing --&gt;
&lt;span class=&quot;placeholder col-12 placeholder-lg&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 placeholder-sm&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 placeholder-xs&quot;&gt;&lt;/span&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Color" />
                    
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>bg-</code> class with the below-mentioned color variation to set a custom color.
                        </p>
                        <div class="live-preview">
                            <BRow class="g-2">
                                <BCol cols="12">
                                    <span class="placeholder w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-primary w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-secondary w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-success w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-danger w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-warning w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-info w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-light w-100"></span>
                                </BCol>
                                <BCol cols="12">
                                    <span class="placeholder bg-dark w-100"></span>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Color --&gt;
&lt;span class=&quot;placeholder col-12 mb-3&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-primary&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-secondary&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-success&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-danger&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-warning&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-info&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-light&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-dark&quot;&gt;&lt;/span&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>