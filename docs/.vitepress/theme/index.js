
import {VPBTheme} from "../../../src/theme/index.js";
import VPBTestComponent from "./components/VPBTestComponent.vue";
import './style.css';
import {watchEffect} from "vue";
import {inBrowser, useData} from "vitepress";
import './style.css';
export default {
    extends: VPBTheme,
    enhanceApp({app}) {
        app.component('VPBTestComponent', VPBTestComponent);
    },
    setup() {
        const { lang } = useData();
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`;
            }
        });
    }
};
