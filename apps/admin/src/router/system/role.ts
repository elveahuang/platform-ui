import { RouteRecordRaw } from 'vue-router';

export const roleRoutes: RouteRecordRaw[] = [
    {
        path: '/role',
        name: 'layout-admin-role',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-role-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/role/index.vue'),
            },
        ],
    },
];
