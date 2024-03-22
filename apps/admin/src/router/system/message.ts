import { RouteRecordRaw } from 'vue-router';

export const messageRoutes: RouteRecordRaw[] = [
    {
        path: '/message',
        name: 'message-layout',
        component: () => import('@/layouts/main.vue'),
        meta: {
            description: '消息中心布局',
        },
        children: [
            {
                path: 'notice/index',
                name: 'message-center-notice-index-page',
                meta: {
                    requiresAuth: true,
                    description: '系统通知',
                },
                component: () => import('@/views/system/message/notice.vue'),
            },
        ],
    },
];
