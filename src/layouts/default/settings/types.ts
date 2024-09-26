export type settingsNavListType = {
    name: string;
    section: string;
    routeName?: string;
  };

  export const settingsNavList: settingsNavListType[] = [
    {
      name: "Widget Settings",
      section: "top",
      routeName: "dashboard.settings.widget",
    },
    {
      name: "Application Setitng",
      section: "bottom",
      routeName: "dashboard.settings.application",
    }, 
    {
      name: "My Profile",
      section: "bottom",
      routeName: "dashboard.settings.profile",
    },
    {
      name: "Logout",
      section: "bottom",
    },
  ];