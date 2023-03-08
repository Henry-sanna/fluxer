import { get } from './services'

export default {
    login: async (data) => {
        return await get('LOGIN', data)
    },
    logout: async (data) => {
        return await get('LOGOUT', data)
    }

}