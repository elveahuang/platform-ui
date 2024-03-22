import { RouteRecordRaw } from 'vue-router';

export const areaRoutes: RouteRecordRaw[] = [
    {
        path: '/area',
        name: 'layout-admin-area',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-area-index',
                meta: {
                    requiresAuth: true,
                    description: '仪表盘',
                },
                component: () => import('@/views/system/area/index.vue'),
            },
        ],
    },
];
