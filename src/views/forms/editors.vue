<script>
import { reactive } from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  setup() {
    const state = reactive({
      content:
        "<h3><span class='ql-size-large;'>Hello World!</span></h3><p><br></p><h3>This is an simple editable area.</h3><p><br></p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p><br></p><p>End of simple area</p>",
      _content: "",
      disabled: false,
    });
    return {
      state
    };
  },
  data() {
    return {
            editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
      content: "<h1>Some initial content</h1>",

      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    ckeditor: CKEditor.component
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Editors" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader class="align-items-center d-flex">
            <BCardTitle class="mb-0">Ckeditor Classic Editor</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use <code>ckeditor-classic</code> class to set ckeditor classic
              editor.
            </p>
            <div class="ckeditor-classic">
              <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>


  </Layout>
</template>
