(function(){			
	
	class AlbumsController{
		constructor($routeParams, albumsService){
			this._genreId = $routeParams.genreId;
			albumsService
				.getByGenre($routeParams.genreId)
				.then(albums => this._albums = albums);
		}
		
		get albums() { return this._albums;}
		
		get genreId() {return this._genreId;}
	}
	
	AlbumsController.$inject = ['$routeParams', 'albumsService'];
	
	angular
		.module('app.albums')
		.controller('albumsController', AlbumsController);
})();