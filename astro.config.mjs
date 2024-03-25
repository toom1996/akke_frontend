import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   '/v/[...slug]': '/detail?a=[...slug]'
  // },
  integrations: [tailwind(),vue({ 
    appEntrypoint: '/src/pages/_app'
 })],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动导入定制化样式文件进行样式覆盖
          additionalData: `
            @use "./src/styles/element.scss" as *;
          `,
        }
      }
    },
    ssr: {
      noExternal: ['workbox-window', /vue-i18n/, /element-plus/],
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({importStyle: "sass"})],
      })
    ]
  },
});