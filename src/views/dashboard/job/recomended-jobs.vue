<script>
export default {
    data() {
        return {
            searchQuery: null,
            page: 1,
            perPage: 6,
            pages: [],
            recomendedjob: [
                {
                    id: '1',
                    position: 'Assistant / Store Keeper',
                    c_name: 'Moetic Fashion',
                    location: 'Limestone, US',
                    salary: '$340 - $800',
                    experience: '0-3 year',
                    job_type: 'Internship'
                },
                {
                    id: '2',
                    position: 'Education Training',
                    c_name: 'Micro Design',
                    location: 'Germany',
                    salary: '$750 - $940',
                    experience: '1.5+ year',
                    job_type: 'Freelancer'
                },
                {
                    id: '3',
                    position: 'Executive, HR Operations',
                    c_name: 'Micro Design',
                    location: 'Texanna, US',
                    salary: '$50 - $120',
                    experience: '1-5 year',
                    job_type: 'Part Time'
                },
                {
                    id: '4',
                    position: 'Full Stack Engineer',
                    c_name: 'Syntyce Solutions',
                    location: 'Zuweihir, UAE',
                    salary: '$650 - $900',
                    experience: '0-1+ year',
                    job_type: 'Full Time'
                },
                {
                    id: '5',
                    position: 'Full Stack Engineer',
                    c_name: 'Force Medicines',
                    location: 'Ugashik, US',
                    salary: '$120 - $180',
                    experience: '2-5 year',
                    job_type: 'Part Time'
                },
                {
                    id: '6',
                    position: 'Full Stack Engineer',
                    c_name: 'Digitech Galaxy',
                    location: 'Maidaq, UAE',
                    salary: '$900 - $1020',
                    experience: '3-5 year',
                    job_type: 'Full Time'
                },
                {
                    id: '7',
                    position: 'Graphic Designer',
                    c_name: 'Digitech Galaxy',
                    location: 'Mughairah, UAE',
                    salary: '$160 - $230',
                    experience: '2-3+ year',
                    job_type: 'Full Time'
                },
                {
                    id: '8',
                    position: 'Marketing Director',
                    c_name: 'Meta4Systems',
                    location: 'Vinninga, Sweden',
                    salary: '$250 - $800',
                    experience: '0-5 year',
                    job_type: 'Full Time'
                },
                {
                    id: '9',
                    position: 'Marketing Director',
                    c_name: 'Zoetic Fashion',
                    location: 'Quesada, US',
                    salary: '$600 - $870',
                    experience: '0-5 year',
                    job_type: 'Freelancer'
                },
                {
                    id: '10',
                    position: 'Project Manager',
                    c_name: 'Themesbrand',
                    location: 'California, US',
                    salary: '$400 - $600',
                    experience: '3+ year',
                    job_type: 'Part Time'
                },
                {
                    id: '11',
                    position: 'Project Manager',
                    c_name: 'Meta4Systems',
                    location: 'Limestone, US',
                    salary: '$210 - $300',
                    experience: '0-2+ year',
                    job_type: 'Freelancer'
                },
                {
                    id: '12',
                    position: 'React Developer',
                    c_name: 'iTest Factory',
                    location: 'Khabākhib, UAE',
                    salary: '$90 - $160',
                    experience: '5+ year',
                    job_type: 'Internship'
                },
                {
                    id: '13',
                    position: 'UI/UX designer',
                    c_name: 'Zoetic Fashion',
                    location: 'Cullera, Spain',
                    salary: '$400+',
                    experience: '0-2 year',
                    job_type: 'Part Time'
                },
                {
                    id: '14',
                    position: 'Web Designer',
                    c_name: 'Force Medicines',
                    location: 'Ugashik, US',
                    salary: '$412 - $241',
                    experience: '3+ year',
                    job_type: 'Freelancer'
                }
            ]
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.recomendedjob);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.position.toLowerCase().includes(search) ||
                        data.c_name.toLowerCase().includes(search) ||
                        data.location.toLowerCase().includes(search) ||
                        data.salary.toLowerCase().includes(search) ||
                        data.experience.toLowerCase().includes(search) ||
                        data.job_type.toLowerCase().includes(search)

                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        recomendedjob() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.recomendedjob.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(recomendedjob) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return recomendedjob.slice(from, to);
        }
    },

    components: {
    },
};

</script>

<template>
    <BRow>
        <BCol lg="12">
            <BCard no-body>
                <BCardHeader>
                    <BRow class="g-4 align-items-center">
                        <BCol sm="auto">
                            <div>
                                <BCardTitle class="mb-0 flex-grow-1">Recommended Jobs</BCardTitle>
                            </div>
                        </BCol>
                        <BCol sm>
                            <div class="d-flex justify-content-sm-end">
                                <div class="search-box ms-2">
                                    <input type="text" class="form-control" id="searchResultList"
                                        placeholder="Search for jobs..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <div id="recomended-jobs" class="table-card">
                        <div role="complementary" class="gridjs gridjs-container" style="width: 100%;">
                            <div class="gridjs-wrapper" style="height: auto;">
                                <table role="grid" class="gridjs-table" style="height: auto;">
                                    <thead class="gridjs-thead">
                                        <tr class="gridjs-tr">
                                            <th data-column-id="position" class="gridjs-th gridjs-th-sort" tabindex="0">
                                                <div class="gridjs-th-content">Position</div>
                                            </th>
                                            <th data-column-id="companyName" class="gridjs-th gridjs-th-sort"
                                                tabindex="0">
                                                <div class="gridjs-th-content">Company Name</div>
                                            </th>
                                            <th data-column-id="location" class="gridjs-th gridjs-th-sort" tabindex="0">
                                                <div class="gridjs-th-content">Location</div>
                                            </th>
                                            <th data-column-id="salary" class="gridjs-th gridjs-th-sort" tabindex="0">
                                                <div class="gridjs-th-content">Salary</div>
                                            </th>
                                            <th data-column-id="experience" class="gridjs-th gridjs-th-sort"
                                                tabindex="0">
                                                <div class="gridjs-th-content">Experience</div>
                                            </th>
                                            <th data-column-id="jobType" class="gridjs-th gridjs-th-sort" tabindex="0">
                                                <div class="gridjs-th-content">Job Type</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="gridjs-tbody">
                                        <tr class="gridjs-tr" v-for="(data, index) of resultQuery" :key="index">
                                            <td data-column-id="position" class="gridjs-td">{{ data.position }}</td>
                                            <td data-column-id="companyName" class="gridjs-td">{{ data.c_name }}</td>
                                            <td data-column-id="location" class="gridjs-td">{{ data.location }}</td>
                                            <td data-column-id="salary" class="gridjs-td">{{ data.salary }}</td>
                                            <td data-column-id="experience" class="gridjs-td">{{ data.experience }}</td>
                                            <td data-column-id="jobType" class="gridjs-td">{{ data.job_type }}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="gridjs-footer">
                                <div class="gridjs-pagination">
                                    <div role="status" aria-live="polite" class="gridjs-summary" title="Page 1 of 3">
                                        Showing <b>{{ page }}</b> to <b>{{ resultQuery.length }}</b> of <b>{{
                                                recomendedjob.length
                                        }}</b> results
                                    </div>
                                    <div class="gridjs-pages">
                                        <BButton variant="link" tabindex="0" role="button" title="Previous" href="#" :disabled="page <= 1" @click="page--">Previous</BButton>

                                        <BButton variant="link" tabindex="0" role="button" class="gridjs"
                                            :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index"
                                            @click="page = pageNumber">{{ pageNumber }}</BButton>

                                        <BButton variant="link" tabindex="0" role="button" title="Next" :disabled="page >= pages.length" @click="page++">Next</BButton>
                                    </div>
                                </div>
                            </div>
                            <div id="gridjs-temp" class="gridjs-temp"></div>
                        </div>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</template>
