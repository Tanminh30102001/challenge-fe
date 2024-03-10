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
        <PageHeader title="Embed Video" pageTitle="Base UI" />
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <CardHeader title="Ratio Video 16:9" />

                    <BCardBody>
                        <p class="text-muted">
                            Wrap any embed in
                            <code>&lt;iframe&gt;</code> tag, in a parent element, use
                            <code>ratio-16x9</code> class to set aspect ratio 16:9.
                        </p>
                        <div class="live-preview">
                            <!-- 16:9 aspect ratio -->
                            <div class="ratio ratio-16x9">
                                <iframe class="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 16:9 --&gt;
&lt;div class=&quot;ratio ratio-16x9&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <CardHeader title="Ratio Video 4:3" />
                    
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>ratio-4x3</code> class to set aspect ratio 4:3.
                        </p>
                        <div class="live-preview">
                            <!-- 4:3 aspect ratio -->
                            <div class="ratio ratio-4x3">
                                <iframe class="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU"
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 4:3 --&gt;
&lt;div class=&quot;ratio ratio-4x3&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <CardHeader title="Custom Ratios" />
                    
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>--vz-aspect-ratio: 50%</code> to style element to set aspect ratio 2:1.
                        </p>
                        <div class="live-preview">
                            <!-- 16:9 aspect ratio -->
                            <div class="ratio" style="--vz-aspect-ratio: 50%;">
                                <iframe class="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU"
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Custom Ratio Video --&gt;
&lt;div class=&quot;ratio&quot; style=&quot;--vz-aspect-ratio: 50%;&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/2RZQN_ko0iU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <CardHeader title="Ratio Video 21:9" />
                    
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>ratio-21x9</code> class to set aspect ratio 21:9.
                        </p>
                        <div class="live-preview">
                            <!-- 21:9 aspect ratio -->
                            <div class="ratio ratio-21x9">
                                <iframe class="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU"
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 21:9 --&gt;
&lt;div class=&quot;ratio ratio-21x9&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/Z-fV2lGKnnU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <CardHeader title="Ratio Video 1:1" />
                    
                    <BCardBody>
                        <p class="text-muted">
                            Use
                            <code>ratio-1x1</code> class to set aspect ratio 1:1.
                        </p>
                        <div class="live-preview">
                            <!-- 1:1 aspect ratio -->
                            <div class="ratio ratio-1x1">
                                <iframe class="rounded" src="https://www.youtube.com/embed/GfSZtaoc5bw"
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 1:1 --&gt;
&lt;div class=&quot;ratio ratio-1x1&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/GfSZtaoc5bw&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>