function generateAccount(): string {
    return Math.random().toString(32).substring(2);
}

function doGetLogin(e: GoogleAppsScript.Events.DoGet) {
    const token = e.parameter["token"];
    if (token == null) return;
    const output = ContentService.createTextOutput();
    output.setContent(JSON.stringify({
        "token": token
    }))
    return output;
}