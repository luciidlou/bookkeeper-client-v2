import { FetchOptions } from "../../utils/FetchOptions"
import { Settings } from "../../utils/Settings"

export const AuthManager = {
    async login(user) {
        const res = await fetch(`${Settings.remoteURL}/login`, FetchOptions("LOGIN", user))
        return await res.json()
    },
    async register(newUser) {
        const res = await fetch(`${Settings.remoteURL}/register`, FetchOptions("POST", newUser))
        return await res.json()
    },
}