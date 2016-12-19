(function () {
    'use strict';
    angular.module('adminapp').factory('UserService', UserService);
    UserService.$inject = ['$http','$log','$rootScope'];
    function UserService($http,$log,$rootScope) {
        var service = {};
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.getTranslation = getTranslation;
        return service;
        function GetByUsername(username,password) {
        	$log.debug("Application Path :"+$rootScope.contextPath);
        	return $http.get($rootScope.contextPath +'users?userName='+ username+"&password="+password).then(handleSuccess, handleError('Error getting user by username'));
        }
        function Create(user) {
        	$log.debug(JSON.stringify(user));
            return $http.post($rootScope.contextPath+'users',user).then(handleSuccess, handleError('Error creating user'));
        }
        
        function getTranslation () {
        	return $http.get($rootScope.contextPath +'translations').then(handleSuccess, handleError('Error getting user by username'));
        };
 
        function handleSuccess(response) {
        	$log.debug("Inside handleSuccess");
        	$log.debug(angular.fromJson(response.data));
            return response.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
})();