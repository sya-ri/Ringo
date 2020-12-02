export namespace GoogleSpreadSheet {
    let files: { [key: string]: GoogleAppsScript.Drive.File } = {}

    export const MimeType = "application/vnd.google-apps.spreadsheet";

    export function updateFiles(folderId: string) {
        let folder = DriveApp.getFolderById(folderId);
        const fileIterator = folder.getFilesByType(GoogleSpreadSheet.MimeType);
        while(fileIterator.hasNext()) {
            const file = fileIterator.next();
            files[file.getName()] = file;
        }
    }

    export function printFiles() {
        Object.keys(files).forEach(function (name) {
            Logger.log(files[name]);
        })
    }
}