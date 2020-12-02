import "./cache"

function generateAccount(account: string): string {
    const token = Math.random().toString(32).substring(2);
    AccountCache.add(token, account)
    return token;
}

function doGetLogin(e: GoogleAppsScript.Events.DoGet) {
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