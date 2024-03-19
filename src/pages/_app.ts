import type { App } from 'vue';
import {PageHeader} from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

export default (app: App) => {
    app.use(PageHeader);
};