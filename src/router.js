import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Payment Methods
        {
          name: 'Payment Methods',
          path: 'payment-methods',
          component: () => import('@/views/payment-methods/PaymentMethods')
        },
        // Kategori
        {
          name: 'Kategori',
          path: 'kategori',
          component: () => import('@/views/kategori/Kategori'),
        },
        {
          path: 'kategori',
          redirect: '/kategori',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            
            {
              name: 'AddKategori',
              path: 'add',
              component: () => import('@/views/kategori/AddKategori')
            },
            {
              name: 'EditKategori',
              path: 'edit/:id',
              component: () => import('@/views/kategori/EditKategori')
            }
          ]
        }
      ],
    },
  ],
})
