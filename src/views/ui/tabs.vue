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
        <PageHeader title="Tabs" pageTitle="Base UI" />
        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Default Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>b-tabs</code> to generate a default tabbed interface.</p>

                        <BTabs nav-class="mb-3">
                            <BTab title="Home">
                                <h6>Graphic Design</h6>
                                <p class="mb-0 text-muted">
                                    They all have something to say beyond the words on the page. They can come across as
                                    casual or neutral, exotic or graphic. That's why it's important to think about your
                                    message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry
                                    richardson ex squid.
                                </p>
                            </BTab>
                            <BTab title="Product" active>
                                <h6>Product</h6>
                                <p class="mb-0 text-muted">
                                    You've probably heard that opposites attract. The same is true for fonts. Don't be
                                    afraid to combine font styles that are different but complementary, like sans serif with
                                    serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo
                                    enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                </p>
                            </BTab>
                            <BTab title="Messages">
                                <h6>Messages</h6>
                                <p class="mb-0 text-muted">
                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                </p>
                            </BTab>
                            <BTab title="Settings">
                                <h6>Settings</h6>
                                <p class="mb-0 text-muted">
                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                    art party before they sold out master cleanse gluten-free squid
                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                    art party locavore wolf cliche high life echo park Austin. Cred
                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                    farm-to-table VHS.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Justify Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>&lt;b-nav tabs justified&gt;</code> class to generate
                            equal-width elements with all horizontal space will be occupied by nav links.</p>

                        <BTabs nav-class="mb-3" justified>
                            <BTab title="Home" class="nav-item">
                                <h6>Graphic Design</h6>
                                <p class="mb-0 text-muted">
                                    They all have something to say beyond the words on the page. They can come across as
                                    casual or neutral, exotic or graphic. That's why it's important to think about your
                                    message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry
                                    richardson ex squid.
                                </p>
                            </BTab>
                            <BTab title="Product" active>

                            </BTab>
                            <BTab title="Messages">
                                <h6>Messages</h6>
                                <p class="mb-0 text-muted">
                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                </p>
                            </BTab>
                            <BTab title="Settings" class="nav-item">
                                <h6>Settings</h6>
                                <p class="mb-0 text-muted">
                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                    art party before they sold out master cleanse gluten-free squid
                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                    art party locavore wolf cliche high life echo park Austin. Cred
                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                    farm-to-table VHS.
                                </p>
                            </BTab>
                        </BTabs>

                        <div class="tab-content  text-muted">
                            <div class="tab-pane" id="base-justified-home" role="tabpanel">
                                <h6>Graphic Design</h6>
                                <p class="mb-0">
                                    They all have something to say beyond the words on the page. They can come across as
                                    casual or neutral,
                                    exotic or graphic. That's why it's important to think about your message, then choose a
                                    font that fits.
                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                </p>
                            </div>
                            <div class="tab-pane active" id="product" role="tabpanel">
                                <h6>Product</h6>
                                <p class="mb-0">
                                    You've probably heard that opposites attract. The same is true for fonts. Don't be
                                    afraid to combine
                                    font styles that are different but complementary, like sans serif with serif, short with
                                    tall, or
                                    decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk
                                    aliquip jean shorts
                                    ullamco ad vinyl cillum PBR.
                                </p>
                            </div>
                            <div class="tab-pane" id="base-justified-messages" role="tabpanel">
                                <h6>Messages</h6>
                                <p class="mb-0">
                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                </p>
                            </div>
                            <div class="tab-pane" id="base-justified-settings" role="tabpanel">
                                <h6>Settings</h6>
                                <p class="mb-0">
                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                    art party before they sold out master cleanse gluten-free squid
                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                    art party locavore wolf cliche high life echo park Austin. Cred
                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                    farm-to-table VHS.
                                </p>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Pills Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>&lt;b-nav card-header pills&gt;</code> class to generate
                            particular selected nav links without borders.</p>

                        <BTabs nav-class="nav-success mb-3" pills>
                            <BTab title="Home" active>
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Too much or too little spacing, as in the example below, can make things
                                            unpleasant
                                            for the reader. The goal is to make your text as comfortable to read as
                                            possible.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            In some designs, you might adjust your tracking to create a certain artistic
                                            effect.
                                            It can also help you fix fonts that are poorly spaced to begin with.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            A wonderful serenity has taken possession of my entire soul, like these sweet
                                            mornings of spring which I enjoy with my whole heart.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Each design is a new, unique piece of art birthed into this world, and while you
                                            have the opportunity to be creative and make your own style choices.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            For that very reason, I went on a quest and spoke to many different professional
                                            graphic designers and asked them what graphic design tips they live.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings">
                                <div class="text-muted">
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            For that very reason, I went on a quest and spoke to many different professional
                                            graphic designers and asked them what graphic design tips they live.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            After gathering lots of different opinions and graphic design basics, I came up
                                            with
                                            a list of 30 graphic design tips that you can start implementing.
                                        </div>
                                    </div>
                                </div>

                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Pills Justified Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>&lt;b-nav card-header pills justified&gt;</code> class to
                            generate equal-width elements without borders, all horizontal space will be occupied by nav
                            links.</p>

                        <BTabs nav-class="mb-3" pills justified>
                            <BTab title="Home" active>
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Too much or too little spacing, as in the example below, can make things
                                            unpleasant
                                            for the reader. The goal is to make your text as comfortable to read as
                                            possible.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            In some designs, you might adjust your tracking to create a certain artistic
                                            effect.
                                            It can also help you fix fonts that are poorly spaced to begin with.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            A wonderful serenity has taken possession of my entire soul, like these sweet
                                            mornings of spring which I enjoy with my whole heart.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Each design is a new, unique piece of art birthed into this world, and while you
                                            have the opportunity to be creative and make your own style choices.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            For that very reason, I went on a quest and spoke to many different professional
                                            graphic designers and asked them what graphic design tips they live.
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings">
                                <div class="text-muted">
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            For that very reason, I went on a quest and spoke to many different professional
                                            graphic designers and asked them what graphic design tips they live.
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            After gathering lots of different opinions and graphic design basics, I came up
                                            with
                                            a list of 30 graphic design tips that you can start implementing.
                                        </div>
                                    </div>
                                </div>

                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Vertical Nav Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>flex-column</code> class to create Vertical nav tabs.</p>
                        <BRow>
                            <BTabs navClass="flex-md-column text-center" navWrapperClass="col-md-3"
                                contentClass="text-muted mt-4 mt-md-0 col-md-9" pills vertical justified>
                                <BTab title="Home" active>
                                    <div class="d-flex mb-2">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-4.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">You always want to make sure that your fonts work well
                                                together and try to limit the number of fonts you use to three or less.
                                                Experiment and play around with the fonts that you already have in the
                                                software you’re working with reputable font websites.</p>
                                        </div>
                                    </div>
                                    <p class="mb-0">
                                        This may be the most commonly encountered tip I received from the designers I
                                        spoke with. They highly encourage that you use different fonts in one design,
                                        but do not over-exaggerate and go overboard.
                                    </p>
                                </BTab>
                                <BTab title="Profile">
                                    <div class="d-flex mb-2">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-5.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0"> I also decreased the transparency in the text so that the
                                                mountains come through the text, bringing the quote truly to life. Make
                                                sure that the placement of your text is pleasing to look at, and you try
                                                to achieve symmetry for this effect.</p>
                                        </div>
                                    </div>
                                    <p class="mb-0">
                                        You've probably heard that opposites attract. The same is true for fonts. Don't
                                        be afraid to combine font styles that are different but complementary. You can
                                        always play around with the text that is overlaid on an image.
                                    </p>
                                </BTab>
                                <BTab title="Messages">
                                    <div class="d-flex mb-2">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-6.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">In this image, you can see that the line height has been
                                                reduced significantly, and the size was brought up exponentially.
                                                Experiment and play around with the fonts that you already have in the
                                                software you’re working with reputable font websites.</p>
                                        </div>
                                    </div>
                                    <p class="mb-0">
                                        They highly encourage that you use different fonts in one design, but do not
                                        over-exaggerate and go overboard This may be the most commonly encountered tip I
                                        received from the designers I spoke with.
                                    </p>
                                </BTab>
                                <BTab title="Settings">
                                    <div class="d-flex mb-2">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-7.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">When designing, the goal is to draw someone’s attention and
                                                portray to them what you’re trying to say. You can make a big statement
                                                by using little tricks, like this one. Use contrasting fonts. you can
                                                use a bold sanserif font with a cursive.</p>
                                        </div>
                                    </div>
                                    <p class="mb-0">
                                        If you’re using multiple elements, make sure that your principal object is
                                        larger than the others, as the eye of your viewer will automatically be drawn to
                                        the larger of the two objects.
                                    </p>
                                </BTab>
                            </BTabs>

                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <h5 class="mb-3">Card Header Tabs</h5>
                <BCard no-body>
                    <BCardHeader class="align-items-center d-flex">
                        <div class="flex-grow-1 oveflow-hidden">
                            <p class="text-muted text-truncates mb-0">Use <code>card-header-tabs</code> class to create
                                card header tabs.</p>
                        </div>
                    </BCardHeader>
                    <BCardBody>

                        <BTabs nav-class="nav-tabs-custom rounded card-header-tabs border-bottom-0 text-muted tamp pt-2">
                            <BTab title="Home">
                                <p class="flex-grow-1 mb-0"><img src="@/assets/images/users/avatar-2.jpg" alt=""
                                        class="avatar-lg rounded float-start me-3">
                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                    sartorial PBR leggings next level wes anderson artisan four loko
                                    farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts
                                    ullamco ad
                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                    aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco
                                    ad
                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                    aesthetic magna delectus. If you’re using multiple elements, make sure that your
                                    principal object is larger than assumenda.
                                </p>
                            </BTab>
                            <BTab title="Profile">
                                <p class="me-3 mb-0">
                                    <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                        class="avatar-lg rounded float-end ms-3"> Experiment and play around with the
                                    fonts that you already have in the software you’re working with reputable font
                                    websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.commodo enim
                                    craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
                                    organic, assumenda labore aesthetic magna delectus Scale all elements of your
                                    design: text, elements, buttons, everything. Increase or decrease the letter spacing
                                    depending on the situation and try, try again until it looks right, and each.
                                </p>
                            </BTab>
                            <BTab title="Message">
                                <p class="ms-3 mb-0">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                        class="avatar-lg rounded float-start me-3">Trust fund seitan letterpress, keytar
                                    raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free
                                    squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party
                                    locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
                                    beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                                    assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna delectus
                                    Scale all elements of your design: text, elements, buttons, everything.Increase or
                                    decrease the letter spacing depending on the situation and try, try again until it
                                    looks right, and each.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Custom Tabs Bordered</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>nav-tabs-custom</code> class to create custom tabs with borders.
                        </p>
                        <BTabs nav-class="nav-tabs-custom nav-success mb-3" justified>
                            <BTab title="Home" active>
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before
                                            they
                                            sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny
                                            pack portland seitan DIY, art party locavore wolf cliche high life echo park
                                            Austin.
                                            Cred vinyl keffiyeh DIY salvia PBR.
                                            <div class="mt-2">
                                                <BLink href="#" class="btn btn-sm btn-subtle-primary">Read
                                                    More <i class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            When, while the lovely valley teems with vapour around me, and the meridian sun
                                            strikes the upper surface of the impenetrable foliage of my trees, and but a few
                                            stray gleams steal into the inner sanctuary, I throw myself down among the tall
                                            grass by the trickling stream; and, as I lie close to the earth, a thousand
                                            unknown.
                                            <div class="mt-2">
                                                <BLink href="#" class="btn btn-sm btn-subtle-primary">Read
                                                    More <i class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
                                            mcsweeney's
                                            organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag
                                            gentrify
                                            pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
                                            banksy
                                            hoodie helvetica. DIY synth PBR banksy irony.
                                            <div class="mt-2">
                                                <BLink href="#" class="btn btn-sm btn-subtle-primary">Read
                                                    More <i class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings">
                                <div class="text-muted">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-multiple-blank-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul
                                            and
                                            absorb its power, like the form of a beloved mistress, then I often think with
                                            longing, Oh, would I could describe these conceptions, could impress upon paper
                                            all
                                            that is living so full and warm within me, that it might be the.
                                            <div class="mt-2">
                                                <BLink href="#" class="btn btn-sm btn-subtle-primary">Read
                                                    More <i class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Arrow Nav tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <BTabs nav-class="arrow-navtabs nav-success bg-light mb-3" content-class="text-muted" pills>
                            <BTab>
                                <template #title>
                                    <span class="d-block d-sm-none"><i class="mdi mdi-home-variant"></i></span>
                                    <span class="d-none d-sm-block">Overview</span>
                                </template>
                                <h6>Give your text a good structure</h6>
                                <p class="mb-0">
                                    Contrary to popular belief, you don’t have to work endless nights and hours to
                                    create a
                                    <BLink href="#" class="text-decoration-underline"><b>Fantastic
                                            Design</b></BLink> by using complicated 3D elements. Flat design is your friend.
                                    Remember that. And the great thing about flat design is that it has become more and
                                    more
                                    popular over the years, which is excellent news to the beginner and advanced
                                    designer.
                                </p>
                            </BTab>
                            <BTab title="Profile">
                                <template #title>
                                    <span class="d-block d-sm-none"><i class="mdi mdi-account"></i></span>
                                    <span class="d-none d-sm-block">Profile</span>
                                </template>
                                <h6>Use a color palette</h6>
                                <p class="mb-0">
                                    Opposites attract, and that’s a fact. It’s in our nature to be interested in the
                                    unusual, and that’s why using contrasting colors in <BLink href="#"
                                        class="text-decoration-underline"><b>Graphic Design</b></BLink> is a must. It’s
                                    eye-catching, it makes a statement, it’s impressive graphic design. Increase or
                                    decrease
                                    the letter spacing depending on the situation and try, try again until it looks
                                    right,
                                    and each letter has the perfect spot of its own.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title>
                                    <span class="d-block d-sm-none"><i class="mdi mdi-email"></i></span>
                                    <span class="d-none d-sm-block">Contact</span>
                                </template>
                                <h6>Contact</h6>
                                <p class="mb-0">
                                    Consistency is the one thing that can take all of the different elements in your
                                    design,
                                    and tie them all together and make them work. In an awareness campaign, it is vital
                                    for
                                    people to begin put 2 and 2 together and begin to recognize your cause. Consistency
                                    piques people’s interest is that it has become more and more popular over the years,
                                    which is excellent news to the beginner and advanced <BLink href="#"
                                        class="text-decoration-underline"><b>Contact Designer</b></BLink>.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Header Justify Tabs</h5>
                <BCard no-body style="position: relative;">
                    <BCardHeader class="align-items-xl-center d-xl-flex">
                        <p class="text-muted flex-grow-1 mb-xl-0">Use <code>card-header-pills</code> class to create
                            header justify tab.</p>
                    </BCardHeader>
                    <BCardBody>

                        <BTabs nav-class="card-header-pills text-muted tamp" pills>
                            <BTab title="Developers">
                                <BRow>
                                    <BCol sm="6">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Dominic Charlton</h6>
                                                <p class="mb-0">520 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Charlie Pritchard</h6>
                                                <p class="mb-0">45.2K Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Harvey Wells</h6>
                                                <p class="mb-0">1025 Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol sm="6">
                                        <div class="d-flex mt-3 mt-sm-0">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Amelie Townsend</h6>
                                                <p class="mb-0">6584 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Emily Slater</h6>
                                                <p class="mb-0">24.8K Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Declan Long</h6>
                                                <p class="mb-0">1.5K Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BTab>
                            <BTab title="Designers">
                                <BRow>
                                    <BCol sm="6">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Luke Brown</h6>
                                                <p class="mb-0">654 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Matilda Walker</h6>
                                                <p class="mb-0">270 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Leo Stokes</h6>
                                                <p class="mb-0">4120 Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol sm="6">
                                        <div class="d-flex mt-3 mt-sm-0">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Chelsea Preston</h6>
                                                <p class="mb-0">9854 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Jennifer Barker</h6>
                                                <p class="mb-0">15.8K Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Callum Murray</h6>
                                                <p class="mb-0">2K Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BTab>
                            <BTab title="Managers">
                                <BRow>
                                    <BCol sm="6">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Dominic Charlton</h6>
                                                <p class="mb-0">784 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Matilda Walker</h6>
                                                <p class="mb-0">6549 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Jennifer Barker</h6>
                                                <p class="mb-0">2100 Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                    <BCol sm="6">
                                        <div class="d-flex mt-3 mt-sm-0">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Amelie Townsend</h6>
                                                <p class="mb-0">4565 Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-1.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Emily Slater</h6>
                                                <p class="mb-0">8K Followers</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="flex-shrink-0">
                                                <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                                    class="avatar-sm rounded" />
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1 fs-14">Declan Long</h6>
                                                <p class="mb-0">9800 Followers</p>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            
        </BRow><BCol xxl="6">
                <h5 class="mb-3">Bottom Card Nav Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>card-footer-tabs</code> class to create the bottom card nav
                            justify tab.</p>
                        <BTabs nav-class="card-footer-tabs fs-17 text-muted" content-class="mb-3"
                            nav-wrapper-class="card-footer bg-transparent border-top pb-0" pills justified end>
                            <BTab>
                                <template #title v-b-tooltip.hover="'Home'">
                                    <i class="ri-home-3-line"></i>
                                </template>
                                <h5><i class="ri-home-3-line align-bottom me-1"></i> Home</h5>
                                <p class="mb-2">
                                    On the note of consistency, color consistency is a MUST. If you’re not trying to
                                    create crazy contrast in your design, then a great idea would be for you to use a
                                    color palette throughout your entire design. It will subconsciously interest viewers
                                    and also is very pleasing to look at.
                                </p>
                                <p class="mb-0">
                                    Any bypasser will stop to see what you have to see, even if your design has nothing
                                    to do with them, for the simple fact that it is beautiful to look at.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title v-b-tooltip.hover="'Profile'">
                                    <i class="ri-user-2-line"></i>
                                </template>
                                <h5><i class="ri-user-2-line align-bottom me-1"></i> Profile</h5>
                                <p class="mb-2">
                                    Just like in the image where we talked about using multiple fonts, you can see that
                                    the background in this graphic design is blurred. Whenever you put text on top of an
                                    image, it’s important that your viewers can understand the text, and sometimes that
                                    means applying a gaussian readable.
                                </p>
                                <p class="mb-0">
                                    A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box.
                                    Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves.
                                </p>
                            </BTab>
                            <BTab>
                                <template #title v-b-tooltip.hover="'Messages'">
                                    <i class="ri-mail-line"></i>
                                </template>
                                <h5><i class="ri-mail-line align-bottom me-1"></i> Messages</h5>
                                <p class="mb-2">
                                    Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck.
                                    A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy! ", Alex Trebek's
                                    fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just
                                    flocked up to quiz and vex him.
                                </p>
                                <p class="mb-0">
                                    Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid
                                    jackets before she quit. Six big devils from Japan quickly forgot how to waltz.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Custom Hover Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>custom-hover-nav-tabs</code> class to create custom hover tabs.
                        </p>
                    </BCardBody>

                    <BTabs navClass="custom-hover-nav-tabs" navWrapperClass="border" contentClass="text-muted mt-3 hover" pills >
                        <BTab active>
                            <template #title>
                                <i class="ri-user-fill nav-icon nav-tab-position"></i>
                                <h5 class="nav-titl nav-tab-position m-0">Customer</h5>
                            </template>
                            <h6>Customer Details</h6>
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Ruby Butcher</td>
                                            <td>412 Rosewood Lane</td>
                                            <td>New York</td>
                                            <td>10019</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Martha T Goldberg</td>
                                            <td>2760 Clarksburg Park Road</td>
                                            <td>Arizona</td>
                                            <td>86038</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </BTab>
                        <BTab>
                            <template #title>
                                <i class="ri-file-text-line nav-icon nav-tab-position"></i>
                                <h5 class="nav-titl nav-tab-position m-0">Description</h5>
                            </template>
                            <h6>Description</h6>
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Categories</th>
                                            <th scope="col">Author</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Building Web Apps With Wordpress</td>
                                            <td>Web, Wordpress, Design</td>
                                            <td>Lucia Victor</td>
                                        </tr>
                                        <tr>
                                            <th>Information Technology</th>
                                            <td>Management, Manager, Design</td>
                                            <td>Arora Sumita</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </BTab>
                        <BTab>
                            <template #title>
                                <i class="ri-star-half-line nav-icon nav-tab-position"></i>
                                <h5 class="nav-titl nav-tab-position m-0">Reviews</h5>
                            </template>
                            <h6>Customer Reviews</h6>
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Ratings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Luke Brown</td>
                                            <td>New York</td>
                                            <td>$745</td>
                                            <td>4.4 <i class="ri-star-s-fill ms-1 text-warning align-middle"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Matilda Walker</td>
                                            <td>USA</td>
                                            <td>$87.125</td>
                                            <td>2.7 <i class="ri-star-s-fill ms-1 text-warning align-middle"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </BTab>
                    </BTabs>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Custom Vertical Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>custom-verti-nav-pills</code> class to create custom vertical
                            tabs.</p>
                        <BRow>
                            <BTabs navClass="custom-verti-nav-pills text-center" navWrapperClass="col-md-3"
                                contentClass="text-muted mt-3 mt-lg-0 col-md-9" pills vertical justified>
                                <BTab active>
                                    <template #title>
                                        <i class="ri-home-4-line d-block fs-3xl mb-1"></i>Home
                                    </template>

                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-4.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">Experiment and play around with the fonts that you
                                                already
                                                have in the software you’re working with reputable font
                                                websites.
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl
                                                cillum PBR. Homo nostrud organic, assumenda labore aesthetic
                                                magna
                                                delectus.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1 me-3">
                                            <p class="mb-0">Always want to make sure that your fonts work well
                                                together
                                                and try to limit the number of fonts you use to three or less.
                                                Experiment and play around with the fonts that you already have
                                                in the
                                                software you’re working with reputable font websites.</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-5.jpg" alt="" width="150" class="rounded">
                                        </div>
                                    </div>
                                </BTab>
                                <BTab>
                                    <template #title>
                                        <i class="ri-user-2-line d-block fs-3xl mb-1"></i>Profile
                                    </template>
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-3.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">In some designs, you might adjust your tracking to
                                                create a
                                                certain artistic effect. It can also help you fix fonts that are
                                                poorly
                                                spaced to begin with. A wonderful serenity has taken possession
                                                of my
                                                entire soul, like these sweet mornings of spring which I enjoy
                                                with my
                                                whole heart.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1 me-3">
                                            <p class="mb-0">Each design is a new, unique piece of art birthed
                                                into this
                                                world, and while you have the opportunity to be creative and
                                                make your
                                                own style choices. For that very reason, I went on a quest and
                                                spoke to
                                                many different professional graphic designers.</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-6.jpg" alt="" width="150" class="rounded">
                                        </div>
                                    </div>
                                </BTab>
                                <BTab>
                                    <template #title>
                                        <i class="ri-mail-line d-block fs-3xl mb-1"></i> Messages
                                    </template>
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-7.jpg" alt="" width="150" class="rounded">
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <p class="mb-0">Trust fund seitan letterpress, keytar raw denim
                                                keffiyeh
                                                etsy art party before they sold out master cleanse gluten-free
                                                squid
                                                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                art
                                                party locavore wolf cliche high life echo park Austin. Cred
                                                vinyl
                                                keffiyeh DIY salvia PBR.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1 me-3">
                                            <p class="mb-0">They all have something to say beyond the words on
                                                the page.
                                                They can come across as casual or neutral, exotic or graphic.
                                                That's why
                                                it's important to think about your message, then choose a font
                                                that
                                                fits. Cosby sweater eu banh mi, qui irure terry richardson ex
                                                squid.</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/small/img-8.jpg" alt="" width="150" class="rounded">
                                        </div>
                                    </div>
                                </BTab>
                            </BTabs>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Animation Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p>
                        <BTabs navClass="animation-nav gap-2 mb-3" contentClass="text-muted mt-3" pills justified>
                            <BTab title="Home" active>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Too much or too little spacing, as in the example below, can make things unpleasant
                                        for the reader.
                                        The goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>

                            </BTab>
                            <BTab title="Profile">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        In some designs, you might adjust your tracking to create a certain artistic effect.
                                        It can also help
                                        you fix fonts that are poorly spaced to begin with.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which
                                        I enjoy with my whole heart.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Each design is a new, unique piece of art birthed into this world, and while you
                                        have the opportunity
                                        to be creative and make your own style choices.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different professional
                                        graphic designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings">
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different professional
                                        graphic designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        After gathering lots of different opinions and graphic design basics, I came up with
                                        a list of 30
                                        graphic design tips that you can start implementing.
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xxl="6">
                <h5 class="mb-3">Nav with Badge</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Example of nav tabs with badge wrapped in nav item.</p>

                        <BTabs nav-class="mb-3" content-class="text-muted" justified>
                            <BTab title="Explore">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Too much or too little spacing, as in the example below, can make things
                                        unpleasant
                                        for the reader. The goal is to make your text as comfortable to read as
                                        possible.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <template #title>
                                    Profile <span class="badge bg-success">Done</span>
                                </template>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        In some designs, you might adjust your tracking to create a certain artistic
                                        effect.
                                        It can also help you fix fonts that are poorly spaced to begin with.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        A wonderful serenity has taken possession of my entire soul, like these
                                        sweet
                                        mornings of spring which I enjoy with my whole heart.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <template #title>
                                    Messages <span class="badge bg-danger rounded-circle">5</span>
                                </template>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Each design is a new, unique piece of art birthed into this world, and while
                                        you
                                        have the opportunity to be creative and make your own style choices.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and asked them what graphic design tips they live.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings" active>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and asked them what graphic design tips they live.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        After gathering lots of different opinions and graphic design basics, I came
                                        up with
                                        a list of 30 graphic design tips that you can start implementing.
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Border Top Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>nav-border-top</code> class to create nav tabs with border at
                            top.</p>
                        <BTabs nav-class="nav-border-top nav-border-top-primary mb-3" content-class="text-muted">
                            <BTab title="Home">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-line text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
                                        before they
                                        sold out master cleanse gluten-free squid scenester freegan cosby sweater.
                                        Fanny
                                        pack portland seitan DIY, art party locavore wolf cliche high life echo park
                                        Austin.
                                        Cred vinyl keffiyeh DIY salvia PBR.
                                        <div class="mt-2">
                                            <BLink href="#" class="btn btn-link">Read More <i
                                                    class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                        </div>
                                    </div>

                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-line text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        When, while the lovely valley teems with vapour around me, and the meridian
                                        sun
                                        strikes the upper surface of the impenetrable foliage of my trees, and but a
                                        few
                                        stray gleams steal into the inner sanctuary, I throw myself down among the
                                        tall
                                        grass by the trickling stream; and, as I lie close to the earth, a thousand
                                        unknown.
                                        <div class="mt-2">
                                            <BLink href="#" class="btn btn-link">Read More <i
                                                    class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-line text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
                                        mcsweeney's
                                        organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag
                                        gentrify
                                        pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia
                                        banksy
                                        hoodie helvetica. DIY synth PBR banksy irony.
                                        <div class="mt-2">
                                            <BLink href="#" class="btn btn-link">Read More <i
                                                    class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings" active>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-line text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        when darkness overspreads my eyes, and heaven and earth seem to dwell in my
                                        soul and
                                        absorb its power, like the form of a beloved mistress, then I often think
                                        with
                                        longing, Oh, would I could describe these conceptions, could impress upon
                                        paper all
                                        that is living so full and warm within me, that it might be the.
                                        <div class="mt-2">
                                            <BLink href="#" class="btn btn-link">Read More <i
                                                    class="ri-arrow-right-line ms-1 align-middle"></i></BLink>
                                        </div>
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Border Top Nav Justified Tabs</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>nav-border-top nav-justified</code> class to create nav tabs
                            with border at top with justified tabs position.</p>
                        <BTabs nav-class="nav-tabs nav-justified nav-border-top nav-border-top-success mb-3 text-muted">
                            <BTab class="nav-item">
                                <template #title>
                                    <i class="ri-home-5-line align-middle me-1"></i> Home
                                </template>
                                <h6>Give your text a good structure</h6>
                                <p class="mb-0">
                                    Contrary to popular belief, you don’t have to work endless nights and hours to
                                    cBLink eate a <BLink href="javascript:void(0);" class="text-decoration-underline">
                                        <b>Fantastic Design</b>
                                    </BLink> by using
                                    complicated 3D elements. Flat design is your friend. Remember that. And the great
                                    thing about flat design is that it has become more and more popular over the years,
                                    which is excellent news to the beginner and advanced designer.
                                </p>
                            </BTab>
                            <BTab class="nav-item">
                                <template #title>
                                    <i class="ri-user-line me-1 align-middle"></i> Profile
                                </template>
                                <h6>Use a color palette</h6>
                                <p class="mb-0">
                                    Opposites attract, and that’s a fact. It’s in our nature to be interested in the
                                    uBLink usual, and that’s why using contrasting colors in <BLink
                                        href="javascript:void(0);" class="text-decoration-underline"><b>Graphic
                                            Design</b></BLink> is a must. It’s
                                    eye-catching, it makes a statement, it’s impressive graphic design. Increase or
                                    decrease the letter spacing depending on the situation and try, try again until it
                                    looks right, and each letter has the perfect spot of its own.
                                </p>
                            </BTab>
                            <BTab class="nav-item">
                                <template #title>
                                    <i class="ri-question-answer-line align-middle me-1"></i>Messages
                                </template>
                                <h6>Message</h6>
                                <p class="mb-0">
                                    Consistency is the one thing that can take all of the different elements in your
                                    design, and tie them all together and make them work. In an awareness campaign, it
                                    is vital for people to begin put 2 and 2 together and begin to recognize your cause.
                                    Consistency piques people’s interest is that it has become more and more popular
                                    over the years, which is excellent news to the beginner and advanced <BLink
                                        href="javascript:void(0);" class="text-decoration-underline"><b>Contact
                                            Designer</b></BLink>.
                                </p>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Outline Border Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>

                        <BTabs nav-class="nav-custom-outline nav-primary mb-3" content-class="text-muted" pills>
                            <BTab title="Home" active>
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Too much or too little spacing, as in the example below, can make things
                                        unpleasant
                                        for the reader. The
                                        goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        In some designs, you might adjust your tracking to create a certain artistic
                                        effect.
                                        It can also help
                                        you fix fonts that are poorly spaced to begin with.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        A wonderful serenity has taken possession of my entire soul, like these
                                        sweet
                                        mornings of spring which I
                                        enjoy with my whole heart.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Each design is a new, unique piece of art birthed into this world, and while
                                        you
                                        have the opportunity to
                                        be creative and make your own style choices.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Settings">
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        After gathering lots of different opinions and graphic design basics, I came
                                        up with
                                        a list of 30
                                        graphic design tips that you can start implementing.
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Custom Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                        <BTabs nav-class="nav-pills nav-customs nav-danger mb-3 text-muted">
                            <BTab title="Home" class="nav-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Too much or too little spacing, as in the example below, can make things
                                        unpleasant for the
                                        reader. The
                                        goal is to make your text as comfortable to read as possible.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile" class="nav-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        In some designs, you might adjust your tracking to create a certain artistic
                                        effect. It can
                                        also help
                                        you fix fonts that are poorly spaced to begin with.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of
                                        spring which I
                                        enjoy with my whole heart.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages" class="nav-item">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Each design is a new, unique piece of art birthed into this world, and while you
                                        have the
                                        opportunity to
                                        be creative and make your own style choices.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different professional
                                        graphic
                                        designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="settings" class="nav-item">
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        For that very reason, I went on a quest and spoke to many different professional
                                        graphic
                                        designers and
                                        asked them what graphic design tips they live.
                                    </div>
                                </div>
                                <div class="d-flex mt-2">
                                    <div class="flex-shrink-0">
                                        <i class="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        After gathering lots of different opinions and graphic design basics, I came up
                                        with a list
                                        of 30
                                        graphic design tips that you can start implementing.
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
        <BRow>
            <BCol xxl="6">
                <h5 class="mb-3">Colored Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                        <BTabs nav-class="nav-custom nav-custom-success mb-3" content-class="text-muted" pills>
                            <BTab title="Home" active>
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                        single-origin coffee squid. Exercitation +1 labore velit, blog
                                        sartorial PBR leggings next level wes anderson artisan four loko
                                        farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean
                                        shorts
                                        ullamco.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and asked them what graphic design tips they live. vinyl
                                        cillum
                                        PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Increase or decrease the letter spacing depending on the situation and try,
                                        try
                                        again until it looks right, and each. next level wes anderson artisan four
                                        loko
                                        farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean
                                        shorts
                                        ullamco.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        Experiment and play around with the fonts that you already have in the
                                        software
                                        you’re working with reputable font websites. commodo enim craft beer mlkshk
                                        aliquip
                                        jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
                                        before they
                                        sold out master cleanse gluten-free squid scenester freegan cosby sweater.
                                        Fanny
                                        pack portland seitan DIY, art party locavore wolf cliche high life echo park
                                        Austin.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        Increase or decrease the letter spacing depending on the situation and try,
                                        try
                                        again until it looks right, and each assumenda labore aes Homo nostrud
                                        organic,
                                        assumenda labore aesthetic magna elements, buttons, everything..
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xxl="6">
                <h5 class="mb-3">Light Nav</h5>
                <BCard no-body>
                    <BCardBody>
                        <p class="text-muted">Use <code>nav-custom-light</code> class to lighten the nav tabs area.</p>
                        <BTabs nav-class="nav nav-pills nav-custom nav-custom-light mb-3" content-class="text-muted" pills>
                            <BTab title="Home" active>
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                        single-origin coffee squid. Exercitation +1 labore velit, blog
                                        sartorial PBR leggings next level wes anderson artisan four loko
                                        farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean
                                        shorts
                                        ullamco.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        For that very reason, I went on a quest and spoke to many different
                                        professional
                                        graphic designers and asked them what graphic design tips they live. vinyl
                                        cillum
                                        PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Profile">
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Increase or decrease the letter spacing depending on the situation and try,
                                        try
                                        again until it looks right, and each. next level wes anderson artisan four
                                        loko
                                        farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean
                                        shorts
                                        ullamco.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        Experiment and play around with the fonts that you already have in the
                                        software
                                        you’re working with reputable font websites. commodo enim craft beer mlkshk
                                        aliquip
                                        jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                            <BTab title="Messages">
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
                                        before they
                                        sold out master cleanse gluten-free squid scenester freegan cosby sweater.
                                        Fanny
                                        pack portland seitan DIY, art party locavore wolf cliche high life echo park
                                        Austin.
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 me-3">
                                        Increase or decrease the letter spacing depending on the situation and try,
                                        try
                                        again until it looks right, and each assumenda labore aes Homo nostrud
                                        organic,
                                        assumenda labore aesthetic magna elements, buttons, everything..
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded">
                                    </div>
                                </div>
                            </BTab>
                        </BTabs>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>

<style>
.tamp {
    position: absolute;
    top: 9px;
    right: 13px;
}
.hover{
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 15px;
}
</style>