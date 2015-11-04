(function(){
	angular
		.module('app.albums')
		.controller('albumsController', albumsController);
		
	albumsController.$inject = ['$routeParams'];
		
	function albumsController($routeParams){
		self = this;
		self.albums = findAlbums($routeParams.albumId);
		
		function findAlbums(category){
			if(category === 'rock'){
				return [
					{name: 'Kill \'Em All'},
					{name: 'Master of Puppets'}
				]; 
			}
			else{
				return [
					{name: 'Texas Flood'},
					{name: 'Unplagged'},
					{name:'The last warrior'}
				];
			}
		}
	}
})();