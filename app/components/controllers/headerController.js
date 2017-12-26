/**
 * Created by Adrien Hascour on 11/12/2017.
 */
/* global angular */
angular.module('digifood')

    .controller('HeaderCtrl', function ($state) {
        var vm = this;

        vm.go = function (tpl, state) {
            $state.go(tpl, {
                page: state
            });
        };
    });
