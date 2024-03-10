<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
  data() {
    return {
      value: null,
      value1: null,
      value5: null,
      value2: null,
      value3: null,
      value4: null,
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date3: null,
    };
  },
  components: {
    Layout,
    PageHeader,
    CardHeader,
    Multiselect,
    flatPickr,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Layout" pagetitle="Forms" />
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Form Grid" />

          <BCardBody>
            <p class="text-muted">
              More complex forms can be built using our grid classes. Use these
              for form layouts that require multiple columns, varied widths, and
              additional alignment options.
              <span class="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to
                be enabled</span>
              (on by default).
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);">
                <BRow>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="firstNameinput" class="form-label">First Name</label>
                      <BFormInput type="text" class="form-control" placeholder="Enter your firstname" id="firstNameinput" />
                    </div>
                  </BCol>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="lastNameinput" class="form-label">Last Name</label>
                      <BFormInput type="text" class="form-control" placeholder="Enter your lastname" id="lastNameinput" />
                    </div>
                  </BCol>
                  <BCol md="12">
                    <div class="mb-3">
                      <label for="compnayNameinput" class="form-label">Company Name</label>
                      <BFormInput type="text" class="form-control" placeholder="Enter company name" id="compnayNameinput" />
                    </div>
                  </BCol>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="phonenumberInput" class="form-label">Phone Number</label>
                      <BFormInput type="tel" class="form-control" placeholder="+(245) 451 45123" id="phonenumberInput" />
                    </div>
                  </BCol>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="emailidInput" class="form-label">Email Address</label>
                      <BFormInput type="email" class="form-control" placeholder="example@gamil.com" id="emailidInput" />
                    </div>
                  </BCol>
                  <BCol md="12">
                    <div class="mb-3">
                      <label for="address1ControlTextarea" class="form-label">Address</label>
                      <BFormInput type="text" class="form-control" placeholder="Address 1" id="address1ControlTextarea" />
                    </div>
                  </BCol>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="citynameInput" class="form-label">City</label>
                      <BFormInput type="email" class="form-control" placeholder="Enter your city" id="citynameInput" />
                    </div>
                  </BCol>
                  <BCol md="6">
                    <div class="mb-3">
                      <label for="ForminputState" class="form-label">State</label>

                      <Multiselect v-model="value" :close-on-select="true" :searchable="true" :create-option="true"
                        :options="[
                          { value: 'choose', label: 'Choose...' },
                          { value: '...', label: '...' },
                        ]" />
                    </div>
                  </BCol>
                  <BCol lg="12">
                    <div class="text-end">
                      <BButton type="submit" variant="primary">
                        Submit
                      </BButton>
                    </div>
                  </BCol>
                </BRow>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;BForm action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;firstNameinput&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your firstname&quot; id=&quot;firstNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;lastNameinput&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your lastname&quot; id=&quot;lastNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;compnayNameinput&quot; class=&quot;form-label&quot;&gt;Company Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter company name&quot; id=&quot;compnayNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;phonenumberInput&quot; class=&quot;form-label&quot;&gt;Phone Number&lt;/label&gt;
&lt;BFormInput type=&quot;tel&quot; class=&quot;form-control&quot; placeholder=&quot;+(245) 451 45123&quot; id=&quot;phonenumberInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;emailidInput&quot; class=&quot;form-label&quot;&gt;Email Address&lt;/label&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;example@gamil.com&quot; id=&quot;emailidInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;address1ControlBFormTextarea&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Address 1&quot; id=&quot;address1ControlBFormTextarea&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;citynameInput&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your city&quot; id=&quot;citynameInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;ForminputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;ForminputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Gutters" />

          <BCardBody>
            <p class="text-muted">
              By adding
              <router-link to="/docs/5.1/layout/gutters/" class="text-decoration-underline">gutter modifier classes</router-link>, you can
              have control over the gutter width in as well the
              inline as block direction.
              <span class="fw-medium">Also requires the <code>$enable-grid-classes</code> Sass
                variable to be enabled</span>
              (on by default).
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);" class="row g-3">
                <BCol md="12">
                  <label for="fullnameInput" class="form-label">Name</label>
                  <BFormInput type="text" class="form-control" id="fullnameInput" placeholder="Enter your name" />
                </BCol>
                <BCol md="6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <BFormInput type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </BCol>
                <BCol md="6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <BFormInput type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </BCol>
                <BCol cols="12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <BFormInput type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </BCol>
                <BCol cols="12">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <BFormInput type="text" class="form-control" id="inputAddress2"
                    placeholder="Apartment, studio, or floor" />
                </BCol>
                <BCol md="6">
                  <label for="inputCity" class="form-label">City</label>
                  <BFormInput type="text" class="form-control" id="inputCity" placeholder="Enter your city" />
                </BCol>
                <BCol md="4">
                  <label for="inputState" class="form-label">State</label>

                  <Multiselect v-model="value2" :close-on-select="true" :searchable="true" :create-option="true"
                    :options="[
                      { value: 'choose', label: 'Choose...' },
                      { value: '...', label: '...' },
                    ]" />
                </BCol>
                <BCol md="2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <BFormInput type="text" class="form-control" id="inputZip" placeholder="Zin code" />
                </BCol>
                <BCol cols="12">
                  <div class="form-check d-flex">
                    <BFormCheckbox class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </BCol>
                <BCol cols="12">
                  <div class="text-end">
                    <BButton type="submit" variant="primary">
                      Sign in
                    </BButton>
                  </div>
                </BCol>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;BForm action=&quot;javascript:void(0);&quot; class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-md-12&quot;&gt;
&lt;label for=&quot;fullnameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;fullnameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputEmail4&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputPassword4&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
&lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword4&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress2&quot; class=&quot;form-label&quot;&gt;Address 2&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputCity&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputCity&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;inputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;inputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-2&quot;&gt;
&lt;label for=&quot;inputZip&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputZip&quot; placeholder=&quot;Zin code&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;BFormInput class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;gridCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;gridCheck&quot;&gt;
Check me out
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Vertical Form" />

          <BCardBody>
            <p class="text-muted">
              Example of vertical form using <code>form-control</code> class. No
              need to specify row and col class to create vertical form.
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);">
                <div class="mb-3">
                  <label for="employeeName" class="form-label">Employee Name</label>
                  <BFormInput type="text" class="form-control" id="employeeName" placeholder="Enter emploree name" />
                </div>
                <div class="mb-3">
                  <label for="employeeUrl" class="form-label">Employee Department URL</label>
                  <BFormInput type="url" class="form-control" id="employeeUrl" placeholder="Enter emploree url" />
                </div>
                <div class="mb-3">
                  <label for="StartleaveDate" class="form-label">Start Leave Date</label>

                  <flat-pickr v-model="date" class="form-control"></flat-pickr>
                </div>
                <div class="mb-3">
                  <label for="EndleaveDate" class="form-label">End Leave Date</label>

                  <flat-pickr v-model="date1" class="form-control"></flat-pickr>
                </div>
                <div class="mb-3">
                  <label for="VertimeassageInput" class="form-label">Message</label>
                  <BFormTextarea class="form-control" id="VertimeassageInput" rows="3"
                    placeholder="Enter your message"></BFormTextarea>
                </div>
                <div class="text-end">
                  <BButton type="submit" variant="primary">
                    Add Leave
                  </BButton>
                </div>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;BForm action=&quot;&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeName&quot; class=&quot;form-label&quot;&gt;Employee Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;employeeName&quot; placeholder=&quot;Enter emploree name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeUrl&quot; class=&quot;form-label&quot;&gt;Employee Department URL&lt;/label&gt;
&lt;BFormInput type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;employeeUrl&quot; placeholder=&quot;Enter emploree url&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;StartleaveDate&quot; class=&quot;form-label&quot;&gt;Start Leave Date&lt;/label&gt;
&lt;BFormInput type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;StartleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;EndleaveDate&quot; class=&quot;form-label&quot;&gt;End Leave Date&lt;/label&gt;
&lt;BFormInput type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;EndleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;VertimeassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;BFormTextarea class=&quot;form-control&quot; id=&quot;VertimeassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/BFormTextarea&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
&lt;/div&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Horizontal Form" />
          
          <BCardBody>
            <p class="text-muted">
              Create horizontal forms with the grid by adding the
              <code>row</code> class to form groups and using the
              <code>col-*-*</code> class to specify the width of your labels and
              controls. Be sure to add <code>col-form-label</code> class to your
              <code>&lt;label&gt;</code>s as well so they’re vertically centered
              with their associated form controls.
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);">
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="nameInput" class="form-label">Name</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormInput type="text" class="form-control" id="nameInput" placeholder="Enter your name" />
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="websiteUrl" class="form-label">Website URL</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormInput type="url" class="form-control" id="websiteUrl" placeholder="Enter your url" />
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="dateInput" class="form-label">Date</label>
                  </BCol>
                  <BCol lg="9">
                    <flat-pickr v-model="date3" class="form-control"></flat-pickr>
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="timeInput" class="form-label">Time</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormInput type="time" class="form-control" data-provider="timepickr" data-time-basic="true"
                      id="timeInput" />
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="leaveemails" class="form-label">Email Id</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormInput type="email" class="form-control" id="leaveemails" placeholder="Enter your email" />
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="contactNumber" class="form-label">Contact Number</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormInput type="number" class="form-control" id="contactNumber" placeholder="+91 9876543210" />
                  </BCol>
                </BRow>
                <BRow class="mb-3">
                  <BCol lg="3">
                    <label for="meassageInput" class="form-label">Message</label>
                  </BCol>
                  <BCol lg="9">
                    <BFormTextarea class="form-control" id="meassageInput" rows="3"
                      placeholder="Enter your message"></BFormTextarea>
                  </BCol>
                </BRow>
                <div class="text-end">
                  <BButton type="submit" variant="primary">
                    Add Leave
                  </BButton>
                </div>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;BForm action=&quot;&quot;&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;nameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;nameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;websiteUrl&quot; class=&quot;form-label&quot;&gt;Website URL&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;websiteUrl&quot; placeholder=&quot;Enter your url&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;dateInput&quot; class=&quot;form-label&quot;&gt;Date&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;dateInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;timeInput&quot; class=&quot;form-label&quot;&gt;Time&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;time&quot; class=&quot;form-control&quot; id=&quot;timeInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;leaveemails&quot; class=&quot;form-label&quot;&gt;Email Id&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;leaveemails&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;contactNumber&quot; class=&quot;form-label&quot;&gt;Contact Number&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormInput type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;contactNumber&quot; placeholder=&quot;+91 9876543210&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;meassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;BFormTextarea class=&quot;form-control&quot; id=&quot;meassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/BFormTextarea&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
&lt;/div&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Horizontal Form Label Sizing " />
          
          <BCardBody>
            <p class="text-muted">
              Use <code>col-form-label-sm</code> class to set small size form
              label or <code>col-form-label-lg</code> class to set large size
              form label to &lt;label&gt;. No such class is required for the
              default size form label.
            </p>
            <div class="live-preview">
              <BRow class="align-items-center g-3">
                <BCol xxl="4">
                  <BRow>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <BCol sm="10">
                      <BFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm"
                        placeholder="col-form-label-sm" />
                    </BCol>
                  </BRow>
                </BCol>
                <BCol xxl="4">
                  <BRow>
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <BCol sm="10">
                      <BFormInput type="email" class="form-control" id="colFormLabel" placeholder="col-form-label" />
                    </BCol>
                  </BRow>
                </BCol>
                <BCol xxl="4">
                  <BRow>
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <BCol sm="10">
                      <BFormInput type="email" class="form-control form-control-lg" id="colFormLabelLg"
                        placeholder="col-form-label-lg" />
                    </BCol>
                  </BRow>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Col Form Label Small --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabelSm&quot; class=&quot;col-sm-2 col-form-label col-form-label-sm&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-sm&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Default --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabel&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot; placeholder=&quot;col-form-label&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Large --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;lg&quot; class=&quot;col-sm-2 col-form-label col-form-label-lg&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-lg&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Column Sizing" />

          <BCardBody>
            <p class="text-muted">
              Use <code>col-sm-</code> class with required size value to set
              column size as per your requirement.
            </p>
            <div class="live-preview">
              <BRow class="g-3">
                <BCol sm="6">
                  <BFormInput type="text" class="form-control" placeholder="Firstname" aria-label="First-Name" />
                </BCol>
                <BCol sm="6">
                  <BFormInput type="text" class="form-control" placeholder="Lastname" aria-label="Last-Name" />
                </BCol>
                <BCol sm="4">
                  <BFormInput type="text" class="form-control" placeholder="Email id" aria-label="Email Id" />
                </BCol>
                <BCol sm="4">
                  <BFormInput type="password" class="form-control" placeholder="Password" aria-label="Password" />
                </BCol>
                <BCol sm="4">
                  <BFormInput type="password" class="form-control" placeholder="Confirm Password" aria-label="confirm-password" />
                </BCol>
                <BCol sm="7">
                  <BFormInput type="text" class="form-control" placeholder="City" aria-label="City" />
                </BCol>
                <BCol sm>
                  <BFormInput type="text" class="form-control" placeholder="State" aria-label="State" />
                </BCol>
                <BCol sm>
                  <BFormInput type="text" class="form-control" placeholder="Zip" aria-label="Zip" />
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Firstname&quot; aria-label=&quot;First-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Lastname&quot; aria-label=&quot;Last-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Email id&quot; aria-label=&quot;Email Id&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Password&quot; aria-label=&quot;Password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Confirm Password&quot; aria-label=&quot;confirm-password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-7&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot; aria-label=&quot;City&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot; aria-label=&quot;State&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot; aria-label=&quot;Zip&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Auto Sizing" />

          <BCardBody>
            <p class="text-muted">
              Change <code>col</code> class to <code>col-auto</code> class so
              that your columns only take up as much space as needed. Put
              another way, the column sizes itself based on the contents.
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);">
                <BRow class="gy-2 gx-3 mb-3 align-items-center">
                  <BCol sm="auto">
                    <label class="visually-hidden" for="autoSizingInput">Name</label>
                    <BFormInput type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe" />
                  </BCol>
                  <BCol sm="auto">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <BFormInput type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username" />
                    </div>
                  </BCol>
                  <BCol sm="auto">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>

                    <Multiselect class="w-lg" v-model="value3" :close-on-select="true" :searchable="true"
                      :create-option="true" :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]" />
                  </BCol>
                  <BCol sm="auto">
                    <div class="form-check d-flex">
                      <BFormCheckbox class="form-check-input" type="checkbox" id="autoSizingCheck" />
                      <label class="form-check-label" for="autoSizingCheck">
                        Remember me
                      </label>
                    </div>
                  </BCol>
                  <BCol sm="auto">
                    <BButton type="submit" variant="primary">
                      Submit
                    </BButton>
                  </BCol>
                </BRow>
              </BForm>

              <BForm action="javascript:void(0);">
                <BRow class="gx-3 gy-2 align-items-center">
                  <BCol sm="3">
                    <label class="visually-hidden" for="specificSizeInputName">Name</label>
                    <BFormInput type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe" />
                  </BCol>
                  <BCol sm="3">
                    <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <BFormInput type="text" class="form-control" id="specificSizeInputGroupUsername"
                        placeholder="Username" />
                    </div>
                  </BCol>
                  <BCol sm="3">
                    <label class="visually-hidden" for="specificSizeSelect">Preference</label>

                    <Multiselect v-model="value4" :close-on-select="true" :searchable="true" :create-option="true"
                      :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]" />
                  </BCol>
                  <div class="col-auto">
                    <div class="form-check d-flex">
                      <BFormCheckbox class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                      <label class="form-check-label" for="autoSizingCheck2">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-auto">
                    <BButton type="submit" variant="primary">
                      Submit
                    </BButton>
                  </div>
                </BRow>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;BForm action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row gy-2 gx-3 mb-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInput&quot;&gt;Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInput&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInputGroup&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInputGroup&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingSelect&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;autoSizingSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;BFormInput class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/BForm&gt;</code>

<code>&lt;BForm&gt;
&lt;div class=&quot;row gx-3 gy-2 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputName&quot;&gt;Name&lt;/label&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputName&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeSelect&quot;&gt;Preference&lt;/label&gt;
&lt;Multiselect class=&quot;form-select&quot; id=&quot;specificSizeSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/Multiselect&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;BFormInput class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck2&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Inline Forms" />

          <BCardBody>
            <p class="text-muted">
              Use <code>row-cols-*</code> class to set form inline.
            </p>
            <div class="live-preview">
              <BForm action="javascript:void(0);">
                <BRow class="row-cols-lg-auto g-3 align-items-center">
                  <BCol cols="12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <BFormInput type="text" class="form-control" id="inlineFormInputGroupUsername"
                        placeholder="Username" />
                    </div>
                  </BCol>
                  <BCol cols="12">
                    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>

                    <Multiselect class="w-md" v-model="value5" :close-on-select="true" :searchable="true"
                      :create-option="true" :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]" />
                  </BCol>
                  <BCol cols="12">
                    <div class="form-check d-flex">
                      <BFormCheckbox class="form-check-input" type="checkbox" id="inlineFormCheck" />
                      <label class="form-check-label" for="inlineFormCheck">
                        Remember me
                      </label>
                    </div>
                  </BCol>
                  <BCol cols="12">
                    <BButton type="submit" variant="primary">
                      Submit
                    </BButton>
                  </BCol>
                </BRow>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;BForm action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row row-cols-lg-auto g-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormSelectPref&quot;&gt;Preference&lt;/label&gt;
&lt;BFormSelect class=&quot;form-select&quot; id=&quot;inlineFormSelectPref&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/BFormSelect&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;BFormInput class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineFormCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineFormCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Floating Labels" />

          <BCardBody>
            <p class="text-muted">
              Use <code>form-floating</code> class to enable floating labels
              with Bootstrap’s textual form fields.
            </p>
            <div class="live-preview">
              <BForm action="#">
                <BRow class="g-3">
                  <BCol lg="6">
                    <div class="form-floating">
                      <BFormInput type="text" class="form-control" id="firstnamefloatingInput"
                        placeholder="Enter your firstname" />
                      <label for="firstnamefloatingInput">First Name</label>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="form-floating">
                      <BFormInput type="text" class="form-control" id="lastnamefloatingInput"
                        placeholder="Enter your Lastname" />
                      <label for="lastnamefloatingInput">Last Name</label>
                    </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormInput type="email" class="form-control" id="emailfloatingInput" placeholder="Enter your email" />
                      <label for="emailfloatingInput">Email Address</label>
                    </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormInput type="password" class="form-control" id="passwordfloatingInput"
                        placeholder="Enter your password" />
                      <label for="passwordfloatingInput">Password</label>
                    </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormInput type="password" class="form-control" id="passwordfloatingInput1"
                        placeholder="Confirm password" />
                      <label for="passwordfloatingInput1">Confirm Password</label>
                    </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormInput type="text" class="form-control" id="cityfloatingInput" placeholder="Enter your city" />
                      <label for="cityfloatingInput">City</label>
                    </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormSelect>
                          <option value="">Choose...</option>
                          <option value="1">USA</option>
                          <option value="2">Brazil</option>
                          <option value="3">France</option>
                          <option value="4">Germany</option>
                      </BFormSelect>
                      <label for="floatingSelect">Country</label>
                  </div>
                  </BCol>
                  <BCol lg="4">
                    <div class="form-floating">
                      <BFormInput type="number" class="form-control" id="zipfloatingInput"
                        placeholder="Enter your zipcode" />
                      <label for="zipfloatingInput">Zipcode</label>
                    </div>
                  </BCol>
                  <BCol lg="12">
                    <div class="text-end">
                      <BButton type="submit" variant="primary">
                        Submit
                      </BButton>
                    </div>
                  </BCol>
                </BRow>
              </BForm>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;BForm action=&quot;#&quot;&gt;
&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstnamefloatingInput&quot; placeholder=&quot;Enter your firstname&quot;&gt;
&lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastnamefloatingInput&quot; placeholder=&quot;Enter your Lastname&quot;&gt;
&lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailfloatingInput&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput&quot; placeholder=&quot;Enter your password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput1&quot; placeholder=&quot;Confirm password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;cityfloatingInput&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormSelect class=&quot;form-select&quot; id=&quot;floatingSelect&quot; aria-label=&quot;Floating label select example&quot;&gt;
&lt;option selected&gt;USA&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;Brazil&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;France&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Germany&lt;/option&gt;
&lt;/BFormSelect&gt;
&lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;BFormInput type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;zipfloatingInput&quot; placeholder=&quot;Enter your zipcode&quot;&gt;
&lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BForm&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
