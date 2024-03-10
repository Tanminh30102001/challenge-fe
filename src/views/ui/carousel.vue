<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

import Img1 from "@/assets/images/small/img-1.jpg";
import Img2 from "@/assets/images/small/img-2.jpg";
import Img3 from "@/assets/images/small/img-3.jpg";
import Img4 from "@/assets/images/small/img-4.jpg";
import Img5 from "@/assets/images/small/img-5.jpg";
import Img6 from "@/assets/images/small/img-6.jpg";
import Img7 from "@/assets/images/small/img-7.jpg";
import Img8 from "@/assets/images/small/img-8.jpg";
import Img9 from "@/assets/images/small/img-9.jpg";
import Img10 from "@/assets/images/small/img-10.jpg";
import Img11 from "@/assets/images/small/img-11.jpg";


export default {
  data() {
    return {
      Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11,
    };
  },
  components: {
    Layout,
    PageHeader,
    CardHeader
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Carousel" pageTitle="Base UI" />
    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Slides Only" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>slide</code> class to set carousel with slides. Note the
              presence of the <code>d-block</code> and <code>w-100</code> class
              on carousel images to prevent browser default image alignment.
            </p>
            <div class="live-preview">

              <BCarousel :interval="2000" ride="carousel" class="carousel slide">
                <BCarouselSlide active :img-src="Img1" />
                <BCarouselSlide :img-src="Img2" />
                <BCarouselSlide :img-src="Img3" />
              </BCarousel>

            </div>
            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Slides Only --&gt;
  &lt;BCarousel :interval=&quot;2000&quot; class=&quot;carousel slide&quot;&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img1&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img2&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img3&quot; /&gt;
  &lt;/BCarousel>
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="With Controls" />
          
          <BCardBody>
            <p class="text-muted">
              Use
              <code>carousel-control-prev</code> and
              <code>carousel-control-next</code> class with &lt;button&gt; or
              &lt;a&gt; tag element to show carousel with control navigation.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                <BCarouselSlide active :img-src="Img4" />
                <BCarouselSlide :img-src="Img5" />
                <BCarouselSlide :img-src="Img6" />
              </BCarousel>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- With Controls --&gt;
  &lt;BCarousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img4&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img5&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img6&quot; /&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="with Indicators" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>carousel-indicators</code> class with &lt;ol&gt; element to
              show carousel with indicators.
            </p>

            <div class="live-preview">
              <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls indicators>
                <BCarouselSlide active :img-src="Img3" />
                <BCarouselSlide :img-src="Img2" />
                <BCarouselSlide :img-src="Img1" />
              </BCarousel>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- With Indicators --&gt;
  &lt;BCarousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls indicators&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img3&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img2&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img1&quot; /&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="with Captions" />
        
          <BCardBody>
            <p class="text-muted">
              Use
              <code>carousel-caption</code> class to add captions to the
              carousel.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls indicators>
                <BCarouselSlide active :img-src="Img7">
                  <h5 class="text-white">Sunrise above a beach</h5>
                  <p class="text-white-50">
                    You've probably heard that opposites attract. The same
                    is true for fonts. Don't be afraid to combine font
                    styles that are different but complementary.
                  </p>
                </BCarouselSlide>
                <BCarouselSlide :img-src="Img2">
                  <h5 class="text-white">Working from home little spot</h5>
                  <p class="text-white-50">
                    Consistency piques people’s interest is that it has
                    become more and more popular over the years, which is
                    excellent.
                  </p>
                </BCarouselSlide>
                <BCarouselSlide :img-src="Img9">
                  <h5 class="text-white">
                    Dramatic clouds at the Golden Gate Bridge
                  </h5>
                  <p class="text-white-50">
                    Increase or decrease the letter spacing depending on the
                    situation and try, try again until it looks right, and
                    each letter.
                  </p>
                </BCarouselSlide>
              </BCarousel>

            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- With Captions --&gt;
  &lt;BCarousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls indicators&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img7&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;Sunrise above a beach&lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        You've probably heard that opposites attract. The same
        is true for fonts. Don't be afraid to combine font
        styles that are different but complementary.
      &lt;/p&gt;
    &lt;/BCarouselSlide&gt;
    &lt;BCarouselSlide :img-src=&quot;Img2&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;Working from home little spot&lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        Consistency piques people’s interest is that it has
        become more and more popular over the years, which is
        excellent.
      &lt;/p&gt;
    &lt;/BCarouselSlide&gt;
    &lt;BCarouselSlide :img-src=&quot;Img9&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;
        Dramatic clouds at the Golden Gate Bridge
      &lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        Increase or decrease the letter spacing depending on the
        situation and try, try again until it looks right, and
        each letter.
      &lt;/p&gt;
    &lt;/BCarouselSlide&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Crossfade Animation" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>carousel-fade</code> class to the carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide carousel-fade" ride="carousel" :interval="2000" controls indicators>
                <BCarouselSlide active :img-src="Img1" />
                <BCarouselSlide :img-src="Img2" />
                <BCarouselSlide :img-src="Img3" />
              </BCarousel>
            </div>

            <div class="d-none code-view">
              <pre>
<code class="language-markup">
&lt;!-- With Crossfade Animation --&gt;
&lt;BCarousel class=&quot;carousel slide carousel-fade&quot; controls indicators&gt;
  &lt;BCarouselSlide active :img-src=&quot;Img1&quot; /&gt;
  &lt;BCarouselSlide :img-src=&quot;Img2&quot; /&gt;
  &lt;BCarouselSlide :img-src=&quot;Img3&quot; /&gt;
&lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Individual carousel-item Interval" />
  
          <BCardBody>
            <p class="text-muted">
              Use
              <code>data-bs-interval=" "</code> to a carousel-item to change the
              amount of time to delay between automatically cycling to the next
              item.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                <BCarouselSlide active :img-src="Img1" />
                <BCarouselSlide :img-src="Img11" />
                <BCarouselSlide :img-src="Img10" />
              </BCarousel>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Individual Slide --&gt;
  &lt;BCarousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img1&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img11&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img10&quot; /&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Disable Touch Swiping" />

          <BCardBody>
            <p class="text-muted">
              Carousels support swiping left/right on touchscreen devices to
              move between slides. This can be disabled using the
              <code>data-bs-touch</code> attribute. The example below also does
              not include the <code>data-bs-ride attribute</code> and has
              <code>data-bs-interval="false"</code> so it doesn’t autoplay.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide" :interval="2000" controls no-touch="true">
                <BCarouselSlide active :img-src="Img9" />
                <BCarouselSlide :img-src="Img8" />
                <BCarouselSlide :img-src="Img7" />
              </BCarousel>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Disable Touch Swiping --&gt;
  &lt;BCarousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls no-touch=&quot;true&quot;&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img9&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img8&quot; /&gt;
    &lt;BCarouselSlide :img-src=&quot;Img7&quot; /&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <CardHeader title="Dark Variant" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>carousel-dark</code> class to the carousel for darker
              controls, indicators, and captions.
            </p>
            <div class="live-preview">
              <BCarousel class="carousel slide carousel-dark" ride="carousel" :interval="2000" controls>
                <BCarouselSlide active :img-src="Img4">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Drawing a sketch</h5>
                    <p>
                      Too much or too little spacing, as in the example below,
                      can make things unpleasant for the reader.
                    </p>
                  </div>
                </BCarouselSlide>
                <BCarouselSlide :img-src="Img5">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Blue clock on a pastel background</h5>
                    <p>
                      In some designs, you might adjust your tracking to
                      create a certain artistic effect asked them what graphic
                      design tips they live.
                    </p>
                  </div>
                </BCarouselSlide>
                <BCarouselSlide :img-src="Img6">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Working at a coffee shop</h5>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring.
                    </p>
                  </div>
                </BCarouselSlide>
              </BCarousel>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Dark Variant --&gt;
  &lt;BCarousel class=&quot;carousel slide carousel-dark&quot; :interval=&quot;10000&quot; controls&gt;
    &lt;BCarouselSlide active :img-src=&quot;Img4&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Drawing a sketch&lt;/h5&gt;
        &lt;p&gt;
          Too much or too little spacing, as in the example below,
          can make things unpleasant for the reader.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/BCarouselSlide&gt;
    &lt;BCarouselSlide :img-src=&quot;Img5&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Blue clock on a pastel background&lt;/h5&gt;
        &lt;p&gt;
          In some designs, you might adjust your tracking to
          create a certain artistic effect asked them what graphic
          design tips they live.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/BCarouselSlide&gt;
    &lt;BCarouselSlide :img-src=&quot;Img6&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Working at a coffee shop&lt;/h5&gt;
        &lt;p&gt;
          A wonderful serenity has taken possession of my entire
          soul, like these sweet mornings of spring.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/BCarouselSlide&gt;
  &lt;/BCarousel&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>