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
        <PageHeader title="Links" pageTitle="Base UI" />
        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Link colors" />
                    
                    <BCardBody>
                        <p class="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the
                            <router-link to="/ui/colors"><code>.text-*</code> classes</router-link>, these classes have a
                            <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively
                            light foreground color, and should only be used on a dark background in order to have sufficient
                            contrast.
                        </p>
                        <div class="live-preview">
                            <p><BLink href="#" class="link-primary">Primary link</BLink></p>
                            <p><BLink href="#" class="link-secondary">Secondary link</BLink></p>
                            <p><BLink href="#" class="link-success">Success link</BLink></p>
                            <p><BLink href="#" class="link-danger">Danger link</BLink></p>
                            <p><BLink href="#" class="link-warning">Warning link</BLink></p>
                            <p><BLink href="#" class="link-info">Info link</BLink></p>
                            <p><BLink href="#" class="link-light">Light link</BLink></p>
                            <p><BLink href="#" class="link-dark">Dark link</BLink></p>
                            <p><BLink href="#" class="link-body-emphasis mb-0">Emphasis link</BLink></p>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"
                                style="height: 280px;"><code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-primary&quot;&gt;Primary link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-secondary&quot;&gt;Secondary link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-success&quot;&gt;Success link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-danger&quot;&gt;Danger link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-warning&quot;&gt;Warning link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-info&quot;&gt;Info link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-light&quot;&gt;Light link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-dark&quot;&gt;Dark link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-body-emphasis mb-0&quot;&gt;Emphasis link&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Link utilities" />

                    <BCardBody>
                        <p class="text-muted">Colored links can also be modified by our link utilities.</p>
                        <div class="live-preview">
                            <p><BLink href="#"
                                    class="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark
                                    link</BLink></p>
                            <p><BLink href="#"
                                    class="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis
                                    link</BLink></p>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"
                                style="height: 280px;"><code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Primary link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Secondary link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Success link&lt;/BLink&gt;&lt;/p&gt;</code>

<Code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Danger link&lt;/BLink&gt;&lt;/p&gt;</Code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Warning link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Info link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Light link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Dark link&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0&quot;&gt;Emphasis link&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Link Opacity" />
                    
                    <BCardBody>
                        <p class="text-muted">Change the alpha opacity of the link <code>rgba()</code> color value with
                            utilities. Please be aware that changes to a color’s opacity can lead to links with <BLink
                                href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast"
                                target="_blank"><em>insufficient</em> contrast</BLink>.</p>
                        <div class="live-preview">
                            <p><BLink class="link-opacity-10" href="#">Link opacity 10</BLink></p>
                            <p><BLink class="link-opacity-25" href="#">Link opacity 25</BLink></p>
                            <p><BLink class="link-opacity-50" href="#">Link opacity 50</BLink></p>
                            <p><BLink class="link-opacity-75" href="#">Link opacity 75</BLink></p>
                            <p class="mb-0"><BLink class="link-opacity-100" href="#">Link opacity 100</BLink></p>
                        </div>
                        <div class="d-none code-view">
                            <pre
                                class="language-markup"><code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-10&quot; href=&quot;#&quot;&gt;Link opacity 10&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-25&quot; href=&quot;#&quot;&gt;Link opacity 25&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-50&quot; href=&quot;#&quot;&gt;Link opacity 50&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-75&quot; href=&quot;#&quot;&gt;Link opacity 75&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-100&quot; href=&quot;#&quot;&gt;Link opacity 100&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Link Opacity Hover" />
                    
                    <BCardBody>
                        <p class="text-muted">You can even change the opacity level on hover.</p>
                        <div class="live-preview">
                            <p><BLink class="link-opacity-10-hover" href="#">Link hover opacity 10</BLink></p>
                            <p><BLink class="link-opacity-25-hover" href="#">Link hover opacity 25</BLink></p>
                            <p><BLink class="link-opacity-50-hover" href="#">Link hover opacity 50</BLink></p>
                            <p><BLink class="link-opacity-75-hover" href="#">Link hover opacity 75</BLink></p>
                            <p class="mb-0"><BLink class="link-opacity-100-hover" href="#">Link hover opacity 100</BLink>
                            </p>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"
                                style="height: 195px;"><code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-10-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 10&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-25-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 25&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-50-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 50&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-75-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 75&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-opacity-100-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 100&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <div class="col-xxl-4">
                <BCard no-body>
                    <CardHeader title="Underline color" />
                    
                    <BCardBody>
                        <p class="text-muted">Change the underline’s color independent of the link text color.</p>
                        <div class="live-preview">
                            <p><BLink href="#" class="text-decoration-underline link-underline-primary">Primary
                                    underline</BLink>
                            </p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-secondary">Secondary
                                    underline</BLink></p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-success">Success
                                    underline</BLink>
                            </p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-danger">Danger
                                    underline</BLink></p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-warning">Warning
                                    underline</BLink>
                            </p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-info">Info
                                    underline</BLink></p>
                            <p><BLink href="#" class="text-decoration-underline link-underline-light">Light
                                    underline</BLink></p>
                            <p class="mb-0"><BLink href="#" class="text-decoration-underline link-underline-dark">Dark
                                    underline</BLink></p>
                        </div>
                        <div class="d-none code-view">
                            <pre
                                class="language-markup"><code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-primary&quot;&gt;Primary underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-secondary&quot;&gt;Secondary underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-success&quot;&gt;Success underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-danger&quot;&gt;Danger underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-warning&quot;&gt;Warning underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-info&quot;&gt;Info underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-light&quot;&gt;Light underline&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;BLink href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-dark&quot;&gt;Dark underline&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </div>
            <div class="col-xxl-4">
                <BCard no-body>
                    <CardHeader title="Underline opacity" />
                    
                    <BCardBody>
                        <p class="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code>
                            to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>
                        <div class="live-preview">
                            <p><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0"
                                    href="#">Underline opacity 0</BLink></p>
                            <p><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10"
                                    href="#">Underline opacity 10</BLink></p>
                            <p><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25"
                                    href="#">Underline opacity 25</BLink></p>
                            <p><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50"
                                    href="#">Underline opacity 50</BLink></p>
                            <p><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75"
                                    href="#">Underline opacity 75</BLink></p>
                            <p class="mb-0"><BLink
                                    class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100"
                                    href="#">Underline opacity 100</BLink></p>
                        </div>
                        <div class="d-none code-view">
                            <pre
                                class="language-markup"><code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;BLink class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard>
            </div>
            <div class="col-xxl-4">
                <BCard no-body>
                    <CardHeader title="Underline offset" />
                    
                    <BCardBody>
                        <p class="text-muted">Change the underline’s distance from your text. Offset is set in
                            <code>em</code> units to automatically scale with the element’s current <code>font-size</code>.
                        </p>
                        <div class="live-preview">
                            <p><BLink href="#">Default link</BLink></p>
                            <p><BLink class="text-decoration-underline link-offset-1" href="#">Offset 1 link</BLink></p>
                            <p><BLink class="text-decoration-underline link-offset-2" href="#">Offset 2 link</BLink></p>
                            <p class="mb-0"><BLink class="text-decoration-underline link-offset-3" href="#">Offset 3
                                    link</BLink>
                            </p>
                        </div>
                        <div class="d-none code-view">
                            <pre
                                class="language-markup"><code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink class=&quot;link-offset-2 link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/BLink&gt;&lt;/p&gt;</code></pre>
                    </div>
                </BCardBody>
            </BCard>
        </div>
    </BRow>
</Layout></template>