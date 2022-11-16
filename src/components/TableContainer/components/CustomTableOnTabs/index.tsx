import styled from '@emotion/styled';
import { TableColumnHeader } from 'components/TableColumnHeader';
import React, { useMemo } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';
import { useExpanded, usePagination, useSortBy, useTable } from 'react-table';
import { ColumnTable, TableInfo } from 'types/table';
import { HEIGHT_ROW } from 'lib/constants/tableConstants';

interface Props {
  listItemTable: any;
  data: any;
  table: TableInfo;
}

export function CustomTableOnTabs (props: Props) {
  const { data, table } = props;

  const columns = useMemo(() => {
    let columnsRender: ColumnTable[] = [];
    if (table.tableName) {
      table.columns?.map((column, index) => {
        if (column.checked) {
          columnsRender.push({
            Header: p => (
              <TableColumnHeader
                title={column.label.toUpperCase()}
                isTitleHidden={column.isTitleHidden}
                isSorted={p.isSorted}
                isSortedDesc={p.isSortedDesc}
                key={index}
                isSortDisabled={column.isSortDisabled}
              />
            ),
            disableSortBy: true,
            accessor: column.id,
          });
        }
      });
    }

    columnsRender.push({
      Header: '',
      accessor: 'actions',
    });

    return columnsRender;
  }, [table.columns, table.tableName]);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 1000,
      },
      autoResetExpanded: false,
      autoResetSortBy: false,
    },
    useSortBy,
    useExpanded,
    usePagination,
  );

  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(
                  column.getSortByToggleProps({ title: '' }),
                )}
              >
                {column.render('Header', {
                  isSorted: column.isSorted,
                  isSortedDesc: column.isSortedDesc,
                })}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled(TableBootstrap)<any>`
  thead,
  tbody {
    padding: 0 !important;
    border-top: none !important;
  }

  thead {
    tr {
      background-color: ${props => props.theme.colors.white} !important;
      border-bottom: 1px solid ${p => p.theme.colors.northeastSnow};
      th {
        padding: 18px 8px !important;
        border-top: none;
        border-bottom: none;
        vertical-align: middle;
      }
    }
  }

  tbody {
    tr {
      height: ${HEIGHT_ROW};
      background-color: ${props => props.theme.colors.white} !important;
      border-bottom: 1px solid ${p => p.theme.colors.northeastSnow};
      td {
        padding: 8px !important;
        border-top: none;
        border-bottom: none;
        vertical-align: middle;
      }
    }
  }
`;
