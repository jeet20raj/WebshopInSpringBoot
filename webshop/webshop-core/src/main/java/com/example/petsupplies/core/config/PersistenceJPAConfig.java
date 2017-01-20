package com.example.petsupplies.core.config;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.support.AbstractPlatformTransactionManager;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories("com.example.petsupplies.core.backend.repositories")
public class PersistenceJPAConfig{
 

	    @Bean
	    public AbstractPlatformTransactionManager transactionManager() {
	        return new JpaTransactionManager(entityManagerFactory());
	    	// new DataSourceTransactionManager(dataSource());
	    }

	    @Bean
	    public EntityManagerFactory entityManagerFactory() {
	        final LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
	        bean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
	        bean.setPersistenceUnitName("webshopPU");
	        bean.setDataSource(dataSource());
	        final Properties props = new Properties();
	        props.setProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
	        props.setProperty("hibernate.hbm2ddl.auto", "create");
	        props.setProperty("hibernate.show_sql", "true");
	        props.setProperty("hibernate.format_sql", "true");
	        bean.setJpaProperties(props);
	        bean.setPackagesToScan("com.example.petsupplies.core.backend");
	        bean.afterPropertiesSet();
	        return bean.getObject();
	    }

	    @Bean
	    public DataSource dataSource() {
	        final JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
	        dsLookup.setResourceRef(true);
	        DataSource dataSource = dsLookup.getDataSource("java:jboss/datasources/ExampleDS");
	        return dataSource;
	    }
}
