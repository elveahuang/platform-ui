import { move } from 'fs-extra';
import { mkdir, rm } from 'fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildModule } from './utils.mjs';

const root = resolve(process.cwd());
const args = process.argv.splice(2);
const profile = args && args.length && args.length > 0 ? args[0] : 'pro';
console.log(`Current workspace - ${root}. profile - ${profile}`);
// 编译构建各个模块
await buildModule('webapp', profile);
await buildModule('mobile', profile);
await buildModule('admin', profile);
await buildModule('site', profile);
// 清空并重建构建目录
if (existsSync(resolve(root, 'dist'))) {
    await rm(resolve(root, 'dist'), { recursive: true });
}
await mkdir(resolve(root, 'dist'), { recursive: true });
// 复制编译构建文件到构建目录
await move(resolve(root, './apps/admin/dist/'), resolve(root, 'dist/admin'), { overwrite: true });
await move(resolve(root, './apps/mobile/dist/'), resolve(root, 'dist/mobile'), { overwrite: true });
await move(resolve(root, './apps/webapp/dist/'), resolve(root, 'dist/webapp'), { overwrite: true });
await move(resolve(root, './apps/site/dist/'), resolve(root, 'dist/site'), { overwrite: true });
