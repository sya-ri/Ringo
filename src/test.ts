import "./properties"
import "./@types/slack"
import { GoogleSpreadSheet } from "./data/spread_sheet"

function testGetDriveFiles() {
    GoogleSpreadSheet.updateFiles(SaveDriveFolderID)
    GoogleSpreadSheet.printFiles()
}

function testAuthSlackBot() {
    Logger.log(SlackApp.create(SlackApiToken).authTest())
}