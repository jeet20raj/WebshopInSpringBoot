(function() {
	'use strict';
	angular.module('adminapp', ['ngRoute','ui.router']).config(config);
	config.$inject = ['$routeProvider', '$httpProvider','$stateProvider','$urlRouterProvider'];
	function config($routeProvider, $httpProvider,$stateProvider,$urlRouterProvider) {
		$routeProvider.when('/login', {
			controller : 'AdminCtrl',
			templateUrl : './resources/pages/login.html',
		}).when('/register', {
			controller : 'AdminCtrl',
			templateUrl : './resources/pages/registration.html',
		}).when('/home', {
			controller : 'HomeCtrl',
			templateUrl : './resources/pages/home.html',
		}).when('/addCategory', {
			controller : 'ProductCtrl',
			templateUrl : './resources/pages/addcategory.html',
		}).when('/addProduct/:isEdit?', {
			controller : 'ProductCtrl',
			templateUrl : './resources/pages/addproduct.html',
		}).when('/editProduct/:isEdit?', {
			controller : 'ProductCtrl',
			templateUrl : './resources/pages/editproduct.html',
		}).otherwise({
			redirectTo : '/login'
		});
		
		/*$stateProvider
        .state('login', {
            url:'/login',
            controller : 'AdminCtrl',
			templateUrl : 'pages/login.html'
        })
        .state('register', {
        	url:'/register',
        	controller : 'AdminCtrl',
			templateUrl : 'pages/registration.html'
        }).state('home', {
        	url:'/home',
        	controller : 'HomeCtrl',
			templateUrl : 'pages/home.html'
        }).state('addCategory', {
        	url:'/addCategory',
        	controller : 'ProductCtrl',
			templateUrl : 'pages/addcategory.html'
        }).state('addProduct', {
        	url:'/addProduct/:isEdit',
        	controller : 'ProductCtrl',
			templateUrl : 'pages/addproduct.html'
        }).state('editProduct', {
        	url:'/editProduct',
        	controller : 'ProductCtrl',
			templateUrl : 'pages/editproduct.html'
        });
		$urlRouterProvider.otherwise('/login');*/
		/*$translateProvider.translations('en', {
		    WelocmeMessage: 'Welcome to Pet Supplies Shop',
		    INTRO_TEXT: 'And it has i18n support!'
		  });
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escapeParameters');*/
		$httpProvider.defaults.headers.post["Content-Type"] = "application/json";
	}
})();