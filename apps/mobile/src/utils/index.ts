import { routes } from '@/router';
import { settings } from '@/settings';
import { env } from '@commons/core/env';
import { useAppStoreExternal } from '@commons/core/store';
import { useSocketStoreExternal } from '@commons/core/store/socket';
import { log } from '@commons/core/utils';
import { setHtmlTitle } from '@commons/core/utils/html.ts';
import { setupApp } from '@commons/mobile/utils';
import '@vant/touch-emulator';
import { App } from 'vue';

export const setup = async (app: App): Promise<void> => {
    log(`App for mobile initialize...`);
    await setupApp(app, { routes: routes, base: env.router.base, mode: env.router.mode }, {}, initializeApp);
};

export const initializeApp = async (): Promise<any> => {
    const { setTitle, initialize } = useAppStoreExternal();
    const { initializeWebSocket } = useSocketStoreExternal();
    // 初始化应用，从后台获取基础设置信息
    await initialize().catch((): void => {
        log(`App for mobile initialize failed.`);
    });
    // 初始化WebSocket
    if (env.socket.enabled) {
        await initializeWebSocket().then();
    }
    // 设置应用标题
    const appTitle: string = settings.app.getTitle();
    setTitle(appTitle);
    setHtmlTitle(appTitle).then();
};
