import employee from "@/api/employee";

export default {
    data() {
        return {
            employee: null,
            formData: {
                email: '',
                password: '',
                name: '',
                role: '',
                department: ''
            }
        }
    },
    created() {
        this.fetchEmployeeProfile();
    },
    computed: {
        employeeId() {
            return this.$route.params.id;
        },
        currentMode() {
            return this.$route.params.mode;
        }
    },
    methods: {
        async fetchEmployeeProfile() {
            try {
                const response = await employee.findOne(this.employeeId);
                this.employee = response.data;

                if (this.currentMode != 'add') {
                    this.formData = { ...response.data }
                }

            } catch (error) {
                console.error('Error fetching data from API', error);
            }
        },
    }
}