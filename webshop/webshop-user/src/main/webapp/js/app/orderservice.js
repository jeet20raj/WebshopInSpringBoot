(function() {
	'use strict';
	angular.module('userapp').factory('OrderService', OrderService);
	OrderService.$inject = [ '$http', '$log', '$rootScope' ];
	function OrderService($http, $log, $rootScope) {
		var service = {};
		service.placeOrder = placeOrder;
		return service;
		function placeOrder(orderEntity) {
			$log.debug("Place order orderEntity : "+orderEntity);
			return $http.post($rootScope.contextPath + 'rest/orders',
					orderEntity).then(handleSuccess,
					handleError('Error getting data'));
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
	}
})();