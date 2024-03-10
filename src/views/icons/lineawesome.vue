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
        <PageHeader title="Line Awesome" pageTitle="Icons" />
        <BRow class="icon-demo-content">
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle>Examples</BCardTitle>
                        <p class="text-muted mb-0">Use <code>&lt;i class="lab la-*-*">&lt;/i></code> class.</p>
                    </BCardHeader>
                    <BCardBody>
                        <h6 class="text-uppercase text-muted fw-semibold">Accessibility</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-accessible-icon"></i> lab la-accessible-icon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-american-sign-language-interpreting"></i> las
                                la-amean-sign-language-interpreting
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-assistive-listening-systems"></i> las la-assistive-listening-systems
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-audio-description"></i> las la-audio-description
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blind"></i> las la-blind
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-braille"></i> las la-braille
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-closed-captioning"></i> las la-closed-captioning
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-deaf"></i> las la-deaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-low-vision"></i> las la-low-vision
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-volume"></i> las la-phone-volume
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question-circle"></i> las la-question-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-language"></i> las la-sign-language
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tty"></i> las la-tty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-universal-access"></i> las la-universal-acces
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Alert</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation"></i> las la-exclamation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-circle"></i> las la-exclamation-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-triangle"></i> las la-exclamation-triangle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation"></i> las la-radiation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation-alt"></i> las la-radiation-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Animals</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cat"></i> las la-cat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crow"></i> las la-crow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dog"></i> las la-dog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dove"></i> las la-dove
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dragon"></i> las la-dragon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-feather"></i> las la-feather
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-feather-alt"></i> las la-feather-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fish"></i> las la-fish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frog"></i> las la-frog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hippo"></i> las la-hippo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-horse"></i> las la-horse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-horse-head"></i> las la-horse-head
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kiwi-bird"></i> las la-kiwi-bird
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-otter"></i> las la-otter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paw"></i> las la-paw
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spider"></i> las la-spider
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Arrows</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-double-down"></i>las la-angle-double-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-double-left"></i>las la-angle-double-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-double-right"></i>las la-angle-double-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-double-up"></i>las la-angle-double-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-down"></i>las la-angle-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-left"></i>las la-angle-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-right"></i>las la-angle-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angle-up"></i>las la-angle-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-alt-circle-down"></i>las la-arrow-alt-circle-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-alt-circle-left"></i>las la-arrow-alt-circle-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-alt-circle-right"></i>las la-arrow-alt-circle-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-alt-circle-up"></i>las la-arrow-alt-circle-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-circle-down"></i> las la-arrow-circle-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-circle-left"></i> las la-arrow-circle-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-circle-right"></i> las la-arrow-circle-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-circle-up"></i> las la-arrow-circle-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-down"></i> las la-arrow-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-left"></i> las la-arrow-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-right"></i> las la-arrow-righ
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrow-up"></i> las la-arrow-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrows-alt"></i> las la-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrows-alt-h"></i> las la-arrows-alt-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-arrows-alt-v"></i> las la-arrows-alt-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-down"></i> las la-caret-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-left"></i> las la-caret-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-right"></i> las la-caret-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-square-down"></i> las la-caret-square-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-square-left"></i> las la-caret-square-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-square-right"></i> las la-caret-square-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-square-up"></i> las la-caret-square-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-caret-up"></i> las la-caret-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cart-arrow-down"></i> las la-cart-arrow-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-line"></i> las la-chart-line
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-circle-down"></i> las la-chevron-circle-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-circle-left"></i> las la-chevron-circle-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-circle-right"></i> las la-chevron-circle-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-circle-up"></i> las la-chevron-circle-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-down"></i> las la-chevron-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-left"></i> las la-chevron-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-right"></i> las la-chevron-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chevron-up"></i> las la-chevron-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-download-alt"></i> las la-cloud-download-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-upload-alt"></i> las la-cloud-upload-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compress-arrows-alt"></i> las la-compress-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-download"></i> las la-download
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exchange-alt"></i> las la-exchange-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-expand-arrows-alt"></i> las la-expand-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-external-link-alt"></i> las la-external-link-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-external-link-square-alt"></i> las la-external-link-square-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-down"></i> las la-hand-point-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-left"></i> las la-hand-point-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-right"></i> las la-hand-point-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-up"></i> las la-hand-point-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-pointer"></i> las la-hand-pointer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-history"></i> las la-history
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-level-down-alt"></i> las la-level-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-level-up-alt"></i> las la-level-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-location-arrow"></i> las la-location-arrow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-long-arrow-alt-down"></i> las la-long-arrow-alt-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-long-arrow-alt-left"></i> las la-long-arrow-alt-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-long-arrow-alt-right"></i> las la-long-arrow-alt-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-long-arrow-alt-up"></i> las la-long-arrow-alt-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mouse-pointer"></i> las la-mouse-pointer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-play"></i> las la-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-random"></i> las la-random
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-recycle"></i> las la-recycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo"></i> las la-redo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo-alt"></i> las la-redo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-reply"></i> las la-reply
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-reply-all"></i> las la-reply-all
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-retweet"></i> las la-retweet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share"></i> las la-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-square"></i> las la-share-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-in-alt"></i> las la-sign-in-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-out-alt"></i> las la-sign-out-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort"></i> las la-sort
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-down"></i> las la-sort-alpha-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-down-alt"></i> las la-sort-alpha-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-up"></i> las la-sort-alpha-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-up-alt"></i> las la-sort-alpha-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-down"></i> las la-sort-amount-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-down-alt"></i> las la-sort-amount-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-up"></i> las la-sort-amount-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-up-alt"></i> las la-sort-amount-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-down"></i> las la-sort-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-down"></i> las la-sort-numeric-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-down-alt"></i> las la-sort-numeric-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-up"></i> las la-sort-numeric-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-up-alt"></i> las la-sort-numeric-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-up"></i> las la-sort-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync"></i> las la-sync
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync-alt"></i> las la-sync-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-text-height"></i> las la-text-height
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-text-width"></i> las la-text-width
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo"></i> las la-undo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo-alt"></i> las la-undo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-upload"></i> las la-upload
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Audio & Video</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-audio-description"></i> las la-audio-description
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-backward"></i> las la-backward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broadcast-tower"></i> las la-broadcast-tower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-circle"></i> las la-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-closed-captioning"></i> las la-closed-captioning
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compress"></i> las la-compress
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compress-arrows-alt"></i> las la-compress-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eject"></i> las la-eject
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-expand"></i> las la-expand
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-expand-arrows-alt"></i> las la-expand-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fast-backward"></i> las la-fast-backward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fast-forward"></i> las la-fast-forward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-audio"></i> las la-file-audio
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-video"></i> las la-file-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-film"></i> las la-film
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-forward"></i> las la-forward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones"></i> las la-headphones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt-slash"></i> las la-microphone-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-slash"></i> las la-microphone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-music"></i> las la-music
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pause"></i> las la-pause
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pause-circle"></i> las la-pause-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-volume"></i> las la-phone-volume
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-photo-video"></i> las la-photo-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-play"></i> las la-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-play-circle"></i> las la-play-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-podcast"></i> las la-podcast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-random"></i> las la-random
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo"></i> las la-redo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo-alt"></i> las la-redo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss"></i> las la-rss
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss-square"></i> las la-rss-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-step-backward"></i> las la-step-backward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-step-forward"></i> las la-step-forward
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stop"></i> las la-stop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stop-circle"></i> las la-stop-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync"></i> las la-sync
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync-alt"></i> las la-sync-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo"></i> las la-undo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo-alt"></i> las la-undo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video"></i> las la-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-down"></i> las la-volume-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-mute"></i> las la-volume-mute
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-off"></i> las la-volume-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-up"></i> las la-volume-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-youtube"></i> lab la-youtube
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Automotive</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-air-freshener"></i> las la-air-freshener
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ambulance"></i> las la-ambulance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bus"></i> las la-bus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bus-alt"></i> las la-bus-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car"></i> las la-car
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car-alt"></i> las la-car-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car-battery"></i> las la-car-battery
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car-crash"></i> las la-car-crash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car-side"></i> las la-car-side
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-charging-station"></i> las la-charging-station
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gas-pump"></i> las la-gas-pump
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-motorcycle"></i> las la-motorcycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-oil-can"></i> las la-oil-can
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shuttle-van"></i> las la-shuttle-van
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tachometer-alt"></i> las la-tachometer-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-taxi"></i> las la-taxi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck"></i> las la-truck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck-monster"></i> las la-truck-monster
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck-pickup"></i> las la-truck-pickup
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Autumn</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-apple-alt"></i> las la-apple-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-campground"></i> las la-campground
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-sun"></i> las la-cloud-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drumstick-bite"></i> las la-drumstick-bite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-football-ball"></i> las la-football-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hiking"></i> las la-hiking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mountain"></i> las la-mountain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tractor"></i> las la-tractor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tree"></i> las la-tree
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wind"></i> las la-wind
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-bottle"></i> las la-wine-bottle
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Beverage</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-beer"></i> las la-beer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blender"></i> las la-blender
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cocktail"></i> las la-cocktail
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flask"></i> las la-flask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-cheers"></i> las la-glass-cheers
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini"></i> las la-glass-martini
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini-alt"></i> las la-glass-martini-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-whiskey"></i> las la-glass-whiskey
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mug-hot"></i> las la-mug-hot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-bottle"></i> las la-wine-bottle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass"></i> las la-wine-glas
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass-alt"></i>las la-wine-glass-alt
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Brand Icons</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-500px"></i> lab la-500px
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-accusoft"></i> lab la-accusoft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adn"></i> lab la-adn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adobe"></i> lab la-adobe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adversal"></i> lab la-adversa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-affiliatetheme"></i> lab la-affiliatetheme
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-airbnb"></i> lab la-airbnb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-algolia"></i> lab la-algolia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-amazon"></i> lab la-amazon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-amilia"></i> lab la-amilia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-android"></i> lab la-android
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angellist"></i> lab la-angellist
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angrycreative"></i> lab la-angrycreative
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angular"></i> lab la-angular
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-app-store"></i> lab la-app-store
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-app-store-ios"></i> lab la-app-store-ios
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-apper"></i> lab la-apper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-apple"></i> lab la-apple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-artstation"></i> lab la-artstation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-asymmetrik"></i> lab la-asymmetrik
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-atlassian"></i> lab la-atlassian
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-audible"></i> lab la-audible
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-autoprefixer"></i> lab la-autoprefixer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-avianex"></i> lab la-avianex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-aviato"></i> lab la-aviato
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-aws"></i> lab la-aws
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bandcamp"></i> lab la-bandcamp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-battle-net"></i> lab la-battle-net
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-behance"></i> lab la-behance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-behance-square"></i> lab la-behance-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bimobject"></i> lab la-bimobject
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bitbucket"></i> lab la-bitbucket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bity"></i> lab la-bity
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-black-tie"></i> lab la-black-tie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blackberry"></i> lab la-blackberry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blogger"></i> lab la-blogger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blogger-b"></i> lab la-blogger-b
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bootstrap"></i> lab la-bootstrap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buffer"></i> lab la-buffer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buromobelexperte"></i> lab la-buromobelexperte
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buy-n-large"></i> lab la-buy-n-large
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buysellads"></i> lab la-buysellads
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-canadian-maple-leaf"></i> lab la-canadian-maple-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-centercode"></i> lab la-centercode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-centos"></i> lab la-centos
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-chrome"></i> lab la-chrome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-chromecast"></i> lab la-chromecast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudscale"></i> lab la-cloudscale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudsmith"></i> lab la-cloudsmith
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudversify"></i> lab la-cloudversify
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-codepen"></i> lab la-codepen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-codiepie"></i> lab la-codiepie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-confluence"></i> lab la-confluence
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-connectdevelop"></i> lab la-connectdevelop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-contao"></i> lab la-contao
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cotton-bureau"></i> lab la-cotton-bureau
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cpanel"></i> lab la-cpanel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons"></i>lab la-creative-commons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-by"></i>lab la-creative-commons-by
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc"></i>lab la-creative-commons-nc
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc-eu"></i>lab la-creative-commons-nc-eu
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc-jp"></i>lab la-creative-commons-nc-jp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nd"></i>lab la-creative-commons-nd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-pd"></i>lab la-creative-commons-pd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-pd-alt"></i>lab la-creative-commons-pd-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-remix"></i>lab la-creative-commons-remix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sa"></i>lab la-creative-commons-sa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sampling"></i>lab la-creative-commons-sampling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sampling-plus"></i>lab
                                la-creative-commons-sampling-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-share"></i>lab la-creative-commons-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-zero"></i>lab la-creative-commons-zero
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-css3"></i> lab la-css3
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-css3-alt"></i> lab la-css3-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cuttlefish"></i> lab la-cuttlefish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dashcube"></i> lab la-dashcube
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-delicious"></i> lab la-delicious
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deploydog"></i> lab la-deploydog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deskpro"></i> lab la-deskpro
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dev"></i> lab la-dev
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deviantart"></i> lab la-deviantart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dhl"></i> lab la-dhl
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-diaspora"></i> lab la-diaspora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-digg"></i> lab la-digg
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-digital-ocean"></i> lab la-digital-ocean
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-discord"></i> lab la-discord
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-discourse"></i> lab la-discourse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dochub"></i> lab la-dochub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-docker"></i> lab la-docker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-draft2digital"></i> lab la-draft2digital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dribbble"></i> lab la-dribbble
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dribbble-square"></i> lab la-dribbble-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dropbox"></i> lab la-dropbox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-drupal"></i> lab la-drupal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dyalog"></i> lab la-dyalog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-earlybirds"></i> lab la-earlybirds
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ebay"></i> lab la-ebay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-edge"></i> lab la-edge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-elementor"></i> lab la-elementor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ello"></i> lab la-ello
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ember"></i> lab la-ember
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-empire"></i> lab la-empire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-envira"></i> lab la-envira
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-erlang"></i> lab la-erlang
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-etsy"></i> lab la-etsy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-evernote"></i> lab la-evernote
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-expeditedssl"></i> lab la-expeditedssl
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook"></i> lab la-facebook
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-f"></i> lab la-facebook-k
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-messenger"></i> lab la-facebook-messenger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-square"></i> lab la-facebook-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fedex"></i> lab la-fedex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fedora"></i> lab la-fedora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-figma"></i> lab la-figma
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-firefox"></i> lab la-firefox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-first-order"></i> lab la-first-order
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-first-order-alt"></i> lab la-first-order-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-firstdraft"></i> lab la-firstdraft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-flickr"></i> lab la-flickr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-flipboard"></i> lab la-flipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fly"></i> lab la-fly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome"></i> lab la-font-awesome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome-alt"></i> lab la-font-awesome-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome-flag"></i> lab la-font-awesome-flog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fonticons"></i> lab la-fonticons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fonticons-fi"></i> lab la-fonticons-fi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fort-awesome"></i> lab la-fort-awesome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fort-awesome-alt"></i> lab la-fort-awesome-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-forumbee"></i> lab la-forumbee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-foursquare"></i> lab la-foursquare
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-free-code-camp"></i> lab la-free-code-camp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-freebsd"></i> lab la-freebsd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fulcrum"></i> lab la-fulcrum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-get-pocket"></i> lab la-get-pocket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git"></i> lab la-git
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git-alt"></i>lab la-git-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git-square"></i> lab la-git-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-github"></i>lab la-github
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-github-alt"></i>lab la-github-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-github-square"></i>lab la-github-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gitkraken"></i>lab la-gitkraken
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gitlab"></i> lab la-gitlab
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gitter"></i> lab la-gitter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-glide"></i> lab la-glide
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-glide-g"></i> lab la-glide-g
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gofore"></i> lab la-gofore
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-goodreads"></i> lab la-goodreads
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-goodreads-g"></i> lab la-goodreads-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google"></i> lab la-google
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-drive"></i>lab la-google-drive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-play"></i>lab la-google-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus"></i>lab la-google-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus-g"></i>lab la-google-plus-g
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus-square"></i>lab la-google-plus-squar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gratipay"></i> lab la-gratipay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-grav"></i> lab la-grav
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gripfire"></i> lab la-gripfire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-grunt"></i> lab la-grunt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gulp"></i> lab la-gulp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hacker-news"></i> lab la-hacker-news
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hacker-news-square"></i> lab la-hacker-news-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hackerrank"></i> lab la-hackerrank
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hips"></i> lab la-hips
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hire-a-helper"></i> lab la-hire-a-helper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hooli"></i> lab la-hooli
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hornbill"></i> lab la-hornbill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hotjar"></i> lab la-hotjar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-houzz"></i> lab la-houzz
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-html5"></i> lab la-html5
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hubspot"></i> lab la-hubspot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-imdb"></i> lab la-imdb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-instagram"></i> lab la-instagram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-intercom"></i> lab la-intercom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-internet-explorer"></i> lab la-internet-explorer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-invision"></i> lab la-invisio
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ioxhost"></i> lab la-ioxhost
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itch-io"></i> lab la-itch-io
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itunes"></i> lab la-itunes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itunes-note"></i> lab la-itunes-note
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-java"></i> lab la-java
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jenkins"></i> lab la-jenkins
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jira"></i> lab la-jira
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-joget"></i> lab la-joget
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-joomla"></i> lab la-joomla
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-js"></i> lab la-js
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-js-square"></i> lab la-js-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jsfiddle"></i> lab la-jsfiddle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kaggle"></i> lab la-kaggle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-keybase"></i> lab la-keybase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-keycdn"></i> lab la-keycdn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kickstarter"></i> lab la-kickstarter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kickstarter-k"></i> lab la-kickstarter-
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-korvue"></i> lab la-korvue
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-laravel"></i> lab la-laravel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lastfm"></i> lab la-lastfm
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lastfm-square"></i> lab la-lastfm-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-leanpub"></i> lab la-leanpub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-less"></i> lab la-less
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-line"></i> lab la-line
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linkedin"></i> lab la-linkedin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linkedin-in"></i> lab la-linkedin-in
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linode"></i> lab la-linode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linux"></i> lab la-linux
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lyft"></i> lab la-lyft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-magento"></i> lab la-magento
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mailchimp"></i> lab la-mailchimp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mandalorian"></i> lab la-mandalorian
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-markdown"></i> lab la-markdown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mastodon"></i> lab la-mastodon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-maxcdn"></i> lab la-maxcdn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mdb"></i> lab la-mdb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medapps"></i> lab la-medapps
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medium"></i> lab la-medium
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medium-m"></i> lab la-medium-m
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medrt"></i> lab la-medrt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-meetup"></i> lab la-meetup
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-megaport"></i> lab la-megaport
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mendeley"></i> lab la-mendeley
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-microsoft"></i> lab la-microsoft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mix"></i> lab la-mix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mixcloud"></i> lab la-mixclou
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mizuni"></i> lab la-mizuni
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-modx"></i> lab la-modx
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-monero"></i> lab la-monero
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-neos"></i> lab la-neos
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-nimblr"></i> lab la-nimblr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-node"></i> lab la-node
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-node-js"></i> lab la-node-js
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-npm"></i> lab la-npm
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ns8"></i> lab la-ns8
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-nutritionix"></i> lab la-nutritionix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-odnoklassniki"></i> lab la-odnoklassniki
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-odnoklassniki-square"></i> lab la-odnoklassniki-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-opencart"></i> lab la-opencart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-openid"></i> lab la-openid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-opera"></i> lab la-opera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-optin-monster"></i> lab la-optin-monster
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-orcid"></i> lab la-orcid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-osi"></i> lab la-osi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-page4"></i> lab la-page4
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pagelines"></i> lab la-pagelines
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-palfed"></i> lab la-palfed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-patreon"></i> lab la-patreon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-periscope"></i> lab la-periscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phabricator"></i> lab la-phabricator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phoenix-framework"></i> lab la-phoenix-framework
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phoenix-squadron"></i> lab la-phoenix-squadron
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-php"></i> lab la-php
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper"></i> lab la-pied-piper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-alt"></i> lab la-pied-piper-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-hat"></i> lab la-pied-piper-hat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-pp"></i> lab la-pied-piper-pp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest"></i> lab la-pinterest
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest-p"></i> lab la-pinterest-p
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest-square"></i> lab la-pinterest-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-product-hunt"></i> lab la-product-hunt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pushed"></i> lab la-pushed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-python"></i> lab la-python
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-qq"></i> lab la-qq
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-quinscape"></i> lab la-quinscape
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-quora"></i> lab la-quora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-r-project"></i> lab la-r-project
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-raspberry-pi"></i> lab la-raspberry-p
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ravelry"></i> lab la-ravelry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-react"></i> lab la-react
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reacteurope"></i> lab la-reacteurope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-readme"></i> lab la-readme
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rebel"></i> lab la-rebel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-red-river"></i> lab la-red-river
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit"></i> lab la-reddit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit-alien"></i>lab la-reddit-alien
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit-square"></i>lab la-reddit-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-redhat"></i>lab la-redhat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-renren"></i>lab la-renren
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-researchgate"></i> lab la-researchgate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-resolving"></i> lab la-resolving
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rev"></i> lab la-rev
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rocketchat"></i> lab la-rocketchat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rockrms"></i> lab la-rockrms
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-safari"></i> lab la-safari
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-salesforce"></i> lab la-salesforce
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sass"></i> lab la-sass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-schlix"></i> lab la-schlix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-scribd"></i> lab la-scribd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-searchengin"></i> lab la-searchengin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sellcast"></i> lab la-sellcast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sellsy"></i> lab la-sells
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-servicestack"></i> lab la-servicestack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-shirtsinbulk"></i> lab la-shirtsinbulk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-shopware"></i> lab la-shopware
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-simplybuilt"></i> lab la-simplybuilt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sith"></i> lab la-sith
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sketch"></i> lab la-sketch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-skyatlas"></i> lab la-skyatlas
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-skype"></i> lab la-skype
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slack"></i> lab la-slack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slack-hash"></i> lab la-slack-has
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slideshare"></i> lab la-slideshare
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat"></i> lab la-snapchat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat-ghost"></i> lab la-snapchat-ghos
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat-square"></i> lab la-snapchat-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sourcetree"></i> lab la-sourcetree
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-speakap"></i> lab la-speakap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-speaker-deck"></i> lab la-speaker-deck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-squarespace"></i> lab la-squarespace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stack-exchange"></i> lab la-stack-exchange
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stack-overflow"></i> lab la-stack-overflow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stackpath"></i> lab la-stackpath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-staylinked"></i> lab la-staylinked
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sticker-mule"></i> lab la-sticker-mule
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-strava"></i> lab la-strava
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-studiovinari"></i> lab la-studiovinari
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stumbleupon"></i> lab la-stumbleupon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stumbleupon-circle"></i> lab la-stumbleupon-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-superpowers"></i> lab la-superpowers
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-supple"></i> lab la-supple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-suse"></i> lab la-suse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-swift"></i> lab la-swift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-symfony"></i> lab la-symfony
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-teamspeak"></i> lab la-teamspeak
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-telegram"></i> lab la-telegram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-telegram-plane"></i> lab la-telegram-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tencent-weibo"></i> lab la-tencent-weibo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-the-red-yeti"></i> lab la-the-red-yeti
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-themeco"></i> lab la-themeco
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-themeisle"></i> lab la-themeisle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-think-peaks"></i> lab la-think-peaks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-trade-federation"></i> lab la-trade-federation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-trello"></i> lab la-trello
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tripadvisor"></i> lab la-tripadvisor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tumblr"></i> lab la-tumblr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tumblr-square"></i> lab la-tumblr-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-twitter"></i>lab la-twitter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-twitter-square"></i>lab la-twitter-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-typo3"></i> lab la-typo3
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uber"></i> lab la-uber
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ubuntu"></i> lab la-ubuntu
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uikit"></i> lab la-uikit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-umbraco"></i> lab la-umbraco
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uniregistry"></i> lab la-uniregistry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-untappd"></i> lab la-untappd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ups"></i> lab la-ups
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-usb"></i> lab la-usb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-usps"></i> lab la-usps
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ussunnah"></i> lab la-ussunnah
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vaadin"></i> lab la-vaadin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viacoin"></i> lab la-viacoin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viadeo"></i> lab la-viadeo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viadeo-square"></i> lab la-viadeo-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viber"></i> lab la-viber
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo"></i> lab la-vimeo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo-square"></i> lab la-vimeo-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo-v"></i> lab la-vimeo-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vine"></i> lab la-vine
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vk"></i> lab la-vk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vnv"></i> lab la-vnv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vuejs"></i> lab la-vuejs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-waze"></i> lab la-waze
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weebly"></i> lab la-weebly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weibo"></i> lab la-weibo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weixin"></i> lab la-weixin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whatsapp"></i> lab la-whatsapp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whatsapp-square"></i> lab la-whatsapp-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whmcs"></i> lab la-whmcs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wikipedia-w"></i> lab la-wikipedia-w
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-windows"></i> lab la-windows
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wix"></i> lab la-wix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wolf-pack-battalion"></i> lab la-wolf-pack-battalion
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wordpress"></i> lab la-wordpress
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wordpress-simple"></i> lab la-wordpress-simple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpbeginner"></i> lab la-wpbeginner
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpexplorer"></i> lab la-wpexplorer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpforms"></i> lab la-wpforms
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpressr"></i> lab la-wpressr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-xing"></i> lab la-xing
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-xing-square"></i> lab la-xing-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-y-combinator"></i> lab la-y-combinator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yahoo"></i> lab la-yahoo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yammer"></i> lab la-yammer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yandex"></i> lab la-yandex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yandex-international"></i> lab la-yandex-international
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yarn"></i> lab la-yarn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yelp"></i> lab la-yelp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yoast"></i> lab la-yoast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-youtube-square"></i> lab la-youtube-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-zhihu"></i> lab la-zhihu
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Buildings</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archway"></i> las la-archway
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-building"></i> las la-building
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-campground"></i> las la-campgroun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-church"></i> las la-church
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-city"></i> las la-city
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clinic-medical"></i> las la-clinic-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dungeon"></i> las la-dungeon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gopuram"></i> las la-gopuram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-home"></i> las la-home
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital"></i> las la-hospital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital-alt"></i> las la-hospital-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hotel"></i> las la-hotel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-house-damage"></i> las la-house-damage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-igloo"></i> las la-igloo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-industry"></i> las la-industry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kaaba"></i> las la-kaaba
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-landmark"></i> las la-landmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-monument"></i> las la-monument
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mosque"></i> las la-mosque
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-place-of-worship"></i> las la-place-of-worship
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-school"></i> las la-school
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-store"></i> las la-store
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-store-alt"></i> las la-store-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-synagogue"></i> las la-synagogue
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-torii-gate"></i> las la-torii-gate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-university"></i> las la-university
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vihara"></i> las la-vihara
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-warehouse"></i> las la-warehouse
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Business</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-book"></i> las la-address-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-card"></i> las la-address-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archive"></i> las la-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale"></i> las la-balance-scale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-left"></i> las la-balance-scale-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-right"></i> las la-balance-scale-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-birthday-cake"></i> las la-birthday-cake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book"></i> las la-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-briefcase"></i> las la-briefcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-building"></i> las la-building
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullseye"></i> las la-bullseye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-business-time"></i> las la-business-tim
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calculator"></i> las la-calculator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-alt"></i> las la-calendar-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-certificate"></i> las la-certificate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-area"></i> las la-chart-area
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-bar"></i> las la-chart-ba
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-line"></i> las la-chart-line
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-pie"></i> las la-chart-pie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-city"></i> las la-city
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard"></i> las la-clipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-columns"></i> las la-columns
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copyright"></i> las la-copyright
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-edit"></i> las la-edit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope"></i> las la-envelop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-open"></i> las la-envelope-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-square"></i> las la-envelope-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eraser"></i> las la-eraser
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fax"></i> las la-fax
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-minus"></i> las la-folder-minus"
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-open"></i> las la-folder-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-plus"></i> las la-folder-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glasses"></i> las la-glasses
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe"></i> las la-globe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-highlighter"></i> las la-highlighter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-industry"></i> las la-industry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-landmark"></i> las la-landmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-marker"></i> las la-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paperclip"></i> las la-paperclip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-alt"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-fancy"></i> las la-pen-fancy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-nib"></i> las la-pen-nib
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-square"></i> las la-pen-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-alt"></i> las la-pencil-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-percent"></i> las la-percent
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-slash"></i> las la-phone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square"></i> las la-phone-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square-alt"></i> las la-phone-square-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-volume"></i> las la-phone-volume
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-project-diagram"></i> las la-project-diagram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-registered"></i> las la-registered
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sitemap"></i> las la-sitemap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-socks"></i> las la-socks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sticky-note"></i> las la-sticky-not
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stream"></i> las la-stream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-table"></i> las la-table
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tag"></i> las la-tag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tags"></i> las la-tags
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tasks"></i> las la-tasks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbtack"></i> las la-thumbtack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trademark"></i> las la-trademark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wallet"></i> las la-wallet
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Camping</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-binoculars"></i> las la-binoculars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-campground"></i> las la-campground
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire"></i> las la-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6"> las la-fire-alt
                                <i class="las la-fire-alt"></i>
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-first-aid"></i> las la-first-aid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frog"></i> las la-frog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hiking"></i> las la-hiking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map"></i> las la-map
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marked"></i> las la-map-marked
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-signs"></i> las la-map-signs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mountain"></i> las la-mountain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-route"></i> las la-route
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toilet-paper"></i> las la-toilet-paper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tree"></i> las la-tree
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Charity</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dollar-sign"></i> las la-dollar-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-donate"></i> las la-donate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dove"></i> las la-dove
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gift"></i> las la-gift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe"></i> las la-globe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding-heart"></i> las la-hand-holding-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding-usd"></i> las la-hand-holding-usd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hands-helping"></i> las la-hands-helping
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-handshake"></i> las la-handshake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-leaf"></i> las la-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-parachute-box"></i> las la-parachute-box
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-piggy-bank"></i> las la-piggy-bank
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ribbon"></i> las la-ribbon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-seedling"></i> las la-seedling
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Chat</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment"></i> las la-comment
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-alt"></i> las la-comment-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-dots"></i> las la-comment-dots
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-medical"></i> las la-comment-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-slash"></i> las la-comment-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comments"></i> las la-comments
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frown"></i> las la-frown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-icons"></i> las la-icons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meh"></i> las la-meh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-slash"></i> las la-phone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poo"></i> las la-poo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-left"></i> las la-quote-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-right"></i> las la-quote-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile"></i> las la-smile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sms"></i> las la-sms
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video"></i> las la-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video-slash"></i> las la-video-slash
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Chess</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess"></i> las la-chess
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-bishop"></i> las la-chess-bishop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-board"></i> las la-chess-board
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-king"></i> las la-chess-king
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-knight"></i> las la-chess-knight
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-pawn"></i> las la-chess-pawn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-queen"></i> las la-chess-queen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-rook"></i> las la-chess-rook
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-square-full"></i> las la-square-full
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Childhood</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-apple-alt"></i> las la-apple-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baby"></i> las la-baby
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baby-carriage"></i> las la-baby-carriage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-biking"></i> las la-biking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-birthday-cake"></i> las la-birthday-cake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie"></i> las la-cookie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie-bite"></i> las la-cookie-bite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gamepad"></i> las la-gamepad
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ice-cream"></i> las la-ice-cream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mitten"></i> las la-mitten
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-robot"></i> las la-robot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-school"></i> las la-school
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shapes"></i> las la-shapes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowman"></i> las la-snowman
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Clothing</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-graduation-cap"></i> las la-graduation-cap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-cowboy"></i> las la-hat-cowboy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-cowboy-side"></i> las la-hat-cowboy-side
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-wizard"></i> las la-hat-wizard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mitten"></i> las la-mitten
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shoe-prints"></i> las la-shoe-prints
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-socks"></i> las la-socks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tshirt"></i> las la-tshirt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-tie"></i> las la-user-tie
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Code</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archive"></i> las la-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-barcode"></i> las la-barcode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bug"></i> las la-bug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-code"></i> las la-code
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-code-branch"></i> las la-code-branch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-code"></i> las la-file-code
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-filter"></i> las la-filter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-extinguisher"></i> las la-fire-extinguisher
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-open"></i> las la-folder-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-keyboard"></i> las la-keyboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laptop-code"></i> las la-laptop-code
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microchip"></i> las la-microchip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-project-diagram"></i> las la-project-diagram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-qrcode"></i> las la-qrcode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shield-alt"></i> las la-shield-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sitemap"></i> las la-sitemap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stream"></i> las la-stream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-terminal"></i> las la-terminal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-secret"></i> las la-user-secret
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-window-close"></i> las la-window-close
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-window-maximize"></i> las la-window-maximize
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-window-minimize"></i> las la-window-minimize
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-window-restore"></i> las la-window-restore
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Communication</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-book"></i> las la-address-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-card"></i> las la-address-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-american-sign-language-interpreting"></i> las
                                la-american-sign-language-interpreting
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-assistive-listening-systems"></i> las la-assistive-listening-systems
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-at"></i> las la-at
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bluetooth"></i> lab la-bluetooth
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bluetooth-b"></i> lab la-bluetooth-b
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broadcast-tower"></i> las la-broadcast-tower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chalkboard"></i> las la-chalkboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment"></i> las la-comment
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-alt"></i> las la-comment-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comments"></i> las la-comments
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope"></i> las la-envelope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-open"></i> las la-envelope-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-square"></i> las la-envelope-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fax"></i> las la-fax
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-inbox"></i> las la-inbox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-language"></i> las la-language
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt-slash"></i> las la-microphone-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-slash"></i> las la-microphone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile"></i> las la-mobile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile-alt"></i> las la-mobile-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paper-plane"></i> las la-paper-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-slash"></i> las la-phone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square"></i> las la-phone-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square-alt"></i> las la-phone-square-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-volume"></i> las la-phone-volume
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss"></i> las la-rss
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss-square"></i> las la-rss-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tty"></i> las la-tty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-voicemail"></i> las la-voicemail
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wifi"></i> las la-wifi
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Computers</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-database"></i> las la-database
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-desktop"></i> las la-desktop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-download"></i> las la-download
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ethernet"></i> las la-ethernet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hdd"></i> las la-hdd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones"></i> las la-headphones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-keyboard"></i> las la-keyboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laptop"></i> las la-laptop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-memory"></i> las la-memory
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microchip"></i> las la-microchip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile"></i> las la-mobile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile-alt"></i> las la-mobile-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mouse"></i> las la-mouse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plug"></i> las la-plug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-power-off"></i> las la-power-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite"></i> las la-satellite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite-dish"></i> las la-satellite-dish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sd-card"></i> las la-sd-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-server"></i> las la-server
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sim-card"></i> las la-sim-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stream"></i> las la-stream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablet"></i> las la-tablet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablet-alt"></i> las la-tablet-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-upload"></i> las la-upload
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Construction</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-brush"></i> las la-brush
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drafting-compass"></i> las la-drafting-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dumpster"></i> las la-dumpster
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hammer"></i> las la-hammer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hard-hat"></i> las la-hard-hat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paint-roller"></i> las la-paint-roller
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-alt"></i> las la-pencil-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-ruler"></i> las la-pencil-ruler
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler"></i> las la-ruler
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-combined"></i> las la-ruler-combined
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-horizontal"></i> las la-ruler-horizontal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-vertical"></i> las la-ruler-vertical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-screwdriver"></i> las la-screwdriver
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toolbox"></i> las la-toolbox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tools"></i> las la-tools
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck-pickup"></i> las la-truck-pickup
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wrench"></i> las la-wrench
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Currency</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bitcoin"></i> lab la-bitcoin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-btc"></i> lab la-btc
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dollar-sign"></i> las la-dollar-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ethereum"></i> lab la-ethereum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-euro-sign"></i> las la-euro-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gg"></i> lab la-gg
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gg-circle"></i> lab la-gg-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hryvnia"></i> las la-hryvnia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lira-sign"></i> las la-lira-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill"></i> las la-money-bill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-alt"></i> las la-money-bill-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-wave"></i> las la-money-bill-wave
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-wave-alt"></i> las la-money-bill-wave-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check"></i> las la-money-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check-alt"></i> las la-money-check-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pound-sign"></i> las la-pound-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruble-sign"></i> las la-ruble-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rupee-sign"></i> las la-rupee-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shekel-sign"></i> las la-shekel-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tenge"></i> las la-tenge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-won-sign"></i> las la-won-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-yen-sign"></i> las la-yen-sign
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Date & Time</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-alt"></i> las la-calendar-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-check"></i> las la-calendar-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-minus"></i> las la-calendar-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-plus"></i> las la-calendar-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-times"></i> las la-calendar-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clock"></i> las la-clock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hourglass"></i> las la-hourglass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hourglass-end"></i> las la-hourglass-end
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hourglass-half"></i> las la-hourglass-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hourglass-start"></i> las la-hourglass-start
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stopwatch"></i> las la-stopwatch
                            </BCol>
                        </BRow>
                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Design</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-adjust"></i> las la-adjust
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bezier-curve"></i> las la-bezier-curve
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-brush"></i> las la-brush
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clone"></i> las la-clone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crop"></i> las la-crop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crop-alt"></i> las la-crop-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crosshairs"></i> las la-crosshairs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drafting-compass"></i> las la-drafting-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-draw-polygon"></i> las la-draw-polygon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-edit"></i> las la-edit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eraser"></i> las la-eraser
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-dropper"></i> las la-eye-dropper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fill"></i> las la-fill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fill-drip"></i> las la-fill-drip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-highlighter"></i> las la-highlighter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-icons"></i> las la-icons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-layer-group"></i> las la-layer-group
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magic"></i> las la-magic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-marker"></i> las la-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-object-group"></i> las la-object-group
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-object-ungroup"></i> las la-object-ungroup
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paint-brush"></i> las la-paint-brush
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paint-roller"></i> las la-paint-roller
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-palette"></i> las la-palette
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-alt"></i> las la-pen-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-fancy"></i> las la-pen-fancy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-nib"></i> las la-pen-nib
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-alt"></i> las la-pencil-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-ruler"></i> las la-pencil-ruler
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-combined"></i> las la-ruler-combined
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-horizontal"></i> las la-ruler-horizontal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-vertical"></i> las la-ruler-vertical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-splotch"></i> las la-splotch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spray-can"></i> las la-spray-can
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stamp"></i> las la-stamp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swatchbook"></i> las la-swatchbook
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint"></i> las la-tint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint-slash"></i> las la-tint-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vector-square"></i> las la-vector-square
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Editors</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-align-center"></i> las la-align-center
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-align-justify"></i> las la-align-justify
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-align-left"></i> las la-align-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-align-right"></i> las la-align-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bold"></i> las la-bold
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-border-all"></i> las la-border-all
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-border-none"></i> las la-border-none
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-border-style"></i> las la-border-style
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard"></i> las la-clipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clone"></i> las la-clone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-columns"></i> las la-columns
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-edit"></i> las la-edit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eraser"></i> las la-eraser
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-font"></i> las la-font
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glasses"></i> las la-glasses
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heading"></i> las la-heading
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-highlighter"></i> las la-highlighter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-i-cursor"></i> las la-i-cursor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-icons"></i> las la-icons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-indent"></i> las la-indent
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-italic"></i> las la-italic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-link"></i> las la-link
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-list"></i> las la-list
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-list-alt"></i> las la-list-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-list-ol"></i> las la-list-ol
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-list-ul"></i> las la-list-ul
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-marker"></i> las la-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-outdent"></i> las la-outdent
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paper-plane"></i> las la-paper-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paperclip"></i> las la-paperclip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paragraph"></i> las la-paragraph
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-alt"></i> las la-pen-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-fancy"></i> las la-pen-fancy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-nib"></i> las la-pen-nib
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-alt"></i> las la-pencil-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-left"></i> las la-quote-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-right"></i> las la-quote-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-reply-all"></i> las la-reply-all
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-screwdriver"></i> las la-screwdriver
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share"></i> las la-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spell-check"></i> las la-spell-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-strikethrough"></i> las la-strikethrough
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-subscript"></i> las la-subscript
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync"></i> las la-sync
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-text-width"></i> las la-text-width
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-th"></i> las la-th
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-th-large"></i> las la-th-large
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-th-list"></i> las la-th-list
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tools"></i> las la-tools
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash"></i> las la-trash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-alt"></i> las la-trash-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-restore"></i> las la-trash-restore
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-restore-alt"></i> las la-trash-restore-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-underline"></i> las la-underline
                            </BCol>
                            <BCol xl="3" lg="4" sm="6"><i class="las la-undo"></i>
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo-alt"></i> las la-undo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlink"></i> las la-unlink
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wrench"></i> las la-wrench
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Education</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-apple-alt"></i> las la-apple-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atom"></i> las la-atom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-award"></i> las la-award
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-open"></i> las la-book-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-reader"></i> las la-book-reader
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chalkboard"></i> las la-chalkboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chalkboard-teacher"></i> las la-chalkboard-teacher
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-graduation-cap"></i> las la-graduation-cap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laptop-code"></i> las la-laptop-code
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microscope"></i> las la-microscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-music"></i> las la-music
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-school"></i> las la-school
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shapes"></i> las la-shapes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-theater-masks"></i> las la-theater-masks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-graduate"></i> las la-user-graduate
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Emoji</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-angry"></i> las la-angry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dizzy"></i> las la-dizzy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flushed"></i> las la-flushed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frown"></i> las la-frown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frown-open"></i> las la-frown-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grimace"></i> las la-grimace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin"></i> las la-grin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-alt"></i> las la-grin-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-beam"></i> las la-grin-beam
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-beam-sweat"></i> las la-grin-beam-sweat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-hearts"></i> las la-grin-hearts
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-squint"></i> las la-grin-squint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-squint-tears"></i> las la-grin-squint-tears
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-stars"></i> las la-grin-stars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-tears"></i> las la-grin-tears
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-tongue"></i> las la-grin-tongue
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-tongue-squint"></i> las la-grin-tongue-squint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-tongue-wink"></i> las la-grin-tongue-wink
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grin-wink"></i> las la-grin-wink
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kiss"></i> las la-kiss
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kiss-beam"></i> las la-kiss-beam
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kiss-wink-heart"></i> las la-kiss-wink-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laugh"></i> las la-laugh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laugh-beam"></i> las la-laugh-beam
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meh-rolling-eyes"></i> las la-meh-rolling-eyes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sad-cry"></i> las la-sad-cry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sad-tear"></i> las la-sad-tear
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile"></i> las la-smile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile-beam"></i> las la-smile-beam
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile-wink"></i> las la-smile-wink
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-surprise"></i> las la-surprise
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tired"></i> las la-tired
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Energy</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atom"></i> las la-atom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-empty"></i> las la-battery-empty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-full"></i> las la-battery-full
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-half"></i> las la-battery-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-quarter"></i> las la-battery-quarter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-three-quarters"></i> las la-battery-three-quarters
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broadcast-tower"></i> las la-broadcast-tower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-burn"></i> las la-burn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-charging-station"></i> las la-charging-station
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire"></i> las la-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-alt"></i> las la-fire-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gas-pump"></i> las la-gas-pump
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-industry"></i> las la-industry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-leaf"></i> las la-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lightbulb"></i> las la-lightbulb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plug"></i> las la-plug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poop"></i> las la-poop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-power-off"></i> las la-power-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation"></i> las la-radiation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation-alt"></i> las la-radiation-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-seedling"></i> las la-seedling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-solar-panel"></i> las la-solar-panel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sun"></i> las la-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-water"></i> las la-water
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wind"></i> las la-wind
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Files</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archive"></i> las la-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clone"></i> las la-clone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-archive"></i> las la-file-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-audio"></i> las la-file-audio
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-code"></i> las la-file-code
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-excel"></i> las la-file-excel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-image"></i> las la-file-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-pdf"></i> las la-file-pdf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-powerpoint"></i> las la-file-powerpoint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-video"></i> las la-file-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-word"></i> las la-file-word
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-open"></i> las la-folder-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-photo-video"></i> las la-photo-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sticky-note"></i> las la-sticky-note
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Finance</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale"></i> las la-balance-scale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-left"></i> las la-balance-scale-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-right"></i> las la-balance-scale-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book"></i> las la-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cash-register"></i> las la-cash-register
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-line"></i> las la-chart-line
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chart-pie"></i> las la-chart-pie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coins"></i> las la-coins
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-dollar"></i> las la-comment-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comments-dollar"></i> las la-comments-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-credit-card"></i> las la-credit-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-donate"></i> las la-donate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-invoice"></i> las la-file-invoice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-invoice-dollar"></i> las la-file-invoice-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding-usd"></i> las la-hand-holding-usd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-landmark"></i> las la-landmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill"></i> las la-money-bill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-alt"></i> las la-money-bill-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-wave"></i> las la-money-bill-wave
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-wave-alt"></i> las la-money-bill-wave-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check"></i> las la-money-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check-alt"></i> las la-money-check-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-percentage"></i> las la-percentage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-piggy-bank"></i> las la-piggy-bank
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-receipt"></i> las la-receipt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stamp"></i> las la-stamp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wallet"></i> las la-wallet
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Fitness</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bicycle"></i> las la-bicycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bacon"></i> las la-bacon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bone"></i> las la-bone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bread-slice"></i> las la-bread-slice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-candy-cane"></i> las la-candy-cane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-carrot"></i> las la-carrot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cheese"></i> las la-cheese
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-meatball"></i> las la-cloud-meatball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie"></i> las la-cookie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drumstick-bite"></i> las la-drumstick-bite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-egg"></i> las la-egg
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fish"></i> las la-fish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hamburger"></i> las la-hamburger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hotdog"></i> las la-hotdog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ice-cream"></i> las la-ice-cream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lemon"></i> las la-lemon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pepper-hot"></i> las la-pepper-hot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pizza-slice"></i> las la-pizza-slice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-seedling"></i> las la-seedling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stroopwafel"></i> las la-stroopwafel
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Games</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess"></i> las la-chess
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-bishop"></i> las la-chess-bishop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-board"></i> las la-chess-board
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-king"></i> las la-chess-king
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-knight"></i> las la-chess-knight
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-pawn"></i> las la-chess-pawn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-queen"></i> las la-chess-queen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chess-rook"></i> las la-chess-rook
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice"></i> las la-dice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d20"></i> las la-dice-d20
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d6"></i> las la-dice-d6
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-five"></i> las la-dice-five
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-four"></i> las la-dice-four
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-one"></i> las la-dice-one
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-six"></i> las la-dice-six
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-three"></i> las la-dice-three
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-two"></i> las la-dice-two
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gamepad"></i> las la-gamepad
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ghost"></i> las la-ghost
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headset"></i> las la-headset
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-playstation"></i> lab la-playstation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-puzzle-piece"></i> las la-puzzle-piece
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-steam"></i> lab la-steam
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-steam-square"></i> lab la-steam-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-steam-symbol"></i> lab la-steam-symbol
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-twitch"></i> lab la-twitch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-xbox"></i> lab la-xbox
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Genders</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-genderless"></i> las la-genderless
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mars"></i> las la-mars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mars-double"></i> las la-mars-double
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mars-stroke"></i> las la-mars-stroke
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mars-stroke-h"></i> las la-mars-stroke-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mars-stroke-v"></i> las la-mars-stroke-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mercury"></i> las la-mercury
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-neuter"></i> las la-neuter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-transgender"></i> las la-transgender
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-transgender-alt"></i> las la-transgender-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-venus"></i> las la-venus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-venus-double"></i> las la-venus-double
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-venus-mars"></i> las la-venus-mars
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Halloween</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-dead"></i> las la-book-dead
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broom"></i> las la-broom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cat"></i> las la-cat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-moon"></i> las la-cloud-moon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crow"></i> las la-crow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ghost"></i> las la-ghost
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-wizard"></i> las la-hat-wizard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mask"></i> las la-mask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spider"></i> las la-spider
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toilet-paper"></i> las la-toilet-paper
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Hands</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-allergies"></i> las la-allergies
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fist-raised"></i> las la-fist-raised
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding"></i> las la-hand-holding
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding-heart"></i> las la-hand-holding-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-holding-usd"></i> las la-hand-holding-usd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-lizard"></i> las la-hand-lizard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-middle-finger"></i> las la-hand-middle-finger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-paper"></i> las la-hand-paper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-peace"></i> las la-hand-peace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-down"></i> las la-hand-point-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-left"></i> las la-hand-point-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-right"></i> las la-hand-point-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-point-up"></i> las la-hand-point-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-pointer"></i> las la-hand-pointer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-rock"></i> las la-hand-rock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-scissors"></i> las la-hand-scissors
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hand-spock"></i> las la-hand-spock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hands"></i> las la-hands
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hands-helping"></i> las la-hands-helping
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-handshake"></i> las la-handshake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-praying-hands"></i> las la-praying-hands
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-down"></i> las la-thumbs-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-up"></i> las la-thumbs-up
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Health</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-accessible-icon"></i> lab la-accessible-icon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ambulance"></i> las la-ambulance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-h-square"></i> las la-h-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heartbeat"></i> las la-heartbeat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital"></i> las la-hospital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-medkit"></i> las la-medkit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-square"></i> las la-plus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-prescription"></i> las la-prescription
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stethoscope"></i> las la-stethoscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-md"></i> las la-user-md
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Holiday</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-candy-cane"></i> las la-candy-cane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-carrot"></i> las la-carrot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie-bite"></i> las la-cookie-bite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gift"></i> las la-gift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gifts"></i> las la-gifts
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-cheers"></i> las la-glass-cheers
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-holly-berry"></i> las la-holly-berry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mug-hot"></i> las la-mug-hot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sleigh"></i> las la-sleigh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowman"></i> las la-snowman
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Hotel</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baby-carriage"></i> las la-baby-carriage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-briefcase"></i> las la-briefcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car"></i> las la-car
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cocktail"></i> las la-cocktail
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-concierge-bell"></i> las la-concierge-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice"></i> las la-dice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-five"></i> las la-dice-five
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-closed"></i> las la-door-closed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-open"></i> las la-door-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dumbbell"></i> las la-dumbbell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini"></i> las la-glass-martini
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini-alt"></i> las la-glass-martini-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hot-tub"></i> las la-hot-tub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hotel"></i> las la-hotel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-infinity"></i> las la-infinity
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-key"></i> las la-key
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-luggage-cart"></i> las la-luggage-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shower"></i> las la-shower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shuttle-van"></i> las la-shuttle-van
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smoking"></i> las la-smoking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smoking-ban"></i> las la-smoking-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowflake"></i> las la-snowflake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spa"></i> las la-spa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase"></i> las la-suitcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase-rolling"></i> las la-suitcase-rolling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimmer"></i> las la-swimmer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimming-pool"></i> las la-swimming-pool
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella-beach"></i> las la-umbrella-beach
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-utensils"></i> las la-utensils
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wifi"></i> las la-wifi
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Household</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">

                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blender"></i> las la-blender
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chair"></i> las la-chair
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-couch"></i> las la-couch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-closed"></i> las la-door-closed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-open"></i> las la-door-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dungeon"></i> las la-dungeon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fan"></i> las la-fan
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shower"></i> las la-shower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toilet-paper"></i> las la-toilet-paper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Images</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-adjust"></i> las la-adjust
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bolt"></i> las la-bolt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera"></i> las la-camera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera-retro"></i> las la-camera-retro
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chalkboard"></i> las la-chalkboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clone"></i> las la-clone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compress"></i> las la-compress
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compress-arrows-alt"></i> las la-compress-arrows-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-expand"></i> las la-expand
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-dropper"></i> las la-eye-dropper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-image"></i> las la-file-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-film"></i> las la-film
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-badge"></i> las la-id-badge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card"></i> las la-id-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-image"></i> las la-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-images"></i> las la-images
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-photo-video"></i> las la-photo-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-portrait"></i> las la-portrait
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sliders-h"></i> las la-sliders-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint"></i> las la-tint
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Interfaces</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-award"></i> las la-award
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ban"></i> las la-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-barcode"></i> las la-barcode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bars"></i> las la-bars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-beer"></i> las la-beer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blog"></i> las la-blog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bug"></i> las la-bug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullseye"></i> las la-bullseye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calculator"></i> las la-calculator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-alt"></i> las la-calendar-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-check"></i> las la-calendar-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-minus"></i> las la-calendar-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-plus"></i> las la-calendar-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-times"></i> las la-calendar-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-certificate"></i> las la-certificate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-check"></i> las la-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-check-circle"></i> las la-check-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-check-double"></i> las la-check-double
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-check-square"></i> las la-check-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-circle"></i> las la-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard"></i> las la-clipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clone"></i> las la-clone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-download-alt"></i> las la-cloud-download-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-upload-alt"></i> las la-cloud-upload-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cog"></i> las la-cog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cogs"></i> las la-cogs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-database"></i> las la-database
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dot-circle"></i> las la-dot-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-download"></i> las la-download
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-edit"></i> las la-edit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ellipsis-h"></i> las la-ellipsis-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ellipsis-v"></i> las la-ellipsis-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope"></i> las la-envelope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-open"></i> las la-envelope-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eraser"></i> las la-eraser
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation"></i> las la-exclamation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-circle"></i> las la-exclamation-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-triangle"></i> las la-exclamation-triangle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-external-link-alt"></i> las la-external-link-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-external-link-square-alt"></i> las la-external-link-square-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-download"></i> las la-file-download
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-export"></i> las la-file-export
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-import"></i> las la-file-import
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-upload"></i> las la-file-upload
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-filter"></i> las la-filter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fingerprint"></i> las la-fingerprint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag"></i> las la-flag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag-checkered"></i> las la-flag-checkered
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-open"></i> las la-folder-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frown"></i> las la-frown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glasses"></i> las la-glasses
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grip-horizontal"></i> las la-grip-horizontal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grip-lines"></i> las la-grip-lines
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grip-lines-vertical"></i> las la-grip-lines-vertical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-grip-vertical"></i> las la-grip-vertical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hashtag"></i> las la-hashtag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-history"></i> las la-history
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-home"></i> las la-home
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-i-cursor"></i> las la-i-cursor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info"></i> las la-info
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info-circle"></i> las la-info-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-language"></i> las la-language
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magic"></i> las la-magic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-marker"></i> las la-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-medal"></i> las la-medal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meh"></i> las la-meh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-slash"></i> las la-microphone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus"></i> las la-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus-circle"></i> las la-minus-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus-square"></i> las la-minus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-alt"></i> las la-pen-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen-fancy"></i> las la-pen-fancy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pencil-alt"></i> las la-pencil-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus"></i> las la-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-circle"></i> las la-plus-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-square"></i> las la-plus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poo"></i> las la-poo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-qrcode"></i> las la-qrcode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question"></i> las la-question
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question"></i> las la-question
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question-circle"></i> las la-question-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-left"></i> las la-quote-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quote-right"></i> las la-quote-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo"></i> las la-redo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-redo-alt"></i> las la-redo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-reply"></i> las la-reply
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-reply-all"></i> las la-reply-all
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss"></i> las la-rss
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rss-square"></i> las la-rss-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-screwdriver"></i> las la-screwdriver
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search"></i> las la-search
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-minus"></i> las la-search-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-plus"></i> las la-search-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share"></i> las la-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-alt"></i> las la-share-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-alt-square"></i> las la-share-alt-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-square"></i> las la-share-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shield-alt"></i> las la-shield-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-in-alt"></i> las la-sign-in-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-out-alt"></i> las la-sign-out-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-signal"></i> las la-signal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sitemap"></i> las la-sitemap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sliders-h"></i> las la-sliders-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile"></i> las la-smile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort"></i> las la-sort
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-down"></i> las la-sort-alpha-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-down-alt"></i> las la-sort-alpha-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-up"></i> las la-sort-alpha-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-alpha-up-alt"></i> las la-sort-alpha-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-down"></i> las la-sort-amount-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-amount-down-alt"></i> las la-sort-amount-down-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-up"></i> las la-sort-numeric-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-numeric-up-alt"></i> las la-sort-numeric-up-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sort-up"></i> las la-sort-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-half"></i> las la-star-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync"></i> las la-sync
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync-alt"></i> las la-sync-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-down"></i> las la-thumbs-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-up"></i> las la-thumbs-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-times"></i> las la-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-times-circle"></i> las la-times-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toggle-off"></i> las la-toggle-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toggle-on"></i> las la-toggle-on
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tools"></i> las la-tools
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash"></i> las la-trash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-alt"></i> las la-trash-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-restore"></i> las la-trash-restore
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-restore-alt"></i> las la-trash-restore-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trophy"></i> las la-trophy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo"></i> las la-undo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-undo-alt"></i> las la-undo-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-upload"></i> las la-upload
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user"></i> las la-user
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-alt"></i> las la-user-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-circle"></i> las la-user-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-down"></i> las la-volume-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-mute"></i> las la-volume-mute
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-off"></i> las la-volume-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-up"></i> las la-volume-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wifi"></i> las la-wifi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wrench"></i> las la-wrench
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Logistics</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-box"></i> las la-box
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-boxes"></i> las la-boxes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard-check"></i> las la-clipboard-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard-list"></i> las la-clipboard-list
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dolly"></i> las la-dolly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dolly-flatbed"></i> las la-dolly-flatbed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hard-hat"></i> las la-hard-hat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pallet"></i> las la-pallet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shipping-fast"></i> las la-shipping-fast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck"></i> las la-truck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-warehouse"></i> las la-warehouse
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Maps</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ambulance"></i> las la-ambulance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-anchor"></i> las la-anchor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale"></i> las la-balance-scale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-left"></i> las la-balance-scale-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-right"></i> las la-balance-scale-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-beer"></i> las la-beer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bicycle"></i> las la-bicycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-binoculars"></i> las la-binoculars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-birthday-cake"></i> las la-birthday-cake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blind"></i> las la-blind
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bomb"></i> las la-bomb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book"></i> las la-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bookmark"></i> las la-bookmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-briefcase"></i> las la-briefcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-building"></i> las la-building
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car"></i> las la-car
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crosshairs"></i> las la-crosshairs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-directions"></i> las la-directions
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dollar-sign"></i> las la-dollar-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-draw-polygon"></i> las la-draw-polygon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fighter-jet"></i> las la-fighter-jet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire"></i> las la-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-alt"></i> las la-fire-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-extinguisher"></i> las la-fire-extinguisher
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag"></i> las la-flag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag-checkered"></i> las la-flag-checkered
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flask"></i> las la-flask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gamepad"></i> las la-gamepad
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gavel"></i> las la-gavel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gift"></i> las la-gift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini"></i> las la-glass-martini
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe"></i> las la-globe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-graduation-cap"></i> las la-graduation-cap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-h-square"></i> las la-h-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heartbeat"></i> las la-heartbeat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-helicopter"></i> las la-helicopter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-home"></i> las la-home
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital"></i> las la-hospital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-image"></i> las la-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-images"></i> las la-images
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-industry"></i> las la-industry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info"></i> las la-info
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info-circle"></i> las la-info-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-key"></i> las la-key
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-landmark"></i> las la-landmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-layer-group"></i> las la-layer-group
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-leaf"></i> las la-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lemon"></i> las la-lemon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-life-ring"></i> las la-life-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lightbulb"></i> las la-lightbulb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-location-arrow"></i> las la-location-arrow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-low-vision"></i> las la-low-vision
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magnet"></i> las la-magnet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-male"></i> las la-male
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map"></i> las la-map
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker"></i> las la-map-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker-alt"></i> las la-map-marker-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-pin"></i> las la-map-pin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-signs"></i> las la-map-signs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-medkit"></i> las la-medkit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill"></i> las la-money-bill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-alt"></i> las la-money-bill-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-motorcycle"></i> las la-motorcycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-music"></i> las la-music
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-newspaper"></i> las la-newspaper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-parking"></i> las la-parking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paw"></i> las la-paw
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square"></i> las la-phone-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-square-alt"></i> las la-phone-square-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-volume"></i> las la-phone-volume
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plane"></i> las la-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plug"></i> las la-plug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus"></i> las la-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-square"></i> las la-plus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-recycle"></i> las la-recycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-restroom"></i> las la-restroom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-road"></i> las la-road
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rocket"></i> las la-rocket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-route"></i> las la-route
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search"></i> las la-search
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-minus"></i> las la-search-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-plus"></i> las la-search-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ship"></i> las la-ship
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shoe-prints"></i> las la-shoe-prints
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-bag"></i> las la-shopping-bag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-basket"></i> las la-shopping-basket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-cart"></i> las la-shopping-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shower"></i> las la-shower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowplow"></i> las la-snowplow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-street-view"></i> las la-street-view
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-subway"></i> las la-subway
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase"></i> las la-suitcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tag"></i> las la-tag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tags"></i> las la-tags
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-taxi"></i> las la-taxi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbtack"></i> las la-thumbtack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ticket-alt"></i> las la-ticket-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint"></i> las la-tint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-traffic-light"></i> las la-traffic-light
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-train"></i> las la-train
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tram"></i> las la-tram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tree"></i> las la-tree
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trophy"></i> las la-trophy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck"></i> las la-truck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck"></i> las la-truck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tty"></i> las la-tty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella"></i> las la-umbrella
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-university"></i> las la-university
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-utensil-spoon"></i> las la-utensil-spoon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-utensils"></i> las la-utensils
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wifi"></i> las la-wifi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass"></i> las la-wine-glass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wrench"></i> las la-wrench
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Maritime</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-anchor"></i> las la-anchor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-binoculars"></i> las la-binoculars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dharmachakra"></i> las la-dharmachakra
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frog"></i> las la-frog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ship"></i> las la-ship
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimmer"></i> las la-swimmer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-water"></i> las la-water
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wind"></i> las la-wind
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Marketing</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ad"></i> las la-ad
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullseye"></i> las la-bullseye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-dollar"></i> las la-comment-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">3
                                <i class="las la-comments-dollar"></i> las la-comments-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-open-text"></i> las la-envelope-open-text
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-funnel-dollar"></i> las la-funnel-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lightbulb"></i> las la-lightbulb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mail-bulk"></i> las la-mail-bulk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poll"></i> las la-poll
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poll-h"></i> las la-poll-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-dollar"></i> las la-search-dollar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search-location"></i> las la-search-location
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Mathematics</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calculator"></i> las la-calculator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-divide"></i> las la-divide
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-equals"></i> las la-equals
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-greater-than"></i> las la-greater-than
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-greater-than-equal"></i> las la-greater-than-equal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-infinity"></i> las la-infinity
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-less-than"></i> las la-less-than
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-less-than-equal"></i> las la-less-than-equal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus"></i> las la-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-not-equal"></i> las la-not-equal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-percentage"></i> las la-percentage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus"></i> las la-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-square-root-alt"></i> las la-square-root-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-subscript"></i> las la-subscript
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-superscript"></i> las la-superscript
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-times"></i> las la-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wave-square"></i> las la-wave-square
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Medical</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-allergies"></i> las la-allergies
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ambulance"></i> las la-ambulance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-band-aid"></i> las la-band-aid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-biohazard"></i> las la-biohazard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bone"></i> las la-bone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bong"></i> las la-bong
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-medical"></i> las la-book-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-brain"></i> las la-brain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-briefcase-medical"></i> las la-briefcase-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-burn"></i> las la-burn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cannabis"></i> las la-cannabis
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-capsules"></i> las la-capsules
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clinic-medical"></i> las la-clinic-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-medical"></i> las la-comment-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crutch"></i> las la-crutch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-diagnoses"></i> las la-diagnoses
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dna"></i> las la-dna
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-medical"></i> las la-file-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-medical-alt"></i> las la-file-medical-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-prescription"></i> las la-file-prescription
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-first-aid"></i> las la-first-aid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heartbeat"></i> las la-heartbeat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital"></i> las la-hospital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital-alt"></i> las la-hospital-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital-symbol"></i> las la-hospital-symbol
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card-alt"></i> las la-id-card-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-joint"></i> las la-joint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laptop-medical"></i> las la-laptop-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microscope"></i> las la-microscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mortar-pestle"></i> las la-mortar-pestle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-notes-medical"></i> las la-notes-medical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pager"></i> las la-pager
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pills"></i> las la-pills
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus"></i> las la-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poop"></i> las la-poop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-prescription"></i> las la-prescription
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-prescription-bottle"></i> las la-prescription-bottle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-prescription-bottle-alt"></i> las la-prescription-bottle-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-procedures"></i> las la-procedures
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation"></i> las la-radiation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation-alt"></i> las la-radiation-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smoking"></i> las la-smoking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smoking-ban"></i> las la-smoking-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-of-life"></i> las la-star-of-life
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stethoscope"></i> las la-stethoscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-syringe"></i> las la-syringe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablets"></i> las la-tablets
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-teeth"></i> las la-teeth
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-teeth-open"></i> las la-teeth-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer"></i> las la-thermometer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tooth"></i> las la-tooth
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-md"></i> las la-user-md
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-nurse"></i> las la-user-nurse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vial"></i> las la-vial
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vials"></i> las la-vials
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-weight"></i> las la-weight
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-x-ray"></i> las la-x-ray
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Moving</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archive"></i> las la-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-box-open"></i> las la-box-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-couch"></i> las la-couch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dolly"></i> las la-dolly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-people-carry"></i> las la-people-carry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-route"></i> las la-route
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign"></i> las la-sign
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase"></i> las la-suitcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tape"></i> las la-tape
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck-loading"></i> las la-truck-loading
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck-moving"></i> las la-truck-moving
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass"></i> las la-wine-glass
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Music</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drum"></i> las la-drum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drum-steelpan"></i> las la-drum-steelpan
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-audio"></i> las la-file-audio
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-guitar"></i> las la-guitar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones"></i> las la-headphones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones-alt"></i> las la-headphones-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt-slash"></i> las la-microphone-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-slash"></i> las la-microphone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-music"></i> las la-music
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-napster"></i> lab la-napster
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-play"></i> las la-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-record-vinyl"></i> las la-record-vinyl
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sliders-h"></i> las la-sliders-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-soundcloud"></i> lab la-soundcloud
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-spotify"></i> lab la-spotify
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-down"></i> las la-volume-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-mute"></i> las la-volume-mute
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-off"></i> las la-volume-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-up"></i> las la-volume-up
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Objects</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ambulance"></i> las la-ambulance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-anchor"></i> las la-anchor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archive"></i> las la-archive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-award"></i> las la-award
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baby-carriage"></i> las la-baby-carriage
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale"></i> las la-balance-scale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-left"></i> las la-balance-scale-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-right"></i> las la-balance-scale-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bath"></i> las la-bath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-beer"></i> las la-beer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bicycle"></i> las la-bicycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-binoculars"></i> las la-binoculars
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-birthday-cake"></i> las la-birthday-cake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blender"></i> las la-blender
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bomb"></i> las la-bomb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book"></i> las la-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-dead"></i> las la-book-dead
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bookmark"></i> las la-bookmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-briefcase"></i> las la-briefcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broadcast-tower"></i> las la-broadcast-tower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bug"></i> las la-bug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-building"></i> las la-building
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullseye"></i> las la-bullseye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bus"></i> las la-bus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calculator"></i> las la-calculator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-alt"></i> las la-calendar-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera"></i> las la-camera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera-retro"></i> las la-camera-retro
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-candy-cane"></i> las la-candy-cane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-car"></i> las la-car
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-carrot"></i> las la-carrot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-church"></i> las la-church
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard"></i> las la-clipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud"></i> las la-cloud
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-coffee"></i> las la-coffee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cog"></i> las la-cog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cogs"></i> las la-cogs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie"></i> las la-cookie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cookie-bite"></i> las la-cookie-bite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-copy"></i> las la-copy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cube"></i> las la-cube
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cubes"></i> las la-cubes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cut"></i> las la-cut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice"></i> las la-dice
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d20"></i> las la-dice-d20
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d6"></i> las la-dice-d6
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-five"></i> las la-dice-five
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-four"></i> las la-dice-four
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-one"></i> las la-dice-one
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-six"></i> las la-dice-six
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-three"></i> las la-dice-three
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-two"></i> las la-dice-two
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-digital-tachograph"></i> las la-digital-tachograph
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-closed"></i> las la-door-closed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-open"></i> las la-door-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drum"></i> las la-drum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-drum-steelpan"></i> las la-drum-steelpan
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope"></i> las la-envelope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope-open"></i> las la-envelope-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eraser"></i> las la-eraser
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-dropper"></i> las la-eye-dropper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fax"></i> las la-fax
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-feather"></i> las la-feather
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-feather-alt"></i> las la-feather-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fighter-jet"></i> las la-fighter-jet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-prescription"></i> las la-file-prescription
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-film"></i> las la-film
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire"></i> las la-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-alt"></i> las la-fire-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-extinguisher"></i> las la-fire-extinguisher
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag"></i> las la-flag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag-checkered"></i> las la-flag-checkered
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flask"></i> las la-flask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-futbol"></i> las la-futbol
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gamepad"></i> las la-gamepad
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gavel"></i> las la-gavel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gem"></i> las la-gem
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gift"></i> las la-gift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gifts"></i> las la-gifts
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-cheers"></i> las la-glass-cheers
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini"></i> las la-glass-martini
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-whiskey"></i> las la-glass-whiskey
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glasses"></i> las la-glasses
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe"></i> las la-globe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-graduation-cap"></i> las la-graduation-cap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-guitar"></i> las la-guitar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-wizard"></i> las la-hat-wizard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hdd"></i> las la-hdd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones"></i> las la-headphones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headphones-alt"></i> las la-headphones-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-headset"></i> las la-headset
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart-broken"></i> las la-heart-broken
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-helicopter"></i> las la-helicopter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-highlighter"></i> las la-highlighter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-holly-berry"></i> las la-holly-berry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-home"></i> las la-home
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hospital"></i> las la-hospital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hourglass"></i> las la-hourglass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-igloo"></i> las la-igloo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-image"></i> las la-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-images"></i> las la-images
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-industry"></i> las la-industry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-key"></i> las la-key
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-keyboard"></i> las la-keyboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-laptop"></i> las la-laptop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-leaf"></i> las la-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lemon"></i> las la-lemon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-life-ring"></i> las la-life-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lightbulb"></i> las la-lightbulb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock"></i> las la-lock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock-open"></i> las la-lock-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magic"></i> las la-magic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magnet"></i> las la-magnet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map"></i> las la-map
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker"></i> las la-map-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker-alt"></i> las la-map-marker-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-pin"></i> las la-map-pin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-signs"></i> las la-map-signs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-marker"></i> las la-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-medal"></i> las la-medal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-medkit"></i> las la-medkit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-memory"></i> las la-memory
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microchip"></i> las la-microchip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mitten"></i> las la-mitten
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile"></i> las la-mobile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mobile-alt"></i> las la-mobile-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill"></i> las la-money-bill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-bill-alt"></i> las la-money-bill-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check"></i> las la-money-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check-alt"></i> las la-money-check-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-moon"></i> las la-moon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-motorcycle"></i> las la-motorcycle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mug-hot"></i> las la-mug-hot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-newspaper"></i> las la-newspaper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paint-brush"></i> las la-paint-brush
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paper-plane"></i> las la-paper-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paperclip"></i> las la-paperclip
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paste"></i> las la-paste
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-paw"></i> las la-paw
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pen"></i> las la-pen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plane"></i> las la-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plug"></i> las la-plug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-puzzle-piece"></i> las la-puzzle-piece
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ring"></i> las la-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-road"></i> las la-road
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rocket"></i> las la-rocket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-combined"></i> las la-ruler-combined
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-horizontal"></i> las la-ruler-horizontal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ruler-vertical"></i> las la-ruler-vertical
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite"></i> las la-satellite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite-dish"></i> las la-satellite-dish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-save"></i> las la-save
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-school"></i> las la-school
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-screwdriver"></i> las la-screwdriver
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-scroll"></i> las la-scroll
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sd-card"></i> las la-sd-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-search"></i> las la-search
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shield-alt"></i> las la-shield-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-bag"></i> las la-shopping-bag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-basket"></i> las la-shopping-basket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-cart"></i> las la-shopping-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shower"></i> las la-shower
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sim-card"></i> las la-sim-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sleigh"></i> las la-sleigh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowflake"></i> las la-snowflake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowplow"></i> las la-snowplow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-space-shuttle"></i> las la-space-shuttle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sticky-note"></i> las la-sticky-note
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stopwatch"></i> las la-stopwatch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stroopwafel"></i> las la-stroopwafel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-subway"></i> las la-subway
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase"></i> las la-suitcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sun"></i> las la-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablet"></i> las la-tablet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablet-alt"></i> las la-tablet-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tachometer-alt"></i> las la-tachometer-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tag"></i> las la-tag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tags"></i> las la-tags
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-taxi"></i> las la-taxi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbtack"></i> las la-thumbtack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ticket-alt"></i> las la-ticket-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toilet"></i> las la-toilet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toolbox"></i> las la-toolbox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tools"></i> las la-tools
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-train"></i> las la-train
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tram"></i> las la-tram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash"></i> las la-trash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trash-alt"></i> las la-trash-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tree"></i> las la-tree
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trophy"></i> las la-trophy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-truck"></i> las la-truck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella"></i> las la-umbrella
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-university"></i> las la-university
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock"></i> las la-unlock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock-alt"></i> las la-unlock-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-utensil-spoon"></i> las la-utensil-spoon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-utensils"></i> las la-utensils
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wallet"></i> las la-wallet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-weight"></i> las la-weight
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass"></i> las la-wine-glass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wrench"></i> las la-wrench
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Other</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-500px"></i> lab la-500px
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-accusoft"></i> lab la-accusoft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adn"></i> lab la-adn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adobe"></i> lab la-adobe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-adversal"></i> lab la-adversal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-affiliatetheme"></i> lab la-affiliatetheme
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-airbnb"></i> lab la-airbnb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-algolia"></i> lab la-algolia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-amazon"></i> lab la-amazon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-amilia"></i> lab la-amilia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-android"></i> lab la-android
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angellist"></i> lab la-angellist
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angrycreative"></i> lab la-angrycreative
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-angular"></i> lab la-angular
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-app-store"></i> lab la-app-store
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-app-store-ios"></i> lab la-app-store-ios
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-apper"></i> lab la-apper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-apple"></i> lab la-apple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-artstation"></i> lab la-artstation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-asymmetrik"></i> lab la-asymmetrik
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-atlassian"></i> lab la-atlassian
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-audible"></i> lab la-audible
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-autoprefixer"></i> lab la-autoprefixer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-avianex"></i> lab la-avianex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-aviato"></i> lab la-aviato
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-aws"></i> lab la-aws
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-backspace"></i> las la-backspace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bandcamp"></i> lab la-bandcamp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-battle-net"></i> lab la-battle-net
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-behance"></i> lab la-behance
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-behance-square"></i> lab la-behance-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-behance-square"></i> lab la-behance-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bimobject"></i> lab la-bimobject
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bitbucket"></i> lab la-bitbucket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bity"></i> lab la-bity
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-black-tie"></i> lab la-black-tie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blackberry"></i> lab la-blackberry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blender-phone"></i> las la-blender-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blogger"></i> lab la-blogger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-blogger-b"></i> lab la-blogger-b
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bootstrap"></i> lab la-bootstrap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buffer"></i> lab la-buffer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buromobelexperte"></i> lab la-buromobelexperte
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buy-n-large"></i> lab la-buy-n-large
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-buysellads"></i> lab la-buysellads
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-canadian-maple-leaf"></i> lab la-canadian-maple-leaf
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-centercode"></i> lab la-centercode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-centos"></i> lab la-centos
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-chrome"></i> lab la-chrome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-chromecast"></i> lab la-chromecast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudscale"></i> lab la-cloudscale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudsmith"></i> lab la-cloudsmith
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cloudversify"></i> lab la-cloudversify
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-codepen"></i> lab la-codepen
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-codiepie"></i> lab la-codiepie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-confluence"></i> lab la-confluence
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-connectdevelop"></i> lab la-connectdevelop
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-contao"></i> lab la-contao
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cotton-bureau"></i> lab la-cotton-bureau
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cpanel"></i> lab la-cpanel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons"></i> lab la-creative-commons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-by"></i> lab la-creative-commons-by
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc"></i> lab la-creative-commons-nc
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc-eu"></i> lab la-creative-commons-nc-eu
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nc-jp"></i> lab la-creative-commons-nc-jp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-nd"></i> lab la-creative-commons-nd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-pd"></i> lab la-creative-commons-pd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-pd-alt"></i> lab la-creative-commons-pd-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-remix"></i> lab la-creative-commons-remix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sa"></i> lab la-creative-commons-sa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sampling"></i> lab la-creative-commons-sampling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-sampling-plus"></i> lab
                                la-creative-commons-sampling-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-share"></i> lab la-creative-commons-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-creative-commons-zero"></i> lab la-creative-commons-zero
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crown"></i> las la-crown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-css3"></i> lab la-css3
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-css3-alt"></i> lab la-css3-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cuttlefish"></i> lab la-cuttlefish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dashcube"></i> lab la-dashcube
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-delicious"></i> lab la-delicious
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deploydog"></i> lab la-deploydog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deskpro"></i> lab la-deskpro
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dev"></i> lab la-dev
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-deviantart"></i> lab la-deviantart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dhl"></i> lab la-dhl
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-diaspora"></i> lab la-diaspora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-digg"></i> lab la-digg
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-digital-ocean"></i> lab la-digital-ocean
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-discord"></i> lab la-discord
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-discourse"></i> lab la-discourse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dochub"></i> lab la-dochub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-docker"></i> lab la-docker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-draft2digital"></i> lab la-draft2digital
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dribbble"></i> lab la-dribbble
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dribbble-square"></i> lab la-dribbble-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dropbox"></i> lab la-dropbox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-drupal"></i> lab la-drupal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dumpster-fire"></i> las la-dumpster-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-dyalog"></i> lab la-dyalog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-earlybirds"></i> lab la-earlybirds
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ebay"></i> lab la-ebay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-edge"></i> lab la-edge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-elementor"></i> lab la-elementor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ello"></i> lab la-ello
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ember"></i> lab la-ember
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-empire"></i> lab la-empire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-envira"></i> lab la-envira
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-erlang"></i> lab la-erlang
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-etsy"></i> lab la-etsy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-evernote"></i> lab la-evernote
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-expeditedssl"></i> lab la-expeditedssl
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook"></i> lab la-facebook
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-f"></i> lab la-facebook-f
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-messenger"></i> lab la-facebook-messenger
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-facebook-square"></i> lab la-facebook-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fedex"></i> lab la-fedex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fedora"></i> lab la-fedora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-figma"></i> lab la-figma
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-csv"></i> las la-file-csv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-firefox"></i> lab la-firefox
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-first-order"></i> lab la-first-order
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-first-order-alt"></i> lab la-first-order-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-firstdraft"></i> lab la-firstdraft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-flickr"></i> lab la-flickr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-flipboard"></i> lab la-flipboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fly"></i> lab la-fly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome"></i> lab la-font-awesome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome-alt"></i> lab la-font-awesome-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-font-awesome-flag"></i> lab la-font-awesome-flag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fonticons"></i> lab la-fonticons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fonticons-fi"></i> lab la-fonticons-fi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fort-awesome"></i> lab la-fort-awesome
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fort-awesome-alt"></i> lab la-fort-awesome-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-forumbee"></i> lab la-forumbee
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-foursquare"></i> lab la-foursquare
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-free-code-camp"></i> lab la-free-code-camp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-freebsd"></i> lab la-freebsd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fulcrum"></i> lab la-fulcrum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-get-pocket"></i> lab la-get-pocket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git"></i> lab la-git
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git-alt"></i> lab la-git-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-git-square"></i> lab la-git-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gitlab"></i> lab la-gitlab
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gitter"></i> lab la-gitter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-glide"></i> lab la-glide
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-glide-g"></i> lab la-glide-g
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gofore"></i> lab la-gofore
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-goodreads"></i> lab la-goodreads
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-goodreads-g"></i> lab la-goodreads-g
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google"></i> lab la-google
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-drive"></i> lab la-google-drive
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-play"></i> lab la-google-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus"></i> lab la-google-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus-g"></i> lab la-google-plus-g
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-plus-square"></i> lab la-google-plus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gratipay"></i> lab la-gratipay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-grav"></i> lab la-grav
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gripfire"></i> lab la-gripfire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-grunt"></i> lab la-grunt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-gulp"></i> lab la-gulp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hacker-news"></i> lab la-hacker-news
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hacker-news-square"></i> lab la-hacker-news-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hackerrank"></i> lab la-hackerrank
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hips"></i> lab la-hips
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hire-a-helper"></i> lab la-hire-a-helper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hooli"></i> lab la-hooli
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hornbill"></i> lab la-hornbill
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hotjar"></i> lab la-hotjar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-houzz"></i> lab la-houzz
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-html5"></i> lab la-html5
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-hubspot"></i> lab la-hubspot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-imdb"></i> lab la-imdb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-instagram"></i> lab la-instagram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-intercom"></i> lab la-intercom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-internet-explorer"></i> lab la-internet-explorer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-invision"></i> lab la-invision
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ioxhost"></i> lab la-ioxhost
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itch-io"></i> lab la-itch-io
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itunes"></i> lab la-itunes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-itunes-note"></i> lab la-itunes-note
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-java"></i> lab la-java
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jenkins"></i> lab la-jenkins
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jira"></i> lab la-jira
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-joget"></i> lab la-joget
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-joomla"></i> lab la-joomla
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-js"></i> lab la-js
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-js-square"></i> lab la-js-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jsfiddle"></i> lab la-jsfiddle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kaggle"></i> lab la-kaggle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-keybase"></i> lab la-keybase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-keycdn"></i> lab la-keycdn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kickstarter"></i> lab la-kickstarter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-kickstarter-k"></i> lab la-kickstarter-k
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-korvue"></i> lab la-korvue
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-laravel"></i> lab la-laravel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lastfm"></i> lab la-lastfm
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lastfm-square"></i> lab la-lastfm-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-leanpub"></i> lab la-leanpub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-less"></i> lab la-less
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-line"></i> lab la-line
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linkedin"></i> lab la-linkedin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linkedin-in"></i> lab la-linkedin-in
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linode"></i> lab la-linode
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-linux"></i> lab la-linux
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-lyft"></i> lab la-lyft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-magento"></i> lab la-magento
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mailchimp"></i> lab la-mailchimp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mandalorian"></i> lab la-mandalorian
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-markdown"></i> lab la-markdown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mastodon"></i> lab la-mastodon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-maxcdn"></i> lab la-maxcdn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mdb"></i> lab la-mdb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medapps"></i> lab la-medapps
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medium"></i> lab la-medium
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medium-m"></i> lab la-medium-m
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-medrt"></i> lab la-medrt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-meetup"></i> lab la-meetup
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-megaport"></i> lab la-megaport
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mendeley"></i> lab la-mendeley
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-microsoft"></i> lab la-microsoft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-microsoft"></i> lab la-microsoft
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mix"></i> lab la-mix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mixcloud"></i> lab la-mixcloud
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-mizuni"></i> lab la-mizuni
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-modx"></i> lab la-modx
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-monero"></i> lab la-monero
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-neos"></i> lab la-neos
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-network-wired"></i> las la-network-wired
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-nimblr"></i> lab la-nimblr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-node"></i> lab la-node
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-node-js"></i> lab la-node-js
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-npm"></i> lab la-npm
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ns8"></i> lab la-ns8
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-nutritionix"></i> lab la-nutritionix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-odnoklassniki"></i> lab la-odnoklassniki
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-odnoklassniki-square"></i> lab la-odnoklassniki-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-opencart"></i> lab la-opencart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-openid"></i> lab la-openid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-opera"></i> lab la-opera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-optin-monster"></i> lab la-optin-monster
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-orcid"></i> lab la-orcid
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-osi"></i> lab la-osi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-page4"></i> lab la-page4
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pagelines"></i> lab la-pagelines
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-palfed"></i> lab la-palfed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-patreon"></i> lab la-patreon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-periscope"></i> lab la-periscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phabricator"></i> lab la-phabricator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phoenix-framework"></i> lab la-phoenix-framework
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-phoenix-squadron"></i> lab la-phoenix-squadron
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-php"></i> lab la-php
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper"></i> lab la-pied-piper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-alt"></i> lab la-pied-piper-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-hat"></i> lab la-pied-piper-hat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pied-piper-pp"></i> lab la-pied-piper-pp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest"></i> lab la-pinterest
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest-p"></i> lab la-pinterest-p
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pinterest-square"></i> lab la-pinterest-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-product-hunt"></i> lab la-product-hunt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-pushed"></i> lab la-pushed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-python"></i> lab la-python
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-qq"></i> lab la-qq
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-quinscape"></i> lab la-quinscape
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-quora"></i> lab la-quora
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-r-project"></i> lab la-r-project
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-raspberry-pi"></i> lab la-raspberry-pi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ravelry"></i> lab la-ravelry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-react"></i> lab la-react
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reacteurope"></i> lab la-reacteurope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-readme"></i> lab la-readme
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rebel"></i> lab la-rebel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-red-river"></i> lab la-red-river
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit"></i> lab la-reddit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit-alien"></i> lab la-reddit-alien
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-reddit-square"></i> lab la-reddit-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-redhat"></i> lab la-redhat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-renren"></i> lab la-renren
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-replyd"></i> lab la-replyd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-researchgate"></i> lab la-researchgate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-resolving"></i> lab la-resolving
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rev"></i> lab la-rev
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rocketchat"></i> lab la-rocketchat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-rockrms"></i> lab la-rockrms
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-safari"></i> lab la-safari
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-salesforce"></i> lab la-salesforce
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sass"></i> lab la-sass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-schlix"></i> lab la-schlix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-scribd"></i> lab la-scribd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-searchengin"></i> lab la-searchengin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sellcast"></i> lab la-sellcast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sellsy"></i> lab la-sellsy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-servicestack"></i> lab la-servicestack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-shirtsinbulk"></i> lab la-shirtsinbulk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-shopware"></i> lab la-shopware
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-signature"></i> las la-signature
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-simplybuilt"></i> lab la-simplybuilt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sistrix"></i> lab la-sistrix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sith"></i> lab la-sith
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sketch"></i> lab la-sketch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull"></i> las la-skull
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-skyatlas"></i> lab la-skyatlas
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-skype"></i> lab la-skype
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slack"></i> lab la-slack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slack-hash"></i> lab la-slack-hash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-slideshare"></i> lab la-slideshare
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat"></i> lab la-snapchat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat-ghost"></i> lab la-snapchat-ghost
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-snapchat-square"></i> lab la-snapchat-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sourcetree"></i> lab la-sourcetree
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-speakap"></i> lab la-speakap
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-speaker-deck"></i> lab la-speaker-deck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-squarespace"></i> lab la-squarespace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stack-exchange"></i> lab la-stack-exchange
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stack-overflow"></i> lab la-stack-overflow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stackpath"></i> lab la-stackpath
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-staylinked"></i> lab la-staylinked
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-sticker-mule"></i> lab la-sticker-mule
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-strava"></i> lab la-strava
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-studiovinari"></i> lab la-studiovinari
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stumbleupon"></i> lab la-stumbleupon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stumbleupon-circle"></i> lab la-stumbleupon-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-superpowers"></i> lab la-superpowers
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-supple"></i> lab la-supple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-suse"></i> lab la-suse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-swift"></i> lab la-swift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-symfony"></i> lab la-symfony
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-teamspeak"></i> lab la-teamspeak
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-telegram"></i> lab la-telegram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-telegram-plane"></i> lab la-telegram-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tencent-weibo"></i> lab la-tencent-weibo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-the-red-yeti"></i> lab la-the-red-yeti
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-themeco"></i> lab la-themeco
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-themeisle"></i> lab la-themeisle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-think-peaks"></i> lab la-think-peaks
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-trade-federation"></i> lab la-trade-federation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-trello"></i> lab la-trello
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tripadvisor"></i> lab la-tripadvisor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tumblr"></i> lab la-tumblr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-tumblr-square"></i> lab la-tumblr-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-twitter"></i> lab la-twitter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-twitter-square"></i> lab la-twitter-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-typo3"></i> lab la-typo3
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uber"></i> lab la-uber
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ubuntu"></i> lab la-ubuntu
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uikit"></i> lab la-uikit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-umbraco"></i> lab la-umbraco
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-uniregistry"></i> lab la-uniregistry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-untappd"></i> lab la-untappd
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ups"></i> lab la-ups
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-usb"></i> lab la-usb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-usps"></i> lab la-usps
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ussunnah"></i> lab la-ussunnah
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vaadin"></i> lab la-vaadin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viacoin"></i> lab la-viacoin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viadeo"></i> lab la-viadeo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viadeo-square"></i> lab la-viadeo-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-viber"></i> lab la-viber
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo"></i> lab la-vimeo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo-square"></i> lab la-vimeo-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vimeo-v"></i> lab la-vimeo-v
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vine"></i> lab la-vine
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vk"></i> lab la-vk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vnv"></i> lab la-vnv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vr-cardboard"></i> las la-vr-cardboard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-vuejs"></i> lab la-vuejs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-waze"></i> lab la-waze
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weebly"></i> lab la-weebly
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weibo"></i> lab la-weibo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-weight-hanging"></i> las la-weight-hanging
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-weixin"></i> lab la-weixin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whatsapp"></i> lab la-whatsapp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whatsapp-square"></i> lab la-whatsapp-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-whmcs"></i> lab la-whmcs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wikipedia-w"></i> lab la-wikipedia-w
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-windows"></i> lab la-windows
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wix"></i> lab la-wix
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wolf-pack-battalion"></i> lab la-wolf-pack-battalion
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wordpress"></i> lab la-wordpress
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wordpress-simple"></i> lab la-wordpress-simple
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpbeginner"></i> lab la-wpbeginner
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpexplorer"></i> lab la-wpexplorer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpforms"></i> lab la-wpforms
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wpressr"></i> lab la-wpressr
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-xing"></i> lab la-xing
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-xing-square"></i> lab la-xing-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-y-combinator"></i> lab la-y-combinator
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yahoo"></i> lab la-yahoo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yammer"></i> lab la-yammer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yandex"></i> lab la-yandex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yandex-international"></i> lab la-yandex-international
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yarn"></i> lab la-yarn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yelp"></i> lab la-yelp
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-yoast"></i> lab la-yoast
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-youtube-square"></i> lab la-youtube-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-zhihu"></i> lab la-zhihu
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Payments & Shopping</h6>
                        <BRow class="icon-demo-content">
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-alipay"></i> lab la-alipay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-amazon-pay"></i> lab la-amazon-pay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-apple-pay"></i> lab la-apple-pay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-bitcoin"></i> lab la-bitcoin
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bookmark"></i> las la-bookmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-btc"></i> lab la-btc
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera"></i> las la-camera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera-retro"></i> las la-camera-retro
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cart-arrow-down"></i> las la-cart-arrow-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cart-plus"></i> las la-cart-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-amazon-pay"></i> lab la-cc-amazon-pay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-amex"></i> lab la-cc-amex
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-apple-pay"></i> lab la-cc-apple-pay
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-diners-club"></i> lab la-cc-diners-club
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-discover"></i> lab la-cc-discover
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-jcb"></i> lab la-cc-jcb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-mastercard"></i> lab la-cc-mastercard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-paypal"></i> lab la-cc-paypal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-stripe"></i> lab la-cc-stripe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-cc-visa"></i> lab la-cc-visa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-certificate"></i> las la-certificate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-credit-card"></i> las la-credit-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-ethereum"></i> lab la-ethereum
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gem"></i> las la-gem
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gift"></i> las la-gift
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-google-wallet"></i> lab la-google-wallet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-handshake"></i> las la-handshake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-key"></i> las la-key
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check"></i> las la-money-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-money-check-alt"></i> las la-money-check-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-paypal"></i> lab la-paypal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-receipt"></i> las la-receipt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-bag"></i> las la-shopping-bag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-basket"></i> las la-shopping-basket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-cart"></i> las la-shopping-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stripe"></i> lab la-stripe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-stripe-s"></i> lab la-stripe-s
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tag"></i> las la-tag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tags"></i> las la-tags
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-down"></i> las la-thumbs-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-up"></i> las la-thumbs-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-trophy"></i> las la-trophy
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Political</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-award"></i> las la-award
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale"></i> las la-balance-scale
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-left"></i> las la-balance-scale-left
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-balance-scale-right"></i> las la-balance-scale-right
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bullhorn"></i> las la-bullhorn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-check-double"></i> las la-check-double
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-democrat"></i> las la-democrat
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-donate"></i> las la-donate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dove"></i> las la-dove
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fist-raised"></i> las la-fist-raised
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flag-usa"></i> las la-flag-usa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-handshake"></i> las la-handshake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-person-booth"></i> las la-person-booth
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-piggy-bank"></i> las la-piggy-bank
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-republican"></i> las la-republican
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vote-yea"></i> las la-vote-yea
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ankh"></i> las la-ankh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atom"></i> las la-atom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bible"></i> las la-bible
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-church"></i> las la-church
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cross"></i> las la-cross
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dharmachakra"></i> las la-dharmachakra
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dove"></i> las la-dove
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gopuram"></i> las la-gopuram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hamsa"></i> las la-hamsa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hanukiah"></i> las la-hanukiah
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-haykal"></i> las la-haykal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-jedi"></i> las la-jedi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-journal-whills"></i> las la-journal-whills
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-kaaba"></i> las la-kaaba
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-khanda"></i> las la-khanda
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-menorah"></i> las la-menorah
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mosque"></i> las la-mosque
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-om"></i> las la-om
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pastafarianism"></i> las la-pastafarianism
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-peace"></i> las la-peace
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-place-of-worship"></i> las la-place-of-worship
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pray"></i> las la-pray
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-praying-hands"></i> las la-praying-hands
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quran"></i> las la-quran
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-and-crescent"></i> las la-star-and-crescent
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-of-david"></i> las la-star-of-david
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-synagogue"></i> las la-synagogue
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-torah"></i> las la-torah
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-torii-gate"></i> las la-torii-gate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vihara"></i> las la-vihara
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-yin-yang"></i> las la-yin-yang
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Science</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atom"></i> las la-atom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-biohazard"></i> las la-biohazard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-brain"></i> las la-brain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-burn"></i> las la-burn
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-capsules"></i> las la-capsules
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-clipboard-check"></i> las la-clipboard-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dna"></i> las la-dna
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-dropper"></i> las la-eye-dropper
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-filter"></i> las la-filter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire"></i> las la-fire
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fire-alt"></i> las la-fire-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-flask"></i> las la-flask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frog"></i> las la-frog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-magnet"></i> las la-magnet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microscope"></i> las la-microscope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mortar-pestle"></i> las la-mortar-pestle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pills"></i> las la-pills
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-prescription-bottle"></i> las la-prescription-bottle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation"></i> las la-radiation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-radiation-alt"></i> las la-radiation-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-seedling"></i> las la-seedling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-syringe"></i> las la-syringe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tablets"></i> las la-tablets
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-temperature-high"></i> las la-temperature-high
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-temperature-low"></i> las la-temperature-low
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vial"></i> las la-vial
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-vials"></i> las la-vials
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-galactic-republic"></i> lab la-galactic-republic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-galactic-senate"></i> lab la-galactic-senate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe"></i> las la-globe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-jedi"></i> las la-jedi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-jedi-order"></i> lab la-jedi-order
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-journal-whills"></i> las la-journal-whills
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meteor"></i> las la-meteor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-moon"></i> las la-moon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-old-republic"></i> lab la-old-republic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-robot"></i> las la-robot
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rocket"></i> las la-rocket
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite"></i> las la-satellite
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-satellite-dish"></i> las la-satellite-dish
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-space-shuttle"></i> las la-space-shuttle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-astronaut"></i> las la-user-astronaut
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ban"></i> las la-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bug"></i> las la-bug
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-closed"></i> las la-door-closed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-open"></i> las la-door-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dungeon"></i> las la-dungeon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-contract"></i> las la-file-contract
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-signature"></i> las la-file-signature
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fingerprint"></i> las la-fingerprint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-badge"></i> las la-id-badge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card"></i> las la-id-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card-alt"></i> las la-id-card-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-key"></i> las la-key
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock"></i> las la-lock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock-open"></i> las la-lock-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mask"></i> las la-mask
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-passport"></i> las la-passport
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shield-alt"></i> las la-shield-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock"></i> las la-unlock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock-alt"></i> las la-unlock-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-lock"></i> las la-user-lock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-secret"></i> las la-user-secret
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-shield"></i> las la-user-shield
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bookmark"></i> las la-bookmark
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-certificate"></i> las la-certificate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-circle"></i> las la-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud"></i> las la-cloud
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment"></i> las la-comment
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart-broken"></i> las la-heart-broken
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker"></i> las la-map-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-play"></i> las la-play
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shapes"></i> las la-shapes
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-square"></i> las la-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-birthday-cake"></i> las la-birthday-cake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-camera"></i> las la-camera
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment"></i> las la-comment
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-alt"></i> las la-comment-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-envelope"></i> las la-envelope
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hashtag"></i> las la-hashtag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-heart"></i> las la-heart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-icons"></i> las la-icons
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-image"></i> las la-image
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-images"></i> las la-images
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker"></i> las la-map-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker-alt"></i> las la-map-marker-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-photo-video"></i> las la-photo-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poll"></i> las la-poll
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poll-h"></i> las la-poll-h
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-retweet"></i> las la-retweet
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share"></i> las la-share
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-alt"></i> las la-share-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-share-square"></i> las la-share-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-down"></i> las la-thumbs-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-up"></i> las la-thumbs-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbtack"></i> las la-thumbtack
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user"></i> las la-user
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-circle"></i> las la-user-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-friends"></i> las la-user-friends
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-plus"></i> las la-user-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-users"></i> las la-users
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video"></i> las la-video
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-asterisk"></i> las la-asterisk
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atom"></i> las la-atom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-certificate"></i> las la-certificate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-circle-notch"></i> las la-circle-notch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cog"></i> las la-cog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compact-disc"></i> las la-compact-disc
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-crosshairs"></i> las la-crosshairs
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dharmachakra"></i> las la-dharmachakra
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fan"></i> las la-fan
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-haykal"></i> las la-haykal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-life-ring"></i> las la-life-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-palette"></i> las la-palette
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ring"></i> las la-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-slash"></i> las la-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowflake"></i> las la-snowflake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spinner"></i> las la-spinner
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stroopwafel"></i> las la-stroopwafel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sun"></i> las la-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync"></i> las la-sync
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sync-alt"></i> las la-sync-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-yin-yang"></i> las la-yin-yang
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baseball-ball"></i> las la-baseball-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-basketball-ball"></i> las la-basketball-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-biking"></i> las la-biking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bowling-ball"></i> las la-bowling-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dumbbell"></i> las la-dumbbell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-football-ball"></i> las la-football-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-futbol"></i> las la-futbol
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-golf-ball"></i> las la-golf-ball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hockey-puck"></i> las la-hockey-puck
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-quidditch"></i> las la-quidditch
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-running"></i> las la-running
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skating"></i> las la-skating
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing"></i> las la-skiing
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing-nordic"></i> las la-skiing-nordic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowboarding"></i> las la-snowboarding
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimmer"></i> las la-swimmer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-table-tennis"></i> las la-table-tennis
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volleyball-ball"></i> las la-volleyball-ball
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-allergies"></i> las la-allergies
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-broom"></i> las la-broom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-sun"></i> las la-cloud-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-sun-rain"></i> las la-cloud-sun-rain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frog"></i> las la-frog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rainbow"></i> las la-rainbow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-seedling"></i> las la-seedling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella"></i> las la-umbrella
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ban"></i> las la-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-empty"></i> las la-battery-empty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-full"></i> las la-battery-full
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-half"></i> las la-battery-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-quarter"></i> las la-battery-quarter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-battery-three-quarters"></i> las la-battery-three-quarters
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell"></i> las la-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bell-slash"></i> las la-bell-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar"></i> las la-calendar
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-alt"></i> las la-calendar-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-check"></i> las la-calendar-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-day"></i> las la-calendar-day
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-minus"></i> las la-calendar-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-plus"></i> las la-calendar-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-times"></i> las la-calendar-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-calendar-week"></i> las la-calendar-week
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cart-arrow-down"></i> las la-cart-arrow-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cart-plus"></i> las la-cart-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment"></i> las la-comment
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-alt"></i> las la-comment-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-comment-slash"></i> las la-comment-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-compass"></i> las la-compass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-closed"></i> las la-door-closed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-door-open"></i> las la-door-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation"></i> las la-exclamation
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-circle"></i> las la-exclamation-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-exclamation-triangle"></i> las la-exclamation-triangle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye"></i> las la-eye
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-eye-slash"></i> las la-eye-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file"></i> las la-file
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-file-alt"></i> las la-file-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder"></i> las la-folder
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-folder-open"></i> las la-folder-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-gas-pump"></i> las la-gas-pump
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info"></i> las la-info
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-info-circle"></i> las la-info-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lightbulb"></i> las la-lightbulb
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock"></i> las la-lock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-lock-open"></i> las la-lock-open
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker"></i> las la-map-marker
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marker-alt"></i> las la-map-marker-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone"></i> las la-microphone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt"></i> las la-microphone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-alt-slash"></i> las la-microphone-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-microphone-slash"></i> las la-microphone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus"></i> las la-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus-circle"></i> las la-minus-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-minus-square"></i> las la-minus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-parking"></i> las la-parking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone"></i> las la-phone
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-alt"></i> las la-phone-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-phone-slash"></i> las la-phone-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus"></i> las la-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-circle"></i> las la-plus-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plus-square"></i> las la-plus-square
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-print"></i> las la-print
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question"></i> las la-question
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-question-circle"></i> las la-question-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shield-alt"></i> las la-shield-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shopping-cart"></i> las la-shopping-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-in-alt"></i> las la-sign-in-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sign-out-alt"></i> las la-sign-out-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-signal"></i> las la-signal
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smoking-ban"></i> las la-smoking-ban
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star"></i> las la-star
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-half"></i> las la-star-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-star-half-alt"></i> las la-star-half-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-stream"></i> las la-stream
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer-empty"></i> las la-thermometer-empty
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer-full"></i> las la-thermometer-full
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer-half"></i> las la-thermometer-half
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer-quarter"></i> las la-thermometer-quarter
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thermometer-three-quarters"></i> las la-thermometer-three-quarters
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-down"></i> las la-thumbs-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-thumbs-up"></i> las la-thumbs-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint"></i> las la-tint
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tint-slash"></i> las la-tint-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toggle-off"></i> las la-toggle-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-toggle-on"></i> las la-toggle-on
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock"></i> las la-unlock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-unlock-alt"></i> las la-unlock-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user"></i> las la-user
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-alt"></i> las la-user-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-alt-slash"></i> las la-user-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-slash"></i> las la-user-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video"></i> las la-video
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-video-slash"></i> las la-video-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-down"></i> las la-volume-down
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-mute"></i> las la-volume-mute
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-off"></i> las la-volume-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-volume-up"></i> las la-volume-up
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wifi"></i> las la-wifi
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-acquisitions-incorporated"></i> lab la-acquisitions-incorporated
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-book-dead"></i> las la-book-dead
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-critical-role"></i> lab la-critical-role
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-d-and-d"></i> lab la-d-and-d
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-d-and-d-beyond"></i> lab la-d-and-d-beyond
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d20"></i> las la-dice-d20
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dice-d6"></i> las la-dice-d6
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dragon"></i> las la-dragon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dungeon"></i> las la-dungeon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-fantasy-flight-games"></i> lab la-fantasy-flight-games
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-fist-raised"></i> las la-fist-raised
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hat-wizard"></i> las la-hat-wizard
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-penny-arcade"></i> lab la-penny-arcade
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-ring"></i> las la-ring
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-scroll"></i> las la-scroll
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skull-crossbones"></i> las la-skull-crossbones
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-wizards-of-the-coast"></i> lab la-wizards-of-the-coast
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Travel</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-archway"></i> las la-archway
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-atlas"></i> las la-atlas
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bus"></i> las la-bus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bus-alt"></i> las la-bus-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cocktail"></i> las la-cocktail
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-concierge-bell"></i> las la-concierge-bell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-dumbbell"></i> las la-dumbbell
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini"></i> las la-glass-martini
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-martini-alt"></i> las la-glass-martini-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe-africa"></i> las la-globe-africa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe-americas"></i> las la-globe-americas
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe-asia"></i> las la-globe-asia
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-globe-europe"></i> las la-globe-europe
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hot-tub"></i> las la-hot-tub
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hotel"></i> las la-hotel
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-luggage-cart"></i> las la-luggage-cart
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map"></i> las la-map
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marked"></i> las la-map-marked
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-map-marked-alt"></i> las la-map-marked-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-monument"></i> las la-monument
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-passport"></i> las la-passport
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plane"></i> las la-plane
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plane-arrival"></i> las la-plane-arrival
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-plane-departure"></i> las la-plane-departure
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-shuttle-van"></i> las la-shuttle-van
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-spa"></i> las la-spa
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase"></i> las la-suitcase
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-suitcase-rolling"></i> las la-suitcase-rolling
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimmer"></i> las la-swimmer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimming-pool"></i> las la-swimming-pool
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-taxi"></i> las la-taxi
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tram"></i> las la-tram
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tv"></i> las la-tv
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella-beach"></i> las la-umbrella-beach
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass"></i> las la-wine-glass
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wine-glass-alt"></i> las la-wine-glass-alt
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Users & People</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="lab la-accessible-icon"></i> lab la-accessible-icon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-book"></i> las la-address-book
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-address-card"></i> las la-address-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-baby"></i> las la-baby
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bed"></i> las la-bed
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-biking"></i> las la-biking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-blind"></i> las la-blind
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-chalkboard-teacher"></i> las la-chalkboard-teacher
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-child"></i> las la-child
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-female"></i> las la-female
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-frown"></i> las la-frown
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-hiking"></i> las la-hiking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-badge"></i> las la-id-badge
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card"></i> las la-id-card
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-id-card-alt"></i> las la-id-card-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-male"></i> las la-male
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meh"></i> las la-meh
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-people-carry"></i> las la-people-carry
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-person-booth"></i> las la-person-booth
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poo"></i> las la-poo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-portrait"></i> las la-portrait
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-power-off"></i> las la-power-off
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-pray"></i> las la-pray
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-restroom"></i> las la-restroom
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-running"></i> las la-running
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skating"></i> las la-skating
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing"></i> las la-skiing
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing-nordic"></i> las la-skiing-nordic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smile"></i> las la-smile
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowboarding"></i> las la-snowboarding
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-street-view"></i> las la-street-view
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-swimmer"></i> las la-swimmer
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user"></i> las la-user
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-alt"></i> las la-user-alt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-alt-slash"></i> las la-user-alt-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-astronaut"></i> las la-user-astronaut
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-check"></i> las la-user-check
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-circle"></i> las la-user-circle
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-clock"></i> las la-user-clock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-cog"></i> las la-user-cog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-edit"></i> las la-user-edit
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-friends"></i> las la-user-friends
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-graduate"></i> las la-user-graduate
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-injured"></i> las la-user-injured
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-lock"></i> las la-user-lock
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-md"></i> las la-user-md
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-minus"></i> las la-user-minus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-ninja"></i> las la-user-ninja
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-nurse"></i> las la-user-nurse
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-plus"></i> las la-user-plus
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-secret"></i> las la-user-secret
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-shield"></i> las la-user-shield
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-slash"></i> las la-user-slash
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-tag"></i> las la-user-tag
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-tie"></i> las la-user-tie
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-user-times"></i> las la-user-times
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-users"></i> las la-users
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-users-cog"></i> las la-users-cog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-walking"></i> las la-walking
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wheelchair"></i> las la-wheelchair
                            </BCol>
                        </BRow>

                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Weather</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-bolt"></i> las la-bolt
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud"></i> las la-cloud
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-meatball"></i> las la-cloud-meatball
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-moon"></i> las la-cloud-moon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-moon-rain"></i> las la-cloud-moon-rain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-rain"></i> las la-cloud-rain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-showers-heavy"></i> las la-cloud-showers-heavy
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-sun"></i> las la-cloud-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-cloud-sun-rain"></i> las la-cloud-sun-rain
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-meteor"></i> las la-meteor
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-moon"></i> las la-moon
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-poo-storm"></i> las la-poo-storm
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-rainbow"></i> las la-rainbow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-smog"></i> las la-smog
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowflake"></i> las la-snowflake
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-sun"></i> las la-sun
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-temperature-high"></i> las la-temperature-high
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-temperature-low"></i> las la-temperature-low
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-umbrella"></i> las la-umbrella
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-water"></i> las la-water
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-wind"></i> las la-wind
                            </BCol>
                        </BRow>


                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Winter</h6>
                        <BRow>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-glass-whiskey"></i> las la-glass-whiskey
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-icicles"></i> las la-icicles
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-igloo"></i> las la-igloo
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-mitten"></i> las la-mitten
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skating"></i> las la-skating
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing"></i> las la-skiing
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-skiing-nordic"></i> las la-skiing-nordic
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowboarding"></i> las la-snowboarding
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-snowplow"></i> las la-snowplow
                            </BCol>
                            <BCol xl="3" lg="4" sm="6">
                                <i class="las la-tram"></i> las la-tram
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
