package com.example.petsupplies.core.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petsupplies.core.backend.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	UserEntity findByUserNameAndPassword(String userName, String password);
}
