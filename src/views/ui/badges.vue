<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
  components: {
    Layout,
    PageHeader,
    CardHeader
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Badges" pageTitle="Base UI" />
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Default Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>badge</code> selector to set a default badge.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge variant="primary" class="bg-primary">Primary</BBadge>
                <BBadge class="bg-secondary">Secondary</BBadge>
                <BBadge class="bg-success">Success</BBadge>
                <BBadge class="bg-info">Info</BBadge>
                <BBadge class="bg-warning">Warning</BBadge>
                <BBadge class="bg-danger">Danger</BBadge>
                <BBadge class="bg-dark">Dark</BBadge>
                <BBadge class="bg-light text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;BBadge variant=&quot;primary&quot;&gt;Primary&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;secondary&quot;&gt;Secondary&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;success&quot;&gt;Success&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;info&quot;&gt;Info&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;warning&quot;&gt;Warning&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;danger&quot;&gt;Danger&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;dark&quot;&gt;Dark&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;light&quot;&gt;Light&lt;/BBadge&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Soft Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>badge-soft-</code> class with the below-mentioned variation
              to create a softer badge.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Primary</BBadge>
                <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary">Secondary</BBadge>
                <BBadge variant="success-subtle" class="bg-success-subtle text-success">Success</BBadge>
                <BBadge variant="info-subtle" class="bg-info-subtle text-info">Info</BBadge>
                <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning">Warning</BBadge>
                <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Danger</BBadge>
                <BBadge variant="dark-subtle" class="bg-dark-subtle text-body">Dark</BBadge>
                <BBadge variant="light-subtle" class="bg-light-subtle text-body text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;span class=&quot;badge bg-primary-subtle text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-secondary-subtle text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-success-subtle text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-info-subtle text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-warning-subtle text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-danger-subtle text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-dark-subtle text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-light-subtle text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Outline Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>badge-outline-</code> class with the below-mentioned
              variation to create a badge with the outline.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BLink href="#" class="badge border border-primary text-primary">Primary</BLink>
                <BBadge variant="border border-secondary" class="border border-secondary text-secondary">Secondary</BBadge>
                <BBadge variant="border border-success" class="border border-success text-success">Success</BBadge>
                <BBadge variant="border border-info" class="border border-info text-info">Info</BBadge>
                <BBadge variant="border border-warning" class="border border-warning text-warning">Warning</BBadge>
                <BBadge variant="border border-danger" class="border border-danger text-danger">Danger</BBadge>
                <BBadge variant="border border-dark" class="border border-dark text-body">Dark</BBadge>
                <BBadge variant="border border-light" class="border border-light text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;span class=&quot;badge border border-primary text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-secondary text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-success text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-info text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-warning text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-danger text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-dark text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge border border-light text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Rounded Pill Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>rounded-pill</code> class to make badges more rounded with a
              larger border-radius.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge pill variant="primary">Primary</BBadge>
                <BBadge pill variant="secondary">Secondary</BBadge>
                <BBadge pill variant="success">Success</BBadge>
                <BBadge pill class="bg-info">Info</BBadge>
                <BBadge pill class="bg-warning">Warning</BBadge>
                <BBadge pill variant="danger">Danger</BBadge>
                <BBadge pill variant="dark">Dark</BBadge>
                <BBadge pill variant="light" class="text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;BBadge variant=&quot;primary&quot; pill &gt;Primary&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;secondary&quot; pill &gt;Secondary&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;success&quot; pill &gt;Success&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;info&quot; pill &gt;Info&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;warning&quot; pill &gt;Warning&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;danger&quot; pill &gt;Danger&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;dark&quot; pill &gt;Dark&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;light&quot; pill &gt;Light&lt;/BBadge&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Rounded Pill Badges with soft effect" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>rounded-pill badge-soft-</code> class with the
              below-mentioned variation to create a badge more rounded with a
              soft background.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge pill variant="primary-subtle" class="bg-primary-subtle text-primary">Primary</BBadge>
                <BBadge pill variant="secondary-subtle" class="bg-secondary-subtle text-secondary">Secondary</BBadge>
                <BBadge pill variant="success-subtle" class="bg-success-subtle text-success">Success</BBadge>
                <BBadge pill variant="info-subtle" class="bg-info-subtle text-info">Info</BBadge>
                <BBadge pill variant="warning-subtle" class="bg-warning-subtle text-warning">Warning</BBadge>
                <BBadge pill variant="danger-subtle" class="bg-danger-subtle text-danger">Danger</BBadge>
                <BBadge pill variant="dark-subtle" class="bg-dark-subtle text-body">Dark</BBadge>
                <BBadge pill variant="light-subtle" class="bg-light-subtle text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;span class=&quot;badge rounded-pill bg-primary-subtle text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-secondary-subtle text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-success-subtle text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-info-subtle text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-warning-subtle text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-danger-subtle text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-dark-subtle text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill bg-light-subtle text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Soft Border Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>badge-border</code> and <code>badge-soft-</code> with below
              mentioned modifier classes to make badges with border & soft
              backgorund.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary badge-border">Primary</BBadge>
                <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary badge-border">Secondary</BBadge>
                <BBadge variant="success-subtle" class="bg-success-subtle text-success badge-border">Success</BBadge>
                <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger badge-border">Danger</BBadge>
                <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning badge-border">Warning</BBadge>
                <BBadge variant="info-subtle" class="bg-info-subtle text-info badge-border">Info</BBadge>
                <BBadge variant="dark-subtle" class="bg-dark-subtle text-body badge-border">Dark</BBadge>
                <BBadge variant="light-subtle" class="bg-light-subtle text-body badge-border">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;span class=&quot;badge bg-primary-subtle text-primary badge-border&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-secondary-subtle text-secondary badge-border&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-success-subtle text-success badge-border&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-info-subtle text-info badge-border&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-warning-subtle text-warning badge-border&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-danger-subtle text-danger badge-border&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-dark-subtle text-body badge-border&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge bg-light-subtle text-body badge-border&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Outline Pill Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>rounded-pill badge-outline-</code> class with the
              below-mentioned variation to create a outline Pill badge.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge pill variant="border border-primary" class="border border-primary text-primary">Primary</BBadge>
                <BBadge pill variant="border border-secondary" class="border border-secondary text-secondary">Secondary</BBadge>
                <BBadge pill variant="border border-success" class="border border-success text-success">Success</BBadge>
                <BBadge pill variant="border border-info" class="border border-info text-info">Info</BBadge>
                <BBadge pill variant="border border-warning" class="border border-warning text-warning">Warning</BBadge>
                <BBadge pill variant="border border-danger" class="border border-danger text-danger">Danger</BBadge>
                <BBadge pill variant="border border-dark" class="border border-dark text-body">Dark</BBadge>
                <BBadge pill variant="border border-light" class="border border-light text-body text-body">Light</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;span class=&quot;badge rounded-pill border border-primary text-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-secondary text-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-success text-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-info text-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-warning text-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-danger text-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-dark text-body&quot;&gt;Dark&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge rounded-pill border border-light text-body&quot;&gt;Light&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Label Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>badge-label</code> class to create a badge with the label.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge variant="primary" class="badge-label">
                  <i class="mdi mdi-circle-medium"></i>
                  Primary
                </BBadge>
                <BBadge variant="secondary" class="badge-label">
                  <i class="mdi mdi-circle-medium"></i>
                  Secondary
                </BBadge>
                <BBadge variant="success" class="badge-label">
                  <i class="mdi mdi-circle-medium"></i>
                  Success
                </BBadge>
                <BBadge variant="danger" class="badge-label">
                  <i class="mdi mdi-circle-medium"></i>
                  Danger
                </BBadge>
                <BBadge class="badge-label bg-warning">
                  <i class="mdi mdi-circle-medium"></i>
                  Warning
                </BBadge>
                <BBadge class="badge-label bg-info">
                  <i class="mdi mdi-circle-medium"></i> Info
                </BBadge>

                <BBadge variant="dark" class="badge-label">
                  <i class="mdi mdi-circle-medium"></i> Dark
                </BBadge>

                <BBadge variant="light" class="badge-label text-dark">
                  <i class="mdi mdi-circle-medium"></i> Light
                </BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;BBadge variant=&quot;primary&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Primary&lt;/BBadge&gt;</code>

<code>&lt;BBadge variant=&quot;secondary&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Secondary&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;success&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Success&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;danger&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Danger&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;warning&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Warning&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;info&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Info&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;dark&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Dark&lt;/BBadge&gt;</code>
 
<code>&lt;BBadge variant=&quot;light&quot; class=&quot;badge-label&quot; &gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Light&lt;/BBadge&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol xxl="12">
        <BCard no-body>
          <CardHeader title="Gradient Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BBadge class="badge-gradient-primary">Primary</BBadge>
                <BBadge class="badge-gradient-secondary">Secondary</BBadge>
                <BBadge class="badge-gradient-success">Success</BBadge>
                <BBadge class="badge-gradient-danger">Danger</BBadge>
                <BBadge class="badge-gradient-warning">Warning</BBadge>
                <BBadge class="badge-gradient-info">Info</BBadge>
                <BBadge class="badge-gradient-dark">Dark</BBadge>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px;">
<code>&lt;span class=&quot;badge badge-gradient-primary&quot;&gt;Primary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-secondary&quot;&gt;Secondary&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-success&quot;&gt;Success&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-danger&quot;&gt;Danger&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-warning&quot;&gt;Warning&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-info&quot;&gt;Info&lt;/span&gt;</code>

<code>&lt;span class=&quot;badge badge-gradient-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Button Position Badges" />

          <BCardBody>
            <p class="text-muted">
              Use the below utilities to modify a badge and position it in the
              corner of a link or button.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">
                <BButton type="button" variant="primary" class="position-relative">
                  Mails
                  <span class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      rounded-pill
                      bg-success
                    ">
                    +99
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </BButton>

                <BButton type="button" variant="light" class="position-relative">
                  Alerts
                  <span class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      border border-light
                      rounded-circle
                      bg-danger
                      p-1
                    ">
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </BButton>

                <BButton type="button" variant="primary" class="
                    position-relative
                    p-0
                    avatar-xs
                    rounded
                  ">
                  <span class="avatar-title bg-transparent">
                    <i class="bx bxs-envelope"></i>
                  </span>
                  <span class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      border border-light
                      rounded-circle
                      bg-danger
                      p-1
                    ">
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </BButton>

                <BButton type="button" variant="light" class="
                    position-relative
                    p-0
                    avatar-xs
                    rounded-circle
                  ">
                  <span class="avatar-title bg-transparent text-reset">
                    <i class="bx bxs-bell"></i>
                  </span>
                </BButton>

                <BButton type="button" variant="light" class="
                    position-relative
                    p-0
                    avatar-xs
                    rounded-circle
                  ">
                  <span class="avatar-title bg-transparent text-reset">
                    <i class="bx bx-menu"></i>
                  </span>
                  <span class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      border border-light
                      rounded-circle
                      bg-success
                      p-1
                    ">
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </BButton>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;BButton variant=&quot;primary&quot; class=&quot;y position-relative&quot;&gt;
    Mails &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success&quot;&gt;+99 &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; class=&quot;position-relative&quot;&gt;
    Alerts &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;primary&quot; class=&quot;y position-relative p-0 avatar-xs rounded&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent&quot;&gt;
        &lt;i class=&quot;bx bxs-envelope&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bxs-bell&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bx-menu&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;span class=&quot;position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;&lt;/span&gt;
&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>

        <BCard no-body>
          <CardHeader title="Badges With Button" />

          <BCardBody>
            <p class="text-muted">
              Badges can be used as part of buttons to provide a counter.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" type="button">
                  Notifications
                  <BBadge variant="success" class="ms-1">4</BBadge>
                </BButton>
                <BButton variant="success" type="button">
                  Messages
                  <BBadge variant="danger" class="ms-1">2</BBadge>
                </BButton>
                <BButton variant="outline-secondary" type="button">
                  Draft
                  <BBadge variant="success" class="ms-1">2</BBadge>
                </BButton>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;BButton variant=&quot;primary&quot; &gt;
    Notifications &lt;BBadge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;4&lt;/BBadge&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; &gt;
    Messages &lt;BBadge variant=&quot;danger quot;;mclass=quot;;s-1&quot;&gt;2&lt;/BBadge&gt;
&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-secondary&quot;&gt;
    Draft &lt;BBadge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;2&lt;/BBadge&gt;
&lt;/BButton&gt;
</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Badges with Heading" />

          <BCardBody>
            <p class="text-muted">
              Example of the badge used in the HTML Heading.
            </p>

            <div class="live-preview">
              <h1>
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h1>
              <h2>
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h2>
              <h3>
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h3>
              <h4>
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h4>
              <h5>
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h5>
              <h6 class="mb-0">
                Example heading
                <BBadge variant="secondary">New</BBadge>
              </h6>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;h1&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h1&gt;</code>

<code>&lt;h2&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h2&gt;</code>

<code>&lt;h3&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h3&gt;</code>

<code>&lt;h4&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h4&gt;</code>

<code>&lt;h5&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h5&gt;</code>

<code>&lt;h6&gt;Example heading &lt;BBadge variant=&quot;secondary&quot;&gt;New&lt;/BBadge&gt;&lt;/h6&gt;</code></pre>
            </div>
          </BCardBody>

        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>