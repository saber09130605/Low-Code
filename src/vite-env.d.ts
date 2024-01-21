/// <reference types="vite/client" />
declare module "*.vue" {
    import type { DefineComponent,defineProps } from "vue";
  
    const vueComponent: DefineComponent<{}, {}, any>;
  
    export default vueComponent;
  }