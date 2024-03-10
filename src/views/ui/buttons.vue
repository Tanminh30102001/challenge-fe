<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
  data() {
    return {
      coloractive: true,
      connect: true,
      yes: true,
      colorfollow: true,
      coloron: true,
      colorbookmark: true,
      bookmark: true,
      onoffsecond: true,
      followsecond: true,
      onoff: true,
      follow: true,
      active: true,


      buttons: [{
        caption: 'Checkbox 1',
        state: true
      },
      {
        caption: 'Checkbox 2',
        state: false
      },
      {
        caption: 'Checkbox 3',
        state: false
      },
      ]
    };
  },
  components: {
    Layout,
    PageHeader,
    CardHeader
  },
  mounted() {
    const toggleBtn = document.getElementsByClassName("custom-toggle");
    Array.from(toggleBtn).forEach(ele => {
      ele.addEventListener("click", () => {
        if (ele.classList.contains("active")) {
          ele.classList.remove("active");
        } else {
          ele.classList.add("active");
        }
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Buttons" pageTitle="Base UI" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Default Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>BButton</code> to show the default button style.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="waves-effect waves-light">Primary</BButton>

                <BButton variant="secondary" class="dary waves-effect waves-light">
                  Secondary
                </BButton>
                <BButton variant="success" class="ss waves-effect waves-light">
                  Success
                </BButton>
                <BButton variant="info" class="waves-effect waves-light">
                  Info
                </BButton>
                <BButton variant="warning" class="ng waves-effect waves-light">
                  Warning
                </BButton>
                <BButton variant="danger" class="r waves-effect waves-light">
                  Danger
                </BButton>
                <BButton variant="dark" class="waves-effect waves-light">
                  Dark
                </BButton>
                <BButton variant="link" class="waves-effect"> Link </BButton>
                <BButton variant="light" class="waves-effect">
                  Light
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Base Buttons --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn btn-primary waves-effect waves-light&quot;&gt;Primary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Outline Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BButton variant="outline-</code> with the below-mentioned
              variation to create a button with the outline.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="outline-primary" class="waves-effect waves-light">
                  Primary
                </BButton>
                <BButton variant="outline-secondary" class="waves-effect waves-light">
                  Secondary
                </BButton>
                <BButton variant="outline-success" class="waves-effect waves-light">
                  Success
                </BButton>
                <BButton variant="outline-info" class="waves-effect waves-light">
                  Info
                </BButton>
                <BButton variant="outline-warning" class="waves-effect waves-light">
                  Warning
                </BButton>
                <BButton variant="outline-danger" class="waves-effect waves-light">
                  Danger
                </BButton>
                <BButton variant="outline-dark" class="waves-effect waves-light">
                  Dark
                </BButton>
                <BButton variant="outline-light" class="waves-effect">
                  Light
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"
                style="height: 275px"><code>&lt;!-- Outline Buttons --&gt;
&lt;BButton variant=&quot;outline-primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-info&quot; class=&quot; waves-effect waves-light&quot;&gt;Info&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Rounded Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>pill</code> to make a rounded button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" pill class="waves-effect waves-light">
                  Primary
                </BButton>
                <BButton variant="secondary" pill class="waves-effect">
                  Secondary
                </BButton>
                <BButton variant="success" pill class="waves-effect waves-light">
                  Success
                </BButton>
                <BButton variant="info" pill class="waves-effect waves-light">
                  Info
                </BButton>
                <BButton variant="warning" pill class="waves-effect waves-light">
                  Warning
                </BButton>
                <BButton variant="danger" pill class="waves-effect waves-light">
                  Danger
                </BButton>
                <BButton variant="dark" pill class="waves-effect waves-light">
                  Dark
                </BButton>
                <BButton variant="light" pill class="waves-effect">
                  Light
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Rounded Buttons --&gt;
&lt;BButton pill variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Soft Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>btn-soft-</code> class with the below-mentioned variation to
              create a button with the soft background.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="soft-primary" class="btn btn-soft-primary waves-effect waves-light">
                  Primary
                </BButton>
                <BButton class="btn btn-soft-secondary waves-effect waves-light">
                  Secondary
                </BButton>
                <BButton class="btn btn-soft-success waves-effect waves-light">
                  Success
                </BButton>
                <BButton class="btn btn-soft-info waves-effect waves-light">
                  Info
                </BButton>
                <BButton class="btn btn-soft-warning waves-effect waves-light">
                  Warning
                </BButton>
                <BButton class="btn btn-soft-danger waves-effect waves-light">
                  Danger
                </BButton>
                <BButton class="btn btn-soft-dark waves-effect waves-light">
                  Dark
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Soft Buttons --&gt;
&lt;BButton class=&quot;btn-soft-primary waves-effect waves-light&quot;&gt;Primary&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-secondary waves-effect&quot;&gt;secondary&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-success waves-effect waves-light&quot;&gt;Success&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-info waves-effect waves-light&quot;&gt;Info&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-warning waves-effect waves-light&quot;&gt;Warning&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-danger waves-effect waves-light&quot;&gt;Danger&lt;/BButton&gt;</code>

<code>&lt;BButton class=&quot;btn-soft-dark waves-effect waves-light&quot;&gt;Dark&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Gradient Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>bg-gradient</code>class to create a gradient button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="bg-gradient waves-effect waves-light">
                  Primary
                </BButton>
                <BButton variant="secondary" class="bg-gradient waves-effect waves-light">
                  Secondary
                </BButton>
                <BButton variant="success" class="bg-gradient waves-effect waves-light">
                  Success
                </BButton>
                <BButton variant="info" class="bg-gradient waves-effect waves-light">
                  Info
                </BButton>
                <BButton variant="warning" class="bg-gradient waves-effect waves-light">
                  Warning
                </BButton>
                <BButton variant="danger" class="bg-gradient waves-effect waves-light">
                  Danger
                </BButton>
                <BButton variant="dark" class="bg-gradient waves-effect waves-light">
                  Dark
                </BButton>
                <BButton variant="light" class="bg-gradient waves-effect waves-light">
                  Light
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"><code>&lt;!-- Gradient Buttons --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Primary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;secondary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Secondary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Success&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;info&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Info&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;warning&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Warning&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;danger&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Danger&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;dark&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Dark&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Light&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Animation Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>bg-animation</code>class to create an animated button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="btn-animation waves-effect waves-light" data-text="Primary">
                  <span>Primary</span>
                </BButton>
                <BButton variant="secondary" class="btn-animation waves-effect waves-light" data-text="Secondary">
                  <span>Secondary</span>
                </BButton>
                <BButton variant="success" class="btn-animation waves-effect waves-light" data-text="Success">
                  <span>Success</span>
                </BButton>
                <BButton variant="info" class="btn-animation waves-effect waves-light" data-text="Info">
                  <span>Info</span>
                </BButton>
                <BButton variant="warning" class="btn-animation waves-effect waves-light" data-text="Warning">
                  <span>Warning</span>
                </BButton>
                <BButton variant="danger" class="btn-animation waves-effect waves-light" data-text="Danger">
                  <span>Danger</span>
                </BButton>
                <BButton variant="dark" class="btn-animation waves-effect waves-light" data-text="Dark">
                  <span>Dark</span>
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"><code>&lt;!-- Animation Buttons --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Primary&quot;&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;secondary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Secondary&quot;&gt;&lt;span&gt;Secondary&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;info&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Info&quot;&gt;&lt;span&gt;Info&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;warning&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Warning&quot;&gt;&lt;span&gt;Warning&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;danger&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Danger&quot;&gt;&lt;span&gt;Danger&lt;/span&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;dark&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Dark&quot;&gt;&lt;span&gt;Dark&lt;/span&gt;&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons with Label" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>btn-label</code>class to create a button with the label.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BLink href="javascript:void(0);" class="btn btn-primary btn-label">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <i class="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
                        </div>
                        <div class="flex-grow-1">Primary</div>
                      </div>
                    </BLink>
                    <BButton variant="success" class="btn-label">
                      <i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i>
                      Success
                    </BButton>
                    <BButton variant="warning" class="btn-label">
                      <i class="ri-error-warning-line label-icon align-middle fs-16 me-2"></i>
                      Warning
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="primary" class="btn-label" pill>
                      <i class="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                      Primary
                    </BButton>
                    <BButton variant="success" class="btn-label" pill>
                      <i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                      Success
                    </BButton>
                    <BButton variant="warning" class="btn-label" pill>
                      <i class="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                      Warning
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="4">
                  <div class="d-flex flex-wrap gap-2">
                    <BButton variant="primary" class="btn-label right">
                      <i class="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i>
                      Primary
                    </BButton>
                    <BButton pill variant="success" class="btn-label right">
                      <i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                      Success
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"
                style="height: 275px"><code>&lt;!-- Buttons with Label --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/BButton&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;BButton pill variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/BButton&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/BButton&gt;</code>

<code>&lt;BButton pill variant=&quot;success&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2&quot;&gt;&lt;/i&gt; Success&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Load More Buttons" />

          <BCardBody>
            <p class="text-muted">Example of loading buttons.</p>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="outline-primary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="success" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="outline-secondary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="danger" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="outline-primary" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="success" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="outline-warning" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                    </BButton>
                    <BButton type="button" variant="info" class="btn-load">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Load More Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Border Buttons" />

          <BCardBody>
            <p class="text-muted">Example of simple bottom borderd buttons.</p>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="primary" class="btn-border">Primary</BButton>
                    <BButton variant="secondary" class="btn-border">Secondary</BButton>
                    <BButton variant="success" class="btn-border">Success</BButton>
                    <BButton variant="warning" class="btn-border">Warning</BButton>
                    <BButton variant="danger" class="btn-border">Danger</BButton>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                    <BButton variant="outline-primary" class="btn-border">Primary</BButton>
                    <BButton variant="outline-secondary" class="btn-border">Secondary</BButton>
                    <BButton variant="outline-success" class="btn-border">Success</BButton>
                    <BButton variant="soft-warning" class="btn-border">Warning</BButton>
                    <BButton variant="soft-danger" class="btn-border">Danger</BButton>
                    <BButton variant="soft-dark" class="btn-border">Dark</BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Border Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-primary btn-border&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-secondary btn-border&quot;&gt;Secondary&lt;/button&gt;
&lt;button class=&quot;btn btn-success btn-border&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;btn btn-warning btn-border&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;btn btn-danger btn-border&quot;&gt;Danger&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-border&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-outline-secondary btn-border&quot;&gt;Secondary&lt;/button&gt;
&lt;button class=&quot;btn btn-outline-success btn-border&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-warning btn-border&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-danger btn-border&quot;&gt;Danger&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-dark btn-border&quot;&gt;Dark&lt;/button&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Custom Toggle Buttons" />

          <BCardBody>
            <p class="text-muted">Example of toggle buttons.</p>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <BButton variant="primary" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changecoloractive">
                      <span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
                      <span class="icon-off">Unactive</span>
                    </BButton>
                    <BButton variant="secondary" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changeconnect">
                      <span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i>
                        Connect</span>
                      <span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i>
                        Unconnect</span>
                    </BButton>
                    <BButton variant="success" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changeyes">
                      <span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                      <span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
                    </BButton>
                    <BButton variant="warning" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changecolorfollow">
                      <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i>
                        Follow</span>
                      <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i>
                        Unfollow</span>
                    </BButton>
                    <BButton variant="danger" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changecoloron">
                      <span class="icon-on">On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton variant="dark" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changecolorbookmark">
                      <span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i>
                        Bookmark</span>
                      <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i>
                        Unbookmark</span>
                    </BButton>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <BButton variant="outline-primary" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changeactive">
                      <span class="icon-on"> Active</span>
                      <span class="icon-off">Unactive</span>
                    </BButton>
                    <BButton variant="outline-secondary" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changefollow">
                      <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                      <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i>
                        Unfollow</span>
                    </BButton>
                    <BButton variant="outline-success" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changeonoff">
                      <span class="icon-on"> On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton variant="soft-warning" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changefollowsecond">
                      <span class="icon-on">Follow</span>
                      <span class="icon-off">Unfollow</span>
                    </BButton>
                    <BButton variant="soft-danger" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changeonoffsecond">
                      <span class="icon-on">On</span>
                      <span class="icon-off">Off</span>
                    </BButton>
                    <BButton variant="dark" type="button" class="custom-toggle" data-bs-toggle="button"
                      @click="changebookmark">
                      <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
                      <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Custom Toggle Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-alarm-line align-bottom&quot;&gt;&lt;/i&gt; Active&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-user-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Connect&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-check-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unconnect&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-thumb-up-line align-bottom me-1&quot;&gt;&lt;/i&gt; Yes&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-thumb-down-line align-bottom me-1&quot;&gt;&lt;/i&gt; No&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom me-1&quot;&gt;&lt;/i&gt; Bookmark&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unbookmark&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;Active&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-soft-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-soft-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Sizes" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>size="lg"</code> to create a large size button and
              <code>size="sm"</code> to create a small size button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <BButton variant="primary" size="lg">
                  Large button
                </BButton>
                <BButton variant="light" size="lg"> Large button </BButton>

                <BButton variant="primary" size="sm">
                  Small button
                </BButton>
                <BButton variant="light" size="sm"> Small button </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
&lt;BButton variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; size=&quot;lg&quot;&gt;Large button&lt;/BButton&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;BButton variant=&quot;primary&quot; size=&quot;sm&quot;&gt;Small button&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;light&quot; size=&quot;sm&quot;&gt;Small button&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Width" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized
              buttons respectively.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="w-xs waves-effect waves-light">
                  Xs
                </BButton>
                <BButton variant="danger" class="w-sm waves-effect waves-light">
                  Small
                </BButton>
                <BButton variant="warning" class="w-md waves-effect waves-light">
                  Medium
                </BButton>
                <BButton variant="success" class="w-lg waves-effect waves-light">
                  Large
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;w-xs waves-effect waves-light&quot;&gt;Xs&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;danger&quot; class=&quot;w-sm waves-effect waves-light&quot;&gt;Small&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;warning&quot; class=&quot;w-md waves-effect waves-light&quot;&gt;Medium&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;w-lg waves-effect waves-light&quot;&gt;Large&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Tag" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BButton</code> with different HTML elements. (though some
              browsers may apply a slightly different rendering)
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BLink class="btn btn-primary waves-effect waves-light" href="#" role="button">Link</BLink>
                <BButton variant="success" type="submit">
                  Button
                </BButton>
                <input class="btn btn-info" type="button" value="Input" />
                <input class="btn btn-danger" type="submit" value="Submit" />
                <input class="btn btn-warning" type="reset" value="Reset" />
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;BLink class=&quot;btn btn-primary waves-effect waves-light&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/BLink&gt;</code>

<code>&lt;BButton variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot; type=&quot;submit&quot;&gt;Button&lt;/BButton&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Base class" />

          <BCardBody>
            <p class="text-muted">
              Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content
              alignment. By default, <code>.btn</code> controls have a transparent border and background color, and lack
              any explicit focus and hover styles.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="link">Base class</BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre
                class="language-markup"><code>&lt;BButton class=&quot;btn&quot;&gt;Base class&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Custom sizing with CSS variables" />

          <BCardBody>
            <p class="text-muted">
              You can even roll your own custom sizing with CSS variables:
            </p>
            <div class="live-preview">
              <BButton variant="primary"
                style="--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;">
                Custom button
              </BButton>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"><code>&lt;BButton variant=&quot;primary&quot; style=&quot;--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;&quot;&gt;
Custom button
&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Toggle Status" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>data-bs-toggle="button"</code> to toggle a button’s active
              state.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" class="waves-effect waves-light" data-bs-toggle="button" aria-pressed="false">
                  Single toggle
                </BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Grid" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>block</code> class to create a full-width block button.
            </p>
            <div class="live-preview">
              <div class="d-grid gap-2">
                <BButton variant="primary" block>Button</BButton>
                <BButton variant="primary" block>Button</BButton>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;BButton variant=&quot;primary&quot;&gt;Button&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Button&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Checkbox & Radio Buttons" />

          <BCardBody>
            <p class="text-muted">
              Combine button-like
              <code>checkbox and radio</code>
              <BLink href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</BLink>
              into a seamless looking button group.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <BButton-group>
                  <BButton v-for="(btn, idx) in buttons" :key="idx" v-model:pressed="btn.state" variant="primary">
                    {{ btn.caption }}
                  </BButton>
                </BButton-group>



                <BButtonGroup class="btn-group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio1">Radio 1</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio2">Radio 2</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
                  <label class="btn btn-outline-secondary mb-0" for="btnradio3">Radio 3</label>
                </BButtonGroup>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;BButton-group role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;BButton-group role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/BButton-group&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Buttons Group" />

          <BCardBody>
            <p class="text-muted">
              Use the
              <code>-button-group</code> in the parent class to wrap a series
              of buttons.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol sm="6">

                  <BButton-group>
                    <BButton variant="primary">Left</BButton>
                    <BButton variant="primary">
                      Middle
                    </BButton>
                    <BButton variant="primary">Right</BButton>
                  </BButton-group>
                </BCol>
                <BCol sm="6">
                  <BButton-group class="mt-4 mt-sm-0">

                    <BButton variant="light" class="btn-icon">
                      <i class="ri-align-right"></i>
                    </BButton>
                    <BButton variant="light" class="btn-icon">
                      <i class="ri-align-center"></i>
                    </BButton>
                    <BButton variant="light" class="btn-icon">
                      <i class="ri-align-left"></i>
                    </BButton>
                  </BButton-group>


                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;BButton-group role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Left&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Middle&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group class=&quot;mt-4 mt-md-0&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;BButton variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;
&lt;/BButton-group&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <CardHeader title="Icon Buttons" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>btn-icon</code> class to wrap icon in button
            </p>
            <div class="live-preview">
              <BRow>
                <BCol sm="6">
                  <div class="hstack gap-2">
                    <BButton variant="primary" class="btn-icon waves-effect waves-light">
                      <i class="ri-map-pin-line"></i>
                    </BButton>
                    <BButton variant="danger" class="btn-icon waves-effect waves-light">
                      <i class="ri-delete-bin-5-line"></i>
                    </BButton>
                    <BButton variant="success" class="btn-icon waves-effect waves-light">
                      <i class="ri-check-double-line"></i>
                    </BButton>
                    <BButton variant="light" class="btn-icon waves-effect">
                      <i class="ri-brush-2-fill"></i>
                    </BButton>
                  </div>
                </BCol>
                <BCol sm="6">
                  <div class="hstack gap-2 mt-4 mt-sm-0">
                    <BButton variant="outline-primary" class="btn-icon waves-effect waves-light">
                      <i class="ri-24-hours-fill"></i>
                    </BButton>
                    <BButton variant="outline-danger" class="btn-icon waves-effect waves-light">
                      <i class="ri-customer-service-2-line"></i>
                    </BButton>
                    <BButton variant="outline-success" class="btn-icon waves-effect waves-light">
                      <i class="ri-mail-send-line"></i>
                    </BButton>
                    <BButton variant="outline-warning" class="btn-icon waves-effect waves-light">
                      <i class="ri-menu-2-line"></i>
                    </BButton>
                  </div>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;BButton variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;light&quot; class=&quot;btn-icon waves-effect&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>

<code>&lt;BButton variant=&quot;outline-primary &quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code>
<code>&lt;BButton variant=&quot;outline-warning&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/BButton&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Buttons Toolbar" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>btn-toolbar</code> class to combine sets of button groups
              into more complex components.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">

                <BButton-toolbar>
                  <BButton-group class="me-2">
                    <BButton variant="light">1</BButton>
                    <BButton variant="light">2</BButton>
                    <BButton variant="light">3</BButton>
                    <BButton variant="light">4</BButton>
                  </BButton-group>
                  <BButton-group class="me-2">
                    <BButton variant="light">5</BButton>
                    <BButton variant="light">6</BButton>
                    <BButton variant="light">7</BButton>
                  </BButton-group>
                  <BButton-group class="me-2">
                    <BButton variant="light">8</BButton>
                  </BButton-group>
                </BButton-toolbar>


              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Toolbar --&gt;
&lt;BButton-toolbar role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
&lt;BButton-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
&lt;BButton variant=&quot;light&quot;&gt;1&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;2&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;3&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;4&lt;/BButton&gt;
&lt;/BButton-group&gt;
&lt;BButton-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
&lt;BButton variant=&quot;light&quot;&gt;5&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;6&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;7&lt;/BButton&gt;
&lt;/BButton-group&gt;
&lt;BButton-group role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
&lt;BButton variant=&quot;light&quot;&gt;8&lt;/BButton&gt;
&lt;/BButton-group&gt;
&lt;/BButton-toolbar&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Button Group Sizing" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BButton-group size="</code> class with the below-mentioned variation
              to set the different sizes of button groups.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap align-items-center gap-2">

                <BButton-group size="lg" class="mt-2 btn-group">
                  <BButton variant="primary">Left</BButton>
                  <BButton variant="primary">Middle</BButton>
                  <BButton variant="primary">Right</BButton>
                </BButton-group>

                <BButton-group class="mt-2 btn-group">
                  <BButton variant="light">Left</BButton>
                  <BButton variant="light">Middle</BButton>
                  <BButton variant="light">Right</BButton>
                </BButton-group>

                <BButton-group size="sm" class="mt-2 btn-group">
                  <BButton variant="secondary">Left</BButton>
                  <BButton variant="secondary">Middle</BButton>
                  <BButton variant="secondary">Right</BButton>
                </BButton-group>


              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;BButton-group size=&quot;lg&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Left&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Middle&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code> 

<code>&lt;BButton-group size=&quot;md&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;BButton variant=&quot;light&quot;&gt;Left&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;Middle&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group size=&quot;sm&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;BButton variant=&quot;secondary&quot;&gt;Left&lt;/BButton&gt;
&lt;BButton variant=&quot;secondary&quot;&gt;Middle&lt;/BButton&gt;
&lt;BButton variant=&quot;secondary&quot;&gt;Right&lt;/BButton&gt;
&lt;/BButton-group&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Vertical Variation" />

          <BCardBody>
            <p class="text-muted">
              Make a set of buttons appear
              <code>vertically</code> stacked .Split button dropdowns are not
              supported here.
            </p>
            <div class="live-preview">
              <BRow>
                <div class="col-auto">
                  <BButtonGroup class="btn-group">
                    <BButton variant="primary">1</BButton>
                    <BButton variant="primary">2</BButton>
                    <BButtonGroup class="btn-group" role="group">
                      <BDropdown variant="primary" no-caret>
                        <template #button-content class="btn btn-primary btn-md dropdown-toggle"> Dropdown </template>
                        <BDropdownItem href="#">Dropdown link</BDropdownItem>
                        <BDropdownItem href="#">Dropdown link</BDropdownItem>
                      </BDropdown>
                    </BButtonGroup>
                  </BButtonGroup>
                </div>
                <div class="col-auto">
                  <BButtonGroup class="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <BButton class="btn btn-light">Button</BButton>
                    <BButtonGroup class="btn-group" role="group">
                      <BDropdown variant="light" id="btnGroupDrop1" text="Dropdown">
                        <BDropdownItem>Dropdown link</BDropdownItem>
                        <BDropdownItem>Dropdown link</BDropdownItem>
                      </BDropdown>
                    </BButtonGroup>
                    <BButton variant="light">Button</BButton>
                    <BButton variant="light">Button</BButton>
                  </BButtonGroup>
                </div>
                <div class="col-auto">
                  <BButtonGroup class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked />
                    <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2" />
                    <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3" />
                    <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
                  </BButtonGroup>
                </div>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Vertical Variation --&gt;
&lt;BButton-group role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
&lt;BButton variant=&quot;primary&quot;&gt;1&lt;/button&gt;
&lt;BButton variant=&quot;primary&quot;&gt;2&lt;/button&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;

&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-primary&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/BLink&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/BLink&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group vertical role=&quot;group&quot; &gt;
&lt;BButton variant=&quot;light&quot; &gt;Button&lt;/BButton&gt;
&lt;BButton-group role=&quot;group&quot;&gt;
&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-light&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/BLink&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/BLink&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/BButton-group&gt;
&lt;BButton variant=&quot;light&quot;&gt;Button&lt;/BButton&gt;
&lt;BButton variant=&quot;light&quot;&gt;Button&lt;/BButton&gt;
&lt;/BButton-group&gt;</code>

<code>&lt;BButton-group vertical role=&quot;group&quot; aria-label=&quot;Vertical radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/BButton-group&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Focus Ring" />

          <BCardBody>
            <p class="text-muted">Click directly on the link below to see the focus ring in action, or into the example
              below and then press <kbd>Tab</kbd>.</p>
            <div class="live-preview">
              <div class="d-flex gap-3">
                <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                  Focus ring
                </BLink>

                <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  style="--vz-focus-ring-color: rgba(118, 93, 255, .25)">
                  Custom focus ring
                </BLink>

                <BLink href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  style="--vz-focus-ring-x: 10px; --vz-focus-ring-y: 10px; --vz-focus-ring-blur: 4px">
                  Blurry offset focus ring
                </BLink>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot;&gt;
Focus ring
&lt;/BLink&gt;</code>

<code>&lt;!--custom focus ring color--&gt;
&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--vz-focus-ring-color: rgba(118, 93, 255, .25)&quot;&gt;
Custom focus ring
&lt;/BLink&gt;</code>

<code>&lt;!---custom blurry offset focus ring--&gt;
&lt;BLink href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--vz-focus-ring-x: 10px; --vz-focus-ring-y: 10px; --vz-focus-ring-blur: 4px&quot;&gt;
Blurry offset focus ring
&lt;/BLink&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Focus Ring Utilities" />

          <BCardBody>
            <p class="text-muted">In addition to <code>.focus-ring</code>, we have several <code>.focus-ring-*</code>
              utilities to modify the helper class defaults. Modify the color with any of our <BLink
                href="ui-colors.html">theme colors</BLink>. Note that the light and dark variants may not be visible on
              all background colors given current color mode support.</p>
            <div class="live-preview">
              <BRow>
                <div class="col-lg-6">
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">
                      Primary
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">
                      Secondary
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">
                      Success
                      focus</BLink>
                  </p>
                  <p class="mb-lg-0">
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">
                      Danger
                      focus</BLink>
                  </p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">
                      Warning
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
                      Info
                      focus</BLink>
                  </p>
                  <p>
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">
                      Light
                      focus</BLink>
                  </p>
                  <p class="mb-0">
                    <BLink href="#!"
                      class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">
                      Dark
                      focus</BLink>
                  </p>
                </div>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup"
                style="height: 275px;"><code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Primary focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Secondary focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Success focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Danger focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Warning focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Info focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Light focus&lt;/BLink&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;BLink href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Dark focus&lt;/BLink&gt;&lt;/p&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>
  </Layout>
</template>