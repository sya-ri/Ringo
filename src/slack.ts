import { Account } from "./account"

export namespace Slack {
    export function doPost(e: GoogleAppsScript.Events.DoPost) {
        const result = ContentService.createTextOutput()
        let arg = (e.parameter["text"] as string).split("\\s+")
        switch (arg[0].toLowerCase()) {
            case "login":
                const token = Account.generate(e.parameter["user_id"])
                result.setContent(ScriptApp.getService().getUrl() + "?path=account&token=" + token)
                break
            default:
                result.setContent(JSON.stringify(e))
                break
        }
        return result
    }
}
