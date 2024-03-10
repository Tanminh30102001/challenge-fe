<script>
import Layout from "@/layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
      searchQuery: null,
      data: [{
        id: 1,
        name: "Janathan",
        email: "jonathan@example.com",
        position: "Senior Implementation Architect",
        company: "Koelpin - Goldner",
        country: "Vanuatu",
      },
      {
        id: 2,
        name: "Harold",
        email: "harold@example.com",
        position: "Forward Creative Coordinator",
        company: "Feeney, Langworth and Tremblay",
        country: "Niger",
      },
      {
        id: 3,
        name: "Shannan",
        email: "shannon@example.com",
        position: "Legacy Functionality Associate",
        company: "Streich Group",
        country: "Niue",
      },
      {
        id: 4,
        name: "Robert",
        email: "robert@example.com",
        position: "Product Accounts Technician",
        company: "Ebert, Schamberger and Johnston",
        country: "Mexico",
      },
      {
        id: 5,
        name: "Noel",
        email: "noel@example.com",
        position: "Customer Data Director",
        company: "Raynor, Rolfson and Daugherty",
        country: "Qatar",
      },
      {
        id: 6,
        name: "Tracl",
        email: "traci@example.com",
        position: "Corporate Identity Director",
        company: "Hauck Inc",
        country: "Holy See",
      },
      {
        id: 7,
        name: "Kerry",
        email: "kerry@example.com",
        position: "Lead Applications Associate",
        company: "Metz Inc",
        country: "Iran",
      },
      {
        id: 8,
        name: "Patsy",
        email: "patsy@example.com",
        position: "Dynamic Assurance Director",
        company: "Zemlak Group",
        country: "South Georgia",
      },
      {
        id: 9,

        name: "Cathy",
        email: "cathy@example.com",
        position: "Customer Data Director",
        company: "Hoeger",
        country: "San Marino",
      },
      {
        id: 10,
        name: "Tyrone",
        email: "yrone@example.com",
        position: "Senior Response Liaison",
        company: "Howell - Rippin",
        country: "Germany",
      },
      ],
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.data);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.id.toLowerCase().includes(search) ||
            data.name.toLowerCase().includes(search) ||
            data.email.toLowerCase().includes(search) ||
            data.position.toLowerCase().includes(search) ||
            data.company.toLowerCase().includes(search) ||
            data.country.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.data.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(data) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return data.slice(from, to);
    },
    onSort(column) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...this.data];
      sortedArray.sort((a, b) => {
        const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
        return this.direction === 'asc' ? res : -res;
      });
      this.data = sortedArray;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Grid Js" pageTitle="Tables" />
    <BRow>
      <BCard no-body class="card-body">
        <BCardBody>
          <div class="table-responsive table-card">
            <table class="table align-middle table-nowrap" id="customerTable">
              <thead class="table-light text-muted">
                <tr>
                  <th class="sort" data-sort="currency_name" scope="col" @click="onSort('id')">ID</th>
                  <th class="sort" data-sort="current_value" scope="col" @click="onSort('name')">Name</th>
                  <th class="sort" data-sort="pairs" scope="col" @click="onSort('email')">Email</th>
                  <th class="sort" data-sort="high" scope="col" @click="onSort('position')">Position</th>
                  <th class="sort" data-sort="low" scope="col" @click="onSort('company')">Company</th>
                  <th class="sort" data-sort="market_cap" scope="col" @click="onSort('country')">Country</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody class="list form-check-all">
                <tr v-for="(data, index) of resultQuery" :key="index">
                  <td class="id">
                    {{ data.id }}
                  </td>
                  <td>{{ data.name }}</td>
                  <td class="pairs">{{ data.email }}</td>
                  <td class="high">{{ data.position }}</td>
                  <td class="low">{{ data.company }}</td>
                  <td class="market_cap">{{ data.country }}</td>
                  <td>
                    <span>
                      <BLink  href="#" class="text-reset text-decoration-underline">Details</BLink >
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-end mt-3" v-if="resultQuery.length >= 1">
            <div class="pagination-wrap hstack gap-2">
              <BLink  class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                Previous
              </BLink >
              <ul class="pagination listjs-pagination mb-0">
                <li :class="{
                  active: pageNumber == page,
                  disabled: pageNumber == '...',
                }" v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)" :key="index"
                  @click="page = pageNumber">
                  <BLink  class="page" href="#">{{ pageNumber }}</BLink >
                </li>
              </ul>
              <BLink  class="page-item pagination-next" href="#" :disabled="page >= pages.length" @click="page++">
                Next
              </BLink >
            </div>
          </div>
        </BCardBody>
      </BCard> 
    </BRow>
  </Layout>
</template>