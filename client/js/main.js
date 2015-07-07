var reApp = angular.module('reApp', ['ngRoute']);

reApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

reApp.controller('calcsController', function($scope) {

});