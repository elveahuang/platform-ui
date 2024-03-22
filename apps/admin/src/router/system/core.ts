import { RouteRecordRaw } from 'vue-router';

export const coreRoutes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/workbench',
    },
    {
        path: '/index',
        name: 'page-index',
        meta: {
            description: '首页',
        },
        component: () => import('@/views/system/core/index.vue'),
    },
    {
        path: '/about',
        name: 'page-about',
        meta: {
            description: '关于页',
        },
        component: () => import('@/views/system/core/about.vue'),
    },
    {
        path: '/login',
        name: 'page-login',
        meta: {
            description: '登录页',
        },
        component: () => import('@/views/system/core/login.vue'),
    },
    {
        path: '/',
        name: 'layout-main',
        meta: {
            requiresAuth: true,
            description: '管理端主体',
        },
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'workbench',
                name: 'page-workbench',
                meta: {
                    requiresAuth: true,
                    description: '工作台',
                },
                component: () => import('@/views/system/core/workbench.vue'),
            },
            {
                path: 'dashboard',
                meta: {
                    requiresAuth: true,
                    description: '仪表盘',
                },
                component: () => import('@/views/system/core/dashboard.vue'),
            },
            {
                path: 'dashboard/analysis',
                name: 'page-dashboard-analysis',
                meta: {
                    requiresAuth: true,
                    description: '数据分析',
                },
                component: () => import('@/views/system/core/dashboard-analysis.vue'),
            },
            {
                path: 'dashboard/monitor',
                name: 'page-dashboard-monitor',
                meta: {
                    requiresAuth: true,
                    description: '系统监控',
                },
                component: () => import('@/views/system/core/dashboard-monitor.vue'),
            },
            {
                path: '/401',
                name: 'page-401',
                component: () => import('@/views/system/core/401.vue'),
                meta: {
                    description: '没权限访问',
                    hidden: true,
                },
            },
        ],
    },
];
