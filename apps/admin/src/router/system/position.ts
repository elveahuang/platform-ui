import { RouteRecordRaw } from 'vue-router';

export const positionRoutes: RouteRecordRaw[] = [
    {
        path: '/position',
        name: 'layout-admin-position',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-position-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/position/index.vue'),
            },
        ],
    },
];
