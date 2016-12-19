(function() {
	'use strict';
	angular.module('userapp').controller('HomeCtrl', HomeCtrl);
	HomeCtrl.$inject = [ '$scope', '$log', '$location', '$cookies', '$route',
			'ProductService','CartService' ];
	function HomeCtrl($scope, $log, $location, $cookies, $route,
			ProductService,CartService) {
		$scope.getAllproducts = getAllproducts;
		$scope.productsList = [];
		$scope.addToCart = addToCart;
		$scope.itemsList = [];
		var myCart = CartService.cart;
		function getAllproducts() {
			$log.debug("getAllproducts Starts");
			ProductService.getAllProducts().then(function(data) {
				$log.debug("Inside getAllProducts success");
				$scope.productsList = data;
			}, function(error) {
				$log.debug("Load products failed");
			});
		}

		function addToCart(productId) {
			myCart.addToCart(productId,$scope.productsList,$log,$cookies);
			$location.path('/home');
			$route.reload();
		}
		$scope.getAllproducts();
		if (!(angular.isUndefined($cookies.cartItems) || $cookies.cartItems == null)) {
			$log.debug("55555 : ");
			try {
				$scope.itemsList = JSON.parse($cookies.cartItems);
				$log.debug("itemsList : " + $scope.itemsList.length);
			} catch (err) {
				$log.debug("Error in parsing : " + err);
			}
		}
	}
})();