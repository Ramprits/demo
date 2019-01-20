import axios from "axios";

export class DivisionService {
  getDivision() {
    return axios.get(`/api/division`).then(res => res.data.entries);
  }
}
