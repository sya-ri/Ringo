const ScriptCache = CacheService.getScriptCache();

export namespace AccountCache {
    let name = "accounts";

    export function add(token: string, account: string) {
        const data = getAll();
        data[token] = account;
        put(data);
    }

    export function contains(token: string): boolean {
        return token in getAll();
    }

    export function getAll(): object {
        const cache = ScriptCache.get(name);
        if (cache == null) return {};
        return JSON.parse(cache);
    }

    function put(data: object) {
        ScriptCache.put(name, JSON.stringify(data));
    }
}