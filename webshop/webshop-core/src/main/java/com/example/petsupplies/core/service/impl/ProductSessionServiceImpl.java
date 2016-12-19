package com.example.petsupplies.core.service.impl;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.petsupplies.core.backend.dao.ProductDAO;
import com.example.petsupplies.core.backend.entity.ProductEntity;
import com.example.petsupplies.core.common.constants.Constants;
import com.example.petsupplies.core.model.ProductSearchFilter;


/**
 * ProductSessionServiceImpl is used to add/edit/display the products.
 * @author Jeetendra
 * @version 1.0
 * @since 2015-06-12
 */
@RestController
public class ProductSessionServiceImpl
{

   private ProductDAO productDAO;

   //@RequestMapping(value="/products",method = RequestMethod.GET)
   public List<ProductEntity> getProducts(@RequestBody ProductSearchFilter searchFilter)
   {
      // TODO Auto-generated method stub
      return productDAO.getProducts(searchFilter);
   }

   @RequestMapping(value="/products", method = RequestMethod.GET)
   public List<ProductEntity> getAllProducts()
   {
      return productDAO.getAllProducts();
   }

  
   @RequestMapping(value="/products", method = RequestMethod.POST)
   public String createProduct(@RequestBody ProductEntity productEntity)
   {
      if(productDAO.createProduct(productEntity)){
    	  return Constants.SUCCESS;
      }else{
    	  return Constants.FAILED;
      }
   }

   
   public ProductEntity getProduct(Long productId)
   {
      return productDAO.getProduct(productId);
   }
   
   @RequestMapping(value="/products", method = RequestMethod.PUT)
   public String editProduct(ProductEntity productEntity)
   {
	   if(productDAO.editProduct(productEntity)){
	    	  return Constants.SUCCESS;
	      }else{
	    	  return Constants.FAILED;
	      }
   }

   @RequestMapping(value="/products", method = RequestMethod.DELETE)
   public boolean deleteProduct(ProductEntity productEntity)
   {
      return productDAO.deleteProduct(productEntity);
   }

}
