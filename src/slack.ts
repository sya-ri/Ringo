import "./account"

function doPostSlack(e: GoogleAppsScript.Events.DoPost) {
    const result = ContentService.createTextOutput();
    let arguments = (e.parameter["text"] as string).split("\\s+");
    switch (arguments[0].toLowerCase()) {
        case "login":
            const token = generateAccount(e.parameter["user_id"]);
            result.setContent(ScriptApp.getService().getUrl() + "?path=login&token=" + token);
            break;
        default:
            result.setContent(JSON.stringify(e));
            break;
    }
    return result;
}