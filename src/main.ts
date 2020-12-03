import { Account } from "./account"
import { Slack } from "./slack"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput {
    switch (e.parameter["path"]) {
        case "account":
            return Account.doGet(e)
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(e: GoogleAppsScript.Events.DoPost): GoogleAppsScript.Content.TextOutput {
    switch (e.parameter["path"]) {
        case "slack":
            return Slack.doPost(e)
    }
}
