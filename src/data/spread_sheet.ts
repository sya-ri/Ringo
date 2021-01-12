import { Properties } from "../properties"

export namespace GoogleSpreadSheet {
    export interface Data {
        path: string
        name: string
        isFile: boolean
        file: GoogleAppsScript.Drive.File
        folder: { [name: string]: Data[] }
    }

    let files: { [folder: string]: Data[] }

    export const MimeType = "application/vnd.google-apps.spreadsheet"

    export function updateFiles(folderId: string): void {
        const getFiles = function (parent: string, folder: GoogleAppsScript.Drive.Folder) {
            const files = {}
            files[parent] = []
            const fileIterator = folder.getFilesByType(GoogleSpreadSheet.MimeType)
            const childFolderIterator = folder.getFolders()
            while (childFolderIterator.hasNext()) {
                const childFolder = childFolderIterator.next()
                const name = childFolder.getName()
                files[parent].push({
                    path: parent + "/",
                    name: name,
                    isFile: false,
                    file: null,
                    folder: getFiles(parent + "/" + name, childFolder),
                })
            }
            while (fileIterator.hasNext()) {
                const file = fileIterator.next()
                files[parent].push({
                    path: parent + "/",
                    name: file.getName(),
                    isFile: true,
                    file: file,
                    folder: null,
                })
            }
            return files
        }
        files = getFiles("", DriveApp.getFolderById(folderId))
    }

    export function getFiles(): { [folder: string]: Data[] } {
        if (files == null) updateFiles(Properties.SaveDriveFolderID)
        return files
    }

    export function getOrCreateFolder(path: string[]): GoogleAppsScript.Drive.Folder | null {
        if (path.length != 0) {
            let parent = DriveApp.getFolderById(Properties.SaveDriveFolderID)
            path.forEach((p) => {
                parent = parent.createFolder(p)
            })
            return parent
        } else {
            return null
        }
    }

    export function createNewSheet(name: string, folder: GoogleAppsScript.Drive.Folder): void {
        const sheet = SpreadsheetApp.create(name)
        const file = DriveApp.getFileById(sheet.getId())
        folder.addFile(file)
        DriveApp.getRootFolder().removeFile(file)
    }
}
