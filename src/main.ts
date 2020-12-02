import "./slack"

function myFunction() {

}

function doGet() {

}

function doPost(e: GoogleAppsScript.Events.DoPost) {
    switch (e.parameter["path"]) {
        case "slack":
            return doPostSlack(e)
    }
}
