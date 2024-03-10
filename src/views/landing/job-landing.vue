<script>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";

export default {
    data() {
        return {
            Autoplay,
        };
    },
    components: {
        Swiper, SwiperSlide,
    },
    methods: {
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    mounted() {

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
    },
};
</script>

<template>
    <div class="layout-wrapper landing">
        <nav class="navbar navbar-expand-lg navbar-landing fixed-top job-navbar" id="navbar">
            <BContainer fluid class="custom-container">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/images/logo-dark.png" class="card-logo card-logo-dark" alt="logo dark" height="17">
                    <img src="@/assets/images/logo-light.png" class="card-logo card-logo-light" alt="logo light"
                        height="17">
                </router-link>
                <BButton class="navbar-toggler py-0 fs-20 text-body" type="button" v-b-toggle.navbarSupportedContent>
                    <i class="mdi mdi-menu"></i>
                </BButton>

                <BCollapse class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
                        <li class="nav-item">
                            <BLink class="nav-link" href="#hero" @click.prevent="scrollToSection('hero')">Home
                            </BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#process" @click.prevent="scrollToSection('process')">
                                Process
                            </BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#categories" @click.prevent="scrollToSection('categories')">
                                Categories</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#findJob" @click.prevent="scrollToSection('findJob')">Find
                                Jobs</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#candidates" @click.prevent="scrollToSection('candidates')">
                                Candidates</BLink>
                        </li>
                        <li class="nav-item">
                            <BLink class="nav-link" href="#blog" @click.prevent="scrollToSection('blog')">Blog</BLink>
                        </li>
                    </ul>

                    <div class="">
                        <router-link to="/auth/signin-basic" class="btn btn-soft-primary"><i
                                class="ri-user-3-line align-bottom me-1"></i> Login & Register</router-link>
                    </div>
                </BCollapse>

            </BContainer>
        </nav>

        <section class="section job-hero-section bg-light pb-0" id="hero">
            <BContainer>
                <BRow class="justify-content-between align-items-center">
                    <BCol lg="6">
                        <div>
                            <h1 class="display-6 fw-semibold text-capitalize mb-3 lh-base">Find your next job and build
                                your dream here</h1>
                            <p class="lead text-muted lh-base mb-4">Find jobs, create trackable resumes and enrich your
                                applications. Carefully crafted after analyzing the needs of different industries.</p>
                            <form action="#" class="job-panel-filter">
                                <BRow class="g-md-0 g-2">
                                    <BCol md="4">
                                        <div>
                                            <input type="search" id="job-title" class="form-control filter-input-box"
                                                placeholder="Job, Company name...">
                                        </div>
                                    </BCol>
                                    <BCol md="4">
                                        <div>
                                            <select class="form-control" data-choices>
                                                <option value="">Select job type</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                                <option value="Freelance">Freelance</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                        </div>
                                    </BCol>
                                    <BCol md="4">
                                        <div class="h-100">
                                            <BButton variant="primary" class="submit-btn w-100 h-100" type="submit"><i
                                                    class="ri-search-2-line align-bottom me-1"></i> Find Job</BButton>
                                        </div>
                                    </BCol>
                                </BRow>
                            </form>

                            <ul class="treding-keywords list-inline mb-0 mt-3 fs-13">
                                <li class="list-inline-item text-danger fw-semibold"><i
                                        class="mdi mdi-tag-multiple-outline align-middle"></i> Trending Keywords:</li>
                                <li class="list-inline-item">
                                    <BLink href="#">Design,</BLink>
                                </li>
                                <li class="list-inline-item">
                                    <BLink href="#">Development,</BLink>
                                </li>
                                <li class="list-inline-item">
                                    <BLink href="#">Manager,</BLink>
                                </li>
                                <li class="list-inline-item">
                                    <BLink href="#">Senior</BLink>
                                </li>
                            </ul>
                        </div>
                    </BCol>
                    <BCol lg="4">
                        <div class="position-relative home-img text-center mt-5 mt-lg-0">
                            <BCard no-body class="p-3 rounded shadow-lg inquiry-box">
                                <div class="d-flex align-items-center">
                                    <div class="avatar-sm flex-shrink-0 me-3">
                                        <div class="avatar-title bg-warning-subtle text-warning rounded fs-18">
                                            <i class="ri-mail-send-line"></i>
                                        </div>
                                    </div>
                                    <h5 class="fs-15 lh-base mb-0">Work Inquiry from velzon</h5>
                                </div>
                            </BCard>

                            <BCard no-body class="p-3 rounded shadow-lg application-box">
                                <h5 class="fs-15 lh-base mb-3">Applications</h5>
                                <div class="avatar-group">
                                    <BLink href="#" class="avatar-group-item" v-b-tooltip.hover title="Brent Gonzalez">
                                        <div class="avatar-xs">
                                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                class="rounded-circle img-fluid">
                                        </div>
                                    </BLink>
                                    <BLink href="#" class="avatar-group-item" v-b-tooltip.hover title="Ellen Smith">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-danger">
                                                S
                                            </div>
                                        </div>
                                    </BLink>
                                    <BLink href="#" class="avatar-group-item" v-b-tooltip.hover title="Ellen Smith">
                                        <div class="avatar-xs">
                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                class="rounded-circle img-fluid">
                                        </div>
                                    </BLink>
                                    <BLink href="#" class="avatar-group-item">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-success">
                                                Z
                                            </div>
                                        </div>
                                    </BLink>
                                    <BLink href="#" class="avatar-group-item" v-b-tooltip.hover title="Brent Gonzalez">
                                        <div class="avatar-xs">
                                            <img src="@/assets/images/users/avatar-9.jpg" alt=""
                                                class="rounded-circle img-fluid">
                                        </div>
                                    </BLink>
                                    <BLink href="#" class="avatar-group-item" v-b-tooltip.hover title="More Appliances">
                                        <div class="avatar-xs">
                                            <div
                                                class="avatar-title fs-13 rounded-circle bg-light border-dashed border text-primary">
                                                2k+
                                            </div>
                                        </div>
                                    </BLink>
                                </div>
                            </BCard>
                            <img src="@/assets/images/job-profile2.png" alt="" class="user-img">

                            <div class="circle-effect">
                                <div class="circle"></div>
                                <div class="circle2"></div>
                                <div class="circle3"></div>
                                <div class="circle4"></div>
                            </div>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section" id="process">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold lh-base">How <span class="text-primary">it's
                                    work</span> creative jobs & quickly features</h1>
                            <p class="text-muted">A creative person has the ability to invent and develop original
                                ideas, especially in the arts. Like so many creative people, he was never satisfied.</p>
                        </div>
                    </BCol>

                </BRow>
                <BRow>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody class="p-4">
                                <h1 class="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                                    <div class="job-icon-effect"></div>
                                    <span>1</span>
                                </h1>
                                <h6 class="fs-17 mb-2">Register Account</h6>
                                <p class="text-muted mb-0 fs-15">First, You need to make a account.</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none">
                            <BCardBody class="p-4">
                                <h1 class="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                                    <div class="job-icon-effect"></div>
                                    <span>2</span>
                                </h1>
                                <h6 class="fs-17 mb-2">Create Resume</h6>
                                <p class="text-muted mb-0 fs-15">Create a resume for your job.</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none">
                            <BCardBody class="p-4">
                                <h1 class="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                                    <div class="job-icon-effect"></div>
                                    <span>3</span>
                                </h1>

                                <h6 class="fs-17 mb-2">Find Job</h6>
                                <p class="text-muted mb-0 fs-15">Search for your dream jobs from velzon.</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none">
                            <BCardBody class="p-4">
                                <h1 class="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                                    <div class="job-icon-effect"></div>
                                    <span>4</span>
                                </h1>
                                <h6 class="fs-17 mb-2">Apply Job</h6>
                                <p class="text-muted mb-0 fs-15">Apply to the company and wait for interview.</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section">
            <BContainer>
                <BRow class="align-items-center justify-content-lg-between justify-content-center gy-4">
                    <BCol lg="5" sm="7">
                        <div class="about-img-section mb-5 mb-lg-0 text-center">
                            <BCard no-body class="rounded shadow-lg inquiry-box d-none d-lg-block">
                                <BCardBody class="d-flex align-items-center">
                                    <div class="avatar-sm flex-shrink-0 me-3">
                                        <div class="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-18">
                                            <i class="ri-briefcase-2-line"></i>
                                        </div>
                                    </div>
                                    <h5 class="fs-15 lh-base mb-0">Search Over <span
                                            class="text-secondary fw-semibold">1,00,000+</span> Jobs</h5>
                                </BCardBody>
                            </BCard>

                            <BCard no-body class="feedback-box">
                                <BCardBody class="d-flex shadow-lg">
                                    <div class="flex-shrink-0 me-3">
                                        <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                            class="avatar-sm rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-14 lh-base mb-0">Tonya Noble</h5>
                                        <p class="text-muted fs-11 mb-1">UI/UX Designer</p>

                                        <div class="text-warning">
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-line"></i>
                                        </div>
                                    </div>
                                </BCardBody>
                            </BCard>
                            <img src="@/assets/images/about.jpg" alt="" class="img-fluid mx-auto rounded-3" />
                        </div>
                    </BCol>
                    <BCol lg="6">
                        <div class="text-muted">
                            <h1 class="mb-3 lh-base">Find Your <span class="text-primary">Dream Job</span> in One Place
                            </h1>
                            <p class="ff-secondary fs-16 mb-2">The first step in finding your <b>dream job </b> is
                                deciding where to look for first-hand insight. Contact professionals who are already
                                working in industries or positions that interest you.</p>
                            <p class="ff-secondary fs-16">Schedule informational interviews and phone calls or ask for
                                the opportunity to shadow them on the job.</p>

                            <div class="vstack gap-2 mb-4 pb-1">
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

                            <div>
                                <BLink href="#!" class="btn btn-primary">Find Your Jobs <i
                                        class="ri-arrow-right-line align-bottom ms-1"></i></BLink>
                            </div>
                        </div>
                    </BCol>

                </BRow>
            </BContainer>
        </section>

        <section class="section bg-light" id="categories">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="7">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold text-capitalize lh-base">High demand jobs <span
                                    class="text-primary">Categories</span> featured</h1>
                            <p class="text-muted">Post a job to tell us about your project. We'll quickly match you with
                                the right freelancers.</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow class="justify-content-center">
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-pencil-ruler-2-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">IT & Software</h5>
                                </BLink>
                                <p class="mb-0 text-muted">1543 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-airplay-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Construction / Facilities</h5>
                                </BLink>
                                <p class="mb-0 text-muted">3241 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm mb-4 mx-auto position-relative">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-bank-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Government</h5>
                                </BLink>
                                <p class="mb-0 text-muted">876 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-focus-2-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Marketing & Advertising</h5>
                                </BLink>
                                <p class="mb-0 text-muted">465 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-pencil-ruler-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Education & training</h5>
                                </BLink>
                                <p class="mb-0 text-muted">105 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-line-chart-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Digital Marketing</h5>
                                </BLink>
                                <p class="mb-0 text-muted">377 Jobs</p>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="3" md="6">
                        <BCard no-body class="shadow-none text-center py-3">
                            <BCardBody class="py-4">
                                <div class="avatar-sm position-relative mb-4 mx-auto">
                                    <div class="job-icon-effect"></div>
                                    <div class="avatar-title bg-transparent text-success rounded-circle">
                                        <i class="ri-briefcase-2-line fs-1"></i>
                                    </div>
                                </div>
                                <BLink href="#!" class="stretched-link">
                                    <h5 class="fs-17 pt-1">Catering & Tourism</h5>
                                </BLink>
                                <p class="mb-0 text-muted">85 Jobs</p>
                            </BCardBody>
                        </BCard>
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
                            <h4 class="text-white mb-2">Ready to Started?</h4>
                            <p class="text-white-50 mb-0">Create new account and refer your friend</p>
                        </div>
                    </BCol>

                    <BCol sm="auto">
                        <div>
                            <BLink href="#!" class="btn bg-gradient btn-danger">Create Free Account</BLink>
                        </div>
                    </BCol>

                </BRow>
            </BContainer>
        </section>

        <section class="section" id="findJob">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="7">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold text-capitalize lh-base">Find Your <span
                                    class="text-primary">Career</span> You Deserve it</h1>
                            <p class="text-muted">Post a job to tell us about your project. We'll quickly match you with
                                the right freelancers.</p>
                        </div>
                    </BCol>

                </BRow>

                <BRow>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-warning-subtle rounded">
                                            <img src="@/assets/images/companies/img-3.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>UI/UX designer</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Nesta Technologies
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> USA
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $23k - 35k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Design
                                            </BBadge>
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">UI/UX
                                            </BBadge>
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Adobe
                                                XD</BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-primary-subtle rounded">
                                            <img src="@/assets/images/companies/img-2.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Product Sales Specialist</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Digitech Galaxy
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> Spain
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $10k - 15k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Sales
                                            </BBadge>
                                            <BBadge variant="secondary-subtle" class="bg-secondary-subtle text-secondary">
                                                Product</BBadge>
                                            <BBadge variant="info-subtle" class="bg-info-subtle text-info">Bussiness
                                            </BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle active"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-danger-subtle rounded">
                                            <img src="@/assets/images/companies/img-4.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Marketing Director</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Meta4Systems
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> Sweden
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $20k - 25k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="warning-subtle" class="bg-warning-subtle text-warning">
                                                Marketing</BBadge>
                                            <BBadge variant="info-subtle" class="bg-info-subtle text-info">Bussiness
                                            </BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle active"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-success-subtle rounded">
                                            <img src="@/assets/images/companies/img-9.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Product Designer</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Themesbrand
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> USA
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $40k+
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Design
                                            </BBadge>
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">UI/UX
                                            </BBadge>
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Adobe
                                                XD</BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-info-subtle rounded">
                                            <img src="@/assets/images/companies/img-1.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Project Manager</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Syntyce Solutions
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> Germany
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $18k - 26k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">HR</BBadge>
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Manager
                                            </BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-success-subtle rounded">
                                            <img src="@/assets/images/companies/img-7.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Business Associate</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Nesta Technologies
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> USA
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $23k - 35k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Design
                                            </BBadge>
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">UI/UX
                                            </BBadge>
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Adobe
                                                XD</BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle active"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-info-subtle rounded">
                                            <img src="@/assets/images/companies/img-8.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Recruiting Coordinator</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Zoetic Fashion
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> Namibia
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $12k - 15k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Full
                                                Time</BBadge>
                                            <BBadge variant="info-subtle" class="bg-info-subtle text-info">Remote</BBadge>
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Fashion
                                            </BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle active"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="6">
                        <BCard no-body class="shadow-lg">
                            <BCardBody>
                                <div class="d-flex">
                                    <div class="avatar-sm">
                                        <div class="avatar-title bg-warning-subtle rounded">
                                            <img src="@/assets/images/companies/img-5.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <div class="ms-3 flex-grow-1">
                                        <BLink href="#!">
                                            <h5>Customs officer</h5>
                                        </BLink>
                                        <ul class="list-inline text-muted mb-3">
                                            <li class="list-inline-item">
                                                <i class="ri-building-line align-bottom me-1"></i> Nesta Technologies
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-map-pin-2-line align-bottom me-1"></i> USA
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="ri-money-dollar-circle-line align-bottom me-1"></i> $41k - 45k
                                            </li>
                                        </ul>
                                        <div class="hstack gap-2">
                                            <BBadge variant="success-subtle" class="bg-success-subtle text-success">Design
                                            </BBadge>
                                            <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">UI/UX
                                            </BBadge>
                                            <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Adobe
                                                XD</BBadge>
                                        </div>
                                    </div>
                                    <div>
                                        <BButton type="button" variant="ghost-primary" class="btn-icon custom-toggle"
                                            data-bs-toggle="button">
                                            <span class="icon-on"><i class="ri-bookmark-line"></i></span>
                                            <span class="icon-off"><i class="ri-bookmark-fill"></i></span>
                                        </BButton>
                                    </div>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="12">
                        <div class="text-center mt-4">
                            <BLink href="#!" class="btn btn-ghost-primary">View More Jobs <i
                                    class="ri-arrow-right-line align-bottom"></i></BLink>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section">
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol lg="6" order="2" order-lg="1">
                        <div class="text-muted mt-5 mt-lg-0">
                            <h5 class="fs-12 text-uppercase text-success">Hot Featured Company</h5>
                            <h1 class="mb-3 ff-secondary fw-semibold text-capitalize lh-base">Get <span
                                    class="text-primary">10,000+</span> Featured Companies</h1>
                            <p class="ff-secondary mb-2">The demand for content writing services is growing. This is
                                because content is required in almost every industry. <b>Many companies have discovered
                                    how effective content marketing is.</b> This is a major reason for this increase in
                                demand.</p>
                            <p class="mb-4 ff-secondary">A Content Writer is a professional who writes informative and
                                engaging articles to help brands showcase their products.</p>

                            <div class="mt-4">
                                <router-link to="/" class="btn btn-primary">View More Companies <i
                                        class="ri-arrow-right-line align-middle ms-1"></i></router-link>
                            </div>
                        </div>
                    </BCol>

                    <BCol lg="4" sm="7" cols="10" order="1" order-lg="2" class="ms-lg-auto mx-auto">
                        <div>
                            <BCard no-body class="shadow-lg">
                                <BCardBody>
                                    <BButton variant="soft-primary" type="button" class="btn-icon float-end"
                                        data-bs-toggle="button" aria-pressed="true"><i
                                            class="mdi mdi-cards-heart fs-16"></i></BButton>
                                    <div class="avatar-sm mb-4">
                                        <div class="avatar-title bg-secondary-subtle rounded">
                                            <img src="@/assets/images/companies/img-1.png" alt="" class="avatar-xxs">
                                        </div>
                                    </div>
                                    <BLink href="#!">
                                        <h5>New Web designer</h5>
                                    </BLink>
                                    <p class="text-muted">Themesbrand</p>

                                    <div class="d-flex gap-4 mb-3">
                                        <div>
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido,California
                                        </div>

                                        <div>
                                            <i class="ri-time-line text-primary me-1 align-bottom"></i> 3 min ago
                                        </div>
                                    </div>

                                    <p class="text-muted">As a Product Designer, you will work within a Product Delivery
                                        Team fused with UX, engineering, product and data talent.</p>

                                    <div class="hstack gap-2">
                                        <BBadge variant="success-subtle" class="bg-success-subtle text-success">Full Time
                                        </BBadge>
                                        <BBadge variant="primary-subtle" class="bg-primary-subtle text-primary">Freelance
                                        </BBadge>
                                        <BBadge variant="danger-subtle" class="bg-danger-subtle text-danger">Urgent</BBadge>
                                    </div>

                                    <div class="mt-4 hstack gap-2">
                                        <BLink href="#!" class="btn btn-soft-primary w-100">Apply Job</BLink>
                                        <BLink href="#!" class="btn btn-soft-success w-100">Overview</BLink>
                                    </div>
                                </BCardBody>
                            </BCard>
                            <BCard no-body class="shadow-lg bg-info mb-0 features-company-widgets rounded-3">
                                <BCardBody>
                                    <h5 class="text-white fs-16 mb-4">10,000+ Featured Companies</h5>

                                    <div class="d-flex gap-1">
                                        <BLink href="#" v-b-tooltip.hover title="Brent Gonzalez">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-light bg-opacity-25 rounded-circle">
                                                    <img src="@/assets/images/companies/img-5.png" alt="" height="15">
                                                </div>
                                            </div>
                                        </BLink>
                                        <BLink href="#" v-b-tooltip.hover title="Brent Gonzalez">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-light bg-opacity-25 rounded-circle">
                                                    <img src="@/assets/images/companies/img-2.png" alt="" height="15">
                                                </div>
                                            </div>
                                        </BLink>
                                        <BLink href="#" v-b-tooltip.hover title="Brent Gonzalez">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-light bg-opacity-25 rounded-circle">
                                                    <img src="@/assets/images/companies/img-8.png" alt="" height="15">
                                                </div>
                                            </div>
                                        </BLink>
                                        <BLink href="#" v-b-tooltip.hover title="Brent Gonzalez">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-light bg-opacity-25 rounded-circle">
                                                    <img src="@/assets/images/companies/img-7.png" alt="" height="15">
                                                </div>
                                            </div>
                                        </BLink>
                                        <BLink href="#" v-b-tooltip.hover title="More Companies">
                                            <div class="avatar-xs">
                                                <div
                                                    class="avatar-title fs-11 rounded-circle bg-light bg-opacity-25 text-white">
                                                    1k+
                                                </div>
                                            </div>
                                        </BLink>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section bg-light" id="candidates">
            <div class="bg-overlay bg-overlay-pattern"></div>
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold text-capitalize lh-base">Hire Experts <span
                                    class="text-primary">Team</span></h1>
                            <p class="text-muted mb-4">Hiring experts costs more per hour than hiring entry- or
                                mid-level freelancers, but they can usually get the work done faster—and better.</p>
                        </div>
                    </BCol>

                </BRow>
                <BRow>
                    <BCol lg="12">
                        <swiper class="swiper candidate-swiper" :loop="true" :autoplay="true" :modules="[Autoplay]"
                            :slidesPerView="1" :spaceBetween="10"
                            :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 40 }, 1200: { slidesPerView: 4, spaceBetween: 50 }, }">
                            <swiper-slide>
                                <BCard no-body class="text-center">
                                    <BCardBody class="p-4">
                                        <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                            class="rounded-circle avatar-md mx-auto d-block">
                                        <h5 class="fs-17 mt-3 mb-2">Nancy Martino</h5>
                                        <p class="text-muted fs-13 mb-3">Creative Designer</p>

                                        <p class="text-muted mb-4 fs-14">
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido, California
                                        </p>

                                        <BLink href="#!" class="btn btn-primary w-100">View Profile</BLink>
                                    </BCardBody>
                                </BCard>
                            </swiper-slide>
                            <swiper-slide>
                                <BCard no-body class="text-center">
                                    <BCardBody class="p-4">
                                        <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                            class="rounded-circle avatar-md mx-auto d-block">
                                        <h5 class="fs-17 mt-3 mb-2">Glen Matney</h5>
                                        <p class="text-muted fs-13 mb-3">Marketing Director</p>

                                        <p class="text-muted mb-4 fs-14">
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido, California
                                        </p>

                                        <BLink href="#!" class="btn btn-primary w-100">View Profile</BLink>
                                    </BCardBody>
                                </BCard>
                            </swiper-slide>
                            <swiper-slide>
                                <BCard no-body class="text-center">
                                    <BCardBody class="p-4">
                                        <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                            class="rounded-circle avatar-md mx-auto d-block">
                                        <h5 class="fs-17 mt-3 mb-2">Alexis Clarke</h5>
                                        <p class="text-muted fs-13 mb-3">Product Manager</p>

                                        <p class="text-muted mb-4 fs-14">
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido, California
                                        </p>

                                        <BLink href="#!" class="btn btn-primary w-100">View Profile</BLink>
                                    </BCardBody>
                                </BCard>
                            </swiper-slide>
                            <swiper-slide>
                                <BCard no-body class="text-center">
                                    <BCardBody class="p-4">
                                        <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                            class="rounded-circle avatar-md mx-auto d-block" />
                                        <h5 class="fs-17 mt-3 mb-2">James Price</h5>
                                        <p class="text-muted fs-13 mb-3">Product Designer</p>

                                        <p class="text-muted mb-4 fs-14">
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido, California
                                        </p>

                                        <BLink href="#!" class="btn btn-primary w-100">View Profile</BLink>
                                    </BCardBody>
                                </BCard>
                            </swiper-slide>
                            <swiper-slide>
                                <BCard no-body class="text-center">
                                    <BCardBody class="p-4">
                                        <img src="@/assets/images/users/avatar-5.jpg" alt=""
                                            class="rounded-circle avatar-md mx-auto d-block" />
                                        <h5 class="fs-17 mt-3 mb-2">Michael Morris</h5>
                                        <p class="text-muted fs-13 mb-3">Full Stack Developer</p>

                                        <p class="text-muted mb-4 fs-14">
                                            <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                                            Escondido, California
                                        </p>

                                        <BLink href="#!" class="btn btn-primary w-100">View Profile</BLink>
                                    </BCardBody>
                                </BCard>
                            </swiper-slide>
                        </swiper>
                    </BCol>
                </BRow>
            </BContainer>
        </section>

        <section class="section" id="blog">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol lg="8">
                        <div class="text-center mb-5">
                            <h1 class="mb-3 ff-secondary fw-semibold text-capitalize lh-base">Our Latest <span
                                    class="text-primary">News</span></h1>
                            <p class="text-muted mb-4">We thrive when coming up with innovative ideas but also
                                understand that a smart concept should be supported with faucibus sapien odio measurable
                                results.</p>
                        </div>
                    </BCol>
                </BRow>

                <BRow>
                    <BCol lg="4" md="6">
                        <BCard no-body>
                            <BCardBody>
                                <img src="@/assets/images/small/img-8.jpg" alt="" class="img-fluid rounded" />
                            </BCardBody>
                            <BCardBody>
                                <ul class="list-inline fs-14 text-muted">
                                    <li class="list-inline-item">
                                        <i class="ri-calendar-line align-bottom me-1"></i> 30 Oct, 2021
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="ri-message-2-line align-bottom me-1"></i> 364 Comment
                                    </li>
                                </ul>
                                <BLink href="#;">
                                    <h5>Design your apps in your own way ?</h5>
                                </BLink>
                                <p class="text-muted fs-14">One disadvantage of Lorum Ipsum is that in Latin certain
                                    letters appear more frequently than others.</p>

                                <div>
                                    <BLink href="#!" class="link-success">Learn More <i
                                            class="ri-arrow-right-line align-bottom ms-1"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="4" md="6">
                        <BCard no-body>
                            <BCardBody>
                                <img src="@/assets/images/small/img-6.jpg" alt="" class="img-fluid rounded" />
                            </BCardBody>
                            <BCardBody>
                                <ul class="list-inline fs-14 text-muted">
                                    <li class="list-inline-item">
                                        <i class="ri-calendar-line align-bottom me-1"></i> 02 Oct, 2021
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="ri-message-2-line align-bottom me-1"></i> 245 Comment
                                    </li>
                                </ul>
                                <BLink href="#;">
                                    <h5>Smartest Applications for Business ?</h5>
                                </BLink>
                                <p class="text-muted fs-14">Due to its widespread use as filler text for layouts,
                                    non-readability is of great importance: human perception.</p>

                                <div>
                                    <BLink href="#!" class="link-success">Learn More <i
                                            class="ri-arrow-right-line align-bottom ms-1"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                    <BCol lg="4" md="6">
                        <BCard no-body>
                            <BCardBody>
                                <img src="@/assets/images/small/img-9.jpg" alt="" class="img-fluid rounded" />
                            </BCardBody>
                            <BCardBody>
                                <ul class="list-inline fs-14 text-muted">
                                    <li class="list-inline-item">
                                        <i class="ri-calendar-line align-bottom me-1"></i> 23 Sept, 2021
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="ri-message-2-line align-bottom me-1"></i> 354 Comment
                                    </li>
                                </ul>
                                <BLink href="#;">
                                    <h5>How apps is changing the IT world</h5>
                                </BLink>
                                <p class="text-muted fs-14">Intrinsically incubate intuitive opportunities and real-time
                                    potentialities Appropriately communicate one-to-one technology.</p>

                                <div>
                                    <BLink href="#!" class="link-success">Learn More <i
                                            class="ri-arrow-right-line align-bottom ms-1"></i></BLink>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BContainer>
        </section>


        <section class="py-5 bg-primary position-relative">
            <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
            <BContainer>
                <BRow class="align-items-center gy-4">
                    <BCol sm="">
                        <div>
                            <h4 class="text-white fw-semibold">Get New Jobs Notification!</h4>
                            <p class="text-white text-opacity-75 mb-0">Subscribe & get all related jobs notification.</p>
                        </div>
                    </BCol>

                    <BCol sm="auto">
                        <BButton type="button" variant="danger">Subscribe Now <i
                                class="ri-arrow-right-line align-bottom"></i></BButton>
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
                                <img src="@/assets/images/logo-light.png" alt="logo light" height="17" />
                            </div>
                            <div class="mt-4 fs-13">
                                <p>Premium Multipurpose Admin & Dashboard Template</p>
                                <p>You can build any type of web application like eCommerce, CRM, CMS, Project
                                    management apps, Admin Panels, etc using Velzon.</p>
                                <ul class="list-inline mb-0 footer-social-link">
                                    <li class="list-inline-item">
                                        <BLink href="#" class="avatar-xs d-block">
                                            <div class="avatar-title rounded-circle">
                                                <i class="ri-facebook-fill"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink href="#" class="avatar-xs d-block">
                                            <div class="avatar-title rounded-circle">
                                                <i class="ri-github-fill"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink href="#" class="avatar-xs d-block">
                                            <div class="avatar-title rounded-circle">
                                                <i class="ri-linkedin-fill"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink href="#" class="avatar-xs d-block">
                                            <div class="avatar-title rounded-circle">
                                                <i class="ri-google-fill"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                    <li class="list-inline-item">
                                        <BLink href="#" class="avatar-xs d-block">
                                            <div class="avatar-title rounded-circle">
                                                <i class="ri-dribbble-line"></i>
                                            </div>
                                        </BLink>
                                    </li>
                                </ul>
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
                                            <router-link to="/pages/profile">About Us</router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">Gallery</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/team">Team</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/pricing">Pricing</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/timeline">Timeline</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                            <BCol sm="4" class="mt-4">
                                <h5 class="text-white mb-0">For Jobs</h5>
                                <div class="text-muted mt-3">
                                    <ul class="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <router-link to="/jobs/lists">Job List</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/jobs/application">application</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/jobs/new">New Job</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/jobs/companies-list">Company List</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </BCol>
                            <BCol sm="4" class="mt-4">
                                <h5 class="text-white mb-0">Support</h5>
                                <div class="text-muted mt-3">
                                    <ul class="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <router-link to="/pages/faqs">FAQ</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/faqs">Contact</router-link>
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
                            <p class="copy-rights mb-0">
                                {{ new Date().getFullYear() }} © Velzon - Themesbrand
                            </p>
                        </div>
                    </BCol>
                    <BCol sm="6">
                        <div class="text-sm-end mt-3 mt-sm-0">
                            <ul class="list-inline mb-0 footer-list gap-4 fs-13">
                                <li class="list-inline-item">
                                    <router-link to="/pages/privacy-policy">Privacy Policy</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="/pages/term-conditions">Terms & Conditions</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="/pages/privacy-policy">Security</router-link>
                                </li>
                            </ul>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </footer>
        <BButton variant="info" @click="topFunction" class="btn-icon" id="back-to-top">
            <i class="ri-arrow-up-line"></i>
        </BButton>
    </div>
</template>
