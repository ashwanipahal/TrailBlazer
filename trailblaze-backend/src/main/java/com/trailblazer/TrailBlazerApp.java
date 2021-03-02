package com.trailblazer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * The Class TrailBlazerApp.
 */
@SpringBootApplication
public class TrailBlazerApp extends SpringBootServletInitializer {
	
	/**
	 * Configure.
	 *
	 * @param application the application
	 * @return the spring application builder
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(TrailBlazerApp.class);
	}

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(TrailBlazerApp.class, args);
	}
}
