export type widgetNavListType = {
    name: string;
    routeName?: string;
  };

  export const widgetNavList: widgetNavListType[] = [
    {
      name: "Setup Instruction",
      routeName: "dashboard.widget.index",
    },
    {
      name: "Customization",
      routeName: "dashboard.widget.customization",
    }, 
    {
      name: "Contact info.",
      routeName: "dashboard.widget.contact",
    }, 
    {
      name: "Addon",
      routeName: "dashboard.widget.addon",
    },
    {
      name: "Remove property",
      routeName: "dashboard.widget.remove",
    }
  ];