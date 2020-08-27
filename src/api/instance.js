import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6910b947-e354-4bb4-953d-2e94349784d0"
    }
})

export default instance