package com.example.petsupplies.core.backend.dao.impl;

import java.util.logging.Level;

import javax.persistence.NoResultException;
import javax.persistence.PersistenceException;
import javax.persistence.TypedQuery;
import javax.transaction.NotSupportedException;

import com.example.petsupplies.core.backend.dao.BaseDAO;
import com.example.petsupplies.core.backend.dao.UserDAO;
import com.example.petsupplies.core.backend.entity.AddressEntity;
import com.example.petsupplies.core.backend.entity.UserEntity;
import com.example.petsupplies.core.backend.repositories.UserRepository;
import com.example.petsupplies.core.common.constants.Constants;
import com.example.petsupplies.core.exceptions.WebshopException;

/**
 * UserDAOImpl is used to search user in DB and create user.
 * 
 * @author Jeetendra
 * @version 1.0
 * @since 2015-06-12
 */
public class UserDAOImpl extends BaseDAO implements UserDAO {
	/**
	 * @param user
	 *            name and password
	 * @return user This method is used for user login based on user name and
	 *         password
	 */
	
	private UserRepository userRepository;
	
	
	public UserEntity login(String userName, String password) {
		logger.info("UserDAOImpl :: login method starts");
		try {
			utx.begin();
			TypedQuery<UserEntity> queryResults = entityManager
					.createNamedQuery(Constants.QueryConstants.FIND_USER,
							UserEntity.class);
			queryResults.setParameter("userName", userName);
			queryResults.setParameter("password", password);
			UserEntity userEntity = queryResults.getSingleResult();
			logger.log(Level.FINE, "UserDAOImpl :: login method ends");
			userEntity.getAddressList().size();
			utx.commit();
			return userEntity;
		} catch (NoResultException e) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: login ends with exception :: ", e);
		} catch (PersistenceException ex) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: login ends with exception :: ", ex);
		} catch (NotSupportedException e) {
			// TODO Auto-generated catch block
		} catch (Exception e) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: login ends with exception :: ", e);
		}
		return null;
	}

	/**
	 * @param user
	 * @return user This method is used to register user into application
	 */
	public UserEntity createUser(UserEntity userEntity) {
		logger.info("UserDAOImpl :: create method starts");
		try {
			TypedQuery<UserEntity> queryResults = entityManager
					.createNamedQuery(
							Constants.QueryConstants.FIND_USER_BY_NAME,
							UserEntity.class);

			queryResults.setParameter("userName", userEntity.getUserName());
			UserEntity entity = queryResults.getSingleResult();
			if (null != entity) {
				WebshopException exception = new WebshopException(
						Constants.USER_ALREADY_EXISTS,
						Constants.USER_ALREADY_EXISTS);
				throw exception;
			}
		} catch (NoResultException e) {
			logger.log(Level.SEVERE, "UserDAOImpl :: User Not Exist ", e);
		}
		try {
			utx.begin();
			//entityManager.persist(userEntity);
			userRepository.saveAndFlush(userEntity);
			utx.commit();
			return userEntity;
		} catch (PersistenceException e) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: create method ends exception :: ", e);
		}catch (Exception e) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: login ends with exception :: ", e);
		}
		logger.log(Level.INFO, "UserDAOImpl :: create method ends");
		return null;
	}

	/**
	 * @param AddressEntity
	 * @return AddressEntity This method is used to save home and shipping
	 *         address of user.
	 */
	public AddressEntity saveAddress(AddressEntity addressEntity) {
		logger.info("UserDAOImpl :: saveAddress method starts");
		try {
			entityManager.persist(addressEntity);
			return addressEntity;
		} catch (PersistenceException e) {
			logger.log(Level.SEVERE,
					"UserDAOImpl :: create method ends exception :: ", e);
		}
		logger.log(Level.INFO, "UserDAOImpl :: create method ends");
		return null;
	}

}
