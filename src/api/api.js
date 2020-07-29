import instance from "./instance";


export const usersAPI = {
    getUsers(pageSize = 4, pageNumber = 1) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response=>{
                return response.data
            })
    },

    FollowToUser(userID){
        return instance.post('follow/' + userID)
            .then(response=>{
                return response.data
            })
    },

    UnfollowFromUser(userID){
        return instance.delete('follow/' + userID)
            .then(response=>{
                return response.data
            })
    }
}


export const profileAPI = {
    getProfile(userID){
        return instance.get('profile/' + userID)
            .then(response=>{
                return response.data
            })
    }
}


