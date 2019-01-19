import React, { Component } from "react";
// import _ from "lodash";
// import moment from "moment";
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
    this.subjectService.getSubjects().then(data => {
      this.setState({ subjects: data, loading: false });
    });
  }
  render() {
    const { subjects, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not subject available"
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
