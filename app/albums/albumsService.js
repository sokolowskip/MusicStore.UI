(function(){			
	class AlbumsService{
		constructor($http){
			this._$http = $http;
		}
		
		getByGenre(genre){
			return this._$http
				.get('data/albums.json')
				.then(response => filterCategories(response.data));
				
			function filterCategories(albums){
				return albums.filter(a => a.category == genre);
			}
		}
	}
	
	AlbumsService.$inject = ['$http'];
	
	angular
		.module("app.albums")
		.service("albumsService", AlbumsService);

})();