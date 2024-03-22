import { accountRoutes } from '@/router/system/account';
import { announcementRoutes } from '@/router/system/announcement';
import { areaRoutes } from '@/router/system/area';
import { attachmentRoutes } from '@/router/system/attachment';
import { authorityRoutes } from '@/router/system/authority';
import { posterRoutes } from '@/router/system/banner.ts';
import { coreRoutes } from '@/router/system/core';
import { dictRoutes } from '@/router/system/dict.ts';
import { groupRoutes } from '@/router/system/group';
import { messageRoutes } from '@/router/system/message';
import { onlineUsersRoutes } from '@/router/system/online-users';
import { organizationRoutes } from '@/router/system/organization';
import { positionRoutes } from '@/router/system/position';
import { productRoutes } from '@/router/system/product';
import { roleRoutes } from '@/router/system/role';
import { tagRoutes } from '@/router/system/tag';
import { userRoutes } from '@/router/system/user';
import { RouteRecordRaw } from 'vue-router';

export const systemRoutes: RouteRecordRaw[] = [
    ...coreRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...authorityRoutes,
    ...organizationRoutes,
    ...positionRoutes,
    ...groupRoutes,
    ...attachmentRoutes,
    ...dictRoutes,
    ...tagRoutes,
    ...areaRoutes,
    ...announcementRoutes,
    ...posterRoutes,
    ...productRoutes,
    ...messageRoutes,
    ...onlineUsersRoutes,
    ...accountRoutes,
];
