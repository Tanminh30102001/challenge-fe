<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

import animationData from "@/components/widgets/lupuorrc.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
    data() {
        return {
            progressbarvalue: 0,
            activeTab: 1,

            // Arrow Nav Steps
            activeTabArrow: 2,

            // Vertical nav Steps
            activeTabVerti: 2,
            defaultOptions: { animationData: animationData },
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie
    },
    methods: {
        toggleTab(tab, value) {
            this.activeTab = tab;
            this.progressbarvalue = value;
        },

        toggleTabArrow(tab) {
            this.activeTabArrow = tab;
        },

        toggleTabVerti(tab) {
            this.activeTabVerti = tab;
        }
    },
    mounted() {

        // user profile img file upload
        document.querySelector("#profile-img-file-input").addEventListener("change", function () {
            var preview = document.querySelector(".user-profile-image");
            var file = document.querySelector(".profile-img-file-input").files[0];
            var reader = new FileReader();

            reader.addEventListener(
                "load",
                function () {
                    preview.src = reader.result;
                },
                false
            );

            if (file) {
                reader.readAsDataURL(file);
            }
        });

        document.querySelectorAll(".form-steps").forEach(function (form) {

            // next tab
            form.querySelectorAll(".nexttab").forEach(function (nextButton) {
                var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
                tabEl.forEach(function (item) {
                    item.addEventListener('show.bs.tab', function (event) {
                        event.target.classList.add('done');
                    });
                });
                nextButton.addEventListener("click", function () {
                    var nextTab = nextButton.getAttribute('data-nexttab');
                    document.getElementById(nextTab).click();
                });
            });

            //Pervies tab
            form.querySelectorAll(".previestab").forEach(function (prevButton) {

                prevButton.addEventListener("click", function () {
                    var prevTab = prevButton.getAttribute('data-previous');
                    var totalDone = prevButton.closest("form").querySelectorAll(".custom-nav .done").length;
                    for (var i = totalDone - 1; i < totalDone; i++) {
                        (prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]) ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
                    }
                    document.getElementById(prevTab).click();
                });
            });

            // Step number click
            var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
            tabButtons.forEach(function (button, i) {
                button.setAttribute("data-position", i);
                button.addEventListener("click", function () {
                    var getProgreebar = button.getAttribute("data-progressbar");
                    if (getProgreebar) {
                        var totallength = document.getElementById("custom-progress-bar").querySelectorAll("li").length - 1;
                        var current = i;
                        var percent = (current / totallength) * 100;
                        document.getElementById("custom-progress-bar").querySelector('.progress-bar').style.width = percent + "%";
                    }
                    (form.querySelectorAll(".custom-nav .done").length > 0) ?
                        form.querySelectorAll(".custom-nav .done").forEach(function (doneTab) {
                            doneTab.classList.remove('done');
                        }) : '';
                    for (var j = 0; j <= i; j++) {
                        tabButtons[j].classList.contains('active') ? tabButtons[j].classList.remove('done') : tabButtons[j].classList.add('done');
                    }
                });
            });
        });
    }
};
</script>

<template>
    <Layout>
        <PageHeader title="Wizard" pageTitle="Forms" />
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Progress Nav Steps</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <form action="#">
                            <div class="text-center pt-3 pb-4 mb-1">
                                <h5>Signup Your Account</h5>
                            </div>
                            <div id="custom-progress-bar" class="progress-nav mb-4">
                                <div class="progress" style="height: 1px;">
                                    <div class="progress-bar" role="progressbar" :style="`width: ${progressbarvalue}%;`"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <BButton variant="link" class="nav-link rounded-pill" id="pills-gen-info-tab"
                                            role="tab" :class="{ active: activeTab == 1, done: activeTab > 1 }"
                                            @click="toggleTab(1, 0);">1</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton variant="link" class="nav-link rounded-pill" id="pills-info-desc-tab"
                                            role="tab" :class="{ active: activeTab == 2, done: activeTab > 2 }"
                                            @click="toggleTab(2, 50);">2</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton variant="link" class="nav-link rounded-pill" id="pills-success-tab"
                                            role="tab" :class="{ active: activeTab == 3, done: activeTab > 3 }"
                                            @click="toggleTab(3, 100);">3</BButton>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div class="tab-pane fade" :class="activeTab == 1 && 'show active'" id="pills-gen-info"
                                    role="tabpanel" aria-labelledby="pills-gen-info-tab">
                                    <div>
                                        <div class="mb-4">
                                            <div>
                                                <h5 class="mb-1">General Information</h5>
                                                <p class="text-muted">Fill all Information as below</p>
                                            </div>
                                        </div>
                                        <BRow>
                                            <BCol lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="gen-info-email-input">Email</label>
                                                    <input type="text" class="form-control" id="gen-info-email-input"
                                                        placeholder="Enter Email">
                                                </div>
                                            </BCol>
                                            <BCol lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="gen-info-username-input">User
                                                        Name</label>
                                                    <input type="text" class="form-control" id="gen-info-username-input"
                                                        placeholder="Enter User Name">
                                                </div>
                                            </BCol>
                                        </BRow>
                                        <div class="mb-3">
                                            <label class="form-label" for="gen-info-password-input">Password</label>
                                            <input type="password" class="form-control" id="gen-info-password-input"
                                                placeholder="Enter Password">
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton variant="success" class="btn-label right ms-auto nexttab nexttab"
                                            @click="toggleTab(2, 50);"><i
                                                class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Go to
                                            more info</BButton>
                                    </div>
                                </div>


                                <div class="tab-pane fade" :class="activeTab == 2 && 'show active'" id="pills-info-desc"
                                    role="tabpanel" aria-labelledby="pills-info-desc-tab">
                                    <div>
                                        <div class="text-center">
                                            <div class="profile-user position-relative d-inline-block mx-auto mb-2">
                                                <img src="@/assets/images/users/user-dummy-img.jpg"
                                                    class="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                                    alt="user-profile-image">
                                                <div
                                                    class="avatar-xs p-0 rounded-circle profile-photo-edit position-absolute end-0 bottom-0">
                                                    <input id="profile-img-file-input" type="file"
                                                        class="profile-img-file-input d-none"
                                                        accept="image/png, image/jpeg">
                                                    <label for="profile-img-file-input"
                                                        class="profile-photo-edit avatar-xs cursor-pointer">
                                                        <span class="avatar-title rounded-circle bg-light text-body">
                                                            <i class="ri-camera-fill"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <h5 class="fs-md">Add Image</h5>

                                        </div>
                                        <div>
                                            <label class="form-label" for="gen-info-description-input">Description</label>
                                            <textarea class="form-control" placeholder="Enter Description"
                                                id="gen-info-description-input" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton variant="link" class="text-decoration-none btn-label previestab"
                                            @click="toggleTab(1, 0);"><i
                                                class="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i> Back to
                                            General</BButton>
                                        <BButton variant="success" class="btn-label right ms-auto nexttab nexttab"
                                            @click="toggleTab(3, 100);"><i
                                                class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit
                                        </BButton>
                                    </div>
                                </div>

                                <div class="tab-pane fade" :class="activeTab == 3 && 'show active'" id="pills-success"
                                    role="tabpanel" aria-labelledby="pills-success-tab">
                                    <div>
                                        <div class="text-center pt-4 pb-2">

                                            <div class="pb-5">
                                                <div class="avatar-md mx-auto">

                                                    <div class="mb-4">
                                                        <lottie colors="primary:#0ab39c,secondary:#405189"
                                                            :options="defaultOptions" :height="120" :width="120" />
                                                    </div>

                                                </div>
                                            </div>
                                            <h5>Well Done !</h5>
                                            <p class="text-muted">You have Successfully Signed Up</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Arrow Nav Steps</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <form action="#">
                            <BLink class="navbar-brand d-block text-center pt-3 pb-4 mb-1" href="#">
                                <img src="@/assets/images/logo-dark.png" class="card-logo mx-auto card-logo-dark"
                                    alt="logo dark" height="17">
                                <img src="@/assets/images/logo-light.png" class="card-logo mx-auto card-logo-light"
                                    alt="logo light" height="17">
                            </BLink>
                            <div class="step-arrow-nav mb-4">

                                <ul class="nav nav-pills custom-nav nav-justified" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <BButton class="nav-link" id="steparrow-gen-info-tab" type="button"
                                            :class="{ active: activeTabArrow == 1, done: activeTabArrow > 1 }"
                                            @click="toggleTabArrow(1);">General</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton variant="link" class="nav-link" id="steparrow-description-info-tab"
                                            type="button" :class="{ active: activeTabArrow == 2, done: activeTabArrow > 2 }"
                                            @click="toggleTabArrow(2);">Description</BButton>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <BButton variant="link" class="nav-link" id="pills-experience-tab" type="button"
                                            :class="{ active: activeTabArrow == 3, done: activeTabArrow > 3 }"
                                            @click="toggleTabArrow(3);">Finish</BButton>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div class="tab-pane fade" :class="activeTabArrow == 1 && 'show active'"
                                    id="steparrow-gen-info" role="tabpanel" aria-labelledby="steparrow-gen-info-tab">
                                    <div>
                                        <BRow>
                                            <BCol lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label"
                                                        for="steparrow-gen-info-email-input">Email</label>
                                                    <input type="text" class="form-control"
                                                        id="steparrow-gen-info-email-input" placeholder="Enter Email">
                                                </div>
                                            </BCol>
                                            <BCol lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="steparrow-gen-info-username-input">User
                                                        Name</label>
                                                    <input type="text" class="form-control"
                                                        id="steparrow-gen-info-username-input"
                                                        placeholder="Enter User Name">
                                                </div>
                                            </BCol>
                                        </BRow>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                for="steparrow-gen-info-password-input">Password</label>
                                            <input type="password" class="form-control"
                                                id="steparrow-gen-info-password-input" placeholder="Enter Password">
                                        </div>
                                        <div>
                                            <label class="form-label"
                                                for="steparrow-gen-info-confirm-password-input">Confirm Password</label>
                                            <input type="password" class="form-control"
                                                id="steparrow-gen-info-confirm-password-input"
                                                placeholder="Enter Confirm Password">
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton variant="success" class="btn-label right ms-auto nexttab nexttab"
                                            @click="toggleTabArrow(2);"><i
                                                class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Go to
                                            more info</BButton>
                                    </div>
                                </div>

                                <div class="tab-pane fade" :class="activeTabArrow == 2 && 'show active'"
                                    id="steparrow-description-info" role="tabpanel"
                                    aria-labelledby="steparrow-description-info-tab">
                                    <div>
                                        <div class="mb-3">
                                            <label for="formFile" class="form-label">Upload Image</label>
                                            <input class="form-control" type="file" id="formFile">
                                        </div>
                                        <div>
                                            <label class="form-label" for="des-info-description-input">Description</label>
                                            <textarea class="form-control" placeholder="Enter Description"
                                                id="des-info-description-input" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <BButton variant="light" class="btn btn-light btn-label previestab"
                                            @click="toggleTabArrow(1);"><i
                                                class="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i> Back to
                                            General</BButton>
                                        <BButton variant="success"
                                            class="btn btn-success btn-label right ms-auto nexttab nexttab"
                                            @click="toggleTabArrow(3);"><i
                                                class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Submit
                                        </BButton>
                                    </div>
                                </div>

                                <div class="tab-pane fade" :class="activeTabArrow == 3 && 'show active'"
                                    id="pills-experience" role="tabpanel">
                                    <div class="text-center">

                                        <div class="avatar-md mt-5 mb-4 mx-auto">
                                            <div class="avatar-title bg-light text-success display-4 rounded-circle">
                                                <i class="ri-checkbox-circle-fill"></i>
                                            </div>
                                        </div>
                                        <h5>Well Done !</h5>
                                        <p class="text-muted">You have Successfully Signed Up</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="12">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Vertical nav Steps</BCardTitle>
                    </BCardHeader>
                    <BCardBody class="form-steps">
                        <form class="vertical-navs-step">
                            <BRow class="gy-5">
                                <BCol lg="3">
                                    <div class="nav flex-column custom-nav nav-pills" role="tablist"
                                        aria-orientation="vertical">
                                        <BButton variant="link" class="nav-link" id="v-pills-bill-info-tab" type="button"
                                            role="tab" :class="{ active: activeTabVerti == 1, done: activeTabVerti > 1 }"
                                            @click="toggleTabVerti(1);">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i> Step 1
                                            </span>
                                            Billing Info
                                        </BButton>
                                        <BButton variant="link" class="nav-link" id="v-pills-bill-address-tab" type="button"
                                            role="tab" :class="{ active: activeTabVerti == 2, done: activeTabVerti > 2 }"
                                            @click="toggleTabVerti(2);">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i> Step 2
                                            </span>
                                            Address
                                        </BButton>
                                        <BButton variant="link" class="nav-link" id="v-pills-payment-tab" type="button"
                                            role="tab" :class="{ active: activeTabVerti == 3, done: activeTabVerti > 3 }"
                                            @click="toggleTabVerti(3);">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i> Step 3
                                            </span>
                                            Payment
                                        </BButton>
                                        <BButton variant="link" class="nav-link" id="v-pills-finish-tab" type="button"
                                            role="tab" :class="{ active: activeTabVerti == 4, done: activeTabVerti > 4 }"
                                            @click="toggleTabVerti(4);">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i> Step 4
                                            </span>
                                            Finish
                                        </BButton>
                                    </div>
                                </BCol>
                                <BCol lg="6">
                                    <div class="px-lg-4">
                                        <div class="tab-content">
                                            <div class="tab-pane fade" id="v-pills-bill-info" role="tabpanel"
                                                :class="activeTabVerti == 1 && 'show active'">
                                                <div>
                                                    <h5>Billing Info</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <BRow class="g-3">
                                                        <BCol sm="6">
                                                            <label for="firstName" class="form-label">First name</label>
                                                            <input type="text" class="form-control" id="firstName"
                                                                placeholder="Enter First Name" value="">
                                                        </BCol>

                                                        <BCol sm="6">
                                                            <label for="lastName" class="form-label">Last name</label>
                                                            <input type="text" class="form-control" id="lastName"
                                                                placeholder="Enter Last Name" value="">
                                                        </BCol>

                                                        <BCol cols="12">
                                                            <label for="username" class="form-label">Username</label>
                                                            <div class="input-group">
                                                                <span class="input-group-text">@</span>
                                                                <input type="text" class="form-control" id="username"
                                                                    placeholder="Username">
                                                            </div>
                                                        </BCol>

                                                        <BCol cols="12">
                                                            <label for="email" class="form-label">Email <span
                                                                    class="text-muted">(Optional)</span></label>
                                                            <input type="email" class="form-control" id="email"
                                                                placeholder="Enter Email">
                                                        </BCol>
                                                    </BRow>
                                                </div>

                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <BButton variant="success"
                                                        class="btn-label right ms-auto nexttab nexttab"
                                                        @click="toggleTabVerti(2);">
                                                        <i
                                                            class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Go
                                                        to Shipping
                                                    </BButton>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-bill-address" role="tabpanel"
                                                :class="activeTabVerti == 2 && 'show active'">
                                                <div>
                                                    <h5>Shipping Address</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <BRow class="g-3">
                                                        <BCol cols="12">
                                                            <label for="address" class="form-label">Address</label>
                                                            <input type="text" class="form-control" id="address"
                                                                placeholder="1234 Main St">
                                                        </BCol>

                                                        <BCol cols="12">
                                                            <label for="address2" class="form-label">Address 2 <span
                                                                    class="text-muted">(Optional)</span></label>
                                                            <input type="text" class="form-control" id="address2"
                                                                placeholder="Apartment or suite">
                                                        </BCol>

                                                        <BCol md="5">
                                                            <label for="country" class="form-label">Country</label>
                                                            <select class="form-select" id="country">
                                                                <option value="">Choose...</option>
                                                                <option>United States</option>
                                                            </select>
                                                        </BCol>

                                                        <BCol md="4">
                                                            <label for="state" class="form-label">State</label>
                                                            <select class="form-select" id="state">
                                                                <option value="">Choose...</option>
                                                                <option>California</option>
                                                            </select>
                                                        </BCol>

                                                        <BCol md="3">
                                                            <label for="zip" class="form-label">Zip</label>
                                                            <input type="text" class="form-control" id="zip" placeholder="">
                                                        </BCol>
                                                    </BRow>

                                                    <hr class="my-4 text-muted">

                                                    <div class="form-check mb-2">
                                                        <input type="checkbox" class="form-check-input" id="same-address">
                                                        <label class="form-check-label" for="same-address">Shipping address
                                                            is the same as my billing address</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" id="save-info">
                                                        <label class="form-check-label" for="save-info">Save this
                                                            information for next time</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <BButton variant="light" type="button" class="btn-label previestab"
                                                        @click="toggleTabVerti(1);"><i
                                                            class="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i>
                                                        Back to Billing Info</BButton>
                                                    <BButton variant="success" type="button"
                                                        class="btn-label right ms-auto nexttab nexttab"
                                                        @click="toggleTabVerti(3);"><i
                                                            class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>Go
                                                        to Payment</BButton>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-payment" role="tabpanel"
                                                :class="activeTabVerti == 3 && 'show active'">
                                                <div>
                                                    <h5>Payment</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <div class="my-3">
                                                        <div class="form-check form-check-inline">
                                                            <input id="credit" name="paymentMethod" type="radio"
                                                                class="form-check-input" checked required>
                                                            <label class="form-check-label" for="credit">Credit card</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input id="debit" name="paymentMethod" type="radio"
                                                                class="form-check-input" required>
                                                            <label class="form-check-label" for="debit">Debit card</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input id="paypal" name="paymentMethod" type="radio"
                                                                class="form-check-input" required>
                                                            <label class="form-check-label" for="paypal">PayPal</label>
                                                        </div>
                                                    </div>

                                                    <BRow class="gy-3">
                                                        <BCol md="12">
                                                            <label for="cc-name" class="form-label">Name on card</label>
                                                            <input type="text" class="form-control" id="cc-name"
                                                                placeholder="" required>
                                                            <small class="text-muted">Full name as displayed on card</small>
                                                            <div class="invalid-feedback">
                                                                Name on card is required
                                                            </div>
                                                        </BCol>

                                                        <BCol md="6">
                                                            <label for="cc-number" class="form-label">Credit card
                                                                number</label>
                                                            <input type="text" class="form-control" id="cc-number"
                                                                placeholder="" required>
                                                            <div class="invalid-feedback">
                                                                Credit card number is required
                                                            </div>
                                                        </BCol>

                                                        <BCol md="3">
                                                            <label for="cc-expiration" class="form-label">Expiration</label>
                                                            <input type="text" class="form-control" id="cc-expiration"
                                                                placeholder="" required>
                                                            <div class="invalid-feedback">
                                                                Expiration date required
                                                            </div>
                                                        </BCol>

                                                        <BCol md="3">
                                                            <label for="cc-cvv" class="form-label">CVV</label>
                                                            <input type="text" class="form-control" id="cc-cvv"
                                                                placeholder="" required>
                                                            <div class="invalid-feedback">
                                                                Security code required
                                                            </div>
                                                        </BCol>
                                                    </BRow>
                                                </div>

                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <BButton variant="light" class="btn-label previestab"
                                                        @click="toggleTabVerti(2);"><i
                                                            class="ri-arrow-left-line label-icon align-middle fs-lg me-2"></i>
                                                        Back to Shipping Info</BButton>
                                                    <BButton variant="success"
                                                        class="btn-label right ms-auto nexttab nexttab"
                                                        @click="toggleTabVerti(4);"><i
                                                            class="ri-arrow-right-line label-icon align-middle fs-lg ms-2"></i>
                                                        Order Complete</BButton>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-finish" role="tabpanel"
                                                :class="activeTabVerti == 4 && 'show active'">
                                                <div class="text-center pt-4 pb-2">
                                                    <div class="mb-4">
                                                        <lottie colors="primary:#0ab39c,secondary:#405189"
                                                            :options="defaultOptions" :height="120" :width="120" />
                                                    </div>
                                                    <h5>Your Order is Completed !</h5>
                                                    <p class="text-muted">You Will receive an order confirmation
                                                        email
                                                        with details of your order.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol lg="3">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h5 class="fs-14 text-primary mb-0"><i
                                                class="ri-shopping-cart-fill align-middle me-2"></i> Your cart</h5>
                                        <span class="badge bg-danger rounded-pill">3</span>
                                    </div>
                                    <ul class="list-group mb-3">
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Product name</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$12</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Second product</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$8</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Third item</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$5</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between bg-light">
                                            <div class="text-success">
                                                <h6 class="my-0">Discount code</h6>
                                                <small>−$5 Discount</small>
                                            </div>
                                            <span class="text-success">−$5</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>$20</strong>
                                        </li>
                                    </ul>
                                </BCol>
                            </BRow>

                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
