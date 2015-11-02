'use strict';

(function(){
    angular.module('myApp.view1', ['ngRoute']);
    
    angular.module('myApp.view1')
        .config(config)
        .controller('View1Ctrl', View1Ctrl);
    
    function config($routeProvider){
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'view1'
        });
    }
            
    function View1Ctrl(){        
    }    
})();

