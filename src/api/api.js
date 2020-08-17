import instance from "./instance";


export const usersAPI = {
    async loadUsers(pageSize = 4, pageNumber = 1) {
        let response = await instance.get(`users?count=${pageSize}&page=${pageNumber}`)
        return response.data
    },

    async followToUser(userID){
        let response = await instance.post('follow/' + userID)
        return response.data
    },

    async unfollowFromUser(userID){
        let response = await instance.delete('follow/' + userID)
        return response.data
    }
}

export const profileAPI = {
    async loadProfile(userID){
        let response = await instance.get('profile/' + userID)
        return response.data
    },

    async loadStatus(userID){
        let response = await instance.get('profile/status/' + userID)
        return response.data
    },

    async updateStatus(status_text){
        let response = await instance.put('/profile/status', {status: status_text})
        return response.data
    }
}

export const AuthAPI = {

    async authMe(){
        let response = await instance.get('auth/me')
        return response.data
    },

    async loginMe(email, password, rememberMe){
        let response = await instance.post("/auth/login", {email, password, rememberMe})
        return response.data
    },

    async logoutMe(){
        let response = await instance.delete("auth/login")
        return response.data
    }

}


