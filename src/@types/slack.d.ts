declare let SlackApp: SlackApp.App

declare namespace SlackApp {
    interface App {
        create(token: string): API
    }

    interface API {
        authTest(): AuthTest
    }

    interface AuthTest {
        ok: boolean
        url: string
        team: string
        user: string
        team_id: string
        user_id: string
    }
}
