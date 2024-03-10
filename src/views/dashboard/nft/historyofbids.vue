<script>
import simplebar from 'simplebar-vue';

export default {
    components: {
        simplebar
    }
}
</script>

<template>
    <BCard no-body>
        <BCardHeader class="d-flex align-items-center">
            <h6 class="card-title mb-0 flex-grow-1">History of Bids</h6>
            <router-link class="text-muted" to="/apps/nft-item-detail">
                See All <i class="ri-arrow-right-line align-bottom"></i>
            </router-link>
        </BCardHeader>
        <BCardBody>
            <div class="table-responsive table-card">
                <simplebar data-simplebar style="max-height: 365px;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/users/avatar-10.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!" class="stretched-link">
                                        <h6 class="fs-14 mb-1">Herbert Stokes</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@herbert10</p>
                                </div>
                                <div>
                                    <h6>174.36 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/nft/img-01.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Nancy Martino</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@nancyMt</p>
                                </div>
                                <div>
                                    <h6>346.47 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/nft/img-04.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Timothy Smith</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@timothy</p>
                                </div>
                                <div>
                                    <h6>349.08 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/nft/img-06.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Glen Matney</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@matney10</p>
                                </div>
                                <div>
                                    <h6>852.34 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/users/avatar-8.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Michael Morris</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@michael</p>
                                </div>
                                <div>
                                    <h6>4.071 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/nft/img-03.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Alexis Clarke</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@alexis_30</p>
                                </div>
                                <div>
                                    <h6>30.749 ETH</h6>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <div class="d-flex align-items-center">
                                <img src="@/assets/images/nft/img-05.jpg" alt="" class="avatar-xs object-fit-cover rounded-circle">
                                <div class="ms-3 flex-grow-1">
                                    <BLink href="#!">
                                        <h6 class="fs-14 mb-1">Timothy Smith</h6>
                                    </BLink>
                                    <p class="mb-0 text-muted">@timothy</p>
                                </div>
                                <div>
                                    <h6>349.08 ETH</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </simplebar>
            </div>
        </BCardBody>
    </BCard>
</template>