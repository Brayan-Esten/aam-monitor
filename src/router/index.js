import { createRouter, createWebHistory } from "vue-router";

import AdminDashboard from "@/pages/AdminDashboard.vue";
import EmployeeDetail from "@/pages/EmployeeDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin-dashboard',
            component: AdminDashboard
        },
        {
            path: '/employee-detail/:mode/:id?',
            component: EmployeeDetail
        }
    ]
});

export default router