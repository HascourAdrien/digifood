/**
 * Created by Adrien Hascour on 11/12/2017.
 */
/* global angular */

angular.module('digifood').controller('HomeCtrl', function () {
    var vm = this;
    
    vm.listPartners = [
        { name: "aha", url: "img/PARTNERS/STADES/aha.png"},
        { name: "allianz", url: "img/PARTNERS/STADES/allianz.png"},
        { name: "bilbao", url: "img/PARTNERS/STADES/bilbao.png"},
        { name: "coke", url: "img/PARTNERS/STADES/coke.png"},
        { name: "dfco", url: "img/PARTNERS/STADES/dfco.png"},
        { name: "ebplo", url: "img/PARTNERS/STADES/ebplo.png"},
        { name: "fcsm", url: "img/PARTNERS/STADES/fcsm.png"},
        { name: "lnr", url: "img/PARTNERS/STADES/lnr.png"},
        { name: "lou", url: "img/PARTNERS/STADES/lou.png"},
        { name: "mhr", url: "img/PARTNERS/STADES/mhr.png"},
        { name: "ogcn", url: "img/PARTNERS/STADES/ogcn.png"},
        { name: "om", url: "img/PARTNERS/STADES/om.png"},
        { name: "sdf", url: "img/PARTNERS/STADES/sdf.png"},
        { name: "sfp", url: "img/PARTNERS/STADES/sfp.png"},
        { name: "sua", url: "img/PARTNERS/STADES/sua.png"},
        { name: "uefa", url: "img/PARTNERS/STADES/uefa.png"},
        { name: "uson", url: "img/PARTNERS/STADES/uson.png"},
        { name: "apaf", url: "img/PARTNERS/SALONS/apaf.png"},
        { name: "franchise", url: "img/PARTNERS/SALONS/franchise.png"},
        { name: "japanexp", url: "img/PARTNERS/SALONS/japanexp.png"},
        { name: "sandwichshow", url: "img/PARTNERS/SALONS/sandwichshow.png"},
        { name: "siae", url: "img/PARTNERS/SALONS/siae.png"},
        { name: "wsn", url: "img/PARTNERS/SALONS/wsn.png"}
    ];
    
    var buildSlides = function(arrayToSplice, imgPerSlide) {
        vm.finalArray = [];
        
        angular.forEach(arrayToSplice, function(value, key) {
            vm.finalArray.push(arrayToSplice.splice(0,imgPerSlide));
        });
    }
    
    buildSlides(vm.listPartners, 4);

});
