import "./properties"
import { GoogleSpreadSheet } from "./data/spread_sheet"

function testGetDriveFiles() {
    GoogleSpreadSheet.updateFiles(SaveDriveFolderID)
    GoogleSpreadSheet.printFiles()
}