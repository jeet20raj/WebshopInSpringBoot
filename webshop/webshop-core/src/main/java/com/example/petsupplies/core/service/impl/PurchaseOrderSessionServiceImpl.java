package com.example.petsupplies.core.service.impl;

import com.example.petsupplies.core.backend.dao.PurchaseOrderDAO;
import com.example.petsupplies.core.backend.entity.CartItemEntity;
import com.example.petsupplies.core.backend.entity.OrderEntity;

/**
 * PurchaseOrderSessionServiceImpl is used place order.
 * 
 * @author Jeetendra
 * @version 1.0
 * @since 2015-08-17
 */
public class PurchaseOrderSessionServiceImpl {
	private PurchaseOrderDAO purchaseOrderDAO;

	
	public String processOrder(OrderEntity orderEntity) {
		for (CartItemEntity cartItemEntity : orderEntity.getCartItems()) {
			cartItemEntity.setOrderEntity(orderEntity);
		}
		if (purchaseOrderDAO.processOrder(orderEntity)) {
			return "Success";
		} else {
			return "Failed";
		}
	}
}
