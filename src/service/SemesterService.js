import axios from "axios";

export class SemesterService {
  getSemester() {
    return axios.get(`/api/semester`).then(res => res.data.entries);
  }
}
