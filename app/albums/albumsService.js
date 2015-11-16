/*global angular*/

(function(){			
	const albumsKey = 'ms.albums';
	
	class AlbumsService{
		constructor($http, $q){
			this._$q = $q;
			this._$http = $http;
		}
		
		getByGenre(genre){
			return this._getAlbums()
				.then(albums => albums.filter(a => a.category == genre))
		}
		
		_getAlbums(){
			let albums = localStorage[albumsKey];
			if(albums){
				let deferredAlbums = this._$q.defer();
				deferredAlbums.resolve(JSON.parse(albums));
				return deferredAlbums.promise;
			}
			return this._$http
				.get('data/albums.json')
				.then(response => {
					localStorage[albumsKey] = JSON.stringify(response.data);
					return response.data;
				});
		}
	}
	
	
	AlbumsService.$inject = ['$http', '$q'];
	
	angular
		.module("app.albums")
		.service("albumsService", AlbumsService);

})();