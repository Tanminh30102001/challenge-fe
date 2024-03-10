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
};
</script>

<template>
  <Layout>
    <PageHeader title="Accordions" pageTitle="Base UI" />
    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Default Accordion" />

          <BCardBody>
            <p class="text-muted">
              Use the <code>b-accordion</code> for expand/collapse the accordion
              content.
            </p>
            <div class="live-preview">
              <BAccordion>
                <BAccordionItem title="How to create a group booking ?" visible>
                  Although you probably won’t get into any legal trouble if you
                  do it just once, why risk it? If you made your subscribers a
                  promise, you should honor that. If not, you run the risk of a
                  drastic increase in opt outs, which will only hurt you in the
                  long run.
                </BAccordionItem>
                <BAccordionItem title="Why do we use it ?">
                  No charges are put in place by SlickText when subscribers join
                  your text list. This does not mean however that charges 100%
                  will not occur. Charges that may occur fall under part of the
                  compliance statement stating "Message and Data rates may
                  apply."
                </BAccordionItem>
                <BAccordionItem title="Where does it come from ?">
                  Now that you have a general idea of the amount of texts you
                  will need per month, simply find a plan size that allows you
                  to have this allotment, plus some extra for growth. Don't
                  worry, there are no mistakes to be made here. You can always
                  upgrade and downgrade.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;b-accordion&gt;
  &lt;BAccordionItem title="How to create a group booking ?" visible&gt;
    Although you probably won’t get into any legal trouble if you
    do it just once, why risk it? If you made your subscribers a
    promise, you should honor that. If not, you run the risk of a
    drastic increase in opt outs, which will only hurt you in the
    long run.
    &lt;/BAccordionItem&gt;
  &lt;BAccordionItem title="Why do we use it ?"&gt;
    No charges are put in place by SlickText when subscribers join
    your text list. This does not mean however that charges 100%
    will not occur. Charges that may occur fall under part of the
    compliance statement stating "Message and Data rates may
    apply."
    &lt;/BAccordionItem&gt;
  &lt;BAccordionItem title="Where does it come from ?"&gt;
    Now that you have a general idea of the amount of texts you
    will need per month, simply find a plan size that allows you
    to have this allotment, plus some extra for growth. Don't
    worry, there are no mistakes to be made here. You can always
    upgrade and downgrade.
    &lt;/BAccordionItem&gt;
&lt;/b-accordion&gt;
</code>
</pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Accordion Flush" />

          <BCardBody>
            <p class="text-muted">
              Use <code>flush</code> class to remove the default
              background-color, some borders, and some rounded corners to render
              accordions edge-to-edge with their parent container.
            </p>
            <div class="live-preview">
              <BAccordion flush id="accordionFlushExample">
                <BAccordionItem title="How do I set up my profile ?" visible>
                  The renewal of your SlickText service happens on the
                  anniversary of your original paid sign up date. Upgrading in
                  the middle of your billing period will not change the billing
                  date. Upgrading does however force an immediate, pro-rated
                  charge to take place on your account.
                </BAccordionItem>
                <BAccordionItem title="What can I do with my project ?">
                  If you had signed up on a free account with Slicktext, then
                  upgraded to a paid plan at a later date, your bill will renew
                  based on the date you had upgraded to a paid plan. All
                  invoices are able to be viewed under your plan options in your
                  SlickText account.
                </BAccordionItem>
                <BAccordionItem title="Where can I go to edit voice settings">
                  No, we cannot provide this information. Opting out from a list
                  is an anonymous, private act. This prevents further
                  harassment. Providing this information is considered bad
                  practice, and further communication after they opt out would
                  be considered against compliance.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Accordion Flush Example --&gt;
&lt;b-accordion flush id=&quot;accordionFlushExample&quot;&gt;
&lt;BAccordionItem title="How do I set up my profile ?" visible&gt;
The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account.
 &lt;/BAccordionItem&gt;

If you had signed up on a free account with Slicktext, then
upgraded to a paid plan at a later date, your bill will renew
based on the date you had upgraded to a paid plan. All
invoices are able to be viewed under your plan options inyour
SlickText account.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="Where can I go to edit voice settings"If you had signed up on a free account with Slicktext, then
upgraded to a paid plan at a later date, your bill will renew
based on the date you had upgraded to a paid plan. All
invoices are able to be viewed under your plan options inyour
SlickText account.
 &lt;/BAccordionItem&gt;
&lt;b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Accordions with Icons" />

          <BCardBody>
            <p class="text-muted">
              Use <code>custom-accordionwithicon</code> class to show custom
              icon at accordion.
            </p>
            <BAccordion class="custom-accordionwithicon accordion-secondary" id="accordionWithicon">
              <BAccordionItem visible>
                <template #title>
                  <i class="ri-global-line me-2"></i> How Does Age Verification Work?
                </template>
                Increase or decrease the letter spacing depending on the
                situation and try, try again until it looks right, and
                each assumenda labore aes Homo nostrud organic, assumenda
                labore aesthetic magna elements, buttons, everything.
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="ri-user-location-line me-2"></i>How Does Link Tracking Work?
                </template>
                Nullam quis ante. Etiam sit amet orci eget eros faucibus
                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales, augue velit cursus nunc, quis gravida
                magna mi a libero. Fusce vulputate eleifend sapien.
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
                </template>
                Cras ultricies mi eu turpis hendrerit fringilla.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; In ac dui quis mi
                consectetuer lacinia. Nam pretium turpis et arcu arcu
                tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                aliquam ultrices mauris.
              </BAccordionItem>
            </BAccordion>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Accordions with Icons --&gt;
&lt;b-accordion class=&quot;custom-accordionwithicon&quot; id=&quot;accordionWithicon&quot;&gt;
&lt;BAccordionItem title="How Does Age Verification Work?" visible&gt;
Increase or decrease the letter spacing depending on the
situation and try, try again until it looks right, and
each assumenda labore aes Homo nostrud organic, assumenda
labore aesthetic magna elements, buttons, everything.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="How Does Link Tracking Work?"&gt;
Nullam quis ante. Etiam sit amet orci eget eros faucibus
tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
Donec sodales sagittis magna. Sed consequat, leo eget
bibendum sodales, augue velit cursus nunc, quis gravida
magna mi a libero. Fusce vulputate eleifend sapien.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="How Do I Set Up the Drip Feature?" &gt;
Cras ultricies mi eu turpis hendrerit fringilla.
Vestibulum ante ipsum primis in faucibus orci luctus et
ultrices posuere cubilia Curae; In ac dui quis mi
consectetuer lacinia. Nam pretium turpis et arcu arcu
tortor, suscipit eget, imperdiet nec, imperdiet iaculis
aliquam ultrices mauris.
 &lt;/BAccordionItem&gt;
&lt;/b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Accordions without Icons" />

          <BCardBody>
            <p class="text-muted">
              Use <code>accordion-icon-none</code> class to remove icon at
              accordion.
            </p>
            <BAccordion class="accordion-icon-none" id="accordionWithicon">
              <BAccordionItem visible>
                <template #title>
                  <i class="ri-global-line me-2"></i> How Does Age Verification Work?
                </template>
                Each design is a new, unique piece of art birthed into
                this world, and while you have the opportunity to be
                creative and make your own style choices. For that very
                reason, I went on a quest and spoke to many different
                professional graphic designers.
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="ri-user-location-line me-2"></i>How Does Link Tracking Work?
                </template>
                When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray
                gleams steal into the inner sanctuary, I throw myself down
                among the tall grass by the trickling stream; and, as I
                lie close to the earth, a thousand unknown.
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
                </template>
                Cras ultricies mi eu turpis hendrerit fringilla.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; In ac dui quis mi
                consectetuer lacinia. Nam pretium turpis et arcu arcu
                tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                aliquam ultrices mauris.
              </BAccordionItem>
            </BAccordion>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Accordions with Icons --&gt;
&lt;b-accordion class=&quot;custom-accordionwithicon&quot; id=&quot;accordionWithicon&quot;&gt;
&lt;BAccordionItem title="How Does Age Verification Work?" visible&gt;
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="How Does Link Tracking Work?"&gt;
Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
 &lt;/BAccordionItem&gt; 

&lt;BAccordionItem title="How Do I Set Up the Drip Feature?" visible&gt;
Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
 &lt;/BAccordionItem&gt;
&lt;/b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="12">
        <BCard no-body>
          <CardHeader title="Accordions with Plus Icon" />

          <BCardBody>
            <p class="text-muted">
              Use <code>custom-accordionwithicon-plus</code> class to show plus
              icon at the accordion.
            </p>
            <div class="live-preview">
              <BAccordion class="custom-accordionwithicon-plus" id="accordionWithplusicon">
                <BAccordionItem title="What is User Interface Design?" visible>
                  Big July earthquakes confound zany experimental vow. My
                  girl wove six dozen plaid jackets before she quit. Six big
                  devils from Japan quickly forgot how to waltz. try again
                  until it looks right, and each assumenda labore aes Homo
                  nostrud organic, assumenda labore aesthetic magna
                  elements, buttons, everything.
                </BAccordionItem>
                <BAccordionItem title="What is Digital Marketing?">
                  It makes a statement, it’s impressive graphic design.
                  Increase or decrease the letter spacing depending on the
                  situation and try, try again until it looks right, and
                  each letter has the perfect spot of its own. commodo enim
                  craft beer mlkshk aliquip jean shorts ullamco.
                </BAccordionItem>
                <BAccordionItem title="Where does it come from ?">
                  Spacing depending on the situation and try, try again
                  until it looks right, and each. next level wes anderson
                  artisan four loko farm-to-table craft beer twee. commodo
                  enim craft beer mlkshk aliquip jean shorts ullamco. omo
                  nostrud organic, assumenda labore aesthetic magna
                  delectus. pposites attract, and that’s a fact.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Accordions with Plus Icon --&gt;
&lt;b-accordion class=&quot;custom-accordionwithicon-plus&quot; id=&quot;accordionWithplusicon&quot;&gt;

&lt;BAccordionItem title="What is User Interface Design?" visible&gt;
Big July earthquakes confound zany experimental vow. My
girl wove six dozen plaid jackets before she quit. Sixbig
devils from Japan quickly forgot how to waltz. try again
until it looks right, and each assumenda labore aes Homo
nostrud organic, assumenda labore aesthetic magna
elements, buttons, everything.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="What is Digital Marketing?" visible&gt;
It makes a statement, it’s impressive graphic design.
Increase or decrease the letter spacing depending on the
situation and try, try again until it looks right, and
each letter has the perfect spot of its own. commodo enim
craft beer mlkshk aliquip jean shorts ullamco.
 &lt;/BAccordionItem&gt;

&lt;BAccordionItem title="Where does it come from ?" visible&gt;
Spacing depending on the situation and try, try again
until it looks right, and each. next level wes anderson
artisan four loko farm-to-table craft beer twee. commodo
enim craft beer mlkshk aliquip jean shorts ullamco. omo
nostrud organic, assumenda labore aesthetic magna
delectus. pposites attract, and that’s a fact.
 &lt;/BAccordionItem&gt;
&lt;/b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Left Icon Accordions" />

          <BCardBody>
            <p class="text-muted">
              Use <code>lefticon-accordion</code> class to show the icon on the
              left side of the accordion.
            </p>
            <div class="live-preview">
              <BAccordion class="
                  lefticon-accordion
                  custom-accordionwithicon
                  accordion-border-box
                " id="accordionlefticon">
                <BAccordionItem title="What is User Interface Design?" visible>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia
                  aute, non cupidatat skateboard dolor brunch. Food truck
                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua nulla assumenda shoreditch et.
                </BAccordionItem>
                <BAccordionItem title="What is Digital Marketing?">
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                  Donec sodales sagittis magna. Sed consequat, leo eget
                  bibendum sodales, augue velit cursus nunc, quis gravida
                  magna mi a libero. Fusce vulputate eleifend sapien.
                </BAccordionItem>
                <BAccordionItem title="Where does it come from ?">
                  Cras ultricies mi eu turpis hendrerit fringilla.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; In ac dui quis mi
                  consectetuer lacinia. Nam pretium turpis et arcu arcu
                  tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                  aliquam ultrices mauris.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Left Icon Accordions --&gt;
&lt;b-accordion class=&quot;lefticon-accordion custom-accordionwithicon accordion-border-box&quot; id=&quot;accordionlefticon&quot;&gt;

&lt;BAccordionItem title="What is User Interface Design?" visible&gt;
Anim pariatur cliche reprehenderit, enim eiusmod high life
accusamus terry richardson ad squid. 3 wolf moon officia
aute, non cupidatat skateboard dolor brunch. Food truck
quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
tempor, sunt aliqua nulla assumenda shoreditch et.
&lt;/BAccordionItem&gt;

&lt;BAccordionItem title="What is Digital Marketing?" visible&gt;
Nullam quis ante. Etiam sit amet orci eget eros faucibus
tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
Donec sodales sagittis magna. Sed consequat, leo eget
bibendum sodales, augue velit cursus nunc, quis gravida
magna mi a libero. Fusce vulputate eleifend sapien.
&lt;/BAccordionItem&gt;

&lt;BAccordionItem title="Where does it come from ?" visible&gt;
Cras ultricies mi eu turpis hendrerit fringilla.
Vestibulum ante ipsum primis in faucibus orci luctus et
ultrices posuere cubilia Curae; In ac dui quis mi
consectetuer lacinia. Nam pretium turpis et arcu arcu
tortor, suscipit eget, imperdiet nec, imperdiet iaculis
aliquam ultrices mauris.
&lt;/BAccordionItem&gt;

&lt;/b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Accordions Bordered" />

          <BCardBody>
            <p class="text-muted">
              Use <code>custom-accordion-border</code> class to create the
              border at the accordion.
            </p>
            <div class="live-preview">
              <BAccordion class="
                  custom-accordionwithicon custom-accordion-border
                  accordion-border-box accordion-success
                " id="accordionBordered">
                <BAccordionItem title="What is User Interface Design?" visible>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia
                  aute, non cupidatat skateboard dolor brunch. Food truck
                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua nulla assumenda shoreditch et.
                </BAccordionItem>
                <BAccordionItem title="What is Digital Marketing?">
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                  Donec sodales sagittis magna. Sed consequat, leo eget
                  bibendum sodales, augue velit cursus nunc, quis gravida
                  magna mi a libero. Fusce vulputate eleifend sapien.
                </BAccordionItem>
                <BAccordionItem title="Where does it come from ?">
                  Cras ultricies mi eu turpis hendrerit fringilla.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; In ac dui quis mi
                  consectetuer lacinia. Nam pretium turpis et arcu arcu
                  tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                  aliquam ultrices mauris.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Accordions Bordered --&gt;
&lt;b-accordion class=&quot; custom-accordionwithicon custom-accordion-border accordion-border-box accordion-secondary&quot; id=&quot;accordionBordered&quot;&gt;
&lt;BAccordionItem title="What is User Interface Design?" visible&gt;
Anim pariatur cliche reprehenderit, enim eiusmod high life
accusamus terry richardson ad squid. 3 wolf moon officia
aute, non cupidatat skateboard dolor brunch. Food truck
quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
tempor, sunt aliqua nulla assumenda shoreditch et.
&lt;/BAccordionItem&gt;

&lt;BAccordionItem title="What is Digital Marketing?"
Nullam quis ante. Etiam sit amet orci eget eros faucibus
tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
Donec sodales sagittis magna. Sed consequat, leo eget
bibendum sodales, augue velit cursus nunc, quis gravida
magna mi a libero. Fusce vulputate eleifend sapien.
&lt;/BAccordionItem&gt;

&lt;BAccordionItem title="Where does it come from ?"
If you had Cras ultricies mi eu turpis hendrerit fringilla.
Vestibulum ante ipsum primis in faucibus orci luctus et
ultrices posuere cubilia Curae; In ac dui quis mi
consectetuer lacinia. Nam pretium turpis et arcu arcu
tortor, suscipit eget, imperdiet nec, imperdiet iaculis
aliquam ultrices mauris.
&lt;/BAccordionItem&gt;

&lt;/b-accordion&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="12">
        <BCard no-body>
          <CardHeader title="Nesting Accordions" />

          <BCardBody>
            <p class="text-muted">
              Use <code>nesting-accordion</code> class to create a nesting
              accordion.
            </p>
            <div class="live-preview">
              <BAccordion class="custom-accordionwithicon accordion-border-box" id="accordionnesting">
                <BAccordionItem title="How Do I Add Contacts/Subscribers?" visible>
                  This opt in method is perfect for those looking to
                  integrate a different software such Shopify or Hubspot
                  with Slicktext. For example, upon cashing out online, a
                  subscriber may submit to have their mobile number to
                  receive marketing messages. The API will pass this
                  information from said software over to Slicktext via API
                  integration.
                  <BAccordion class="
                          nesting2-accordion
                          custom-accordionwithicon
                          accordion-border-box
                          mt-3
                        " id="accordionnesting2">
                    <BAccordionItem title="How Do I Search For Contacts?" visible>
                      When you are in need of finding a specific
                      subscriber, you will want to use the help of
                      SlickText's search navigation tool, located under
                      the Contacts tab of your Slicktext account. Once
                      here, you will have options to sort by, filter,
                      and search your contacts.
                      <BAccordion class="
                                  nesting4-accordion
                                  custom-accordionwithicon
                                  accordion-border-box
                                  mt-3
                                " id="accordionnesting4">
                        <BAccordionItem title="How do I reset my digital tide watch ?">
                          Opting out a subscriber will allow
                          SlickText to maintain the history of the
                          subscriber as it pertains to the textword
                          you are opting them out of. If this user
                          was to text to join again, the initial
                          text they are met with will be a "welcome
                          back" message instead of the auto reply.
                        </BAccordionItem>
                      </BAccordion>
                    </BAccordionItem>
                    <BAccordionItem title="How Do I Delete a Contact From My List?">
                      Opting out a subscriber will allow SlickText to
                      maintain the history of the subscriber as it
                      pertains to the textword you are opting them out
                      of. If this user was to text to join again, the
                      initial text they are met with will be a "welcome
                      back" message instead of the auto reply.
                    </BAccordionItem>
                  </BAccordion>
                </BAccordionItem>
                <BAccordionItem title="How Does Personalization Work?">

                  Personalization allows you to provide a personal touch to
                  your outbound text marketing campaigns. SlickText uses
                  merge tags as placeholders that are replaced with
                  contact-specific information when a text message is sent.
                  These merge tags may also be known as personalization
                  fields.
                  <div class="
                          accordion
                          nesting3-accordion
                          custom-accordionwithicon
                          accordion-border-box
                          mt-3
                        " id="accordionnesting3">
                    <div class="accordion-item mt-2">
                      <h2 class="accordion-header" id="accordionnesting3Example2">
                        <BButton variant="link" class="accordion-button collapsed" data-bs-toggle="collapse"
                          data-bs-target="#accor_nesting3Examplecollapse2" aria-expanded="false"
                          aria-controls="accor_nesting3Examplecollapse2">
                          Howe does temperature impact my watch?
                        </BButton>
                      </h2>
                      <div id="accor_nesting3Examplecollapse2" class="accordion-collapse collapse"
                        aria-labelledby="accordionnesting3Example2" data-bs-parent="#accordionnesting3">
                        <div class="accordion-body">
                          Opting out a subscriber will allow SlickText to
                          maintain the history of the subscriber as it
                          pertains to the textword you are opting them out
                          of. If this user was to text to join again, the
                          initial text they are met with will be a "welcome
                          back" message instead of the auto reply.
                        </div>
                      </div>
                    </div>
                  </div>
                </BAccordionItem>
                <BAccordionItem title="What Happens When I Run Out of Messages?">
                  When you run out of messages, you will not be able to send
                  any outbound campaigns. This would include any scheduled
                  messages, drip campaigns, and birthday messages. However,
                  we will continue to deliver your auto-reply messages to
                  allow your subscriber list to continue to grow.
                </BAccordionItem>
              </BAccordion>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Nesting Accordions --&gt;
&lt;b-accordion class=&quot; nesting-accordion custom-accordionwithicon accordion-border-box&quot; id=&quot;accordionnesting&quot;&gt;
&lt;BAccordionItem title="How Do I Add Contacts/Subscribers?" visible&gt;
This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration.
&lt;/BAccordionItem&gt;

&lt;b-accordion class=&quot; nesting2-accordion custom-accordionwithicon accordion-border-box mt-3&quot; id=&quot;accordionnesting2&quot;&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
  &lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnesting2Example1&quot;&gt;
      &lt;button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nesting2Examplecollapse1&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;accor_nesting2Examplecollapse1&quot;&gt;
          How Do I Search For Contacts?
      &lt;/button&gt;
  &lt;/h2&gt;
  &lt;div id=&quot;accor_nesting2Examplecollapse1&quot; class=&quot;accordion-collapse collapse show&quot; aria-labelledby=&quot;accordionnesting2Example1&quot; data-bs-parent=&quot;#accordionnesting2&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
          When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts.
          &lt;div class=&quot;accordion nesting4-accordion custom-accordionwithicon accordion-border-box mt-3&quot; id=&quot;accordionnesting4&quot;&gt;
              &lt;div class=&quot;accordion-item&quot;&gt;
                  &lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnesting4Example2&quot;&gt;
                      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nesting4Examplecollapse2&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_nesting4Examplecollapse2&quot;&gt;
                          How do I reset my digital tide watch ?
                      &lt;/button&gt;
                  &lt;/h2&gt;
                  &lt;div id=&quot;accor_nesting4Examplecollapse2&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionnesting4Example2&quot; data-bs-parent=&quot;#accordionnesting4&quot;&gt;
                      &lt;div class=&quot;accordion-body&quot;&gt;
                          Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a &quot;welcome back&quot; message instead of the auto reply.
                      &lt;/div&gt;
                  &lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
  &lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnesting2Example2&quot;&gt;
      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nesting2Examplecollapse2&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_nesting2Examplecollapse2&quot;&gt;
          How Do I Delete a Contact From My List?
      &lt;/button&gt;
  &lt;/h2&gt;
  &lt;div id=&quot;accor_nesting2Examplecollapse2&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionnesting2Example2&quot; data-bs-parent=&quot;#accordionnesting2&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
          Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a &quot;welcome back&quot; message instead of the auto reply.
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;


&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnestingExample2&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nestingExamplecollapse2&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_nestingExamplecollapse2&quot;&gt;
How Does Personalization Work?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_nestingExamplecollapse2&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionnestingExample2&quot; data-bs-parent=&quot;#accordionnesting&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
&lt;div class=&quot;accordion nesting3-accordion custom-accordionwithicon accordion-border-box mt-3&quot; id=&quot;accordionnesting3&quot;&gt;
&lt;div class=&quot;accordion-item mt-2&quot;&gt;
  &lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnesting3Example2&quot;&gt;
      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nesting3Examplecollapse2&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_nesting3Examplecollapse2&quot;&gt;
          Howe does temperature impact my watch?
      &lt;/button&gt;
  &lt;/h2&gt;
  &lt;div id=&quot;accor_nesting3Examplecollapse2&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionnesting3Example2&quot; data-bs-parent=&quot;#accordionnesting3&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
          Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a &quot;welcome back&quot; message instead of the auto reply.
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionnestingExample3&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_nestingExamplecollapse3&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_nestingExamplecollapse3&quot;&gt;
What Happens When I Run Out of Messages?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_nestingExamplecollapse3&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionnestingExample3&quot; data-bs-parent=&quot;#accordionnesting&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/b-accordion &gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="12">
        <BCard no-body>
          <CardHeader title="Accordions Fill Colored"/>

          <BCardBody class="tab-content">
            <p class="text-muted">
              Use <code>accordion-fill-</code> class with modifier class to the color accordion.
            </p>
            <div class="tab-pane show active live-preview" id="fillColoredAccordionPreview" role="tabpanel"
              aria-labelledby="fillColoredAccordionPreview-tab" tabindex="0">
              <BRow>
                <BCol xxl="6">
                  <BAccordion class="custom-accordionwithicon accordion-fill-success" id="accordionFill">
                    <BAccordionItem title="What are webhooks?" visible>
                      Webhooks allow you to gather real time data on key interactions that happen
                      with your Slick Text account. Simply provide us with a url where you'd like
                      the data to be sent, choose which events you'd like to be informed of, and
                      click save.
                    </BAccordionItem>
                    <BAccordionItem title="Where can I find my Textword ID?">
                      Head over to the Textwords page. Click options on the right hand side, and
                      then click Settings. This will redirect you to your Textword Setting page.
                      Now, go check your url, and the textword ID will be the number after
                      "word=". Too much or too little spacing, as in the example below.
                    </BAccordionItem>
                    <BAccordionItem title="Where is your API documentation?">
                      You always want to make sure that your fonts work well together and try to
                      limit the number of fonts you use to three or less. Experiment and play
                      around with the fonts that you already have in the software you’re working
                      with reputable font websites.
                    </BAccordionItem>
                  </BAccordion>
                </BCol>
                <BCol xxl="6">
                  <BAccordion class="custom-accordionwithicon accordion-flush accordion-fill-secondary"
                    id="accordionFill2">
                    <BAccordionItem title="How Does Age Verification Work?" visible>
                      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
                      coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
                      level wes anderson artisan four loko farm-to-table craft beer twee. commodo
                      enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                    </BAccordionItem>
                    <BAccordionItem title="What Kind of List Growth Should I Expect?">
                      Consistency is the one thing that can take all of the different elements in
                      your design, and tie them all together and make them work. In an awareness
                      campaign, it is vital for people to begin put 2 and 2 together and begin to
                      recognize your cause. Consistency piques people’s interest.
                    </BAccordionItem>
                    <BAccordionItem title="How Do I Delete a Contact From My List?">
                      Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui
                      quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor,
                      suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                    </BAccordionItem>
                  </BAccordion>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
              <h5 class="fs-sm text-muted">HTML Preview</h5>
              <code>&lt;!-- Accordions Fill Colored --&gt;
&lt;div class=&quot;accordion custom-accordionwithicon accordion-fill-success&quot; id=&quot;accordionFill&quot;&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFillExample1&quot;&gt;
&lt;button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill1&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;accor_fill1&quot;&gt;
What are webhooks?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill1&quot; class=&quot;accordion-collapse collapse show&quot; aria-labelledby=&quot;accordionFillExample1&quot; data-bs-parent=&quot;#accordionFill&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Webhooks allow you to gather real time data on key interactions that happen with your Slick Text account. Simply provide us with a url where you'd like the data to be sent, choose which events you'd like to be informed of, and click save.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFillExample2&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill2&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_fill2&quot;&gt;
Where can I find my Textword ID?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill2&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionFillExample2&quot; data-bs-parent=&quot;#accordionFill&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Head over to the Textwords page. Click options on the right hand side, and then click Settings. This will redirect you to your Textword Setting page. Now, go check your url, and the textword ID will be the number after &quot;word=&quot;. Too much or too little spacing, as in the example below.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFillExample3&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill3&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_fill3&quot;&gt;
Where is your API documentation?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill3&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionFillExample3&quot; data-bs-parent=&quot;#accordionFill&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you&rsquo;re working with reputable font websites.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;accordion custom-accordionwithicon accordion-flush accordion-fill-secondary&quot; id=&quot;accordionFill2&quot;&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFill2Example1&quot;&gt;
&lt;button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill21&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;accor_fill21&quot;&gt;
How Does Age Verification Work?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill21&quot; class=&quot;accordion-collapse collapse show&quot; aria-labelledby=&quot;accordionFill2Example1&quot; data-bs-parent=&quot;#accordionFill2&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFill2Example2&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill22&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_fill22&quot;&gt;
What Kind of List Growth Should I Expect?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill22&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionFill2Example2&quot; data-bs-parent=&quot;#accordionFill2&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people&rsquo;s interest.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;accordion-item&quot;&gt;
&lt;h2 class=&quot;accordion-header&quot; id=&quot;accordionFill2Example3&quot;&gt;
&lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#accor_fill23&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;accor_fill23&quot;&gt;
How Do I Delete a Contact From My List?
&lt;/button&gt;
&lt;/h2&gt;
&lt;div id=&quot;accor_fill23&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;accordionFill2Example3&quot; data-bs-parent=&quot;#accordionFill2&quot;&gt;
&lt;div class=&quot;accordion-body&quot;&gt;
Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
&lt;/div&gt;
&lt;/div&gt;
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
          <CardHeader title="Collapse Example" />

          <BCardBody>
            <p class="text-muted">
              You can use a link with the <code>href</code> attribute, or a
              button with the <code>data-bs-target</code> attribute. In both
              cases, the <code>data-bs-toggle="collapse"</code> is required.
            </p>
            <div class="live-preview">
              <div class="hstack gap-2 flex-wrap mb-3">
                <BLink class="btn btn-primary" v-b-toggle.collapse-1 role="button"> Link with href </BLink>
                <BButton v-b-toggle.collapse-1 variant="primary">Button with data-bs-target</BButton>
              </div>
              <BCollapse id="collapse-1" visible>
                <BCard no-body class="mb-0">
                  <BCardBody>
                    When designing, the goal is to draw someone’s attention and
                    portray to them what you’re trying to say. You can make a
                    big statement by using little tricks, like this one. Use
                    contrasting fonts. you can use a bold sanserif font with a
                    cursive.
                  </BCardBody>
                </BCard>
              </BCollapse>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Collapse Example --&gt;

&lt;div class=&quot;hstack gap-2 flex-wrap mb-3&quot;&gt;
&lt;a class=&quot;btn btn-primary&quot; v-b-toggle=&quot;collapseExample&quot;&gt;
Link with href
&lt;/a&gt;
&lt;BButton variant="primary" v-b-toggle=&quot;collapseExample&quot;&gt;
Button with data-bs-target
&lt;/BButton&gt;
&lt;/div&gt;

&lt;BCollapse id=&quot;collapseExample&quot;&gt;
&lt;BCard class=&quot;mb-0&quot;&gt;
&lt;BCard no-body&gt;
When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
&lt;/BCard&gt;
&lt;/BCard&gt;
&lt;/BCollapse&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Horizontal Collapse" />

          <BCardBody>
            <p class="text-muted">
              Use the <code>collapse-horizontal</code> class to transition the
              <code>width</code> instead of <code>height</code> and set a
              <code>width</code> on the immediate child element for horizontal
              collapse.
            </p>
            <div class="live-preview">
              <div class="mb-3">
                <BButton variant="primary" type="button" v-b-toggle.collapse-2>
                  Toggle Width Collapse
                </BButton>
              </div>
              <div>
                <BCollapse id="collapse-2" class="collapse-horizontal" visible>
                  <BCard no-body class="card-body mb-0" style="width: 300px">
                    This is some placeholder content for a horizontal collapse.
                    It's hidden by default and shown when triggered.
                  </BCard>
                </BCollapse>
              </div>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Horizontal Collapse --&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;BButton variant=&quot;primary&quot; v-b-toggle=&quot;collapseWidthExample&quot;&gt;
Toggle width collapse
&lt;/BButton&gt;
&lt;/div&gt;

&lt;div&gt;
&lt;BCollapse class=&quot;collapse-horizontal show&quot; id=&quot;collapseWidthExample&quot;&gt;
&lt;BCard no-body class=&quot;mb-0&quot; style=&quot;width: 300px;&quot;&gt;
This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Collapse with Icon" />

          <BCardBody>
            <p class="text-muted">
              Here is the example of collapse in which the icon is wrapped
              within the button collapse toggle.
            </p>
            <div class="live-preview">
              <div class="hstack gap-3 mb-3">
                <BLink class="link-success" v-b-toggle.collapse-3 role="button">
                  <i class="ri-arrow-down-circle-line fs-16"></i>
                </BLink>
                <BButton variant="light" type="button" v-b-toggle.collapse-4>
                  <i class="ri-filter-2-line"></i>
                </BButton>
              </div>

              <BCollapse id="collapse-3" visible>
                <BCard no-body class="mb-0">
                  <BCardBody>
                    If you enter text including symbols in the search criteria,
                    the search criteria is interpreted exactly as you entered
                    it, and the search is case sensitive as a case insensitive
                    search that contains certain text but does also provide a
                    lot of search criteria options.
                  </BCardBody>
                </BCard>
              </BCollapse>

              <BCollapse id="collapse-4">
                <BCard no-body class="mb-0 mt-3">
                  <BCardBody>
                    When you want to search for data, such as customer names,
                    addresses, or product groups, you enter criteria. In search
                    criteria you can use all the numbers and letters that you
                    normally use in the specific field. In addition, you can use
                    special symbols to further filter the results.
                  </BCardBody>
                </BCard>
              </BCollapse>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Collapse with Icon --&gt;
&lt;div class=&quot;hstack gap-3 mb-3&quot;&gt;
&lt;a class=&quot;link-success&quot; v-b-toggle=&quot;#collapseWithicon&quot; role=&quot;button&quot;&gt;
&lt;i class=&quot;ri-arrow-down-circle-line fs-16&quot;&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;BButton variant=&quot;light&quot; v-b-toggle=&quot;collapseWithicon2&quot;&gt;
&lt;i class=&quot;ri-filter-2-line&quot;&gt;&lt;/i&gt;
&lt;/BButton&gt;
&lt;/div&gt;
&lt;BCollapse&quot; id=&quot;collapseWithicon&quot;&gt;
&lt;BCard class=&quot;mb-0&quot;&gt;
&lt;BCard no-body class=&quot;card-body&quot;&gt;
If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
&lt;/BCard&gt;
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;BCollapse id=&quot;collapseWithicon2&quot;&gt;
&lt;BCard class=&quot;mb-0&quot;&gt;
&lt;BCard no-body&gt;
When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
&lt;/BCard&gt;
&lt;/BCard&gt;
&lt;/BCollapse&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xxl="6">
        <BCard no-body>
          <CardHeader title="Inline & Block Element Collapse" />

          <BCardBody>
            <p class="text-muted">
              Inline element collapse takes all horizontal space hence you can
              activate the collapse within by clicking on full-width horizontal
              space. Block element collapse can be activated by clicking on
              collapse toggle only.
            </p>
            <div class="live-preview">
              <div class="mb-3">
                <h6 class="text-primary" v-b-toggle.collapse-5>
                  <code>&lt;h6&gt;</code> Inline Element Collapse
                </h6>
                <span role="button" class="text-primary fw-medium" v-b-toggle.collapse-6>
                  <code>&lt;span&gt;</code> Block Element Collapse
                </span>
              </div>
              <BRow class="g-2">
                <BCol cols="auto">
                  <BCollapse id="collapse-5" class="collapse-horizontal" visible>
                    <BCard no-body class="card-body mb-0" style="width: 300px">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring heart.
                    </BCard>
                  </BCollapse>
                </BCol>
                <BCol cols="auto">
                  <BCollapse id="collapse-6" class="collapse-horizontal" visible>
                    <BCard no-body class="card-body mb-0" style="width: 300px">
                      When you have created a new account schedule and set up
                      the rows, you must set up columns.
                    </BCard>
                  </BCollapse>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Inline & Block Element Collapse --&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;h6 class=&quot;text-primary&quot; v-b-toggle=&quot;collapseblock&quot;&gt;
&lt;h6&gt; Inline Element Collapse
&lt;/h6&gt;
&lt;span class=&quot;text-primary fw-medium&quot; v-b-toggle=&quot;collapseinline&quot;&gt;
&lt;span&gt; Block Element Collapse
&lt;/span&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;BCollapse class=&quot;collapse-horizontal show&quot; id=&quot;collapseblock&quot;&gt;
&lt;BCard no-body class=&quot;mb-0&quot; style=&quot;width: 300px;&quot;&gt;
A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;BCollapse class=&quot;collapse-horizontal show&quot; id=&quot;collapseinline&quot;&gt;
&lt;BCard no-body class=&quot;=mb-0&quot; style=&quot;width: 300px;&quot;&gt;
When you have created a new account schedule and set up the rows, you must set up columns.
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <CardHeader title="Multiple Targets Collapse" />
          <BCardBody>
            <p class="text-muted">
              A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show
              and hide multiple elements by referencing them with a selector in
              its href or data-bs-target attribute. Multiple
              <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and
              hide an element if they each reference it with their href or
              data-bs-target attribute.
            </p>
            <div class="live-preview">
              <div class="hstack gap-2 flex-wrap mb-3">
                <BLink class="btn btn-primary" v-b-toggle.collapse-7 role="button">Toggle First Element</BLink>
                <BButton variant="primary" v-b-toggle.collapse-8> Toggle Second Element </BButton>
                <BButton variant="primary" type="button" v-b-toggle.collapse-7.collapse-8> Toggle Both Elements
                </BButton>
              </div>
              <BRow>
                <BCol>
                  <BCollapse id="collapse-7" class="multi-collapse" visible>
                    <BCard no-body class="card-body mb-0">
                      Some placeholder content for the first collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </BCard>
                  </BCollapse>
                </BCol>
                <BCol>
                  <BCollapse id="collapse-8" class="multi-collapse" visible>
                    <BCard no-body class="card-body mb-0">
                      Some placeholder content for the second collapse component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the relevant
                      trigger.
                    </BCard>
                  </BCollapse>
                </BCol>
              </BRow>
            </div>
            <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Multiple Targets Example --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap mb-3&quot;&gt;
&lt;a class=&quot;btn btn-primary&quot; data-bs-toggle=&quot;collapse&quot; href=&quot;#multiCollapseExample1&quot; role=&quot;button&quot;&gt;Toggle first element&lt;/a&gt;
&lt;BButton variant=&quot;primary&quot; v-b-toggle=&quot;multiCollapseExample2&quot;&gt;Toggle second element&lt;/BButton&gt;
&lt;BButton variant=&quot;primary&quot; v-b-toggle=&quot;multi-collapse&quot;&gt;Toggle both elements&lt;/BButton&gt;
&lt;/div&gt;

&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col&quot;&gt;
&lt;BCollapse class=&quot;multi-collapse show&quot; id=&quot;multiCollapseExample1&quot;&gt;
&lt;BCard no-body class=&quot;mb-0&quot;&gt;
Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;/div&gt;
&lt;div class=&quot;col&quot;&gt;
&lt;BCollapse class=&quot;multi-collapse show&quot; id=&quot;multiCollapseExample2&quot;&gt;
&lt;BCard no-body class=&quot;card card-body mb-0&quot;&gt;
Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
&lt;/BCard&gt;
&lt;/BCollapse&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
