import { createRouter, createWebHistory } from 'vue-router'
import BikesView from '../views/BikesView.vue'
import ClientsView from '../views/ClientsView.vue'
import StationsView from '../views/StationsView.vue'
import BikeTypesView from '../views/BikeTypesView.vue'
import RentalsView from '../views/RentalsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/bikes', name: 'bikes', component: BikesView },
    { path: '/clients', name: 'clients', component: ClientsView },
    { path: '/stations', name: 'stations', component: StationsView },
    { path: '/types', name: 'types', component: BikeTypesView },
    { path: '/rentals', name: 'rentals', component: RentalsView },
    { path: '/', redirect: '/bikes' }
  ]
})

export default router