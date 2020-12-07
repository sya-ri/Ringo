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
}
