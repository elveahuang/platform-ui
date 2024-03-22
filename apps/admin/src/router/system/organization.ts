import { RouteRecordRaw } from 'vue-router';

export const organizationRoutes: RouteRecordRaw[] = [
    {
        path: '/organization',
        name: 'layout-admin-organization',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-organization-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/organization/index.vue'),
            },
        ],
    },
];
