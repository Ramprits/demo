import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { StandardService } from "../service/StandardService";
export class Standards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standards: [],
      loading: true
    };
    this.standardService = new StandardService();
  }
  componentWillMount() {
    this.standardService.getStandard().then(data => {
      this.setState({ standards: data, loading: false });
    });
  }
  render() {
    const { standards, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not Standard available"
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={standards}
              responsive={true}
              header="Standard List"
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column field="name" header="Name" sortable={true} />
              <Column field="addedBy" header="Added By" sortable={true} />
              <Column field="addedDate" header="Added Date" sortable={true} />
              <Column field="modifiedBy" header="Modified By" sortable={true} />
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
