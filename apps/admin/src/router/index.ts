import { systemRoutes } from '@/router/system';
import { concat } from 'lodash-es';
import { extendRoutes } from 'src/router/extend';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = concat(systemRoutes, extendRoutes);
