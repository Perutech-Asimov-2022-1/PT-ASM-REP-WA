import axios from "axios";
import authHeader from '@/services/auth-header'

export default axios.create({
    baseURL: 'http://appserviceasimov.azurewebsites.net/api/v1',
    headers: authHeader()
})