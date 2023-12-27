import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createProxy } from './build/proxy';
import { wrapperEnv } from './build/getEnv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);

    return {
        base: viteEnv.VITE_PUBLIC_PATH,
        root,
        plugins: [vue(), UnoCSS(), vueJsx()],
        resolve: {
            alias: {
                /** @ 符号指向 src 目录 */
                '@': resolve(__dirname, './src')
            }
        },
        server: {
            host: true, // host: "0.0.0.0"
            /** 端口号 */
            port: 7070,
            /** 是否自动打开浏览器 */
            // open: true,
            /** 跨域设置允许 */
            cors: true,
            /** 端口被占用时，是否直接退出 */
            strictPort: false,
            // Load proxy configuration from .env.development
            proxy: createProxy(viteEnv.VITE_PROXY)
        }
    };
});
