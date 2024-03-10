<template>
  <div class="first-list">
  <div class="list-wrap">
    <BLink href="javascript: void(0);" class="fw-medium text-primary">{{ fullname }} {{ '(' + username + ')' }} {{ '- Revenue: ' + revenue }} </BLink>
  </div>
    <ul class="second-list list-unstyled" >
      <li  v-if="node.children && node.children.length > 0">
        <template v-for="(childNode, childIndex) in node.children" :key="childIndex">
          <TreeNode :node="childNode" />
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import config from "../../../globalConfig"

export default {
  props: ['node'],
  data() {
    return {
      username: null,
      fullname: null,
      revenue: 0
    }
  },
  methods:{
    async getName(id) {
        await axios
            .get(config.API_URL + '/getUserName/' + id)
            .then((res) => {
                this.username = res.data.username;
                this.fullname = res.data.fullname;
                this.revenue = res.data.revenue;
            })
            .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.getName(this.node.user_id);
  }
};
</script>
