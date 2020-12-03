import { Account } from "./account"
import { Slack } from "./slack"

/* eslint-disable @typescript-eslint/no-unused-vars */
function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.Content.TextOutput {
    switch (e.parameter["path"]) {
        case "account":
            return Account.doGet(e)
    }
}

function doPost(e: GoogleAppsScript.Events.DoPost): GoogleAppsScript.Content.TextOutput {
    switch (e.parameter["path"]) {
        case "slack":
            return Slack.doPost(e)
    }
}
/* eslint-enable @typescript-eslint/no-unused-vars */
