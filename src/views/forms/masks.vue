<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Input Masks" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Examples</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <form action="#">
              <div>
                <BRow>
                  <BCol xl="6">
                    <div>
                      <label for="regexp-mask" class="form-label">Dynamic mask</label>
                      <BFormInput type="text" v-maska="['# cm', '#.# cm', '#.## cm']" class="form-control" id="regexp-mask"/>
                      <div class="text-muted">["# cm", "#.# cm", "#.## cm"]</div>
                    </div>

                    <div class="mt-4">
                      <label for="phone-mask" class="form-label">Phone with code</label>
                      <BFormInput type="text" v-maska="['+1 (###) ##-##-##', '+1 (###) ###-##-##']" class="form-control"
                        id="phone-mask"/>
                      <div class="text-muted">+1 (###) ###-####</div>
                    </div>
                    <div class="mt-4">
                      <label for="number-mask" class="form-label">Credit card</label>
                      <BFormInput type="text" v-maska="'#### #### #### ####'" class="form-control" id="number-mask"/>
                      <div class="text-muted">#### #### #### ####</div>
                    </div>

                  </BCol>

                  <BCol xl="6">
                    <div>
                      <label for="date-mask" class="form-label">Date</label>
                      <BFormInput type="text" v-maska="'##/##/####'" class="form-control" id="date-mask"/>
                      <div class="text-muted">##/##/####</div>
                    </div>

                    <div class="mt-4">
                      <label class="form-label">Hex color</label>
                      <BFormInput type="text"
                        v-maska="{ mask: ['!#HHHHHH', '!#HHHHHH-HH'], tokens: { 'H': { pattern: /[0-9a-fA-F]/, uppercase: true } } }"
                        class="form-control" id="dynamic-mask"/>
                      <div class="text-muted">!#HHHHHH</div>
                    </div>
                    <div class="mt-4">
                      <label class="form-label">CPF/CNPJ</label>
                      <BFormInput type="text" v-maska="['###.###.###-##', '##.###.###/####-##']" class="form-control"
                        id="currency-mask"/>
                      <div class="text-muted">["###.###.###-##", "##.###.###/####-##"]</div>
                    </div>
                  </BCol>
                </BRow>
              </div>

            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
