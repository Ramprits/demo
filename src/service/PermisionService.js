import axios from "axios";

export class PermissionService {
  getPermission() {
    return axios.get(`/api/permission`).then(res => res.data.entries);
  }
}
