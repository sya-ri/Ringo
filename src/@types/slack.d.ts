declare var SlackApp: Slack.App;

declare namespace Slack {
    interface App {
        create(token: string): API;
    }

    interface API {
        authTest(): object;
    }
}