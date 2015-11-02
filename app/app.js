'use strict';

(function(){
    angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2'
        ]);
        
    angular
        .module('myApp')
        .config(config);
    
    function config($routeProvider){
        $routeProvider.otherwise({redirectTo: '/view1'});
    }    
})();

