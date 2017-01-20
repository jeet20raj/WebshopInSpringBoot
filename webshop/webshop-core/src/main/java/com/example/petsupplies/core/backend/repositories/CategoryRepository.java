package com.example.petsupplies.core.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petsupplies.core.backend.entity.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
	CategoryEntity findByCategoryName(String categoryName);
}
