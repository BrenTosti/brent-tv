import 'unfonts.css';

import { createApp } from "vue";
import App from "./App.vue";

import { routerBootstrap } from "./bootstraps/router.ts";

// App initialization
const app = createApp(App);

// Bootstraps
routerBootstrap(app);

// Mount the app
app.mount("#app");