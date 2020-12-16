import { GoogleSpreadSheet } from "./data/spread_sheet"
import { Html } from "./html"

export namespace Projects {
    export function doGet(url: string): GoogleAppsScript.HTML.HtmlOutput {
        const html = Html.template("html/projects", url)
        html.projects = getProjects(url)
        return Html.evaluate(html, "Projects")
    }

    export function getProjects(url: string): string {
        const tree = function (files: { [folder: string]: GoogleSpreadSheet.Data[] }): string {
            let body = ""
            let childTree = ""
            Object.keys(files).forEach((folder) => {
                const length = files[folder].length
                if (length != 0) {
                    body += "<ul class='tree'>"
                    for (let i = 0; i < length; i++) {
                        const f = files[folder][i]
                        if (f.isFile) {
                            body += "<li class='tree-child'><a href='"
                            body += url + "&path=project&file=" + (f.path + f.name)
                            body += "' target='_top'>"
                            body += f.name
                            body += "</a></li>"
                        } else {
                            const treeId = "tree@" + folder + "/" + f.name
                            const onClick = "onclick='toggleTreeVisible(\"" + treeId + "\")'"
                            childTree +=
                                "<li class='tree' " + onClick + "><p>" + f.name + "</p></li>"
                            childTree += "<ul id='" + treeId + "'>" + tree(f.folder) + "</ul>"
                        }
                    }
                    body += "</ul>"
                }
            })
            return body + childTree
        }
        return tree(GoogleSpreadSheet.getFiles())
    }
}
