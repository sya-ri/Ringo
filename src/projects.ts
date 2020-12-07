import { GoogleSpreadSheet } from "./data/spread_sheet"
import { Html } from "./html"

export namespace Projects {
    export function doGet(url: string): GoogleAppsScript.HTML.HtmlOutput {
        const html = Html.template("html/projects", url)
        html.paths = GoogleSpreadSheet.getFileNames()
        return Html.evaluate(html, "Projects")
    }
}
