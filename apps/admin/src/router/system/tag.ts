import { RouteRecordRaw } from 'vue-router';

export const tagRoutes: RouteRecordRaw[] = [
    {
        path: '/tag',
        name: 'layout-admin-tag',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-tag-index',
                meta: {
                    requiresAuth: false,
                    authorities: ['resource:tag'],
                    description: '标签',
                },
                component: () => import('@/views/system/tag/index.vue'),
            },
            {
                path: 'items',
                name: 'page-tag-items',
                meta: {
                    requiresAuth: false,
                    authorities: ['resource:tag'],
                    description: '标签详细页面',
                },
                component: () => import('@/views/system/tag/tag.vue'),
            },
        ],
    },
];
