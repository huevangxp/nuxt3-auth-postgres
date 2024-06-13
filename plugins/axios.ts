import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const api = axios.create({
        baseURL: 'https://dummyjson.com'
    })

    return {
        provide: {
            axios: api
        }
    }
})
