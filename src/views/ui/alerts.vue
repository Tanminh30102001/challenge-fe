<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
  components: {
    Layout,
    PageHeader,
    CardHeader,
  },
  data() {
    return {
      dismissibleAlert: true,
      dismissibleAlert1: true,
      dismissibleAlert2: true,
      dismissibleAlert3: true,
      dismissibleAlert4: true,
      dismissibleAlert5: true,
      dismissibleAlert6: true,
      dismissibleAlert7: true,
      dismissibleAlert8: true,
      dismissibleAlert9: true,
      dismissibleAlert10: true,
      dismissibleAlert11: true,
      dismissibleAlert12: true,
      dismissibleAlert13: true,
      dismissibleAlert14: true,
      dismissibleAlert15: true,
      dismissibleAlert16: true,
      dismissibleAlert17: true,
      dismissibleAlert18: true,
      dismissibleAlert19: true,
      dismissibleAlert20: true,
      dismissibleAlert21: true,
      dismissibleAlert22: true,
      dismissibleAlert23: true,
      dismissibleAlert24: true,
      dismissibleAlert25: true,
      dismissibleAlert26: true,
      dismissibleAlert27: true,
      dismissibleAlert28: true,
      dismissibleAlert29: true,
      dismissibleAlert30: true,
      dismissibleAlert31: true,
      dismissibleAlert32: true,
      dismissibleAlert33: true,
      dismissibleAlert34: true,
      dismissibleAlert35: true,
      dismissibleAlert36: true,
      dismissibleAlert37: true,
      dismissibleAlert38: true,
      dismissibleAlert39: true,
      dismissibleAlert40: true,
      dismissibleAlert41: true,
      dismissibleAlert42: true,
      dismissibleAlert43: true,
      dismissibleAlert44: true,
      dismissibleAlert45: true,
      dismissibleAlert46: true,
      dismissibleAlert47: true,
      dismissibleAlert48: true,
      dismissibleAlert49: true,
      dismissibleAlert50: true,
      dismissibleAlert51: true,
      dismissibleAlert52: true,
      dismissibleAlert53: true,
      dismissibleAlert54: true,
      dismissibleAlert55: true,
      dismissibleAlert56: true,
      dismissibleAlert57: true,
      dismissibleAlert58: true,
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Alerts" pageTitle="Base UI" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Default Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>BAlert</code> selector to show a default alert.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert :model-value="true" variant="primary">
                    <strong>Hi!</strong> A simple <b>Primary alert</b> —check it
                    out!
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert :model-value="true" variant="secondary">
                    <strong>How are you!</strong> A simple
                    <b>secondary alert</b> —check it out!
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert :model-value="true" variant="success">
                    <strong>Yey! Everything worked!</strong> A simple
                    <b>success alert</b> —check it out!
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert :model-value="true" variant="danger mb-xl-0">
                    <strong>Something is very wrong!</strong> A simple
                    <b>danger alert</b> —check it out!
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert :model-value="true" variant="warning">
                    <strong>Uh oh, something went wrong</strong> A simple
                    <b>warning alert</b> —check it out!
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert :model-value="true" variant="info">
                    <strong>Don't forget' it !</strong> A simple
                    <b>info alert</b> —check it out!
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert :model-value="true" variant="light">
                    <strong>Mind Your Step!</strong> A simple
                    <b>light alert</b> —check it out!
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert :model-value="true" variant="dark" class="mb-0">
                    <strong>Did you know?</strong> A simple
                    <b>dark alert</b> —check it out!
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 352px">
    <code>&lt;!-- Primary Alert --&gt;
    &lt;BAlert show variant=&quot;primary&quot;&gt;
    &lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Primary alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- Secondary Alert --&gt;
    &lt;BAlert show variant=&quot;secondary&quot;&gt;
    &lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;secondary alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- success Alert --&gt;
    &lt;BAlert show variant=&quot;success&quot;&gt;
    &lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; A simple &lt;b&gt;success alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- danger Alert --&gt;
    &lt;BAlert show variant=&quot;danger&quot;&gt;
    &lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple &lt;b&gt;danger alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- warning Alert --&gt;
    &lt;BAlert show variant=&quot;warning&quot;&gt;
    &lt;strong&gt; Uh oh, something went wrong &lt;/strong&gt; A simple &lt;b&gt;warning alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- Info Alert --&gt;
    &lt;BAlert show variant=&quot;info&quot;&gt;
    &lt;strong&gt; Don't forget' it ! &lt;/strong&gt; A simple &lt;b&gt;info alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- Light Alert --&gt;
    &lt;BAlert show variant=&quot;light&quot;&gt;
    &lt;strong&gt; Mind Your Step! &lt;/strong&gt; A simple &lt;b&gt;light alert&lt;/b&gt; &mdash;check it out!
    &lt;/BAlert&gt;
    </code>
    <code>&lt;!-- Dark Alert --&gt;
    &lt;BAlert show class=&quot;mb-0 variant=&quot;dark&quot;&gt;
    &lt;strong&gt; Did you know? &lt;/strong&gt; A simple &lt;b&gt;dark alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Borderless Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>border-0</code> class to set alert without border.
            </p>

            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert :model-value="true" variant="primary" class="border-0" show>
                    <strong>Hi!</strong> A simple <b>Primary alert</b> —check it
                    out!
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert :model-value="true" variant="secondary" class="border-0" show>
                    <strong>How are you!</strong> A simple
                    <b>secondary alert</b> —check it out!
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert :model-value="true" variant="success" class="border-0" show>
                    <strong>Yey! Everything worked!</strong> A simple
                    <b>success alert</b> —check it out!
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert :model-value="true" variant="danger" class="border-0 mb-xl-0" show>
                    <strong>Something is very wrong!</strong> A simple danger
                    alert—check it out!
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert :model-value="true" variant="warning" class="border-0" show>
                    <strong>Uh oh, something went wrong</strong> A simple
                    <b>warning alert</b> —check it out!
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert :model-value="true" variant="info" class="border-0" show>
                    <strong>Don't forget' it !</strong> A simple
                    <b>info alert</b> —check it out!
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert :model-value="true" variant="light" class="border-0" show>
                    <strong>Mind Your Step!</strong> A simple
                    <b>light alert</b> —check it out!
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert :model-value="true" variant="dark" class="border-0 mb-0" show>
                    <strong>Did you know?</strong> A simple
                    <b>dark alert</b> —check it out!
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 352px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show variant=&quot;primary&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Primary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show variant=&quot;secondary&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;secondary alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show variant=&quot;success&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; A simple &lt;b&gt;success alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show variant=&quot;danger&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple &lt;b&gt;danger alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show variant=&quot;warning&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Uh oh, something went wrong &lt;/strong&gt; A simple &lt;b&gt;warning alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show variant=&quot;info&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Don't forget' it ! &lt;/strong&gt; A simple &lt;b&gt;info alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show variant=&quot;light&quot; class=&quot;border-0 &quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Mind Your Step! &lt;/strong&gt; A simple &lt;b&gt;light alert&lt;/b&gt; &mdash;check it out!  
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show variant=&quot;dark&quot; class=&quot;border-0 mb-0&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Did you know? &lt;/strong&gt; A simple &lt;b&gt;dark alert&lt;/b&gt; &mdash;check it out!
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dismissing Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>dismissible</code> to <code>BAlert</code> to add dismissing button to
              the alert.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert" show dismissible variant="primary">
                    <strong>Hi!</strong> A simple <b>Dismissible primary Alert</b> — check it out!
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert1" variant="secondary" show dismissible>
                    <strong>How are you!</strong> A simple <b>Dismissible secondary alert</b> —check it out!
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert2" variant="success" show dismissible>
                    <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check it out!
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert3" variant="danger" show dismissible>
                    <strong>Something is very wrong!</strong> A simple <b>Dismissible danger alert</b> —check it out!
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert4" variant="warning" show dismissible>
                    <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert5" variant="info" show dismissible>
                    <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b> —check it out!
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert6" variant="light" show dismissible>
                    <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b> —check it out!
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert7" variant="dark" show dismissible>
                    <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b>—check it out!
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 352px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Hi! &lt;/strong&gt; A simple &lt;b&gt;Dismissible primary Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; How are you! &lt;/strong&gt; A simple &lt;b&gt;Dismissible secondary Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; A simple &lt;b&gt;Dismissible success Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Something is very wrong! &lt;/strong&gt; A simple &lt;b&gt;Dismissible danger Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Welcome Back! &lt;/strong&gt; A simple &lt;b&gt;Dismissible warning Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Don't forget' it ! &lt;/strong&gt; A simple &lt;b&gt;Dismissible info Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show dismissible variant=&quot;light&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Mind Your Step! &lt;/strong&gt; A simple &lt;b&gt;Dismissible light Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Did you know? &lt;/strong&gt; A simple &lt;b&gt;Dismissible dark Alert &lt;/b&gt; &mdash; check it out!
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Link Color Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-link</code> class at &lt;a&gt; tag to show matching
              colored links within the given alert.
            </p>

            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert :model-value="true" variant="primary" show>
                    A simple Primary alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert :model-value="true" variant="secondary" show>
                    A simple Secondary alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert :model-value="true" variant="success" show>
                    A simple Success alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert :model-value="true" variant="danger" class="mb-xl-0" show>
                    A simple Danger alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert :model-value="true" variant="warning" show>
                    A simple Warning alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert :model-value="true" variant="info" show>
                    A simple Info alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert :model-value="true" variant="light" show>
                    A simple Light alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert :model-value="true" variant="dark" class="mb-0" show>
                    A simple Dark alert with
                    <BLink href="#" class="alert-link"> an example link </BLink>. Give
                    it a click if you like.
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show variant=&quot;primary&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Primary alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show variant=&quot;secondary&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Secondary alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show variant=&quot;success&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Success alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show variant=&quot;danger&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Danger alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show variant=&quot;warning&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Warning alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show variant=&quot;info&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Info alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show variant=&quot;light&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Light alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show variant=&quot;dark&quot; role=&quot;alert&quot;&gt;
A simple &lt;b&gt;Dark alert&lt;/b&gt; with &lt;a href=&quot;#&quot; class=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Outline Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>border-2 bg-body-secondary</code> class to set an alert with outline.
            </p>

            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert8" dismissible variant="primary"
                    class="border-2 bg-body-secondary">
                    <strong>Hi!</strong> - Outline <b>primary alert</b> example
                  </BAlert>

                  <h6>Secondary Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert9" dismissible variant="secondary"
                    class="border-2 bg-body-secondary">
                    <strong>Hi!</strong> - Outline <b>secondary alert</b> example
                  </BAlert>

                  <h6>Success Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert10" dismissible variant="success"
                    class="border-2 bg-body-secondary">
                    <strong>Yey! Everything worked!</strong> - Outline <b>success alert</b> example
                  </BAlert>

                  <h6>Danger Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert11" dismissible variant="danger"
                    class="border-2 bg-body-secondary">
                    <strong>Something is very wrong!</strong> - Outline <b>danger alert</b> example
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert12" dismissible variant="warning"
                    class="border-2 bg-body-secondary">
                    <strong>Uh oh, something went wrong!</strong> - Outline <b>warning alert</b> example
                  </BAlert>

                  <h6>Info Outline Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert13" dismissible variant="info"
                    class="border-2 bg-body-secondary">
                    <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert :model-value="true" v-model="dismissibleAlert14" dismissible variant="dark"
                    class="border-2 bg-body-secondary">
                    <strong>Did you know?</strong> - Outline <b>dark alert</b> example
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Hi! &lt;/strong&gt; - Outline &lt;b&gt;primary alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; How are you! &lt;/strong&gt; - Outline &lt;b&gt;secondary alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Yey! Everything worked! &lt;/strong&gt; - Outline &lt;b&gt;success alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Something is very wrong! &lt;/strong&gt; - Outline &lt;b&gt;danger alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Uh oh, something went wrong! &lt;/strong&gt; - Outline &lt;b&gt;warning alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Don't forget' it ! &lt;/strong&gt; - Outline &lt;b&gt;info alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;border-2 bg-body-secondary fade show&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt; Did you know? &lt;/strong&gt; - Outline &lt;b&gt;dark alert&lt;/b&gt; example
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Left Border Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-border-left</code> class to set an alert with the left
              border & outline.
            </p>

            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert15" variant="primary"
                    class="alert-border-left">
                    <i class="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border
                    alert
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert16" variant="secondary"
                    class="alert-border-left">
                    <i class="ri-check-double-line me-3 align-middle fs-16"></i>
                    <strong>Secondary</strong> - Left border alert
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert17" variant="success"
                    class="alert-border-left">
                    <i class="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left
                    border alert
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert18" variant="danger"
                    class="alert-border-left">
                    <i class="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong>- Left border
                    alert
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert19" variant="warning"
                    class="alert-border-left">
                    <i class="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong>- Left border alert
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert20" variant="info"
                    class="alert-border-left">
                    <i class="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong>- Left border alert
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert21" variant="light"
                    class="alert-border-left">
                    <i class="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong>- Left border alert
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert22" variant="dark"
                    class="alert-border-left">
                    <i class="ri-refresh-line me-3 align-middle fs-16"></i><strong>Dark</strong>- Left border alert
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-user-smile-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Primary&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-check-double-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Secondary&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-notification-off-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Success&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-error-warning-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Danger&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-alert-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Warning&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-airplay-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Info&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show dismissible variant=&quot;light&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-mail-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Light&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;alert-border-left fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-refresh-line me-3 align-middle&quot;&gt;&lt;/i&gt; &lt;strong&gt;Dark&lt;/strong&gt; - Left border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Label Icon Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-label-icon</code> class to set an alert with a label
              icon.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert23" variant="primary"
                    class="bg-primary text-white alert-label-icon" show>
                    <i class="ri-user-smile-line label-icon"></i>
                    <strong>Primary</strong> - Label icon alert
                    <BButton variant="link" class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert24" variant="secondary"
                    class="bg-secondary text-white alert-label-icon" show>
                    <i class="ri-check-double-line label-icon"></i>
                    <strong>Secondary</strong>
                    - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert25" variant="success"
                    class="bg-success text-white alert-label-icon" show>
                    <i class="ri-notification-off-line label-icon"></i>
                    <strong>Success</strong>
                    - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert26" variant="danger"
                    class="bg-danger text-white alert-label-icon mb-xl-0" show>
                    <i class="ri-error-warning-line label-icon"></i>
                    <strong>Danger</strong>
                    - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert27" variant="warning"
                    class="bg-warning text-white alert-label-icon" show>
                    <i class="ri-alert-line label-icon"></i>
                    <strong>warning</strong> - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert28" variant="info"
                    class="bg-info text-white alert-label-icon" show>
                    <i class="ri-airplay-line label-icon"></i>
                    <strong>Info</strong> - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert29" variant="light"
                    class="bg-light text-body alert-label-icon" show>
                    <i class="ri-mail-line label-icon"></i>
                    <strong>Light</strong> - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert30" variant="dark"
                    class="bg-dark text-white alert-label-icon mb-0" show>
                    <i class="ri-refresh-line label-icon"></i>
                    <strong>Dark</strong> - Label icon alert
                    <BButton variant="link"  class="btn-close btn-close-white" aria-label="Close"></BButton>
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-user-smile-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Primary&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-check-double-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Secondary&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-notification-off-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Success&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-error-warning-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Danger&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-alert-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Warning&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-airplay-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Info&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show dismissible variant=&quot;light&quot; class=&quot;alert-solid alert-label-icon fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-mail-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Light&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;alert-solid alert-label-icon fade show mb-0&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-refresh-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Dark&lt;/strong&gt; - Label icon alert
&lt;button type=&quot;button&quot; class=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Additional Content Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-additional</code> class and Use the
              <code>alert-</code> class to HTML elements like headings,
              paragraphs, dividers etc.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>

                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert31" variant="primary"
                    class="alert-additional">
                    <div class="alert-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <i class="ri-error-warning-line fs-16 align-middle"></i>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="alert-heading">Well done !</h5>
                          <p class="mb-0">
                            Aww yeah, you successfully read this important alert
                            message.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="alert-content">
                      <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </BAlert>
                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert32" variant="danger"
                    class="alert-additional mb-xl-0">
                    <div class="alert-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <i class="ri-alert-line fs-16 align-middle"></i>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="alert-heading">
                            Something is very wrong!
                          </h5>
                          <p class="mb-0">
                            Change a few things up and try submitting again.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="alert-content">
                      <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <!-- <Alert title="Success Alert" cardTitle="Uh oh, something went wrong!"
                    cardDescription="Better check yourself, you're not looking too good.">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </BLinklert> -->
                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert33" variant="success"
                    class="alert-additional">
                    <div class="alert-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <i class="ri-notification-off-line fs-16 align-middle"></i>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="alert-heading">Yey! Everything worked!</h5>
                          <p class="mb-0">
                            This alert needs your attention, but it's not super
                            important.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="alert-content">
                      <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </BAlert>

                  <!-- <Alert title="Warning Alert" cardTitle="Uh oh, something went wrong!"
                    cardDescription="Better check yourself, you're not looking too good.">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </BLinklert> -->
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert34" variant="warning"
                    class="alert-additional mb-xl-0">
                    <div class="alert-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <i class="ri-alert-line fs-16 align-middle"></i>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="alert-heading">
                            Uh oh, something went wrong!
                          </h5>
                          <p class="mb-0">
                            Better check yourself, you're not looking too good.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="alert-content">
                      <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
                    </div>
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert dismissible show variant=&quot;primary&quot; class=&quot;alert-additional fade show&quot; role=&quot;alert&quot;&gt;
&lt;div class=&quot;alert-body&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;i class=&quot;ri-user-smile-line fs-16 align-middle&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;alert-heading&quot;&gt;Well done !&lt;/h5&gt;
&lt;p class=&quot;mb-0&quot;&gt;Aww yeah, you successfully read this important alert message. &lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
&lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;
&lt;BAlert&gt;</code>

<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert dismissible show variant=&quot;danger&quot; class=&quot;alert-additional fade show&quot; role=&quot;alert&quot;&gt;
&lt;div class=&quot;alert-body&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;i class=&quot;ri-error-warning-line fs-16 align-middle&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;alert-heading&quot;&gt;Something is very wrong!&lt;/h5&gt;
&lt;p class=&quot;mb-0&quot;&gt;Change a few things up and try submitting again. &lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
&lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;
&lt;BAlert&gt;</code>

<code>&lt;!-- Success Alert --&gt;
&lt;BAlert dismissible show variant=&quot;success&quot; class=&quot;alert-additional fade show&quot; role=&quot;alert&quot;&gt;
&lt;div class=&quot;alert-body&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;i class=&quot;ri-notification-off-line fs-16 align-middle&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;alert-heading&quot;&gt;Yey! Everything worked!&lt;/h5&gt;
&lt;p class=&quot;mb-0&quot;&gt;This alert needs your attention, but it's not super important. &lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
&lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;
&lt;BAlert&gt;</code>

<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert dismissible show variant=&quot;warning&quot; class=&quot;alert-additional fade show mb-0&quot; role=&quot;alert&quot;&gt;
&lt;div class=&quot;alert-body&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;div class=&quot;d-flex&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;i class=&quot;ri-alert-line fs-16 align-middle&quot;&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;alert-heading&quot;&gt;Uh oh, something went wrong!&lt;/h5&gt;
&lt;p class=&quot;mb-0&quot;&gt;Better check yourself, you're not looking too good. &lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;alert-content&quot;&gt;
&lt;p class=&quot;mb-0&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;
&lt;BAlert&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Top Border with Outline Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-top-border</code> class to set an alert with the top
              border and outline.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert35" variant="primary"
                    class="alert-top-border">
                    <i class="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong>- Top
                    border alert
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert36" variant="secondary"
                    class="alert-top-border">
                    <i class="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong>-
                    Top border alert
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert37" variant="success"
                    class="alert-top-border">
                    <i class="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong>-
                    Top border alert
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert38" variant="danger"
                    class="alert-top-border">
                    <i class="ri-error-warning-line me-3 align-middle fs-16 text-danger"></i><strong>Danger</strong>-
                    Top border alert
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert39" variant="warning"
                    class="alert-top-border">
                    <i class="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong>- Top
                    border alert
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert40" variant="info"
                    class="alert-top-border">
                    <i class="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong>- Top border
                    alert
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert41" variant="light"
                    class="alert-top-border">
                    <i class="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong>- Top border
                    alert
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert42" variant="dark"
                    class="alert-top-border">
                    <i class="ri-refresh-line me-3 align-middle fs-16"></i><strong>Dark</strong>- Top border
                    alert
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-user-smile-line me-3 align-middle fs-16 text-primary&quot;&gt;&lt;/i&gt;&lt;strong&gt;Primary&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-check-double-line me-3 align-middle fs-16 text-secondary&quot;&gt;&lt;/i&gt;&lt;strong&gt;Secondary&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-notification-off-line me-3 align-middle fs-16 text-success&quot;&gt;&lt;/i&gt;&lt;strong&gt;Success&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-error-warning-line me-3 align-middle fs-16 text-danger&quot;&gt;&lt;/i&gt;&lt;strong&gt;Danger&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-alert-line me-3 align-middle fs-16 text-warning&quot;&gt;&lt;/i&gt;&lt;strong&gt;Warning&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-airplay-line me-3 align-middle fs-16 text-info&quot;&gt;&lt;/i&gt;&lt;strong&gt;Info&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show dismissible variant=&quot;light&quot; class=&quot;alert-top-border fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-mail-line me-3 align-middle fs-16 text-light&quot;&gt;&lt;/i&gt;&lt;strong&gt;Light&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;alert-top-border fade show mb-0&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-refresh-line me-3 align-middle fs-16 text-body&quot;&gt;&lt;/i&gt;&lt;strong&gt;Dark&lt;/strong&gt; - Top border alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Label Icon Arrow Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-label-icon label-arrow</code> class to show an alert
              with label icon and arrow.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert43" variant="primary"
                    class="alert-label-icon label-arrow">
                    <i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow alert
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert44" variant="secondary"
                    class="alert-label-icon label-arrow">
                    <i class="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow alert
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert45" variant="success"
                    class="alert-label-icon label-arrow">
                    <i class="ri-notification-off-line label-icon"></i><strong>Success</strong>- Label icon arrow alert
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert46" variant="danger"
                    class="alert-label-icon label-arrow">
                    <i class="ri-error-warning-line label-icon"></i><strong>Danger</strong>- Label icon arrow alert
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert47" variant="warning"
                    class="alert-label-icon label-arrow">
                    <i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow alert
                  </BAlert>

                  <h6>info Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert48" variant="info"
                    class="alert-label-icon label-arrow">
                    <i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow alert
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert49" variant="light"
                    class="alert-label-icon label-arrow">
                    <i class="ri-mail-line label-icon"></i><strong>Light</strong>- Label icon arrow alert
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert50" variant="dark"
                    class="alert-label-icon label-arrow">
                    <i class="ri-refresh-line label-icon"></i><strong>Dark</strong>- Label icon arrow alert
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show variant=&quot;primary&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-user-smile-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Primary&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show variant=&quot;secondary&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-check-double-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Secondary&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show variant=&quot;success&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-notification-off-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Success&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show variant=&quot;danger&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-error-warning-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Danger&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show variant=&quot;warning&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-alert-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Warning&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show variant=&quot;info&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-airplay-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Info&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show variant=&quot;light&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-mail-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Light&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show variant=&quot;dark&quot; class=&quot;alert-dismissible alert-label-icon label-arrow fade show mb-0&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-refresh-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Dark&lt;/strong&gt; - Label icon arrow  alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot; alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Rounded Label Icon Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-label-icon rounded-label</code> class to set an alert
              with a rounded label icon.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert51" variant="primary"
                    class="alert-label-icon rounded-label">
                    <i class="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Rounded label alert
                  </BAlert>

                  <h6>Secondary Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert52" variant="secondary"
                    class="alert-label-icon rounded-label">
                    <i class="ri-check-double-line label-icon"></i><strong>Secondary</strong>- Rounded label alert
                  </BAlert>

                  <h6>Success Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert53" variant="success"
                    class="alert-label-icon rounded-label">
                    <i class="ri-notification-off-line label-icon"></i><strong>Success</strong>- Rounded label alert
                  </BAlert>

                  <h6>Danger Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert54" variant="danger"
                    class="alert-label-icon rounded-label">
                    <i class="ri-error-warning-line label-icon"></i><strong>Danger</strong>- Rounded label alert
                  </BAlert>

                </BCol>

                <BCol xl="6">
                  <h6>Warning Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert55" variant="warning"
                    class="alert-label-icon rounded-label">
                    <i class="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded label alert
                  </BAlert>

                  <h6>Info Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert56" variant="info"
                    class="alert-label-icon rounded-label">
                    <i class="ri-airplay-line label-icon"></i><strong>Info</strong> - Rounded label alert
                  </BAlert>

                  <h6>Light Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert57" variant="light"
                    class="alert-label-icon rounded-label">
                    <i class="ri-mail-line label-icon"></i><strong>Light</strong> - Rounded label alert
                  </BAlert>

                  <h6>Dark Alert</h6>
                  <BAlert dismissible :model-value="true" v-model="dismissibleAlert58" variant="dark"
                    class="alert-label-icon rounded-label">
                    <i class="ri-refresh-line label-icon"></i><strong>Dark</strong> - Rounded label alert
                  </BAlert>

                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;primary&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-user-smile-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Primary&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show dismissible variant=&quot;secondary&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-check-double-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Secondary&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show dismissible variant=&quot;success&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-notification-off-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Success&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show dismissible variant=&quot;danger&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-error-warning-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Danger&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show dismissible variant=&quot;warning&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-alert-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Warning&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show dismissible variant=&quot;info&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-airplay-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Info&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show dismissible variant=&quot;light&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-mail-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Light&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show dismissible variant=&quot;dark&quot; class=&quot;alert-label-icon rounded-label fade show&quot; role=&quot;alert&quot;&gt;
&lt;i class=&quot;ri-refresh-line label-icon&quot;&gt;&lt;/i&gt;&lt;strong&gt;Dark&lt;/strong&gt; - Rounded label alert
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/BAlert&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Solid Alerts" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>alert-solid</code> class to set an alert with solid style.
            </p>

            <div class="live-preview">
              <BRow>
                <BCol xl="6">
                  <h6>Primary Solid Alert</h6>
                  <BAlert :model-value="true" variant="primary" class="bg-primary border-primary text-white">
                    <strong>Hi!</strong> - Solid <b>primary alert</b>
                    example
                  </BAlert>

                  <h6>Secondary Solid Alert</h6>
                  <BAlert :model-value="true" variant="secondary" class="bg-secondary border-secondary text-white">
                    <strong>Hi!</strong> - Solid <b>primary
                      alert</b> example
                  </BAlert>

                  <h6>Success Solid Alert</h6>
                  <BAlert :model-value="true" variant="success" class="bg-success border-success text-white">
                    <strong>Hi!</strong> - Solid <b>primary alert</b>
                    example
                  </BAlert>

                  <h6>Danger Solid Alert</h6>
                  <BAlert :model-value="true" variant="danger" class="bg-danger border-danger text-white">
                    <strong>Hi!</strong> - Solid <b>primary alert</b>
                    example
                  </BAlert>
                </BCol>

                <BCol xl="6">
                  <h6>Warning Solid Alert</h6>
                  <BAlert :model-value="true" variant="warning" class="bg-warning border-warning text-white">
                    <strong>Hi!</strong> - Solid <b>primary alert</b>
                    example
                  </BAlert>

                  <h6>Info Solid Alert</h6>
                  <BAlert :model-value="true" variant="info" class="bg-info border-info text-white"><strong>Hi!</strong> -
                    Solid <b>primary alert</b>
                    example</BAlert>

                  <h6>Light Solid Alert</h6>
                  <BAlert :model-value="true" variant="light" class="bg-light border-light text-body"><strong>Hi!</strong>
                    - Solid <b>primary alert</b>
                    example</BAlert>
                  <h6>Dark Solid Alert</h6>
                  <BAlert :model-value="true" variant="dark" class="bg-dark border-dark text-white mb-0">
                    <strong>Hi!</strong> - Solid <b>primary alert</b>
                    example
                  </BAlert>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height: 260px">
<code>&lt;!-- Primary Alert --&gt;
&lt;BAlert show variant=&quot;primary&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Hi!&lt;/strong&gt; - Solid &lt;b&gt;primary alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Secondary Alert --&gt;
&lt;BAlert show variant=&quot;secondary&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;How are you!&lt;/strong&gt; - Solid &lt;b&gt;secondary alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Success Alert --&gt;
&lt;BAlert show variant=&quot;success&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Yey! Everything worked!&lt;/strong&gt; - Solid &lt;b&gt;success alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Danger Alert --&gt;
&lt;BAlert show variant=&quot;danger&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Something is very wrong!&lt;/strong&gt; - Solid &lt;b&gt;danger alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Warning Alert --&gt;
&lt;BAlert show variant=&quot;warning&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Uh oh, something went w rong!&lt;/strong&gt; - Solid &lt;b&gt;warning alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Info Alert --&gt;
&lt;BAlert show variant=&quot;info&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Don't forget' it !&lt;/strong&gt; - Solid &lt;b&gt;info alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Light Alert --&gt;
&lt;BAlert show variant=&quot;light&quot; class=&quot;alert-solid&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Mind Your Step!&lt;/strong&gt; - Solid &lt;b&gt;light alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code>
<code>&lt;!-- Dark Alert --&gt;
&lt;BAlert show variant=&quot;dark&quot; class=&quot;alert-solid mb-0&quot; role=&quot;alert&quot;&gt;
&lt;strong&gt;Did you know?&lt;/strong&gt; - Solid &lt;b&gt;dark alert&lt;/b&gt; example
&lt;/BAlert&gt;
</code></pre>
          </div>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</Layout></template>
