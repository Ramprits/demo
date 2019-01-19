import axios from "axios";

export class SubjectService {
  getSubjects() {
    return axios.get(`/api/subject`).then(res => res.data.entries);
  }
}
