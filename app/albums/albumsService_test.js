/* global describe,it,expect,beforeEach,inject,module */

describe("Albums service", () => {
	var albumsController;
	var deferred;
	var $rootScope;
	
	beforeEach(() =>{
		module('app');
		module('app.albums');
	});
		
	beforeEach(inject(($controller, $q, _$rootScope_) => {
		deferred = $q.defer();
		$rootScope = _$rootScope_;
		var albumsService = {
			getByGenre: genre => {
				return deferred.promise;
			}
		};
		albumsController = $controller('albumsController', {albumsService: albumsService});
	}));
	
	function getAlbums(genre){
		if(genre == "rock") return  [{},{}];
		if(genre == "blues") return [{}];
		else return [];
	}
	
	it("returns albums by category", () => {
		deferred.resolve(getAlbums("rock"));	
		$rootScope.$digest();
		expect(albumsController.albums.length).toBe(2);
	});
});