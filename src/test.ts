import "./@types/slack"
import { Properties } from "./properties"
import { GoogleSpreadSheet } from "./data/spread_sheet"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function testGetDriveFiles() {
    GoogleSpreadSheet.updateFiles(Properties.SaveDriveFolderID)
    GoogleSpreadSheet.printFiles()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function testAuthSlackBot() {
    Logger.log(SlackApp.create(Properties.SlackApiToken).authTest())
}
