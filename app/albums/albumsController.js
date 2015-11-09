(function(){			
	
	class AlbumsController{
		constructor($routeParams, albumsService){
			this._albums = albumsService.getByGenre($routeParams.genreId);
		}
		
		get albums() { return this._albums;}
	}
	
	AlbumsController.$inject = ['$routeParams', 'albumsService'];
	
	angular
		.module('app.albums')
		.controller('albumsController', AlbumsController);
})();