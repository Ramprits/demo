import axios from "axios";

export class SubjectService {
  getSubjects() {
    return axios
      .get(`http://apis.stanthonyhighschool.com/api/subject`)
      .then(res => res.data.entries);
  }
}
