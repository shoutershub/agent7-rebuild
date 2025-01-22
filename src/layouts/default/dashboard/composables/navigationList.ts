
import {NavigationTypes} from "../types";

export const navigationLinks : NavigationTypes[] = [

    {
        name: "Dashboard",
        icon: "dashboard",
        routeName: "dashboard",
        section: "top"
    },   
    {
        name: "Inbox",
        icon: "conversation",
        routeName: "dashboard.chat.index",
        section: "top"
    },
    {
        name: "Team",
        icon: "team",
        routeName: "dashboard.team",
        section: "top"
    },
    // {
    //     name: "Billing",
    //     icon: "billing",
    //     routeName: "dashboard.settings.billing",
    //     section: "bottom"
    // },    
    {
        name: "Settings",
        icon: "settings",
        routeName: "dashboard.settings.application",
        section: "bottom"
    }
] 