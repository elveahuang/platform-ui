import { RouteRecordRaw } from 'vue-router';

export const attachmentRoutes: RouteRecordRaw[] = [
    {
        path: '/attachment',
        name: 'layout-admin-attachment',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-attachment-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@/views/system/attachment/index.vue'),
            },
        ],
    },
];
