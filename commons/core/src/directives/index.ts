import { hasAuthority, hasRole } from '@commons/core/directives/access';
import { App } from 'vue';

/**
 * 设置全局指令
 */
export const setupGlobalDirective = async (app: App) => {
    app.directive('has-authority', hasAuthority);
    app.directive('has-role', hasRole);
};
