package com.trailblazer.services.impl;

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
import org.springframework.stereotype.Service;
import com.trailblazer.demo.models.ContactInformation;
import com.trailblazer.demo.models.SeatInfo;
import com.trailblazer.services.TrailblazerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The Class TrailblazerServiceImpl.
 */
@Service
public class TrailblazerServiceImpl implements TrailblazerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(TrailblazerServiceImpl.class);
	
	/**
	 * Gets the contact details map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the contact details map
	 */
	@Override
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
			LOGGER.error("File can't be found {}",fileNotFoundException.getMessage());
		} catch (IOException ioException) {
			LOGGER.error("Unable to connect to file {}",ioException.getMessage());
		}
		return contactInfoMap;
	}

	/**
	 * Gets the seat map.
	 *
	 * @param excelFilePath the excel file path
	 * @return the seat map
	 */
	@Override
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
			LOGGER.error("File can't be found {}",fileNotFoundException.getMessage());
		} catch (IOException ioException) {
			LOGGER.error("Unable to connect to file {}",ioException.getMessage());
		}
		return seatMap;
	}

	@Override
	public String getImagePath() {
		return "https://i.ibb.co/pJtbwjN/Copy-of-Menu-Template-Made-with-Poster-My-Wall.jpg";
	}
}
