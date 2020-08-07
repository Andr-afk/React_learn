import instance from "./instance";


export const usersAPI = {
    loadUsers(pageSize = 4, pageNumber = 1) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response=>{
                return response.data
            })
    },

    followToUser(userID){
        return instance.post('follow/' + userID)
            .then(response=>{
                return response.data
            })
    },

    unfollowFromUser(userID){
        return instance.delete('follow/' + userID)
            .then(response=>{
                return response.data
            })
    }
}


export const profileAPI = {
    loadProfile(userID){
        return instance.get('profile/' + userID)
            .then(response=>{
                return response.data
            })
    },

    loadStatus(userID){
        return instance.get('profile/status/' + userID)
            .then(response=>{
                return response.data
            })
    },

    updateStatus(status_text){
        return instance.put('/profile/status', {status: status_text})
            .then(response=>{
                return response.data
            })
    }
}

export const headerAPI = {
    authMe(){
         return instance.get('auth/me')
             .then(response=>{
                 return response.data
             })

    },

    loginMe(email, password, rememberMe){
        return instance.post("/auth/login", {email, password, rememberMe})
            .then(response=>{
                return response.data
            })
    }

}


