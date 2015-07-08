var reApp = angular.module('reApp', ['ngRoute', 'ui.bootstrap']);

reApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

angular.module('reApp').controller('DropdownCtrl', function ($scope, $log) {
	// $scope.items = [
	// 'The first choice!',
	// 'And another choice for you.',
	// 'but wait! A third!'
	// ];

	$scope.status = {
		isopen: false
	};

	$scope.toggled = function(open) {
		$log.log('Dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
	};
});

reApp.controller('calcsController', function($scope) {

});