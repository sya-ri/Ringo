import { GoogleSpreadSheet } from "./data/spread_sheet"

export namespace Projects {
    export function doGet(token: string): GoogleAppsScript.HTML.HtmlOutput {
        const html = HtmlService.createTemplateFromFile("html/projects")
        html.paths = GoogleSpreadSheet.getFileNames()
        html.url = ScriptApp.getService().getUrl() + "?token=" + token
        return html.evaluate()
    }
}
