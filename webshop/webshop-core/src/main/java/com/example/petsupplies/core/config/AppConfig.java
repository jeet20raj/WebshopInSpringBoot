package com.example.petsupplies.core.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


/**
 * AppConfig provides java based configuration for this spring based application .
 * @author Jeetendra
 * @version 1.0
 * @since 2015-10-05
 */

@EnableWebMvc
@Configuration
@ComponentScan({"com.example.petsupplies.core" })
public class AppConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("index.html").addResourceLocations("/index.html");
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
    @Bean
    public ViewResolver getViewResolver() {
    	InternalResourceViewResolver resourceViewResolver =  new InternalResourceViewResolver();
    	resourceViewResolver.setPrefix("/");
    	resourceViewResolver.setSuffix(".html");
    	return resourceViewResolver;
    }
	/*@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("GET", "HEAD", "OPTIONS", "POST", "PUT")
        .allowedHeaders("Origin"," Accept"," X-Requested-With"," Content-Type"," Access-Control-Request-Method"," Access-Control-Request-Headers")
        .allowCredentials(true).maxAge(3600);
	}*/
	/*@Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }*/
}
