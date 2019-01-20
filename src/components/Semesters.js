import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SemesterService } from "../service/SemesterService";
export class Semesters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesters: [],
      loading: true
    };
    this.semesterService = new SemesterService();
  }
  componentWillMount() {
    this.semesterService.getSemester().then(data => {
      this.setState({ semesters: data, loading: false });
    });
  }
  render() {
    const { semesters, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not Semester available"
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={semesters}
              responsive={true}
              header="Semester List"
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column field="name" header="Name" sortable={true} />
              <Column field="addedById" header="Added By" sortable={true} />
              <Column field="addedDate" header="Added Date" sortable={true} />
              <Column
                field="modifiedById"
                header="Modified By"
                sortable={true}
              />
              <Column
                field="modifiedDate"
                header="Modified Date"
                sortable={true}
              />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
