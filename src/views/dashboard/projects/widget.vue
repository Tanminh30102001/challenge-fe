<script>
import { BriefcaseIcon, AwardIcon, ClockIcon } from '@zhuowenli/vue-feather-icons';

export default {
  setup() {
    return {
      projectsWidgets: [
        {
          id: 1,
          feaIcon: "briefcase",
          feaIconClass: "primary",
          label: "Active Projects",
          counter: "825",
          suffix: "",
          badgeClass: "danger",
          icon: "ri-arrow-down-s-line",
          percentage: "5.02 %",
          caption: "Projects this month",
        },
        {
          id: 2,
          feaIcon: "award",
          feaIconClass: "warning",
          label: "New Leads",
          counter: "7522",
          separator: ",",
          suffix: "",
          badgeClass: "success",
          icon: "ri-arrow-up-s-line",
          percentage: "3.58 %",
          caption: "Leads this month",
        },
        {
          id: 3,
          feaIcon: "clock",
          feaIconClass: "info",
          label: "Total Hours",
          counter: "168h 40m",
          suffix: "m",
          badgeClass: "danger",
          icon: "ri-arrow-down-s-line",
          percentage: "10.35 %",
          caption: "Work this month",
        },
      ],
    };
  },
  components: {
    BriefcaseIcon,
    AwardIcon,
    ClockIcon
  },
};
</script>

<template>
  <BCol xl="4" v-for="(item, index) of projectsWidgets" :key="index">
    <BCard no-body class="card-animate">
      <BCardBody>
        <div class="d-flex align-items-center">
          <div class="avatar-sm flex-shrink-0">
            <span class="avatar-title rounded-2 fs-2" :class="{
              'bg-primary-subtle text-primary': item.feaIconClass === 'primary',
              'bg-warning-subtle text-warning': item.feaIconClass === 'warning',
              'bg-info-subtle text-info': item.feaIconClass === 'info'
            }">
              <template v-if="item.feaIcon == 'briefcase'">
                <BriefcaseIcon size="24" class="text-primary"></BriefcaseIcon>
              </template>

              <template v-if="item.feaIcon == 'award'">
                <AwardIcon size="24" class="text-warning"></AwardIcon>
              </template>

              <template v-if="item.feaIcon == 'clock'">
                <ClockIcon size="24" class="text-info"></ClockIcon>
              </template>
            </span>
          </div>
          <div class="flex-grow-1 overflow-hidden ms-3">
            <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
              {{ item.label }}
            </p>
            <div class="d-flex align-items-center mb-3">
              <h4 class="fs-4 flex-grow-1 mb-0">
                <span class="counter-value">{{
                    item.counter
                }}</span>
              </h4>
              <span :class="{'badge bg-danger-subtle text-danger fs-12': item.icon == 'ri-arrow-down-s-line', 'badge bg-success-subtle text-success fs-12': item.icon == 'ri-arrow-up-s-line' }"><i :class="`${item.icon} fs-13 align-middle me-1`"></i>{{ item.percentage }}</span>
            </div>
            <p class="text-muted text-truncate mb-0">{{ item.caption }}</p>
          </div>
        </div>
      </BCardBody>
    </BCard>
  </BCol>
</template>
