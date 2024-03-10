<script>
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

export default {
    data() {
        return {
            Autoplay, Navigation
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    }
};
</script>
<template>
    <BCol xxl="8">
        <div class="swiper marketplace-swiper rounded gallery-light">
            <div class="d-flex pt-2 pb-4">
                <h5 class="card-title fs-18 mb-1">Featured NFTs Artworks</h5>
            </div>
            <div class="swiper-wrapper">
                <swiper class="swiper responsive-swiper rounded gallery-light pb-4" :loop="true" :slidesPerView="3"
                :spaceBetween="10" :modules="[Autoplay, Navigation]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
                    <swiper-slide>
                        <BCard no-body class="explore-box card-animate rounded">
                            <div class="explore-place-bid-img">
                                <img src="https://img.themesbrand.com/velzon/images/img-3.gif" alt=""
                                    class="img-fluid card-img-top explore-img" />
                                <div class="bg-overlay"></div>
                                <div class="place-bid-btn">
                                    <BLink href="#!" class="btn btn-success"><i
                                            class="ri-auction-fill align-bottom me-1"></i> Place Bid</BLink>
                                </div>
                            </div>
                            <BCardBody style="position: relative">
                                <p class="fw-medium mb-0 mt-3 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                    37.41k </p>
                                <h5 class="mb-1">
                                    <router-link to="/apps/nft-item-detail" class="text-body">Walking On Air</router-link>
                                </h5>
                                <p class="text-muted mb-0">Artwork</p>
                            </BCardBody>
                            <BCardFooter class="border-top border-top-dashed">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest:
                                        <span class="fw-medium">10.35ETH</span>
                                    </div>
                                    <h5 class="flex-shrink-0 fs-14 text-primary mb-0">14.167 ETH</h5>
                                </div>
                            </BCardFooter>
                        </BCard>
                    </swiper-slide>
                    <swiper-slide>
                        <BCard no-body class="explore-box card-animate rounded">
                            <div class="explore-place-bid-img">
                                <img src="@/assets/images/nft/img-03.jpg" alt=""
                                    class="img-fluid card-img-top explore-img" />
                                <div class="bg-overlay"></div>
                                <div class="place-bid-btn">
                                    <BLink href="#!" class="btn btn-success"><i
                                            class="ri-auction-fill align-bottom me-1"></i> Place Bid</BLink>
                                </div>
                            </div>
                            <BCardBody style="position: relative">
                                <p class="fw-medium mb-0 mt-3 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                    19.29k </p>
                                <h5 class="mb-1">
                                    <router-link to="/apps/nft-item-detail" class="text-body">Filtered Portrait
                                    </router-link>
                                </h5>
                                <p class="text-muted mb-0">Photography</p>
                            </BCardBody>
                            <BCardFooter class="border-top border-top-dashed">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest:
                                        <span class="fw-medium">75.3ETH</span>
                                    </div>
                                    <h5 class="flex-shrink-0 fs-14 text-primary mb-0">67.36 ETH</h5>
                                </div>
                            </BCardFooter>
                        </BCard>
                    </swiper-slide>
                    <swiper-slide>
                        <BCard no-body class="explore-box card-animate rounded">
                            <div class="explore-place-bid-img">
                                <img src="https://img.themesbrand.com/velzon/images/img-1.gif" alt=""
                                    class="img-fluid card-img-top explore-img" />
                                <div class="bg-overlay"></div>
                                <div class="place-bid-btn">
                                    <BLink href="#!" class="btn btn-success"><i
                                            class="ri-auction-fill align-bottom me-1"></i> Place Bid</BLink>
                                </div>
                            </div>
                            <BCardBody style="position: relative">
                                <p class="fw-medium mb-0 mt-3 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                    8.42k </p>
                                <h5 class="mb-1">
                                    <router-link to="/apps/nft-item-detail" class="text-body">Patterns Arts & Culture
                                    </router-link>
                                </h5>
                                <p class="text-muted mb-0">Artwork</p>
                            </BCardBody>
                            <BCardFooter class="border-top border-top-dashed">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest:
                                        <span class="fw-medium">9.64ETH</span>
                                    </div>
                                    <h5 class="flex-shrink-0 fs-14 text-primary mb-0">14.167 ETH</h5>
                                </div>
                            </BCardFooter>
                        </BCard>
                    </swiper-slide>
                    <swiper-slide>
                        <BCard no-body class="explore-box card-animate rounded">
                            <div class="explore-place-bid-img">
                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""
                                    class="img-fluid card-img-top explore-img" />
                                <div class="bg-overlay"></div>
                                <div class="place-bid-btn">
                                    <BLink href="#!" class="btn btn-success"><i
                                            class="ri-auction-fill align-bottom me-1"></i> Place Bid</BLink>
                                </div>
                            </div>
                            <BCardBody style="position: relative">
                                <p class="fw-medium mb-0 mt-3 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                    15.93k </p>
                                <h5 class="mb-1">
                                    <router-link to="/apps/nft-item-detail" class="text-body">Evolved Reality</router-link>
                                </h5>
                                <p class="text-muted mb-0">Video</p>
                            </BCardBody>
                            <BCardFooter class="border-top border-top-dashed">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest:
                                        <span class="fw-medium">2.75ETH</span>
                                    </div>
                                    <h5 class="flex-shrink-0 fs-14 text-primary mb-0">3.167 ETH</h5>
                                </div>
                            </BCardFooter>
                        </BCard>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </BCol>
</template>