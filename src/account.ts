import { AccountCache, TokenCache } from "./cache"

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

    export function doGet(e: GoogleAppsScript.Events.DoGet) {
        const token = e.parameter["token"]
        if (token == null) return
        const output = ContentService.createTextOutput()
        output.setContent(
            JSON.stringify({
                "token": token,
                "valid": TokenCache.contains(token),
                "tokens": TokenCache.getAll(),
                "accounts": AccountCache.getAll(),
            }),
        )
        return output
    }
}
