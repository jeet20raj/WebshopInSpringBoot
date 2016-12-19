(function() {
	'use strict';
	angular.module('adminapp').controller('AdminCtrl', AdminCtrl);
	AdminCtrl.$inject = [ '$scope', '$rootScope', '$log', '$location',
			'UserService' ];
	function AdminCtrl($scope, $rootScope, $log, $location, UserService) {
		$scope.login = login;
		$scope.register = register;
		$rootScope.contextPath=$location.absUrl().substr(0, $location.absUrl().lastIndexOf("#"));
		$scope.reset = function() {
			$scope.newMember = {
				userName : "",
				firstName : "",
				lastName : "",
				password : "",
				confirmPassword : ""
			};
			$rootScope.userLoggedIn = null;
		};
		
		$scope.init = function() {
			UserService.getTranslation().then(function(data) {
				$log.debug("Inside success");
				$rootScope.translation = data;
				$log.debug("Translated Message : "+$scope.translation.WelocmeMessage);
			}, function(error) {
				$log.debug("Registration failed");
			});
		};

		function login() {
			$log.debug("Login Starts");
			var promiseObj = UserService.GetByUsername($scope.username,
					$scope.password);
			promiseObj.then(function(data) {
				$log.debug("Inside success");
				$log.debug("User Logged In"+data.firstName);
				$rootScope.userLoggedIn = data;
				$location.url('/home');
			}, function(error) {
				$log.debug("Login failed");
			});

		}

		function register() {
			$log.debug("Registration Starts");
			$log.debug("User first name : "+$scope.newMember.firstName);
			UserService.Create($scope.newMember).then(function(data) {
				$log.debug("Inside success");
				$rootScope.userLoggedIn = data;
				$location.url('/home');
			}, function(error) {
				$log.debug("Registration failed");
			});
		}
		$scope.reset();
		$scope.init();
		$log.debug("Base URL : "+$rootScope.contextPath);
	}
})();