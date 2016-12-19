(function() {
	'use strict';
	angular.module('adminapp').controller('ProductCtrl', ProductCtrl);
	ProductCtrl.$inject = ['$scope', '$rootScope', '$log', '$location','$routeParams',
			'ProductService'];
	function ProductCtrl($scope, $rootScope, $log, $location, $routeParams, ProductService) {
		$scope.createCategory = createCategory;
		$scope.createProduct = createProduct;
		$scope.editProduct = editProduct;
		$scope.getAllCategories = getAllCategories;
		$scope.initilizeCategory = initilizeCategory;
		$scope.categoriesList = [];
		$scope.category=null;
		$scope.selectedCategory=null;
		$log.debug("State Params : "+$routeParams.isEdit);
		$scope.isEdit = $routeParams.isEdit;
		$scope.reset = function() {
		$scope.newProduct = {
			    productName : "",
			    categoryEntity : null,
				brand : "",
				price : "",
				discount : ""
			};
			
			
			$scope.category = {
					categoryName : "",
					description : ""
				};
		};
		
		function createCategory() {
			$log.debug("createCategory Starts");
			$log.debug("categoryId : "+$scope.category.categoryName);
			ProductService.createCategory($scope.category).then(function(data) {
				$log.debug("Inside createCategory success");
				$location.url('/home');
			}, function(error) {
				$log.debug("Create category failed");
			});
		}
        
		function createProduct() {
			$log.debug("Create product starts");
			$scope.newProduct.categoryEntity = $scope.selectedCategory;
			$log.debug("categoryId : "+$scope.newProduct.categoryEntity.categoryId);
			ProductService.createProduct($scope.newProduct).then(function(data) {
				$log.debug("Inside createProduct success");
				$location.url('/home');
			}, function(error) {
				$log.debug("Create product failed");
			});
		}
		
		function editProduct() {
			$log.debug("Edit product starts");
			$scope.newProduct.categoryEntity = $scope.selectedCategory;
			$log.debug("categoryId : "+$scope.newProduct.categoryEntity.categoryId);
			ProductService.editProduct($scope.newProduct).then(function(data) {
				$log.debug("Inside editProduct success");
				$location.url('/home');
			}, function(error) {
				$log.debug("Edit product failed");
			});
		}
		
		function getAllCategories() {
			$log.debug("getAllCategories Starts");
			ProductService.getAllCategories().then(function(data) {
				$log.debug("Inside getAllCategories success");
				$scope.categoriesList = data;
				$scope.selectedCategory = $scope.categoriesList[0];
			}, function(error) {
				$log.debug("Load categories failed");
			});

		}
		function initilizeCategory() {
			$scope.reset();
			$log.debug("is edit flag : "+$scope.isEdit);
			if((!angular.isUndefined($scope.isEdit) && $scope.isEdit=="true")){
				var data = ProductService.getData();
				if(!(angular.isUndefined(data) || data === null)){
					$scope.newProduct = data;
					$log.debug("Passed Data : "+$scope.newProduct);
				}
			}
			$scope.getAllCategories();
		}
		
	}
})();