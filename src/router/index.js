import { createRouter, createWebHistory } from 'vue-router'

import AddCurrency from '../views/AddCurrency.vue'
import CurrencyTable from '../views/CurrencyTable.vue'
import ExchangeConverter from '../views/ExchangeConverter.vue'

const routes = [
  {
    path: '/',
    name: 'AddCurrency',
    component: AddCurrency
  },
  {
    path: '/CurrencyTable',
    name: 'CurrencyTable',
    component: CurrencyTable
  },
  {
    path: '/ExchangeConverter',
    name: 'ExchangeConverter',
    component: ExchangeConverter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
