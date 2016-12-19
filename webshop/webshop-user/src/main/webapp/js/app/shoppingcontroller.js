(function() {
	'use strict';
	angular.module('userapp').controller('ShoppingCtrl', ShoppingCtrl);
	ShoppingCtrl.$inject = [ '$scope', '$log', '$location', '$cookies', '$rootScope',
			'OrderService' ];
	function ShoppingCtrl($scope, $log, $location, $cookies, $rootScope,
			OrderService) {
		$scope.itemsList = [];
		$scope.placeOrder = placeOrder;
		if (!(angular.isUndefined($cookies.cartItems) || $cookies.cartItems == null)) {
			$log.debug("55555 : ");
			try {
				$scope.itemsList = JSON.parse($cookies.cartItems);
				$log.debug("itemsList : " + $scope.itemsList.length);
			} catch (err) {
				$log.debug("Error in parsing : " + err);
			}
		}
		function placeOrder() {
			var orderEntity = {
				orderId : "",
				userId : "",
				addressId : "",
				status : "INPROGRESS",
				cartItems : null
			}
			try {
				$scope.itemsList = JSON.parse($cookies.cartItems);
				orderEntity.userId = $rootScope.userLoggedIn.userId;
				orderEntity.cartItems = $scope.itemsList
				$log.debug("itemsList : " + $scope.itemsList.length);
			} catch (err) {
				$log.debug("Error in parsing : " + err);
			}
			$log.debug("orderEntity : " + JSON.stringify($scope.itemsList));
			$log.debug("orderEntity : " + JSON.stringify(orderEntity));
			OrderService.placeOrder(JSON.stringify(orderEntity)).then(function(data) {
				$log.debug("Order palced ");
				$cookies.cartItems = null;
				$location.url('/home');
			}, function(err) {
				$log.debug("Order failed ");
				$location.url('/home');
			});
		}
	}
})();