import axios from "axios";

export class UserService {
  getUsers() {
    return axios.get(`/api/user`).then(res => res.data.entries);
  }
}
