import { AccountCache, TokenCache } from "./cache"
import { GoogleSpreadSheet } from "./data/spread_sheet"

export namespace Account {
    export interface Data {
        token: string
    }

    export function generate(user_id: string): string {
        const account = AccountCache.get(user_id)
        if (account != null) return account.token
        const token = Math.random().toString(32).substring(2)
        TokenCache.add(token, user_id)
        AccountCache.add(user_id, {
            token,
        })
        return token
    }

    export function doGet(token: string): GoogleAppsScript.HTML.HtmlOutput {
        const html = HtmlService.createTemplateFromFile("html/account")
        html.paths = GoogleSpreadSheet.getFileNames()
        html.url = ScriptApp.getService().getUrl() + "?token=" + token
        return html.evaluate()
    }
}
