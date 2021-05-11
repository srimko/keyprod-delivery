import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        weight: '1000'
      },
      {
        order_id: 'KP-12345',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_ACAAAA',
        product_package: 0,
        weight: '1000'
      },
      {
        order_id: 'KP-12345',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_ADAAAA',
        product_package: 0,
        weight: '1000'
      },
      {
        order_id: 'KP-12345',
        product_state: false,
        product_name: 'KeyNetic',
        product_serial: null,
        product_package: null,
        weight: '1000'
      },
      {
        order_id: 'KP-12346',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_AEAAAA',
        product_package: 0,
        weight: '1000'
      },
      {
        order_id: 'KP-12346',
        product_state: true,
        product_name: 'KeyNetic',
        product_serial: 'KeyNetic_V1_AFAAAA',
        product_package: 0,
        weight: '1000'
      },
      {
        order_id: 'KP-12346',
        product_state: false,
        product_name: 'KeyNetic',
        product_serial: null,
        product_package: null,
        weight: '1000'
      }
    ],
    parcels: [
      {
        parcel_id: 'PCL-19826639',
        order_id: 'KP-12345',
        deliveryIndicator: 'KCIZJNCU72JD82JKD9',
        weight: '2000', // Calculer en fonction des produits
        products: [
          {
            order_id: 'KP-12345',
            product_state: true,
            product_name: 'KeyNetic',
            product_serial: 'KeyNetic_V1_ABAAAA',
            product_package: 0,
            weight: '1000'
          },
          {
            order_id: 'KP-12345',
            product_state: true,
            product_name: 'KeyNetic',
            product_serial: 'KeyNetic_V1_ACAAAA',
            product_package: 0,
            weight: '1000'
          },
        ]
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
