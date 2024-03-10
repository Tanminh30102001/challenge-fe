<script>
import {
  ArrowDownCircleIcon,
  SendIcon,
  ArrowUpCircleIcon
} from '@zhuowenli/vue-feather-icons';

import simplebar from "simplebar-vue";

export default {
  setup() {
    return {
      recentActivity: [
        { id: 1, date: "25 Dec 2021", isDate: true },
        {
          id: 2,
          feaIcon: "arrow-down-circle",
          feaIconClass: "success",
          label: "Bought Bitcoin",
          caption: "Visa Debit Card ***6",
          captionColor: "success",
          coinActivity: "+0.04025745",
          coinActivityClass: "success",
          coinName: "Btc",
          price: "+878.52",
        },
        {
          id: 3,
          feaIcon: "send",
          feaIconClass: "warning",
          label: "Sent Ethereum",
          caption: " Sofia Cunha",
          captionColor: "warning",
          coinActivity: "-0.09025182",
          coinActivityClass: "muted",
          coinName: "Eth",
          price: "-659.35",
        },
        { id: 4, date: "24 Dec 2021", isDate: true },
        {
          id: 5,
          feaIcon: "arrow-up-circle",
          feaIconClass: "danger",
          label: "Sell Dash",
          caption: "www.cryptomarket.com",
          captionColor: "danger",
          coinActivity: "-98.6025422",
          coinActivityClass: "danger",
          coinName: "Dash",
          price: "-1508.98",
        },
        {
          id: 6,
          feaIcon: "arrow-up-circle",
          feaIconClass: "danger",
          label: "Sell Dogecoin",
          caption: "www.coinmarket.com",
          captionColor: "success",
          coinActivity: "-1058.08025142",
          coinActivityClass: "danger",
          coinName: "Doge",
          price: "-89.3",
        },
        {
          id: 7,
          feaIcon: "arrow-up-circle",
          feaIconClass: "success",
          label: "Bought Litecoin",
          caption: "Payment via Wallet",
          captionColor: "warning",
          coinActivity: "+0.07225912",
          coinActivityClass: "success",
          coinName: "Ltc",
          price: "+759.45",
        },
        { id: 8, date: "20 Dec 2021", isDate: true },
        {
          id: 9,
          feaIcon: "send",
          feaIconClass: "warning",
          label: "Sent Ethereum",
          caption: " Sofia Cunha",
          captionColor: "warning",
          coinActivity: "-0.09025182",
          coinActivityClass: "muted",
          coinName: "Eth",
          price: "-659.35",
        },
        {
          id: 10,
          feaIcon: "arrow-down-circle",
          feaIconClass: "success",
          label: "Bought Bitcoin",
          caption: "Visa Debit Card ***6",
          captionColor: "success",
          coinActivity: "+0.04025745",
          coinActivityClass: "success",
          coinName: "Btc",
          price: "+878.52",
        },
      ],
    };
  },
  components: {
    ArrowDownCircleIcon,
    SendIcon,
    ArrowUpCircleIcon,
    simplebar
  }
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex py-0">
      <BCardTitle class="mb-0 flex-grow-1">Recent Activity</BCardTitle>
      <div class="flex-shrink-0">
        <BDropdown variant="link" class="card-header-dropdown" toggle-class="text-reset dropdown-btn arrow-none"
          menu-class="dropdown-menu-end" aria-haspopup="true" :offset="{ alignmentAxis: 3, crossAxis: 0, mainAxis: 0 }">
          <template #button-content><span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
              class="text-muted">Current Week<i class="mdi mdi-chevron-down ms-1"></i></span>
          </template>
          <BDropdownItem>Today</BDropdownItem>
          <BDropdownItem>Last Week</BDropdownItem>
          <BDropdownItem>Last Month</BDropdownItem>
          <BDropdownItem>Current Year</BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>
    <BCardBody class="p-0">
      <simplebar data-simplebar style="height: 390px">
        <div class="p-3">

          <template v-for="(item, index) of recentActivity" :key="index">
            <div class="d-flex align-items-center mb-3" v-if="item.isDate != true">
              <div class="avatar-xs flex-shrink-0">
                <span class="avatar-title bg-light rounded-circle">
                  <template v-if="item.feaIcon == 'arrow-up-circle'">
                    <ArrowUpCircleIcon class="icon-dual-danger icon-sm">

                    </ArrowUpCircleIcon>
                  </template>
                  <template v-if="item.feaIcon == 'arrow-down-circle'">
                    <arrow-down-circle-icon class="icon-dual-success icon-sm"></arrow-down-circle-icon>
                  </template>
                  <template v-if="item.feaIcon == 'send'">
                    <SendIcon class="icon-dual-warning icon-sm">

                    </SendIcon>
                  </template>
                </span>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="fs-14 mb-1">{{ item.label }}</h6>
                <p class="text-muted fs-12 mb-0">
                  <i class="mdi mdi-circle-medium text-success fs-15 align-middle"></i>
                  {{ item.caption }}
                </p>
              </div>
              <div class="flex-shrink-0 text-end">
                <h6 :class="`mb-1 text-${item.coinActivityClass}`">
                  {{ item.coinActivity }}<span class="text-uppercase ms-1">{{ item.coinName }}</span>
                </h6>
                <p class="text-muted fs-13 mb-0">{{ item.price }} USD</p>
              </div>
            </div>

            <h6 v-if="item.isDate == true" class="text-muted text-uppercase mb-3 fs-11">{{ item.date }}</h6>
          </template>
          <div class="mt-3 text-center">
            <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">Load More</BLink>
          </div>
        </div>
      </simplebar>
    </BCardBody>
  </BCard>
</template>
