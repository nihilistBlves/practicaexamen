<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="col-6 text-center">
          <h1>Detalles Serie</h1>
          <div class="card">
            <img :src="serie.imagen" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">{{serie.nombre}}</h3>
              <h5 class="card-text">Puntuación IMDB: {{serie.puntuacion}}</h5>
              <h5 class="card-text">Año de estreno: {{serie.anyo}}</h5>
              <router-link :to="'/series/'+serie.idSerie+'/personajes'" class="btn btn-success">Ver Personajes</router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import ServiceSeries from './../../services/ServiceSeries.js'

const serviceSeries = new ServiceSeries();

export default {
  name: "DetallesSerie",
  data() {
    return {
      serie: {}
    }
  },
  methods: {
    cargarSerie() {
      serviceSeries.getOneSerie(this.$route.params.idSerie).then(result => {
        this.serie = result;
      });
    }
  },
  mounted() {
    this.cargarSerie();
  }
}
</script>

<style>

</style>