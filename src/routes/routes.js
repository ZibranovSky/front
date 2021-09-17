import DashboardLayout from '@/views/admin/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/admin/Pages/AuthLayout.vue';
import AppHeader from "@/views/client/layout/AppHeader.vue";
import AppFooter from "@/views/client/layout/AppFooter.vue";
import Components from "@/views/client/Components.vue";
import Landing from "@/views/client/Landing.vue";
import Login from "@/views/client/Login.vue";
import Register from "@/views/client/Register.vue";
import Profile from "@/views/client/Profile.vue";
import NotFound from '@/views/admin/NotFoundPage.vue';

const routes = [
  {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
  {
    path: '/',
    redirect: 'admin/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: 'admin/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Dashboard.vue')
      },
      {
        path: 'admin/pegawai',
        name: 'pegawai',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Pages/pegawai.vue')
      },
      {
        path: 'admin/addPegawai',
        name: 'addPegawai',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Pages/pegawai/addPegawai.vue')
      },
      {
        path: 'admin/editPegawai',
        name: 'editPegawai',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Pages/pegawai/editPegawai.vue')
      },
      {
        path: 'admin/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/GoogleMaps.vue')
      },
      {
        path: 'admin/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/admin/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  },

];

export default routes;
