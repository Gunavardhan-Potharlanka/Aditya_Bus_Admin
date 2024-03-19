import axios from "axios"

export const apiConfig = {
    API_SERVER:''
}


const token  = localStorage.getItem('ZyklonX_PhaseDoom')
export const api = axios.create({
    baseURL: apiConfig.API_SERVER,
    headers:{
        'Authorization':token
    }
})

