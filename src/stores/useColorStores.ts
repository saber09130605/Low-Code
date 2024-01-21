import { defineStore } from "pinia";
const colorStore = defineStore("color", {
    state() {
        return {
            baseColor:"#000"
        }
    },
    getters: {},
    actions:{}
})
export  default colorStore