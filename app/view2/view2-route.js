(function(){
    'use strict';
    angular
        .module('myApp.view2')
        .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs: 'view2'
        });
    }
})();
