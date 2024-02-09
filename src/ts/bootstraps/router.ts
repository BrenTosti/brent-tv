import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";

// Views
import WelcomeView from "../views/WelcomeView.vue";
import FinishedView from "@/ts/views/FinishedView.vue";
import QuickOverviewView from "@/ts/views/QuickOverviewView.vue";

// Steps
import DownloadStepView from "@/ts/views/steps/DownloadStepView.vue";
import OpenStepView from "@/ts/views/steps/OpenStepView.vue";
import EmbyWelcomeStepView from "@/ts/views/steps/EmbyWelcomeStepView.vue";
import EmbyConnectStepView from "@/ts/views/steps/EmbyConnectStepView.vue";
import ServerConnectStepView from "@/ts/views/steps/ServerConnectStepView.vue";
import LoginStepView from "@/ts/views/steps/LoginStepView.vue";


export function routerBootstrap(app: App): void {

    const router = createRouter({

        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: 'index',
                component: WelcomeView
            },
            {
                path: "/finished",
                name: 'finished',
                component: FinishedView
            },
            {
                path: "/quick-overview",
                name: 'quick-overview',
                component: QuickOverviewView
            },
            {
                path: "/step/download",
                name: 'download-step',
                component: DownloadStepView
            },
            {
                path: "/step/open",
                name: 'open-step',
                component: OpenStepView
            },
            {
                path: "/step/emby-welcome",
                name: 'emby-welcome-step',
                component: EmbyWelcomeStepView
            },
            {
                path: "/step/emby-connect",
                name: 'emby-connect-step',
                component: EmbyConnectStepView
            },
            {
                path: "/step/server-connect",
                name: 'server-connect-step',
                component: ServerConnectStepView
            },
            {
                path: "/step/login",
                name: 'login-step',
                component: LoginStepView
            },
        ]
    });

    app.use(router);
}