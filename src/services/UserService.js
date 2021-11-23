import axios from "axios";

const API_URL = "http://34.126.103.12:5000/api/";

class UserService {
  getAllUser(){
    return axios.get(API_URL + "users")
  }

  getPdf(hw,std_id){
    return axios.get(API_URL + "users/hw"+hw, { params : {std_id : std_id},responseType: 'blob'})
  }
}

export default new UserService();
