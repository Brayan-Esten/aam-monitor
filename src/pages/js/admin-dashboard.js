import employeeApi from "@/api/employee";

export default {
    data() {
        return {
            employeeList: null
        }
    },
    created() {
        this.fetchAllEmployee();
    },
    methods: {
        async fetchAllEmployee() {
            try {
                const response = await employeeApi.findAll();
                this.employeeList = response.data.items;
            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        },
        goToEmployeeDetailViewMode(id) {
            this.$router.push(`/employee-detail/view/${id}`);
        },
        goToEmployeeDetailEditMode(id) {
            this.$router.push(`/employee-detail/edit/${id}`);
        },
        goToEmployeeDetailAddMode() {
            this.$router.push(`/employee-detail/add`);
        }
    }
}