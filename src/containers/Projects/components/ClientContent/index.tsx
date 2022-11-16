/**
 *
 * ClientContent
 *
 */

import React, { useMemo, useState } from 'react';
import { Box, Button, DropDownWrapper, Flex, IconWrapper, P } from 'components';
import { Span } from 'components';
import styled from '@emotion/styled';
import { InputDotMenu } from 'components/IconWrapper/Global';
import { CustomTableOnTabs } from 'components/TableContainer/components/CustomTableOnTabs';
import { actions, sliceKey, reducer } from '../AddOrEditClientModal/slice';
import { addOrEditClientModalSaga } from '../AddOrEditClientModal/saga';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddOrEditClientModal } from '../AddOrEditClientModal';
import { FormControl, InputGroup } from 'react-bootstrap';

export const tableInfo = {
  tableName: 'clients',
  columns: [
    {
      id: 'name',
      value: 'name',
      checked: true,
      label: 'Name',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'status',
      value: 'status',
      checked: true,
      label: 'Status',
      isTitleHidden: false,
      isSortDisabled: true,
    },
  ],
};

export function ClientContent(props: any) {
  useInjectReducer({
    key: sliceKey,
    reducer: reducer,
  });
  useInjectSaga({ key: sliceKey, saga: addOrEditClientModalSaga });

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const listClients = [
    {
      id: 1,
      name: 'Qualee',
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'TransportMe',
      status: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Faba',
      status: 'ACTIVE',
    },
  ];

  const listActions = [
    {
      id: 1,
      name: 'Edit',
    },
    {
      id: 2,
      name: 'Delete',
    },
    {
      id: 3,
      name: 'Inactive',
    },
  ];

  const data = useMemo(
    () =>
      listClients?.map(item => {
        return {
          name: (
            <P color="dimGray" className="mb-0">
              {item.name}
            </P>
          ),
          status: (
            <Span
              color={item.status === 'ACTIVE' ? 'primaryGreen' : 'dimGray'}
              fontWeight="medium"
              className="mb-0 px-2 py-1"
            >
              {item.status}
            </Span>
          ),
          actions: (
            <DropDownWrapper
              id="actions"
              background="transparent"
              color="primaryWhite"
              icon={
                <IconWrapper
                  size="small"
                  icon={InputDotMenu}
                  fill="primaryWhite"
                />
              }
            >
              <Flex py="m" px="l" flexDirection="column" width="250px">
                <Flex flexDirection="column">
                  {listActions.map((action: any) => (
                    <Span
                      key={action.id}
                      className="cursor-pointer"
                      onClick={() => {}}
                    >
                      {action.name}
                    </Span>
                  ))}
                </Flex>
              </Flex>
            </DropDownWrapper>
          ),
        };
      }),
    [],
  );

  return (
    <Box mt="xl">
      <HeaderContentWrapper className="mb-2">
        <Button
          variant="primary"
          mt="m"
          onClick={() => {
            dispatch(actions.setEventClickButton({ showModal: true }));
          }}
        >
          {'Add New Client'}
        </Button>
        <InputGroupWrapper>
          <FormControl
            id="search"
            type="text"
            placeholder={'Search by name'}
            color="dimGray"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </InputGroupWrapper>
      </HeaderContentWrapper>
      <CustomTableOnTabs
        listItemTable={listClients}
        table={tableInfo}
        data={data}
      />
      <AddOrEditClientModal />
    </Box>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

const InputGroupWrapper = styled(InputGroup)<any>`
  position: relative;
  width: 300px;

  .form-control {
    border-radius: 3px !important;
  }
`;
