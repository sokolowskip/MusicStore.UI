(function(){
	angular
		.module('app.albums')
		.controller('albumsController', albumsController);
		
	albumsController.$inject = ['$routeParams', 'albumsService'];
		
	function albumsController($routeParams, albumsService){
		self = this;
		self.albums = albumsService.getByGenre($routeParams.genreId);
	}
})();