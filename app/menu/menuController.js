(function(){
	angular
		.module('app')
		.controller('menuController', menuController);
	
	menuController.$inject = ['$location'];	
	
	function menuController($location){
		self = this;
		
		self.popularCategories = [
			createCategory('pop','Pop'),
			createCategory('rock','Rock'),
			createCategory('blues','Blues'),
			createCategory('jazz','Jazz'),
			createCategory('metal','Metal'),
			createCategory('electronic','Electronic'),
			createCategory('rap','Rap'),
			createCategory('latin','Latin')	
		];
		
		self.goHome = function(){
			$location.path('/home');
		}
		
		function createCategory(id, name){
			return {
				id : id,
				name : name
			}
		}
	};
	
	
})();