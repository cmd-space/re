var reApp = angular.module('reApp', ['ngRoute', 'ui.bootstrap']);

reApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html'
		})
		.when('/72', {
			templateUrl: 'partials/72.html'
		})
		.when('/grm', {
			templateUrl: 'partials/grm.html'
		})
		.when('/gsi', {
			templateUrl: 'partials/gsi.html'
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
	$scope.rule72 = function() {
		var rate = parseInt($scope.rule72.rate);
		$scope.calculate72 = 72.73 / rate;
		$scope.calculate72 = $scope.calculate72.toFixed(2);
	}

	$scope.grm = function() {
		var value = parseInt($scope.grm.marketvalue);
		var income = parseInt($scope.grm.income);
		$scope.calculateGrm = value / income;
		$scope.calculateGrm = $scope.calculateGrm.toFixed(2);
	}

	$scope.gsi = function() {
		var actual = parseInt($scope.gsi.actual);
		var vacant = parseInt($scope.gsi.vacant);
		$scope.calculateGsi = actual + vacant;
		$scope.calculateGsi = $scope.calculateGsi.toFixed(2);
	}
});