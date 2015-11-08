(function(){
	'use strict';
    angular
        .module('app')
        .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider
            .when('/home', {templateUrl: 'home.html'})
            .otherwise({redirectTo: '/home'});
    }    
})();

