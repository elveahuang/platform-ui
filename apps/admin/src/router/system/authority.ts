import { RouteRecordRaw } from 'vue-router';

export const authorityRoutes: RouteRecordRaw[] = [
    {
        path: '/authority',
        name: 'layout-admin-authority',
        meta: {
            description: '管理端布局',
        },
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-authority-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/authority/index.vue'),
            },
        ],
    },
];
