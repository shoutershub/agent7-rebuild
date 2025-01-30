import { NavigationTypes } from "../types";
import {
  RiHome9Line,
  RiChat1Line,
  RiGroupLine,
  RiSettings5Line,
  RiCodeAiLine
} from "@remixicon/vue";

export const navigationLinks: NavigationTypes[] = [
  {
    category: "quick link",
    section: "top",
    items: [
      {
        name: "Dashboard",
        icon: RiHome9Line,
        routeName: "dashboard",
      },
      {
        name: "Conversations",
        icon: RiChat1Line,
        routeName: "dashboard.conversations.index",
      },
    ],
  },
  {
    category: "members",
    section: "top",
    items: [
      {
        name: "Team",
        icon: RiGroupLine,
        routeName: "dashboard.team",
      },
    ],
  },
  // {
  //     name: "Billing",
  //     icon: "billing",
  //     routeName: "dashboard.settings.billing",
  //     section: "bottom"
  // },
  {
    category: "others",
    section: "top",
    items: [
      {
        name: "Widget",
        icon: RiCodeAiLine,
        routeName: "dashboard.widget.index",
      },
      {
        name: "Settings",
        icon: RiSettings5Line,
        routeName: "dashboard.settings.application",
      }
    ],
  },
];
