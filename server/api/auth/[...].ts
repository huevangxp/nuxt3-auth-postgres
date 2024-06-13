import {NuxtAuthHandler} from '#auth'
import GitHubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
    secret: 'our-secret-that-nobody-knows',
    providers: [
        GitHubProvider({
            clientId: '',
            clientSecret: ''
        })
    ]
})