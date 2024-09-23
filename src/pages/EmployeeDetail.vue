<template>
    <div class="employee-detail">
        <h4 class="employee-detail__heading">Employee's Profile</h4>

        <div class="employee-detail__form"
            v-if="employee || currentMode === 'add'"
        >
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email"
                    v-model="formData.email"
                    :disabled="currentMode === 'view'"
                >
            </div>

            <div class="mb-3"
                v-if="currentMode === 'add'"
            >
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password"
                    v-model="formData.password"
                >
            </div>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name"
                    v-model="formData.name"
                    :disabled="currentMode === 'view'"
                >
            </div>

            <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <input type="role" class="form-control" id="role"
                    v-model="formData.role"
                    :disabled="currentMode === 'view'"
                >
            </div>

            <div class="mb-5">
                <label for="department" class="form-label">Department</label>
                <input type="department" class="form-control" id="department"
                    v-model="formData.department"
                    :disabled="currentMode === 'view'"
                >
            </div>

            <div class="mb-3"
                v-if="currentMode === 'add'"
            >
                <button class="btn btn-submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script src="./js/employee-detail.js"></script>

<style lang="sass" scoped>
.employee-detail {
    &__heading {
        margin-bottom: 4rem;
    }

    &__form {
        width: 50%;
        margin-left: 3em;

        .btn-submit {
            background-color: blue;
            color: white;
        }
    }
}
</style>
