import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "797474b9-50fc-4fc9-a76e-e3b283259805"
    }
})

export default instance