<script>
export default {

};
</script>

<template>
    <BCard no-body class="card-height-100" style="position: relative;">
        <BCardHeader class="align-items-center border-0 d-flex">
            <BCardTitle class="mb-0 flex-grow-1">Trading</BCardTitle>
        </BCardHeader>
        <BCardBody class="p-0">
            <BTabs id="popularPropertyContent"
                nav-class="nav-tabs-custom rounded card-header-tabs border-bottom-0 tab-content p-0 tamp"
                pills>
                <BTab title="Buy">
                    <div class="p-3 bg-warning-subtle">
                        <div class="float-end ms-2">
                            <h6 class="text-warning mb-0">USD Balance : <span class="text-body">$12,426.07</span></h6>
                        </div>
                        <h6 class="mb-0 text-danger">Buy Coin</h6>
                    </div>
                    <div class="p-3">
                        <BRow>
                            <BCol cols="6">
                                <div class="mb-3">
                                    <label>Currency :</label>
                                    <select class="form-select">
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>LTC</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol cols="6">
                                <div class="mb-3">
                                    <label>Payment Method :</label>
                                    <select class="form-select">
                                        <option>Wallet Balance</option>
                                        <option>Credit / Debit Card</option>
                                        <option>PayPal</option>
                                        <option>Payoneer</option>
                                    </select>
                                </div>
                            </BCol>
                        </BRow>
                        <div>
                            <div class="input-group mb-3">
                                <label class="input-group-text">Amount</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>

                            <div class="input-group mb-3">
                                <label class="input-group-text">Price</label>
                                <input type="text" class="form-control" placeholder="2.045585">
                                <label class="input-group-text">$</label>
                            </div>

                            <div class="input-group mb-0">
                                <label class="input-group-text">Total</label>
                                <input type="text" class="form-control" placeholder="2700.16">
                            </div>
                        </div>
                        <div class="mt-3 pt-2">
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Transaction Fees<span class="text-muted ms-1 fs-11">(0.05%)</span>
                                    </p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">$1.08</h6>
                                </div>
                            </div>
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Minimum Received<span class="text-muted ms-1 fs-11">(2%)</span>
                                    </p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">$7.85</h6>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Estimated Rate</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">1 BTC ~ $34572.00</h6>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 pt-2">
                            <BButton type="button" variant="primary" class="w-100">Buy Coin</BButton>
                        </div>
                    </div>
                </BTab>

                <BTab title="Sell">
                    <div class="p-3 bg-warning-subtle">
                        <div class="float-end ms-2">
                            <h6 class="text-warning mb-0">USD Balance : <span class="text-body">$12,426.07</span></h6>
                        </div>
                        <h6 class="mb-0 text-danger">Sell Coin</h6>
                    </div>
                    <div class="p-3">
                        <BRow>
                            <BCol cols="6">
                                <div class="mb-3">
                                    <label>Currency :</label>
                                    <select class="form-select">
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>LTC</option>
                                    </select>
                                </div>
                            </BCol>
                            <BCol cols="6">
                                <div class="mb-3">
                                    <label>Email :</label>
                                    <input type="email" class="form-control" placeholder="example@email.com">
                                </div>
                            </BCol>
                        </BRow>
                        <div>
                            <div class="input-group mb-3">
                                <label class="input-group-text">Amount</label>
                                <input type="text" class="form-control" placeholder="0">
                            </div>
                            <div class="input-group mb-3">
                                <label class="input-group-text">Price</label>
                                <input type="text" class="form-control" placeholder="2.045585">
                                <label class="input-group-text">$</label>
                            </div>
                            <div class="input-group mb-0">
                                <label class="input-group-text">Total</label>
                                <input type="text" class="form-control" placeholder="2700.16">
                            </div>
                        </div>
                        <div class="mt-3 pt-2">
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Transaction Fees<span class="text-muted ms-1 fs-11">(0.05%)</span>
                                    </p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">$1.08</h6>
                                </div>
                            </div>
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Minimum Received<span class="text-muted ms-1 fs-11">(2%)</span>
                                    </p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">$7.85</h6>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1">
                                    <p class="fs-13 mb-0">Estimated Rate</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <h6 class="mb-0">1 BTC ~ $34572.00</h6>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 pt-2">
                            <BButton type="button" variant="danger" class="w-100">Sell Coin</BButton>
                        </div>
                    </div>
                </BTab>
            </BTabs>
        </BCardBody>
    </BCard>
</template>

<style>
.tamp{
    position: absolute;
    top: 16px;
    right: 16px;
}
</style>