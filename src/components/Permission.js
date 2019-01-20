import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { PermissionService } from "../service/PermisionService";
export class Permission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permission: [],
      loading: true
    };
    this.permissionService = new PermissionService();
  }
  componentWillMount() {
    this.permissionService.getPermission().then(data => {
      this.setState({ permission: data, loading: false });
    });
  }
  render() {
    const { permission, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not subject available"
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={permission}
              responsive={true}
              header="Permission List"
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column field="name" header="Name" sortable={true} />
              <Column
                field="displayName"
                header="Display Name"
                sortable={true}
              />
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
