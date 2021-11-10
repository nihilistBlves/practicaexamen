<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                PRACTICA
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/personajes/crear">Nuevo personaje</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/personajes/modificar">Modificar personajes</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Series
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li v-for="(serie, index) in series" :key="index">
                            <router-link class="nav-link" :to="'/series/'+serie.idSerie">{{serie.nombre}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries.js'

const service = new ServiceSeries();

export default {
    name: "Menu",
    data() {
        return {
            series: []
        }
    },
    methods: {
        cargarSeries() {
            service.getSeries().then(result => {
                this.series = result;
            })
        }   
    },
    mounted() {
        this.cargarSeries();
    }
}
</script>

<style>

</style>