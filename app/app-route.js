(function(){
	'use strict';
    angular
        .module('myApp')
        .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider.otherwise({redirectTo: '/view1'});
    }    
})();

