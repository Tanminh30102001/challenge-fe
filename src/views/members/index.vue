<script>
import Layout from "@/layouts/main.vue";
import config from "../../../globalConfig"
import PageHeader from "@/components/page-header";
import axios from 'axios';
import { format } from 'date-fns';
import TreeNode from './TreeNode.vue'

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            refUserData: null,
            datatRefTree:null
        }
    },
    components: {
        Layout,
        PageHeader,TreeNode,
    },
    computed: {},
    created() {
        this.getAccountRef1();
        this.getRefTree();
    },
    methods: {
        async getAccountRef1() {
            await axios
                .get(config.API_URL + '/user/getref/' + localStorage.getItem('account_ID'))
                .then((res) => {
                    this.refUserData = res.data;
                })
                .catch((e) => console.log(e));
        },
        formatDate(isoDateString) {
            return format(new Date(isoDateString), "dd MMM, HH:mm");
        },
        async getRefTree() {
            await axios
                .get(config.API_URL + '/user/getreferral/' + localStorage.getItem('account_ID'))
                .then((res) => {
                    // this.datatRefTree = res.data;
                    this.datatRefTree = this.parseData(res.data);
                })
                .catch((e) => console.log(e));
        },
        parseData(data, parentId = null) {
            const users = [];
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const user_id = key;
                    const userData = data[key];
                    const user = {
                    user_id: user_id,
                    children: [], // Initialize children array
                    // Add more properties if needed
                    };
                    // If parentId is not null, add parentId to the user object
                    if (parentId !== null) {
                    user.parentId = parentId;
                    }
                    // Recursively parse children
                    if (Object.keys(userData).length > 0) {
                    user.children = this.parseData(userData, user_id);
                    }
                    users.push(user);
                }
            }
            return users;
        },
        getAvatar(){

            return '@/assets/images/users/avatar-2.jpg';
        }
    }
};
</script>

<template>
  <Layout>
    <PageHeader title="Member" pageTitle="Pages" />
    <!-- ----------------------- -->
    <BRow>
      <BCol xl="12">
          <BCard no-body>
              <CardHeader title="Responsive Tables" />
              <BCardBody>
                  <div class="live-preview">
                      <div class="table-responsive">
                          <table class="table align-middle table-nowrap mb-0">
                              <thead class="table-light">
                                  <tr>
                                      <th scope="col" style="width: 42px;">
                                          <div class="form-check">
                                              <input class="form-check-input" type="checkbox" value=""
                                                  id="responsivetableCheck">
                                              <label class="form-check-label" for="responsivetableCheck"></label>
                                          </div>
                                      </th>
                                      <th scope="col">Username</th>
                                      <th scope="col">Email</th>
                                      <th scope="col">Full name</th>
                                      <th scope="col">Country</th>
                                      <th scope="col">Date</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <template v-if="refUserData && refUserData.length > 0">
                                        <tr v-for="(item, index) in refUserData" :key="index">
                                            <th scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="responsivetableCheck01">
                                                    <label class="form-check-label" for="responsivetableCheck01"></label>
                                                </div>
                                            </th>
                                            <td>
                                                <BLink  href="#" class="fw-medium">@{{ item.username }}</BLink >
                                            </td>
                                            
                                            <td>{{ item.email }}</td>
                                                
                                            <td>
                                                <div class="d-flex gap-2 align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                            class="avatar-xs rounded-circle" v-if="!item.avatar"/>
                                                            <!-- <img :src="item.avatar ? `@/assets/images/users/${item.avatar}` : `@/assets/images/users/avatar-3.jpg`" alt="" class="avatar-xs rounded-circle" /> -->

                                                            <img :src="getAvatar()" alt=""
                                                            class="avatar-xs rounded-circle" v-else />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        {{ item.fullname }}
                                                    </div>
                                                </div>
                                            </td>
                                            <td > {{ item.country_name }}</td>
                                            <td>{{ formatDate(item.created_at) }}</td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center"><i class="ri-information-fill"></i>Data not found</td>
                                        </tr>
                                    </template>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </BCardBody>
          </BCard> 
      </BCol>
    </BRow>
    <BCard no-body>
      <BCardHeader>
          <BCardTitle class="mb-0">Volume</BCardTitle>
      </BCardHeader>
      <BCardBody>
        <BRow>
          <BCol sm="12">
              <div class="verti-sitemap">
                  <ul class="list-unstyled mb-0">
                      <li class="p-0 parent-title">
                          <BLink href="javascript: void(0);" class="fw-medium fs-14">{{ user.fullname }} ({{ user.username }})</BLink>
                      </li>
                      <li>
                            <template v-for="(node, index) in datatRefTree" :key="index">
                                <TreeNode :node="node" />
                            </template>
                      </li>
                  </ul>
              </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>

  
    
      
  </Layout>
</template>