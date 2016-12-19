(function() {
	'use strict';
	angular.module('adminapp').controller('HomeCtrl', HomeCtrl);
	HomeCtrl.$inject = ['$scope', '$log','$location', 'ProductService'];
	function HomeCtrl($scope, $log, $location, ProductService) {
		$scope.getAllproducts = getAllproducts;
		$scope.editProduct = editProduct;
		$scope.deleteProduct = deleteProduct;
		$scope.productsList = [];
		function getAllproducts() {
			$log.debug("getAllproducts Starts");
			ProductService.getAllProducts().then(function(data) {
				$log.debug("Inside getAllProducts success");
				$scope.productsList = data;
			}, function(error) {
				$log.debug("Load products failed");
			});
		}

		function editProduct(productId) {
			$log.debug("editProduct Starts");
			$log.debug("ProductId to be edited: "+productId);
			$log.debug("Inside editProduct success");
			angular.forEach($scope.productsList, function(product){
				console.log("Product Id : "+product.productId);
				if(product.productId==productId){
					ProductService.setData(product);
				}
            })
			$location.url('/editProduct/true');
		}
		function deleteProduct(productId) {
			$log.debug("editProduct Starts");
			$log.debug("productId : "+productId);
			$log.debug("Inside editProduct success");
			ProductService.setData(productId);
			$location.url('/addProduct');
		}
		$scope.getAllproducts();
	}
})();