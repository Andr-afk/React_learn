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
    }
}

export const headerAPI = {
    authMe(){
         return instance.get('auth/me')
             // .then(response => {
             //     if (response.data.resultCode === 0) {
             //         this.props.setAuthUserData(response.data.data)
             //
             //         axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + response.data.data.id)
             //             .then(response => {
             //                 let image_source = response.data.photos.small || default_avatar
             //                 this.props.setImagesUsers(image_source)
             //             })
             //     }
             //
             // })
             .then(response=>{
                 return response.data
             })

    }
}


