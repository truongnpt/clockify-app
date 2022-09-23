import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Table as TableBootstrap } from 'react-bootstrap';
import { Flex } from 'components';
import styled from '@emotion/styled';
import { TableColumnHeader } from '../TableColumnHeader';
import { ColumnTable, TableInfo } from 'types/table';
import { PaginationShort } from '../Pagination';
import { Links, Meta } from 'types/pagination';
import {
  HEIGHT_ROW,
  HEIGHT_SUB_ROW,
  TableConstants,
} from 'lib/constants/tableConstants';

interface Props {
  listItemTable?: any;
  data: any;
  meta?: Meta | null;
  links?: Links | null;
  table: TableInfo;
  isFirstColumnNotCenter?: boolean;
  pageSize?: number;
  showSelectRow?: boolean;
  onSelectedChange?: (data: any) => void;
}

export const Table = (props: Props) => {
  const {
    data,
    meta,
    links,
    table,
    isFirstColumnNotCenter,
    pageSize,
    showSelectRow,
    onSelectedChange,
  } = props;
  const { tableName } = table;
  const {
    ACTION_PENDING_REVIEWS,
    ACTION_STATUSES,
    ACTION_SEQUENCES,
  } = TableConstants;
  const tableShowColumnClient = [
    ACTION_PENDING_REVIEWS,
    ACTION_STATUSES,
    ACTION_SEQUENCES,
  ];

  const [selectedRow, setSelectedRow] = useState<any>([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const onChange = evt => {
    const value = evt.target.checked;
    setIsSelectedAll(value);
    if (!value) {
      setSelectedRow([]);
    } else {
      setSelectedRow([...data.map((d, i) => i)]);
    }
  };

  const onSelectedRowChange = (isChecked: boolean, index: number) => {
    if (isChecked) {
      selectedRow.push(index);
    } else {
      const i = selectedRow.indexOf(index);
      selectedRow.splice(i, 1);
    }
    setSelectedRow([...selectedRow]);
    if (selectedRow.length === data.length) {
      setIsSelectedAll(true);
    } else {
      setIsSelectedAll(false);
    }
  };

  const columns = useMemo(() => {
    let columnsRender: ColumnTable[] = [];
    if (tableName) {
      table.columns?.map(column => {
        if (column.checked) {
          columnsRender.push({
            Header: p => (
              <TableColumnHeader
                title={column.label.toUpperCase()}
                isTitleHidden={column.isTitleHidden}
                isSorted={p.isSorted}
                isSortedDesc={p.isSortedDesc}
                isSortDisabled={column.isSortDisabled}
              />
            ),
            disableSortBy: column.isSortDisabled,
            accessor: column.id,
          });
        }
      });
    }
    if (tableShowColumnClient.includes(tableName)) {
      columnsRender.push({
        Header: 'Client',
        accessor: 'client',
        isSortDisabled: true,
      });
    }
    columnsRender.push({
      Header: '',
      accessor: 'actions',
    });
    return columnsRender;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.columns, tableName]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // pagination
    page,
    setPageSize,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      manualSorting: true,
      manualSortBy: true,
      initialState: {
        pageSize: pageSize,
        sortBy: [],
      },
    },
    useSortBy,
    usePagination,
  );

  const handleSort = useCallback(
    sortBy => {

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tableName],
  );

  useEffect(() => {
    onSelectedChange && onSelectedChange(selectedRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRow]);

  useEffect(() => {
    handleSort(sortBy);
  }, [handleSort, sortBy, tableName]);

  useEffect(() => {
    setPageSize(pageSize);
  }, [pageSize, setPageSize, table, tableName]);

  const renderCheckboxHeader = () => {
    if (!showSelectRow) {
      return null;
    }
    return (
      <th>
        <Flex
          alignItems="baseline"
        >
          <Flex width="max-content" alignItems="center" textAlign="end">
            <input
              type="checkbox"
              checked={isSelectedAll}
              onChange={evt => onChange(evt)}
            />
          </Flex>
        </Flex>
      </th>
    );
  };

  const renderCheckboxColumn = (index: number) => {
    if (!showSelectRow) {
      return null;
    }
    return (
      <td>
        <input
          type="checkbox"
          checked={isSelectedAll || selectedRow.indexOf(index) > -1}
          onChange={evt => onSelectedRowChange(evt.target.checked, index)}
        />
      </td>
    );
  };

  return (
    <div>
      <TableContainer
        {...getTableProps()}
        isFirstColumnNotCenter={isFirstColumnNotCenter}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {renderCheckboxHeader()}
              {
                headerGroup.headers.map(column => (
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
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {renderCheckboxColumn(index)}
                {
                  row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
      {meta && links && (
        <PaginationShort
          tableName={tableName}
          pageSize={10}
          meta={meta}
          links={links}
        />
      )}
    </div>
  );
};

export const TableContainer = styled(TableBootstrap)<any>`
  margin-bottom: 0;
  th,
  td {
    padding: ${props => props.theme.space.s};
    vertical-align: middle !important;
    text-align: ${props => (props.isRtl ? 'right' : 'initial')};
  }

  tbody tr {
    height: ${HEIGHT_ROW};
    background-color: ${props => props.theme.colors.white};
  }

  tbody tr.sub-row {
    height: ${HEIGHT_SUB_ROW};
  }

  thead th {
    border: none;
  }

  tbody tr > td:first-of-type {
    text-align: right;
    padding: 5px;
    width: 50px;
    span {
      margin-top: ${props => props.theme.space.xs};
    }
  }

  .sub-row td {
    border-top: none;
  }

  .sub-row td:nth-of-type(2) span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  tbody tr > td:first-of-type {
    text-align: ${p => p.isFirstColumnNotCenter && 'left'};
    padding-left: ${p => p.isFirstColumnNotCenter && '50px'};
    width: ${p => p.isFirstColumnNotCenter && 'auto'};
    span {
      margin-top: ${p => p.isFirstColumnNotCenter && 0};
    }
  }

  thead tr > th:first-of-type {
    padding-left: ${p => p.isFirstColumnNotCenter && '50px'};
  }
`;
