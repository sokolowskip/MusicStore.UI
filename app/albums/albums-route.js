(function(){
	angular
		.module('app.albums')
		.config(config);
	
	config.$inject = ['$routeProvider'];
		
	function config($routeProvider){
		$routeProvider.when('/albums/:albumId', {
			templateUrl: 'albums/albums.html',
			controller: 'albumsController',
			controllerAs: "albumsCtrl"
		});
	};
})();