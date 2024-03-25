import type { App } from 'vue';
import { ID_INJECTION_KEY } from 'element-plus'

export default (app: App) => {
    app.provide(ID_INJECTION_KEY, {
        prefix: 1024,
        current: 0,
      })
};