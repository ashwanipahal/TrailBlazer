package com.trailblazer.services;

import java.io.File;
import java.util.Map;

/**
 * The Interface TrailblazerService.
 */
public interface TrailblazerService {
	
	/**
	 * Gets the contact details map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the contact details map
	 */
	Map<String, Long> getContactDetailsMap(File excelFilePath);
	
	/**
	 * Gets the seat map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the seat map
	 */
	Map<String, String> getSeatMap(File excelFilePath);
	
	/**
	 * Gets the image path.
	 *
	 * @return the image path
	 */
	String getImagePath();
}
