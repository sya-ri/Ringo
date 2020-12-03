import { Account } from "./account"

const ScriptCache = CacheService.getScriptCache()

export namespace TokenCache {
    let name = "tokens"

    export function add(token: string, user_id: string) {
        ScriptCache.put(token, user_id)
    }

    export function contains(token: string): boolean {
        return ScriptCache.get(token) != null
    }

    export function getAll(): { [key: string]: string } {
        const cache = ScriptCache.get(name)
        if (cache == null) return {}
        return JSON.parse(cache)
    }
}

export namespace AccountCache {
    let name = "accounts"

    export function add(user_id: string, account_data: Account.Data) {
        const data = getAll()
        data[user_id] = account_data
        put(data)
    }

    export function get(user_id: string): Account.Data | null {
        return getAll()[user_id]
    }

    export function contains(user_id: string): boolean {
        return get(user_id) != null
    }

    export function getAll(): { [key: string]: Account.Data } {
        const cache = ScriptCache.get(name)
        if (cache == null) return {}
        return JSON.parse(cache)
    }

    function put(data: { [key: string]: Account.Data }) {
        ScriptCache.put(name, JSON.stringify(data))
    }
}
