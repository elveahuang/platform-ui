import { RouteRecordRaw } from 'vue-router';

export const accountRoutes: RouteRecordRaw[] = [
    {
        path: '/account',
        name: 'layout-admin-vip',
        component: () => {
            return import('@/layouts/main.vue');
        },
        children: [
            {
                path: 'index',
                name: 'page-vip-index',
                meta: {
                    requiresAuth: false,
                    authorities: ['site:workbench'],
                    description: 'account',
                },
                component: () => import('@/views/system/account/index.vue'),
            },
        ],
    },
];
