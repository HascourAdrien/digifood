/**
 * Created by Adrien Hascour on 11/12/2017.
 */
/* global angular */

angular.module('digifood').controller('ProductCtrl', ['$state', function ($state) {
    var vm = this;
    
    vm.page = $state.params.page;

}]);
