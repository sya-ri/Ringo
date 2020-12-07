export namespace Html {
    export function template(filename: string, url: string): GoogleAppsScript.HTML.HtmlTemplate {
        const html = HtmlService.createTemplateFromFile(filename)
        html.url = url
        return html
    }

    export function evaluate(
        template: GoogleAppsScript.HTML.HtmlTemplate,
        title: string,
    ): GoogleAppsScript.HTML.HtmlOutput {
        return template.evaluate().setTitle("Ringo - " + title)
    }

    export function get404NotFound(url: string): GoogleAppsScript.HTML.HtmlOutput {
        return evaluate(template("html/404", url), "404 Not Found")
    }

    export function get403PermissionDenied(url: string): GoogleAppsScript.HTML.HtmlOutput {
        return evaluate(template("html/403", url), "403 Permission Denied")
    }
}
