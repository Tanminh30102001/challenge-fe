<script>
export default {
  setup() {
    return {
      newsFeed: [
        {
          id: 1,
          img: require("@/assets/images/small/img-1.jpg"),
          caption:
            "One stop shop destination on all the latest news in crypto currencies",
          date: "Dec 12, 2021",
          time: "09:22 AM",
        },
        {
          id: 2,
          img: require("@/assets/images/small/img-2.jpg"),
          caption:
            "Coin Journal is dedicated to delivering stories on the latest crypto",
          date: "Dec 03, 2021",
          time: "12:09 PM",
        },
        {
          id: 3,
          img: require("@/assets/images/small/img-3.jpg"),
          caption:
            "The bitcoin-holding U.S. senator is trying to “fully integrate” crypto ",
          date: "Nov 22, 2021",
          time: "11:47 AM",
        },
        {
          id: 4,
          img: require("@/assets/images/small/img-6.jpg"),
          caption:
            "Cryptocurrency price like Bitcoin, Dash, Dogecoin, Ripple and Litecoin",
          date: "Nov 18, 2021",
          time: "06:13 PM",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">News Feed</BCardTitle>
      <div>
        <BButton type="button" variant="soft-primary" size="sm">
          View all
        </BButton>
      </div>
    </BCardHeader>

    <BCardBody>
      <div class="d-flex align-middle mb-4" v-for="(item, index) of newsFeed" :key="index">
        <div class="flex-shrink-0">
          <img :src="`${item.img}`" class="rounded img-fluid" style="height: 60px" alt="" />
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1 lh-base">
            <BLink href="#" class="text-reset">{{ item.caption }}</BLink>
          </h6>
          <p class="text-muted fs-12 mb-0">
            {{ item.date }}
            <i class="mdi mdi-circle-medium align-middle mx-1"></i>{{ item.time }}
          </p>
        </div>
      </div>

      <div class="mt-3 text-center">
        <BLink href="javascript:void(0);" class="text-muted text-decoration-underline">View all News</BLink>
      </div>
    </BCardBody>
  </BCard>
</template>
