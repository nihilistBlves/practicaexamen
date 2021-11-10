import axios from "axios";
import Global from './../components/Global'

export default class ServicePersonajes {

    getPersonajes() {
        return new Promise(function(resolve) {
            var request = "/api/personajes";
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getPersonajesBySerie(idSerie) {
        return new Promise(function(resolve) {
            var request = "/api/series/personajesserie/" + idSerie;
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    postPersonaje(personaje) {
        return new Promise(function(resolve) {
            var request = "/api/personajes";
            var url = Global.url + request;
            axios.post(url, personaje).then(() => {
                resolve(true);
            });
        });
    }

    putPersonaje(idSerie, idPersonaje) {
        return new Promise(function(resolve) {
            var request = "/api/personajes/" + idPersonaje + "/" + idSerie;
            var url = Global.url + request;
            axios.put(url).then(() => {
                resolve(true);
            });
        });
    }

}