import { Properties } from "./properties"

export namespace Html {
    export function get404NotFound(): GoogleAppsScript.HTML.HtmlOutput {
        return HtmlService.createHtmlOutputFromFile("html/404")
            .setTitle("Ringo - 404 Not Found")
            .setFaviconUrl(Properties.FaviconUrl)
    }

    export function get403PermissionDenied(): GoogleAppsScript.HTML.HtmlOutput {
        return HtmlService.createHtmlOutputFromFile("html/403")
            .setTitle("Ringo - 403 Permission Denied")
            .setFaviconUrl(Properties.FaviconUrl)
    }
}
