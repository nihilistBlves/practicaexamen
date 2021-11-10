import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import CrearPersonaje from './components/Personajes/CrearPersonaje.vue'
import ModificarPersonaje from './components/Personajes/ModificarPersonaje.vue'
import DetallesSerie from './components/Series/DetallesSerie.vue'
import VerPersonajesSerie from './components/Personajes/VerPersonajesSerie.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/series/:idSerie", component: DetallesSerie},
  {path: "/series/:idSerie/personajes", component: VerPersonajesSerie},
  {path: "/personajes/crear", component: CrearPersonaje},
  {path: "/personajes/modificar", component: ModificarPersonaje},
  {path: "/", component: Home},

]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
