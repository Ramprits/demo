import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SubjectService } from "../service/SubjectService";
export class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      loading: true
    };
    this.subjectService = new SubjectService();
  }
  componentWillMount() {
    debugger;
    this.subjectService.getSubjects().then(data => {
      this.setState({ subjects: data, loading: false });
      console.log(data);
    });
  }
  render() {
    const { subjects, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={subjects}
              responsive={true}
              header="Subject List"
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column field="name" header="Name" sortable={true} />
              <Column field="code" header="Code" sortable={true} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
