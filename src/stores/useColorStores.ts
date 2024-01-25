import { defineStore } from "pinia";
const colorStore = defineStore("color", {
    state() {
        return {
            baseColor: "rgba(0,0,0,0.8)",
            headerColor: "rgba(0,0,0,1)",
            boderColor:"rgba(25,25,25,1)"
        }
    },
    getters: {},
    actions:{}
})
export  default colorStore