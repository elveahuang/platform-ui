import { routes } from '@/router';
import { env } from '@commons/core/env';
import { log } from '@commons/core/utils';
import { setupApp } from '@commons/webapp/utils';
import { App } from 'vue';

export const setup = async (app: App): Promise<void> => {
    log(`App for webapp initialize...`);
    await setupApp(app, { routes: routes, base: env.router.base, mode: env.router.mode });
};
