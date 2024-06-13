import {defineStore} from "pinia";

export const apiUser = defineStore('apiUser', {
    state: () => ({
        authenticated: false,
    }),
    actions: {
       async Login(data: object) {
            try {
                // get cookie to set token
                 const cookie = useCookie('token')
                const {$axios} = useNuxtApp()
                await $axios.post('/auth/login', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res)=> {
                    cookie.value = res.data.token
                    this.authenticated = true;
                })

            }catch (e) {
                console.log(e)
            }
        },
         Logout() {
            const cookie = useCookie('token')
            cookie.value = null
            this.authenticated = false
        }
    },


})