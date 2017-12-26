/**
 * Created by Adrien Hascour on 18/12/2017.
 */
/* global angular */
angular.module('digifood').service("EntrepriseService", function () {

    /* ads is for tests purposes */
    var ads = [{
            "title": "Lead Developpeur 1",
            "area": "Paris 15, FRANCE",
            "url": "#"
    }, {
            "title": "Lead Developpeur 2",
            "area": "Paris 15, FRANCE",
            "url": "#"
    }, {
            "title": "Lead Developpeur 3",
            "area": "Paris 15, FRANCE",
            "url": "#"
    }, {
            "title": "Lead Developpeur 4",
            "area": "Paris 15, FRANCE",
            "url": "#"
    }];

    this.getJobs = function () {
        return ads;
        //call API to get list of jobs here
    };
});
