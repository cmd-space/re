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

reApp.controller('calcsController', function($scope) {

});