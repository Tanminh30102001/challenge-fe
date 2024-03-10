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
  data() {
    return {
      exManualSelected: null,

      exMultiOptions: [
        { value: 'a', text: 'Open this select menu (select menu size)' },
        { value: 'b', text: 'One'},
        { value: 'c', text: 'Two' },
        { value: 'd', text: 'Three'},
        { value: 'e', text: 'Four' },
        { value: 'f', text: 'Five' },
      ],
      exMultiSelected: ['a']
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Select" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Default Select" />

          <BCardBody>
            <p class="text-muted">
              Use <code>&lt;select&gt;</code> attribute with numerous options to
              show value with choice's option.
            </p>
            <div class="live-preview">
              <BRow>
                <BCol lg="6">
                  <BFormSelect v-model="exManualSelected" class="mb-3" aria-label="Default select example">
                    <BFormSelectOption :value="null">Select your Status</BFormSelectOption>
                    <BFormSelectOption value="1">Declined Payment</BFormSelectOption>
                    <BFormSelectOption value="2">Delivery Error</BFormSelectOption>
                    <BFormSelectOption value="3">Wrong Amount</BFormSelectOption>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">
                  <BFormSelect v-model="exManualSelected" class="form-select rounded-pill mb-3"
                    aria-label="Default select example">
                    <BFormSelectOption :value="null">Search for services</BFormSelectOption>
                    <BFormSelectOption value="1">Information Architecture</BFormSelectOption>
                    <BFormSelectOption value="2">UI/UX Design</BFormSelectOption>
                    <BFormSelectOption value="3">Back End Development</BFormSelectOption>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">

                  <BFormSelect v-model="exManualSelected" class="form-select" aria-label="Disabled select example"
                    disabled>
                    <BFormSelectOption :value="null">Open this select menu (Disabled)</BFormSelectOption>
                    <BFormSelectOption value="1">One</BFormSelectOption>
                    <BFormSelectOption value="2">Two</BFormSelectOption>
                    <BFormSelectOption value="3">Three</BFormSelectOption>
                  </BFormSelect>

                </BCol>
              </BRow>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code> &lt;select class=&quot;form-select mb-3&quot; aria-label=&quot;Default select example&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code> &lt;select class=&quot;form-select rounded-pill mb-3&quot; aria-label=&quot;Default select example&quot;&gt;
    &lt;option selected&gt;Search for services&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;Information Architecture&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;UI/UX Design&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Back End Development&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select&quot; aria-label=&quot;Disabled select example&quot; disabled&gt;
    &lt;option selected&gt;Open this select menu (Disabled)&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Menu Size" />

          <BCardBody>
            <p class="text-muted">
              Use <code>multiple</code> attribute to select multiple values and
              <code>size="your value"</code> attribute to show a number of
              choice option within a select area.
            </p>
            <div class="live-preview">
              <BRow class="gy-4">
                <BCol lg="6">
                  <BFormSelect class="form-select" multiple aria-label="multiple select example">
                    <option selected>
                      Open this select menu (multiple select option)
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </BFormSelect>
                </BCol>
                <BCol lg="6">
                  <BFormSelect v-model="exMultiSelected" :options="exMultiOptions" multiple :select-size="3" />
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;select class=&quot;form-select&quot; multiple aria-label=&quot;multiple select example&quot;&gt;
    &lt;option selected&gt;Open this select menu (multiple select option)&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select&quot; size=&quot;3&quot; aria-label=&quot;size 3 select example&quot;&gt;
    &lt;option selected&gt;Open this select menu (select menu size)&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;option value=&quot;4&quot;&gt;Four&lt;/option&gt;
    &lt;option value=&quot;5&quot;&gt;Five&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Select Size" />

          <BCardBody>
            <p class="text-muted">
              Use <code>form-select-sm</code> class to set small select size and
              <code>form-select-lg</code> class to form-select class to set
              large select size. No such class is required for default select
              size.
            </p>
            <div class="live-preview">
              <BRow class="align-items-center g-3">
                <BCol lg="4">
                  <BFormSelect v-model="exManualSelected" class="form-select-sm" >
                    <BFormSelectOption :value="null">Open this select menu</BFormSelectOption>
                    <BFormSelectOption value="1">One</BFormSelectOption>
                    <BFormSelectOption value="2">Two</BFormSelectOption>
                    <BFormSelectOption value="3">Three</BFormSelectOption>
                  </BFormSelect>
                </BCol>
                <BCol lg="4">
                  <BFormSelect v-model="exManualSelected" class="form-select">
                    <BFormSelectOption :value="null">Open this select menu</BFormSelectOption>
                    <BFormSelectOption value="1">One</BFormSelectOption>
                    <BFormSelectOption value="2">Two</BFormSelectOption>
                    <BFormSelectOption value="3">Three</BFormSelectOption>
                  </BFormSelect>
                </BCol>
                <BCol lg="4">
                  <BFormSelect v-model="exManualSelected" class="form-select-lg">
                    <BFormSelectOption :value="null">Open this select menu</BFormSelectOption>
                    <BFormSelectOption value="1">One</BFormSelectOption>
                    <BFormSelectOption value="2">Two</BFormSelectOption>
                    <BFormSelectOption value="3">Three</BFormSelectOption>
                  </BFormSelect>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;select class=&quot;form-select form-select-sm  mb-3&quot; aria-label=&quot;.form-select-sm example&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select mb-3&quot; aria-label=&quot;.form-select-lg example&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code>

<code>&lt;select class=&quot;form-select form-select-lg&quot; aria-label=&quot;.form-select-lg example&quot;&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
    &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
