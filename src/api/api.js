import axios from "axios"

const token  = localStorage.getItem('ZyklonX_PhaseDoom')
export const api = axios.create({
    baseURL:'http://localhost:4000/api/v1',
    headers:{
        'Authorization':token
    }
})

