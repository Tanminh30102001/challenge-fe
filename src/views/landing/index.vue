<script>
import { CountTo } from "vue3-count-to";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Images
import Img1 from "@/assets/images/demos/default.png";
import Img2 from "@/assets/images/demos/saas.png";
import Img3 from "@/assets/images/demos/material.png";
import Img4 from "@/assets/images/demos/minimal.png";
import Img5 from "@/assets/images/demos/creative.png";
import Img6 from "@/assets/images/demos/modern.png";
import Img7 from "@/assets/images/demos/interactive.png";

export default {
    data() {
        return {
            Img1, Img2, Img3, Img4, Img5, Img6, Img7,
            Autoplay, Navigation, Pagination,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
        CountTo,
    },
    methods: {

        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        monthly() {
            const highlightedItems = document.querySelectorAll(".month");

            highlightedItems.forEach(function (userItem) {
                userItem.style.display = "block";
            });
            const highlightedItems2 = document.querySelectorAll(".annual");

            highlightedItems2.forEach(function (userItem) {
                userItem.style.display = "none";
            });
        },
        anually() {
            const highlightedItems = document.querySelectorAll(".month");

            highlightedItems.forEach(function (userItem) {
                userItem.style.display = "none";
            });
            const highlightedItems2 = document.querySelectorAll(".annual");

            highlightedItems2.forEach(function (userItem) {
                userItem.style.display = "block";
            });
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.setActiveSection);
    },
    mounted() {
        window.addEventListener('scroll', this.setActiveSection);
        let backtoTop = document.getElementById("back-to-top");

        if (backtoTop) {
            backtoTop = document.getElementById("back-to-top");
            window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backtoTop.style.display = "block";
                } else {
                    backtoTop.style.display = "none";
                }
            };
        }

        this.monthly();
        document.getElementById("plan-switch").addEventListener('change', () => {
            if (document.getElementById("plan-switch").checked == true) {
                this.anually();
            } else if (document.getElementById("plan-switch").checked == false) {
                this.monthly();
            }
        });
        window.addEventListener('scroll', function (ev) {
            ev.preventDefault();
            var navbar = document.getElementById("navbar");
            if (navbar) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    navbar.classList.add("is-sticky");
                } else {
                    navbar.classList.remove("is-sticky");
                }
            }
        });

        document.querySelector('.currentyear').innerHTML = new Date().getFullYear() + " © Velzon - Themesbrand";
    },
};
</script>

<template>
    <div class="layout-wrapper landing">
        <nav class="navbar navbar-expand-lg navbar-landing fixed-top" id="navbar">
            <BContainer>
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/images/logo-dark.png" class="card-logo card-logo-dark" alt="logo dark" height="17">
                    <img src="@/assets/images/logo-light.png" class="card-logo card-logo-light" alt="logo light"
                        height="17">
                </router-link>
                <BButton variant="link" class="navbar-toggler py-0 fs-20 text-body" v-b-toggle.navbarSupportedContent>
                    <i class="mdi mdi-menu"></i>
                </BButton>

                <BCollapse class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
                        <li class="nav-item">
                            <BLink class="nav-link" href="#hero" @click.prevent="scrollToSection('hero')">Home</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#services" @click.prevent="scrollToSection('services')">Services</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#features" @click.prevent="scrollToSection('features')">Features</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#plans" @click.prevent="scrollToSection('plans')">Plans</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#reviews" @click.prevent="scrollToSection('reviews')">Reviews</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#team" @click.prevent="scrollToSection('team')">Team</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#contact" @click.prevent="scrollToSection('contact')">Contact</BLink>
                        </li>
                    </ul>

                    <div class="">
                        <router-link to="/auth/signin-basic"
                            class="btn btn-link fw-medium text-decoration-none text-dark">Sign
                            in</router-link>
                        <router-link to="/auth/signup-basic" class="btn btn-primary">Sign Up</router-link>
                    </div>
                </BCollapse>
            </BContainer>
        </nav>
        <div class="vertical-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
        <section class="section pb-0 hero-section" id="hero">
            <div class="bg-overlay bg-overlay-pattern"></div>
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8" sm="10">
                        <div class="text-center mt-lg-5 pt-5">
                            <h1 class="display-6 fw-semibold mb-3 lh-base">The better way to manage your website with
                                <span class="text-success">Velzon </span>
                            </h1>
                            <p class="lead text-muted lh-base">Velzon is a fully responsive, multipurpose and premium
                                Bootstrap 5 Admin & Dashboard Template built in multiple frameworks.</p>

                            <div class="d-flex gap-2 justify-content-center mt-4">
                                <router-link to="/auth/signin-basic" class="btn btn-primary">Get Started <i
                                        class="ri-arrow-right-line align-middle ms-1"></i></router-link>
                                <router-link to="/pages/pricing" class="btn btn-danger">View Plans <i
                                        class="ri-eye-line align-middle ms-1"></i></router-link>
                            </div>
                        </div>

                        <div class="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                            <div class="demo-img-patten-top d-none d-sm-block">
                                <img src="@/assets/images/landing/img-pattern.png" class="d-block img-fluid" alt="...">
                            </div>
                            <div class="demo-img-patten-bottom d-none d-sm-block">
                                <img src="@/assets/images/landing/img-pattern.png" class="d-block img-fluid" alt="...">
                            </div>
                            <BCarousel class="carousel slide carousel-fade" ride="carousel" :interval="2000" >
                                <BCarouselSlide active :img-src="Img1" />
                                <BCarouselSlide :img-src="Img2" />
                                <BCarouselSlide :img-src="Img3" />
                              </BCarousel>
                           </div>
                    </BCol>
                </BRow>
            </BContainer>
            <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1440 120">
                    <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                        <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z">
                        </path>
                    </g>
                </svg>
            </div>
        </section>

        <div class="pt-5 mt-5">
            <BContainer>
                <BRow>
                    <BCol lg="12">

                        <div class="text-center mt-5">
                            <h5 class="fs-20">Trusted <span class="text-primary text-decoration-underline">by</span> the
                                world's best</h5>
                            <div class="trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4">
                                <swiper class="swiper responsive-swiper rounded gallery-light pb-4" :loop="true"
                                    :autoplay="true" :modules="[Autoplay]" :slidesPerView="1" :spaceBetween="10"
                                    :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 40 }, 1200: { slidesPerView: 4, spaceBetween: 50 }, }">
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/amazon.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>

                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/walmart.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>

                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/lenovo.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/paypal.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/shopify.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <div class="client-images">
                                                <img src="@/assets/images/clients/verizon.svg" alt="client-img"
                                                    class="mx-auto img-fluid d-block">
                                            </div>
                                        </div>
                                    </swiper-slide>

                                </swiper>
                            </div>
                        </div>

                    </BCol>
                </BRow>
            </BContainer>
        </div>



        <section class="section" id="services">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold lh-base">A Digital web design studio creating
                                modern & engaging online</h1>
                            <p class="text-muted">To achieve this, it would be necessary to have uniform grammar,
                                pronunciation and more common words. If several languages coalesce the grammar</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="g-3">
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-pencil-ruler-2-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Creative Design</h5>
                                <p class="text-muted my-3 ff-secondary">The creative design includes designs that are
                                    unique, effective and memorable.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-palette-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Unlimited Colors</h5>
                                <p class="text-muted my-3 ff-secondary">The collection of rules and guidelines which
                                    designers use to communicate with users through appealing.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-lightbulb-flash-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Strategy Solutions</h5>
                                <p class="text-muted my-3 ff-secondary">Business development firm that provides
                                    strategic planning, market research services and project.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-customer-service-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Awesome Support</h5>
                                <p class="text-muted my-3 ff-secondary">Awesome Support is the most versatile and
                                    feature-rich support plugin for all version.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-stack-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Truly Multipurpose</h5>
                                <p class="text-muted my-3 ff-secondary">You usually get a broad range of options to play
                                    with. This enables you to use a single theme across multiple.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-settings-2-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Easy to customize</h5>
                                <p class="text-muted my-3 ff-secondary">Personalise your own website, no matter what
                                    theme and what customization options.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>

                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-slideshow-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Responsive & Clean Design</h5>
                                <p class="text-muted my-3 ff-secondary">Responsive design is a graphic user interface
                                    (GUI) design approach used to create content.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-google-fill fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Google Font Collection</h5>
                                <p class="text-muted my-3 ff-secondary">Google Fonts is a collection of 915 fonts, all
                                    available to use for free on your website.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm icon-effect">
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-briefcase-5-line fs-36"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="fs-18">Top Industry Specialists</h5>
                                <p class="text-muted my-3 ff-secondary">An industrial specialist works with industrial
                                    operations to ensure that manufacturing facilities work.</p>
                                <div>
                                    <router-link to="#" class="fs-13 fw-medium">Learn More <i
                                            class="ri-arrow-right-s-line align-bottom"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>



        <section class="section bg-light py-5" id="features">
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol lg="6" sm="7" class="mx-auto">
                        <div>
                            <img src="@/assets/images/landing/features/img-1.png" alt="" class="img-fluid mx-auto">
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="text-muted">
                            <div class="avatar-sm icon-effect mb-4">
                                <div class="avatar-title bg-transparent rounded-circle text-success h1">
                                    <i class="ri-collage-line fs-36"></i>
                                </div>
                            </div>
                            <h3 class="mb-3 fs-20">Huge collection of widgets</h3>
                            <p class="mb-4 ff-secondary fs-16">Collection widgets specialize in displaying many elements
                                of the same type, such as a collection of pictures from a collection of articles from a
                                news app or a collection of messages from a communication app.</p>

                            <BRow class="pt-3">
                                <BCol cols="3">
                                    <div class="text-center">
                                        <h4>5</h4>
                                        <p>Dashboards</p>
                                    </div>
                                </BCol>
                                <BCol cols="3">
                                    <div class="text-center">
                                        <h4>150+</h4>
                                        <p>Pages</p>
                                    </div>
                                </BCol>
                                <BCol cols="4">
                                    <div class="text-center">
                                        <h4>7+</h4>
                                        <p>Functional Apps</p>
                                    </div>
                                </BCol>
                            </BRow>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>



        <section class="py-5 bg-primary position-relative">
            <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol sm>
                        <div>
                            <h4 class="text-white mb-0 fw-semibold">Build your web App/SaaS with Velzon dashboard</h4>
                        </div>
                    </BCol>
                    <BCol sm="auto">
                        <div>
                            <router-link to="https://1.envato.market/velzon-admin" target="_blank"
                                class="btn bg-gradient btn-danger"><i class="ri-shopping-cart-2-line align-middle me-1"></i>
                                Buy Now</router-link>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>


        <section class="section">
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol lg="6" order="2" order-lg="1">
                        <div class="text-muted">
                            <h5 class="fs-12 text-uppercase text-success">Design</h5>
                            <h4 class="mb-3">Well Designed Dashboards</h4>
                            <p class="mb-4 ff-secondary">Quality Dashboards (QD) is a condition-specific, actionable
                                web-based application for quality reporting and population
                                management that is integrated into the Electronic Health Record (EHR).</p>

                            <BRow>
                                <BCol sm="5">
                                    <div class="vstack gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs icon-effect">
                                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                        <i class="ri-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">Ecommerce</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs icon-effect">
                                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                        <i class="ri-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">Analytics</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs icon-effect">
                                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                        <i class="ri-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">CRM</h5>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol sm="5">
                                    <div class="vstack gap-2">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs icon-effect">
                                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                        <i class="ri-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">Crypto</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 me-2">
                                                <div class="avatar-xs icon-effect">
                                                    <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                        <i class="ri-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">Projects</h5>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>

                            <div class="mt-4">
                                <router-link to="/" class="btn btn-primary">Learn More <i
                                        class="ri-arrow-right-line align-middle ms-1"></i></router-link>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="6" sm="7" cols="10" order="1" order-lg="2" class="ms-auto">
                        <div>
                            <img src="@/assets/images/landing/features/img-2.png" alt="" class="img-fluid">
                        </div>
                    </BCol>
                </BRow>

                <BRow class="align-items-center mt-5 pt-lg-5 gy-4">
                    <BCol lg="6" sm="7" cols="10" class="mx-auto">
                        <div>
                            <img src="@/assets/images/landing/features/img-3.png" alt="" class="img-fluid">
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="text-muted ps-lg-5">
                            <h5 class="fs-12 text-uppercase text-success">structure</h5>
                            <h4 class="mb-3">Well Documented</h4>
                            <p class="mb-4">used to describe something that is known about or known to be true because
                                there are many documents that describe it,
                                prove it, etc.</p>

                            <div class="vstack gap-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i class="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">Dynamic Content</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i class="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">Setup plugin's information.</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="avatar-xs icon-effect">
                                            <div class="avatar-title bg-transparent text-success rounded-circle h2">
                                                <i class="ri-check-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <p class="mb-0">Themes customization information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>



        <section class="section bg-light" id="plans">
            <div class="bg-overlay bg-overlay-pattern"></div>
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Choose the plan that's right for you</h3>
                            <p class="text-muted mb-4">Simple pricing. No hidden fees. Advanced features for you
                                business.</p>

                            <div class="d-flex justify-content-center align-items-center">
                                <div>
                                    <h5 class="fs-14 mb-0">Month</h5>
                                </div>
                                <div class="form-check form-switch fs-20 ms-3 ">
                                    <input class="form-check-input" type="checkbox" id="plan-switch">
                                    <label class="form-check-label" for="plan-switch"></label>
                                </div>
                                <div>
                                    <h5 class="fs-14 mb-0">Annual <BBadge variant="success-subtle"
                                            class="bg-success-subtle text-success">Save 20%</BBadge>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="gy-4">
                    <BCol lg="4">
                        <BCard no-body class="plan-box mb-0">
                            <BCardBody class="p-4 m-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-1 fw-semibold">Basic Plan</h5>
                                        <p class="text-muted mb-0">For Startup</p>
                                    </div>
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-light rounded-circle text-primary">
                                            <i class="ri-book-mark-line fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 text-center">
                                    <h1 class="month"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold">19</span> <span
                                            class="fs-13 text-muted">/Month</span></h1>
                                    <h1 class="annual"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold ">171</span>
                                        <span class="fs-13 text-muted">/Year</span>
                                    </h1>
                                </div>

                                <div>
                                    <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Upto <b>3</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Upto <b>299</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>5</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-danger me-1">
                                                    <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-danger me-1">
                                                    <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-danger me-1">
                                                    <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="mt-4">
                                        <router-link to="javascript:void(0);" class="btn btn-soft-success w-100">Get
                                            Started</router-link>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="4">
                        <BCard no-body class="plan-box mb-0 ribbon-box right">
                            <BCardBody class="p-4 m-2">
                                <div class="ribbon-two ribbon-two-danger"><span>Popular</span></div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-1 fw-semibold">Pro Business</h5>
                                        <p class="text-muted mb-0">Professional plans</p>
                                    </div>
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-light rounded-circle text-primary">
                                            <i class="ri-medal-fill fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 text-center">
                                    <h1 class="month"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold">29</span> <span
                                            class="fs-13 text-muted">/Month</span></h1>
                                    <h1 class="annual"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold">261</span>
                                        <span class="fs-13 text-muted">/Year</span>
                                    </h1>
                                </div>

                                <div>
                                    <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Upto <b>15</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>12</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-danger me-1">
                                                    <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-danger me-1">
                                                    <i class="ri-close-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="mt-4">
                                        <router-link to="javascript:void(0);" class="btn btn-soft-success w-100">Get
                                            Started</router-link>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="4">
                        <BCard no-body class="plan-box mb-0">
                            <BCardBody class="p-4 m-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-1 fw-semibold">Platinum Plan</h5>
                                        <p class="text-muted mb-0">Enterprise Businesses</p>
                                    </div>
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-light rounded-circle text-primary">
                                            <i class="ri-stack-fill fs-20"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-4 text-center">
                                    <h1 class="month"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold">39</span> <span
                                            class="fs-13 text-muted">/Month</span></h1>
                                    <h1 class="annual"><sup><small>$</small></sup><span
                                            class="ff-secondary fw-bold">351</span>
                                        <span class="fs-13 text-muted">/Year</span>
                                    </h1>
                                </div>

                                <div>
                                    <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Projects
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Customers
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Scalable Bandwidth
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> FTP Login
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>24/7</b> Support
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <b>Unlimited</b> Storage
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 text-success me-1">
                                                    <i class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    Domain
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="mt-4">
                                        <router-link to="javascript:void(0);" class="btn btn-soft-success w-100">Get
                                            Started</router-link>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>

            </BContainer>
        </section>

        <section class="section">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Frequently Asked Questions</h3>
                            <p class="text-muted mb-4 ff-secondary">If you can not find answer to your question in our
                                FAQ, you can
                                always contact us or email us. We will answer you shortly!</p>

                            <div class="hstack gap-2 justify-content-center">
                                <BButton type="button" pill variant="primary" class="btn-label"><i
                                        class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i> Email
                                    Us</BButton>
                                <BButton type="button" pill variant="info" class="btn-label"><i
                                        class="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                                    Send Us Tweet</BButton>
                            </div>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="g-lg-5 g-4">
                    <BCol lg="6">
                        <div class="d-flex align-items-center mb-2">
                            <div class="flex-shrink-0 me-1">
                                <i class="ri-question-line fs-24 align-middle text-success me-1"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="mb-0 fw-semibold">General Questions</h5>
                            </div>
                        </div>
                        <BAccordion class="custom-accordionwithicon custom-accordion-border accordion-border-box"
                            id="genques-accordion">
                            <BAccordionItem title="What is the purpose of using themes ?" visible>
                                <div class="ff-secondary">
                                    A theme is a set of colors, fonts, effects, and more that can be applied to your
                                    entire presentation to give it a
                                    consistent, professional look. You've already been using a theme, even if you
                                    didn't know it: the default Office theme,
                                    which consists.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Can a theme have more than one theme?">
                                <div class="ff-secondary">
                                    A story can have as many themes as the reader can identify based on recurring
                                    patterns and parallels within the story
                                    itself. In looking at ways to separate themes into a hierarchy, we might find it
                                    useful to follow the example of a
                                    single book.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="What are theme features?">
                                <div class="ff-secondary">
                                    Theme features is a set of specific functionality that may be enabled by theme
                                    authors. Themes must register each
                                    individual Theme Feature that the author wishes to support. Theme support
                                    functions should be called in the theme's
                                    functions.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="What is simple theme?">
                                <div class="ff-secondary">
                                    Simple is a free WordPress theme, by Themify, built exactly what it is named
                                    for: simplicity. Immediately upgrade the
                                    quality of your WordPress site with the simple theme To use the built-in Chrome
                                    theme editor.
                                </div>
                            </BAccordionItem>
                        </BAccordion>


                    </BCol>
                    <BCol lg="6">
                        <div class="d-flex align-items-center mb-2">
                            <div class="flex-shrink-0 me-1">
                                <i class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="mb-0 fw-semibold">Privacy &amp; Security</h5>
                            </div>
                        </div>

                        <BAccordion class="custom-accordionwithicon custom-accordion-border accordion-border-box"
                            id="privacy-accordion">
                            <BAccordionItem title="Does Word have night mode?">
                                <div class="ff-secondary">
                                    You can run Microsoft Word in dark mode, which uses a dark color palette to help
                                    reduce eye strain in low light
                                    settings. You can choose to make the document white or black using the Switch
                                    Modes button in the ribbon's View tab.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Is theme an opinion?" visible>
                                <div class="ff-secondary">
                                    A theme is an opinion the author expresses on the subject, for instance, the
                                    author's dissatisfaction with the narrow
                                    confines of French bourgeois marriage during that period theme is an idea that a
                                    writer repeats.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="How do you develop a theme?">
                                <div class="ff-secondary">
                                    A short story, novella, or novel presents a narrative to its reader. Perhaps
                                    that narrative involves mystery, terror,
                                    romance, comedy, or all of the above. These works of fiction may also contain
                                    memorable characters, vivid
                                    world-building, literary devices.
                                </div>
                            </BAccordionItem>
                            <BAccordionItem title="Do stories need themes?">
                                <div class="ff-secondary">
                                    A story can have as many themes as the reader can identify based on recurring
                                    patterns and parallels within the story
                                    itself. In looking at ways to separate themes into a hierarchy, we might find it
                                    useful to follow the example of a
                                    single book.
                                </div>
                            </BAccordionItem>
                        </BAccordion>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section bg-primary" id="reviews">
            <div class="bg-overlay bg-overlay-pattern"></div>
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="10">
                        <div class="text-center">
                            <div>
                                <i class="ri-double-quotes-l text-success display-3"></i>
                            </div>
                            <h4 class="text-white mb-5"><span class="text-success">19k</span>+ Satisfied clients</h4>

                            <div class="client-review-swiper rounded">
                                <swiper class="navigation-swiper rounded" :loop="true"
                                    :modules="[Autoplay, Navigation, Pagination]"
                                    :autoplay="{ delay: 2500, disableOnInteraction: false }"
                                    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                                    :pagination="{ clickable: true, el: '.swiper-pagination' }">
                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <BRow class="justify-content-center">
                                                <BCol cols="10">
                                                    <div class="text-white-50">
                                                        <p class="fs-20 ff-secondary mb-4">" I am givng 5 stars. Theme
                                                            is great and everyone one stuff everything in theme. Future
                                                            request should not affect current
                                                            state of theme. "</p>

                                                        <div>
                                                            <h5 class="text-white">gregoriusus</h5>
                                                            <p>- Skote User</p>
                                                        </div>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </swiper-slide>

                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <BRow class="justify-content-center">
                                                <BCol cols="10">
                                                    <div class="text-white-50">
                                                        <p class="fs-20 ff-secondary mb-4">" Awesome support. Had few
                                                            issues while setting up because of my device, the support
                                                            team helped me fix them up in a day.
                                                            Everything looks clean and good. Highly recommended! "</p>

                                                        <div>
                                                            <h5 class="text-white">GeekyGreenOwl</h5>
                                                            <p>- Skote User</p>
                                                        </div>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </swiper-slide>

                                    <swiper-slide>
                                        <div class="swiper-slide">
                                            <BRow class="justify-content-center">
                                                <BCol cols="10">
                                                    <div class="text-white-50">
                                                        <p class="fs-20 ff-secondary mb-4">" Amazing template, Redux
                                                            store and components is nicely designed.
                                                            It's a great start point for an admin based project. Clean
                                                            Code and good documentation. Template is
                                                            completely in React and absolutely no usage of jQuery "</p>

                                                        <div>
                                                            <h5 class="text-white">sreeks456</h5>
                                                            <p>- Veltrix User</p>
                                                        </div>
                                                    </div>
                                                </BCol>
                                            </BRow>
                                        </div>
                                    </swiper-slide>
                                    <div class="swiper-button-next bg-white rounded-circle"></div>
                                    <div class="swiper-button-prev bg-white rounded-circle"></div>
                                    <div class="swiper-pagination position-relative mt-2"></div>

                                </swiper>
                            </div>



                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>



        <section class="py-5 position-relative bg-light">
            <BContainer>
                <BRow class="text-center gy-4">
                    <BCol lg="3" cols="6">
                        <div>
                            <h2 class="mb-2">
                                <count-to :startVal='0' :endVal='100' :duration='5000'>0</count-to>+
                            </h2>
                            <div class="text-muted">Projects Completed</div>
                        </div>
                    </BCol>

                    <BCol lg="3" cols="6">
                        <div>
                            <h2 class="mb-2">
                                <count-to :startVal='0' :endVal='24' :duration='5000'>0</count-to>
                            </h2>
                            <div class="text-muted">Win Awards</div>
                        </div>
                    </BCol>

                    <BCol lg="3" cols="6">
                        <div>
                            <h2 class="mb-2">
                                <count-to :startVal='0' :endVal='20' :duration='5000'>0</count-to>k
                            </h2>
                            <div class="text-muted">Satisfied Clients</div>
                        </div>
                    </BCol>
                    <BCol lg="3" cols="6">
                        <div>
                            <h2 class="mb-2">
                                <count-to :startVal='0' :endVal='50' :duration='5000'>0</count-to>
                            </h2>
                            <div class="text-muted">Employees</div>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>



        <section class="section">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Our Work Process</h3>
                            <p class="text-muted mb-4 ff-secondary">In an ideal world this website wouldn’t exist, a
                                client would
                                acknowledge the importance of having web copy before the Proin vitae ipsum vel ex
                                finibus semper design starts.</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="text-center">
                    <BCol lg="4">
                        <div class="process-card mt-4">
                            <div class="process-arrow-img d-none d-lg-block">
                                <img src="@/assets/images/landing/process-arrow-img.png" alt="" class="img-fluid">
                            </div>
                            <div class="avatar-sm icon-effect mx-auto mb-4">
                                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i class="ri-quill-pen-line"></i>
                                </div>
                            </div>

                            <h5>Tell us what you need</h5>
                            <p class="text-muted ff-secondary">The profession and the employer and your desire to make
                                your mark.</p>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="process-card mt-4">
                            <div class="process-arrow-img d-none d-lg-block">
                                <img src="@/assets/images/landing/process-arrow-img.png" alt="" class="img-fluid">
                            </div>
                            <div class="avatar-sm icon-effect mx-auto mb-4">
                                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i class="ri-user-follow-line"></i>
                                </div>
                            </div>

                            <h5>Get free quotes</h5>
                            <p class="text-muted ff-secondary">The most important aspect of beauty was, therefore, an
                                inherent part.</p>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="process-card mt-4">
                            <div class="avatar-sm icon-effect mx-auto mb-4">
                                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                                    <i class="ri-book-mark-line"></i>
                                </div>
                            </div>

                            <h5>Deliver high quality product</h5>
                            <p class="text-muted ff-secondary">We quickly learn to fear and thus automatically avoid
                                potentially.</p>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section bg-light" id="team">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Our <span class="text-danger">Team</span></h3>
                            <p class="text-muted mb-4 ff-secondary">To achieve this, it would be necessary to have
                                uniform grammar,
                                pronunciation and more common words. If several languages coalesce the grammar.</p>
                        </div>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Nancy Martino</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Team Leader</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-10.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Henry Baird</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Full Stack Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Frank Hook</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Project Manager</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-8.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Donald Palmer</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">UI/UX Designer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-5.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Erica Kernan</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Web Designer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Alexis Clarke</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Backend Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-6.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Marie Ward</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">Full Stack Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <BCol lg="3" sm="6">
                        <BCard n-body>
                            <BCardBody class="text-center p-4">
                                <div class="avatar-xl mx-auto mb-4 position-relative">
                                    <img src="@/assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle">
                                    <router-link to="/mailbox"
                                        class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs">
                                        <div class="avatar-title bg-transparent">
                                            <i class="ri-mail-fill align-bottom"></i>
                                        </div>
                                    </router-link>
                                </div>
                                <h5 class="mb-1">
                                    <router-link to="/pages/profile" class="text-body">Jack Gough</router-link>
                                </h5>
                                <p class="text-muted mb-0 ff-secondary">React Js Developer</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol lg="12">
                        <div class="text-center mt-2">
                            <router-link to="/pages/team" class="btn btn-primary">View All Members <i
                                    class="ri-arrow-right-line ms-1 align-bottom"></i></router-link>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section" id="contact">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h3 class="mb-3 fw-semibold">Get In Touch</h3>
                            <p class="text-muted mb-4 ff-secondary">We thrive when coming up with innovative ideas but
                                also
                                understand that a smart concept should be supported with faucibus sapien odio measurable
                                results.</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="gy-4">
                    <BCol lg="4">
                        <div>
                            <div class="mt-4">
                                <h5 class="fs-13 text-muted text-uppercase">Office Address 1:</h5>
                                <div class="ff-secondary fw-semibold">4461 Cedar Street Moro, <br />AR 72368</div>
                            </div>
                            <div class="mt-4">
                                <h5 class="fs-13 text-muted text-uppercase">Office Address 2:</h5>
                                <div class="ff-secondary fw-semibold">2467 Swick Hill Street <br />New Orleans, LA</div>
                            </div>
                            <div class="mt-4">
                                <h5 class="fs-13 text-muted text-uppercase">Working Hours:</h5>
                                <div class="ff-secondary fw-semibold">9:00am to 6:00pm</div>
                            </div>
                        </div>
                    </BCol>
                    <BCol lg="8">
                        <div>
                            <form>
                                <BRow>
                                    <BCol lg="6">
                                        <div class="mb-4">
                                            <label for="name" class="form-label fs-13">Name</label>
                                            <input name="name" id="name" type="text"
                                                class="form-control bg-light border-light" placeholder="Your name*">
                                        </div>
                                    </BCol>
                                    <BCol lg="6">
                                        <div class="mb-4">
                                            <label for="email" class="form-label fs-13">Email</label>
                                            <input name="email" id="email" type="email"
                                                class="form-control bg-light border-light" placeholder="Your email*">
                                        </div>
                                    </BCol>
                                </BRow>
                                <BRow>
                                    <BCol lg="12">
                                        <div class="mb-4">
                                            <label for="subject" class="form-label fs-13">Subject</label>
                                            <input type="text" class="form-control bg-light border-light" id="subject"
                                                name="subject" placeholder="Your Subject.." />
                                        </div>
                                    </BCol>
                                </BRow>
                                <BRow>
                                    <BCol lg="12">
                                        <div class="mb-3">
                                            <label for="comments" class="form-label fs-13">Message</label>
                                            <textarea name="comments" id="comments" rows="3"
                                                class="form-control bg-light border-light"
                                                placeholder="Your message..."></textarea>
                                        </div>
                                    </BCol>
                                </BRow>
                                <BRow>
                                    <BCol lg="12" class="text-end">
                                        <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary"
                                            value="Send Message">
                                    </BCol>
                                </BRow>
                            </form>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="py-5 bg-primary position-relative">
            <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol sm>
                        <div>
                            <h4 class="text-white mb-0 fw-semibold">Build your web App/SaaS with Velzon dashboard</h4>
                        </div>
                    </BCol>
                    <BCol sm="auto">
                        <div>
                            <router-link to="https://1.envato.market/velzon-admin" target="_blank"
                                class="btn bg-gradient btn-danger"><i class="ri-shopping-cart-2-line align-middle me-1"></i>
                                Buy Now</router-link>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <footer class="custom-footer bg-dark py-5 position-relative">
            <BContainer>
                <BRow>
                    <BCol lg="4" class="mt-4">
                        <div>
                            <div>
                                <img src="@/assets/images/logo-light.png" alt="logo light" height="17">
                            </div>
                            <div class="mt-4 fs-13">
                                <p>Premium Multipurpose Admin & Dashboard Template</p>
                                <p class="ff-secondary">You can build any type of web application like eCommerce, CRM,
                                    CMS, Project
                                    management apps, Admin Panels, etc using Velzon.</p>
                            </div>
                        </div>
                    </BCol>

                    <BCol lg="7" class="ms-lg-auto">
                        <BRow>
                            <BCol sm="4" class="mt-4">
                                <h5 class="text-white mb-0">Company</h5>
                                <div class="text-muted mt-3">
                                    <ul class="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <router-link to="/pages/profile">About US</router-link>
                                        </li>
                                        <li>
                                            <router-link to="">Gallery</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/apps/projects-list">Projects</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/timeline">Timeline</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                            <BCol sm="4" class="mt-4">
                                <h5 class="text-white mb-0">Apps Pages</h5>
                                <div class="text-muted mt-3">
                                    <ul class="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <router-link to="/calendar">Calendar</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/mailbox">Mailbox</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/chat">Chat</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/apps/crm-deals">Deals</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/apps/tasks-kanban">kanban board</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                            <BCol sm="4" class="mt-4">
                                <h5 class="text-white mb-0">Support</h5>
                                <div class="text-muted mt-3">
                                    <ul class="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <router-link to="/pages/faqs">FAQ's</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/faqs">Contacts</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                        </BRow>
                    </BCol>
                </BRow>

                <BRow class="text-center text-sm-start align-items-center mt-5">
                    <BCol sm="6">

                        <div>
                            <p class="copy-rights mb-0 currentyear">{{ new Date().getFullYear() }} © Velzon -
                                Themesbrand
                            </p>
                        </div>
                    </BCol>
                    <BCol sm="6">
                        <div class="text-sm-end mt-3 mt-sm-0">
                            <ul class="list-inline mb-0 footer-social-link">
                                <li class="list-inline-item">
                                    <router-link to="javascript: void(0);" class="avatar-xs d-block">
                                        <div class="avatar-title rounded-circle">
                                            <i class="ri-facebook-fill"></i>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="javascript: void(0);" class="avatar-xs d-block">
                                        <div class="avatar-title rounded-circle">
                                            <i class="ri-github-fill"></i>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="javascript: void(0);" class="avatar-xs d-block">
                                        <div class="avatar-title rounded-circle">
                                            <i class="ri-linkedin-fill"></i>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="javascript: void(0);" class="avatar-xs d-block">
                                        <div class="avatar-title rounded-circle">
                                            <i class="ri-google-fill"></i>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="javascript: void(0);" class="avatar-xs d-block">
                                        <div class="avatar-title rounded-circle">
                                            <i class="ri-dribbble-line"></i>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </footer>
        <BButton variant="danger" @click="topFunction" class="btn-icon" id="back-to-top">
            <i class="ri-arrow-up-line"></i>
        </BButton>
    </div>
</template>