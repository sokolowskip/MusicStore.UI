(function(){
	'use strict';
	angular
		.module('app')
		.directive('msMenu', msMenu);
	
	function msMenu(){
		return {
			 templateUrl: 'menu/menu.html',
			 restrict:'E',
			 controller: 'menuController',
			 controllerAs: 'menuCtrl'
		};
	}
})();