<template>
   <div class="row d-flex justify-content-center mt-3">
      <div class="col-6 text-center">
          <h1>Modificar Personaje</h1>
          <form v-on:submit.prevent="modificarPersonaje">
              <div class="mb-3">
                <label class="form-label" for="">Seleccione una serie</label>
                <select class="form-select" v-model="idSerie" @change="mostrarImgSerie">
                    <option v-for="(serie, index) in series" :key="index" :value="serie.idSerie">                                
                        {{serie.nombre}}
                    </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label" for="">Seleccione un personaje</label>
                <select class="form-select" v-model="idPersonaje" @change="mostrarImgPersonaje">
                    <option v-for="(pj, index) in personajes" :key="index" :value="pj.idPersonaje">
                        {{pj.nombre}}
                    </option>
                </select>
              </div>
              <button class="btn btn-success">Modificar Personaje</button>
          </form>
          <div class="row d-flex justify-content-center">
              <div class="col text-center">
                  <h2>SERIE</h2>
                  <img :src="imgSerie" height="200px" width="200px">
              </div>
              <div class="col text-center">
                  <h2>PERSONAJE</h2>
                  <img :src="imgPersonaje" height="200px" width="200px">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ServiceSeries from './../../services/ServiceSeries.js'
import ServicePersonajes from './../../services/ServicePersonajes.js'

const serviceSeries = new ServiceSeries();
const servicePersonajes = new ServicePersonajes();

export default {
    name: "ModificarPersonaje",
    data() {
        return {
            series: [],
            personajes: [],
            idSerie: 0,
            idPersonaje: 0,
            imgSerie: "",
            imgPersonaje: ""
        }
    },
    methods: {
        cargarDatos() {
            serviceSeries.getSeries().then(result => {
                this.series = result;
            });
            servicePersonajes.getPersonajes().then(result => {
                this.personajes = result;
            });
        },
        modificarPersonaje() {
            servicePersonajes.putPersonaje(this.idSerie, this.idPersonaje).then(result =>{
                if (result) {
                    this.$router.push("/series/"+this.idSerie+"/personajes");
                }
            })
        },
        mostrarImgSerie() {
            this.imgSerie = this.series.filter(serie => serie.idSerie == parseInt(this.idSerie));
        }
    },
    mounted() {
        this.cargarDatos();
    }
}
</script>

<style>

</style>