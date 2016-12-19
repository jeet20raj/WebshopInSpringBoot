(function() {
	'use strict';
	angular.module('userapp').factory('CartService',factory);
	function factory() {
		var myCart = new cartStore();
		return {
	        cart: myCart
	    };
	}
})();