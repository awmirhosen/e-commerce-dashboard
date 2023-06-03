import {defineStore} from "pinia";


export const useUiStore = defineStore("ui", {
    state: () => {
        return {
            sidebarFlag : true,
            // for logging out of account modal
            logoutModalFlag: false,
        }
    },
    actions: {
        toggleSidebar() {
            this.sidebarFlag = this.sidebarFlag === false;
        },
        // logging out modal
        logoutModal() {
            this.logoutModalFlag = true;
        }
    }
})