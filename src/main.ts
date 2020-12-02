import "./account"
import "./slack"

function myFunction() {

}

function doGet(e: GoogleAppsScript.Events.DoGet) {
    switch (e.parameter["path"]) {
        case "login":
            return doGetLogin(e)
    }
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
    switch (e.parameter["path"]) {
        case "slack":
            return doPostSlack(e)
    }
}
