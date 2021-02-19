import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Card from '@material-ui/core/Card';
import SortIcon from '@material-ui/icons/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../features/users';
import { searchUser } from '../../features/users/users.actions';
import { getFullName } from '../../features/users/users.helper';
import './UserTable.css';

const columnConfig = [
  {
    name: 'email',
    selector: (rowData: any) => {
      return rowData.email;
    },
    sortable: true,
  },
  {
    name: 'Full Name',
    sortable: true,
    selector: (rowData: any) => {
      return getFullName(rowData);
    },
  },
  {
    name: 'username',
    sortable: true,
    selector: (rowData: any) => {
      return `${rowData.login.username}`;
    },
  },
  {
    name: 'Thumbnail Icon',
    sortable: false,
    selector: (rowData: any) => {
      return (
        <img
          alt={rowData.email}
          src={rowData.picture.thumbnail}
          style={{ width: 30, borderRadius: '50%' }}
        />
      );
    },
  },
];
export const UserTable: React.FC = () => {
  const users = useSelector(selectors.getUsers);
  console.log(users);
  const page = useSelector(selectors.getPage);
  const results = useSelector(selectors.getResults);
  const seed = useSelector(selectors.getSeed);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [columns, setColumns] = useState(columnConfig);
  let isLoading = useSelector(selectors.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(page, results, seed));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePageChange = (pageIndex: number, totalRow: number) => {
    dispatch(searchUser(pageIndex, results, seed));
  };

  const handlePerRowsChange = async (
    currentRowsPerPage: number,
    currentPage: number,
  ) => {
    dispatch(searchUser(currentPage, currentRowsPerPage, seed));
  };
  return (
    <div className="table-users">
      <Card>
        <DataTable
          title="List users from api /randomuser"
          sortIcon={<SortIcon />}
          columns={columns}
          keyField="email"
          defaultSortField="Full Name"
          data={users}
          progressPending={isLoading}
          pagination
          paginationServer
          paginationTotalRows={100}
          paginationDefaultPage={page}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
        />
      </Card>
    </div>
  );
};
