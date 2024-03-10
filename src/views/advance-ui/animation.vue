<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import 'aos/dist/aos.css';
import AOS from "aos";

import * as Prism from 'prismjs';

export default {
   mounted(){
    Prism.highlightAll();

    setTimeout(() => {
      AOS.init({easing:"ease-out-back",duration:1e3});
    }, 200);
  },  
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Animation" pageTitle="Advance UI" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <div class="text-center">
              <BCardTitle class="mb-0">Fade Animation</BCardTitle>
            </div>
          </BCardHeader>

          <BCardBody>
            <div class="live-preview">
              <div>
                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Up</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-up">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" lg="8">
                          <div data-aos="fade-up">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Down</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-down">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" lg="8">
                          <div data-aos="fade-down">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Up Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-up-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-up-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Up Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-up-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-up-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Down Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-down-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-down-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Fade Down Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-down-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-down-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard> 
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <div class="text-center">
              <BCardTitle class="mb-0">Flip Animation</BCardTitle>
            </div>
          </BCardHeader>

          <BCardBody>
            <div class="live-preview">
              <div>
                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Flip Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="flip-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="flip-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Flip Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="flip-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="flip-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Flip Up</h4>
                      <pre><code class="language-markup">&lt;div data-aos="flip-up">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="flip-up">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Flip Down</h4>
                      <pre><code class="language-markup">&lt;div data-aos="flip-down">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="flip-down">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard> 
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <div class="text-center">
              <BCardTitle class="mb-0">Zoom Animation</BCardTitle>
            </div>
          </BCardHeader>

          <BCardBody>
            <div class="live-preview">
              <div>
                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom In</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-in">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom In Up</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in-up">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-in-up">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom In Down</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in-down">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-in-down">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom In Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-in-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom In Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-in-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom Out</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-in">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-out">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom Out Up</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-out-up">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-out-up">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom Out Down</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-out-down">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-out-down">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom Out Right</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-out-right">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-out-right">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>

                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Zoom Out Left</h4>
                      <pre><code class="language-markup">&lt;div data-aos="zoom-out-left">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="zoom-out-left">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard> 
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <div class="text-center">
              <BCardTitle class="mb-0">Animation Examples</BCardTitle>
            </div>
          </BCardHeader>

          <BCardBody>
            <div class="live-preview">
              <div>
                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Duration</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-up" data-aos-duration="3000">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-up" data-aos-duration="3000">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Easing="linear"</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Offset</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Offset</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>

                <BRow>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Easing="ease-in-back"</h4>
                      <pre><code class="language-markup">&lt;div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
                            data-aos-offset="0">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                  <BCol lg="6">
                    <div class="p-4 pb-0 border mt-4">
                      <h4 class="mb-4 text-center">Easing="ease-out-cubic"</h4>
                      <pre><code class="language-markup">&lt;div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">&lt;/div></code></pre>

                      <BRow class="justify-content-center">
                        <BCol sm="10" md="8">
                          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src="@/assets/images/mac-img.png" alt="Mac Image" class="img-fluid" />
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard> 
      </BCol>
    </BRow>
  </Layout>
</template>
