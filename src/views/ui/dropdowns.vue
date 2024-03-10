<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";
import simplebar from "simplebar-vue";
export default {
  components: {
    Layout,
    PageHeader,
    CardHeader,
    simplebar
  }
};
</script>
<template>
  <Layout>
    <PageHeader title="Dropdowns" pageTitle="Base UI" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Single Button Dropdown" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>b-dropdown</code> to create a dropdown toggle with
              &lt;button&gt; element.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">

                <BDropdown text="Dropdown button" variant="secondary">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here</BDropdownItem>
                </BDropdown>
                <BDropdown text="Dropdown link" variant="secondary" toggle-tag="a">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 300px">
    <code>&lt;!-- Single Button Dropdown --&gt;
    &lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; id=&quot;dropdownMenuButton&quot;&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
    &lt;/b-dropdown&gt;
    </code>
    <code>&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown link&quot;&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
    &lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
    &lt;/b-dropdown&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Color Variant" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BDropdown variant=""</code> class with below mentioned variation to color
              dropdown toggle.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">
                <div>
                  <BButtonGroup class="me-3">
                    <BDropdown variant="primary">
                      <template v-slot:button-content> Primary </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>

                  <BButtonGroup class="me-3">
                    <BDropdown variant="success">
                      <template v-slot:button-content> Success </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>

                  <BButtonGroup class="me-3">
                    <BDropdown variant="light">
                      <template v-slot:button-content> Light </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>
                  <BButtonGroup class="me-3">
                    <BDropdown variant="info">
                      <template v-slot:button-content> Info </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>
                  <BButtonGroup class="me-3">
                    <BDropdown variant="secondary">
                      <template v-slot:button-content> Secondary </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>

                  <BButtonGroup class="me-3">
                    <BDropdown variant="warning">
                      <template v-slot:button-content> Warning </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>
                  <BButtonGroup class="me-3">
                    <BDropdown variant="danger">
                      <template v-slot:button-content> Danger </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>

                  <BButtonGroup>
                    <BDropdown variant="dark">
                      <template v-slot:button-content> Dark </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                      <BDropdownDivider></BDropdownDivider>
                      <BDropdownItem href="javascript: void(0);">Separated link</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>
                </div>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Dropdown Variant --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;primary&quot; text=&quot;Primary&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;success&quot; text=&quot;Success&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Light&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;info&quot; text=&quot;Info&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Secondary&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;warning&quot; text=&quot;Warning&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;danger&quot; text=&quot;Danger&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;dark&quot; text=&quot;Dark&quot;&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem&quot; href=&quot;/#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;&lt;!-- /btn-group --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Split Button Dropdown" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BDropdown split</code> to create split button
              dropdowns as a single button dropdown.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">
                <BDropdown split text="Primary" variant="primary">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Success" variant="success">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Light" variant="light">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>


                <BDropdown split text="Info" variant="info">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Secondary" variant="secondary">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Warning" variant="warning">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Danger" variant="danger">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
                <BDropdown split text="Dark" variant="dark">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here...</BDropdownItem>
                </BDropdown>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Split Button Dropdown --&gt;

&lt;BDropdown split variant=&quot;primary&quot; text=&quot;Primary&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;suceess&quot; text=&quot;Success&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;light&quot; text=&quot;Light&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;info&quot; text=&quot;Info&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;secondary&quot; text=&quot;Secondary&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;Warning&quot; text=&quot;warning&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;danger&quot; text=&quot;Danger&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;BDropdown split variant=&quot;dark&quot; text=&quot;Dark&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Sizing" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BDropdown size="lg"</code> class to create a large size dropdown button
              and <code>BDropdown size="sm"</code> to create a small size dropdown button.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3 align-items-center">
                <BDropdown size="lg" variant="primary">
                  <template v-slot:button-content>
                    Large button
                  </template>
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                </BDropdown>

                <BDropdown size="lg" split text="Large split button" variant="light">
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                </BDropdown>

                <BDropdown size="sm" variant="primary">
                  <template v-slot:button-content>
                    Small button
                  </template>
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                </BDropdown>

                <BDropdown split text="Small split button" size="sm" variant="light">
                  <BDropdownItemButton>Action</BDropdownItemButton>
                  <BDropdownItemButton>Another action</BDropdownItemButton>
                  <BDropdownItemButton>Something else here</BDropdownItemButton>
                </BDropdown>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Dropdown Sizing --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown size=&quot;lg&quot; variant=&quot;primary&quot; text=&quot;Large button&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown split size=&quot;lg&quot; variant=&quot;light&quot; text=&quot;Large split button&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown size=&quot;sm&quot; variant=&quot;primary&quot; text=&quot;Small button&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>

<code>&lt;BButtonGroup&gt;
&lt;BDropdown split size=&quot;sm&quot; variant=&quot;light&quot; text=&quot;Small split button&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dark Dropdowns" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BDropdown menu-class="dropdown-menu-dark"</code> class onto an existing
              dropdown-menu to create dropdown items dark.
            </p>
            <div class="live-preview">
              <BDropdown text="Dropdown button" menu-class="dropdown-menu-dark" variant="light">
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
                <BDropdownDivider></BDropdownDivider>
                <BDropdownItemButton>Separated link</BDropdownItemButton>

              </BDropdown>

            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;!-- Dark Dropdowns --&gt;
&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; dark &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
</code>
  </pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Alignment options" />

          <BCardBody>
            <p class="text-muted">
              Dropdown demo with various
              <code>dropdown alignment</code> options.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">
                <BButtonGroup>
                  <BDropdown text="Dropdown" variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
                <BButtonGroup>
                  <BDropdown text="Right-aligned menu" end variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup>
                  <BDropdown text="Left-aligned, right-aligned lg" end toggle-class="dropdown-menu-lg-end"
                    variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup>
                  <BDropdown text="Right-aligned, left-aligned lg" toggle-class="dropdown-menu-lg-start"
                    variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="dropstart">
                  <BDropdown text="Dropstart" dropstart variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="dropend">
                  <BDropdown text="Dropend" dropend variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup class="dropup">
                  <BDropdown text="Dropup" dropup variant="secondary">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Alignment options --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; text=&quot;Dropdown&quot; id=&quot;dropdownMenuButton&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; right text=&quot;Right-aligned menu&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; right text=&quot;Left-aligned, right-aligned lg&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; left text=&quot;Right-aligned, left-aligned lg&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; dropleft text=&quot;Dropstart&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; dropright  text=&quot;Dropend&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;secondary&quot; dropup text=&quot;Dropup&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Options" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>data-bs-offset</code> or <code>data-bs-reference</code> to
              change the position of the dropdown.
            </p>

            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">

                <BDropdown id="dropdown-offset" variant="secondary" offset="10, 20" text="Offset" class="me-1">
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here</BDropdownItem>
                </BDropdown>

                <BDropdown variant="secondary" start split text="Reference">
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here...</BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Dropdown Options --&gt;
&lt;BDropdown variant=&quot;secondary&quot; offset="20" text=&quot;Offset&quot; id=&quot;dropdownMenuOffset&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
</code>

<code>
&lt;BButtonGroup&gt;
&lt;BDropdown split variant=&quot;secondary&quot; dropup text=&quot;Reference&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Auto Close Behavior" />

          <BCardBody>
            <p class="text-muted">
              By default, the dropdown menu is closed when clicking inside or
              outside the dropdown menu. You can use the
              <code>autoClose</code> option to change this behavior of the
              dropdown.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-3">
                <BButtonGroup>
                  <BDropdown text="Default dropdown" variant="light">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup>

                  <BButtonGroup>
                    <BDropdown text="Clickable outside" variant="light" auto-close="inside">
                      <BDropdownItem href="#">Menu item</BDropdownItem>
                      <BDropdownItem href="#">Menu item</BDropdownItem>
                      <BDropdownItem href="#">Menu item</BDropdownItem>
                    </BDropdown>
                  </BButtonGroup>
                </BButtonGroup>

                <BButtonGroup>
                  <BDropdown text="Clickable inside" variant="light" auto-close="outside">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <BButtonGroup>
                  <BDropdown text="Manual close" variant="light" :auto-close="false">
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                    <BDropdownItem href="#">Menu item</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Default dropdown --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Default dropdown&quot; id=&quot;defaultDropdown&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>&lt;!-- Clickable outside dropdown --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Clickable outside&quot; auto-close=&quot;inside&quot; id=&quot;dropdownMenuClickableOutside&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>&lt;!-- Clickable inside dropdown --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Clickable inside&quot; auto-close=&quot;outside&quot; id=&quot;dropdownMenuClickableInside&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
<code>&lt;!-- Manual close dropdown --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Manual close&quot; :auto-close=&quot;false&quot; id=&quot;dropdownMenuClickable&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Menu item&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>
</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Dropdown Menu Item Color" />

          <BCardBody>
            <p class="text-muted">
              Example of dropdown menu and dropdown item color.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol xxl="3">
                  <div>
                    <h6 class="font-size-13 mb-3">
                      Dropdown Menu Success link example
                    </h6>
                    <div class="clearfix">
                      <div class="dropdown-menu d-inline-block position-relative dropdownmenu-success" style="z-index: 1">
                        <BLink class="dropdown-item" href="#">Action</BLink>
                        <BLink class="dropdown-item" href="#">Another action</BLink>
                        <BLink class="dropdown-item active" href="#">Something else here</BLink>
                        <div class="dropdown-divider"></div>
                        <BLink class="dropdown-item" href="#">Separated link</BLink>
                      </div>
                    </div>
                  </div>
                </BCol>

                <BCol lg="9">
                  <div class="mt-lg-0 mt-3">
                    <h6 class="font-size-13 mb-0">
                      Dropdown Menu link Color example
                    </h6>
                    <div>
                      <BRow>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Primary link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Primary" variant="primary" menu-class="dropdownmenu-primary">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Secondary link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Secondary" variant="secondary" menu-class="dropdownmenu-secondary">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Success link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Success" variant="success" menu-class="dropdownmenu-success">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Warning link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Warning" variant="warning" menu-class="dropdownmenu-warning">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Info link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Info" variant="info" menu-class="dropdownmenu-info">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                        <BCol lg="4" sm="6">
                          <div class="mt-3">
                            <p class="font-size-13 mb-2">
                              Dropdown menu Danger link
                            </p>
                            <BButtonGroup>
                              <BDropdown text="Danger" variant="danger" menu-class="dropdownmenu-danger">
                                <BDropdownItem href="#">Action</BDropdownItem>
                                <BDropdownItem href="#">Another action</BDropdownItem>
                                <BDropdownItem href="#">Something else here</BDropdownItem>
                                <BDropdownDivider></BDropdownDivider>
                                <BDropdownItem href="#">Separated link</BDropdownItem>
                              </BDropdown>
                            </BButtonGroup>
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Dropdown Menu Item Color --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Primary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-primary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Secondary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-secondary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Success&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-success&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Warning&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-warning&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Info&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-info&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Danger&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-danger&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Menu Content" />

          <BCardBody>
            <p class="text-muted">
              Example of dropdown menu containing
              <code>Headers, Text and Forms</code> content.
            </p>
            <div class="live-preview">
              <div class="d-flex flex-wrap gap-2">
                <!-- Header -->
                <BButtonGroup>
                  <BDropdown variant="primary" text="Header">
                    <BDropdownHeader> Welcome Jessie! </BDropdownHeader>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else here</BDropdownItem>
                    <BDropdownDivider></BDropdownDivider>
                    <BDropdownItem>Separated link</BDropdownItem>
                  </BDropdown>
                </BButtonGroup>

                <!-- Text -->
                <BButtonGroup>
                  <BDropdown variant="success" text="Text" menu-class="dropdown-menu-md p-3">
                    <p>Some example text that's free-flowing within the dropdown menu.</p>
                    <p class="mb-0">And this is more example text.</p>
                  </BDropdown>
                </BButtonGroup>

                <!-- Forms -->
                <BButtonGroup>
                  <BDropdown variant="light" text="Forms" menu-class="dropdown-menu-md p-4">
                    <form>
                      <div class="mb-2">
                        <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail"
                          placeholder="email@example.com" />
                      </div>
                      <div class="mb-2">
                        <label class="form-label" for="exampleDropdownFormPassword">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword"
                          placeholder="Password" />
                      </div>
                      <div class="mb-2">
                        <div class="form-check custom-checkbox">
                          <input type="checkbox" class="form-check-input" id="rememberdropdownCheck" />
                          <label class="form-check-label" for="rememberdropdownCheck">Remember me</label>
                        </div>
                      </div>
                      <BButton variant="primary" type="submit"> Sign in </BButton>
                    </form>
                  </BDropdown>
                </BButtonGroup>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Menu Content --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;primary&quot; text=&quot;Header&quot; &gt;
&lt;BDropdownHeader&gt;Welcome Jessie! &lt;/BDropdownHeader&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Another action&lt;/BDropdownItem&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Something else here&lt;/BDropdownItem&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;Separated link&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>


<code>&lt;!-- text Content --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;success&quot; text=&quot;Text&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;&lt;p&gt;
Some example text that's free-flowing within the dropdown menu.
&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;
And this is more example text.
&lt;/p&gt;&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>


<code>&lt;!-- Forms Content --&gt;
&lt;BButtonGroup&gt;
&lt;BDropdown variant=&quot;light&quot; text=&quot;Forms&quot; &gt;
&lt;BDropdownItem href=&quot;#&quot;&gt;&lt;form&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormEmail&quot;&gt;Email address&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormPassword&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;div class=&quot;form-check custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;rememberdropdownCheck&quot;&gt;
    &lt;label class=&quot;form-check-label&quot; for=&quot;rememberdropdownCheck&quot;&gt;Remember me&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;&lt;/BDropdownItem&gt;
&lt;/b-dropdown&gt;
&lt;/BButtonGroup&gt;</code>

</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Notifications" />

          <BCardBody>
            <p class="text-muted">
              Dropdown with notification containing multiple tabs.
            </p>
            <div class="live-preview">
              <BRow class="g-3">
                <BCol xxl="3" lg="5" md="6">
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                    aria-labelledby="page-header-notifications-dropdown" style="z-index: 1">
                    <div class="dropdown-head bg-primary bg-pattern rounded-top">
                      <div class="p-3">
                        <BRow class="align-items-center">
                          <BCol>
                            <h6 class="m-0 fs-16 fw-semibold text-light">
                              Notifications
                            </h6>
                          </BCol>
                          <div class="col-auto dropdown-tabs">
                            <BBadge variant="light-subtle" class="bg-light-subtle text-body fs-13"
                              data-key="t-view-all">4 New</BBadge>
                          </div>
                        </BRow>
                      </div>
                    </div>
                    <div class="pb-2">
                      <BTabs nav-class="mb-3  dropdown-tabs nav-tab-custom bg-primary px-2 ">
                        <BTab title="All (4)" active>
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                            <div class="text-reset notification-item d-block dropdown-item position-relative">
                              <div class="d-flex">
                                <div class="avatar-xs me-3 flex-shrink-0">
                                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                    <i class="bx bx-badge-check"></i>
                                  </span>
                                </div>
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-2 lh-base">
                                      Your <b>Elite</b> author Graphic Optimization
                                      <span class="text-secondary">reward</span> is
                                      ready!
                                    </h6>
                                  </BLink>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item position-relative">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs flex-shrink-0"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Angela Bernier
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Answered to your comment on the cash flow forecast's graph 🔔.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 48 min ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item position-relative">
                              <div class="d-flex">
                                <div class="avatar-xs me-3 flex-shrink-0">
                                  <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                    <i class="bx bx-message-square-dots"></i>
                                  </span>
                                </div>
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-2 fs-13 lh-base">
                                      You have received <b class="text-success">20</b> new messages in the conversation
                                    </h6>
                                  </BLink>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 2 hrs
                                      ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item position-relative">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs flex-shrink-0"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Maureen Gibson
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 4 hrs
                                      ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="my-3 text-center">
                              <BButton type="button" variant="soft-success">
                                View All Notifications
                                <i class="ri-arrow-right-line align-middle"></i>
                              </BButton>
                            </div>
                          </simplebar>
                          <!-- </div> -->
                        </BTab>
                        <BTab title="Messages">
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      James Lemire
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 30 min ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Angela Bernier
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Answered to your comment on the cash flow
                                      forecast's graph 🔔.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 2 hrs
                                      ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-6.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Kenneth Brown
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Mentionned you in his comment on 📃 invoice
                                      #12501.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 10 hrs
                                      ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!" class="stretched-link">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Maureen Gibson
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span><i class="mdi mdi-clock-outline"></i> 3 days
                                      ago</span>
                                  </p>
                                </div>
                                <div class="px-2 fs-15">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>
          
                            <div class="my-3 text-center">
                              <BButton type="button" variant="soft-success">
                                View All Messages
                                <i class="ri-arrow-right-line align-middle"></i>
                              </BButton>
                            </div>
                          </simplebar>
                        </BTab>
                        <BTab title="Alerts">
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                            <div class="w-25 w-sm-50 pt-3 mx-auto">
                              <img src="@/assets/images/svg/bell.svg" class="img-fluid" alt="user-pic" />
                            </div>
                            <div class="text-center pb-5 mt-2">
                              <h6 class="fs-18 fw-semibold lh-base">
                                Hey! You have no any notifications
                              </h6>
                            </div>
                          </simplebar>
                        </BTab>
                      </BTabs>
                    </div>
                  </div>
                </BCol>

                <BCol xxl="3" lg="5" md="6">
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                    aria-labelledby="page-header-notifications-dropdown" style="z-index: 1">
                    <div class="dropdown-head bg-success bg-pattern rounded-top">
                      <div class="p-3">
                        <BRow class="align-items-center">
                          <BCol>
                            <h6 class="m-0 fs-16 fw-semibold text-white">
                              Notifications
                            </h6>
                          </BCol>
                          <div class="col-auto dropdown-tabs">
                            <BBadge variant="light-subtle" class="bg-light-subtle text-body fs-13"
                              data-key="t-view-all">4 New</BBadge>
                          </div>
                        </BRow>
                      </div>
                    </div>
                      <div class="pb-2">
                      <BTabs nav-class="mb-3  dropdown-tabs nav-tab-custom bg-success px-2 ">
                        <BTab title="All (4)" active>
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                          <!-- <div data-simplebar style="max-height: 300px" class="pe-2"> -->
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-xs me-3">
                                  <span class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                    <i class="bx bx-badge-check"></i>
                                  </span>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mt-0 mb-2 lh-base">
                                    Your
                                    <b>Elite</b> author Graphic Optimization
                                    <span class="text-secondary">reward</span> is
                                    ready!
                                  </h6>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> Just
                                      30 sec ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Angela Bernier
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Answered to your comment on the cash flow
                                      forecast's graph 🔔.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 48 min
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-xs me-3">
                                  <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                    <i class="bx bx-message-square-dots"></i>
                                  </span>
                                </div>
                                <div class="flex-grow-1">
                                  <h6 class="mt-0 mb-2 fs-13 lh-base">
                                    You have received
                                    <b class="text-success">20</b> new messages in
                                    the conversation
                                  </h6>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 2 hrs
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Maureen Gibson
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 4 hrs
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="my-3 text-center">
                              <BButton variant="soft-success" type="button">
                                View All Notifications
                                <i class="ri-arrow-right-line align-middle"></i>
                              </BButton>
                            </div>
                          <!-- </div> -->
                          <!-- </div> -->
                        </simplebar>
                        </BTab>
                        <BTab title="Messages">
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">

                          <!-- <div class="tab-pane fade py-2 ps-2" id="messages-tab1" role="tabpanel"
                          aria-labelledby="messages-tab"> -->
                          <!-- <div data-simplebar style="max-height: 300px" class="pe-2"> -->
                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      James Lemire
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 30 min
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Angela Bernier
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Answered to your comment on the cash flow
                                      forecast's graph 🔔.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 2 hrs
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-6.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Kenneth Brown
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      Mentionned you in his comment on 📃 invoice
                                      #12501.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 10 hrs
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="text-reset notification-item d-block dropdown-item">
                              <div class="d-flex">
                                <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                                  alt="user-pic" />
                                <div class="flex-grow-1">
                                  <BLink href="#!">
                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                      Maureen Gibson
                                    </h6>
                                  </BLink>
                                  <div class="fs-13 text-muted">
                                    <p class="mb-1">
                                      We talked about a project on linkedin.
                                    </p>
                                  </div>
                                  <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    <span>
                                      <i class="mdi mdi-clock-outline"></i> 3 days
                                      ago
                                    </span>
                                  </p>
                                </div>
                                <div class="px-2 fs-16">
                                  <input class="form-check-input" type="checkbox" />
                                </div>
                              </div>
                            </div>

                            <div class="my-3 text-center">
                              <BButton variant="soft-success" type="button">
                                View All Messages
                                <i class="ri-arrow-right-line align-middle"></i>
                              </BButton>
                            </div>
                          <!-- </div> -->
                          <!-- </div> -->
                        </simplebar>
                        </BTab>
                        <BTab title="Alerts">
                          <simplebar data-simplebar style="max-height: 300px" class="pe-2">

                           <!-- <div class="tab-pane fade p-4" id="alerts-tab1" role="tabpanel" aria-labelledby="alerts-tab"> -->
                          <div class="w-25 pt-3 mx-auto">
                            <img src="@/assets/images/svg/bell.svg" class="img-fluid" alt="user-pic" />
                          </div>
                          <div class="text-center pb-5 mt-2">
                            <h6 class="fs-18 fw-semibold lh-base">
                              Hey! You have no any notifications
                            </h6>
                          </div>
                          <!-- </div> -->
                        </simplebar>
                        </BTab>
                      </BTabs>
                    </div>
                    </div>
                </BCol>

                <BCol xxl="3" lg="5" md="6">
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                    aria-labelledby="page-header-notifications-dropdown" style="z-index: 1">
                    <div class="dropdown-head bg-secondary bg-pattern rounded-top">
                      <div class="p-3">
                        <BRow class="align-items-center">
                          <BCol>
                            <h6 class="m-0 fs-16 fw-semibold text-white">
                              Notifications
                            </h6>
                          </BCol>
                          <div class="col-auto dropdown-tabs">
                            <BBadge variant="light-subtle" class="bg-light-subtle text-body fs-13"
                              data-key="t-view-all">4 New</BBadge>
                          </div>
                        </BRow>
                        </div>
                      </div>
                        <div class="pb-2">
                        <BTabs nav-class="mb-3  dropdown-tabs nav-tab-custom bg-secondary px-2 ">
                          <BTab title="All (4)" active>
                            <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 avatar-xs me-3">
                                    <span class="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                      <i class="bx bx-badge-check"></i>
                                    </span>
                                  </div>
                                  <div class="flex-grow-1">
                                    <h6 class="mt-0 mb-2 lh-base">
                                      Your
                                      <b>Elite</b> author Graphic Optimization
                                      <span class="text-secondary">reward</span> is
                                      ready!
                                    </h6>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> Just
                                        30 sec ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        Angela Bernier
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        Answered to your comment on the cash flow
                                        forecast's graph 🔔.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 48 min
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 avatar-xs me-3">
                                    <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                      <i class="bx bx-message-square-dots"></i>
                                    </span>
                                  </div>
                                  <div class="flex-grow-1">
                                    <h6 class="mt-0 mb-2 fs-13 lh-base">
                                      You have received
                                      <b class="text-success">20</b> new messages in
                                      the conversation
                                    </h6>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 2 hrs
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        Maureen Gibson
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        We talked about a project on linkedin.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 4 hrs
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="my-3 text-center">
                                <BButton variant="soft-success" type="button">
                                  View All Notifications
                                  <i class="ri-arrow-right-line align-middle"></i>
                                </BButton>
                              </div>
                            </simplebar>
                          </BTab>
                          <BTab title="Messages">
                            <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        James Lemire
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        We talked about a project on linkedin.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 30 min
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        Angela Bernier
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        Answered to your comment on the cash flow
                                        forecast's graph 🔔.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 2 hrs
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-6.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        Kenneth Brown
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        Mentionned you in his comment on 📃 invoice
                                        #12501.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 10 hrs
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="text-reset notification-item d-block dropdown-item">
                                <div class="d-flex">
                                  <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                                    alt="user-pic" />
                                  <div class="flex-grow-1">
                                    <BLink href="#!">
                                      <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                        Maureen Gibson
                                      </h6>
                                    </BLink>
                                    <div class="fs-13 text-muted">
                                      <p class="mb-1">
                                        We talked about a project on linkedin.
                                      </p>
                                    </div>
                                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                      <span>
                                        <i class="mdi mdi-clock-outline"></i> 3 days
                                        ago
                                      </span>
                                    </p>
                                  </div>
                                  <div class="px-2 fs-16">
                                    <input class="form-check-input" type="checkbox" />
                                  </div>
                                </div>
                              </div>
  
                              <div class="my-3 text-center">
                                <BButton variant="soft-success" type="button">
                                  View All Messages
                                  <i class="ri-arrow-right-line align-middle"></i>
                                </BButton>
                              </div>
                            </simplebar>
                            <!-- </div> -->
                          </BTab>
                          <BTab title="Alerts">
                            <simplebar data-simplebar style="max-height: 300px" class="pe-2">
                            <!-- <div class="tab-pane fade p-4" id="alerts-tab1" role="tabpanel" aria-labelledby="alerts-tab"> -->
                            <div class="w-25 pt-3 mx-auto">
                              <img src="@/assets/images/svg/bell.svg" class="img-fluid" alt="user-pic" />
                            </div>
                            <div class="text-center pb-5 mt-2">
                              <h6 class="fs-18 fw-semibold lh-base">
                                Hey! You have no any notifications
                              </h6>
                            </div>
                            <!-- </div> -->
                          </simplebar>

                          </BTab>
                        </BTabs>
                      </div>
                      </div>
                  </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Notifications --&gt;
&lt;BDropdown size=&quot;lg&quot; variant=&quot;primary&quot; class=&quot; dropdown-menu-end p-0 d-inline-block position-relative&quot; id=&quot;dropdownMenuButton&quot;&gt;
&lt;BDropdownHeader&gt;&lt;div class=&quot;col&quot;&gt;
    &lt;h6 class=&quot;m-0 fs-16 fw-semibold text-white&quot;&gt; Notifications &lt;/h6&gt;
&lt;/div&gt;
&lt;div class=&quot;col-auto dropdown-tabs&quot;&gt;
    &lt;span class=&quot;badge bg-light-subtle text-body fs-13&quot; data-key=&quot;t-view-all&quot;&gt; 4 New&lt;/span&gt;
&lt;/div&gt; &lt;/BDropdownHeader&gt;

&lt;BCard&gt;
  &lt;BTabs content-class="mt-3" fill&gt;
    &lt;BTab title="All (4)" active&gt;
    &lt;div data-simplebar style=&quot;max-height: 300px;&quot; class=&quot;pe-2&quot;&gt;
&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;div class=&quot;avatar-xs me-3&quot;&gt;
            &lt;span class=&quot;avatar-title bg-info-subtle text-info rounded-circle fs-16&quot;&gt;
                &lt;i class=&quot;bx bx-badge-check&quot;&gt;&lt;/i&gt;
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-2 lh-base&quot;&gt;Your &lt;b&gt;Elite&lt;/b&gt; author Graphic Optimization &lt;span class=&quot;text-secondary&quot;&gt;reward&lt;/span&gt; is ready!&lt;/h6&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; Just 30 sec ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-2.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Angela Bernier&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Answered to your comment on the cash flow forecast's graph 🔔.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 48 min ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;div class=&quot;avatar-xs me-3&quot;&gt;
            &lt;span class=&quot;avatar-title bg-danger-subtle text-danger rounded-circle fs-16&quot;&gt;
                &lt;i class='bx bx-message-square-dots' &gt;&lt;/i&gt;
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-2 fs-13 lh-base&quot;&gt;You have received &lt;b class=&quot;text-success&quot;&gt;20&lt;/b&gt; new messages in the conversation&lt;/h6&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 2 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-8.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Maureen Gibson&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 4 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;div class=&quot;my-3 text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-soft-success waves-effect waves-light&quot;&gt;View All Notifications &lt;i class=&quot;ri-arrow-right-line align-middle&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/BTab&gt;

    &lt;BTab title="Messages"&gt;
    &lt;div data-simplebar style=&quot;max-height: 300px;&quot; class=&quot;pe-2&quot;&gt;
&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-3.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;James Lemire&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 30 min ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-2.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Angela Bernier&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Answered to your comment on the cash flow forecast's graph 🔔.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 2 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-6.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Kenneth Brown&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Mentionned you in his comment on 📃 invoice #12501.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 10 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-8.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Maureen Gibson&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 3 days ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;div class=&quot;my-3 text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-soft-success waves-effect waves-light&quot;&gt;View All Messages &lt;i class=&quot;ri-arrow-right-line align-middle&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/BTab&gt;

    &lt;BTab title="Alerts"&gt;
    &lt;div class=&quot;w-50 pt-3 mx-auto&quot;&gt;
&lt;img src=&quot;assets/images/svg/bell.svg&quot; class=&quot;img-fluid&quot; alt=&quot;user-pic&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center pb-5 mt-2&quot;&gt;
&lt;h6 class=&quot;fs-18 fw-semibold lh-base&quot;&gt;Hey! You have no any notifications &lt;/h6&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/BTab&gt;

  &lt;/BTabs&gt;
&lt;/BCard&gt;
&lt;/b-dropdown&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
