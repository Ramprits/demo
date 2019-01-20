import axios from "axios";

export class StandardService {
  getStandard() {
    return axios.get(`/api/standard`).then(res => res.data.entries);
  }
}
