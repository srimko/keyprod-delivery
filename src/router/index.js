import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrdersView from '../views/OrdersView.vue'
import OrderView from '../views/OrderView.vue'
import ParcelsView from '../views/ParcelsView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: OrdersView
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: OrderView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/parcels',
    name: 'Parcels',
    component: ParcelsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
