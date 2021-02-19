import MaterialTable from 'material-table';
import './UserList.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../features/users';
import {
  changeOrder,
  searchUser,
  updateLoading,
} from '../../features/users/users.actions';
import { getFullName } from '../../features/users/users.helper';

const columnConfig = [
  {
    title: 'Full Name',
    field: 'fullName',
    sorting: true,
    render: (rowData: any) => {
      return getFullName(rowData);
    },
  },
  // {
  //   title: 'Email',
  //   field: 'email',
  //   sorting: true,
  //   render: (rowData: any) => {
  //     return rowData.email
  //   },
  // },
  {
    title: 'Username',
    field: 'username',
    sorting: true,
    render: (rowData: any) => {
      return `${rowData.login.username}`;
    },
  },
  {
    title: 'Thumbnail Icon',
    field: 'thumbnailIcon',
    sorting: false,
    render: (rowData: any) => {
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

const options = {
  search: false,
  pageSizeOptions: [10, 20, 50, 100],
  pageSize: 10,
  paging: true,
  filtering: false,
  exportButton: false,
  headerStyle: {
    backgroundColor: '#01579b',
    color: '#FFF',
  },
};

export const UserList: React.FC = () => {
  const COLUMNS_DEFAULT_SORT_KEY = 'defaultSort';
  const users = useSelector(selectors.getUsers);
  const page = useSelector(selectors.getPage);
  const results = useSelector(selectors.getResults);
  const seed = useSelector(selectors.getSeed);
  const totalCount = 100;
  const [columns, setColumns] = useState(columnConfig);
  let isLoading = useSelector(selectors.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(page, results, seed));
  }, []);
  return (
    <div className="listUserContainer center">
      <MaterialTable
        title="List users from api /randomuser"
        totalCount={totalCount}
        data={users}
        page={page - 1}
        columns={columns}
        options={options}
        isLoading={isLoading}
        onOrderChange={(orderBy, orderDirection) => {
          updateOrder(orderBy, orderDirection);
        }}
        onChangePage={(pageIndex, pageSize) => searchUsers(pageIndex, pageSize)}
      />
    </div>
  );

  function searchUsers(pageIndex: number, pageSize: number) {
    if (!isLoading) {
      dispatch(searchUser(pageIndex + 1, pageSize, seed));
    }
  }

  function updateOrder(orderBy: number, orderDirection: string) {
    if (orderBy >= 0 && orderDirection) {
      console.log(`Changing order to ${orderBy}:${orderDirection}`);
      setColumns(
        columns.map((c, i) => {
          if (i !== orderBy) {
            // @ts-ignore
            delete c[COLUMNS_DEFAULT_SORT_KEY];
          } else {
            // @ts-ignore
            c[COLUMNS_DEFAULT_SORT_KEY] = orderDirection;
          }
          return c;
        }),
      );
    }

    dispatch(updateLoading(true));
    setTimeout(() => {
      if (orderBy >= 0 && orderDirection) {
        dispatch(changeOrder(columns[orderBy].field, orderDirection));
      }
      dispatch(updateLoading(false));
    }, 200);
  }
};
