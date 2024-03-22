import { RouteRecordRaw } from 'vue-router';

export const productRoutes: RouteRecordRaw[] = [
    {
        path: '/product',
        name: 'layout-admin-product',
        component: () => import('@/layouts/main.vue'),
        children: [
            {
                path: 'index',
                name: 'page-product-index',
                meta: {
                    requiresAuth: false,
                    authorities: ['workbench:workbench'],
                    description: '产品管理列表页',
                },
                component: () => import('@/views/system/product/index.vue'),
            },
            {
                path: 'details',
                name: 'page-product-details',
                meta: {
                    requiresAuth: false,
                    authorities: ['workbench:workbench'],
                    description: '产品管理详情页',
                },
                component: () => import('@/views/system/product/details.vue'),
            },
        ],
    },
];
