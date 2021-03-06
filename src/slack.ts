import { Account } from "./account"

export namespace Slack {
    export function doPost(e: GoogleAppsScript.Events.DoPost): GoogleAppsScript.Content.TextOutput {
        const result = ContentService.createTextOutput()
        const arg = (e.parameter["text"] as string).split(RegExp("\\s+"))
        if (arg[0] == e.parameter["command"]) arg.shift()
        switch (arg[0].toLowerCase()) {
            case "login":
                result.setContent(
                    ScriptApp.getService().getUrl() +
                        "?path=projects&token=" +
                        Account.generate(e.parameter["user_id"]),
                )
                break
            default:
                result.setContent(JSON.stringify(e))
                break
        }
        return result
    }
}
