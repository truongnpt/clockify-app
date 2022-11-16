/**
 *
 * MemberContent
 *
 */

import React, { useMemo, useState } from 'react';
import { Box, Button, DropDownWrapper, Flex, IconWrapper, P } from 'components';
import { Span } from 'components';
import { FormControl, InputGroup } from 'react-bootstrap';
import styled from '@emotion/styled';
import { InputDotMenu } from 'components/IconWrapper/Global';
import { CustomTableOnTabs } from 'components/TableContainer/components/CustomTableOnTabs';
import { actions, sliceKey, reducer } from '../AddOrEditMemberModal/slice';
import { addOrEditMemberModalSaga } from '../AddOrEditMemberModal/saga';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddOrEditMemberModal } from '../AddOrEditMemberModal';

export const tableInfo = {
  tableName: 'members',
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
      id: 'email',
      value: 'email',
      checked: true,
      label: 'Email',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'role',
      value: 'role',
      checked: true,
      label: 'Role',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'groups',
      value: 'groups',
      checked: true,
      label: 'Groups',
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

export function MemberContent(props: any) {
  useInjectReducer({
    key: sliceKey,
    reducer: reducer,
  });
  useInjectSaga({ key: sliceKey, saga: addOrEditMemberModalSaga });

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const listMembers = [
    {
      id: 1,
      name: 'TruongNP',
      email: 'truongnp@fabatechnology.com',
      role_name: 'Employee',
      role_color: '#9d9d9d',
      status: 'ACTIVE',
      groups: ['Developer'],
    },
    {
      id: 2,
      name: 'TungNT',
      email: 'tungnt@fabatechnology.com',
      role_name: 'Project Manager',
      role_color: '#03a9f4',
      status: 'ACTIVE',
      groups: ['Developer', 'Manager'],
    },
    {
      id: 3,
      name: 'AnHT',
      email: 'anht@fabatechnology.com',
      role_name: 'Fresher',
      role_color: '#cacaca',
      status: 'INACTIVE',
      groups: ['Developer'],
    },
    {
      id: 4,
      name: 'ChauNTM',
      email: 'chauntm@fabatechnology.com',
      role_name: 'Admin',
      role_color: 'primaryGreen',
      status: 'ACTIVE',
      groups: ['Human Resources'],
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
      listMembers?.map(item => {
        return {
          name: (
            <P color="primaryGreen" className="mb-0">
              {item.name}
            </P>
          ),
          email: (
            <P color="dimGray" className="mb-0">
              {item.email}
            </P>
          ),
          role: (
            <Span color="white" bg={item.role_color} className="mb-0 px-2 py-1">
              {item.role_name}
            </Span>
          ),
          groups: (
            <P className="mb-0">
              {item.groups.map(group => {
                return (
                  <Span
                    key={group}
                    color="primaryGreen"
                    bg="primaryGreenTransparent"
                    className="d-inline-block px-2 py-1 me-1 mb-1"
                  >
                    {group}
                  </Span>
                );
              })}
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
          {'Add New Member'}
        </Button>
        <InputGroupWrapper>
          <FormControl
            id="search"
            type="text"
            placeholder={'Search by name or email'}
            color="dimGray"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </InputGroupWrapper>
      </HeaderContentWrapper>
      <CustomTableOnTabs
        listItemTable={listMembers}
        table={tableInfo}
        data={data}
      />
      <AddOrEditMemberModal />
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
