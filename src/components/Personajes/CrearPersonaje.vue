<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="col-6 text-center">
          <h1>Crear Personaje</h1>
          <form v-on:submit.prevent="enviarPersonaje">
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" v-model="personaje.nombre">
            </div>
            <div class="mb-3">
              <label class="form-label">Imagen</label>
              <input type="text" class="form-control" v-model="personaje.imagen">
            </div>
            <div class="mb-3">
              <label class="form-label">Serie</label>
              <select class="form-select" v-model="personaje.idSerie">
                <option v-for="(serie, index) in series" :key="index"  :value="serie.idSerie">{{serie.nombre}}</option>
              </select>
            </div>
            <button class="btn btn-success">Crear Personaje</button>
          </form>
      </div>
  </div>
</template>

<script>
import ServiceSeries from './../../services/ServiceSeries.js'
import ServicePersonajes from './../../services/ServicePersonajes'

const serviceSeries = new ServiceSeries();
const servicePersonajes = new ServicePersonajes();

export default {
  name: "CrearPersonaje",
  data() {
    return {
      series: [],
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0
      }
    }
  },
  methods: {
    cargarSeries() {
      serviceSeries.getSeries().then(result => {
        this.series = result;
      })
    },
    enviarPersonaje() {
      servicePersonajes.postPersonaje(this.personaje).then(result => {
        if (result) {
          this.$router.push("/");
        }
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