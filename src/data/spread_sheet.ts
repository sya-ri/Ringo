export namespace GoogleSpreadSheet {
    let files: { [key: string]: GoogleAppsScript.Drive.File }

    export const MimeType = "application/vnd.google-apps.spreadsheet"

    export function updateFiles(folderId: string) {
        files = {}
        let addFiles = function (parent: string, folder: GoogleAppsScript.Drive.Folder) {
            const fileIterator = folder.getFilesByType(GoogleSpreadSheet.MimeType)
            while (fileIterator.hasNext()) {
                const file = fileIterator.next()
                files[parent + "/" + file.getName()] = file
            }
            let childFolderIterator = folder.getFolders()
            while (childFolderIterator.hasNext()) {
                const childFolder = childFolderIterator.next()
                addFiles(parent + "/" + childFolder.getName(), childFolder)
            }
        }
        addFiles("", DriveApp.getFolderById(folderId))
    }

    export function printFiles() {
        Object.keys(files).forEach(function (name) {
            Logger.log(name)
        })
    }
}