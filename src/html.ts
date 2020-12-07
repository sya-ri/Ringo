import { Properties } from "./properties"

export namespace Html {
    export function get404NotFound(): GoogleAppsScript.HTML.HtmlOutput {
        return HtmlService.createTemplateFromFile("html/404")
            .evaluate()
            .setTitle("Ringo - 404 Not Found")
    }

    export function get403PermissionDenied(): GoogleAppsScript.HTML.HtmlOutput {
        return HtmlService.createTemplateFromFile("html/403")
            .evaluate()
            .setTitle("Ringo - 403 Permission Denied")
    }
}
