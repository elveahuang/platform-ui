import { RouteRecordRaw } from 'vue-router';

export const dictRoutes: RouteRecordRaw[] = [
    {
        path: '/dict',
        name: 'layout-admin-dict',
        meta: {
            description: '管理端布局',
        },
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-dict-index',
                meta: {
                    requiresAuth: false,
                    authorities: ['resource:dictionary'],
                    description: '字典管理列表页',
                },
                component: () => import('@/views/system/dict/index.vue'),
            },
            {
                path: 'items',
                name: 'page-dict-items',
                meta: {
                    requiresAuth: false,
                    authorities: ['resource:dictionary'],
                    description: '字典管理详情页',
                },
                component: () => import('@/views/system/dict/items.vue'),
            },
        ],
    },
];
