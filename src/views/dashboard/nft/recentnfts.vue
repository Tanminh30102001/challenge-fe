<template>
    <BCard no-body>
        <BCardHeader class="align-items-center d-flex py-0">
            <BCardTitle class="mb-0 flex-grow-1">Recent NFTs</BCardTitle>
            <div class="flex-shrink-0">
                <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
                    menu-class="dropdown-menu-end" aria-haspopup="true"
                    :offset="{ alignmentAxis: -30, crossAxis: 0, mainAxis: 0 }">
                    <template #button-content> <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                            class="text-muted">Popular
                            <i class="mdi mdi-chevron-down ms-1"></i></span>
                    </template>
                    <BDropdownItem>Popular</BDropdownItem>
                    <BDropdownItem>Newest</BDropdownItem>
                    <BDropdownItem>Oldest</BDropdownItem>
                </BDropdown>
            </div>
        </BCardHeader>
        <BCardBody>
            <div class="table-responsive table-card">
                <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                    <thead class="text-muted bg-light-subtle">
                        <tr>
                            <th>Collection</th>
                            <th>Volume</th>
                            <th>24h %</th>
                            <th>Creators</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="@/assets/images/nft/img-01.jpg" alt="" class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">Abstract Face
                                                Painting</router-link>
                                        </h6>
                                        <p class="text-muted fs-13 mb-0"> Artworks</p>
                                    </div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/btc.svg" class="avatar-xxs me-2"
                                    alt="">48,568.025</td>
                            <td>
                                <span class="text-success mb-0"><i class="mdi mdi-trending-up align-middle me-1"></i>5.26
                                </span>
                            </td>
                            <td>6.8K</td>
                            <td>18.0K</td>
                        </tr>

                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">Long-tailed
                                                Macaque</router-link>
                                        </h6>
                                        <p class="text-muted fs-13 mb-0"> Games</p>
                                    </div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/ltc.svg" class="avatar-xxs me-2"
                                    alt="">87,142.027</td>
                            <td>
                                <span class="text-danger mb-0"><i class="mdi mdi-trending-down align-middle me-1"></i>3.07
                                </span>
                            </td>
                            <td>2.6K</td>
                            <td>6.3K</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="@/assets/images/nft/img-06.jpg" alt="" class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">Robotic Body
                                                Art</router-link>
                                        </h6>
                                        <p class="text-muted fs-13 mb-0"> Photography</p>
                                    </div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/etc.svg" class="avatar-xxs me-2"
                                    alt="">33,847.961</td>
                            <td>
                                <span class="text-success mb-0"><i class="mdi mdi-trending-up align-middle me-1"></i>7.13
                                </span>
                            </td>
                            <td>7.5K</td>
                            <td>14.6K</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="@/assets/images/nft/img-04.jpg" alt="" class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">Smillevers
                                                Crypto</router-link>
                                        </h6>
                                        <p class="text-muted mb-0">Artworks</p>
                                    </div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/dash.svg" class="avatar-xxs me-2"
                                    alt="">73,654.421</td>
                            <td>
                                <span class="text-success mb-0"><i class="mdi mdi-trending-up align-middle me-1"></i>0.97
                                </span>
                            </td>
                            <td>5.3K</td>
                            <td>36.4K</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="@/assets/images/nft/img-03.jpg" alt="" class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">Creative
                                                Filtered Portrait</router-link>
                                        </h6>
                                        <p class="text-muted fs-13 mb-0"> 3d Style</p>
                                    </div>
                                    <div class="flex-grow-1"></div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/bnb.svg" class="avatar-xxs me-2"
                                    alt="">66,742.077</td>
                            <td>
                                <span class="text-danger mb-0"><i class="mdi mdi-trending-down align-middle me-1"></i>1.08
                                </span>
                            </td>
                            <td>3.1K</td>
                            <td>12.4K</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img src="@/assets/images/nft/img-02.jpg" alt="" class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">
                                            <router-link to="/apps/nft-item-detail" class="text-body">The
                                                Chirstoper</router-link>
                                        </h6>
                                        <p class="text-muted fs-13 mb-0"> Crypto Card</p>
                                    </div>
                                </div>
                            </td>
                            <td><img src="@/assets/images/svg/crypto-icons/usdt.svg" class="avatar-xxs me-2"
                                    alt="">34,736.209</td>
                            <td>
                                <span class="text-success mb-0"><i class="mdi mdi-trending-up align-middle me-1"></i>4.52
                                </span>
                            </td>
                            <td>7.2K</td>
                            <td>25.0K</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </BCardBody>
    </BCard>
</template>