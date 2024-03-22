// Composables
import { createRouter, createWebHistory} from 'vue-router'

//Layout
import AuthDefaultayout from "@/layouts/default/auth/AuthLayout.vue";
import DashboardLayout from "@/layouts/default/dashboard/DashboardLayout.vue"


// Auth
import LoginPage from "@/views/auth/login/LoginPage.vue";
import RegisterPage from "@/views/auth/register/RegisterPage.vue";
import ResetPassword from "@/views/auth/reset-password/ResetPasswordPage.vue";
import ResetPasswordResetToken from "@/views/auth/reset-password/ResetPasswordResetToken.vue";

//Misc
import NotFound from '@/views/msic/NotFound.vue';

//Settings
import SettingsPage from "@/views/dashboard/settings/IndexPage.vue";
import AccountPage from "@/views/dashboard/settings/account/AccountPage.vue";


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
      { path: 'team', name: 'team', component: TeamPage },
      { path: 'chat',
        children: [
          { path: '', name: 'dashboard.chat.index', component: ChatPage },
        ]
      },
      {
        path: 'settings',
        meta: { anonymousOnly: true },
        children: [
          { path: '', name: 'dashboard.settings.index', component: SettingsPage },
          { path: 'account', name: 'dashboard.settings.account', component: AccountPage },
        ],
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
