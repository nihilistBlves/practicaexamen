<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="col-6 text-center">
          <div class="row d-flex justify-content-center">
            <div class="col">
              <h1>Ver Personajes</h1>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <router-link :to="'/series/'+idSerie" class="btn btn-secondary">Volver</router-link>
            </div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pj, index) in personajes" :key="index">
                <td>{{pj.idPersonaje}}</td>
                <td>{{pj.nombre}}</td>
                <td>
                  <img :src="pj.imagen" height="100px" width="100px">
                </td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import ServicePersonajes from './../../services/ServicePersonajes.js'

const servicePersonajes = new ServicePersonajes();

export default {
  name: "VerPersonajesSerie",
  data() {
    return {
      idSerie: 0,
      personajes: []
    }
  },
  methods: {
    cargarPersonajes() {
      servicePersonajes.getPersonajesBySerie(this.$route.params.idSerie).then(result => {
        this.personajes = result;
        console.log(this.personajes);
      });
    }
  },
  mounted() {
    this.idSerie = this.$route.params.idSerie;
    this.cargarPersonajes();
  }
}
</script>

<style>

</style>