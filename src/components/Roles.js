import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { RoleService } from "../service/RoleService";
export class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      loading: true
    };
    this.roleService = new RoleService();
  }
  componentWillMount() {
    this.roleService.getRoles().then(data => {
      this.setState({ roles: data, loading: false });
    });
  }
  render() {
    const { roles, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not Role available"
              loading={loading}
              loadingIcon="fas fa-spinner"
              value={roles}
              responsive={true}
              header="Role List"
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
              <Column
                field="description"
                header="Description"
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
