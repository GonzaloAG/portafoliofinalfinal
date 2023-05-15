import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioVista.vue'
import Contacto from '../views/ContactoVista.vue'
import Contenido from '../views/ContenidoVista.vue'
import InicioSesion from '../views/InicioSesion.vue'
import Mediakit from '../views/MediakitVista.vue'
import Registro from '../views/RegistroVista.vue'
import Tienda from '../views/TiendaVista.vue'

const routes = [
  {
    path: '/',
    name: 'InicioVista',
    component: Inicio
  },
  {
    path: '/ContenidoVista',
    name: 'ContenidoVista',
    component: Contenido
  },
  {
    path: '/MediakitVista',
    name: 'MediakitVista',
    component: Mediakit
  },
  {
    path: '/TiendaVista',
    name: 'TiendaVista',
    component: Tienda
  },
  {
    path: '/ContactoVista',
    name: 'ContactoVista',
    component: Contacto
  },
  {
    path: '/RegistroVista',
    name: 'RegistroVista',
    component: Registro
  },
  {
    path: '/InicioSesion',
    name: 'InicioSesion',
    component: InicioSesion
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
