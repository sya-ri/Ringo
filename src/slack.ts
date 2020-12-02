function doPostSlack(e: GoogleAppsScript.Events.DoPost) {
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify(e));
    return output;
}