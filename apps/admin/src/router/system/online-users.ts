import { RouteRecordRaw } from 'vue-router';

export const onlineUsersRoutes: RouteRecordRaw[] = [
    {
        path: '/online',
        name: 'online-users-layout',
        component: () => import('@/layouts/main.vue'),
        meta: {
            description: '用户中心布局',
        },
        children: [
            {
                path: 'users/index',
                name: 'online-users-center-index-page',
                meta: {
                    requiresAuth: true,
                    description: '在线用户',
                },
                component: () => import('@/views/system/online-users/online-users.vue'),
            },
        ],
    },
];
