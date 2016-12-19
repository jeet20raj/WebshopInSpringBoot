(function() {
	'use strict';
	angular.module('adminapp').factory('ProductService', ProductService);
	ProductService.$inject = [ '$http', '$log', '$rootScope' ];
	function ProductService($http, $log, $rootScope) {
		var service = {};
		var dataToBeUsed = null;
		service.getAllProducts = getAllProducts;
		service.createProduct = createProduct;
		service.editProduct = editProduct;
		service.getAllCategories = getAllCategories;
		service.createCategory = createCategory;
		service.setData = setData;
		service.getData = getData;
		return service;
		function getAllProducts() {
			return $http.get($rootScope.contextPath + 'products').then(
					handleSuccess,
					handleError('Error getting user by username'));
		}

		function createProduct(product) {
			$log.debug(JSON.stringify(product));
			return $http
					.post($rootScope.contextPath + 'products', product)
					.then(handleSuccess,
							handleError('Error getting user by username'));
		}
		
		function editProduct(product) {
			$log.debug(JSON.stringify(product));
			return $http
					.put($rootScope.contextPath + 'products', product)
					.then(handleSuccess,
							handleError('Error getting user by username'));
		}

		function getAllCategories() {
			return $http.get($rootScope.contextPath + 'categories').then(
					handleSuccess,
					handleError('Error getting user by username'));
		}

		function createCategory(category) {
			$log.debug(JSON.stringify(category));
			return $http.post($rootScope.contextPath + 'categories',
					category).then(handleSuccess,
					handleError('Error getting user by username'));
		}

		function handleSuccess(response) {
			$log.debug("Inside handleSuccess");
			return response.data;
		}

		function handleError(error) {
			return function() {
				return {
					success : false,
					message : error
				};
			};
		}

		function setData(dataToBePassed) {
			dataToBeUsed = dataToBePassed;
		}
		function getData() {
			return dataToBeUsed;
		}
	}
})();