import axios from "axios";

export class RoleService {
  getRoles() {
    return axios.get(`/api/role`).then(res => res.data.entries);
  }
}
