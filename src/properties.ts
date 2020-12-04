export namespace Properties {
    const properties = PropertiesService.getScriptProperties().getProperties()

    /**
     * SAVE_DRIVE_FOLDER_ID: ファイルを保存する先
     * - https://drive.google.com/drive/folders/SAVE_DRIVE_FOLDER_ID
     */
    export const SaveDriveFolderID = properties.SAVE_DRIVE_FOLDER_ID

    /**
     * SLACK_API_TOKEN: Slack Bot の API トークン
     * - Bot User OAuth Access Token
     */
    export const SlackApiToken = properties.SLACK_API_TOKEN

    /**
     * ICON_URL: アイコンの URL
     */
    export const IconUrl = properties.ICON_URL
}
