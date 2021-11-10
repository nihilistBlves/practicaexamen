import axios from "axios";
import Global from './../components/Global'

export default class ServiceSeries {

    getSeries() {
        return new Promise(function(resolve) {
            var request = "/api/series";
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getOneSerie(idSerie) {
        return new Promise(function(resolve) {
            var request = "/api/series/"+idSerie;
            var url = Global.url + request;
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

}