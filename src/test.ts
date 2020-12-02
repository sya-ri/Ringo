import "./@types/slack"
import { Properties} from "./properties"
import { GoogleSpreadSheet } from "./data/spread_sheet"

function testGetDriveFiles() {
    GoogleSpreadSheet.updateFiles(Properties.SaveDriveFolderID)
    GoogleSpreadSheet.printFiles()
}

function testAuthSlackBot() {
    Logger.log(SlackApp.create(Properties.SlackApiToken).authTest())
}