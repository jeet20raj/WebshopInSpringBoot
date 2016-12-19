(function() {
	'use strict';
	var myApp = angular.module('userapp', ['ngRoute','ngCookies']).config(config);
	config.$inject = ['$routeProvider', '$httpProvider'];
	function config($routeProvider, $httpProvider,$translateProvider) {
		$routeProvider.when('/login', {
			controller : 'UserCtrl',
			templateUrl : 'pages/login.html',
		}).when('/register', {
			controller : 'UserCtrl',
			templateUrl : 'pages/registration.html',
		}).when('/home', {
			controller : 'HomeCtrl',
			templateUrl : 'pages/home.html',
		}).when('/viewCarts', {
			controller : 'ShoppingCtrl',
			templateUrl : 'pages/viewcarts.html',
		}).otherwise({
			redirectTo : '/login'
		});
		
		/*$translateProvider.translations('en', {
		    WelocmeMessage: 'Welcome to Pet Supplies Shop',
		    INTRO_TEXT: 'And it has i18n support!'
		  });
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escapeParameters');*/
		$httpProvider.defaults.headers.post["Content-Type"] = "application/json";
	}
})();