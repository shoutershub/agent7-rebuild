import { RouteLocationNamedRaw, RouteRecordName } from "vue-router"

type NavigationChildrenChildType = {
  name: string,
  routeName: string
}
export interface NavigationTypes {
    name: String,
    icon: String,
    routeName: RouteRecordName,
    section: String, 
    children?: NavigationChildrenChildType[]
  }