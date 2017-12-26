/**
 * Created by Adrien Hascour on 11/12/2017.
 */
/* global angular */

angular.module('digifood').controller('EntrepriseCtrl', function (EntrepriseService) {
    var vm = this;
    
    vm.list = {
        "partners": [
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
            { url: "img/PARTNERS/STADES/uson.png", name: "uson"},
            { url: "img/PARTNERS/SALONS/apaf.png", name: "apaf"},
            { url: "img/PARTNERS/SALONS/franchise.png", name: "franchise"},
            { url: "img/PARTNERS/SALONS/japanexp.png", name: "japanexp"},
            { url: "img/PARTNERS/SALONS/sandwichshow.png", name: "sandwichshow"},
            { url: "img/PARTNERS/SALONS/siae.png", name: "siae"},
            { url: "img/PARTNERS/SALONS/wsn.png", name: "wsn"}
        ],
        "press": [
            { url: "img/ENTREPRISE/Bitmap1.png", name: "le Parisien"},
            { url: "img/ENTREPRISE/Bitmap2.png", name: "france 2"},
            { url: "img/ENTREPRISE/Bitmap3.png", name: "l'Equipe"},
            { url: "img/ENTREPRISE/Bitmap4.png", name: "lesEchos"},
            { url: "img/ENTREPRISE/Bitmap5.png", name: "Figaro"},
            { url: "img/ENTREPRISE/Bitmap6.png", name: "journal du Dimanche"},
            { url: "img/ENTREPRISE/Bitmap7.png", name: "Le Monde"},
            { url: "img/ENTREPRISE/Bitmap8.png", name: "JDN"},
            { url: "img/ENTREPRISE/Bitmap9.png", name: "20Minutes"},
            { url: "img/ENTREPRISE/Bitmap11.png",name: "Forbes"},
            { url: "img/ENTREPRISE/Bitmap12.png", name: "france Bleu"},
            { url: "img/ENTREPRISE/Bitmap13.png", name: "iTele"},
            { url: "img/ENTREPRISE/Bitmap14.png", name: "BFMtv"},
            { url: "img/ENTREPRISE/Bitmap15.png", name: "Europe1"},
            { url: "img/ENTREPRISE/Bitmap16.png", name: "RTL"},
            { url: "img/ENTREPRISE/Bitmap17.png", name: "TRL2"},
            { url: "img/ENTREPRISE/Bitmap18.png", name: "GQ"}
        ],
        "supports": [
            { url: "img/ENTREPRISE/support1.png", name: "HP"},
            { url: "img/ENTREPRISE/support2.png", name: "Paris&CO food"},
            { url: "img/ENTREPRISE/support3.png", name: "LeVillage"},
            { url: "img/ENTREPRISE/support4.png", name: "SNCF"},
            { url: "img/ENTREPRISE/support5.png", name: "ReimagineFood"},
            { url: "img/ENTREPRISE/support6.png", name: "D-Incubator"},
            { url: "img/ENTREPRISE/support7.png", name: "Paris&Co Tremplin"},
            { url: "img/ENTREPRISE/support8.png", name: "uniClen"}
        ]
    };
    
    var buildSlides = function(arrayToSplice, imgPerSlide) {
        vm.finalArray = [];
        
        angular.forEach(arrayToSplice, function(value, key) {
            vm.finalArray.push(arrayToSplice.splice(0,imgPerSlide));
        });
    }
    
    vm.init = function () {
        vm.jobs = EntrepriseService.getJobs(); // components/services/

        buildSlides(vm.list.partners, 4);
        /* get current page url after sub header click (i.e: bornes-tactile) needed to find correct wording zone */


    };

    vm.init();
});
