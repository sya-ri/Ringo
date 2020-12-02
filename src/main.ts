import { Account } from "./account"
import { Slack } from "./slack"

function doGet(e: GoogleAppsScript.Events.DoGet) {
    switch (e.parameter["path"]) {
        case "account":
            return Account.doGet(e)
    }
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
    switch (e.parameter["path"]) {
        case "slack":
            return Slack.doPost(e)
    }
}
