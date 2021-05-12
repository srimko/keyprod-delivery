import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashboardMenuSlide: [
      [
        {
          id: 0,
          title: 'Production',
          description: 'Manage your equipment organization and their tracking with customizable dashboards and stops causes',
          icon: 'mdi-layers-triple-outline',
          links: [
            'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
          ]
        },
        {
          id: 1,
          title: 'People',
          description: 'Manage your people organization, services, users access to keyprod and their rights',
          icon: 'mdi-account',
          links: [
            'Users', 'User groups', 'Services', 'Empowerment', 'Assignments'
          ]
        },
        {
          id: 2,
          title: 'Time',
          description: 'Manage your time organization with opening times, shift rotations. Plan machine downtinme and get the cost center and pointing tasks',
          icon: 'mdi-circle-slice-5',
          links: [
            'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
          ]
        },
        {
          id: 3,
          title: 'Job',
          description: 'Access information related to the part you produce, such as customers, prders, productions orders and jobs',
          icon: 'mdi-view-dashboard-variant',
          links: [
            'Clients', 'Orders', 'Products'
          ]
        }
      ],
      [
        {
          id: 0,
          title: 'Production',
          description: 'Manage your equipment organization and their tracking with customizable dashboards and stops causes',
          icon: 'mdi-layers-triple-outline',
          links: [
            'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
          ]
        },
        {
          id: 1,
          title: 'People',
          description: 'Manage your people organization, services, users access to keyprod and their rights',
          icon: 'mdi-account',
          links: [
            'Users', 'User groups', 'Services', 'Empowerment', 'Assignments'
          ]
        },
        {
          id: 2,
          title: 'Time',
          description: 'Manage your time organization with opening times, shift rotations. Plan machine downtinme and get the cost center and pointing tasks',
          icon: 'mdi-circle-slice-5',
          links: [
            'Factories', 'Machines', 'Machines groups', 'Stops', 'Dashboards', 'Devices'
          ]
        },
        {
          id: 3,
          title: 'Job',
          description: 'Access information related to the part you produce, such as customers, prders, productions orders and jobs',
          icon: 'mdi-view-dashboard-variant',
          links: [
            'Clients', 'Orders', 'Products'
          ]
        }
      ]
    ],
    orders: [
      {
        order_status: { label: 'Livré', 'color': 'green', 'text_color': 'white' },
        order_id: 'KP-12343',
        customer: 'JPB-Système',
        qty_to_pack: 6,
        qty_packed: 6,
        qty_package: 1,
      },
      {
        order_status: { label: 'Expédiée', 'color': 'indigo', 'text_color': 'white' },
        order_id: 'KP-12344',
        customer: 'JPB-Système',
        qty_to_pack: 6,
        qty_packed: 6,
        qty_package: 1,
      },
      {
        order_status: { label: 'En préparation', 'color': 'blue', 'text_color': 'white' },
        order_id: 'KP-12345',
        customer: 'JPB-Système',
        qty_to_pack: 6,
        qty_packed: 1,
        qty_package: 1,
      },
      {
        order_status: { label: 'Préparé', 'color': 'blue', 'text_color': 'white' },
        order_id: 'KP-12745',
        customer: 'JPB-Système',
        qty_to_pack: 2,
        qty_packed: 2,
        qty_package: 1,
      },
      {
        order_status: { label: 'En attente', 'color': 'amber', 'text_color': 'black' },
        order_id: 'KP-12346',
        customer: 'KeyProd',
        qty_to_pack: 12,
        qty_packed: 0,
        qty_package: 0,
      },
    ],
    products: [
      {
        order_id: 'KP-12345',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_ABAAAA',
        product_package: 0,
        weight: '134'
      },
      {
        order_id: 'KP-12345',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_ACAAAA',
        product_package: 0,
        weight: '123'
      },
      {
        order_id: 'KP-12345',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_ADAAAA',
        product_package: 0,
        weight: '123'
      },
      {
        order_id: 'KP-12345',
        product_state: false,
        product_name: 'KeyNetic',
        product_serial: null,
        product_package: null,
        weight: '192'
      },
      {
        order_id: 'KP-12346',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_AEAAAA',
        product_package: 0,
        weight: '201'
      },
      {
        order_id: 'KP-12346',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_AFAAAA',
        product_package: 0,
        weight: '301'
      },
      {
        order_id: 'KP-12346',
        product_state: false,
        product_name: 'KeyNetic',
        product_serial: null,
        product_package: null,
        weight: '384'
      }
    ],
    parcels: [
      {
        parcel_id: 'PCL-19826639',
        order_id: 'KP-12345',
        status: 'Livraison',
        deliveryIndicator: 'KCIZJNCU72JD82JKD9',
        weight: '2000', // Calculer en fonction des produits
        products: [
          {
            order_id: 'KP-12345',
            product_state: true,
            product_name: 'KeyNetic',
            product_serial: 'KeyNetic_V1_ABAAAA',
            product_package: 0,
            weight: '134'
          },
          {
            order_id: 'KP-12345',
            product_state: true,
            product_name: 'KeyNetic',
            product_serial: 'KeyNetic_V1_ACAAAA',
            product_package: 0,
            weight: '123'
          },
        ]
      },
      {
        parcel_id: 'PCL-19823939',
        order_id: 'KP-12346',
        status: 'Livraison',
        deliveryIndicator: 'ECIZJLDF72JDOENCLD',
        weight: '2000', // Calculer en fonction des produits
        products: [
          {
            order_id: 'KP-12346',
            product_state: true,
            product_name: 'KeyNetic',
            product_serial: 'KeyNetic_V1_AFAAAA',
            product_package: 0,
            weight: '201'
          },
          {
            order_id: 'KP-12346',
            product_state: false,
            product_name: 'KeyNetic',
            product_serial: null,
            product_package: null,
            weight: '301'
          }
        ]
      }
    ],
  },
  getters: {
    getProductById: (state) => (serrialId) => {
      return state.products.find(product => product.product_serial === serrialId)
    },
    getOrderById: (state) => (orderId) => {
      return state.orders.find(order => order.order_id === orderId)
    },
    getProductsFromOrder: (state) => (orderId) => {
      const products = state.products.filter(product => product.order_id === orderId)
      return products
    }
  },
  mutations: {
    deleteOrder(state, index) {
      let orders = state.orders
      orders = orders.filter((item, idx) => {
        return idx !== index
      })
      state.orders = orders
    },
  },
  actions: {
    async deleteOrder({ commit }, {index}) {
      commit('deleteOrder', index)
    }
  },
  modules: {
  }
})
