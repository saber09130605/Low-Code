// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { LtVisualization, RenderTpye } from './sdk'
// import componentList from '../public/config/componentList.json'

let pEditor: LtVisualization = new LtVisualization(undefined,undefined)

function Register(app: any) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

pEditor.render('app', RenderTpye.EDITOR, Register)