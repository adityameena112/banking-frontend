import axios from "axios"
import Constant from "../constants/Constant"

const authenticateUser = (body) => {
    return axios.post(Constant.BASE_URL + Constant.AUTHENTICATE_USER, body)
}

const registerUser = (body) => {
    return axios.post(Constant.BASE_URL + Constant.REGISTER_USER, body)
}

const fetchUserAccountList = () => {
    return axios.request({
        url: Constant.FETCH_USER_ACCOUNT_LIST,
        method: 'get',
        baseURL: Constant.BASE_URL,
        headers: {
            // 'content-type': 'application/json' ,
            'Authorization': "Bearer " + localStorage.getItem('token')
        }
    })
}

export { authenticateUser, fetchUserAccountList, registerUser }