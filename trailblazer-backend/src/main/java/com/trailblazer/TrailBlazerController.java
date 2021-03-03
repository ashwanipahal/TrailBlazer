package com.trailblazer;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trailblazer.services.TrailblazerService;

/**
 * The Class TrailBlazerController.
 */
@RestController
public class TrailBlazerController {
	
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(TrailBlazerController.class);
	
	/** The comma. */
	private final String COMMA = ",";
	
	/** The home. */
	String home = System.getProperty("user.home");
	
	/** The seat file. */
	File seatFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"SeatInformation.xlsx");
	
	/** The contact file. */
	File contactFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"ContactInformation.xlsx");
	
	/** The service. */
	@Autowired
	private TrailblazerService service;

	/**
	 * Find seat details.
	 *
	 * @param sid the sid
	 * @return the string
	 */
	@GetMapping("/api/findSeat")
	public Map<String, List<Double>> findSeatDetails(@RequestParam(name = "id") String sid) {
		LOGGER.debug("findSeatDetails method execution start");
		Map<String,List<Double>> dataOut = new HashMap<>();
		List<Double> listOfValue = new ArrayList<>();
		String value = service.getSeatMap(seatFile).get(sid);
		listOfValue.add(Double.valueOf(value.split(COMMA)[0]));
		listOfValue.add(Double.valueOf(value.split(COMMA)[1]));
		dataOut.put(sid, listOfValue);
		LOGGER.debug("findSeatDetails method execution end");
		return dataOut;
	}

	/**
	 * Fetch contact details.
	 *
	 * @param cid the cid
	 * @return the long
	 */
	@GetMapping("/api/getContactInfo")
	public Long fetchContactDetails(@RequestParam(name = "id") String cid) {
		LOGGER.debug("inside fetchContactDetails method");
		return service.getContactDetailsMap(contactFile).get(cid);
	}
	
	/**
	 * Fetch food menu image.
	 *
	 * @return the string
	 */
	@GetMapping("/api/getFoodMenuImage")
	public String fetchFoodMenuImage() {
		LOGGER.debug("inside fetchFoodMenuImage method");
		return service.getImagePath();
	}
}
