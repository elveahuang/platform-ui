import { rm } from 'fs/promises';
import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { chdir } from 'node:process';

export const initModule = async (path) => {
    console.log(`initModule [${path}] start.`);
    chdir(path);
    // 安装模块依赖
    await execTask(`pnpm install`, path);
    console.log(`initModule [${path}] done.`);
};

export const buildModule = async (module, profile) => {
    console.log(`buildModule [module - ${module}, profile - ${profile}] start.`);
    await execTask(`pnpm run build:${module}:${profile}`);
    console.log(`buildModule [module - ${module}, profile - ${profile}] done.`);
};

export const updateModule = async (path) => {
    console.log(`updateModule [${path}] start.`);
    chdir(path);
    if (existsSync(resolve(path, 'package-lock.json'))) {
        await rm(resolve(path, 'package-lock.json'));
    }
    if (existsSync(resolve(path, 'pnpm-lock.yaml'))) {
        await rm(resolve(path, 'pnpm-lock.yaml'));
    }
    if (existsSync(resolve(path, 'node_modules'))) {
        await rm(resolve(path, 'node_modules'), { recursive: true });
    }
    await execTask(`ncu -u`, path);
    console.log(`updateModule [${path}] done.`);
};

export const execTask = async (task, path) => {
    console.log(`execTask [${task}] start.`);
    return new Promise((resolve, reject) => {
        exec(task, { cwd: path }, (e) => {
            if (e) {
                console.log(e);
                reject();
            } else {
                console.log(`execTask [${task}] done.`);
                resolve();
            }
        });
    });
};
