import { createApp, defineAsyncComponent, App as Application, Component } from 'vue'
import compList from './assets/config/compList.json'
import ctrlList from './assets/config/ctrlList.json'
import { insertIntoArray } from './assets/utils/commonUtils';
import { createPinia } from 'pinia'

export enum RenderTpye {
    EDITOR,//编辑器
    PREVIEW//预览
}

// const options = ['compList']

export class LtVisualization {
    private app: Application | undefined = undefined;
    private compList: any[] = [];
    private ctrlList:any[] = ctrlList;
    
    constructor(_compList: any[] | undefined, _ctrlList: any[] | undefined) {
        _compList = _compList || compList;
        this.setCompList(_compList)
        if (_ctrlList) {
            this.addCtrlList(_ctrlList)
        }
    }
   public render(divId:string | Element,type:RenderTpye,callback:Function|undefined) {
        let pComp:Component | undefined
        
        switch (type) {
            case RenderTpye.EDITOR:
                pComp = defineAsyncComponent({
                    loader:()=>import('./pages/Editor.vue')
                })
                break;
            case RenderTpye.PREVIEW:
                pComp = defineAsyncComponent({
                    loader:()=>import('./pages/Preview.vue')
                })
                break;
            
        }
       if (pComp) {
            this.app = createApp(pComp,{compList:this.compList,ctrlList:this.ctrlList})
            let app = this.app
            const pinia = createPinia()
            app.use(pinia)
            app.mount('#' + divId)

            if (typeof callback === 'function') {
                callback(app)
            }
        }
    }
    private setCompList(compList:any[]) {
        this.compList = compList;
    }
    private addCtrlList(_ctrlList:any[]) {
        this.ctrlList = insertIntoArray(this.ctrlList,2,_ctrlList)
    }
}