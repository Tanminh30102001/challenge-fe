<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";
import CardHeader from "@/common/card-header";

export default {
  components: {
    Layout,
    PageHeader,
    CardHeader
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Progress" pageTitle="Base UI" />
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Default Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>BProgress</code> tag to show default progress.
            </p>

            <div class="live-preview">
              <BProgress variant="primary" class="mb-4" :value="0" />

              <BProgress variant="primary" class="mb-4" :value="25" />

              <BProgress variant="primary" class="mb-4" :value="50" />

              <BProgress variant="primary" class="mb-4" :value="75" />

              <BProgress variant="primary" :value="100" />
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height:  275px">
<code>&lt;!-- Base Examples --&gt;
    &lt;BProgress :value=&quot;0&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;25&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;50&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;75&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;
    
    &lt;BProgress :value=&quot;100&quot;&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title=" Progress with background color " />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>variant=""</code> in progress bar class with the
              below-mentioned color variation to set the background color
              progress bar.
            </p>

            <div class="live-preview">
              <BProgress :value="15" variant="primary" class="mb-4"></BProgress>

              <BProgress :value="25" variant="success" class="mb-4"></BProgress>

              <BProgress :value="50" variant="info" class="mb-4"></BProgress>

              <BProgress :value="75" variant="warning" class="mb-4"></BProgress>

              <BProgress :value="100" variant="danger"></BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height:  275px">
<code>&lt;!-- Backgrounds --&gt;
    &lt;BProgress :value=&quot;15&quot; variant=&quot;primary&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;25&quot; variant=&quot;success&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;50&quot; variant=&quot;info&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;75&quot; variant=&quot;warning&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;100&quot; variant=&quot;danger&quot; class=&quot;mb-4&quot;&gt;&lt;/BProgress&gt;

    </code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Progress with Label" />

          <BCardBody>
            <p class="text-muted">
              Add labels to your progress bars by placing text within the
              progress-bar.
            </p>

            <div class="live-preview">
              <BProgress :value="25" variant="primary" class="mb-4" show-value></BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Labels Example --&gt;
    &lt;BProgress :value=&quot;25&quot; variant=&quot;primary&quot; class=&quot;mb-4&quot; show-value &gt;&lt;/BProgress&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Multiple Bars" />
  
          <BCardBody>
            <p class="text-muted">
              Use
              <code>bg-</code> class to progress bar class with the
              below-mentioned color to change the appearance of individual
              progress bars.
            </p>

            <div class="live-preview">
              <BProgress>
                <BProgress-bar :value="15" variant="primary" />
                <BProgress-bar :value="30" variant="success" />
                <BProgress-bar :value="20" variant="info" />
              </BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Multiple Bars --&gt;
&lt;BProgress&gt;
    &lt;BProgress-bar :value=&quot;15&quot; variant=&quot;primary&quot; /&gt;
    &lt;BProgress-bar :value=&quot;30&quot; variant=&quot;success&quot; /&gt;
    &lt;BProgress-bar :value=&quot;20&quot; variant=&quot;info&quot; /&gt;
&lt;/BProgress&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Height" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>progress-sm</code>, <code>progress-lg</code>, or
              <code>progress-xl</code> class to set the different heights of
              progress.
            </p>
            <div class="live-preview">
              <div class="mb-4">
                <h5 class="fs-13">Small Progress</h5>
                <BProgress :value="25" class="progress-sm" variant="primary" />
              </div>
              <div class="mb-4">
                <h5 class="fs-13">Default Progress</h5>
                <BProgress :value="40" variant="success" />
              </div>
              <div class="mb-4">
                <h5 class="fs-13">Large Progress</h5>
                <BProgress :value="50" class="progress-lg" variant="warning" />
              </div>
              <div>
                <h5 class="fs-13">Extra Large Progress</h5>
                <BProgress :value="70" class="progress-xl" variant="danger" />
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height:  275px">
<code>&lt;!-- Prgress sm --&gt;
    &lt;BProgress :value=&quot;25&quot; class=&quot;progress-sm&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;40&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;50&quot; class=&quot;progress-lg&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress :value=&quot;70&quot; class=&quot;progress-xl&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Striped Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>progress-bar-striped</code> class to add strip to the
              progress.
            </p>
            <div class="live-preview">
              <BProgress striped :value="25" class="mb-4" variant="primary" />
              <BProgress striped :value="40" variant="success" />
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Striped Prgress --&gt;
    &lt;BProgress striped :value=&quot;25&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

    &lt;BProgress striped :value=&quot;40&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <CardHeader title="Animated Striped Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>progress-bar-striped progress-bar-animated</code> class to
              add strip with animation to the progress.
            </p>

            <div class="live-preview">
              <BProgress striped animated :value="75" variant="primary" />
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;BProgress striped animated :value=&quot;75&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Gradient Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>bg-gradient</code> class to show gradient progress bar.
            </p>

            <div class="live-preview">

              <BProgress class="mb-4">
                <BProgress-bar :value="15" variant="primary" class="bg-gradient" />
              </BProgress>

              <BProgress class="mb-4">
                <BProgress-bar :value="25" variant="success" class="bg-gradient" />
              </BProgress>

              <BProgress class="mb-4">
                <BProgress-bar :value="50" variant="info" class="bg-gradient" />
              </BProgress>

              <BProgress class="mb-4">
                <BProgress-bar :value="75" variant="warning" class="bg-gradient" />
              </BProgress>

              <BProgress>
                <BProgress-bar :value="100" variant="danger" class="bg-gradient" />
              </BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>
&lt;BProgress :value=&quot;15&quot;  class=&quot;bg-gradient&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress :value=&quot;25&quot;  class=&quot;bg-gradient&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress :value=&quot;50&quot;  class=&quot;bg-gradient&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress :value=&quot;75&quot;  class=&quot;bg-gradient&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress :value=&quot;100&quot; class=&quot;bg-gradient&quot;  variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
    </code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Animated Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>animated-progess</code> class to show progress with
              animation.
            </p>
            <div class="live-preview">

              <BProgress class="animated-progress mb-4">
                <BProgress-bar :value="15" variant="primary" />
              </BProgress>

              <BProgress class="animated-progress mb-4">
                <BProgress-bar :value="25" variant="success" />
              </BProgress>

              <BProgress class="animated-progress mb-4">
                <BProgress-bar :value="50" variant="info" />
              </BProgress>

              <BProgress class="animated-progress mb-4">
                <BProgress-bar :value="75" variant="warning" />
              </BProgress>

              <BProgress class="animated-progress">
                <BProgress-bar :value="100" variant="danger" />
              </BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>
&lt;BProgress animated :value=&quot;15&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;25&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;50&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;75&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;100&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Custom Progress" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>animated-progess custom-progess</code> class to show custom
              progress with animation.
            </p>
            <div class="live-preview">

              <BProgress class="animated-progress custom-progress mb-4">
                <BProgress-bar :value="15" variant="primary" />
              </BProgress>

              <BProgress class="animated-progress custom-progress mb-4">
                <BProgress-bar :value="25" variant="success" />
              </BProgress>

              <BProgress class="animated-progress custom-progress mb-4">
                <BProgress-bar :value="50" variant="info" />
              </BProgress>

              <BProgress class="animated-progress custom-progress mb-4">
                <BProgress-bar :value="75" variant="warning" />
              </BProgress>

              <BProgress class="animated-progress custom-progress mb-4">
                <BProgress-bar :value="100" variant="danger" />
              </BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>
&lt;BProgress animated :value=&quot;15&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;primary&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;25&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;50&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;info&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;75&quot; class=&quot;custom-progress mb-4&quot; variant=&quot;warning&quot;&gt;&lt;/BProgress&gt;

&lt;BProgress animated :value=&quot;100&quot; class=&quot;custom-progress&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Custom Progress with Label" />

          <BCardBody>
            <p class="text-muted">
              Use
              <code>animated-progess custom-progess progress-label</code> class
              to show custom progress with animation and label.
            </p>
            <div class="live-preview">
              <div class="d-flex align-items-center pb-2 mt-4">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="
                        avatar-title
                        bg-light
                        rounded-circle
                        text-muted
                        fs-16
                      ">
                      <i class="mdi mdi-facebook"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <BProgress class="animated-progress custom-progress progress-label">
                    <BProgress-bar :value="15" variant="primary">
                    <div class="label">15%</div>
                    </BProgress-bar>
                  </BProgress>
                </div>
              </div>

              <div class="d-flex align-items-center py-2">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="
                        avatar-title
                        bg-light
                        rounded-circle
                        text-muted
                        fs-16
                      ">
                      <i class="mdi mdi-twitter"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">

                  <BProgress class="animated-progress custom-progress progress-label">
                    <BProgress-bar :value="25" variant="success">
                    <div class="label">25%</div>
                    </BProgress-bar>
                  </BProgress>
                </div>
              </div>

              <div class="d-flex align-items-center py-2">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="
                        avatar-title
                        bg-light
                        rounded-circle
                        text-muted
                        fs-16
                      ">
                      <i class="mdi mdi-github"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <BProgress class="animated-progress custom-progress progress-label">
                    <BProgress-bar :value="30" variant="info">
                    <div class="label">30%</div>
                    </BProgress-bar>
                  </BProgress>
                </div>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height:  275px">
<code>&lt;div class=&quot;d-flex align-items-center pb-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-facebook&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;15&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;primary&quot;&gt;15%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-twitter&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;25&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;success&quot;&gt;25%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center py-2&quot;&gt;
    &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
        &lt;div class=&quot;avatar-xs&quot;&gt;
            &lt;div class=&quot;avatar-title bg-light rounded-circle text-muted fs-16&quot;&gt;
                &lt;i class=&quot;mdi mdi-github&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;BProgress animated :value=&quot;50&quot; class=&quot;custom-progress progress-label&quot; variant=&quot;info&quot;&gt;50%&lt;/BProgress&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Content Progress" />

          <BCardBody>
            <p class="text-muted pb-2">
              Example of progress with content wrapped in progress.
            </p>

            <div class="live-preview">
              <BCard no-body class="bg-light overflow-hidden shadow-none">
                <BCardBody>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <b class="text-secondary">30%</b> Update in progress...
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <h6 class="mb-0">1 min left</h6>
                    </div>
                  </div>
                </BCardBody>

                <BProgress class="bg-secondary-subtle rounded-0">
                  <BProgress-bar :value="30" variant="secondary" />
                </BProgress>
              </BCard>

              <BCard no-body class="bg-light overflow-hidden shadow-none">
                <BCardBody>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <b class="text-success">60%</b> Update in progress...
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <h6 class="mb-0">45s left</h6>
                    </div>
                  </div>
                </BCardBody>

                <BProgress class="bg-success-subtle rounded-0">
                  <BProgress-bar :value="60" variant="success" />
                </BProgress>
              </BCard>

              <BCard no-body class="bg-light overflow-hidden shadow-none">
                <BCardBody>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-0">
                        <b class="text-danger">82%</b> Update in progress...
                      </h6>
                    </div>
                    <div class="flex-shrink-0">
                      <h6 class="mb-0">25s left</h6>
                    </div>
                  </div>
                </BCardBody>

                <BProgress class="bg-danger-subtle rounded-0">
                  <BProgress-bar :value="82" variant="danger" />
                </BProgress>
              </BCard>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup" style="max-height:  275px">
<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-secondary&quot;&gt;30%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;1 min left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;30&quot; class=&quot;custom-progress bg-secondary-subtle rounded-0&quot; variant=&quot;secondary&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-success&quot;&gt;60%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;45s left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;60&quot; class=&quot;custom-progress bg-success-subtle rounded-0&quot; variant=&quot;success&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code>

<code>&lt;BCard class=&quot;bg-light overflow-hidden&quot;&gt;
    &lt;BCard no-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;&lt;b class=&quot;text-danger&quot;&gt;82%&lt;/b&gt; Update in progress...&lt;/h6&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;h6 class=&quot;mb-0&quot;&gt;25s left&lt;/h6&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/BCard&gt;
&lt;BProgress :value=&quot;82&quot; class=&quot;custom-progress bg-danger-subtle rounded-0&quot; variant=&quot;danger&quot;&gt;&lt;/BProgress&gt;
&lt;/BCard&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Progress with Steps" />

          <BCardBody>
            <p class="text-muted pb-2">
              Here is the example of progress which is represented by steps
              completion.
            </p>

            <div class="live-preview">
              <div class="position-relative m-4">

                <BProgress style="max-height: 1px">
                  <BProgress-bar :value="50" variant="primary" />
                </BProgress>

                <BButton pill variant="primary" size="sm" type="button" class="
                    position-absolute
                    top-0
                    start-0
                    translate-middle
                    
                  " style="width: 2rem; height: 2rem">
                  1
                </BButton>
                <BButton pill variant="primary" size="sm" type="button" class="
                    position-absolute
                    top-0
                    start-50
                    translate-middle
                    
                  " style="width: 2rem; height: 2rem">
                  2
                </BButton>
                <BButton pill variant="light" size="sm" type="button" class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    
                  " style="width: 2rem; height: 2rem">
                  3
                </BButton>
              </div>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;div class=&quot;position-relative m-4&quot;&gt;
    &lt;div class=&quot;progress&quot; style=&quot;height: 1px;&quot;&gt;
        &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 50%;&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;primary&quot; class=&quot;position-absolute top-0 start-0 translate-middle rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;1&lt;/BButton&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;primary&quot; class=&quot;position-absolute top-0 start-50 translate-middle rounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;2&lt;/BButton&gt;
    &lt;BButton size=&quot;sm&quot; variant=&quot;light&quot; class=&quot;position-absolute top-0 start-100 translate-middlerounded-pill&quot; style=&quot;width: 2rem; height:2rem;&quot;&gt;3&lt;/BButton&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <CardHeader title="Step Progress with Arrow" />

          <BCardBody>
            <p class="text-muted pb-2">
              Use
              <code>progress-step-arrow</code> class to create step progress with
              an arrow.
            </p>

            <div class="live-preview">

              <BProgress class="progress-step-arrow progress-info">
                <BProgress-bar :value="100">
                  Step 1
                </BProgress-bar>

                <BProgress-bar :value="100">
                  Step 2
                </BProgress-bar>

                <BProgress-bar :value="100" variant="light" class="text-body">
                  Step 3
                </BProgress-bar>
              </BProgress>
            </div>

            <div class="d-none code-view">
              <pre class="language-markup">
<code>
&lt;BProgress class=&quot;progress-step-arrow progress-info&quot;&gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;primary&quot; &gt;Step 1 &lt;BProgress &gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;primary&quot; &gt;Step 2 &lt;BProgress &gt;
    &lt;BProgress :value=&quot;33&quot; variant=&quot;light&quot; &gt;Step 3 &lt;BProgress &gt;
&lt;/BProgress&gt;
    </code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>