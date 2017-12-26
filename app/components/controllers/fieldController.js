/**
 * Created by Adrien Hascour on 11/12/2017.
 */
/* global angular */

angular.module('digifood')

    .controller('FieldCtrl', ['$state', function ($state) {
        var vm = this;

        vm.listPartners = {
            "enceintes-sportives": [
                { url: "img/PARTNERS/STADES/aha.png", name: "aha"},
                { url: "img/PARTNERS/STADES/allianz.png", name: "allianz"},
                { url: "img/PARTNERS/STADES/bilbao.png", name: "bilbao"},
                { url: "img/PARTNERS/STADES/coke.png", name: "coke"},
                { url: "img/PARTNERS/STADES/dfco.png", name: "dfco"},
                { url: "img/PARTNERS/STADES/ebplo.png", name: "ebplo"},
                { url: "img/PARTNERS/STADES/fcsm.png", name: "fcsm"},
                { url: "img/PARTNERS/STADES/lnr.png", name: "lnr"},
                { url: "img/PARTNERS/STADES/lou.png", name: "lou"},
                { url: "img/PARTNERS/STADES/mhr.png", name: "mhr"},
                { url: "img/PARTNERS/STADES/ogcn.png",name: "ogcn"},
                { url: "img/PARTNERS/STADES/om.png", name: "om"},
                { url: "img/PARTNERS/STADES/sdf.png", name: "sdf"},
                { url: "img/PARTNERS/STADES/sfp.png", name: "sfp"},
                { url: "img/PARTNERS/STADES/sua.png", name: "sua"},
                { url: "img/PARTNERS/STADES/uefa.png", name: "uefa"},
                { url: "img/PARTNERS/STADES/uson.png", name: "uson"}
            ],
            "salons-professionnels": [
                { url: "img/PARTNERS/SALONS/apaf.png", name: "apaf"},
                { url: "img/PARTNERS/SALONS/franchise.png", name: "franchise"},
                { url: "img/PARTNERS/SALONS/japanexp.png", name: "japanexp"},
                { url: "img/PARTNERS/SALONS/sandwichshow.png", name: "sandwichshow"},
                { url: "img/PARTNERS/SALONS/siae.png", name: "siae"},
                { url: "img/PARTNERS/SALONS/wsn.png", name: "wsn"}
            ],
            "salles-de-concert": [
                { url: "img/PARTNERS/CONCERTS/aha.png", name: "aha"},
                { url: "img/PARTNERS/CONCERTS/allianz.png", name: "allianz"},
                { url: "img/PARTNERS/CONCERTS/sdf.png", name: "sdf"}
            ]
        };
    
    var buildSlides = function(arrayToSplice, imgPerSlide) {
        vm.finalArray = [];
        
        angular.forEach(arrayToSplice, function(value, key) {
            vm.finalArray.push(arrayToSplice.splice(0,imgPerSlide));
        });
    }
    
    

        vm.init = function () {
            vm.page = $state.params.page;

            buildSlides(vm.listPartners[vm.page], 4);
            /* get current page url after sub header click (i.e: bornes-tactile) needed to find correct wording zone */

        };

        vm.init();
    }]);
