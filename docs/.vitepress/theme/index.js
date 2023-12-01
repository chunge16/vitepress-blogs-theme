
import {VPBTheme} from "../../../src/theme/index.js";
import VPBTestComponent from "./components/VPBTestComponent.vue";
import './style.css'

export default {
    extends: VPBTheme,
    enhanceApp({app, router, siteData}) {
        app.component('VPBTestComponent', VPBTestComponent)
    },
}
