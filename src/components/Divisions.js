import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { StandardService } from "../service/StandardService";
export class Divisions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisions: [],
      loading: true
    };
    this.standardService = new StandardService();
  }
  componentWillMount() {
    this.standardService.getStandard().then(data => {
      this.setState({ divisions: data, loading: false });
    });
  }
  render() {
    const { divisions, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not Division available"
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={divisions}
              responsive={true}
              header="Division List"
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
