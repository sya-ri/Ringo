import "./properties"

function testGetDriveFiles() {
    const SpreadSheetMimeType = "application/vnd.google-apps.spreadsheet";
    const files = DriveApp.getFolderById(SaveDriveFolderID).getFilesByType(SpreadSheetMimeType);
    while(files.hasNext()) {
        const file = files.next();
        Logger.log(file.getName());
    }
}