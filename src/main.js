import { createApp } from 'vue';
import router from './router/index';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state() {
        return {

        }
    }
})

app.use(store);
app.use(router);

app.mount('#app');
