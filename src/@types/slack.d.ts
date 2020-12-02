declare var SlackApp: SlackApp.App;

declare namespace SlackApp {
    interface App {
        create(token: string): API;
    }

    interface API {
        authTest(): object;
    }
}