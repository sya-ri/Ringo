import { AccountCache, TokenCache } from "./cache"
import { Html } from "./html"
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

    export function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
        const token = e.parameter["token"]
        if (token == null || !TokenCache.contains(token)) return Html.get404NotFound()
        const html = HtmlService.createTemplateFromFile("html/account")
        html.paths = GoogleSpreadSheet.getFileNames()
        return html.evaluate()
    }
}
