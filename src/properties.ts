export namespace Properties {
    const Properties = PropertiesService.getScriptProperties().getProperties()

    /**
     * SAVE_DRIVE_FOLDER_ID: ファイルを保存する先
     * - https://drive.google.com/drive/folders/SAVE_DRIVE_FOLDER_ID
     */
    export const SaveDriveFolderID = Properties.SAVE_DRIVE_FOLDER_ID

    /**
     * SLACK_API_TOKEN: Slack Bot の API トークン
     * - Bot User OAuth Access Token
     */
    export const SlackApiToken = Properties.SLACK_API_TOKEN
}
