(function(){
	class MenuController{
		constructor($location){
			this._$location = $location;
			this.popularCategories = [
				createCategory('pop','Pop'),
				createCategory('rock','Rock'),
				createCategory('blues','Blues'),
				createCategory('jazz','Jazz'),
				createCategory('metal','Metal'),
				createCategory('electronic','Electronic'),
				createCategory('rap','Rap')];
		
			function createCategory(id, name){
				return {
					id, name
				};
			}
		}
		
		goHome(){
			this._$location.path('/home');
		}
	}
	
	angular
		.module('app')
		.controller('menuController', MenuController);
	
	MenuController.$inject = ['$location'];	
})();