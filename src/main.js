import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
//Views
import Home from "./pages/Home.vue"
import QuienesSomos from "./pages/QuienesSomos.vue"
import Servicios from "./pages/Servicios.vue"
import AmigosOEnemigos from "./pages/Blogs/AmigosOEnemigos.vue"
import PeritonitisInfecciosaFelina from "./pages/Blogs/PeritonitisInfecciosaFelina.vue"
//import NuevaEntradaBlog from "./pages/Blogs/NuevaEntradaBlog.vue"



const routes = [
    { path: '/', component: Home },
    { path: '/quienes-somos', component: QuienesSomos },
    { path: '/servicios', component: Servicios },
    { path: '/amigos-o-enemigos', component: AmigosOEnemigos },
    { path: '/peritonitis-infecciosa-felina', component: PeritonitisInfecciosaFelina },
    //{ path: '/nueva-ruta-blog', component: Nuevaentradablog },
    //{ path: '/nueva-ruta-blog', component: Nuevaentradablog },
    
  ];

  //Crear objeto rutas de vue router

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })


  //instancia de vue 
const app = createApp(App)
app.use(router)
app.mount('#app')