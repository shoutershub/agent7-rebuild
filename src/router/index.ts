// Composables
import { createRouter, createWebHistory} from 'vue-router'

//Layout
import AuthDefaultayout from "@/layouts/default/auth/AuthLayout.vue";
import DashboardLayout from "@/layouts/default/dashboard/DashboardLayout.vue"
import SettingsLayout from "@/layouts/default/settings/SettingsLayout.vue"
import WidgetLayout from "@/layouts/default/widget/WidgetLayout.vue"
import ApplicationSettingsPage from '@/views/dashboard/settings/application-settings/ApplicationSettingsPage.vue';


// Auth
import LoginPage from "@/views/auth/login/LoginPage.vue";
import RegisterPage from "@/views/auth/register/RegisterPage.vue";
import ResetPassword from "@/views/auth/reset-password/ResetPasswordPage.vue";
import ResetPasswordResetToken from "@/views/auth/reset-password/ResetPasswordResetToken.vue";

//Misc
import NotFound from '@/views/msic/NotFound.vue';

//Settings
import AccountPage from "@/views/dashboard/settings/account/AccountPage.vue";
import ProfilePage from "@/views/dashboard/settings/profile/ProfilePage.vue";


//Widget settings
import SetupPage from "@/views/dashboard/widget/setup-page/SetupPage.vue";
import CustomizationPage from "@/views/dashboard/widget/customization-page/CustomizationPage.vue";
import ContactPage from "@/views/dashboard/widget/contact-page/ContactPage.vue";
import AddonPage from "@/views/dashboard/widget/addon-page/AddonPage.vue";
import RemovePropertyPage from "@/views/dashboard/widget/remove-property-page/RemovePropertyPage.vue";

// Dashboard
import DashboardPage from "@/views/dashboard/dashboard/DashboardPage.vue"
import TeamPage from "@/views/dashboard/team/TeamPage.vue"

// Chat
import ChatPage from "@/views/dashboard/chat/ChatPage.vue"

const routes = [
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
  { path: '/', name: 'home', component: AuthDefaultayout },
  {
    path: '/auth',
    component: AuthDefaultayout,
    meta: { anonymousOnly: true },
    children: [
      { path: 'login', name: 'auth.login', component: LoginPage },
      { path: 'register', name: 'auth.register', component: RegisterPage },
      { path: 'reset-password', name: 'auth.reset.password', component: ResetPassword },
      { path: 'reset-password/token/:token', name: 'auth.reset.password.token', component: ResetPasswordResetToken },
    ],
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: { anonymousOnly: true },
    children: [
      { path: '', name: 'dashboard', component: DashboardPage },
      { path: 'team', name: 'dashboard.team', component: TeamPage },
      { path: 'conversations',
        children: [
          { path: '', name: 'dashboard.conversations.index', component: ChatPage },
        ]
      },
      {
        path: 'widget',
        meta: { anonymousOnly: true },
        component: WidgetLayout,
        children: [
          { path: 'setup', name: 'dashboard.widget.index',  component: SetupPage },
          { path: 'customization', name: 'dashboard.widget.customization', component: CustomizationPage },
          { path: 'contact', name: 'dashboard.widget.contact', component: ContactPage },
          { path: 'addon', name: 'dashboard.widget.addon', component: AddonPage },
          { path: 'remove-property', name: 'dashboard.widget.remove', component: RemovePropertyPage },
        ],
      },
      {
        path: 'settings',
        meta: { anonymousOnly: true },
        component: SettingsLayout,
        children: [
          { path: '', name: 'dashboard.settings.index' },
          { path: 'account', name: 'dashboard.settings.account', component: AccountPage },
          { path: 'helpdesk', name: 'dashboard.settings.helpdesk', component: AccountPage },
          { path: 'widget', name: 'dashboard.settings.widget', component: SetupPage },
          { path: 'profile', name: 'dashboard.settings.profile', component: ProfilePage },
          { path: 'application-settings', name: 'dashboard.settings.application', component: ApplicationSettingsPage },
        ],
      },
    ],
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
  
})



export default router
