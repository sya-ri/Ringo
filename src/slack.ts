function doPostSlack(e: GoogleAppsScript.Events.DoPost) {
    const result = ContentService.createTextOutput();
    let arguments = (e.parameter["text"] as string).split("\\s+");
    switch (arguments[0].toLowerCase()) {
        case "login":
            result.setContent(ScriptApp.getService().getUrl());
            break;
        default:
            result.setContent(JSON.stringify(e));
            break;
    }
    return result;
}