import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserService } from "../service/UserService";
export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
    this.userService = new UserService();
  }
  componentWillMount() {
    this.userService.getUsers().then(data => {
      this.setState({ users: data, loading: false });
    });
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <DataTable
              emptyMessage="There are not subject available"
              loading={loading}
              selectionMode="single"
              loadingIcon="fas fa-spinner"
              value={users}
              responsive={true}
              header="Role List"
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column field="username" header="Username" sortable={true} />
              <Column field="email" header="Email" sortable={true} />
              <Column field="Mobile" header="Mobile" sortable={true} />
              <Column field="firstName" header="First Name" sortable={true} />
              <Column field="lastName" header="Last Name" sortable={true} />
              <Column field="role" header="Role" sortable={true} />
              <Column field="standard" header="Standard" sortable={true} />

              <Column field="standard" header="Standard" sortable={true} />

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
