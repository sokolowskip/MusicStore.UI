(function(){
	class NewAlbumController{
		constructor($routeParams, $location, albumsService){
			this._genreId = $routeParams.genreId;
			this._albumsService = albumsService;
			this._$location = $location;
		}
		
		reset(){
			this.title = "";
			this.author = "";
			this.description = "";
			this.imageUrl = "";
		}
		
		submit(){
			let album = {
				category: this._genreId,
				name : this.title,
				author : this.author,
				description : this.description,
				imgSrc: this.imageUrl
			};
			
			this._albumsService.addAlbum(album)
				.then(success => {
					if(success) this._$location.path('/albums/' + this._genreId);
				});
		}
		
		get genreId(){ return this._genreId; }
	}
	
	angular
		.module('app.albums')
		.controller('newAlbumController', NewAlbumController);
})();