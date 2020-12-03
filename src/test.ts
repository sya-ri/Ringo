import "./@types/slack"
import { Properties } from "./properties"
import { GoogleSpreadSheet } from "./data/spread_sheet"

/* eslint-disable @typescript-eslint/no-unused-vars */
function testGetDriveFiles() {
    GoogleSpreadSheet.updateFiles(Properties.SaveDriveFolderID)
    GoogleSpreadSheet.printFiles()
}

function testAuthSlackBot() {
    Logger.log(SlackApp.create(Properties.SlackApiToken).authTest())
}
/* eslint-enable @typescript-eslint/no-unused-vars */
