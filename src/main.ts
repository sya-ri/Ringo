import { Account } from "./account"
import { Slack } from "./slack"
import { Html } from "./html"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doGet(
    e: GoogleAppsScript.Events.DoGet,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    switch (e.parameter["path"]) {
        case "account":
            return Account.doGet(e)
    }
    return Html.get404NotFound()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(
    e: GoogleAppsScript.Events.DoPost,
): GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput {
    switch (e.parameter["path"]) {
        case "slack":
            return Slack.doPost(e)
    }
    return Html.get404NotFound()
}
