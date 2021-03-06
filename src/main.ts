import { Projects } from "./projects"
import { Slack } from "./slack"
import { Html } from "./html"
import { TokenCache } from "./cache"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
    const token = e.parameter["token"]
    const url = Html.createUrl(token)
    if (token == null || !TokenCache.contains(token)) return Html.get403PermissionDenied(url)
    switch (e.parameter["path"]) {
        case "projects":
            return Projects.doGet(url)
        case "project":
            return HtmlService.createHtmlOutput().setContent(e.parameter["file"])
        case "option":
            return HtmlService.createHtmlOutput().setContent("option")
    }
    return Html.get404NotFound(url)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(e: GoogleAppsScript.Events.DoPost): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    switch (e.parameter["path"]) {
        case "slack":
            return Slack.doPost(e)
        case "projects":
            return Projects.doPost(e)
    }
}
