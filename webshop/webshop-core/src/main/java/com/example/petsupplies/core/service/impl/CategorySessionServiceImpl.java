package com.example.petsupplies.core.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.petsupplies.core.backend.entity.CategoryEntity;
import com.example.petsupplies.core.backend.repositories.CategoryRepository;
import com.example.petsupplies.core.common.constants.Constants;

@RestController
public class CategorySessionServiceImpl{

	//private CategoryDAO categoryDAO;
	@Autowired
	private CategoryRepository categoryRepository;
	

	@RequestMapping(value="/categories",method = RequestMethod.GET)
	public List<CategoryEntity> getCategories() {
		return categoryRepository.findAll();
	}

	@RequestMapping(value="/categories",method = RequestMethod.POST)
	public String createCategory(CategoryEntity categoryEntity){
		if(null != categoryRepository.saveAndFlush(categoryEntity)){
			return Constants.SUCCESS;
		}else{
			return Constants.FAILED;
		}
		
	}

	@RequestMapping(value="/categories",method = RequestMethod.PUT)
	public boolean editCategory(CategoryEntity categoryEntity){
		if(null != categoryRepository.saveAndFlush(categoryEntity)){
			return true;
		}else{
			return false;
		}
	}

	@RequestMapping(value="/categories",method = RequestMethod.DELETE)
	public boolean deleteCategory(CategoryEntity categoryEntity){
		categoryRepository.delete(categoryEntity);
		return true;
	}

}
