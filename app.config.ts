export interface NuxtAwesomeConfig {
    name?: String;
    description?: String
}

declare module '@nuxt/schema' {
    interface AppConfigInput {
        awesome?: NuxtAwesomeConfig
    }
}

export default defineAppConfig({
    awesome: {
        name: 'Encyclopedia',
        description: 'Encyclopedia is a user-generated content hub aiming to provide a comprehensive record for scientific developments. All content free to post, read, share and reuse.',
    } as NuxtAwesomeConfig
})
