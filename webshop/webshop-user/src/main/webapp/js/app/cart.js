'use strict';
function cartStore() {
	var cart = {}
	cart.addToCart = addToCart;
	return cart;
	function addToCart(productId, productsList, log, cookies) {
		log.debug("addToCart Starts");
		log.debug("ProductId to be added to cart: " + productId);
		var cartEntity = {
			productId : "",
			productName : "",
			quantity : "",
			productPrice : "",
			totalPrice : "",
			orderEntity : null
		}

		var cartItems = cookies.cartItems;
		log.debug("cartItems before : " + cartItems);
		var selectedProduct = null;
		var selectedItem = null;
		angular.forEach(productsList, function(product) {
			console.log("Product Id : " + product.productId);
			if (product.productId == productId) {
				selectedProduct = product;
			}
		})
		if (angular.isUndefined(cartItems) || cartItems == null) {
			cartItems = [];
			prepareCartEntity(cartEntity,selectedProduct);
			cartItems.push(cartEntity);
		} else {
			try {
				cartItems = JSON.parse(cookies.cartItems);
				log.debug("cartItems after parsing : " + cartItems);
			} catch (err) {
				log.debug("Error in parsing : " + err);
			}
			angular.forEach(cartItems, function(item) {
				console.log("Item Product Id : " + item.productId);
				if (item.productId == productId) {
					selectedItem = item;
				}
			})
			if (selectedItem == null) {
				prepareCartEntity(cartEntity,selectedProduct);
				cartItems.push(cartEntity);
			} else {
				selectedItem.quantity = selectedItem.quantity + 1;
				selectedItem.totalPrice = selectedProduct.discountedPrice
						* selectedItem.quantity;
			}
		}
		cookies.cartItems = JSON.stringify(cartItems);
		log.debug("cartItems after : " + JSON.stringify(cookies.cartItems));
	}
	function prepareCartEntity(cartEntity,selectedProduct){
		cartEntity.productId = selectedProduct.productId;
		cartEntity.productName = selectedProduct.productName;
		cartEntity.quantity = 1;
		cartEntity.productPrice = selectedProduct.discountedPrice;
		cartEntity.totalPrice = selectedProduct.discountedPrice;
	}
}