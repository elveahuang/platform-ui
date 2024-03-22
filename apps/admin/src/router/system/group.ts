import { RouteRecordRaw } from 'vue-router';

export const groupRoutes: RouteRecordRaw[] = [
    {
        path: '/group',
        name: 'layout-admin-group',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-group-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/group/index.vue'),
            },
        ],
    },
];
