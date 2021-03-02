package com.trailblazer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.trailblazer.demo.models.ContactInformation;
import com.trailblazer.demo.models.SeatInfo;

/**
 * The Class TrailBlazerController.
 */
@RestController
public class TrailBlazerController {
	
	/** The home. */
	String home = System.getProperty("user.home");
	
	/** The seat file. */
	File seatFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"SeatInformation.xlsx");
	
	/** The contact file. */
	File contactFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"ContactInformation.xlsx");

	/**
	 * Find seat details.
	 *
	 * @param sid the sid
	 * @return the string
	 */
	@GetMapping("/api/findSeat")
	public Map<String, List<Double>> findSeatDetails(@RequestParam(name = "id") String sid) {
		Map<String,List<Double>> dataOut = new HashMap<>();
		List<Double> listOfValue = new ArrayList<>();
		String value = getSeatMap(seatFile).get(sid);
		listOfValue.add(Double.valueOf(value.split(",")[0]));
		listOfValue.add(Double.valueOf(value.split(",")[1]));
		dataOut.put(sid, listOfValue);
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
		return getContactDetailsMap(contactFile).get(cid);
	}
	
	/**
	 * Fetch food menu image.
	 *
	 * @return the string
	 */
	@GetMapping("/api/getFoodMenuImage")
	public String fetchFoodMenuImage() {
		return "https://i.ibb.co/pJtbwjN/Copy-of-Menu-Template-Made-with-Poster-My-Wall.jpg";
	}

	/**
	 * Gets the seat map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the seat map
	 */
	public Map<String, String> getSeatMap(File excelFilePath) {
		Map<String, String> seatMap = new HashMap<>();

		try (final FileInputStream inputStream = new FileInputStream(excelFilePath);
				final XSSFWorkbook workbook = new XSSFWorkbook(inputStream)) {
			final XSSFSheet firstSheet = workbook.getSheetAt(0);
			final Iterator<Row> rowIterator = firstSheet.iterator();
			List<String> excelCellsData = null;
			while (rowIterator.hasNext()) {
				excelCellsData = new ArrayList<>();
				Row row = rowIterator.next();
				if (row.getRowNum() == 0) {
					continue;
				}
				Iterator<Cell> cellIterator = row.cellIterator();
				final SeatInfo seatInfo = new SeatInfo();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					if (cell.getCellType() == CellType.STRING) {
						excelCellsData.add(cell.getStringCellValue());
					}
				}
				seatInfo.setId(excelCellsData.get(0));
				seatInfo.setLatLong(excelCellsData.get(1));
				seatMap.put(seatInfo.getId(), seatInfo.getLatLong());
			}
		} catch (FileNotFoundException fileNotFoundException) {
			fileNotFoundException.getMessage();
		} catch (IOException ioException) {
			ioException.getMessage();
		} catch (Exception exp) {
			exp.getMessage();
		}
		return seatMap;
	}

	/**
	 * Gets the contact details map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the contact details map
	 */
	public Map<String, Long> getContactDetailsMap(File excelFilePath) {
		Map<String, Long> contactInfoMap = new HashMap<>();

		try (final FileInputStream inputStream = new FileInputStream(excelFilePath);
				final XSSFWorkbook workbook = new XSSFWorkbook(inputStream)) {
			final XSSFSheet firstSheet = workbook.getSheetAt(0);
			final Iterator<Row> rowIterator = firstSheet.iterator();

			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				if (row.getRowNum() == 0) {
					continue;
				}
				Iterator<Cell> cellIterator = row.cellIterator();
				final ContactInformation contactInformation = new ContactInformation();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					switch (cell.getCellType()) {
					case STRING:
						contactInformation.setContactId(cell.getStringCellValue());
						break;
					case NUMERIC:
						contactInformation.setContactNo((long) cell.getNumericCellValue());
						break;
					default:
						break;
					}
				}
				contactInfoMap.put(contactInformation.getContactId(), contactInformation.getContactNo());
			}
		} catch (FileNotFoundException fileNotFoundException) {
			fileNotFoundException.getMessage();
		} catch (IOException ioException) {
			ioException.getMessage();
		} catch (Exception exp) {
			exp.getMessage();
		}
		return contactInfoMap;
	}
}
