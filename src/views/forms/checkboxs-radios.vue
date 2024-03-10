<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
    data() {
    return {
      checkbox1: false,
      checkbox2: true,
      checkbox21: true,
      checkbox22: true,
      checkbox23: true,
      checkbox24: true,
      checkbox25: true,
      checkbox26: true,
      checkbox27: true,
      checkbox28: true,
      checkbox29: true,
      checkbox30: true,
      checkbox31: true,
      checkbox32: true,
      checkbox33: true,
      checkbox3: false,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: null,
      radio1: 'default',
      radio2: 'disabled',
      radio3: 'right',
      colorRadio: null,
    };
  },
    components: {
        Layout,
        PageHeader,
        CardHeader
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="Checkboxs & Radios" pageTitle="Forms" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Checkbox" />
                    <BCardBody>
                        <div class="live-preview">
                            <BRow>
                                <BCol lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Default Checkbox</p>
                                        <p class="text-muted">Use <code>type="checkbox"</code> attribute to set a checkbox and add
                                          <code>checked</code> attribute to set a checkbox checked by default.
                                        </p>
                                        <BFormGroup class="mb-2">
                                          <BFormCheckbox v-model="checkbox1" id="formCheck1">Default checkbox</BFormCheckbox>
                                        </BFormGroup>
                                        <BFormGroup class="mb-2">
                                          <BFormCheckbox v-model="checkbox2" id="formCheck2">Checked checkbox</BFormCheckbox>
                                        </BFormGroup>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Checkbox</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a checkbox disabled and add
                                          <code>checked</code> attribute to set a checkbox checked by default.
                                        </p>
                                        <div>
                                          <BFormGroup class="form-check-right mb-2">
                                            <BFormCheckbox v-model="checkbox3" id="flexCheckDisabled" disabled>Disabled checkbox
                                            </BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                        <div>
                                          <BFormGroup class="form-check-right mb-2">
                                            <BFormCheckbox v-model="checkbox4" id="flexCheckCheckedDisabled" disabled>Disabled checked
                                              checkbox</BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Checkbox Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a checkbox on
                                          the right side.</p>
                                        <BFormGroup class="form-check-right mb-2">
                                          <BFormCheckbox v-model="checkbox5" id="formCheckboxRight1">Form Radio Right</BFormCheckbox>
                                        </BFormGroup>
                                        <div>
                                          <BFormGroup class="form-check-right mb-2">
                                            <BFormCheckbox v-model="checkbox6" id="flexCheckCheckedRightDisabled" disabled>Disabled checked
                                              checkbox</BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="mt-3">
                                        <p class="text-muted fw-medium">Indeterminate</p>
                                        <div>
                                          <BFormGroup>
                                            <BFormCheckbox v-model="checkbox7" id="defaultIndeterminateCheck" indeterminate>Indeterminate
                                              checkbox</BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Example --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck1&quot;&gt;
Default checkbox
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck2&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck2&quot;&gt;
Checked checkbox
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Checkbox --&gt;
&lt;div class=&quot;form-check form-check-right mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; name=&quot;formCheckboxRight&quot; id=&quot;formCheckboxRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheckboxRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked checkbox
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Checkbox Right --&gt;
&lt;div class=&quot;form-check form-check-right mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; name=&quot;formCheckboxRight&quot; id=&quot;formCheckboxRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheckboxRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked checkbox
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Indeterminate --&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckIndeterminate&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckIndeterminate&quot;&gt;
Indeterminate checkbox
&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Custom Checkboxes" />
                    <BCardBody>
                        <div class="live-preview">
                            <BRow>
                                <BCol md="6">
                                    <div>
                                        <div>
                                          <BFormGroup class="form-check-primary mb-3">
                                            <BFormCheckbox v-model="checkbox2" id="formCheck6">Checkbox Primary</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-secondary mb-3">
                                            <BFormCheckbox v-model="checkbox21" id="formCheck7">Checkbox Secondary</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-success mb-3">
                                            <BFormCheckbox v-model="checkbox22" id="formCheck8">Checkbox Success</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-warning mb-3">
                                            <BFormCheckbox v-model="checkbox23" id="formCheck9">Checkbox Warning</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-danger mb-3">
                                            <BFormCheckbox v-model="checkbox24" id="formCheck10">Checkbox Danger</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-info mb-3">
                                            <BFormCheckbox v-model="checkbox25" id="formCheck11">Checkbox Info</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-dark mb-3">
                                            <BFormCheckbox v-model="checkbox26" id="formCheck12">Checkbox Dark</BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted">Use <code>form-check-outline</code> class and <code>form-check-</code> class
                                          with
                                          below-mentioned color variation to set a color checkbox with outline.</p>
                                        <div>
                                          <BFormGroup class="form-check-outline form-check-primary mb-3">
                                            <BFormCheckbox v-model="checkbox27" id="formCheck13"
                                              class="form-check-outline form-check-primary">Checkbox Outline Primary</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-secondary mb-3">
                                            <BFormCheckbox v-model="checkbox28" id="formCheck14"
                                              class="form-check-outline form-check-secondary">Checkbox Outline Secondary</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-success mb-3">
                                            <BFormCheckbox v-model="checkbox29" id="formCheck15"
                                              class="form-check-outline form-check-success">Checkbox Outline Success</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-warning mb-3">
                                            <BFormCheckbox v-model="checkbox30" id="formCheck16"
                                              class="form-check-outline form-check-warning">Checkbox Outline Warning</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-danger mb-3">
                                            <BFormCheckbox v-model="checkbox31" id="formCheck17" class="form-check-outline form-check-danger">
                                              Checkbox Outline Danger</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-info mb-3">
                                            <BFormCheckbox v-model="checkbox32" id="formCheck18" class="form-check-outline form-check-info">
                                              Checkbox Outline Info</BFormCheckbox>
                                          </BFormGroup>
                                          <BFormGroup class="form-check-outline form-check-dark mb-3">
                                            <BFormCheckbox v-model="checkbox33" id="formCheck19" class="form-check-outline form-check-dark">
                                              Checkbox Outline Dark</BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Checkboxes Color --&gt;
&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck6&quot;&gt;
Checkbox Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck7&quot;&gt;
Checkbox Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck8&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck8&quot;&gt;
Checkbox Success
&lt;/label&gt;
&lt;/div&gt;</code>
<Code>&lt;div class=&quot;form-check form-check-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck9&quot;&gt;
Checkbox Warning
&lt;/label&gt;
&lt;/div&gt;</Code>
<code>&lt;div class=&quot;form-check form-check-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck10&quot;&gt;
Checkbox Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck11&quot;&gt;
Checkbox Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck12&quot;&gt;
Checkbox Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck12&quot;&gt;
Checkbox Light
&lt;/label&gt;
&lt;/div&gt;</code>


<code>&lt;!-- Custom Outline Checkboxes --&gt;
&lt;div class=&quot;form-check form-check-outline form-check-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck13&quot;&gt;
Checkbox Outline Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck14&quot;&gt;
Checkbox Outline Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck15&quot;&gt;
Checkbox Outline Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck16&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck16&quot;&gt;
Checkbox Outline Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<Code>&lt;div class=&quot;form-check form-check-outline form-check-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck17&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck17&quot;&gt;
Checkbox Outline Danger
&lt;/label&gt;
&lt;/div&gt;</Code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck18&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck18&quot;&gt;
Checkbox Outline Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck19&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck19&quot;&gt;
Checkbox Outline Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-light mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck20&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck20&quot;&gt;
Checkbox Outline light
&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>

                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Radios" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow>
                                <BCol lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Default Radios</p>
                                        <p class="text-muted">Use <code>type="radio"</code> attribute to set a radio button and add
                                          <code>checked</code> attribute to set a radio checked by default.
                                        </p>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio1" value="ckecked" name="flexRadioDefault" id="flexRadioDefault1">Default
                                            radio</BFormRadio>
                                        </BFormGroup>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio1" value="default" name="flexRadioDefault" id="flexRadioDefault2">Default
                                            checked radio</BFormRadio>
                                        </BFormGroup>
                                      </div>
                                </BCol>
                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Radios</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add
                                          <code>checked</code> attribute to set a radio checked by default.
                                        </p>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio2" value="checked-disabled" name="flexRadioDisabled"
                                            id="flexRadioDisabled" disabled>Disabled radio</BFormRadio>
                                        </BFormGroup>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio2" value="disabled" name="flexRadioDisabled" id="flexRadioCheckedDisabled"
                                            disabled>Disabled checked radio</BFormRadio>
                                        </BFormGroup>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Radio Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a radio
                                          button
                                          on the right side.</p>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio3" value="checked-disabled" name="formradioRight" id="formradioRight1"
                                            class="form-check-right">Form Radio Right</BFormRadio>
                                        </BFormGroup>
                                        <BFormGroup class="mb-2">
                                          <BFormRadio v-model="radio3" value="right" name="formradioRight" id="flexCheckCheckedDisabled2"
                                            class="form-check-right" disabled>Disabled checked radio</BFormRadio>
                                        </BFormGroup>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Radios --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDefault1&quot;&gt;
Default radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault2&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDefault2&quot;&gt;
Default checked radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Radios --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDisabled&quot;&gt;
Disabled radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioCheckedDisabled&quot;&gt;
Disabled checked radio
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Radio Right --&gt;
&lt;div class=&quot;form-check form-check-right mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradioRight&quot; id=&quot;formradioRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked radio
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Custom Radio" />
                    
                    <BCardBody>
                        <div class="live-preview">
                            <BRow>
                                <BCol md="6">
                                    <div>
                                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a
                                          color radio.</p>
                    
                                        <BFormGroup class="form-radio-primary mb-2">
                                          <BFormRadio v-model="checkbox2" name="formradiocolor8" id="formradioRight2"
                                            class="form-radio-primary">Radio Primary</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-secondary mb-2">
                                          <BFormRadio v-model="checkbox21" name="formradiocolor9" id="formradioRight6"
                                            class="form-radio-secondary">Radio Secondary</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-success mb-2">
                                          <BFormRadio v-model="checkbox22" name="formradiocolor10" id="formradioRight7"
                                            class="form-radio-success">Radio Success</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-warning mb-2">
                                          <BFormRadio v-model="checkbox23" name="formradiocolor11" id="formradioRight8"
                                            class="form-radio-warning">Radio Warning</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-danger mb-2">
                                          <BFormRadio v-model="checkbox24" name="formradiocolor12" id="formradioRight9"
                                            class="form-radio-danger">Radio Danger</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-info mb-2">
                                          <BFormRadio v-model="checkbox25" name="formradiocolor13" id="formradioRight10"
                                            class="form-radio-info">Radio Info</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-dark mb-2">
                                          <BFormRadio v-model="checkbox26" name="formradiocolor14" id="formradioRight11"
                                            class="form-radio-dark">Radio Dark</BFormRadio>
                                        </BFormGroup>
                                      </div>
                                </BCol>

                                <BCol md="6">
                                    <div>
                                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to set a
                                          color radio.</p>
                    
                                        <BFormGroup class="form-radio-outline form-radio-primary mb-2">
                                          <BFormRadio v-model="checkbox2" name="formradiocolor1" id="formradioRight5"
                                            class="form-radio-primary">Radio Primary</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-secondary mb-2">
                                          <BFormRadio v-model="checkbox21" name="formradiocolor2" id="formradioRight6"
                                            class="form-radio-secondary">Radio Secondary</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-success mb-2">
                                          <BFormRadio v-model="checkbox22" name="formradiocolor3" id="formradioRight7"
                                            class="form-radio-success">Radio Success</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-warning mb-2">
                                          <BFormRadio v-model="checkbox23" name="formradiocolor4" id="formradioRight8"
                                            class="form-radio-warning">Radio Warning</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-danger mb-2">
                                          <BFormRadio v-model="checkbox24" name="formradiocolor5" id="formradioRight9"
                                            class="form-radio-danger">Radio Danger</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-info mb-2">
                                          <BFormRadio v-model="checkbox25" name="formradiocolor6" id="formradioRight10"
                                            class="form-radio-info">Radio Info</BFormRadio>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-outline form-radio-dark mb-2">
                                          <BFormRadio v-model="checkbox26" name="formradiocolor7" id="formradioRight11"
                                            class="form-radio-dark">Radio Dark</BFormRadio>
                                        </BFormGroup>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px"><code>&lt;!-- Custom Radio Color --&gt;
&lt;div class=&quot;form-check form-radio-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor1&quot; id=&quot;formradioRight5&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight5&quot;&gt;
Radio Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor2&quot; id=&quot;formradioRight6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight6&quot;&gt;
Radio Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor3&quot; id=&quot;formradioRight7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight7&quot;&gt;
Radio Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor4&quot; id=&quot;formradioRight8&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight8&quot;&gt;
Radio Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor5&quot; id=&quot;formradioRight9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight9&quot;&gt;
Radio Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor6&quot; id=&quot;formradioRight10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight10&quot;&gt;
Radio Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor7&quot; id=&quot;formradioRight11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight11&quot;&gt;
Radio Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor8&quot; id=&quot;formradioRight12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight12&quot;&gt;
Radio light
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Custom Outline Radio --&gt;
&lt;div class=&quot;form-check form-radio-outline form-radio-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor9&quot; id=&quot;formradioRight13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight13&quot;&gt;
Radio Outline Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor10&quot; id=&quot;formradioRight14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight14&quot;&gt;
Radio Outline Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor11&quot; id=&quot;formradioRight15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight15&quot;&gt;
Radio Outline Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor12&quot; id=&quot;formradioRight16&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight16&quot;&gt;
Radio Outline Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor13&quot; id=&quot;formradioRight17&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight17&quot;&gt;
Radio Outline Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor14&quot; id=&quot;formradioRight18&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight18&quot;&gt;
Radio Outline Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor15&quot; id=&quot;formradioRight19&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight19&quot;&gt;
Radio Outline Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor16&quot; id=&quot;formradioRight20&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight20&quot;&gt;
Radio Outline light
&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>

                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Switches" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow>
                                <BCol lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Default Switches</p>
                                        <p class="text-muted">Use <code>form-switch</code> class to form-check class to set a switch and add
                                          <code>checked</code> attribute to set a switch checked by default.
                                        </p>
                                        <div>
                                          <BFormCheckbox id="flexSwitchCheckDefault" switch inline>
                                            Default switch input
                                          </BFormCheckbox>
                                        </div>
                                        <div>
                                          <BFormCheckbox id="flexSwitchCheckChecked" switch inline checked>
                                            Checked switch input
                                          </BFormCheckbox>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Switches</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add
                                          <code>checked</code> attribute to set a switch checked by default.
                                        </p>
                                        <div>
                                          <BFormCheckbox id="flexSwitchCheckDisabled" switch inline disabled>
                                            Switch input
                                          </BFormCheckbox>
                                        </div>
                                        <div>
                                          <BFormCheckbox id="flexSwitchCheckCheckedDisabled1" switch inline checked disabled>
                                            Disabled checked switch input
                                          </BFormCheckbox>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Switch Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check class to set a switch
                                          button
                                          on the right side.</p>
                                        <div>
                                          <BFormGroup class="form-check-right">
                                            <BFormCheckbox id="flexSwitchCheckRightDisabled" switch inline checked>
                                              Switch Right input
                                            </BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                        <div>
                                          <BFormGroup class="form-check-right">
                                            <BFormCheckbox id="flexSwitchCheckCheckedDisabled2" switch inline disabled>
                                              Disabled checked switch input
                                            </BFormCheckbox>
                                          </BFormGroup>
                                        </div>
                                      </div>
                                </BCol>

                                <BCol lg="4" md="6">
                                    <div class="mt-3">
                                        <p class="text-muted fw-medium">Switch sizes</p>
                                        <p class="text-muted">Use <code>form-switch-md</code> class to set a medium size switch button and
                                          <code>form-switch-lg</code> class to form-check class to set a large size switch button
                                          respectively.
                                          No such class is required for small size switch button.
                                        </p>
                    
                                        <div class="mb-3">
                                          <BFormCheckbox id="customSwitchsizesm" switch checked>
                                            Small Size Switch
                                          </BFormCheckbox>
                                        </div>
                    
                                        <div class="mb-3">
                                          <BFormCheckbox id="customSwitchsizemd" switch class="form-switch-md me-2">
                                            Medium Size Switch
                                          </BFormCheckbox>
                                        </div>
                    
                                        <div class="mb-3">
                                          <BFormCheckbox id="customSwitchsizelg" switch checked class="form-switch-lg me-2">
                                            Large Size Switch
                                          </BFormCheckbox>
                                        </div>
                                      </div>
                                </BCol>

                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Switchs --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckDefault&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckDefault&quot;&gt;Default switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckChecked&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckChecked&quot;&gt;Checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Switchs --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckDisabled&quot;&gt;Disabled switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckCheckedDisabled&quot;&gt;Disabled checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Switch Right --&gt;
&lt;div class=&quot;form-check form-switch form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckRightDisabled&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckRightDisabled&quot;&gt;Disabled switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckCheckedDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckCheckedDisabled&quot;&gt;Disabled checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Switch sizes --&gt;
&lt;div class=&quot;form-check form-switch&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizesm&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizesm&quot;&gt;Small Size Switch&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-md&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizemd&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizemd&quot;&gt;Medium Size Switch&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-lg&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizelg&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizelg&quot;&gt;Large Size Switch&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Switches Color" />

                    <BCardBody>
                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to
                            set a color switch.</p>
                        <div class="live-preview">
                            <BRow>
                                <BCol md="6">
                                    <BFormGroup class="form-radio-primary mb-3">
                                        <BFormCheckbox id="SwitchCheck1" switch checked>
                                          Switch Default
                                        </BFormCheckbox>
                                      </BFormGroup>
                    
                                      <BFormGroup class="form-radio-secondary mb-3">
                                        <BFormCheckbox id="SwitchCheck2" switch variant="secondary" checked>
                                          Switch Secondary
                                        </BFormCheckbox>
                                      </BFormGroup>
                    
                                      <BFormGroup class="form-radio-success mb-3">
                                        <BFormCheckbox id="SwitchCheck3" switch variant="success" checked>
                                          Switch Success
                                        </BFormCheckbox>
                                      </BFormGroup>
                    
                                      <BFormGroup class="form-radio-warning mb-3">
                                        <BFormCheckbox class=" mb-md-0" id="SwitchCheck4" switch variant="warning" checked>
                                          Switch Warning
                                        </BFormCheckbox>
                                      </BFormGroup>
                                </BCol>

                                <BCol md="6">
                                    <div>
                                        <BFormGroup class="form-radio-danger mb-3">
                                          <BFormCheckbox id="SwitchCheck5" switch variant="danger" checked>Switch Danger</BFormCheckbox>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-info mb-3">
                                          <BFormCheckbox id="SwitchCheck6" switch variant="info" checked>
                                            Switch Info
                                          </BFormCheckbox>
                                        </BFormGroup>
                    
                                        <BFormGroup class="form-radio-dark mb-3">
                                          <BFormCheckbox id="SwitchCheck7" switch variant="dark" checked>
                                            Switch Dark
                                          </BFormCheckbox>
                                        </BFormGroup>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Switches Color --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck1&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck1&quot;&gt;Switch Default&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-secondary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck2&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck2&quot;&gt;Switch Secondary&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-success&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck3&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck3&quot;&gt;Switch Success&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-warning&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck4&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck4&quot;&gt;Switch Warning&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-danger&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck5&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck5&quot;&gt;Switch Danger&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-info&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck6&quot;&gt;Switch Info&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-dark&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck7&quot;&gt;Switch Dark&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Custom Switches" />

                    <BCardBody>
                        <p class="text-muted">Use <code>form-switch-custom</code> class &amp; <code>form-switch-</code>
                            class with below-mentioned color
                            variation to set a color radius.</p>
                        <div class="live-preview">
                            <BRow>
                                <BCol md="6">
                                    <div>
                                        <div class="form-check form-switch form-switch-custom form-switch-primary mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck9" checked>
                                            <label class="form-check-label" for="SwitchCheck9">Switch Primary</label>
                                        </div>

                                        <div
                                            class="form-check form-switch form-switch-custom form-switch-secondary mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck10" checked>
                                            <label class="form-check-label" for="SwitchCheck10">Switch Secondary</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-success mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck11" checked>
                                            <label class="form-check-label" for="SwitchCheck11">Switch Success</label>
                                        </div>

                                        <div
                                            class="form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck12" checked>
                                            <label class="form-check-label" for="SwitchCheck12">Switch Warning</label>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol md="6">
                                    <div class="mt-4 mt-md-0">
                                        <div class="form-check form-switch form-switch-custom form-switch-danger mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck13" checked>
                                            <label class="form-check-label" for="SwitchCheck13">Switch Danger</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-info mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck14" checked>
                                            <label class="form-check-label" for="SwitchCheck14">Switch Info</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-dark mb-3">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="SwitchCheck15" checked>
                                            <label class="form-check-label" for="SwitchCheck15">Switch Dark</label>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Switches --&gt;
&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-primary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck9&quot;&gt;Switch Default&lt;/label&gt;
&lt;/div&gt;</code>

<Code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-secondary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck10&quot;&gt;Switch Secondary&lt;/label&gt;
&lt;/div&gt;</Code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-success&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck11&quot;&gt;Switch Success&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-warning&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck12&quot;&gt;Switch Warning&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-danger&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck13&quot;&gt;Switch Danger&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-info&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck14&quot;&gt;Switch Info&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-dark&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck15&quot;&gt;Switch Dark&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Inline Checkbox & Radios" />

                    <BCardBody>
                        <p class="text-muted">Use <code>form-check-inline</code> class to form-check class to set
                            horizontally align checkboxes, radios, or switches.</p>
                        <div class="live-preview">
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormCheckbox id="inlineCheckbox6" value="option1" inline>
                                          1
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineCheckbox7" value="option2" inline>
                                          2
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineCheckbox8" value="option3" inline disabled>
                                          3 (disabled)
                                        </BFormCheckbox>
                                      </div>
                                </BCol>

                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormRadio id="inlineRadio1" name="inlineRadioOptions1" value="option1" inline>
                                          1
                                        </BFormRadio>
                                        <BFormRadio id="inlineRadio2" name="inlineRadioOptions2" value="option2" inline>
                                          2
                                        </BFormRadio>
                                        <BFormRadio id="inlineRadio3" name="inlineRadioOptions3" value="option3" inline disabled>
                                          3 (disabled)
                                        </BFormRadio>
                                      </div>
                                </BCol>

                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormCheckbox id="inlineswitch5" inline switch>
                                          1
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineswitch6" inline switch>
                                          2
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineswitchdisabled2" inline switch disabled>
                                          2 (disabled)
                                        </BFormCheckbox>
                                      </div>
                                </BCol>
                            </BRow>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Inline Checkbox --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Inline Radios --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions1&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions2&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions3&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Inline Switches --&gt;
&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitch&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitch1&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitchdisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitchdisabled&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <CardHeader title="Without Labels" />

                    <BCardBody>
                        <p class="text-muted">Omit the wrapping, <code>form-check</code> class for checkboxes,
                            radios,
                            or switches that have no label text. Remember to still provide some form of accessible
                            name
                            for assistive technologies (for instance, using aria-label).</p>
                        <div class="live-preview">
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormCheckbox id="inlineCheckbox1" value="option1" inline>
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineCheckbox2" value="option2" inline>
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineCheckbox3" value="option3" inline disabled>
                                        </BFormCheckbox>
                                      </div>
                                </BCol>


                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormRadioGroup name="inlineRadioOptions" inline>
                                          <BFormRadio id="WithoutinlineRadio1" value="option1"> </BFormRadio>
                                          <BFormRadio id="WithoutinlineRadio2" value="option2"> </BFormRadio>
                                          <BFormRadio id="WithoutinlineRadio3" value="option3" disabled> </BFormRadio>
                                        </BFormRadioGroup>
                                      </div>
                                </BCol>


                                <BCol lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <BFormCheckbox id="inlineswitch" inline switch>
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineswitch1" inline switch>
                                        </BFormCheckbox>
                                        <BFormCheckbox id="inlineswitchdisabled" inline switch disabled>
                                        </BFormCheckbox>
                                      </div>
                                </BCol>

                            </BRow>
                        </div>


                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Without labels Checkbox --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; disabled&gt;
&lt;/div&gt;</code>


<code>&lt;!-- Without labels Radios --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio1&quot; value=&quot;option1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio2&quot; value=&quot;option2&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Without labels Switches --&gt;
&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitchdisabled&quot; disabled&gt;
&lt;/div&gt;</code></pre>
                        </div>

                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Radio Toggle Buttons" />

                    <BCardBody>
                        <p class="text-muted">Create button-like checkboxes and radio buttons by using
                            <code>btn</code>
                            styles rather than form-check-label class on the &lt;label&gt; elements. These toggle
                            buttons can further be grouped in a <BLink 
                                href="https://getbootstrap.com/docs/5.1/components/button-group/">button group
                            </BLink > if
                            needed.
                        </p>
                        <div class="live-preview">
                            <div class="hstack flex-wrap">
                                <BFormRadio class="btn-check ms-n4" name="options" id="option1" checked>
                                  <label class="btn btn-secondary" for="option1">Checked</label>
                                </BFormRadio>
                
                                <BFormRadio class="btn-check ms-n4" name="options" id="option2">
                                  <label class="btn btn-secondary" for="option2">Radio</label>
                                </BFormRadio>
                
                                <BFormRadio class="btn-check ms-n4" name="options" id="option3" disabled>
                                  <label class="btn btn-secondary" for="option3">Disabled</label>
                                </BFormRadio>
                
                                <BFormRadio class="btn-check ms-n4" name="options" id="option4">
                                  <label class="btn btn-secondary" for="option4">Radio</label>
                                </BFormRadio>
                              </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Radio toggle buttons   --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option1&quot;  checked&gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option1&quot;&gt;Checked&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option2&quot; &gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option2&quot;&gt;Radio&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option3&quot;  disabled&gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option3&quot;&gt;Disabled&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option4&quot; &gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option4&quot;&gt;Radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <CardHeader title="Outlined Styles" />

                    <BCardBody>
                        <p class="text-muted">Different variants of <code>btn</code> attribute, such as the various
                            outlined styles, are supported.</p>
                        <div class="live-preview">

                            <div class="hstack gap-2 flex-wrap">
                                <input type="checkbox" class="btn-check" id="btn-check-outlined">
                                <label class="btn btn-outline-primary" for="btn-check-outlined">Single
                                    toggle</label>

                                <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked>
                                <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined"
                                    checked>
                                <label class="btn btn-outline-success" for="success-outlined">Checked success
                                    radio</label>

                                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined">
                                <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Outlined Styles --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-outlined&quot;&gt;
&lt;label class=&quot;btn btn-outline-primary&quot; for=&quot;btn-check-outlined&quot;&gt;Single toggle&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-2-outlined&quot; checked&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btn-check-2-outlined&quot;&gt;Checked&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;success-outlined&quot; checked&gt;
&lt;label class=&quot;btn btn-outline-success&quot; for=&quot;success-outlined&quot;&gt;Checked success radio&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;danger-outlined&quot;&gt;
&lt;label class=&quot;btn btn-outline-danger&quot; for=&quot;danger-outlined&quot;&gt;Danger radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>

        </BRow>
    </Layout>
</template>
