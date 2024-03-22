import { RouteRecordRaw } from 'vue-router';

export const demoRoutes: RouteRecordRaw[] = [
    {
        path: '/demo',
        name: 'layout-admin-product',
        children: [
            {
                path: 'index',
                name: 'page-demo-index',
                meta: {
                    requiresAuth: false,
                    description: '示例首页',
                },
                component: () => import('@/views/extend/demo/index.vue'),
            },
            {
                path: 'editor',
                name: 'page-demo-editor',
                meta: {
                    requiresAuth: false,
                    description: '编辑器示例首页',
                },
                component: () => import('@/views/extend/demo/editor.vue'),
            },
            {
                path: 'player',
                name: 'page-demo-player',
                meta: {
                    requiresAuth: false,
                    description: '播放器示例首页',
                },
                component: () => import('@/views/extend/demo/player.vue'),
            },
        ],
    },
];
