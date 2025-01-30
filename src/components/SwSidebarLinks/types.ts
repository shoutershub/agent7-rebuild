import { Component } from "vue"
import { RouteLocationNamedRaw, RouteRecordName } from "vue-router"

type NavigationChildrenChildType = {
  name: string,
  routeName: string
}

interface NavigationItemInterface  {
    name: String,
    icon: Component,
    routeName: RouteRecordName,
    children?: NavigationChildrenChildType[]
}
export interface NavigationTypes {
    category: String,
    section: String, 
    items: NavigationItemInterface[]    
  }