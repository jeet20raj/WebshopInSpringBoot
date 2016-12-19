package com.example.petsupplies.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.petsupplies.core.backend.entity.UserEntity;
import com.example.petsupplies.core.backend.repositories.UserRepository;

/**
 * UserSessionServiceImpl is used to login and create user.
 * 
 * @author Jeetendra
 * @version 1.0
 * @since 2015-06-12
 */
@RestController
public class UserSessionServiceImpl {
	@Autowired
	private UserRepository userRepository;

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public UserEntity login(String userName, String password) {
		UserEntity userEntity = userRepository.findByUserNameAndPassword(userName, password);
		return userEntity;
		// return userDAO.login(userName, password);
	}

	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public UserEntity createUser(@RequestBody UserEntity userEntity) {
		return userRepository.saveAndFlush(userEntity);
	}
}
