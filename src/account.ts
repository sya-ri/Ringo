import "./cache"

export namespace Account {
    export function generate(account: string): string {
        const token = Math.random().toString(32).substring(2);
        AccountCache.add(token, account)
        return token;
    }

    export function doGet(e: GoogleAppsScript.Events.DoGet) {
        const token = e.parameter["token"];
        if (token == null) return;
        const output = ContentService.createTextOutput();
        output.setContent(JSON.stringify({
            "token": token,
            "valid": AccountCache.contains(token),
            "accounts": AccountCache.getAll()
        }))
        return output;
    }
}