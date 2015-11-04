(function(){
    'use strict';
    angular.module('myApp.view2', ['ngRoute']);
    
    angular.module('myApp.view2')
        .config(config)
        .controller('View2Ctrl', View2Ctrl);
    
    function config($routeProvider){
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'view2'
        });
    }
            
    function View2Ctrl(){
    }    
})();
