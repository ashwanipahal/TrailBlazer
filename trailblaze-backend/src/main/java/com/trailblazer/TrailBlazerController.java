package com.trailblazer;
 
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
 
import org.apache.poi.ss.usermodel.Cell;
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
               
                String home = System.getProperty("user.home");
                File seatFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"SeatInformation.xlsx");
                File contactFile = new File(home + File.separator + "DemoSpreadsheets"+ File.separator +"ContactInformation.xlsx");
 
                /**
                * Find seat details.
                *
                * @param sid the sid
                * @return the string
                */
                @GetMapping("/findSeat")
                public String findSeatDetails(@RequestParam(name = "id") String sid) {
                                return getSeatMap(seatFile).get(Long.parseLong(sid));
                }
 
                /**
                * Fetch contact details.
                *
                * @param cid the cid
                * @return the long
                */
                @GetMapping("/getContactInfo")
                public Long fetchContactDetails(@RequestParam(name = "id") String cid) {
                                return getContactDetailsMap(contactFile).get(cid);
                }
 
                /**
                * Gets the seat map.
                *
                * @param excelFilePath the excel file path
                * @return the seat map
                */
                public Map<Long, String> getSeatMap(File excelFilePath) {
                                Map<Long, String> seatMap = new HashMap<>();
 
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
                                                                final SeatInfo seatInfo = new SeatInfo();
                                                                while (cellIterator.hasNext()) {
                                                                                Cell cell = cellIterator.next();
                                                                                switch (cell.getCellType()) {
                                                                                case NUMERIC:
                                                                                                seatInfo.setId((long) (cell.getNumericCellValue()));
                                                                                                break;
                                                                                case STRING:
                                                                                                seatInfo.setName(cell.getStringCellValue());
                                                                                                break;
                                                                                default:
                                                                                                break;
                                                                                }
                                                                }
                                                                seatMap.put(seatInfo.getId(), seatInfo.getName());
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