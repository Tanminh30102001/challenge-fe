<script>
import { Autoplay, Thumbs, Pagination, Navigation, EffectCoverflow, Mousewheel, Scrollbar, EffectFade, EffectFlip, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';

import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
      Autoplay: Autoplay, Thumbs: Thumbs, Pagination: Pagination, Navigation: Navigation, EffectCreative: EffectCreative,
      coverflowModules: [EffectCoverflow, Pagination],
      mousewheelModules: [Mousewheel, Pagination],
      scrollbarModules: [Scrollbar, Navigation, Pagination],
      effectFadeModules: [EffectFade, Pagination],
      effectFlipModules: [EffectFlip, Pagination],

      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        renderBullet: function (index, className) {
          return '<span class=' + className + '>' + (index + 1) + '</span>';
        },
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    Swiper,
    SwiperSlide,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Swiper Slider" pagetitle="Advance UI" />
    <BRow>
      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Default Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>default-swiper</code> class to set a default swiper.
            </p>
            <swiper class="default-swiper rounded" :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="[Autoplay]">
              <swiper-slide>
                <img src="@/assets/images/small/img-1.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-2.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-3.jpg" alt class="img-fluid" />
              </swiper-slide>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Navigation & Pagination Swiper</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use
              <code>navigation-swiper</code> class to set a swiper with
              navigation and pagination.
            </p>
            <swiper class="navigation-swiper rounded" :loop="true" :modules="[Autoplay, Navigation, Pagination]"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
              :pagination="{ clickable: true, el: '.swiper-pagination' }">
              <swiper-slide>
                <img src="@/assets/images/small/img-4.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-5.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-6.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pagination Dynamic Swiper</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use
              <code>pagination-dynamic-swiper</code> class to set a dynamic
              swiper with pagination.
            </p>
            <swiper class="pagination-dynamic-swiper rounded" :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ clickable: true, el: '.swiper-pagination', dynamicBullets: true }"
              :modules="[Autoplay, Pagination]">
              <swiper-slide>
                <img src="@/assets/images/small/img-7.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-8.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-9.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination dynamic-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pagination Fraction Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>pagination-fraction-swiper</code> class to set a
              fraction swiper with pagination.
            </p>
            <swiper class="pagination-fraction-swiper" :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ clickable: true, el: '.swiper-pagination', type: 'fraction', }"
              :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }"
              :modules="[Autoplay, Navigation, Pagination]">
              <swiper-slide>
                <img src="@/assets/images/small/img-10.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-11.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-12.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination text-light"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pagination Custom Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>pagination-custom-swiper</code> class to set a swiper
              with custom pagination.
            </p>
            <swiper class="pagination-custom-swiper rounded" :modules="[Autoplay, Pagination]" :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="pagination">
              <swiper-slide>
                <img src="@/assets/images/small/img-2.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-3.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-4.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination pagination-custom"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Pagination Progress Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>pagination-progress-swiper</code> class to set a swiper
              with progress pagination.
            </p>
            <swiper class="pagination-progress-swiper rounded" :modules="[Autoplay, Pagination]" :loop="true"
              :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="{ type: 'progressbar' }"
              :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
              <swiper-slide>
                <img src="@/assets/images/small/img-5.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-6.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-7.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Scrollbar Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>pagination-scrollbar-swiper</code> class to set a swiper
              with scrollbar pagination.
            </p>
            <swiper class="pagination-scrollbar-swiper rounded" :loop="true" :modules="scrollbarModules"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :scrollbar="{ el: '.swiper-scrollbar', hide: true }"
              :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
              <swiper-slide>
                <img src="@/assets/images/small/img-8.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-9.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-10.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-scrollbar"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Vertical Swiper</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use
              <code>vertical-swiper</code> class to set a vertical swiper.
            </p>
            <swiper class="vertical-swiper rounded" :loop="true" :direction="'vertical'" :modules="[Autoplay, Pagination]"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true }" style="height: 324px">
              <swiper-slide>
                <img src="@/assets/images/small/img-11.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-12.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-1.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Mousewheel Control Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>mousewheel-control-swiper</code> class to set a swiper
              with mousewheel scroll.
            </p>
            <swiper class="mousewheel-control-swiper rounded" :loop="true" :direction="'vertical'" :mousewheel="true"
              :modules="mousewheelModules" :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true }" style="height: 324px">
              <swiper-slide>
                <img src="@/assets/images/small/img-3.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-4.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-5.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Effect Fade Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>effect-fade-swiper</code> class to set a swiper with
              fade effect.
            </p>
            <swiper class="effect-fade-swiper rounded" :loop="true" :effect="'fade'" :modules="effectFadeModules"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true }">
              <swiper-slide>
                <img src="@/assets/images/small/img-6.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-7.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-8.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Effect Creative Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>effect-creative-swiper</code> class to set a swiper with
              creative custom effect.
            </p>
            <swiper class="effect-creative-swiper rounded" :loop="true" :effect="'creative'" :grabCursor="true"
              :modules="[EffectCreative, Pagination]" :creativeEffect="{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }" :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true }">
              <swiper-slide>
                <img src="@/assets/images/small/img-9.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-10.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-11.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol xl="4" lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Effect Flip Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>effect-flip-swiper</code> class to set a swiper with
              flip effect.
            </p>
            <swiper class="effect-flip-swiper rounded" :loop="true" :effect="'flip'" :modules="effectFlipModules"
              :grabCursor="true" :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true }">
              <swiper-slide>
                <img src="@/assets/images/small/img-12.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-1.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-2.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Effect Coverflow Swiper</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <p class="text-muted">
              Use
              <code>effect-coverflow-swiper</code> class to set a swiper
              with coverflow effect.
            </p>
            <swiper class="effect-coverflow-swiper rounded pb-5" :loop="true" :effect="'coverflow'" :grabCursor="true"
              :centeredSlides="true" :slidesPerView="4" :modules="coverflowModules"
              :coverflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }"
              :autoplay="{ delay: 2500, disableOnInteraction: false }"
              :pagination="{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }">
              <swiper-slide>
                <img src="@/assets/images/small/img-4.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-5.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-6.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-7.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-8.jpg" alt class="img-fluid" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/small/img-9.jpg" alt class="img-fluid" />
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-dark"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>

      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Responsive Breakpoints Swiper</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              Use
              <code>responsive-swiper</code> class to set a responsive
              swiper.
            </p>
            <swiper class="swiper responsive-swiper rounded gallery-light pb-4" :loop="true" :slidesPerView="1"
              :spaceBetween="10" :pagination="{ el: '.swiper-pagination', clickable: true }" :modules="[Pagination]"
              :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 40 }, 1200: { slidesPerView: 4, spaceBetween: 50 }, }">
              <swiper-slide>
                <BCard no-body class="gallery-box">
                  <div class="gallery-container">
                    <BLink  class="image-popup" href="assets/images/small/img-1.jpg" title>
                      <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-1.jpg" alt />
                      <div class="gallery-overlay">
                        <h5 class="overlay-caption">Glasses and laptop from above</h5>
                      </div>
                    </BLink >
                  </div>
                  <div class="box-content">
                    <div class="d-flex align-items-center mt-1">
                      <div class="flex-grow-1 text-muted">
                        by
                        <BLink  href class="text-body text-truncate">Ron Mackie</BLink >
                      </div>
                      <div class="flex-shrink-0">
                        <div class="d-flex gap-3">
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                            2.2K
                          </BButton>
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                            1.3K
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </BCard> 
              </swiper-slide>
              <swiper-slide>
                <BCard no-body class="gallery-box">
                  <div class="gallery-container">
                    <BLink  class="image-popup" href="assets/images/small/img-2.jpg" title>
                      <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-2.jpg" alt />
                      <div class="gallery-overlay">
                        <h5 class="overlay-caption">Working at a coffee shop</h5>
                      </div>
                    </BLink >
                  </div>
                  <div class="box-content">
                    <div class="d-flex align-items-center mt-1">
                      <div class="flex-grow-1 text-muted">
                        by
                        <BLink  href class="text-body text-truncate">Nancy Martino</BLink >
                      </div>
                      <div class="flex-shrink-0">
                        <div class="d-flex gap-3">
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                            3.2K
                          </BButton>
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                            1.1K
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </BCard> 
              </swiper-slide>
              <swiper-slide>
                <div class="gallery-box card mb-0">
                  <div class="gallery-container">
                    <BLink  class="image-popup" href="assets/images/small/img-10.jpg" title>
                      <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg" alt />
                      <div class="gallery-overlay">
                        <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                      </div>
                    </BLink >
                  </div>
                  <div class="box-content">
                    <div class="d-flex align-items-center mt-1">
                      <div class="flex-grow-1 text-muted">
                        by
                        <BLink  href class="text-body text-truncate">Henry Baird</BLink >
                      </div>
                      <div class="flex-shrink-0">
                        <div class="d-flex gap-3">
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                            632
                          </BButton>
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                            95
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <BCard no-body class="gallery-box">
                  <div class="gallery-container">
                    <BLink  class="image-popup" href="assets/images/small/img-4.jpg" title>
                      <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-4.jpg" alt />
                      <div class="gallery-overlay">
                        <h5 class="overlay-caption">Drawing a sketch</h5>
                      </div>
                    </BLink >
                  </div>
                  <div class="box-content">
                    <div class="d-flex align-items-center mt-1">
                      <div class="flex-grow-1 text-muted">
                        by
                        <BLink  href class="text-body text-truncate">Jason McQuaid</BLink >
                      </div>
                      <div class="flex-shrink-0">
                        <div class="d-flex gap-3">
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                            825
                          </BButton>
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                            101
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </BCard> 
              </swiper-slide>
              <swiper-slide>
                <BCard no-body class="gallery-box">
                  <div class="gallery-container">
                    <BLink  class="image-popup" href="assets/images/small/img-6.jpg" title>
                      <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-6.jpg" alt />
                      <div class="gallery-overlay">
                        <h5 class="overlay-caption">Project discussion with team</h5>
                      </div>
                    </BLink >
                  </div>
                  <div class="box-content">
                    <div class="d-flex align-items-center mt-1">
                      <div class="flex-grow-1 text-muted">
                        by
                        <BLink  href class="text-body text-truncate">Erica Kernan</BLink >
                      </div>
                      <div class="flex-shrink-0">
                        <div class="d-flex gap-3">
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                            3.4K
                          </BButton>
                          <BButton variant="link" size="sm" type="button"
                            class="fs-12 text-body text-decoration-none px-0">
                            <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                            1.3k
                          </BButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </BCard> 
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-dark"></div>
            </swiper>
          </BCardBody>
        </BCard> 
      </BCol>
    </BRow>
  </Layout>
</template>
