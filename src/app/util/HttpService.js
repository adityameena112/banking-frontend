import axios from "axios"
import Constant from "../constants/Constant"

const authenticateUser = (body) => {
    return axios.post(Constant.BASE_URL + Constant.AUTHENTICATE_USER, body)
}

export { authenticateUser }