<template>
    <div class="admin-dashboard">
        <button class="mb-3"
            @click.prevent="goToEmployeeDetailAddMode()"
        >
            Add Employee
        </button>
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Departmen</th>
                    <th scope="col">Tindakan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employeeList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.department }}</td>

                    <td class="action">
                        <button class="me-2" @click.prevent="goToEmployeeDetailViewMode(employee.id)">View</button>
                        <button class="ms-2" @click.prevent="goToEmployeeDetailEditMode(employee.id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./js/admin-dashboard.js"></script>

<style lang="sass" scoped>
.admin-dashboard {
    padding: 3em;
}
</style>
