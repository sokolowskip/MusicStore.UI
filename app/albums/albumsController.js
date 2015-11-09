(function(){			
	
	class AlbumsController{
		constructor($routeParams, albumsService){
			albumsService
				.getByGenre($routeParams.genreId)
				.then(albums => this._albums = albums);
		}
		
		get albums() { return this._albums;}
	}
	
	AlbumsController.$inject = ['$routeParams', 'albumsService'];
	
	angular
		.module('app.albums')
		.controller('albumsController', AlbumsController);
})();