import {defineStore} from "pinia";


export const useUiStore = defineStore("ui", {
    state: () => {
        return {
            sidebarFlag : false
        }
    },
    actions: {
        toggleSidebar() {
            this.sidebarFlag = this.sidebarFlag === false;
        }
    }
})