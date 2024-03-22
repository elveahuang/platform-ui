import { RouteRecordRaw } from 'vue-router';

export const announcementRoutes: RouteRecordRaw[] = [
    {
        path: '/announcement',
        name: 'layout-admin-announcement',
        meta: {
            description: '管理端布局',
        },
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-announcement-index',
                meta: {
                    requiresAuth: false,
                    authorities: ['site:workbench'],
                    description: '公告管理列表页',
                },
                component: () => import('@/views/system/announcement/index.vue'),
            },
            {
                path: 'details',
                name: 'page-announcement-details',
                meta: {
                    requiresAuth: false,
                    authorities: ['site:workbench'],
                    description: '产品管理详情页',
                },
                component: () => import('@/views/system/announcement/details.vue'),
            },
        ],
    },
];
